"use client";

import { useState, type FormEvent } from "react";
import { contactRoutes, mcloudTiers } from "@/content/site";
import f from "./ContactForm.module.css";

type Props = {
  variant?: "general" | "lead";
  defaultTo?: string;
  submitLabel?: string;
};

export default function ContactForm({
  variant = "general",
  defaultTo = "general",
  submitLabel,
}: Props) {
  const [state, setState] = useState<"idle" | "sending" | "ok" | "err">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state === "sending") return;
    const form = e.currentTarget;
    const fd = new FormData(form);
    setState("sending");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: fd.get("name"),
          email: fd.get("email"),
          business: fd.get("business"),
          to: fd.get("to") || defaultTo,
          tier: fd.get("tier"),
          message: fd.get("message"),
          company: fd.get("company"),
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Something went wrong.");
      setState("ok");
      form.reset();
    } catch (err) {
      setState("err");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (state === "ok") {
    return (
      <div className={f.success} role="status">
        <h3>Message sent.</h3>
        <p>
          Thanks — it landed in the right inbox. We usually reply within a day or
          two.
        </p>
      </div>
    );
  }

  const isLead = variant === "lead";

  return (
    <form className={f.form} onSubmit={onSubmit} noValidate>
      <input
        type="text"
        name="company"
        className={f.honey}
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className={f.row}>
        <div className={f.field}>
          <label className={f.label} htmlFor="cf-name">
            Name
          </label>
          <input
            id="cf-name"
            name="name"
            className={f.input}
            placeholder="Your name"
            autoComplete="name"
          />
        </div>
        <div className={f.field}>
          <label className={f.label} htmlFor="cf-email">
            Email <span className={f.req}>*</span>
          </label>
          <input
            id="cf-email"
            name="email"
            type="email"
            required
            className={f.input}
            placeholder="you@email.com"
            autoComplete="email"
          />
        </div>
      </div>

      {isLead ? (
        <div className={f.row}>
          <div className={f.field}>
            <label className={f.label} htmlFor="cf-business">
              Business
            </label>
            <input
              id="cf-business"
              name="business"
              className={f.input}
              placeholder="Company / project name"
              autoComplete="organization"
            />
          </div>
          <div className={f.field}>
            <label className={f.label} htmlFor="cf-tier">
              Plan you&apos;re eyeing
            </label>
            <select id="cf-tier" name="tier" className={f.select} defaultValue="">
              <option value="">Not sure yet</option>
              {mcloudTiers.map((t) => (
                <option key={t.name} value={t.name}>
                  {t.name} — {t.price}
                  {t.cadence}
                </option>
              ))}
            </select>
          </div>
        </div>
      ) : (
        <div className={f.field}>
          <label className={f.label} htmlFor="cf-to">
            What&apos;s it about?
          </label>
          <select
            id="cf-to"
            name="to"
            className={f.select}
            defaultValue={defaultTo}
          >
            {contactRoutes.map((r) => (
              <option key={r.value} value={r.value}>
                {r.label}
              </option>
            ))}
          </select>
        </div>
      )}

      <div className={`${f.field} ${f.full}`}>
        <label className={f.label} htmlFor="cf-message">
          Message <span className={f.req}>*</span>
        </label>
        <textarea
          id="cf-message"
          name="message"
          required
          className={f.textarea}
          placeholder={
            isLead
              ? "Tell us about your business and what you need the site to do."
              : "What can we help with?"
          }
        />
      </div>

      <div className={f.submitRow}>
        <button type="submit" className="btn" disabled={state === "sending"}>
          {state === "sending"
            ? "Sending…"
            : submitLabel || (isLead ? "Request a quote →" : "Send message →")}
        </button>
        {state === "err" && (
          <span className={`${f.status} ${f.err}`}>{error}</span>
        )}
      </div>
    </form>
  );
}
