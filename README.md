# abhijitkumar2197.github.io

Personal site for **Abhijit Kumar**, Salesforce developer — Noida, India.

Live: <https://abhijitkumar2197.github.io>

Next.js (App Router) + TypeScript + Tailwind CSS v4, built as a fully static
export and served from GitHub Pages. No CMS, no database, no server code —
nothing on this site needs a backend to work.

---

## Running it locally

```bash
npm install
npm run dev          # http://localhost:3000
```

To check the real deployable artifact rather than the dev server:

```bash
npm run build        # writes ./out
npm run serve        # serves ./out on http://localhost:3000
```

Always sanity-check `npm run build` output before pushing — the dev server is
more forgiving than the static export.

---

## Editing content

All copy lives in `/content` as typed TypeScript. You should not need to touch
a component to change what the site says.

| File | What is in it |
| --- | --- |
| `content/site.ts` | Name, role, hero sentence, links, email, résumé path, employer, education |
| `content/profile.ts` | The four proof-strip facts, capability groups, About paragraphs |
| `content/work.ts` | The four case studies, in full |

### Changing a headline fact

`content/profile.ts` → `proof`. Each entry is a `value` (the big mono numeral)
plus `text` (the context beside it) and an optional `href` to the case study.

### Adding a case study

Append an object to the `work` array in `content/work.ts`. The route, the
sitemap entry, the homepage card and the `Article` JSON-LD are all generated
from it — nothing else to wire up. Required fields:

```ts
{
  slug: "url-segment",
  title: "…",
  client: "Industry descriptor — never a client name",
  period: "Month Year – Month Year",
  role: "…",
  outcome: "One line, used on the homepage card",
  description: "One sentence, used for meta description and OG",
  metrics: [{ value: "~240", label: "components deployed" }],
  stack: ["Apex", "…"],
  sections: [
    { heading: "Context", body: ["…"] },
    { heading: "What I built", bullets: [{ label: "…", text: "…" }] },
  ],
  timeline: [{ time: "00:00", label: "…", detail: "…" }],  // optional
}
```

Section order convention: **Context → Problem → What I built → Constraints and
trade-offs → Outcome**. Stack renders automatically at the end. Keep each study
under ~600 words.

### Two rules that matter

1. **Never name a client company.** Use an industry descriptor
   ("a global food safety and testing company"). This is checked by eye, not by
   the build — do not let it slip.
2. **Dates and job titles must match LinkedIn and the résumé PDF**, because
   recruiters cross-check them.

### Replacing the résumé

Drop the new file at `public/Abhijit-Kumar-Salesforce-Developer.pdf`, keeping
the filename — it is what a recruiter sees when the download lands. The path is
set once in `content/site.ts` (`site.resume`).

### Images

- `public/abhijit-kumar.jpg` — the About photo (640×640).
- `public/og.png` — the 1200×630 social preview card.

Both are plain `<img>`/metadata references with explicit dimensions, so there
is no layout shift and no image optimiser is required.

---

## Design tokens

Palette and type scale are defined once, at the top of `app/globals.css`, with
the reasoning written next to them. Six colours, one accent (`--color-brass`),
two faces (IBM Plex Sans and IBM Plex Mono, self-hosted via `next/font`).

If you change a colour, re-check contrast — every text/background pair on the
site currently passes WCAG AA with room to spare.

Motion is deliberately limited to one scroll reveal (`components/Reveal.tsx`).
It is gated behind a `.js` class set before paint, so with JavaScript disabled
the content is simply visible, and it is disabled entirely under
`prefers-reduced-motion`.

---

## Deploying

Pushing to `main` triggers `.github/workflows/deploy.yml`, which runs
`npm ci && npm run build` and publishes `./out` to GitHub Pages.

```bash
git add -A
git commit -m "Update case study"
git push
```

The deploy takes a couple of minutes; progress is under the repo's **Actions**
tab. Repository **Settings → Pages → Build and deployment → Source** must be
set to **GitHub Actions** (not "Deploy from a branch").

`public/.nojekyll` stops GitHub Pages running the output through Jekyll, which
would otherwise drop Next.js's `_next/` directory.

Because this is a *user site* served from the domain root, there is no
`basePath` to configure. If this were ever moved to a project repo, both
`basePath` and `assetPrefix` would need setting in `next.config.ts`.

---

## Checks worth repeating before a deploy

- `npm run build` completes with no type errors
- Every internal link still resolves in `npm run serve`
- Nothing on the page names a client
- Lighthouse (mobile) still in the 95+ range on all four categories
