import { Reveal } from "@/components/motion"
import { Container, Eyebrow, SectionTitle, sectionPadding } from "@/components/section"

const scenarios = [
  {
    key: "A",
    title: "After hours & weekends",
    body: "Emergency calls arrive at 8 PM on a Sunday. CallPilot triages them and pages you only when it's urgent.",
  },
  {
    key: "B",
    title: "On the job, hands full",
    body: "Calls get answered while you work. You get a clean summary by text or email instead of a missed-call list.",
  },
  {
    key: "C",
    title: "The same questions, all day",
    body: "Hours, service area, pricing ranges, warranty, “do you do free estimates” — handled without interrupting your day.",
  },
]

export function Problem() {
  return (
    <section id="problem" aria-labelledby="problem-title" className="scroll-mt-16 border-b border-hairline">
      <Container className={`grid gap-[clamp(32px,5vw,72px)] md:grid-cols-2 ${sectionPadding}`}>
        <div className="min-w-0">
          <Eyebrow>01 — The problem</Eyebrow>
          <SectionTitle id="problem-title">A missed call is a customer calling your competitor.</SectionTitle>
          <p className="mt-5 max-w-[46ch] text-[17px] leading-relaxed text-fg-muted">
            You&apos;re on a roof, under a sink, with a client, or asleep. The phone rings anyway. Most
            callers with an urgent job don&apos;t leave a voicemail — they dial the next business on the
            list.
          </p>
          <p className="mt-3.5 max-w-[46ch] text-[17px] leading-relaxed text-fg-muted">
            CallPilot answers on the first ring, every time, in a voice that sounds like your business.
          </p>
        </div>

        <ul className="flex min-w-0 flex-col border-b border-hairline">
          {scenarios.map((item, i) => (
            <li key={item.key} className="border-t border-hairline">
              <Reveal delay={i * 0.08} className="flex gap-5 py-6">
                <span className="pt-[3px] font-mono text-xs text-accent">{item.key}</span>
                <div>
                  <h3 className="text-[17px] font-semibold">{item.title}</h3>
                  <p className="mt-[7px] text-[15px] leading-relaxed text-fg-subtle">{item.body}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
