"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, useScroll, useTransform } from "motion/react";
import * as m from "motion/react-m";
import { divisions, studio } from "@/content/mxt";
import Wordmark from "./Wordmark";

const words = ["cool shit", "websites", "auth", "cartoons", "bangers", "plugins"];
const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [i, setI] = useState(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "35%"]);
  const bgRotate = useTransform(scrollYProgress, [0, 1], [0, -6]);

  useEffect(() => {
    const id = setInterval(() => setI((n) => (n + 1) % words.length), 2200);
    return () => clearInterval(id);
  }, []);

  return (
    <section
      ref={ref}
      id="top"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[100svh] flex-col overflow-hidden px-4 pb-10 pt-28 sm:px-8"
    >
      {/* giant outlined wordmark drifting behind everything */}
      <m.div
        aria-hidden="true"
        style={{ y: bgY, rotate: bgRotate }}
        className="pointer-events-none absolute -right-[6vw] top-[10vh] -z-10 w-[92vw] select-none opacity-[0.16] sm:w-[72vw]"
      >
        <Wordmark outline className="w-full" />
      </m.div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 bottom-0 -z-10 size-[42rem] rounded-full bg-signal/20 blur-[140px]"
      />

      <div className="mx-auto flex w-full max-w-[1400px] flex-1 flex-col">
        <div
          className="intro-fade eyebrow flex flex-wrap items-center gap-x-6 gap-y-2 border-b border-line pb-4"
        >
          <span className="flex items-center gap-2 text-fg">
            <span className="blink inline-block size-2 rounded-full bg-signal" />
            {studio.name}
          </span>
          <span>Est. {studio.founded}</span>
          <span>{studio.location}</span>
          <span className="sm:ml-auto">4 divisions · 1 human · 0 chill</span>
        </div>

        <h1 id="hero-title" className="display mt-10 text-[clamp(4.2rem,16vw,14rem)] sm:mt-14">
          <span className="sr-only">We build cool shit — websites, auth platforms, animated films and records.</span>
          <span aria-hidden="true" className="block overflow-hidden pb-[0.04em]">
            <span className="intro-rise block">We build</span>
          </span>
          <span aria-hidden="true" className="relative block h-[0.92em] overflow-hidden text-signal">
            <AnimatePresence mode="popLayout" initial={false}>
              <m.span
                key={words[i]}
                className="absolute left-0 top-0 block whitespace-nowrap"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-100%" }}
                transition={{ duration: 0.6, ease }}
              >
                {words[i]}
                <span className="text-fg">.</span>
              </m.span>
            </AnimatePresence>
          </span>
        </h1>

        <div className="mt-auto grid gap-10 pt-14 lg:grid-cols-12 lg:items-end">
          <div className="intro-fade lg:col-span-6 [animation-delay:.25s]">
            <p className="max-w-[46ch] text-lg leading-relaxed text-fg/85 sm:text-xl">
              {studio.oneLiner}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#contact" className="btn">
                Work with us <span aria-hidden="true">→</span>
              </a>
              <a href="#products" className="btn btn-ghost">
                See what we shipped
              </a>
            </div>
          </div>

          <ul
            aria-label="Division status"
            className="font-mono text-xs lg:col-span-5 lg:col-start-8"
          >
            {divisions.map((d, n) => (
              <li
                key={d.slug}
                style={{ animationDelay: `${0.4 + n * 0.08}s` }}
                className="intro-fade border-t border-line last:border-b"
              >
                <a
                  href={`#${d.slug}`}
                  className="group flex items-center gap-4 py-3 transition-colors hover:text-fg"
                >
                  <span className="text-muted">{d.index}</span>
                  <span className="uppercase tracking-widest text-fg">MXT {d.name}</span>
                  <span className="ml-auto flex items-center gap-2 text-muted group-hover:text-fg">
                    <span className="size-1.5 rounded-full" style={{ background: d.color }} />
                    {d.status}
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
