/**
 * Case studies. Client companies are never named — industry descriptors only.
 * Each study follows: Context → Problem → What I built → Constraints and
 * trade-offs → Outcome → Stack. Under 600 words each.
 */

export type Bullet = { label?: string; text: string };

export type Section = {
  heading: string;
  body?: string[];
  bullets?: Bullet[];
};

export type Metric = { value: string; label: string };

export type TimelineStep = { time: string; label: string; detail: string };

export type CaseStudy = {
  slug: string;
  title: string;
  client: string;
  period: string;
  role: string;
  /** One-line outcome, used on the homepage card. */
  outcome: string;
  metrics: Metric[];
  stack: string[];
  sections: Section[];
  timeline?: TimelineStep[];
  description: string;
};

export const work: CaseStudy[] = [
  {
    slug: "multi-country-salesforce-expansion",
    title: "Onboarding a 7th country into a live multi-country org",
    client: "Global food safety and testing company",
    period: "July 2024 – February 2025",
    role: "Salesforce developer — build, release planning, go-live execution",
    outcome:
      "Added a seventh country to a shared production org in a 3-hour window: ~240 components, zero downtime, no post-go-live defects.",
    description:
      "How a seventh country was added to a live six-country Salesforce org without disturbing anyone already in production — additive metadata, country-gated shared logic, and a rehearsed 3-hour go-live.",
    metrics: [
      { value: "~240", label: "metadata components deployed" },
      { value: "3 hrs", label: "go-live window" },
      { value: "0", label: "downtime and post-go-live defects" },
      { value: "6 → 7", label: "countries live on one org" },
    ],
    stack: [
      "Apex",
      "Lightning Web Components",
      "Flow",
      "Experience Cloud",
      "Salesforce Knowledge",
      "Permission sets & profiles",
      "Sharing rules",
      "Translation Workbench",
      "Sandbox-to-production release management",
    ],
    sections: [
      {
        heading: "Context",
        body: [
          "A global food safety and testing company runs its business on a single multi-country Salesforce org. Six countries were already in production — United States, France, Spain, Portugal, Brazil and India — sharing one data model, one sample-handling process, and one Experience Cloud community for customers.",
          "The business needed a seventh country onboarded. My role covered the internal org and the community: profiles, permission sets and public groups, cross-country data privacy, mirrored-field translation, the Knowledge base, reports and dashboards, and the release itself.",
        ],
      },
      {
        heading: "Problem",
        body: [
          "The difficulty was never the new country. It was the six already live.",
          "In a shared org the interesting configuration is common: one global sample process, one set of mirrored translated fields, one Knowledge base, one permission architecture. Adding a country means touching exactly the metadata that every existing country depends on — and there was no maintenance window long enough to take a global business offline while it was sorted out.",
          "So the real requirement was not 'make country seven work'. It was 'make country seven work while proving nothing changed for the other six'.",
        ],
      },
      {
        heading: "What I built",
        bullets: [
          {
            label: "Access model",
            text: "Profiles, permission sets and public groups for the new country's internal users and community users, following the existing per-country pattern rather than inventing a new one.",
          },
          {
            label: "Data privacy across countries",
            text: "Sharing configuration so the new country's records stay visible to the new country, and existing countries gain no new visibility. Cross-country leakage was the failure mode I was most concerned about, so it was tested in both directions.",
          },
          {
            label: "Mirrored-field translation",
            text: "Local-language display through the existing mirrored-field approach, so records read natively for the new region without forking the data model.",
          },
          {
            label: "Knowledge, reports and dashboards",
            text: "A localised Knowledge base for the community, plus the reporting layer the new region needed on day one.",
          },
          {
            label: "The shared sample process",
            text: "Extended the global process to accept the new country as a valid path, keeping every existing country's behaviour byte-for-byte identical.",
          },
        ],
      },
      {
        heading: "Constraints and trade-offs",
        body: [
          "The de-risking strategy came down to three rules.",
        ],
        bullets: [
          {
            label: "Additive, not editive",
            text: "Wherever possible I added new metadata records and values instead of editing shared ones. New rows are invisible to existing code paths; changed rows are not.",
          },
          {
            label: "Gate what must change",
            text: "Where shared logic genuinely had to change, the change was keyed by country so the six live countries continued down their original branch. That buys safety at the cost of extra configuration surface — a clean refactor of the shared process would have been more elegant and considerably more dangerous. I chose the boring option deliberately.",
          },
          {
            label: "Rehearse the whole release, not just the deploy",
            text: "The go-live was dry-run in a sandbox mirroring production, in the real order, including the manual steps that do not live in metadata. That rehearsal is what turned a ~240-component deploy into a predictable sequence instead of a discovery exercise.",
          },
        ],
      },
      {
        heading: "Outcome",
        body: [
          "The seventh country went live on schedule inside a ~3-hour window: pre-steps, roughly 240 metadata components, post-steps, then live end-to-end testing before sign-off.",
          "Zero downtime for the six countries already in production, and no post-go-live defects raised against the release.",
        ],
      },
    ],
    timeline: [
      {
        time: "00:00",
        label: "Pre-steps",
        detail: "Manual configuration that cannot be carried in metadata.",
      },
      {
        time: "00:20",
        label: "Metadata deploy",
        detail: "~240 components, deployed in dependency order.",
      },
      {
        time: "01:40",
        label: "Post-steps",
        detail: "Data loads, assignments, activation of the new country path.",
      },
      {
        time: "02:20",
        label: "Live testing",
        detail: "End-to-end on the shared sample process, new country and existing countries.",
      },
      {
        time: "03:00",
        label: "Sign-off",
        detail: "Zero downtime, no post-go-live defects.",
      },
    ],
  },

  {
    slug: "patient-financial-estimates",
    title: "Lead intake and patient financial estimates on Health Cloud",
    client: "US behavioural health provider",
    period: "November 2024 – present",
    role: "Salesforce developer — requirements, solution design, build",
    outcome:
      "Cut inbound lead noise ~50%, and automated the up-front cost estimate patients receive at admission.",
    description:
      "Two shipped systems for a US behavioural health provider: a call-tracking-to-Salesforce lead integration that cut noise by half, and an admission-time patient financial estimate engine built to route uncertainty to humans rather than guess.",
    metrics: [
      { value: "~50%", label: "reduction in inbound lead noise" },
      { value: "~74", label: "benefit fields in the verification matrix" },
      { value: "24 h", label: "default infill turnaround, configurable" },
    ],
    stack: [
      "Salesforce Health Cloud",
      "Apex (Queueable, Batch)",
      "Flow",
      "Lightning Web Components",
      "REST API integration",
      "Custom metadata & settings",
      "Approval routing",
    ],
    sections: [
      {
        heading: "Context",
        body: [
          "A US behavioural health provider running on Health Cloud. I have owned requirement gathering, solution design and delivery through direct client conversation since November 2024. Two pieces are worth writing up.",
        ],
      },
      {
        heading: "Problem",
        body: [
          "First, inbound leads. Calls arrived through a call-tracking platform, and what landed in Salesforce was noisy — repeat callers, wrong numbers and non-leads mixed in with genuine enquiries. Reps also found out about a new lead whenever they next refreshed a list view, which is not when the lead is worth calling back.",
          "Second, and harder: patients are given an estimate of what treatment will cost them before admission. Producing that number by hand is slow, inconsistent between staff, and easy to get wrong, because it depends on the patient's live insurance benefits and on a fee schedule that varies by payer and level of care.",
        ],
      },
      {
        heading: "What I built — lead intake",
        bullets: [
          {
            text: "A custom integration from the call-tracking platform into Salesforce for inbound lead generation, filtering the traffic that was never a lead in the first place. Noise dropped roughly 50%.",
          },
          {
            text: "A real-time cross-platform notification system so a rep knows a qualified lead exists immediately, rather than at the next list refresh.",
          },
        ],
      },
      {
        heading: "What I built — the estimate system",
        bullets: [
          {
            label: "Insurance verification intake",
            text: "Benefit data arrives from a clearinghouse by API. A configurable matrix of roughly 74 fields records which values are reliably available from the API and which are not.",
          },
          {
            label: "Infill queue",
            text: "Any field marked required but missing routes the record to a manual infill queue assigned to named users, with a configurable turnaround — 24 hours by default.",
          },
          {
            label: "Estimate engine",
            text: "Total charges are computed across levels of care from a fee schedule keyed by payer and revenue code. Patient responsibility applies the remaining deductible, then coinsurance on the balance, capped at the remaining out-of-pocket maximum with any overage credited back, plus copay. An approved hardship discount is deducted and the result splits into monthly instalments.",
          },
          {
            label: "Ranges, not false precision",
            text: "The estimate is expressed as a range driven by expected length of stay, plus or minus a configurable number of days.",
          },
          {
            label: "Approval and audit",
            text: "Hardship and financial-assistance discounts route to approvers by email. The audit trail captures amount, original amount, approver, result and timestamp, and edit rights are separated from override rights by role.",
          },
          {
            label: "Versioned distribution",
            text: "Estimates are versioned — a re-issued estimate explicitly supersedes the earlier one — and delivery status is tracked, so there is never ambiguity about which number a patient was actually given.",
          },
          {
            label: "Configuration over code",
            text: "Fee schedules, expected length of stay per level of care, the day range and the required-field flags are all admin-editable. The business changes numbers without a developer.",
          },
        ],
      },
      {
        heading: "Constraints and trade-offs",
        body: [
          "The clearinghouse API does not cover everything. Out-of-network benefits and carve-out limits in particular are frequently absent or unreliable.",
          "The system could have inferred those values and produced a clean, fully automated number. It does not. Anything required and missing goes to a human with a deadline attached, because a confidently wrong cost estimate given to a patient at admission is a far worse failure than a slower one. Routing beats guessing — the infill queue exists precisely because the automation knows what it does not know.",
          "The same instinct drove configuration over code: the numbers in this domain change on the business's schedule, not on a release schedule.",
        ],
      },
      {
        heading: "Outcome",
        body: [
          "Lead noise down roughly 50% with reps notified in real time, and the admission-time estimate produced consistently from live benefit data with an explicit audit trail behind every discount.",
          "Alongside these, I build the wider behavioural health workflows with Apex, Flow and async processing (Queueable and Batch) for the calculation-heavy paths.",
        ],
      },
    ],
  },

  {
    slug: "prior-authorisation-automation",
    title: "Prior-authorisation automation — LLM and RAG inside Health Cloud",
    client: "Behavioural health · selected for the firm's flagship product",
    period: "Personal project → productisation",
    role: "Originator — problem framing, architecture, build",
    outcome:
      "Started as a personal project, pitched to leadership, and selected for integration into the company's flagship product.",
    description:
      "A prior-authorisation tool that was rebuilt from a letter-drafting assistant into a denial-prevention engine after a manager corrected the problem statement — with deterministic form filling and propose-and-confirm as hard design rules.",
    metrics: [
      { value: "v1 → v2", label: "rebuilt after the problem was reframed" },
      { value: "0", label: "model-generated values written into payer forms" },
    ],
    stack: [
      "Apex",
      "Salesforce Health Cloud",
      "RAG pipeline",
      "LLM orchestration",
      "Agentforce",
      "MCP-based tooling",
      "Deterministic field mapping",
      "Adapter layer for manual submission",
    ],
    sections: [
      {
        heading: "Context",
        body: [
          "Prior authorisation is the paperwork gate in front of treatment. A coordinator assembles clinical evidence into a packet, sends it to a payer, and waits. When it comes back denied, the work is redone and the patient waits longer.",
          "I started building against this problem on my own time, then pitched it internally. It was selected for integration into the company's flagship product.",
        ],
      },
      {
        heading: "Problem — and the correction that mattered",
        body: [
          "Version one was aimed at drafting authorisation letters. Generating good clinical prose is the part of this problem that an LLM makes look easy, so that is where I started.",
          "A manager who actually knew the workflow corrected it: coordinators do not need better letters. They need to not get denied. Denials come from packets that are incomplete against the payer's criteria — a missing assessment, an unmet criterion, an evidence gap — not from prose that could have been more persuasive.",
          "That reframing threw away the premise of v1. The tool was rebuilt as a completeness and denial-prevention engine: work out what this payer requires for this request, check the packet against it, and surface what is missing before anything is submitted.",
        ],
      },
      {
        heading: "What I built",
        bullets: [
          {
            label: "Requirement resolution",
            text: "Determine what the specific payer and request type actually require, rather than assuming a generic checklist.",
          },
          {
            label: "Packet assembly with retrieval",
            text: "A RAG pipeline pulls the relevant clinical evidence out of the record so criteria are matched against real documents.",
          },
          {
            label: "Completeness check",
            text: "The core of the product. Every mandatory item is evaluated as met, missing, or needing confirmation, with the evidence behind each verdict shown.",
          },
          {
            label: "Conditional drafting",
            text: "Free text is drafted only where free text is genuinely needed — the thing v1 treated as the whole product is now a small conditional step.",
          },
          {
            label: "Attestation and channel-aware output",
            text: "A clinician confirms before anything leaves the system, and the packet is produced in the form the destination channel accepts.",
          },
        ],
      },
      {
        heading: "Constraints and trade-offs",
        bullets: [
          {
            label: "Shadow before you build",
            text: "A mandatory shadowing phase precedes the build. V1 existed because I designed for the workflow I imagined; the rule exists so that does not happen twice.",
          },
          {
            label: "Deterministic form filling",
            text: "No model output is written into a payer form field. Structured values come from deterministic mapping. The model drafts free text and proposes evidence matches — it does not populate identifiers, codes or dates.",
          },
          {
            label: "Propose and confirm",
            text: "Document attachment is proposed to a human and confirmed, never performed silently. Nothing auto-submits.",
          },
          {
            label: "An adapter layer for reality",
            text: "Most payers in this space have no usable API. An adapter layer means v1 works with manual submission where that is the only channel, instead of waiting for integrations that may never exist.",
          },
        ],
      },
      {
        heading: "Outcome",
        body: [
          "Selected by leadership for productisation into the company's flagship product.",
          "The more useful outcome was the judgement: the version that got picked up is the one built after someone who knew the work told me the problem was wrong. Deterministic filling, propose-and-confirm and mandatory shadowing all came out of taking that correction seriously.",
        ],
      },
    ],
  },

  {
    slug: "multi-source-orchestration-agent",
    title: "Multi-source orchestration agent for support triage",
    client: "Internal tool",
    period: "Ongoing",
    role: "Built end to end",
    outcome:
      "One orchestrator coordinating Jira, email and Salesforce cases into a single priority-ranked triage dashboard.",
    description:
      "An orchestrator LLM that reads Jira, email and Salesforce cases together and produces one priority-ranked triage list with a suggested reply and a tip per item.",
    metrics: [
      { value: "3", label: "live sources in one view" },
      { value: "1", label: "priority-ranked list to work from" },
    ],
    stack: [
      "LLM orchestration",
      "Jira API",
      "Email integration",
      "Salesforce Cases",
      "Agentic tooling",
    ],
    sections: [
      {
        heading: "Context",
        body: [
          "Support work is spread across three places: tickets in Jira, requests arriving by email, and cases in Salesforce. Triage means checking all three, holding the overlap in your head, and deciding what to do first.",
        ],
      },
      {
        heading: "What I built",
        body: [
          "A single orchestrator LLM coordinating all three live sources. It tracks new and updated tickets, reads and prioritises incoming mail, and flags whether a new case is routine or genuinely new.",
          "The output is one priority-ranked dashboard, with a suggested reply and a short tip attached to each item.",
        ],
      },
      {
        heading: "Outcome",
        body: [
          "Triage stops being three separate sweeps and becomes one ordered list, which is where the time is saved and where items stop being missed.",
          "This is a working internal tool rather than a product, and it is described here as one.",
        ],
      },
    ],
  },
];

export const getCaseStudy = (slug: string) => work.find((w) => w.slug === slug);
