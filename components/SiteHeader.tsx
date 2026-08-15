import Link from "next/link";
import { site } from "@/content/site";

const nav = [
  { href: "/#work", label: "Work", id: "work" },
  { href: "/#capabilities", label: "Skills", id: "capabilities" },
  { href: "/about/", label: "About" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="site-header__inner mx-auto flex max-w-5xl flex-wrap items-center gap-x-6 gap-y-1 px-6 py-4">
        <Link
          href="/"
          className="flex min-h-6 items-center font-mono text-sm font-medium tracking-tight text-bone transition-colors hover:text-brass"
        >
          abhijit<span className="text-brass">.</span>kumar
        </Link>

        <nav aria-label="Primary" className="ml-auto flex items-center gap-1">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              {...(item.id ? { "data-nav": "" } : {})}
              className="flex min-h-6 items-center rounded-sm px-2.5 py-1.5 text-sm text-ash transition-colors hover:text-bone data-[active=true]:text-bone"
            >
              {item.label}
            </Link>
          ))}

          {/* Contact is the conversion action, so it gets the only button in
              the header rather than being a fourth grey text link. */}
          <a
            href={`mailto:${site.email}`}
            className="btn-primary ml-2 flex min-h-6 items-center rounded-full px-4 py-1.5 text-sm font-semibold"
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
