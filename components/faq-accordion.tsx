"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Icon } from "@/components/icon"

export function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  return (
    <Accordion multiple className="overflow-hidden rounded-2xl border border-line bg-panel shadow-card">
      {items.map((item) => (
        <AccordionItem key={item.q} value={item.q} className="border-b border-hairline last:border-b-0">
          <AccordionTrigger className="items-center gap-4 rounded-none px-5 py-4 text-base font-semibold transition-colors hover:bg-raised hover:no-underline **:data-[slot=accordion-trigger-icon]:hidden">
            {item.q}
            <Icon
              name="expand_more"
              size={22}
              className="ml-auto text-fg-muted transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-180"
            />
          </AccordionTrigger>
          <AccordionContent className="max-w-[66ch] px-5 pb-5 text-[15px] leading-[1.65] text-fg-muted">
            {item.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
