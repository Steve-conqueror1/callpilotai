import { Reveal } from "@/components/motion"
import { Container, Eyebrow, IconTile, SectionTitle, sectionPadding } from "@/components/section"

const steps = [
  {
    title: "We learn your business",
    icon: "edit_note",
    body: "Services, service area, hours, pricing guidance, who to reach for what. We write the agent's script with you and tune the voice.",
  },
  {
    title: "Connect your number",
    icon: "phone_forwarded",
    body: "Keep your existing line and forward it — always, after hours, or only when you don't pick up. Or add a new local number.",
  },
  {
    title: "Every call answered",
    icon: "check_circle",
    body: "Calls get answered, booked, and logged. You review transcripts and summaries, and adjust the agent any time.",
  },
] as const

export function HowItWorks() {
  return (
    <section id="how" aria-labelledby="how-title" className="scroll-mt-16 border-b border-hairline bg-band">
      <Container className={sectionPadding}>
        <Eyebrow>02 — How it works</Eyebrow>
        <SectionTitle id="how-title" className="max-w-[22ch]">Live in days, not months.</SectionTitle>

        <ol className="mt-10 grid gap-4 md:grid-cols-3">
          {steps.map((step, i) => (
            <li key={step.title} className="min-w-0">
              <Reveal delay={i * 0.1} className="flex h-full flex-col rounded-2xl border border-line bg-panel p-6 shadow-card">
                <span className="flex items-center justify-between">
                  <IconTile name={step.icon} />
                  <span className="inline-flex h-[26px] items-center rounded-full bg-raised px-2.5 text-[13px] font-bold text-fg-muted">
                    Step {i + 1}
                  </span>
                </span>
                <h3 className="mt-5 text-xl font-semibold tracking-[-0.01em]">{step.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-fg-muted">{step.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
