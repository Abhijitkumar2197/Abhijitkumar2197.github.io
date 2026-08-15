"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Progressive enhancement only — everything here is chrome, never content.
 * If this never runs the page is fully readable and fully navigable.
 *
 * Handles: header condense-on-scroll, back-to-top, active nav section,
 * and the proof-strip count-up.
 */
export function Chrome() {
  const [showTop, setShowTop] = useState(false);
  const counted = useRef(false);

  useEffect(() => {
    const header = document.querySelector<HTMLElement>(".site-header");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const onScroll = () => {
      const y = window.scrollY;
      if (header) header.dataset.stuck = y > 12 ? "true" : "false";
      setShowTop(y > 900);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    // Active nav link
    const links = new Map<string, HTMLAnchorElement>();
    document
      .querySelectorAll<HTMLAnchorElement>("[data-nav][href]")
      .forEach((a) => {
        const id = a.getAttribute("href")?.split("#")[1];
        if (id) links.set(id, a);
      });

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          links.forEach((a) => a.removeAttribute("data-active"));
          links.get(e.target.id)?.setAttribute("data-active", "true");
        });
      },
      { rootMargin: "-30% 0px -60% 0px" },
    );
    links.forEach((_, id) => {
      const el = document.getElementById(id);
      if (el) sectionObserver.observe(el);
    });

    // Count-up on the proof numerals. Only touches nodes that opt in with
    // data-count-to, and writes the final value immediately if reduced motion.
    const nums = document.querySelectorAll<HTMLElement>("[data-count-to]");
    const runCount = (el: HTMLElement) => {
      const target = parseFloat(el.dataset.countTo || "0");
      const prefix = el.dataset.countPrefix || "";
      const suffix = el.dataset.countSuffix || "";
      const decimals = (el.dataset.countTo || "").split(".")[1]?.length ?? 0;
      if (reduce) {
        el.textContent = `${prefix}${target.toFixed(decimals)}${suffix}`;
        return;
      }
      const dur = 1100;
      const t0 = performance.now();
      const tick = (now: number) => {
        const p = Math.min((now - t0) / dur, 1);
        const eased = 1 - Math.pow(1 - p, 3);
        el.textContent = `${prefix}${(target * eased).toFixed(decimals)}${suffix}`;
        if (p < 1) requestAnimationFrame(tick);
      };
      requestAnimationFrame(tick);
    };

    const countObserver = new IntersectionObserver(
      (entries) => {
        if (counted.current) return;
        if (entries.some((e) => e.isIntersecting)) {
          counted.current = true;
          nums.forEach(runCount);
          countObserver.disconnect();
        }
      },
      { threshold: 0.5 },
    );
    if (nums.length) countObserver.observe(nums[0]);

    return () => {
      window.removeEventListener("scroll", onScroll);
      sectionObserver.disconnect();
      countObserver.disconnect();
    };
  }, []);

  return (
    <button
      type="button"
      className="to-top grid h-11 w-11 place-items-center rounded-full border border-rule bg-slate text-brass hover:border-brass"
      data-show={showTop ? "true" : "false"}
      aria-label="Back to top"
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
            ? "auto"
            : "smooth",
        })
      }
    >
      <svg
        width="17"
        height="17"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="m18 15-6-6-6 6" />
      </svg>
    </button>
  );
}
