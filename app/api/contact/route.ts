import { NextResponse } from "next/server";

// Formspree endpoint. Override with FORMSPREE_ENDPOINT in the environment.
const FORMSPREE =
  process.env.FORMSPREE_ENDPOINT || "https://formspree.io/f/xpqbnwvl";

type Payload = {
  name?: string;
  email?: string;
  business?: string;
  to?: string; // which division the message is routed to
  tier?: string;
  message?: string;
  company?: string; // honeypot — must stay empty
  token?: string; // optional reCAPTCHA token
};

export async function POST(req: Request) {
  let data: Payload;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const { name, email, business, to, tier, message, company, token } = data;

  // honeypot: real users never fill this
  if (company) {
    return NextResponse.json({ success: true });
  }

  if (!email || !message) {
    return NextResponse.json(
      { error: "Add an email and a message so we can reply." },
      { status: 400 }
    );
  }

  // Optional reCAPTCHA — only enforced when a secret is configured.
  const secret = process.env.RECAPTCHA_SECRET;
  if (secret) {
    if (!token) {
      return NextResponse.json(
        { error: "Verification failed. Please try again." },
        { status: 400 }
      );
    }
    const verify = await fetch("https://www.google.com/recaptcha/api/siteverify", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ secret, response: token }),
    });
    const result = (await verify.json()) as { success?: boolean };
    if (!result.success) {
      return NextResponse.json(
        { error: "Verification failed. Please try again." },
        { status: 400 }
      );
    }
  }

  try {
    const res = await fetch(FORMSPREE, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        name: name || "—",
        email,
        _subject: `MXT · ${to || "general"} inquiry${business ? ` — ${business}` : ""}`,
        business: business || "",
        route: to || "general",
        tier: tier || "",
        message,
      }),
    });

    if (!res.ok) {
      return NextResponse.json(
        { error: "Something went wrong sending that. Try again or email us directly." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Network error. Try again in a moment." },
      { status: 502 }
    );
  }
}
