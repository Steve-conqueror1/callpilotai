import { Benefits } from "@/components/benefits"
import { Capabilities } from "@/components/capabilities"
import { Demo } from "@/components/demo"
import { Faq, faqs } from "@/components/faq"
import { FinalCta } from "@/components/final-cta"
import { Footer } from "@/components/footer"
import { Hero } from "@/components/hero"
import { HowItWorks } from "@/components/how-it-works"
import { Industries } from "@/components/industries"
import { Navbar } from "@/components/navbar"
import { Problem } from "@/components/problem"
import { site } from "@/lib/site"

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: site.name,
  url: site.url,
  telephone: site.phone,
  description: "AI phone receptionists for Canadian small businesses.",
  areaServed: [{ "@type": "AdministrativeArea", name: "Alberta, Canada" }],
  address: { "@type": "PostalAddress", addressRegion: "AB", addressCountry: "CA" },
  priceRange: "$$",
}

const faqPageJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.q,
    acceptedAnswer: { "@type": "Answer", text: item.a },
  })),
}

// Escape "<" so a string in the data can't close the script tag early.
function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }}
    />
  )
}

export default function Home() {
  return (
    <>
      <JsonLd data={localBusinessJsonLd} />
      <JsonLd data={faqPageJsonLd} />
      <Navbar />
      <main className="flex-1">
        <Hero />
        <Industries />
        <Problem />
        <HowItWorks />
        <Capabilities />
        <Demo />
        <Benefits />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
