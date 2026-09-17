import { BookCallButton, CallDemoButton } from "@/components/brand"
import { Container, Eyebrow } from "@/components/section"
import { site } from "@/lib/site"

const prompts = [
  "What areas do you service?",
  "Can I book someone for Thursday morning?",
  "It's an emergency — can I talk to a person?",
  "How much does a repair usually run?",
]

export function Demo() {
  return (
    <section id="demo" aria-labelledby="demo-title" className="relative scroll-mt-16 overflow-hidden border-b border-hairline">
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-[260px] left-1/2 h-[620px] w-[900px] -translate-x-1/2 bg-[radial-gradient(ellipse,color-mix(in_srgb,var(--accent)_14%,transparent)_0%,transparent_65%)]"
      />
      <Container className="relative grid items-center gap-[clamp(32px,5vw,72px)] py-[clamp(56px,7vw,108px)] md:grid-cols-2">
        <div className="min-w-0">
          <Eyebrow className="text-signal">04 — Try it now</Eyebrow>
          <h2 id="demo-title" className="mt-4 text-[clamp(32px,3.8vw,50px)] leading-[1.02] font-semibold tracking-[-0.035em] text-balance">
            Call the demo agent. It picks up.
          </h2>
          <p className="mt-5 max-w-[44ch] text-[17px] leading-relaxed text-fg-muted">
            Sixty seconds is enough to know whether this works for your business. Call from any phone —
            no form, no signup.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CallDemoButton location="demo" />
            <BookCallButton location="demo" />
          </div>
          <p className="mt-[18px] font-mono text-sm text-fg-faint">{site.phoneDisplay}</p>
        </div>

        <div className="min-w-0 rounded-[14px] border border-line bg-panel p-7">
          <Eyebrow>Things to ask it</Eyebrow>
          <ul className="mt-5 flex flex-col gap-2.5">
            {prompts.map((prompt) => (
              <li
                key={prompt}
                className="rounded-[9px] bg-raised px-4 py-3.5 text-[15.5px] leading-normal text-fg-soft"
              >
                &ldquo;{prompt}&rdquo;
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
