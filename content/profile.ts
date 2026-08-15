/**
 * Proof strip, capability groups, and About copy.
 * Facts carry context — no bare numbers with vague labels, no ratings.
 */

export type Proof = {
  value: string;
  unit?: string;
  text: string;
  href?: string;
};

/** Four hard facts, directly under the hero. */
export const proof: Proof[] = [
  {
    value: "7th",
    text: "country onboarded into a live multi-country Salesforce org — ~240 components in a 3-hour go-live, zero downtime, no post-release defects",
    href: "/work/multi-country-salesforce-expansion/",
  },
  {
    value: "~50%",
    text: "less lead noise, via a custom call-tracking-to-Salesforce lead integration",
    href: "/work/patient-financial-estimates/",
  },
  {
    value: "1",
    text: "personal AI side project selected by leadership for productisation into the company's flagship product",
    href: "/work/prior-authorisation-automation/",
  },
  {
    value: "2×",
    text: "Winner, internal AI Agent Hackathon (2026) · Rank 1, BIT Mesra CodeBash (2023)",
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
  "I am a Salesforce developer in Noida, India. Since April 2024 I have been at Mirketa, a Salesforce consulting and ISV firm, where I build and then keep running the systems I ship — Apex, Lightning Web Components, Flow, integrations, and the releases that put them into production.",
  "Most of my work has been in live enterprise orgs where other people are already depending on the thing I am about to change. That shapes how I build: additive changes over clever refactors, rehearsed releases, and a strong preference for routing uncertainty to a human instead of letting automation guess. The projects I am most pleased with are the ones where nothing dramatic happened on go-live day.",
  "More recently I have been building AI into those same CRM workflows — RAG pipelines, orchestration agents, and Agentforce and MCP-based tooling. It is the same job as the rest of my work: find where a workflow leaks time, and close the gap with something that survives contact with production. One of those side projects was picked up by leadership for our flagship product.",
];

/** One line each — real work that does not need a full case study. */
export const alsoDoing: string[] = [
  "Ongoing enterprise CRM support for a global org: functional and data analysis, user and data management, survey and case automation, and refactoring legacy implementations under strict release management.",
  "Refactoring legacy Apex to improve SOQL efficiency and CPU usage.",
];
