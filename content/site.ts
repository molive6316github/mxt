// ─────────────────────────────────────────────────────────────────────────
//  MXT PRODUCTIONS — SITE CONTENT
//  Everything editable lives here. Change copy, projects, pricing, and team
//  in this one file; the pages read from it. No design code below.
// ─────────────────────────────────────────────────────────────────────────

export const site = {
  name: "MXT Productions",
  domain: "mxt.productions",
  tagline: "A production house of four.",
  founded: 2024,
  location: "Greenville, SC",
  email: "hello@mxt.productions",
  description:
    "MXT Productions is a multi-division studio building software, client web experiences, animated film, and the business behind it — all under one signal.",
};

export type Division = {
  slug: string;
  callsign: string; // broadcast-style station ID
  name: string; // "Dev", "mCloud"...
  full: string; // "MXT Dev"
  role: string; // short role line
  blurb: string; // one-sentence what-it-does
  accent: string; // hex accent for the channel
  href: string;
  status: "on air" | "in production" | "internal";
};

export const divisions: Division[] = [
  {
    slug: "dev",
    callsign: "MXT-01",
    name: "Dev",
    full: "MXT Dev",
    role: "Software & Product",
    blurb:
      "In-house engineering. We design and ship web apps, tools, and internal products end to end.",
    accent: "#7de8d8",
    href: "/dev",
    status: "on air",
  },
  {
    slug: "mcloud",
    callsign: "MXT-02",
    name: "mCloud",
    full: "MXT mCloud",
    role: "Web Agency",
    blurb:
      "Websites that close deals. Design, build, and hosting for businesses that need to look inevitable.",
    accent: "#8b7bff",
    href: "/mcloud",
    status: "on air",
  },
  {
    slug: "apex",
    callsign: "MXT-03",
    name: "Apex",
    full: "MXT Apex",
    role: "Animation Studio",
    blurb:
      "An animated film studio telling stories that don't fit anywhere else — built frame by frame.",
    accent: "#f0b12a",
    href: "/apex",
    status: "in production",
  },
  {
    slug: "legal",
    callsign: "MXT-04",
    name: "Legal",
    full: "MXT Legal",
    role: "Business & Ops",
    blurb:
      "The quiet division. Contracts, structure, and compliance that keep the other three moving.",
    accent: "#9fb4c6",
    href: "/legal",
    status: "internal",
  },
];

// ── MXT DEV — portfolio / case studies ────────────────────────────────────
export type Project = {
  name: string;
  tag: string;
  status: "Live" | "Beta" | "In Development" | "Internal";
  summary: string;
  detail: string;
  stack: string[];
  href?: string;
  year: string;
};

export const projects: Project[] = [
  {
    name: "readmake",
    tag: "Developer Tool",
    status: "Live",
    year: "2025",
    summary: "Generate polished README files from a repo in seconds.",
    detail:
      "Point it at a codebase and readmake writes structured, honest documentation — install steps, usage, badges, and structure — so the docs match the code instead of trailing it.",
    stack: ["Next.js", "TypeScript", "LLM"],
    href: undefined,
  },
  {
    name: "KALbot",
    tag: "Automation",
    status: "Live",
    year: "2025",
    summary: "A configurable bot that runs the busywork you'd rather not.",
    detail:
      "KALbot handles scheduled tasks, moderation, and command routing across chat platforms. Built to be extended — drop in a module, wire a trigger, done.",
    stack: ["Node", "Webhooks", "Redis"],
    href: undefined,
  },
  {
    name: "Rootweave",
    tag: "Platform",
    status: "In Development",
    year: "2026",
    summary: "Infrastructure that ties MXT's products into one graph.",
    detail:
      "Rootweave is the connective tissue — shared identity, data, and events across every MXT product so they behave like one system instead of five.",
    stack: ["Postgres", "GraphQL", "Edge"],
    href: undefined,
  },
  {
    name: "Pixel",
    tag: "Design Tool",
    status: "Beta",
    year: "2026",
    summary: "A focused canvas for pixel art and game-ready sprites.",
    detail:
      "Pixel is a lightweight editor with palette locking, animation frames, and clean export — made for artists who want to draw, not fight a menu.",
    stack: ["Canvas", "WebGL", "TypeScript"],
    href: undefined,
  },
  {
    name: "prodpad",
    tag: "Internal Product",
    status: "Internal",
    year: "2026",
    summary: "The control room MXT runs itself from.",
    detail:
      "prodpad is where projects, clients, releases, and roadmaps live. It's the internal dashboard powering every division — and the testbed for tools we later ship.",
    stack: ["Next.js", "Supabase", "TypeScript"],
    href: undefined,
  },
];

// ── MXT mCLOUD — services + pricing ───────────────────────────────────────
export const mcloudServices = [
  {
    title: "Design",
    body: "Custom interface and brand design — no templates, no theme marketplace. Your business, drawn from scratch.",
  },
  {
    title: "Build",
    body: "Fast, responsive sites built on a modern stack. Clean code you own, not a page-builder you rent.",
  },
  {
    title: "Host & Maintain",
    body: "Managed hosting, updates, backups, and uptime. You get emails answered, not a ticket queue.",
  },
  {
    title: "Grow",
    body: "SEO, analytics, and content updates that keep the site earning after launch day.",
  },
];

export const mcloudTiers = [
  {
    name: "Base",
    price: "$200",
    cadence: "/mo",
    highlight: false,
    tagline: "Everything a small business needs to look established online.",
    features: [
      "Custom multi-page website",
      "Managed hosting & SSL",
      "Mobile-first responsive build",
      "Monthly content updates",
      "Email support",
    ],
  },
  {
    name: "Growth",
    price: "$335",
    cadence: "/mo",
    highlight: true,
    tagline: "For businesses ready to turn the site into a channel.",
    features: [
      "Everything in Base",
      "SEO & analytics setup",
      "Lead-capture & forms",
      "Blog / CMS integration",
      "Priority support",
    ],
  },
  {
    name: "Full Stack",
    price: "$470",
    cadence: "/mo",
    highlight: false,
    tagline: "The complete engine — every add-on, handled.",
    features: [
      "Everything in Growth",
      "E-commerce / booking",
      "Custom app features",
      "Automations & integrations",
      "Dedicated line to the team",
    ],
  },
];

export const mcloudSetup = {
  fee: "$500",
  note: "One-time setup fee — waived when you start on a contract.",
};

export const mcloudWhy = [
  {
    k: "One team, start to finish",
    v: "The person who designs it builds it and maintains it. Nothing gets lost in a handoff because there is no handoff.",
  },
  {
    k: "You own everything",
    v: "Your code, your domain, your data. Leave whenever you want — though people rarely do.",
  },
  {
    k: "Built by a software company",
    v: "mCloud is backed by MXT Dev. Your site runs on the same engineering the studio uses for its own products.",
  },
  {
    k: "Priced to stay",
    v: "Flat monthly pricing with no surprise invoices. The setup fee disappears the moment you commit.",
  },
];

// ── MXT APEX — film studio ────────────────────────────────────────────────
export const apexProduction = {
  title: "Untitled Feature",
  codename: "PROJECT ASCENT",
  logline:
    "A story told in motion — MXT Apex's first animated feature, currently in pre-production.",
  status: "Pre-production",
  eta: "TBA",
};

export const apexTeam = [
  { name: "Max Oliver", role: "Director / Founder" },
  { name: "Open", role: "Lead Animator" },
  { name: "Open", role: "Story & Script" },
  { name: "Open", role: "Sound & Score" },
];

export const apexReleased: {
  title: string;
  kind: string;
  year: string;
  note: string;
}[] = [
  // No public releases yet — Apex is in production.
  // Add released shorts / trailers here as they ship.
];

// ── MXT LEGAL — ops ───────────────────────────────────────────────────────
export const legalAreas = [
  {
    title: "Entity & Structure",
    body: "MXT operates as a single company with four divisions under one legal entity, keeping ownership and liability clean.",
  },
  {
    title: "Contracts",
    body: "Standardized client agreements, statements of work, and division-to-division terms so nothing runs on a handshake.",
  },
  {
    title: "IP & Licensing",
    body: "Software, film, and brand assets are held and licensed centrally, protecting what each division creates.",
  },
  {
    title: "Compliance",
    body: "Tax, privacy, and platform obligations reviewed on a regular cadence so the studio can move without surprises.",
  },
];

// ── ABOUT / TEAM ──────────────────────────────────────────────────────────
export const founder = {
  name: "Max Oliver",
  alias: "molive6316",
  role: "Founder & Director",
  bio: [
    "Max Oliver founded MXT in 2024 out of a simple frustration: the interesting work never fit inside one job title. Software, design, film, music — all of it wanted to be built, and none of it wanted to wait for permission.",
    "So MXT became the container. What started as a personal studio for shipping software and releasing music grew into four working divisions — engineering, a client web agency, an animation studio, and the business ops that hold them together.",
    "Max still writes the code, directs the films, and answers the client emails. The goal was never to be big. It was to be able to make anything.",
  ],
};

export const mission = {
  headline: "Make anything, under one signal.",
  body: "MXT exists to prove that a small, sharp team can build across mediums without diluting any of them. Every division sharpens the others — the software funds the film, the agency stress-tests the tools, and the whole thing stays independent.",
};

export const timeline = [
  { year: "2024", event: "MXT founded in Greenville, SC. First software + music releases." },
  { year: "2025", event: "MXT Dev ships readmake and KALbot. mCloud takes its first clients." },
  { year: "2026", event: "MXT Apex enters production. Rootweave and prodpad connect the studio." },
];

// ── CONTACT ROUTING ───────────────────────────────────────────────────────
export const contactRoutes = [
  { value: "mcloud", label: "Hire mCloud (websites)", division: "MXT mCloud" },
  { value: "dev", label: "Software / product", division: "MXT Dev" },
  { value: "apex", label: "Film & animation", division: "MXT Apex" },
  { value: "legal", label: "Business / legal", division: "MXT Legal" },
  { value: "general", label: "Something else", division: "MXT Productions" },
];
