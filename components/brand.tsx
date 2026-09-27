import { cn } from "@/lib/utils"
import { site } from "@/lib/site"

/** Blinking status dot used in the CTA buttons and live-call badges. */
export function PulseDot({ className }: { className?: string }) {
  return <span aria-hidden className={cn("block size-1.5 rounded-full motion-safe:animate-cp-pulse", className)} />
}

export function Logo({ small }: { small?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <span
        aria-hidden
        className={cn(
          "grid place-items-center rounded-full border-[1.5px] border-accent",
          small ? "size-5" : "size-6"
        )}
      >
        <span className={cn("block rounded-full bg-accent", small ? "size-[7px]" : "size-2")} />
      </span>
      <span className={cn("font-semibold tracking-[-0.015em] text-fg", small ? "text-[15px]" : "text-[16.5px]")}>
        {site.name}
      </span>
    </span>
  )
}

const ctaBase =
  "inline-flex shrink-0 items-center whitespace-nowrap transition-colors outline-none focus-visible:ring-3 focus-visible:ring-ring/50"

const ctaSizes = {
  sm: "rounded-lg px-[17px] py-2.5 text-[14.5px] gap-[9px]",
  lg: "rounded-[10px] px-[26px] py-4 text-[16.5px] gap-2.5",
  xl: "rounded-[10px] px-7 py-[17px] text-[17px] gap-2.5",
}

type CtaProps = {
  size?: keyof typeof ctaSizes
  /** Where on the page the CTA sits; sent with the conversion event. */
  location: string
  className?: string
}

// Plain anchors on purpose: crawlers and phones need a real href, and analytics
// picks up clicks through a delegated listener (components/analytics.tsx).
export function CallDemoButton({ size = "lg", location, className }: CtaProps) {
  return (
    <a
      href={`tel:${site.phone}`}
      data-cta-location={location}
      className={cn(ctaBase, "bg-accent font-semibold text-white hover:bg-accent-hover", ctaSizes[size], className)}
    >
      <PulseDot className={cn("bg-accent-glow", size !== "sm" && "size-[7px]")} />
      Call Demo Agent
    </a>
  )
}

/**
 * Into the app's signup. Same tab on purpose: the app shares this site's typefaces, colours
 * and logo, so it reads as the next page of the same product rather than a hand-off.
 */
export function GetStartedButton({ size = "lg", location, className }: CtaProps) {
  return (
    <a
      href={site.signup}
      data-cta-location={location}
      className={cn(
        ctaBase,
        "group border border-line-strong font-medium text-fg hover:border-line-hover hover:bg-raised",
        ctaSizes[size],
        className
      )}
    >
      Start free trial
      <span aria-hidden className="text-fg-subtle transition-transform group-hover:translate-x-0.5 group-hover:text-fg">
        →
      </span>
    </a>
  )
}
