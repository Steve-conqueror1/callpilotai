"use client"

import { useSyncExternalStore } from "react"
import { Icon } from "@/components/icon"

type Theme = "dark" | "light"

const getTheme = (): Theme => (document.documentElement.dataset.theme === "dark" ? "dark" : "light")

/** <html data-theme> is set before paint by app/layout.tsx; watching it catches device changes too. */
function subscribe(listener: () => void) {
  const observer = new MutationObserver(listener)
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ["data-theme"] })
  return () => observer.disconnect()
}

/** Sun/moon switch. An explicit choice is remembered; until then the site follows the device. */
export function ThemeToggle() {
  const theme = useSyncExternalStore<Theme>(subscribe, getTheme, () => "light")
  const next: Theme = theme === "dark" ? "light" : "dark"
  const label = `Switch to ${next} theme`
  return (
    <button
      type="button"
      onClick={() => {
        document.documentElement.dataset.theme = next
        try {
          localStorage.setItem("cp-theme", next)
        } catch {}
      }}
      aria-label={label}
      title={label}
      className="grid size-10 shrink-0 place-items-center rounded-full text-fg-muted transition-colors hover:bg-raised hover:text-fg"
    >
      <Icon name={theme === "dark" ? "light_mode" : "dark_mode"} size={22} />
    </button>
  )
}
