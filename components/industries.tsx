import { Container } from "@/components/section"

const industries = [
  "Roofing & eavestrough",
  "HVAC",
  "Plumbing",
  "Electrical",
  "Landscaping",
  "Cleaning",
  "Salons",
  "Clinics",
  "Professional services",
]

export function Industries() {
  return (
    <section aria-labelledby="industries-title" className="border-b border-hairline bg-band">
      <Container className="flex flex-wrap items-center gap-x-[18px] gap-y-2.5 py-5">
        <h2 id="industries-title" className="font-mono text-[11px] tracking-[0.1em] whitespace-nowrap text-label uppercase">
          Built for
        </h2>
        <ul className="flex flex-wrap gap-[7px]">
          {industries.map((name) => (
            <li
              key={name}
              className="rounded-md border border-line px-3 py-1.5 text-[13px] whitespace-nowrap text-fg-muted"
            >
              {name}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
