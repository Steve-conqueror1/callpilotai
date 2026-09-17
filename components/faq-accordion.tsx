"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FaqAccordion({ items }: { items: { q: string; a: string }[] }) {
  return (
    <Accordion multiple>
      {items.map((item) => (
        <AccordionItem
          key={item.q}
          value={item.q}
          className="border-t border-hairline not-last:border-b-0 last:border-b"
        >
          <AccordionTrigger className="items-center gap-4 rounded-none py-5 text-[16.5px] font-medium hover:no-underline **:data-[slot=accordion-trigger-icon]:hidden">
            {item.q}
            <span
              aria-hidden
              className="ml-auto text-xl leading-none text-label transition-transform duration-200 group-aria-expanded/accordion-trigger:rotate-45"
            >
              +
            </span>
          </AccordionTrigger>
          <AccordionContent className="max-w-[62ch] pb-[22px] text-[15.5px] leading-[1.65] text-fg-subtle">
            {item.a}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
