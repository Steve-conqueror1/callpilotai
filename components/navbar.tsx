import { CallDemoButton, Logo } from "@/components/brand"

const links = [
  { href: "#problem", label: "Why" },
  { href: "#how", label: "How" },
  { href: "#capabilities", label: "Capabilities" },
  { href: "#faq", label: "FAQ" },
]

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-hairline bg-ink/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-[1240px] items-center gap-[26px] px-7 py-[15px]" aria-label="Main">
        <a href="#top" className="shrink-0">
          <Logo />
        </a>
        <ul className="ml-auto hidden items-center gap-[26px] md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="font-mono text-xs tracking-[0.04em] whitespace-nowrap text-fg-subtle uppercase transition-colors hover:text-fg"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <CallDemoButton size="sm" location="navbar" className="ml-auto md:ml-0" />
      </nav>
    </header>
  )
}
