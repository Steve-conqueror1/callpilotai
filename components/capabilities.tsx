import { Reveal } from "@/components/motion"
import { Container, Eyebrow, SectionTitle, sectionPadding } from "@/components/section"
import { site } from "@/lib/site"

const capabilities = [
  {
    title: "Answers inbound calls 24/7",
    body: "First ring, day or night, holidays included. No hold music, no voicemail.",
  },
  {
    title: "Books appointments",
    body: "Offers real openings from your calendar and confirms the booking on the call.",
  },
  {
    title: "Captures qualified leads",
    body: "Name, number, address, job type, urgency — collected the way you'd ask for it.",
  },
  {
    title: "Answers your FAQs",
    body: "Hours, service area, pricing ranges, estimates, warranty, payment methods.",
  },
  {
    title: "Transfers to your team",
    body: "Warm transfers to the right person, with rules for emergencies and after hours.",
  },
  {
    title: "Summaries & transcripts",
    body: "Every call written up and sent to you by text or email, searchable later.",
  },
]

export function Capabilities() {
  return (
    <section id="capabilities" aria-labelledby="capabilities-title" className="scroll-mt-16 bg-bone text-on-bone">
      <Container className={sectionPadding}>
        <div className="flex flex-wrap items-end justify-between gap-5">
          <div>
            <Eyebrow className="text-on-bone-label">03 — Capabilities</Eyebrow>
            <SectionTitle id="capabilities-title" className="max-w-[24ch]">What your agent handles on the phone.</SectionTitle>
          </div>
          <a
            href={`tel:${site.phone}`}
            data-cta-location="capabilities"
            className="text-[15px] font-medium whitespace-nowrap text-accent-deep transition-colors hover:text-accent-night"
          >
            Hear it yourself →
          </a>
        </div>

        <ul className="mt-11 grid gap-x-9 gap-y-[30px] sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((item, i) => (
            <li key={item.title} className="min-w-0">
              <Reveal delay={i * 0.05} className="border-t-[1.5px] border-on-bone pt-4">
                <h3 className="text-[17px] font-semibold">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-on-bone-muted">{item.body}</p>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
