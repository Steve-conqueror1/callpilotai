import { Icon } from "@/components/icon"
import { Reveal } from "@/components/motion"
import { Container, Eyebrow, IconTile, SectionTitle, sectionPadding } from "@/components/section"
import { site } from "@/lib/site"

const capabilities = [
  {
    title: "Answers inbound calls 24/7",
    icon: "call",
    body: "First ring, day or night, holidays included. No hold music, no voicemail.",
  },
  {
    title: "Books appointments",
    icon: "event_available",
    body: "Offers real openings from your calendar and confirms the booking on the call.",
  },
  {
    title: "Captures qualified leads",
    icon: "person_add",
    body: "Name, number, address, job type, urgency — collected the way you'd ask for it.",
  },
  {
    title: "Answers your FAQs",
    icon: "help",
    body: "Hours, service area, pricing ranges, estimates, warranty, payment methods.",
  },
  {
    title: "Transfers to your team",
    icon: "phone_forwarded",
    body: "Warm transfers to the right person, with rules for emergencies and after hours.",
  },
  {
    title: "Summaries & transcripts",
    icon: "auto_awesome",
    body: "Every call written up and sent to you by text or email, searchable later.",
  },
] as const

export function Capabilities() {
  return (
    <section id="capabilities" aria-labelledby="capabilities-title" className="scroll-mt-16 border-b border-hairline">
      <Container className={sectionPadding}>
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <Eyebrow>03 — Capabilities</Eyebrow>
            <SectionTitle id="capabilities-title" className="max-w-[24ch]">What your agent handles on the phone.</SectionTitle>
          </div>
          <a
            href={`tel:${site.phone}`}
            data-cta-location="capabilities"
            className="group inline-flex items-center gap-1.5 rounded-[10px] px-2.5 py-2 text-[15px] font-semibold whitespace-nowrap text-accent-soft transition-colors hover:bg-tint hover:text-accent-soft"
          >
            Hear it yourself
            <Icon name="arrow_forward" size={20} className="transition-transform group-hover:translate-x-0.5" />
          </a>
        </div>

        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item, i) => (
            <li key={item.title} className="min-w-0">
              <Reveal delay={i * 0.05} className="h-full rounded-2xl border border-line bg-panel p-5 shadow-card">
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
