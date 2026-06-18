import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: 72,
          background: "linear-gradient(135deg, #FBF8F3 0%, #EBE2D3 100%)",
        }}
      >
        <div
          style={{
            fontSize: 30,
            color: "#B8935A",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
          }}
        >
          Carlo&apos;s Bakery Brasil
        </div>
        <div
          style={{
            marginTop: 36,
            maxWidth: 900,
            textAlign: "center",
            fontSize: 92,
            lineHeight: 1.05,
            color: "#211611",
            fontWeight: 700,
          }}
        >
          A única Carlo&apos;s Bakery fora dos EUA
        </div>
        <div
          style={{
            marginTop: 34,
            fontSize: 28,
            color: "#5C4A3A",
          }}
        >
          Buddy Valastro · São Paulo · Desde 1910
        </div>
      </div>
    ),
    size,
  );
}
