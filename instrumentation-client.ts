// Conversion tracking: the two actions that matter are tapping the phone number
// and heading to the app's signup. One delegated listener catches every such link on
// the page, so CTAs stay plain server-rendered anchors with no onClick.
//
// Events go to window.dataLayer (Google Tag Manager) and to gtag (GA4) when either
// is present. In GA4, mark `click_to_call` and `signup_click` as key events
// (`signup_click` replaced `booking_click` when "Book a Call" became "Start free trial").

import { site } from "@/lib/site"

type Gtag = (command: "event", name: string, params: Record<string, string>) => void

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[]
    gtag?: Gtag
  }
}

function track(event: string, params: Record<string, string>) {
  window.dataLayer?.push({ event, ...params })
  window.gtag?.("event", event, params)
}

document.addEventListener(
  "click",
  (e) => {
    const link = (e.target as Element | null)?.closest?.("a[href]")
    if (!(link instanceof HTMLAnchorElement)) return

    const location =
      link.dataset.ctaLocation ?? link.closest("section[id], header, footer")?.id ?? "unknown"

    if (link.protocol === "tel:") {
      track("click_to_call", { link_location: location, phone: site.phoneDisplay })
    } else if (link.href.startsWith(site.signup)) {
      track("signup_click", { link_location: location, link_url: link.href })
    }
  },
  { capture: true }
)
