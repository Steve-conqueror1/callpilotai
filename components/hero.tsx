import { GetStartedButton, CallDemoButton, PulseDot } from "@/components/brand"
import { Container } from "@/components/section"
import { site } from "@/lib/site"

const transcript = [
  {
    speaker: "Caller",
    text: "Hi — our furnace is blowing cold air and the house is freezing. Can someone come out this week?",
  },
  {
    speaker: "CallPilot AI",
    text: "Absolutely. We have Thursday at 9:00 AM or Friday at 1:30 PM open in Calgary. Which works better?",
  },
  { speaker: "Caller", text: "Thursday morning works." },
]

const outcomes = [
  { label: "Booked", value: "Thu · 9:00 AM · Calgary NW" },
  { label: "Lead captured", value: "Name · Phone · Address · Issue" },
]

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden border-b border-hairline">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-[220px] -right-[180px] size-[720px] rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--accent)_16%,transparent)_0%,transparent_62%)]"
      />
      <Container className="relative grid items-center gap-[clamp(40px,6vw,76px)] pt-[clamp(52px,7vw,104px)] pb-[clamp(56px,7vw,96px)] lg:grid-cols-2">
        <div className="min-w-0">
          <div className="inline-flex items-center gap-[9px] rounded-full border border-line bg-panel-head py-[7px] pr-[13px] pl-2.5 font-mono text-[11px] tracking-[0.08em] whitespace-nowrap text-accent-mist uppercase">
            <PulseDot className="bg-signal" />
            AI receptionists · {site.region}
          </div>
          <h1 id="hero-title" className="mt-6 text-[clamp(40px,5.8vw,72px)] leading-[0.98] font-semibold tracking-[-0.04em]">
            Your AI receptionist.
            <br />
            <span className="text-accent-soft">Every call answered.</span>
          </h1>
          <p className="mt-[22px] max-w-[46ch] text-[clamp(16.5px,1.4vw,19.5px)] leading-[1.55] text-fg-muted">
            CallPilot answers your business phone 24/7 — takes the details, answers questions, books
            the job, and transfers urgent calls to you. Built for Canadian small businesses.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CallDemoButton location="hero" />
            <GetStartedButton location="hero" />
          </div>
          <p className="mt-[18px] font-mono text-[13px] text-fg-faint">
            {site.phoneDisplay} — a real CallPilot agent picks up · {site.trial}
          </p>
        </div>

        <div
          className="min-w-0 overflow-hidden rounded-2xl border border-line bg-panel shadow-[0_40px_80px_-48px_rgba(0,0,0,0.9)]"
          role="img"
          aria-label="Example call: a caller with a broken furnace books a Thursday 9 AM appointment with the CallPilot AI agent."
        >
          <div className="flex items-center gap-2.5 border-b border-hairline bg-panel-head px-[18px] py-3.5">
            <PulseDot className="size-[7px] bg-signal [animation-duration:1.6s]" />
            <span className="font-mono text-[11px] tracking-[0.08em] whitespace-nowrap text-fg-faint uppercase">
              Live call · 00:24
            </span>
            <span aria-hidden className="ml-auto flex h-4 items-center gap-[3px]">
              {[0, 0.16, 0.32, 0.48].map((delay) => (
                <span
                  key={delay}
                  className="block h-4 w-[3px] rounded-sm bg-accent motion-safe:animate-cp-wave"
                  style={{ animationDelay: `${delay}s` }}
                />
              ))}
            </span>
          </div>

          <div className="flex flex-col gap-4 px-[18px] py-[22px]">
            {transcript.map((line, i) => {
              const isAgent = line.speaker === "CallPilot AI"
              return (
                <div
                  key={i}
                  className={`flex flex-col gap-1.5 motion-safe:animate-cp-fade ${isAgent ? "items-end" : ""}`}
                  style={{ animationDelay: `${i * 0.35}s` }}
                >
                  <span
                    className={`font-mono text-[10px] tracking-[0.1em] uppercase ${isAgent ? "text-accent-soft" : "text-label"}`}
                  >
                    {line.speaker}
                  </span>
                  <p
                    className={
                      isAgent
                        ? "max-w-[92%] rounded-[12px_12px_3px_12px] bg-accent-deep px-[15px] py-3 text-[15px] leading-normal text-white"
                        : "max-w-[92%] rounded-[12px_12px_12px_3px] border border-line bg-raised px-[15px] py-3 text-[15px] leading-normal text-fg-soft"
                    }
                  >
                    {line.text}
                  </p>
                </div>
              )
            })}
          </div>

          <div className="grid grid-cols-[repeat(auto-fit,minmax(160px,1fr))] gap-3.5 border-t border-hairline bg-panel-head px-[18px] py-4">
            {outcomes.map((item) => (
              <div key={item.label} className="flex flex-col gap-1">
                <span className="font-mono text-[10px] tracking-[0.1em] text-signal uppercase">{item.label}</span>
                <span className="text-sm font-medium text-fg-soft">{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
