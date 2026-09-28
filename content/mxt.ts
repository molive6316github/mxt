// ─────────────────────────────────────────────────────────────────────────
//  MXT PRODUCTIONS — SITE CONTENT
//  All the copy, divisions, products, music links and socials live here.
//  Change words in this file; the components read from it.
// ─────────────────────────────────────────────────────────────────────────

export const studio = {
  name: "MXT Productions",
  short: "MXT",
  domain: "mxt.productions",
  url: "https://mxt.productions",
  email: "hello@mxt.productions",
  founded: 2024,
  location: "Greenville, SC",
  oneLiner:
    "A creative tech studio building web products, auth platforms, animated films and records — for our clients and for ourselves.",
  description:
    "MXT Productions is a multi-division creative tech studio: web builds for small businesses (mCloud), media — animation and music (Apex), and our own products (Dev) — GateKey, Grraphic, Rootweave and more.",
};

export type DivisionSlug = "mcloud" | "apex" | "dev";

export type Division = {
  slug: DivisionSlug;
  index: string;
  name: string;
  role: string;
  pitch: string;
  body: string;
  status: "open for work" | "in development" | "releasing" | "always shipping";
  /** CSS color token name — see globals.css */
  color: string;
  cta: { label: string; href: string };
  /** sub-units that live inside the division */
  units?: { name: string; note: string; href?: string }[];
};

export const divisions: Division[] = [
  {
    slug: "mcloud",
    index: "01",
    name: "mCloud",
    role: "Web agency",
    pitch: "Your business, but it loads fast and looks expensive.",
    body: "Sites, web apps and digital plumbing for small businesses. Custom-built, not dragged out of a theme store, and handled start to finish by the team that builds it.",
    status: "open for work",
    color: "var(--c-mcloud)",
    cta: { label: "Start a project", href: "#contact" },
  },
  {
    slug: "apex",
    index: "02",
    name: "Apex",
    role: "Media",
    pitch: "Stories and sound — frame by frame, track by track.",
    body: "MXT's media division. Apex handles everything media: animation and music. The first film is deep in development, and the music is already out.",
    status: "releasing",
    color: "var(--c-apex)",
    cta: { label: "Go listen", href: "#music" },
    units: [
      { name: "Animation", note: "First film in development" },
      { name: "Music", note: "molive6316 & Max Oliver, out now", href: "#music" },
    ],
  },
  {
    slug: "dev",
    index: "03",
    name: "Dev",
    role: "Internal dev arm",
    pitch: "We build the tools we wish existed. Then we ship them.",
    body: "The engine room. Dev builds every MXT product — auth platforms, AI tools, plugins, infra experiments — and the stack the other divisions run on.",
    status: "always shipping",
    color: "var(--c-dev)",
    cta: { label: "See the products", href: "#products" },
  },
];

export type Product = {
  name: string;
  kind: string;
  status: "Live" | "Beta" | "Concept" | "In development";
  description: string;
  stack: string[];
  href?: string;
  linkLabel?: string;
  /** a single stat to brag about */
  stat?: { value: string; label: string };
  flagship?: boolean;
};

export const products: Product[] = [
  {
    name: "GateKey",
    kind: "Auth platform",
    status: "Live",
    flagship: true,
    description:
      "One login to rule them all. Discord OAuth plus four OAuth providers, TOTP, passkeys over WebAuthn, recovery codes and proper admin tooling. Self-hosted Postgres, no vendor lock-in, and passwords hashed with argon2id, the way it should be done.",
    stack: ["Next.js 14", "Postgres", "Drizzle ORM", "Arctic OAuth", "WebAuthn", "argon2id"],
    href: "https://gatekey.cc",
    linkLabel: "gatekey.cc",
    stat: { value: "WebAuthn", label: "passkeys built in" },
  },
  {
    name: "Grraphic",
    kind: "AI design review",
    status: "Live",
    description:
      "Drop in a design, get honest feedback. An AI reviewer that spots what's off before your client does.",
    stack: ["AI"], // TODO: add the real stack
    href: "https://grraphic.xyz",
    linkLabel: "grraphic.xyz",
  },
  {
    name: "Rootweave",
    kind: "Obsidian plugin",
    status: "Live",
    description:
      "Conlang tooling that lives inside your Obsidian vault. For people who looked at English and thought \"I can do better.\" Live on the community marketplace.",
    stack: ["Obsidian plugin", "Markdown"],
    href: "https://community.obsidian.md/plugins/rootweave",
    linkLabel: "Obsidian community",
    stat: { value: "200+", label: "installs" },
  },
  {
    name: "Pi Live",
    kind: "Real-time data",
    status: "Live",
    description:
      "Live data, streamed straight to your browser over WebSockets. FastAPI does the heavy lifting, the interactive frontend does the showing off.",
    stack: ["FastAPI", "WebSocket", "Python", "Vercel"],
  },
  {
    name: "Drifthost",
    kind: "Minecraft hosting",
    status: "Concept",
    description:
      "Minecraft servers that sleep when nobody's on and wake the second someone connects, thanks to lazymc. Pay for play, not for an empty world.",
    stack: ["lazymc", "Minecraft", "Wake-on-connect"],
  },
];

export type Artist = {
  name: string;
  blurb: string;
  links: { label: string; href: string }[];
};

// TODO: swap these search links for the direct artist profile URLs.
const searchLinks = (q: string) => [
  { label: "Spotify", href: `https://open.spotify.com/search/${encodeURIComponent(q)}` },
  { label: "Apple Music", href: `https://music.apple.com/us/search?term=${encodeURIComponent(q)}` },
  { label: "YouTube Music", href: `https://music.youtube.com/search?q=${encodeURIComponent(q)}` },
  { label: "SoundCloud", href: `https://soundcloud.com/search?q=${encodeURIComponent(q)}` },
];

export const artists: Artist[] = [
  {
    name: "molive6316",
    blurb: "Beats, loops and late-night experiments. The label's flagship project.",
    links: searchLinks("molive6316"),
  },
  {
    name: "Max Oliver",
    blurb: "Releases under the Max Oliver name. A different room, a different mood.",
    links: searchLinks("Max Oliver"),
  },
];

export const socials = [
  { label: "GitHub", href: "https://github.com/mxt-productions" },
  { label: "Email", href: `mailto:${studio.email}` },
];

export const contactTopics = [
  { value: "mcloud", label: "A website / app for my business" },
  { value: "dev", label: "Something with one of the products" },
  { value: "apex", label: "Music, film or animation" },
  { value: "general", label: "Just saying hi" },
];

export const budgets = ["Not sure yet", "< $1k", "$1k – $3k", "$3k – $8k", "$8k+"];
