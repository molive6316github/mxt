import Link from "next/link";

export default function NotFound() {
  return (
    <section
      style={{
        minHeight: "70svh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "8rem 1.5rem 4rem",
      }}
    >
      <span className="callsign" style={{ color: "var(--signal)" }}>
        SIGNAL LOST — 404
      </span>
      <h1
        className="display"
        style={{ fontSize: "clamp(3rem, 14vw, 8rem)", margin: "1.2rem 0" }}
      >
        Off air.
      </h1>
      <p className="lead" style={{ margin: "0 auto 2rem" }}>
        That channel doesn&apos;t exist — or it hasn&apos;t started broadcasting
        yet.
      </p>
      <Link href="/" className="btn">
        Back to the studio →
      </Link>
    </section>
  );
}
