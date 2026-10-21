import { GetStartedButton, CallDemoButton, PulseDot } from "@/components/brand"
import { Icon } from "@/components/icon"
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
  { label: "Booked", value: "Thu · 9:00 AM · Calgary NW", icon: "event_available", tone: "bg-success-soft text-signal" },
  { label: "Lead captured", value: "Name · Phone · Address · Issue", icon: "person_add", tone: "bg-tint text-accent-soft" },
] as const

export function Hero() {
  return (
    <section id="top" aria-labelledby="hero-title" className="relative overflow-hidden border-b border-hairline">
      {/* A faint accent glow in dark mode only; the light theme stays flat, as in the design. */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-[220px] -right-[180px] hidden size-[720px] rounded-full bg-[radial-gradient(circle,color-mix(in_srgb,var(--accent)_12%,transparent)_0%,transparent_62%)] dark:block"
      />
      <Container className="relative grid items-center gap-[clamp(40px,6vw,76px)] pt-[clamp(48px,7vw,96px)] pb-[clamp(56px,7vw,96px)] lg:grid-cols-2">
        <div className="min-w-0">
          <div className="inline-flex h-9 items-center gap-2 rounded-full bg-success-soft px-3.5 text-sm font-semibold whitespace-nowrap text-signal">
            <PulseDot className="bg-signal" />
            AI receptionists · {site.region}
          </div>
          <h1
            id="hero-title"
            className="mt-6 text-[clamp(40px,5.4vw,64px)] leading-[1.04] font-semibold tracking-[-0.03em] text-balance"
          >
            Your AI receptionist.
            <br />
            <span className="text-accent-soft">Every call answered.</span>
          </h1>
          <p className="mt-5 max-w-[46ch] text-[clamp(17px,1.4vw,19px)] leading-[1.55] text-fg-muted">
            CallPilot answers your business phone 24/7 — takes the details, answers questions, books
            the job, and transfers urgent calls to you. Built for Canadian small businesses.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <CallDemoButton location="hero" />
            <GetStartedButton location="hero" />
          </div>
          <p className="mt-[18px] text-sm text-fg-muted">
            <span className="font-semibold text-fg">{site.phoneDisplay}</span> — a real CallPilot agent picks up ·{" "}
            {site.trial}
          </p>
        </div>

        <div
          className="min-w-0 overflow-hidden rounded-2xl border border-line bg-panel shadow-[0_20px_50px_rgba(16,24,40,0.10)] dark:shadow-none"
          role="img"
          aria-label="Example call: a caller with a broken furnace books a Thursday 9 AM appointment with the CallPilot AI agent."
        >
          <div className="flex items-center gap-2.5 border-b border-hairline px-5 py-3.5">
            <span className="grid size-9 place-items-center rounded-full bg-success-soft text-signal">
              <Icon name="support_agent" size={20} />
            </span>
            <span className="text-[15px] font-semibold whitespace-nowrap">Live call · 00:24</span>
            <span aria-hidden className="ml-auto flex h-4 items-center gap-[3px]">
              {[0, 0.16, 0.32, 0.48].map((delay) => (
                <span
                  key={delay}
                  className="block h-4 w-[3px] rounded-sm bg-accent-soft motion-safe:animate-cp-wave"
                  style={{ animationDelay: `${delay}s` }}
                />
              ))}
            </span>
          </div>

          <div className="flex flex-col gap-3.5 px-5 py-5">
            {transcript.map((line, i) => {
              const isAgent = line.speaker === "CallPilot AI"
              return (
                <div
                  key={i}
                  className={`flex flex-col gap-1 motion-safe:animate-cp-fade ${isAgent ? "items-end" : ""}`}
                  style={{ animationDelay: `${i * 0.35}s` }}
                >
                  <span className={`text-xs font-bold ${isAgent ? "text-accent-soft" : "text-fg-faint"}`}>{line.speaker}</span>
                  <p
                    className={
                      isAgent
                        ? "max-w-[92%] rounded-[14px_14px_4px_14px] bg-tint px-4 py-3 text-[15px] leading-normal text-fg"
                        : "max-w-[92%] rounded-[14px_14px_14px_4px] bg-raised px-4 py-3 text-[15px] leading-normal text-fg"
                    }
                  >
                    {line.text}
                  </p>
                </div>
              )
            })}
          </div>

          <div className="mx-5 mb-5 flex flex-col gap-3 rounded-[14px] border border-ai-border bg-ai-soft p-3.5">
            <span className="flex items-center gap-2 text-sm font-bold">
              <Icon name="auto_awesome" size={18} filled className="text-accent-soft" />
              AI call summary
            </span>
            <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-3">
              {outcomes.map((item) => (
                <div key={item.label} className="flex flex-col items-start gap-1.5">
                  <span className={`inline-flex h-[26px] items-center gap-1 rounded-full pr-2.5 pl-[7px] text-[13px] font-bold ${item.tone}`}>
                    <Icon name={item.icon} size={15} filled />
                    {item.label}
                  </span>
                  <span className="text-sm font-medium text-fg-soft">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
