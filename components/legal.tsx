import Link from "next/link"

import { Logo } from "@/components/brand"
import { Footer } from "@/components/footer"
import { Container } from "@/components/section"
import { site } from "@/lib/site"

/**
 * Shell for the long-form legal pages (privacy, terms). They don't use the home page's Navbar:
 * its links are in-page anchors that only exist on the home page.
 */
export function LegalPage({
  title,
  updated,
  intro,
  children,
}: {
  title: string
  /** Shown as written, e.g. "October 12, 2026". */
  updated: string
  intro: React.ReactNode
  children: React.ReactNode
}) {
  return (
    <>
      <header className="border-b border-hairline">
        <nav className="mx-auto flex max-w-[1240px] items-center gap-[26px] px-7 py-[15px]" aria-label="Main">
          <Link href="/" className="shrink-0">
            <Logo />
          </Link>
          <a
            href={site.login}
            className="ml-auto font-mono text-xs tracking-[0.04em] whitespace-nowrap text-fg-subtle uppercase transition-colors hover:text-fg"
          >
            Sign in
          </a>
        </nav>
      </header>
      <main className="flex-1 border-b border-hairline">
        <Container className="max-w-[780px] py-[clamp(48px,6vw,88px)]">
          <p className="font-mono text-[11px] tracking-[0.1em] text-label uppercase">Last updated {updated}</p>
          <h1 className="mt-4 text-[clamp(32px,4vw,48px)] leading-[1.04] font-semibold tracking-[-0.035em] text-balance">
            {title}
          </h1>
          <div className="mt-6 space-y-4 text-[16.5px] leading-[1.65] text-fg-soft">{intro}</div>
          <div className="mt-4">{children}</div>
        </Container>
      </main>
      <Footer />
    </>
  )
}

export function LegalSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-12">
      <h2 className="text-[22px] leading-[1.2] font-semibold tracking-[-0.02em]">{title}</h2>
      <div className="mt-4 space-y-4 text-[15.5px] leading-[1.7] text-fg-muted [&_a]:text-accent-soft [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-fg [&_strong]:font-medium [&_strong]:text-fg-soft">
        {children}
      </div>
    </section>
  )
}

export function LegalList({ children }: { children: React.ReactNode }) {
  return <ul className="list-disc space-y-2 pl-5 marker:text-fg-dim">{children}</ul>
}
