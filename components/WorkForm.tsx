"use client";

import { useState, type FormEvent } from "react";
import { AnimatePresence } from "motion/react";
import * as m from "motion/react-m";
import { budgets, contactTopics } from "@/content/mxt";

type State = "idle" | "sending" | "ok" | "err";

const label = "eyebrow mb-1 block";

export default function WorkForm() {
  const [state, setState] = useState<State>("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (state === "sending") return;
    const form = e.currentTarget;
    if (!form.reportValidity()) return;
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
          to: fd.get("topic"),
          tier: fd.get("budget"),
          message: fd.get("message"),
          company: fd.get("company"),
        }),
      });
      const data = (await res.json().catch(() => ({}))) as { error?: string };
      if (!res.ok) throw new Error(data.error || "Something broke. Try again?");
      setState("ok");
      form.reset();
    } catch (err) {
      setState("err");
      setError(err instanceof Error ? err.message : "Something broke. Try again?");
    }
  }

  return (
    <AnimatePresence mode="wait" initial={false}>
      {state === "ok" ? (
        <m.div
          key="ok"
          role="status"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-2xl border border-line bg-bg-2 p-8 sm:p-10"
        >
          <p className="display text-6xl text-signal">Got it.</p>
          <p className="mt-4 max-w-[40ch] text-lg text-fg/80">
            Your message landed. Expect a reply from an actual human within a day or two.
          </p>
          <button type="button" className="btn btn-ghost mt-8" onClick={() => setState("idle")}>
            Send another
          </button>
        </m.div>
      ) : (
        <m.form
          key="form"
          onSubmit={onSubmit}
          exit={{ opacity: 0, y: -12 }}
          className="grid gap-7 sm:grid-cols-2"
          aria-describedby={state === "err" ? "form-error" : undefined}
        >
          {/* honeypot — bots fill it, humans never see it */}
          <div aria-hidden="true" className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
            <label>
              Company
              <input type="text" name="company" tabIndex={-1} autoComplete="off" />
            </label>
          </div>

          <div>
            <label htmlFor="wf-name" className={label}>Name</label>
            <input id="wf-name" name="name" className="field" placeholder="Who's asking" autoComplete="name" />
          </div>
          <div>
            <label htmlFor="wf-email" className={label}>
              Email <span className="text-signal">*</span>
            </label>
            <input
              id="wf-email"
              name="email"
              type="email"
              required
              className="field"
              placeholder="you@business.com"
              autoComplete="email"
            />
          </div>
          <div>
            <label htmlFor="wf-business" className={label}>Business</label>
            <input
              id="wf-business"
              name="business"
              className="field"
              placeholder="Name of the thing"
              autoComplete="organization"
            />
          </div>
          <div>
            <label htmlFor="wf-topic" className={label}>What&apos;s this about?</label>
            <select id="wf-topic" name="topic" className="field" defaultValue="mcloud">
              {contactTopics.map((t) => (
                <option key={t.value} value={t.value}>{t.label}</option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="wf-budget" className={label}>Ballpark budget</label>
            <select id="wf-budget" name="budget" className="field" defaultValue={budgets[0]}>
              {budgets.map((b) => (
                <option key={b} value={b}>{b}</option>
              ))}
            </select>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="wf-message" className={label}>
              The pitch <span className="text-signal">*</span>
            </label>
            <textarea
              id="wf-message"
              name="message"
              required
              rows={4}
              className="field resize-y"
              placeholder="What do you need built? Links, vibes, deadlines — all welcome."
            />
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:col-span-2">
            <button type="submit" className="btn disabled:opacity-60" disabled={state === "sending"}>
              {state === "sending" ? "Sending…" : "Send it"} <span aria-hidden="true">→</span>
            </button>
            {state === "err" && (
              <p id="form-error" role="alert" className="text-sm text-apex">
                {error}
              </p>
            )}
          </div>
        </m.form>
      )}
    </AnimatePresence>
  );
}
