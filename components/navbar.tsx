"use client"

import { useState, useEffect } from "react"
import { Leaf, Menu, X } from "lucide-react"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Why Nature", href: "#why-nature" },
  { label: "Problems", href: "#problems" },
  { label: "Take Action", href: "#protect" },
  { label: "Wildlife", href: "#wildlife" },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(2, 6, 23, 0.85)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(34,197,94,0.12)" : "none",
        boxShadow: scrolled ? "0 4px 32px rgba(0,0,0,0.4)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="relative">
              <Leaf
                className="w-7 h-7 text-green-400 transition-transform duration-300 group-hover:rotate-12"
                fill="currentColor"
              />
              <div className="absolute inset-0 animate-ring-pulse rounded-full bg-green-400/20" />
            </div>
            <span
              className="text-xl font-black tracking-tight"
              style={{
                fontFamily: "var(--font-heading)",
                background: "linear-gradient(135deg, #22C55E 0%, #86efac 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Green Planet
            </span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-white/70 hover:text-green-400 transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="#cta"
              className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #22C55E 0%, #16a34a 100%)",
                boxShadow: "0 0 20px rgba(34,197,94,0.3)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.transform = "translateY(-2px)"
                el.style.boxShadow = "0 8px 32px rgba(34,197,94,0.5)"
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.transform = "translateY(0)"
                el.style.boxShadow = "0 0 20px rgba(34,197,94,0.3)"
              }}
            >
              <Leaf className="w-4 h-4" />
              Join Movement
            </a>

            <button
              className="md:hidden p-2 rounded-lg text-white/80 hover:text-green-400 hover:bg-white/5 transition-colors duration-200"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: menuOpen ? "400px" : "0",
          background: "rgba(2, 6, 23, 0.95)",
          backdropFilter: "blur(20px)",
        }}
      >
        <nav className="flex flex-col px-4 pb-6 pt-2 gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-white/70 hover:text-green-400 hover:bg-white/5 transition-all duration-200 text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#cta"
            onClick={() => setMenuOpen(false)}
            className="mt-3 mx-4 py-3 rounded-full text-center text-sm font-semibold text-white"
            style={{
              background: "linear-gradient(135deg, #22C55E 0%, #16a34a 100%)",
            }}
          >
            Join The Movement
          </a>
        </nav>
      </div>
    </header>
  )
}
