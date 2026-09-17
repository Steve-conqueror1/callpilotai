import { Reveal } from "@/components/motion"
import { Container, Eyebrow, SectionTitle, sectionPadding } from "@/components/section"

const steps = [
  {
    title: "We learn your business",
    body: "Services, service area, hours, pricing guidance, who to reach for what. We write the agent's script with you and tune the voice.",
  },
  {
    title: "Connect your number",
    body: "Keep your existing line and forward it — always, after hours, or only when you don't pick up. Or add a new local number.",
  },
  {
    title: "Every call answered",
    body: "Calls get answered, booked, and logged. You review transcripts and summaries, and adjust the agent any time.",
  },
]

export function HowItWorks() {
  return (
    <section id="how" aria-labelledby="how-title" className="scroll-mt-16 border-b border-hairline bg-band">
      <Container className={sectionPadding}>
        <Eyebrow>02 — How it works</Eyebrow>
        <SectionTitle id="how-title" className="max-w-[22ch]">Live in days, not months.</SectionTitle>

        <ol className="mt-11 grid gap-px overflow-hidden rounded-[14px] border border-hairline bg-hairline md:grid-cols-3">
          {steps.map((step, i) => (
            <li key={step.title} className="min-w-0 bg-panel">
              <Reveal delay={i * 0.1} className="h-full px-[26px] py-[30px]">
                <span className="font-mono text-[11.5px] text-accent">STEP 0{i + 1}</span>
                <h3 className="mt-4 text-[20.5px] font-semibold tracking-[-0.02em]">{step.title}</h3>
                <p className="mt-[11px] text-[15.5px] leading-relaxed text-fg-subtle">{step.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  )
}
