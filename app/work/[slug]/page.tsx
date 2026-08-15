import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { work, getCaseStudy } from "@/content/work";
import { site } from "@/content/site";

type Params = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return work.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params;
  const project = getCaseStudy(slug);
  if (!project) return {};

  return {
    title: project.title,
    description: project.description,
    alternates: { canonical: `/work/${project.slug}/` },
    openGraph: {
      type: "article",
      title: `${project.title} — ${site.name}`,
      description: project.description,
      url: `${site.url}/work/${project.slug}/`,
      images: ["/og.png"],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} — ${site.name}`,
      description: project.description,
      images: ["/og.png"],
    },
  };
}

export default async function CaseStudyPage({ params }: Params) {
  const { slug } = await params;
  const project = getCaseStudy(slug);
  if (!project) notFound();

  const index = work.findIndex((w) => w.slug === slug);
  const next = work[(index + 1) % work.length];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: project.title,
    description: project.description,
    author: { "@type": "Person", name: site.name, url: site.url },
    publisher: { "@type": "Person", name: site.name },
    mainEntityOfPage: `${site.url}/work/${project.slug}/`,
    about: project.stack,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />

      <article className="mx-auto max-w-3xl px-6 pt-14 pb-8 sm:pt-20">
        <p>
          <Link
            href="/#work"
            className="font-mono text-xs text-ash underline-offset-4 hover:text-brass hover:underline"
          >
            ← All work
          </Link>
        </p>

        <header className="mt-8">
          <p className="font-mono text-2xs uppercase tracking-[0.2em] text-brass">
            {project.client}
          </p>
          <h1 className="mt-4 text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
            {project.title}
          </h1>
          <p className="mt-5 text-lg text-ash">{project.outcome}</p>

          <dl className="mt-8 grid gap-x-8 gap-y-4 border-y border-rule/70 py-5 text-sm sm:grid-cols-2">
            <div>
              <dt className="font-mono text-2xs uppercase tracking-[0.18em] text-ash">
                Period
              </dt>
              <dd className="mt-1 text-bone">{project.period}</dd>
            </div>
            <div>
              <dt className="font-mono text-2xs uppercase tracking-[0.18em] text-ash">
                Role
              </dt>
              <dd className="mt-1 text-bone">{project.role}</dd>
            </div>
          </dl>
        </header>

        {/* Metrics — the signature typesetting, repeated from the homepage. */}
        {project.metrics.length > 0 && (
          <ul className="mt-10 grid gap-6 sm:grid-cols-2">
            {project.metrics.map((metric) => (
              <li key={metric.label} className="border-l-2 border-brass pl-4">
                <p className="tnum font-mono text-2xl font-medium leading-none text-brass">
                  {metric.value}
                </p>
                <p className="mt-2 text-sm text-ash">{metric.label}</p>
              </li>
            ))}
          </ul>
        )}

        {/* Body */}
        <div className="mt-14 space-y-12">
          {project.sections.map((section) => (
            <section key={section.heading}>
              <h2 className="text-xl font-semibold tracking-tight text-bone">
                {section.heading}
              </h2>

              {section.body && (
                <div className="mt-4 space-y-4">
                  {section.body.map((para) => (
                    <p key={para.slice(0, 24)} className="text-ash">
                      {para}
                    </p>
                  ))}
                </div>
              )}

              {section.bullets && (
                <ul className="mt-5 space-y-4">
                  {section.bullets.map((bullet) => (
                    <li
                      key={bullet.text.slice(0, 28)}
                      className="border-l border-rule pl-4"
                    >
                      {bullet.label && (
                        <p className="font-mono text-xs font-medium text-bone">
                          {bullet.label}
                        </p>
                      )}
                      <p className="mt-1 text-ash">{bullet.text}</p>
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}
        </div>

        {/* Compact release timeline — only where there is a real one. */}
        {project.timeline && (
          <section className="mt-14">
            <h2 className="text-xl font-semibold tracking-tight text-bone">
              Go-live, hour by hour
            </h2>
            <ol className="mt-6 border-l border-rule">
              {project.timeline.map((step) => (
                <li key={step.time} className="relative pl-6 pb-6 last:pb-0">
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-2 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-brass"
                  />
                  <p className="flex flex-wrap items-baseline gap-x-3">
                    <span className="tnum font-mono text-sm text-brass">
                      {step.time}
                    </span>
                    <span className="font-medium text-bone">{step.label}</span>
                  </p>
                  <p className="mt-1 text-sm text-ash">{step.detail}</p>
                </li>
              ))}
            </ol>
          </section>
        )}

        {/* Stack */}
        <section className="mt-14 border-t border-rule/70 pt-8">
          <h2 className="font-mono text-2xs uppercase tracking-[0.2em] text-ash">
            Stack
          </h2>
          <p className="mt-4 text-ash">{project.stack.join(" · ")}</p>
        </section>

        {/* Next */}
        <nav
          aria-label="More work"
          className="mt-14 border-t border-rule/70 pt-8"
        >
          <p className="font-mono text-2xs uppercase tracking-[0.2em] text-ash">
            Next case study
          </p>
          <Link
            href={`/work/${next.slug}/`}
            className="group mt-3 block text-xl font-semibold tracking-tight text-bone hover:text-brass"
          >
            {next.title}
            <span className="ml-2 font-mono text-sm text-ash group-hover:text-brass">
              →
            </span>
          </Link>
        </nav>
      </article>
    </>
  );
}
