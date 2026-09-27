import { FaqAccordion } from "@/components/faq-accordion"
import { Container, Eyebrow, SectionTitle, sectionPadding } from "@/components/section"

export const faqs = [
  {
    q: "Will callers know it's an AI?",
    a: "The agent is natural and to the point, and most callers simply get their question answered or their appointment booked. We can have it disclose that it's an AI assistant up front — many businesses prefer that, and it rarely changes the outcome.",
  },
  {
    q: "Do I have to change my phone number?",
    a: "No. You keep your number and forward calls to CallPilot — all the time, only after hours, or only when nobody picks up. If you'd rather test with a separate line, we can provide a local number.",
  },
  {
    q: "What happens if the AI can't handle a call?",
    a: "It follows your escalation rules: transfer to a specific person, text you immediately, or take a detailed message. You choose which situations count as urgent.",
  },
  {
    q: "How long does setup take?",
    a: "Start your free trial and tell us about your business — services, hours, service area, how you want urgent calls handled. We build and test the agent with you before it goes live. Most businesses are answering calls within a few business days.",
  },
  {
    q: "Can it book into my calendar?",
    a: "Yes — it reads your availability and books real slots, following rules you set for job length, buffer time, and service area.",
  },
  {
    q: "What does it cost?",
    a: "Plans start at $149 CAD a month for 300 minutes of calls, and every plan starts with a 14-day free trial — no credit card. Usually a fraction of a part-time receptionist.",
  },
]

export function Faq() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="scroll-mt-16 border-b border-hairline">
      <Container className={`max-w-[900px] ${sectionPadding}`}>
        <Eyebrow>06 — FAQ</Eyebrow>
        <SectionTitle id="faq-title" className="mb-9">Questions owners ask us.</SectionTitle>
        <FaqAccordion items={faqs} />
      </Container>
    </section>
  )
}
