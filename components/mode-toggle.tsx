"use client"

import { useTheme } from "next-themes"
import { Sun, Moon } from "lucide-react"

export function ModeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="border rounded-md w-6 h-6 flex items-center justify-center">
      <span className="sr-only">Toggle mode</span>
      {theme !== "dark" ? (
        <Sun size={16} />
      ) : (
        <Moon size={16} />
      )}
    </button>
  )
}
