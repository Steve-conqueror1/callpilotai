import { BookCallButton, CallDemoButton } from "@/components/brand"
import { Container } from "@/components/section"
import { site } from "@/lib/site"

export function FinalCta() {
  return (
    <section id="get-started" aria-labelledby="cta-title" className="border-b border-hairline bg-band">
      <Container className="py-[clamp(64px,8vw,120px)] text-center">
        <h2 id="cta-title" className="mx-auto max-w-[20ch] text-[clamp(34px,4.6vw,62px)] leading-none font-semibold tracking-[-0.04em] text-balance">
          Stop losing jobs to a ringing phone.
        </h2>
        <p className="mx-auto mt-[22px] max-w-[50ch] text-[17.5px] leading-relaxed text-fg-muted">
          Call the demo agent to hear it, or book a call and we&apos;ll set your receptionist up for you.
        </p>
        <div className="mt-[34px] flex flex-wrap justify-center gap-3">
          <CallDemoButton size="xl" location="final_cta" />
          <BookCallButton size="xl" location="final_cta" />
        </div>
        <p className="mt-5 font-mono text-[13px] text-fg-faint">{site.phoneDisplay}</p>
      </Container>
    </section>
  )
}
