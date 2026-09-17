import type { Metadata, Viewport } from "next";
import { JetBrains_Mono, Schibsted_Grotesk } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { site } from "@/lib/site";

const schibsted = Schibsted_Grotesk({
  variable: "--font-schibsted",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const gaId = process.env.NEXT_PUBLIC_GA_ID;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: "AI Receptionist for Alberta Small Businesses | CallPilot AI",
  description:
    "CallPilot AI answers your business calls 24/7 — books appointments, captures leads, answers FAQs and transfers urgent calls. Call the demo agent.",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website", locale: "en_CA", url: site.url,
    title: "Your AI Receptionist. Every Call Answered.",
    description: "AI phone receptionists for Canadian small businesses.",
    images: ["/opengraph-image"],
  },
  twitter: { card: "summary_large_image" },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0A0C0F",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-CA"
      className={`${schibsted.variable} ${jetbrains.variable} h-full`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        {gaId && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`} strategy="afterInteractive" />
            <Script id="ga-init" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments)}gtag("js",new Date());gtag("config","${gaId}");`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
