import { cn } from "@/lib/utils"
import { site } from "@/lib/site"
import { Icon } from "@/components/icon"

/** Blinking status dot used in live-call badges. */
export function PulseDot({ className }: { className?: string }) {
  return <span aria-hidden className={cn("block size-2 rounded-full motion-safe:animate-cp-pulse", className)} />
}

/** The ring-and-dot mark with the wordmark, as the app and the mobile app show it. */
export function Logo({ small }: { small?: boolean }) {
  return (
    <span className="flex items-center gap-2.5">
      <span
        aria-hidden
        className={cn("grid place-items-center rounded-full border-logo", small ? "size-6 border-[2.5px]" : "size-7 border-[3px]")}
      >
        <span className={cn("block rounded-full bg-logo", small ? "size-2" : "size-[9px]")} />
      </span>
      <span className={cn("font-bold tracking-[-0.01em] text-fg", small ? "text-base" : "text-lg")}>
        CallPilot <span className="font-medium text-fg-muted">AI</span>
      </span>
    </span>
  )
}

const ctaBase =
  "inline-flex shrink-0 items-center justify-center whitespace-nowrap font-semibold transition-colors outline-none focus-visible:ring-2 focus-visible:ring-focus focus-visible:ring-offset-2 focus-visible:ring-offset-ink"

const ctaSizes = {
  sm: "h-10 rounded-[10px] px-4 text-[15px] gap-2",
  lg: "h-12 rounded-xl px-5 text-base gap-2",
  xl: "h-[52px] rounded-xl px-6 text-[17px] gap-2.5",
}

const iconSize = { sm: 18, lg: 20, xl: 22 }

type CtaProps = {
  size?: keyof typeof ctaSizes
  /** Where on the page the CTA sits; sent with the conversion event. */
  location: string
  className?: string
}

// Plain anchors on purpose: crawlers and phones need a real href, and analytics
// picks up clicks through a delegated listener (instrumentation-client.ts).
export function CallDemoButton({ size = "lg", location, className }: CtaProps) {
  return (
    <a
      href={`tel:${site.phone}`}
      data-cta-location={location}
      className={cn(ctaBase, "bg-accent text-white hover:bg-accent-hover hover:text-white", ctaSizes[size], className)}
    >
      <Icon name="call" size={iconSize[size]} filled />
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
        "group border border-line bg-panel text-fg shadow-card hover:bg-raised hover:text-fg",
        ctaSizes[size],
        className
      )}
    >
      Start free trial
      <Icon
        name="arrow_forward"
        size={iconSize[size]}
        className="text-fg-muted transition-transform group-hover:translate-x-0.5 group-hover:text-fg"
      />
    </a>
  )
}
