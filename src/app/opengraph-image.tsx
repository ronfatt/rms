import { ImageResponse } from "next/og";

export const alt =
  "R.ON Meraki Studio - AI Director for video, music and product-like experiences";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          background:
            "radial-gradient(circle at 18% 18%, rgba(238, 198, 96, 0.22), transparent 32%), radial-gradient(circle at 82% 18%, rgba(96, 145, 255, 0.24), transparent 34%), linear-gradient(135deg, #050505 0%, #121212 54%, #050505 100%)",
          color: "#fff8e6",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(5,5,5,0.98) 0%, rgba(5,5,5,0.82) 48%, rgba(5,5,5,0.36) 100%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 72,
            top: 72,
            width: 390,
            height: 486,
            borderRadius: 54,
            background:
              "linear-gradient(145deg, rgba(232,198,109,0.18), rgba(96,145,255,0.24) 50%, rgba(255,255,255,0.06))",
            border: "1px solid rgba(255,255,255,0.16)",
            boxShadow: "0 32px 120px rgba(96,145,255,0.22)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 122,
            top: 126,
            width: 290,
            height: 290,
            borderRadius: 999,
            border: "1px solid rgba(232,198,109,0.32)",
            boxShadow: "0 0 80px rgba(232,198,109,0.22)",
          }}
        />
        <div
          style={{
            position: "absolute",
            right: 198,
            top: 202,
            width: 138,
            height: 138,
            borderRadius: 999,
            background:
              "radial-gradient(circle, rgba(232,198,109,0.95), rgba(232,198,109,0.16) 58%, transparent 70%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            left: 76,
            top: 70,
            right: 76,
            bottom: 62,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            border: "1px solid rgba(238, 198, 96, 0.22)",
            borderRadius: 42,
            padding: 54,
            boxShadow: "0 0 80px rgba(238, 198, 96, 0.12)",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{
                fontSize: 24,
                color: "#e8c66d",
                letterSpacing: 6,
                textTransform: "uppercase",
              }}
            >
              R.ON Meraki Studio
            </div>
            <div
              style={{
                fontSize: 22,
                color: "#cfd8ff",
                padding: "11px 20px",
                border: "1px solid rgba(207, 216, 255, 0.28)",
                borderRadius: 999,
                background: "rgba(255,255,255,0.06)",
              }}
            >
              AI + Director OS
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div
              style={{
                width: 760,
                fontSize: 78,
                lineHeight: 0.98,
                fontWeight: 800,
              }}
            >
              AI Director for video, music and product-like experiences.
            </div>
            <div
              style={{
                width: 660,
                fontSize: 28,
                lineHeight: 1.35,
                color: "rgba(255,248,230,0.78)",
              }}
            >
              Cinematic systems built through direction, sound and vibe-coded
              execution.
            </div>
          </div>

          <div style={{ display: "flex", gap: 16 }}>
            <div
              style={{
                fontSize: 22,
                color: "#fff8e6",
                padding: "14px 20px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.14)",
              }}
            >
              Video Creator
            </div>
            <div
              style={{
                fontSize: 22,
                color: "#fff8e6",
                padding: "14px 20px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.14)",
              }}
            >
              Music Producer
            </div>
            <div
              style={{
                fontSize: 22,
                color: "#fff8e6",
                padding: "14px 20px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.14)",
              }}
            >
              Vibe Coder
            </div>
          </div>
        </div>
      </div>
    ),
    size,
  );
}
