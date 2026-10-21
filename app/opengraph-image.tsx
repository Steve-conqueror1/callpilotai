import { ImageResponse } from "next/og"

import { site } from "@/lib/site"

export const alt = "CallPilot AI: Your AI receptionist. Every call answered."
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

// ImageResponse renders outside the browser, so CSS variables aren't available.
// These mirror the dark-theme tokens in app/globals.css.
const ink = "#0C0F14"
const hairline = "#232934"
const accent = "#4C6BFF"
const accentSoft = "#8EA0FF"
const fg = "#EDF0F5"
const fgMuted = "#B0B8C6"
const fgFaint = "#8C95A6"
const signal = "#5CCF8B"

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: `radial-gradient(circle at 100% 0%, ${accent}33, ${ink} 55%)`,
          color: fg,
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 32, fontWeight: 600 }}>
          <div
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              border: `3px solid ${accent}`,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ width: 14, height: 14, borderRadius: 7, background: accent }} />
          </div>
          {site.name}
        </div>

        <div style={{ display: "flex", flexDirection: "column", fontSize: 88, fontWeight: 700, lineHeight: 1, letterSpacing: -3 }}>
          <div>Your AI receptionist.</div>
          <div style={{ color: accentSoft }}>Every call answered.</div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            fontSize: 26,
            color: fgMuted,
            borderTop: `1px solid ${hairline}`,
            paddingTop: 28,
          }}
        >
          <div style={{ width: 12, height: 12, borderRadius: 6, background: signal }} />
          AI receptionists for Canadian small businesses
          <div style={{ display: "flex", marginLeft: "auto", color: fgFaint }}>
            {`Call the demo agent · ${site.phoneDisplay}`}
          </div>
        </div>
      </div>
    ),
    size
  )
}
