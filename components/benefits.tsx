import { Reveal } from "@/components/motion"
import { Container, Eyebrow, SectionTitle, sectionPadding } from "@/components/section"

const reasons = [
  {
    title: "Canadian by default",
    body: "Local Alberta numbers, Canadian time zones and spelling, and an agent that knows your service area.",
  },
  {
    title: "Sounds like your business",
    body: "Your greeting, your terminology, your booking rules. Not a generic bot reading a menu tree.",
  },
  {
    title: "You stay in control",
    body: "Decide what it answers, what it books, and when it hands the call to a human.",
  },
  {
    title: "Done-for-you setup",
    body: "We build, test, and tune the agent. You approve it and start taking calls.",
  },
]

export function Benefits() {
  return (
    <section id="why" aria-labelledby="why-title" className="border-b border-hairline bg-band">
      <Container className={sectionPadding}>
        <Eyebrow>05 — Why CallPilot</Eyebrow>
        <SectionTitle id="why-title" className="max-w-[24ch]">Set up with you, not sold as software.</SectionTitle>

        <ul className="mt-11 grid gap-x-9 gap-y-[30px] sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((item, i) => (
            <li key={item.title} className="min-w-0">
              <Reveal delay={i * 0.06} className="border-t border-line-strong pt-4">
                <h3 className="text-[17px] font-semibold">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-fg-subtle">{item.body}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
