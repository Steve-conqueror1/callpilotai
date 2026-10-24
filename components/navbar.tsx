import { CallDemoButton, Logo } from "@/components/brand"
import { ThemeToggle } from "@/components/theme-toggle"
import { site } from "@/lib/site"

const links = [
  { href: "#problem", label: "Why" },
  { href: "#how", label: "How it works" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#faq", label: "FAQ" },
]

const linkClass = "text-[15px] font-medium whitespace-nowrap text-fg-muted transition-colors hover:text-fg"

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bar backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-[1240px] items-center gap-3 px-4 sm:gap-6 sm:px-7" aria-label="Main">
        <a href="#top" className="shrink-0">
          <Logo />
        </a>
        <ul className="ml-auto hidden items-center gap-6 lg:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} className={linkClass}>
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <span className="ml-auto flex items-center gap-3 lg:ml-0">
          <a href={site.login} className={linkClass}>
            Sign in
          </a>
          {/* Phones follow the device theme; the toggle needs room only from sm up. */}
          <span className="hidden sm:block">
            <ThemeToggle />
          </span>
                    <CallDemoButton size="sm" compact location="navbar" className="px-3 sm:px-4" />
        </span>
      </nav>
    </header>
  )
}
