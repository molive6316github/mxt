import { ImageResponse } from "next/og";
import { studio } from "@/content/mxt";

export const alt = `${studio.name} — we build bold things`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  const chips = [
    ["mCloud", "#52adff"],
    ["Apex", "#ff5a93"],
    ["Dev", "#ff7a2e"],
  ];
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0c0b09",
          color: "#efe9dc",
          padding: 72,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 26, letterSpacing: 4 }}>
          <div style={{ width: 16, height: 16, borderRadius: 16, background: "#ff5b1f" }} />
          MXT PRODUCTIONS
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 150, fontWeight: 900, lineHeight: 0.9, letterSpacing: -4 }}>
          <span>WE BUILD</span>
          <span style={{ color: "#ff5b1f" }}>BOLD THINGS.</span>
        </div>
        <div style={{ display: "flex", gap: 14 }}>
          {chips.map(([name, color]) => (
            <div
              key={name}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 10,
                border: "2px solid rgba(239,233,220,.2)",
                borderRadius: 999,
                padding: "10px 22px",
                fontSize: 26,
              }}
            >
              <div style={{ width: 12, height: 12, borderRadius: 12, background: color }} />
              {name}
            </div>
          ))}
        </div>
      </div>
    ),
    size,
  );
}
