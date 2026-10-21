import type { CSSProperties } from "react"
import { cn } from "@/lib/utils"

/**
 * Every Material Symbols icon the site uses. The font is requested with only these glyphs, so
 * an icon missing from this list renders as blank space: add it here first.
 */
export const ICON_NAMES = [
  "arrow_forward",
  "auto_awesome",
  "call",
  "check_circle",
  "dark_mode",
  "edit_note",
  "event_available",
  "expand_more",
  "forum",
  "graphic_eq",
  "handyman",
  "help",
  "light_mode",
  "location_on",
  "nights_stay",
  "person_add",
  "phone_forwarded",
  "record_voice_over",
  "support_agent",
  "tune",
] as const

export type IconName = (typeof ICON_NAMES)[number]

/** Google Fonts serves a subset when given icon_names, which must be sorted alphabetically. */
export const ICON_FONT_URL =
  "https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,400,0..1,0" +
  `&icon_names=${[...ICON_NAMES].sort().join(",")}&display=block`

/** A Material Symbols Rounded glyph in a fixed box, so loading the font never shifts layout. */
export function Icon({
  name,
  size = 20,
  filled = false,
  className,
  style,
}: {
  name: IconName
  size?: number
  filled?: boolean
  className?: string
  style?: CSSProperties
}) {
  return (
    <span
      aria-hidden
      className={cn("material-symbols-rounded inline-block shrink-0 overflow-hidden select-none", className)}
      style={{
        width: size,
        height: size,
        fontSize: size,
        lineHeight: 1,
        fontVariationSettings: `'FILL' ${filled ? 1 : 0}, 'opsz' ${Math.min(48, Math.max(20, size))}`,
        ...style,
      }}
    >
      {name}
    </span>
  )
}
