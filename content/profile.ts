/**
 * Proof strip, capability groups, and About copy.
 * Facts carry context — no bare numbers with vague labels, no ratings.
 */

export type Proof = {
  /** Rendered large in mono. Must be a real magnitude, never a filler numeral. */
  value: string;
  /** Optional count-up target for the numeric part. */
  countTo?: number;
  countPrefix?: string;
  countSuffix?: string;
  text: string;
  href?: string;
};

/**
 * Four hard facts, directly under the hero.
 * Rule: the numeral must carry information on its own. "1" and "2x" did not —
 * and "2x" sat next to a single hackathon win, which overstated the record
 * against the resume linked from the same page.
 */
export const proof: Proof[] = [
  {
    value: "7th",
    text: "country onboarded into a live multi-country Salesforce org — ~240 components in a 3-hour go-live, zero downtime, no post-release defects",
    href: "/work/multi-country-salesforce-expansion/",
  },
  {
    value: "~50%",
    countTo: 50,
    countPrefix: "~",
    countSuffix: "%",
    text: "of inbound call-tracking leads were noise before I filtered them — CallRail-to-Salesforce integration, with reps notified in real time",
    href: "/work/patient-financial-estimates/",
  },
  {
    value: "Shipped",
    text: "a prior-authorization completeness engine on my own time — selected by leadership for the firm's flagship product",
    href: "/work/prior-authorization-automation/",
  },
  {
    value: "2026",
    text: "Winner, Mirketa internal AI Agent Hackathon — an agent build competition",
  },
];

/**
 * Where the work has landed. Recruiters scan for "has he worked with our
 * region" before almost anything else, and this was previously invisible —
 * buried inside one case study's Context paragraph.
 */
export const regions = {
  headline: "Built and released for teams across Europe, the US, Brazil and India",
  list: [
    "Ireland",
    "France",
    "Spain",
    "Portugal",
    "United States",
    "Brazil",
    "India",
  ],
  note: "Working directly with client stakeholders across time zones — requirements through to production support.",
};

/** What an engagement with him actually looks like, start to finish. */
export type Phase = { step: string; title: string; text: string };

export const howIWork: Phase[] = [
  {
    step: "01",
    title: "Requirement gathering",
    text: "I talk to the people who do the work, not just the ticket. Most of what I have shipped started as a conversation with a client stakeholder about a workflow that was leaking time — and more than once the stated requirement turned out to be the wrong problem.",
  },
  {
    step: "02",
    title: "Solution design",
    text: "Data model, automation boundaries, and where the platform limits will bite. I write down the trade-offs before building, including the option I rejected and why.",
  },
  {
    step: "03",
    title: "Build",
    text: "Apex, LWC, Flow and integrations, built to the org's existing patterns rather than my preferred ones. Additive changes over clever refactors when other teams are already live on the thing I'm touching.",
  },
  {
    step: "04",
    title: "Release",
    text: "CI/CD pipelines, sandbox-to-production release management, and a rehearsed go-live — including the manual steps that never live in metadata.",
  },
  {
    step: "05",
    title: "Support and enhancement",
    text: "I keep running what I ship. Ongoing enhancement, production monitoring, functional and data analysis, and the unglamorous refactoring that keeps an aging org healthy. Two of my three engagements are open-ended support relationships, not projects I handed over.",
  },
];

/** Plain statement of what he is engaged to do. */
export const services = [
  {
    title: "New development",
    text: "Greenfield features on Apex, LWC and Flow — built against real compliance requirements, not just acceptance criteria.",
  },
  {
    title: "Enhancement of live orgs",
    text: "Extending systems other people built and other teams depend on, without breaking what is already in production.",
  },
  {
    title: "Continuous support",
    text: "Ongoing production support: functional and data analysis, user and data management, incident triage, and legacy refactoring under strict release management.",
  },
  {
    title: "Integrations and AI",
    text: "REST/SOAP integrations, OAuth, and AI agents wired into CRM workflows — RAG, orchestration, Agentforce and MCP tooling.",
  },
];

export type SkillGroup = { title: string; items: string[] };

/** Honest capability list. No percentages, no stars. */
export const skills: SkillGroup[] = [
  {
    title: "Salesforce",
    items: [
      "Apex (triggers, async, Queueable, Batch)",
      "Lightning Web Components (component architecture, performance)",
      "Aura",
      "Visualforce",
      "Flow",
      "SOQL",
      "Experience Cloud",
      "Health Cloud",
      "Revenue Cloud",
      "Sales Cloud",
      "Sharing and FLS model",
      "Permission sets and profiles",
    ],
  },
  {
    title: "Integration",
    items: [
      "REST and SOAP APIs",
      "OAuth",
      "Boomi",
      "HubSpot",
      "CallRail",
      "Zoho",
      "Tableau embedding",
      "Email-to-case",
    ],
  },
  {
    title: "Release and ops",
    items: [
      "CI/CD pipelines",
      "GitLab and GitHub branching",
      "Sandbox-to-production release management",
      "Workbench",
      "Data Loader",
      "Postman",
      "Production monitoring and troubleshooting",
    ],
  },
  {
    title: "AI in the CRM",
    items: [
      "RAG pipelines",
      "Multi-source orchestration agents",
      "Agentforce",
      "MCP-based tooling",
      "Prompt design",
    ],
  },
  {
    title: "Foundations",
    items: [
      "Java",
      "Python",
      "JavaScript",
      "SQL",
      "Data structures and algorithms (500+ problems solved)",
    ],
  },
];

/** First-person, plain. No mission statements. */
export const about: string[] = [
  "I am a Salesforce developer in Noida, India. Since April 2024 I have been at Mirketa, a Salesforce consulting and ISV firm, working with client teams across Europe, the United States, Brazil and India — a food safety and testing group operating in seven countries, and a US behavioral health provider, among others.",
  "I own the work end to end rather than picking up specs. That means sitting with client stakeholders to gather requirements, proposing the solution design, building it in Apex, LWC and Flow, running the release myself, and then supporting it in production. Two of my three engagements are open-ended: continuous enhancement and support on live orgs, not projects I handed over and walked away from.",
  "Most of what I do happens in orgs where other people are already depending on the thing I am about to change. That shapes how I build: additive changes over clever refactors, rehearsed releases, and a strong preference for routing uncertainty to a human instead of letting automation guess. The projects I am most pleased with are the ones where nothing dramatic happened on go-live day.",
  "More recently I have been building AI into those same CRM workflows — RAG pipelines, orchestration agents, and Agentforce and MCP-based tooling. It is the same job as the rest of my work: find where a workflow leaks time, and close the gap with something that survives contact with production. One of those side projects was picked up by leadership for our flagship product.",
];

/** One line each — real work that does not need a full case study. */
export const alsoDoing: string[] = [
  "Ongoing enterprise CRM support for a global org: functional and data analysis, user and data management, survey and case automation, and refactoring legacy implementations under strict release management.",
  "Refactoring legacy Apex to improve SOQL efficiency and CPU usage.",
];
