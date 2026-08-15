import Link from "next/link";
import { site, meta } from "@/content/site";
import { proof, skills, about } from "@/content/profile";
import { work } from "@/content/work";
import { Reveal } from "@/components/Reveal";

export const metadata = {
  title: meta.homeTitle,
  description: meta.homeDescription,
  alternates: { canonical: "/" },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: "Salesforce Developer",
  url: site.url,
  email: `mailto:${site.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.locality,
    addressRegion: site.region,
    addressCountry: site.country,
  },
  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Birla Institute of Technology, Mesra",
  },
  worksFor: { "@type": "Organization", name: site.employer.name },
  knowsAbout: [
    "Salesforce",
    "Apex",
    "Lightning Web Components",
    "Flow",
    "Experience Cloud",
    "Health Cloud",
    "REST API integration",
    "LLM",
    "RAG",
  ],
  sameAs: [site.linkedin, site.github],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* ---------------- Hero ---------------- */}
      <section className="mx-auto max-w-5xl px-6 pt-16 pb-14 sm:pt-24 sm:pb-20">
        <p className="font-mono text-2xs uppercase tracking-[0.2em] text-brass">
          {site.name}
        </p>

        <h1 className="mt-5 max-w-3xl text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl">
          Salesforce developer building and owning production systems for global
          enterprise orgs — Apex, LWC, integrations, and AI automation on top.
        </h1>

        <p className="mt-6 max-w-2xl text-ash">{site.context}</p>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <Link
            href="#work"
            className="rounded-sm bg-brass px-5 py-2.5 text-sm font-semibold text-ink hover:bg-bone"
          >
            View work
          </Link>
          <a
            href={site.resume}
            download
            className="rounded-sm border border-rule px-5 py-2.5 text-sm font-semibold text-bone hover:border-brass hover:text-brass"
          >
            Download résumé (PDF)
          </a>
        </div>

        <p className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm">
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ash underline-offset-4 hover:text-bone hover:underline"
          >
            GitHub
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-ash underline-offset-4 hover:text-bone hover:underline"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${site.email}`}
            className="text-ash underline-offset-4 hover:text-bone hover:underline"
          >
            {site.email}
          </a>
        </p>
      </section>

      {/* ---------------- Proof strip ----------------
          Signature element: the numeral is typeset as data (mono, brass,
          oversized) against a quiet sans description. */}
      <section
        aria-label="Selected results"
        className="border-y border-rule/70 bg-slate/40"
      >
        <div className="mx-auto max-w-5xl px-6 py-10">
          <ul className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {proof.map((p) => {
              const inner = (
                <>
                  <span className="tnum shrink-0 font-mono text-2xl font-medium leading-none text-brass sm:text-3xl">
                    {p.value}
                  </span>
                  <span className="text-sm leading-relaxed text-ash group-hover:text-bone">
                    {p.text}
                  </span>
                </>
              );

              return (
                <li key={p.text}>
                  {p.href ? (
                    <Link
                      href={p.href}
                      className="group flex items-baseline gap-4 underline-offset-4 hover:underline decoration-rule"
                    >
                      {inner}
                    </Link>
                  ) : (
                    <div className="flex items-baseline gap-4">{inner}</div>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* ---------------- Selected work ---------------- */}
      <Reveal as="section" className="mx-auto max-w-5xl px-6 pt-20" >
        <div id="work" className="scroll-mt-8">
          <h2 className="font-mono text-2xs uppercase tracking-[0.2em] text-ash">
            Selected work
          </h2>

          <ul className="mt-8 divide-y divide-rule/70 border-y border-rule/70">
            {work.map((project) => (
              <li key={project.slug}>
                <Link
                  href={`/work/${project.slug}/`}
                  className="group block py-8 sm:py-9"
                >
                  <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h3 className="text-xl font-semibold tracking-tight text-bone group-hover:text-brass">
                      {project.title}
                    </h3>
                    <span className="font-mono text-xs text-ash">
                      {project.period}
                    </span>
                  </div>

                  <p className="mt-1.5 font-mono text-xs text-brass/80">
                    {project.client}
                  </p>

                  <p className="mt-3 max-w-2xl text-ash">{project.outcome}</p>

                  <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
                    {project.stack.slice(0, 5).map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-2xs text-ash/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <p className="mt-4 font-mono text-xs text-ash group-hover:text-brass">
                    Read the case study →
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      {/* ---------------- Capabilities ---------------- */}
      <Reveal as="section" className="mx-auto max-w-5xl px-6 pt-20">
        <h2 className="font-mono text-2xs uppercase tracking-[0.2em] text-ash">
          What I work on
        </h2>

        <dl className="mt-8 space-y-7">
          {skills.map((group) => (
            <div
              key={group.title}
              className="grid gap-2 border-t border-rule/70 pt-5 sm:grid-cols-[11rem_1fr] sm:gap-6"
            >
              <dt className="font-semibold tracking-tight text-bone">
                {group.title}
              </dt>
              <dd className="text-ash">
                {group.items.join(" · ")}
              </dd>
            </div>
          ))}
        </dl>
      </Reveal>

      {/* ---------------- About + contact ---------------- */}
      <Reveal as="section" className="mx-auto max-w-5xl px-6 pt-20">
        <h2 className="font-mono text-2xs uppercase tracking-[0.2em] text-ash">
          About
        </h2>

        <div className="mt-8 max-w-2xl space-y-5">
          {about.slice(0, 2).map((para) => (
            <p key={para.slice(0, 24)} className="text-ash">
              {para}
            </p>
          ))}
        </div>

        <p className="mt-6">
          <Link
            href="/about/"
            className="text-sm text-brass underline-offset-4 hover:underline"
          >
            More about how I work →
          </Link>
        </p>

        <div className="mt-12 border-t border-rule/70 pt-8">
          <p className="max-w-2xl text-lg text-bone">
            I am open to Salesforce developer roles — in Noida, elsewhere in
            India, or remote. The quickest way to reach me is email.
          </p>
          <p className="mt-5 flex flex-wrap gap-x-6 gap-y-2">
            <a
              href={`mailto:${site.email}`}
              className="text-brass underline-offset-4 hover:underline"
            >
              {site.email}
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ash underline-offset-4 hover:text-bone hover:underline"
            >
              LinkedIn
            </a>
          </p>
        </div>
      </Reveal>
    </>
  );
}
