import { Logo } from "@/components/brand"
import { Container } from "@/components/section"
import { site } from "@/lib/site"

const linkClass = "text-[13.5px] text-fg-faint transition-colors hover:text-fg"

export function Footer() {
  return (
    <footer>
      <Container className="flex flex-wrap items-center gap-x-8 gap-y-[18px] py-9">
        <Logo small />
        <span className="text-[13.5px] text-fg-faint">
          AI receptionists for Canadian small businesses · {site.region}
        </span>
        <nav aria-label="Footer" className="flex flex-wrap items-center gap-5 md:ml-auto">
          <a href="#how" className={linkClass}>
            How it works
          </a>
          <a href="#faq" className={linkClass}>
            FAQ
          </a>
          <a
            href={site.booking}
            target="_blank"
            rel="noopener noreferrer"
            data-cta-location="footer"
            className={linkClass}
          >
            Book a Call
          </a>
          <span className="text-[13.5px] text-fg-dim">
            © {new Date().getFullYear()} {site.name}
          </span>
        </nav>
      </Container>
    </footer>
  )
}
