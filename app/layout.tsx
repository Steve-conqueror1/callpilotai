import type { Metadata, Viewport } from "next";
import { IBM_Plex_Mono, Instrument_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { site } from "@/lib/site";
import { ICON_FONT_URL } from "@/components/icon";

// Same typefaces as the app (app.callpilotai.ca) and the CallPilot Connect mobile app.
const instrument = Instrument_Sans({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["500"],
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
  themeColor: [
    { media: "(prefers-color-scheme: dark)", color: "#151920" },
    { media: "(prefers-color-scheme: light)", color: "#FFFFFF" },
  ],
};

// Applies the theme before first paint so there is no flash: the saved choice if there is one,
// otherwise the device setting (light when unknown), followed live until a choice is saved.
const themeScript = `try{var m=matchMedia("(prefers-color-scheme: dark)"),a=function(){var t=null;try{t=localStorage.getItem("cp-theme")}catch(e){}document.documentElement.dataset.theme=t==="dark"||t==="light"?t:m.matches?"dark":"light"};a();m.addEventListener("change",a)}catch(e){}`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-CA"
      data-theme="light"
      suppressHydrationWarning
      className={`${instrument.variable} ${plexMono.variable} h-full`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        {/* Material Symbols, subset to the icons in components/icon.tsx. */}
        <link rel="stylesheet" href={ICON_FONT_URL} />
      </head>
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
