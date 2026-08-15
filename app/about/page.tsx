import Link from "next/link";
import type { Metadata } from "next";
import { site } from "@/content/site";
import { about, alsoDoing, skills } from "@/content/profile";

export const metadata: Metadata = {
  title: "About",
  description:
    "Abhijit Kumar — Salesforce developer in Noida, India. Two years building and owning production systems in live enterprise orgs: Apex, LWC, Flow, Health Cloud, integrations, release management, and applied AI in CRM workflows.",
  alternates: { canonical: "/about/" },
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pt-14 pb-8 sm:pt-20">
      <h1 className="text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
        About
      </h1>

      <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-start">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/abhijit-kumar.jpg"
          alt="Abhijit Kumar, Salesforce developer, Noida, India"
          width={320}
          height={320}
          className="h-40 w-40 shrink-0 rounded-sm border border-rule object-cover"
        />

        <div className="space-y-5">
          {about.map((para) => (
            <p key={para.slice(0, 24)} className="text-ash">
              {para}
            </p>
          ))}
        </div>
      </div>

      {/* Also doing */}
      <section className="mt-14">
        <h2 className="font-mono text-2xs uppercase tracking-[0.2em] text-ash">
          Also on my desk
        </h2>
        <ul className="mt-5 space-y-4">
          {alsoDoing.map((item) => (
            <li key={item.slice(0, 24)} className="border-l border-rule pl-4 text-ash">
              {item}
            </li>
          ))}
        </ul>
      </section>

      {/* Experience */}
      <section className="mt-14">
        <h2 className="font-mono text-2xs uppercase tracking-[0.2em] text-ash">
          Experience
        </h2>
        <div className="mt-5 border-t border-rule/70 pt-5">
          <div className="flex flex-wrap items-baseline gap-x-3">
            <h3 className="text-lg font-semibold tracking-tight text-bone">
              {site.employer.title}
            </h3>
            <span className="font-mono text-xs text-ash">
              {site.employer.start} – {site.employer.end}
            </span>
          </div>
          <p className="mt-1 text-ash">
            {site.employer.name} — {site.employer.descriptor}, Noida
          </p>
          <p className="mt-3 max-w-2xl text-ash">
            Building and releasing Salesforce solutions for global enterprise
            clients: Apex, Lightning Web Components and Flow automation against
            real compliance requirements, Experience Cloud sites, CI/CD
            pipelines, and ongoing production support for the systems I ship.
          </p>
        </div>
      </section>

      {/* Education */}
      <section className="mt-14">
        <h2 className="font-mono text-2xs uppercase tracking-[0.2em] text-ash">
          Education
        </h2>
        <div className="mt-5 border-t border-rule/70 pt-5">
          <div className="flex flex-wrap items-baseline gap-x-3">
            <h3 className="text-lg font-semibold tracking-tight text-bone">
              {site.education.degree}
            </h3>
            <span className="font-mono text-xs text-ash">
              {site.education.years}
            </span>
          </div>
          <p className="mt-1 text-ash">
            {site.education.school} — {site.education.result}
          </p>
        </div>
      </section>

      {/* Capabilities, full list */}
      <section className="mt-14">
        <h2 className="font-mono text-2xs uppercase tracking-[0.2em] text-ash">
          Capabilities
        </h2>
        <dl className="mt-5 space-y-6">
          {skills.map((group) => (
            <div
              key={group.title}
              className="grid gap-2 border-t border-rule/70 pt-5 sm:grid-cols-[11rem_1fr] sm:gap-6"
            >
              <dt className="font-semibold tracking-tight text-bone">
                {group.title}
              </dt>
              <dd className="text-ash">{group.items.join(" · ")}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* Contact */}
      <section className="mt-14 border-t border-rule/70 pt-8">
        <p className="max-w-2xl text-lg text-bone">
          Open to Salesforce developer roles — Noida, elsewhere in India, or
          remote. Email is quickest.
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
          <a
            href={site.resume}
            download
            className="text-ash underline-offset-4 hover:text-bone hover:underline"
          >
            Download résumé (PDF)
          </a>
        </p>
        <p className="mt-8">
          <Link
            href="/#work"
            className="font-mono text-xs text-ash underline-offset-4 hover:text-brass hover:underline"
          >
            ← See the work
          </Link>
        </p>
      </section>
    </div>
  );
}
