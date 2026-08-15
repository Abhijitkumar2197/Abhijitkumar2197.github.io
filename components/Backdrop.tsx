"use client";

import { useEffect, useRef } from "react";

/**
 * Animated constellation backdrop — the Vanta "NET" look, hand-rolled on a 2D
 * canvas so it costs ~4kB instead of pulling in three.js (~600kB).
 *
 * Nodes drift slowly and link to nearby neighbours; the cursor pulls the field
 * gently toward it. Deliberately dark and low-contrast so it reads as depth
 * behind the type, never as decoration competing with it.
 *
 * Guards: disabled entirely under prefers-reduced-motion, paused when the tab
 * is hidden or the page is scrolled past the hero, DPR capped at 2, and node
 * count scaled to viewport area.
 */
export function Backdrop() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (reduce.matches) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let dpr = 1;
    let raf = 0;
    let running = true;
    let inView = true;

    type Node = { x: number; y: number; vx: number; vy: number; r: number };
    let nodes: Node[] = [];

    const pointer = { x: -9999, y: -9999, active: false };

    const BRASS = "224, 164, 88";
    const STEEL = "125, 160, 190";

    const build = () => {
      const rect = canvas.getBoundingClientRect();
      // Can measure 0 if we mount before layout, or inside a hidden/
      // background tab. Bail rather than allocating a 0x0 buffer — the
      // ResizeObserver below will call us again once there is a real size.
      if (rect.width < 2 || rect.height < 2) return false;

      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      canvas.width = Math.floor(w * dpr);
      canvas.height = Math.floor(h * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      // ~1 node per 16k px², clamped. Keeps phones light and desktops full.
      const count = Math.round(
        Math.max(26, Math.min(88, (w * h) / 14000)),
      );

      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.16,
        vy: (Math.random() - 0.5) * 0.16,
        r: Math.random() * 1.6 + 1.0,
      }));
      return true;
    };

    const LINK = 165; // px at which nodes stop linking
    const PULL = 168; // cursor influence radius

    const draw = () => {
      ctx.clearRect(0, 0, w, h);

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;

        // wrap rather than bounce — no visible edges
        if (n.x < -20) n.x = w + 20;
        if (n.x > w + 20) n.x = -20;
        if (n.y < -20) n.y = h + 20;
        if (n.y > h + 20) n.y = -20;

        if (pointer.active) {
          const dx = pointer.x - n.x;
          const dy = pointer.y - n.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < PULL * PULL && d2 > 1) {
            const d = Math.sqrt(d2);
            const f = (1 - d / PULL) * 0.35;
            n.x += (dx / d) * f;
            n.y += (dy / d) * f;
          }
        }
      }

      // links
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 > LINK * LINK) continue;
          const d = Math.sqrt(d2);
          const t = 1 - d / LINK;
          ctx.strokeStyle = `rgba(${STEEL}, ${t * 0.34})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.stroke();
        }
      }

      // nodes
      for (const n of nodes) {
        const near =
          pointer.active &&
          Math.hypot(pointer.x - n.x, pointer.y - n.y) < PULL;
        ctx.fillStyle = near
          ? `rgba(${BRASS}, 0.95)`
          : `rgba(${BRASS}, 0.62)`;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fill();
      }

      if (running && inView) raf = requestAnimationFrame(draw);
    };

    const start = () => {
      if (raf) cancelAnimationFrame(raf);
      running = true;
      raf = requestAnimationFrame(draw);
    };
    const stop = () => {
      running = false;
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
    };

    const ensure = () => {
      if (nodes.length === 0) {
        if (!build()) return;
      }
      if (inView && !document.hidden) start();
    };

    build();
    ensure();

    // Recovers the case where the canvas had no size at mount (hidden tab,
    // pre-layout hydration) and gets one later.
    const ro = new ResizeObserver(() => {
      if (build()) {
        if (inView && !document.hidden) start();
      }
    });
    ro.observe(canvas);

    let resizeTimer: number;
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        build();
        if (running) start();
      }, 180);
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType === "touch") return;
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.active = true;
    };
    const onLeave = () => {
      pointer.active = false;
      pointer.x = pointer.y = -9999;
    };

    // Stop painting once the hero has scrolled away, and when the tab is hidden.
    const io = new IntersectionObserver(
      ([entry]) => {
        inView = entry.isIntersecting;
        if (inView && !document.hidden) ensure();
        else stop();
      },
      { threshold: 0 },
    );
    io.observe(canvas);

    const onVisibility = () => {
      if (document.hidden) stop();
      else if (inView) ensure();
    };

    const onReduceChange = () => {
      if (reduce.matches) {
        stop();
        ctx.clearRect(0, 0, w, h);
      } else if (inView) start();
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);
    document.addEventListener("visibilitychange", onVisibility);
    reduce.addEventListener("change", onReduceChange);

    return () => {
      stop();
      io.disconnect();
      ro.disconnect();
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
      document.removeEventListener("visibilitychange", onVisibility);
      reduce.removeEventListener("change", onReduceChange);
    };
  }, []);

  return <canvas ref={ref} className="backdrop__canvas" aria-hidden="true" />;
}
