import { ImageResponse } from "next/og";
import { business } from "@/lib/business";

export const alt = business.name;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const { accent, bg, ink, inkMuted } = business.brand;

  return new ImageResponse(
    (
      <div
        style={{
          background: ink,
          width: "100%",
          height: "100%",
          display: "flex",
          padding: 64,
          color: bg,
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "60%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 14,
              fontFamily: "monospace",
              fontSize: 18,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              color: accent,
            }}
          >
            <span style={{ width: 12, height: 12, borderRadius: "50%", background: accent, display: "flex" }} />
            Specimen Type Foundry · NYC
          </div>

          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ display: "flex", fontFamily: "Georgia, serif", fontSize: 100, lineHeight: 0.98, color: bg, letterSpacing: "-0.025em" }}>
              Type that
            </div>
            <div style={{ display: "flex", fontFamily: "Georgia, serif", fontSize: 100, lineHeight: 0.98, color: accent, fontStyle: "italic", letterSpacing: "-0.025em" }}>
              earns its space.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              fontFamily: "monospace",
              fontSize: 18,
              letterSpacing: "0.04em",
              textTransform: "uppercase",
              color: bg,
              opacity: 0.7,
            }}
          >
            {new URL(business.url).hostname} · One family per quarter
          </div>
        </div>

        <div
          style={{
            display: "flex",
            width: "40%",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "Georgia, serif",
            fontSize: 480,
            lineHeight: 0.85,
            color: bg,
            letterSpacing: "-0.05em",
          }}
        >
          A
          <span style={{ display: "flex", color: accent, fontStyle: "italic" }}>a</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
