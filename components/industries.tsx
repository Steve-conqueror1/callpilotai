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
      <Container className="flex flex-wrap items-center gap-x-5 gap-y-3 py-5">
        <h2 id="industries-title" className="text-[13px] font-bold tracking-[0.06em] whitespace-nowrap text-label uppercase">
          Built for
        </h2>
        <ul className="flex flex-wrap gap-2">
          {industries.map((name) => (
            <li
              key={name}
              className="inline-flex h-[34px] items-center rounded-full bg-panel px-3.5 text-sm font-semibold whitespace-nowrap text-fg shadow-[inset_0_0_0_1.5px_var(--line)]"
            >
              {name}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
