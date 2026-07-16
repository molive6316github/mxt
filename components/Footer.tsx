import Link from "next/link";
import { site, divisions } from "@/content/site";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="mark">MXT</div>
            <p style={{ maxWidth: "30ch", color: "var(--ash)", marginTop: "1rem", fontSize: "0.85rem" }}>
              {site.description}
            </p>
          </div>

          <div className="footer-col">
            <h4>Divisions</h4>
            {divisions.map((d) => (
              <Link key={d.slug} href={d.href}>
                {d.full}
              </Link>
            ))}
          </div>

          <div className="footer-col">
            <h4>Studio</h4>
            <Link href="/about">About &amp; Team</Link>
            <Link href="/contact">Contact</Link>
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <p>{site.location}</p>
          </div>
        </div>

        <div className="footer-base">
          <span>
            © {new Date().getFullYear()} {site.name}
          </span>
          <span>Est. {site.founded} — {site.location}</span>
          <span>{site.domain}</span>
        </div>
      </div>
    </footer>
  );
}
