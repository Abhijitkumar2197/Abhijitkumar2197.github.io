import Link from "next/link";
import { site, meta } from "@/content/site";
import {
  proof,
  skills,
  about,
  regions,
  howIWork,
  services,
} from "@/content/profile";
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
  "@id": `${site.url}/#person`,
  name: site.name,
  jobTitle: "Salesforce Developer",
  url: site.url,
  image: `${site.url}/abhijit-kumar.jpg`,
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
    "Prior authorization",
    "Revenue cycle management",
    "LLM",
    "RAG",
  ],
  sameAs: [site.linkedin, site.github, site.leetcode],
};

const ArrowUpRight = ({ className = "" }: { className?: string }) => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    <path d="M7 17L17 7M9 7h8v8" />
  </svg>
);

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* ------------------------------- Hero ------------------------------ */}
      <section className="mx-auto max-w-5xl px-6 pt-16 pb-14 sm:pt-24 sm:pb-20">
        <p className="rise rise-1 flex items-center gap-2.5 font-mono text-xs text-ash">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Open to Salesforce roles · 30-day notice
        </p>

        {/* His name is the brand: it leads, at size. Previously it rendered at
            12px while a filler numeral rendered at 36px. */}
        <h1 className="rise rise-2 mt-6 text-4xl font-bold leading-[1.05] tracking-[-0.03em] sm:text-5xl">
          Abhijit Kumar
        </h1>

        <p className="rise rise-3 mt-5 max-w-[34ch] text-xl leading-snug font-medium text-bone sm:max-w-[46ch] sm:text-2xl">
          Salesforce developer specializing in{" "}
          <span className="text-brass">US healthcare on Health Cloud</span> —
          eligibility, patient cost estimates and prior authorization, in live
          production orgs.
        </p>

        <p className="rise rise-4 mt-5 max-w-[62ch] text-ash">
          Two years at {site.employer.name}, a Salesforce consulting and ISV
          firm in Noida, delivering for client teams across{" "}
          <span className="text-bone">Europe, the US, Brazil and India</span>. I
          gather the requirements, design and build it in Apex, LWC and Flow,
          run the release, and then support it in production.
        </p>

        <div className="rise rise-5 mt-9 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${site.email}`}
            className="btn-primary inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
          >
            Get in touch
            <ArrowUpRight />
          </a>
          <Link
            href="#work"
            className="btn-ghost inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-bone"
          >
            See the work
          </Link>
          <a
            href={site.resume}
            className="btn-ghost inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-bone"
          >
            Résumé (PDF)
          </a>
        </div>

        <p className="rise rise-5 mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ash">
          <a href={`mailto:${site.email}`} className="sweep hover:text-bone">
            {site.email}
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="sweep hover:text-bone"
          >
            LinkedIn
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="sweep hover:text-bone"
          >
            GitHub
          </a>
          <a
            href={site.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="sweep hover:text-bone"
          >
            LeetCode
          </a>
          <span>Noida, India · open to relocation and remote</span>
        </p>
      </section>

      {/* ---------------------------- Proof strip -------------------------- */}
      <section
        aria-label="Selected results"
        className="border-y border-rule bg-slate/60"
      >
        <div className="mx-auto max-w-5xl px-6 py-11">
          <ul className="grid gap-x-12 gap-y-9 sm:grid-cols-2">
            {proof.map((p) => {
              const numeral = (
                <span
                  className="tnum block font-mono text-3xl leading-none font-medium text-brass"
                  {...(p.countTo !== undefined
                    ? {
                        "data-count-to": String(p.countTo),
                        "data-count-prefix": p.countPrefix ?? "",
                        "data-count-suffix": p.countSuffix ?? "",
                      }
                    : {})}
                >
                  {p.value}
                </span>
              );

              return (
                <li key={p.text} className="reveal">
                  {numeral}
                  <p className="mt-3 max-w-[46ch] text-sm leading-relaxed text-ash">
                    {p.text}
                    {p.href && (
                      <>
                        {" "}
                        <Link
                          href={p.href}
                          className="sweep font-medium whitespace-nowrap text-bone"
                        >
                          Read the case study
                        </Link>
                      </>
                    )}
                  </p>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      {/* --------------------------- Selected work ------------------------- */}
      <Reveal className="mx-auto max-w-5xl px-6 pt-20">
        <div id="work" className="scroll-mt-24">
          <h2 className="text-2xl font-bold tracking-tight">Selected work</h2>
          <p className="mt-2 max-w-[62ch] text-sm text-ash">
            Four builds, written for engineers. Client names are withheld;
            everything else is exactly what happened.
          </p>

          <ul className="mt-10 divide-y divide-rule border-y border-rule">
            {work.map((project, i) => (
              <li key={project.slug} className="row px-4 py-8 sm:px-5 sm:py-9">
                <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <h3 className="row__title text-xl font-semibold tracking-tight">
                    {/* The link wraps the TITLE only. Wrapping the whole card
                        gave screen readers a single 50-word link name. */}
                    <Link
                      href={`/work/${project.slug}/`}
                      className="after:absolute after:inset-0 after:content-['']"
                    >
                      {project.title}
                    </Link>
                  </h3>
                  {i === 0 && (
                    <span className="rounded-full border border-brass/40 bg-brass/10 px-2.5 py-0.5 font-mono text-2xs text-brass">
                      Flagship
                    </span>
                  )}
                  <ArrowUpRight className="row__arrow ml-auto text-ash" />
                </div>

                <p className="mt-2 font-mono text-xs text-ash">
                  {project.client} · {project.period}
                </p>

                <p className="mt-3 max-w-[68ch] text-ash">{project.outcome}</p>

                <p className="mt-4 flex flex-wrap gap-x-3 gap-y-1.5 font-mono text-2xs text-ash/85">
                  {project.stack.slice(0, 5).map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      {/* ----------------------- Regions + engagement ---------------------- */}
      <Reveal className="mx-auto max-w-5xl px-6 pt-20">
        <div className="card rounded-2xl px-7 py-9 sm:px-10 sm:py-11">
          <h2 className="max-w-[30ch] text-2xl font-bold tracking-tight">
            {regions.headline}
          </h2>
          <ul className="mt-6 flex flex-wrap gap-2">
            {regions.list.map((r) => (
              <li
                key={r}
                className="chip rounded-full px-3.5 py-1.5 font-mono text-xs text-ash"
              >
                {r}
              </li>
            ))}
          </ul>
          <p className="mt-6 max-w-[64ch] text-ash">{regions.note}</p>

          <div className="mt-9 grid gap-x-8 gap-y-6 border-t border-rule pt-8 sm:grid-cols-2">
            {services.map((s) => (
              <div key={s.title}>
                <h3 className="font-semibold tracking-tight text-bone">
                  {s.title}
                </h3>
                <p className="mt-1.5 max-w-[46ch] text-sm text-ash">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* ----------------------------- How I work -------------------------- */}
      <Reveal className="mx-auto max-w-5xl px-6 pt-20">
        <h2 className="text-2xl font-bold tracking-tight">How I work</h2>
        <p className="mt-2 max-w-[62ch] text-sm text-ash">
          I take features end to end rather than picking up specs — and I stay
          on them after go-live.
        </p>

        <ol className="mt-10 grid gap-x-8 gap-y-9 sm:grid-cols-2 lg:grid-cols-3">
          {howIWork.map((phase) => (
            <li key={phase.step} className="border-t border-rule pt-5">
              <span className="font-mono text-xs text-brass">{phase.step}</span>
              <h3 className="mt-2 text-lg font-semibold tracking-tight">
                {phase.title}
              </h3>
              <p className="mt-2 max-w-[42ch] text-sm text-ash">{phase.text}</p>
            </li>
          ))}
        </ol>
      </Reveal>

      {/* --------------------------- Capabilities -------------------------- */}
      <Reveal className="mx-auto max-w-5xl px-6 pt-20">
        <div id="capabilities" className="scroll-mt-24">
          <h2 className="text-2xl font-bold tracking-tight">What I work on</h2>

          <dl className="mt-8">
            {skills.map((group) => (
              <div
                key={group.title}
                className="grid gap-2 border-t border-rule py-5 sm:grid-cols-[12rem_1fr] sm:gap-6"
              >
                <dt className="font-semibold tracking-tight text-bone">
                  {group.title}
                </dt>
                <dd className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="chip rounded-full px-3 py-1 text-xs text-ash"
                    >
                      {item}
                    </span>
                  ))}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>

      {/* ------------------------------ About ------------------------------ */}
      <Reveal className="mx-auto max-w-5xl px-6 pt-20">
        <h2 className="text-2xl font-bold tracking-tight">About</h2>
        <div className="mt-6 max-w-[68ch] space-y-5">
          {about.slice(0, 2).map((para) => (
            <p key={para.slice(0, 24)} className="text-ash">
              {para}
            </p>
          ))}
        </div>
        <p className="mt-6">
          <Link href="/about/" className="sweep text-sm font-medium text-brass">
            More about how I work
          </Link>
        </p>
      </Reveal>

      {/* ----------------------------- Contact ----------------------------- */}
      <Reveal className="mx-auto max-w-5xl px-6 pt-20">
        <div className="card rounded-2xl px-8 py-12 sm:px-12 sm:py-14">
          <h2 className="max-w-[22ch] text-2xl font-bold tracking-tight sm:text-3xl">
            Looking for a Salesforce developer who owns what he ships?
          </h2>
          <p className="mt-4 max-w-[58ch] text-ash">
            I&apos;m open to roles in Noida, elsewhere in India, or remote —
            30-day notice. Email is the fastest way to reach me, and I reply to
            everything.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a
              href={`mailto:${site.email}`}
              className="btn-primary inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold"
            >
              {site.email}
              <ArrowUpRight />
            </a>
            <a
              href={site.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-bone"
            >
              Message on LinkedIn
            </a>
          </div>
        </div>
      </Reveal>
    </>
  );
}
