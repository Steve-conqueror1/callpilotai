import { cn } from "@/lib/utils"
import { Icon, type IconName } from "@/components/icon"

export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("mx-auto max-w-[1240px] px-5 sm:px-7", className)}>{children}</div>
}

/** Small uppercase label above each section heading, e.g. "01 — The problem". */
export function Eyebrow({ className, children }: { className?: string; children: React.ReactNode }) {
  return <span className={cn("text-[13px] font-bold tracking-[0.06em] text-label uppercase", className)}>{children}</span>
}

/** Section <h2>. The id is required so the <section> can point aria-labelledby at it. */
export function SectionTitle({ id, className, children }: { id: string; className?: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className={cn(
        "mt-3 text-[clamp(30px,3.4vw,44px)] leading-[1.1] font-semibold tracking-[-0.03em] text-balance",
        className
      )}
    >
      {children}
    </h2>
  )
}

/** The design's round icon tile: a soft blue circle with the glyph in the accent colour. */
export function IconTile({ name, className }: { name: IconName; className?: string }) {
  return (
    <span className={cn("grid size-10 shrink-0 place-items-center rounded-full bg-tint text-accent-soft", className)}>
      <Icon name={name} size={22} />
    </span>
  )
}

export const sectionPadding = "py-[clamp(56px,7vw,104px)]"
