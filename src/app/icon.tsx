import { ImageResponse } from "next/og";
import { business } from "@/lib/business";

export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  const { accent, bg, ink } = business.brand;

  return new ImageResponse(
    (
      <div
        style={{
          background: bg,
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: ink,
          fontSize: 56,
          fontFamily: "Georgia, serif",
          fontWeight: 400,
          letterSpacing: "-0.05em",
          position: "relative",
          border: `2px solid ${ink}`,
        }}
      >
        i
        <div
          style={{
            position: "absolute",
            top: 8,
            left: 30,
            width: 9,
            height: 9,
            borderRadius: "50%",
            background: accent,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
