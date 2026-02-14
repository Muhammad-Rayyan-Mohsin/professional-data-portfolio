"use client"

import { useLenis } from "lenis/react"
import { Mail } from "lucide-react"

export function NavDock() {
  const lenis = useLenis()

  const scrollTo = (target: string) => {
    if (target === "#") {
      lenis?.scrollTo(0, {
        duration: 1.8,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      })
    } else {
      lenis?.scrollTo(target, {
        duration: 1.8,
        offset: -96,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      })
    }
  }

  return (
    <nav className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 will-change-transform">
      <div className="px-1.5 py-1.5 bg-zinc-900/70 backdrop-blur-xl border border-white/10 rounded-full shadow-2xl shadow-black/50 flex items-center gap-1">
        <button
          onClick={() => scrollTo("#")}
          className="px-4 py-2 rounded-full bg-zinc-800 text-white text-sm font-medium shadow-sm transition-all cursor-pointer"
        >
          Home
        </button>
        <button
          onClick={() => scrollTo("#projects")}
          className="px-4 py-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/5 text-sm font-medium transition-all cursor-pointer"
        >
          Projects
        </button>
        <button
          onClick={() => scrollTo("#contact")}
          className="px-4 py-2 rounded-full text-zinc-400 hover:text-white hover:bg-white/5 text-sm font-medium transition-all cursor-pointer"
        >
          Contact
        </button>
        <a
          href="mailto:mo.rayyan2002@gmail.com"
          aria-label="Send email"
          className="w-9 h-9 flex items-center justify-center rounded-full text-zinc-400 hover:text-white hover:bg-white/5 transition-all"
        >
          <Mail className="w-4 h-4" />
        </a>
      </div>
    </nav>
  )
}
