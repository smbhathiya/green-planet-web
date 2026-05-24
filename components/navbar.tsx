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
          ? "rgba(255, 255, 255, 0.92)"
          : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(20,83,45,0.1)" : "none",
        boxShadow: scrolled ? "0 4px 24px rgba(20,83,45,0.08)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2 group">
            <div className="relative">
              <Leaf
                className="w-7 h-7 text-green-600 transition-transform duration-300 group-hover:rotate-12"
                fill="currentColor"
              />
              <div className="absolute inset-0 animate-ring-pulse rounded-full bg-green-500/20" />
            </div>
            <span
              className="text-xl font-black tracking-tight"
              style={{
                fontFamily: "var(--font-heading)",
                background: "linear-gradient(135deg, #14532D 0%, #22C55E 100%)",
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
                className="text-sm font-medium text-green-900/70 hover:text-green-600 transition-colors duration-200 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-500 transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Mobile Toggle */}
          <div className="flex items-center gap-3">
            <button
              className="md:hidden p-2 rounded-lg text-green-800 hover:text-green-600 hover:bg-green-50 transition-colors duration-200"
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
          background: "rgba(255,255,255,0.97)",
          backdropFilter: "blur(20px)",
          borderBottom: menuOpen ? "1px solid rgba(20,83,45,0.1)" : "none",
        }}
      >
        <nav className="flex flex-col px-4 pb-6 pt-2 gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="px-4 py-3 rounded-xl text-green-800 hover:text-green-600 hover:bg-green-50 transition-all duration-200 text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}
