import { Reveal } from "@/components/motion"
import { Container, Eyebrow, IconTile, SectionTitle, sectionPadding } from "@/components/section"

const reasons = [
  {
    title: "Canadian by default",
    icon: "location_on",
    body: "Local Alberta numbers, Canadian time zones and spelling, and an agent that knows your service area.",
  },
  {
    title: "Sounds like your business",
    icon: "record_voice_over",
    body: "Your greeting, your terminology, your booking rules. Not a generic bot reading a menu tree.",
  },
  {
    title: "You stay in control",
    icon: "tune",
    body: "Decide what it answers, what it books, and when it hands the call to a human.",
  },
  {
    title: "Done-for-you setup",
    icon: "handyman",
    body: "We build, test, and tune the agent. You approve it and start taking calls.",
  },
] as const

export function Benefits() {
  return (
    <section id="why" aria-labelledby="why-title" className="border-b border-hairline">
      <Container className={sectionPadding}>
        <Eyebrow>05 — Why CallPilot</Eyebrow>
        <SectionTitle id="why-title" className="max-w-[24ch]">Set up with you, not sold as software.</SectionTitle>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((item, i) => (
            <li key={item.title} className="min-w-0">
              <Reveal delay={i * 0.06} className="h-full rounded-2xl border border-line bg-panel p-5 shadow-card">
                <IconTile name={item.icon} />
                <h3 className="mt-4 text-[17px] font-semibold">{item.title}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-fg-muted">{item.body}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
