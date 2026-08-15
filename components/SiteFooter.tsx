import { site } from "@/content/site";

/** Generated at build time — a stale date reads as an abandoned site. */
const lastUpdated = new Date().toLocaleDateString("en-GB", {
  day: "numeric",
  month: "long",
  year: "numeric",
});

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-rule/70">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-wrap gap-x-10 gap-y-6">
          <div className="min-w-[14rem]">
            <p className="font-mono text-2xs uppercase tracking-[0.18em] text-ash">
              Contact
            </p>
            <ul className="mt-3 space-y-1.5 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-bone hover:text-brass underline-offset-4 hover:underline"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.linkedin}
                  className="text-bone hover:text-brass underline-offset-4 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn — Abhijit Kumar
                </a>
              </li>
              <li>
                <a
                  href={site.github}
                  className="text-bone hover:text-brass underline-offset-4 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub — Abhijitkumar2197
                </a>
              </li>
              <li>
                <a
                  href={site.resume}
                  className="text-bone hover:text-brass underline-offset-4 hover:underline"
                  download
                >
                  Download résumé (PDF)
                </a>
              </li>
            </ul>
          </div>

          <div>
            <p className="font-mono text-2xs uppercase tracking-[0.18em] text-ash">
              Location
            </p>
            <p className="mt-3 text-sm text-bone">{site.location}</p>
            <p className="text-sm text-ash">{site.relocation}</p>
          </div>
        </div>

        <p className="mt-10 font-mono text-xs text-ash">
          © {new Date().getFullYear()} {site.name} · Last updated {lastUpdated}
        </p>
      </div>
    </footer>
  );
}
