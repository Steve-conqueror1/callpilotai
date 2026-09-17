# CallPilot AI

Marketing site for CallPilot AI, AI phone receptionists for Canadian small businesses.

Built with Next.js (App Router), Tailwind CSS v4, shadcn/ui (Base UI), and framer-motion.

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Where things live

- `lib/site.ts`: business name, URL, demo phone number, booking link, region. Change contact details here.
- `app/globals.css`: brand palette as CSS variables, exposed to Tailwind as `bg-ink`, `text-fg-muted`, `border-hairline`, etc.
- `app/layout.tsx`: fonts (Schibsted Grotesk, JetBrains Mono) and SEO metadata.
- `app/page.tsx`: section order and JSON-LD structured data (LocalBusiness, FAQPage).
- `app/opengraph-image.tsx`: generated social share image.
- `components/`: one file per page section. Shared pieces are in `brand.tsx` (logo, CTA buttons) and `section.tsx` (container, eyebrow, heading).

Sections are Server Components. Only `motion.tsx` (scroll reveal) and `faq-accordion.tsx` are client components.
