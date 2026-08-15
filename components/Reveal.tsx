/**
 * Server component. The reveal is a scroll-driven CSS animation (see
 * globals.css), so no JavaScript is involved and content can never be left
 * hidden by a failed bundle — browsers without animation-timeline just show it.
 */
export function Reveal({
  children,
  className = "",
  as: Tag = "section",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "section" | "article";
}) {
  return <Tag className={`reveal ${className}`}>{children}</Tag>;
}
