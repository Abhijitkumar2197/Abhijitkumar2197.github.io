/**
 * Single source of truth for identity, links and metadata.
 * Everything here is real and verifiable — nothing invented.
 */

export const site = {
  name: "Abhijit Kumar",
  role: "Salesforce Developer",
  url: "https://abhijitkumar2197.github.io",

  /** Hero sentence. One concrete claim, no adjectives doing the work. */
  statement:
    "Salesforce developer building and owning production systems for global enterprise orgs — Apex, LWC, integrations, and AI automation on top.",

  /** Sub-line under the hero. */
  context:
    "Noida, India · Salesforce Developer at a Salesforce consulting & ISV firm · open to new roles (30-day notice)",

  location: "Noida, India",
  locality: "Noida",
  region: "Uttar Pradesh",
  country: "India",
  relocation: "Open to relocation and to remote work",

  email: "kumarabhijit2197@gmail.com",
  linkedin: "https://www.linkedin.com/in/abhijit-kumar-/",
  github: "https://github.com/Abhijitkumar2197",

  /** Real file in /public. Filename is what the recruiter sees on download. */
  resume: "/Abhijit-Kumar-Salesforce-Developer.pdf",

  employer: {
    name: "Mirketa",
    descriptor: "Salesforce consulting and ISV firm",
    title: "Salesforce Developer",
    start: "April 2024",
    end: "Present",
  },

  education: {
    degree: "B.Tech, Computer Science & Engineering",
    school: "Birla Institute of Technology, Mesra",
    result: "8.75 CGPA",
    years: "2020 – 2024",
  },
} as const;

export const meta = {
  homeTitle:
    "Abhijit Kumar — Salesforce Developer | Apex, LWC, Integrations, AI Automation",
  homeDescription:
    "Salesforce developer in Noida, India with 2+ years building and owning production systems for global enterprise orgs — Apex, LWC, Flow, Health Cloud, REST integrations, release management, and applied AI in CRM workflows.",
} as const;
