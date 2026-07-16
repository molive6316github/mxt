"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { divisions } from "@/content/site";

const links = [
  ...divisions.map((d) => ({ href: d.href, label: d.full, meta: d.callsign })),
  { href: "/about", label: "About", meta: "STUDIO" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <nav className="nav" data-scrolled={scrolled} aria-label="Primary">
        <Link href="/" className="nav-logo" aria-label="MXT Productions home">
          <span className="sig">MXT</span>
          <span className="sub">Productions</span>
        </Link>
        <ul className="nav-links">
          {divisions.map((d) => (
            <li key={d.slug}>
              <Link
                href={d.href}
                aria-current={pathname === d.href ? "page" : undefined}
              >
                {d.name}
              </Link>
            </li>
          ))}
          <li>
            <Link href="/about" aria-current={pathname === "/about" ? "page" : undefined}>
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="nav-cta">
              Contact
            </Link>
          </li>
        </ul>
        <button
          className="nav-ham"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div className="nav-overlay" data-open={open} role="dialog" aria-modal="true" aria-label="Menu">
        {links.map((l) => (
          <Link key={l.href} href={l.href}>
            {l.label}
            <span className="om">{l.meta}</span>
          </Link>
        ))}
        <Link href="/contact">
          Contact<span className="om">→</span>
        </Link>
      </div>
    </>
  );
}
