import Link from "next/link";
import { site } from "@/content/site";

export function SiteHeader() {
  return (
    <header className="border-b border-rule/70">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center gap-x-6 gap-y-1 px-6 py-3.5">
        <Link
          href="/"
          className="flex min-h-6 items-center font-mono text-sm font-medium tracking-tight text-bone hover:text-brass"
        >
          abhijit<span className="text-brass">.</span>kumar
        </Link>

        <nav aria-label="Primary" className="ml-auto flex items-center gap-5">
          <Link
            href="/#work"
            className="flex min-h-6 items-center px-0.5 py-1 text-sm text-ash hover:text-bone"
          >
            Work
          </Link>
          <Link
            href="/about/"
            className="flex min-h-6 items-center px-0.5 py-1 text-sm text-ash hover:text-bone"
          >
            About
          </Link>
          <a
            href={site.resume}
            className="flex min-h-6 items-center px-0.5 py-1 text-sm text-ash hover:text-bone"
            download
          >
            Résumé
          </a>
          <a
            href={`mailto:${site.email}`}
            className="flex min-h-6 items-center px-0.5 py-1 text-sm font-medium text-brass underline-offset-4 hover:underline"
          >
            Email
          </a>
        </nav>
      </div>
    </header>
  );
}
