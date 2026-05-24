"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"

export function BackToTop() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" })

  return (
    <button
      onClick={scrollToTop}
      aria-label="Back to top"
      className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300"
      style={{
        background: "linear-gradient(135deg, #22C55E 0%, #14532D 100%)",
        boxShadow: "0 4px 24px rgba(34,197,94,0.4)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0) scale(1)" : "translateY(16px) scale(0.8)",
        pointerEvents: visible ? "auto" : "none",
      }}
      onMouseEnter={(e) => {
        const el = e.currentTarget
        el.style.transform = "translateY(-3px) scale(1.1)"
        el.style.boxShadow = "0 8px 32px rgba(34,197,94,0.55)"
      }}
      onMouseLeave={(e) => {
        const el = e.currentTarget
        el.style.transform = visible ? "translateY(0) scale(1)" : "translateY(16px) scale(0.8)"
        el.style.boxShadow = "0 4px 24px rgba(34,197,94,0.4)"
      }}
    >
      <ArrowUp className="w-5 h-5 text-white" />
    </button>
  )
}
