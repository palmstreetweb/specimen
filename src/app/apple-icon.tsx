import { ImageResponse } from "next/og";
import { business } from "@/lib/business";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
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
          fontSize: 160,
          fontFamily: "Georgia, serif",
          fontWeight: 400,
          letterSpacing: "-0.05em",
          position: "relative",
        }}
      >
        i
        <div
          style={{
            position: "absolute",
            top: 22,
            left: 85,
            width: 26,
            height: 26,
            borderRadius: "50%",
            background: accent,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
