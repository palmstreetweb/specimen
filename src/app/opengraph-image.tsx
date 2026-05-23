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
          background: bg,
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          padding: "56px 64px",
          color: ink,
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Top rule */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: `3px solid ${ink}`,
            paddingTop: 14,
            fontFamily: "monospace",
            fontSize: 18,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
          }}
        >
          <span>Issue No. 14 · Q4 / 2026</span>
          <span style={{ color: accent, display: "flex", alignItems: "center", gap: 8 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: accent, display: "flex" }} />
            ON PRESS · SHIPS 06 OCT
          </span>
        </div>

        {/* Body — gigantic Aa */}
        <div
          style={{
            display: "flex",
            flex: 1,
            alignItems: "flex-end",
            justifyContent: "space-between",
            marginTop: 32,
          }}
        >
          <div
            style={{
              display: "flex",
              fontFamily: "Georgia, serif",
              fontSize: 460,
              lineHeight: 0.85,
              color: ink,
              letterSpacing: "-0.05em",
            }}
          >
            A
            <span style={{ display: "flex", color: accent, fontStyle: "italic" }}>a</span>
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
              gap: 14,
              maxWidth: 440,
            }}
          >
            <div style={{ display: "flex", fontFamily: "Georgia, serif", fontSize: 64, lineHeight: 1.02, letterSpacing: "-0.02em", color: ink, textAlign: "right" }}>
              Type that earns
            </div>
            <div style={{ display: "flex", fontFamily: "Georgia, serif", fontSize: 64, lineHeight: 1.02, letterSpacing: "-0.02em", color: accent, fontStyle: "italic", textAlign: "right" }}>
              its space.
            </div>
            <div style={{ display: "flex", fontFamily: "monospace", fontSize: 20, letterSpacing: "0.04em", textTransform: "uppercase", color: inkMuted, marginTop: 12 }}>
              {new URL(business.url).hostname}
            </div>
          </div>
        </div>

        {/* Bottom rule */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            borderTop: `1px solid ${ink}`,
            paddingTop: 14,
            marginTop: 32,
            fontFamily: "monospace",
            fontSize: 18,
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            color: inkMuted,
          }}
        >
          <span>Specimen Foundry · NYC</span>
          <span>14 families · 168 styles · est. 2018</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
