import Link from "next/link"

import { Logo } from "@/components/brand"
import { Footer } from "@/components/footer"
import { Container } from "@/components/section"
import { ThemeToggle } from "@/components/theme-toggle"
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
      <header className="sticky top-0 z-50 border-b border-line bg-bar backdrop-blur-md">
        <nav className="mx-auto flex h-16 max-w-[1240px] items-center gap-3 px-5 sm:px-7" aria-label="Main">
          <Link href="/" className="shrink-0">
            <Logo />
          </Link>
          <a
            href={site.login}
            className="ml-auto text-[15px] font-medium whitespace-nowrap text-fg-muted transition-colors hover:text-fg"
          >
            Sign in
          </a>
          <ThemeToggle />
        </nav>
      </header>
      <main className="flex-1 border-b border-hairline">
        <Container className="max-w-[780px] py-[clamp(48px,6vw,88px)]">
          <p className="text-[13px] font-bold tracking-[0.06em] text-label uppercase">Last updated {updated}</p>
          <h1 className="mt-3 text-[clamp(32px,4vw,44px)] leading-[1.1] font-semibold tracking-[-0.03em] text-balance">
            {title}
          </h1>
          <div className="mt-6 space-y-4 text-[17px] leading-[1.65] text-fg-soft">{intro}</div>
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
      <h2 className="text-[22px] leading-[1.25] font-semibold tracking-[-0.01em]">{title}</h2>
      <div className="mt-4 space-y-4 text-base leading-[1.7] text-fg-muted [&_a]:font-semibold [&_a]:text-accent-soft [&_a]:underline [&_a]:underline-offset-2 hover:[&_a]:text-fg [&_strong]:font-semibold [&_strong]:text-fg">
        {children}
      </div>
    </section>
  )
}

export function LegalList({ children }: { children: React.ReactNode }) {
  return <ul className="list-disc space-y-2 pl-5 marker:text-fg-dim">{children}</ul>
}
