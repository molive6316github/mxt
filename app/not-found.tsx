import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "404 — nothing here",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <section className="flex min-h-[80svh] flex-col items-center justify-center px-4 pt-24 text-center">
      <p className="eyebrow text-signal">Error 404</p>
      <h1 className="display my-6 text-[clamp(4rem,18vw,12rem)]">Wrong turn.</h1>
      <p className="mb-10 max-w-[40ch] text-lg text-fg/75">
        This page doesn&apos;t exist. Either you typo&apos;d, or we haven&apos;t built it yet.
      </p>
      <Link href="/" className="btn">
        Back to the studio <span aria-hidden="true">→</span>
      </Link>
    </section>
  );
}
