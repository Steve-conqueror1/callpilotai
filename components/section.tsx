import { cn } from "@/lib/utils"

export function Container({ className, children }: { className?: string; children: React.ReactNode }) {
  return <div className={cn("mx-auto max-w-[1240px] px-7", className)}>{children}</div>
}

/** Numbered mono label above each section heading, e.g. "01 — The problem". */
export function Eyebrow({ className, children }: { className?: string; children: React.ReactNode }) {
  return (
    <span className={cn("font-mono text-[11px] tracking-[0.1em] text-label uppercase", className)}>
      {children}
    </span>
  )
}

/** Section <h2>. The id is required so the <section> can point aria-labelledby at it. */
export function SectionTitle({ id, className, children }: { id: string; className?: string; children: React.ReactNode }) {
  return (
    <h2
      id={id}
      className={cn(
        "mt-4 text-[clamp(30px,3.4vw,46px)] leading-[1.04] font-semibold tracking-[-0.035em] text-balance",
        className
      )}
    >
      {children}
    </h2>
  )
}

export const sectionPadding = "py-[clamp(56px,7vw,104px)]"
