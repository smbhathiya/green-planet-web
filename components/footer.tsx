"use client"

import { Leaf, ArrowRight } from "lucide-react"
import { FloatingLeaves } from "@/components/floating-leaves"

const quickLinks = [
  { label: "Why Nature Matters", href: "#why-nature" },
  { label: "Environmental Threats", href: "#problems" },
  { label: "How To Help", href: "#protect" },
  { label: "Wildlife Gallery", href: "#wildlife" },
  { label: "Daily Eco Habits", href: "#habits" },
]

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #14532D 0%, #0a2518 100%)",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <FloatingLeaves
        count={12}
        direction="up"
        colors={["#bbf7d0", "#d9f99d", "#86efac", "#ffffff"]}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          {/* Brand */}
          <div>
            <a href="#home" className="flex items-center gap-2.5 mb-5 group">
              <Leaf
                className="w-7 h-7 text-green-300 transition-transform duration-300 group-hover:rotate-12"
                fill="currentColor"
              />
              <span
                className="text-xl font-black"
                style={{
                  fontFamily: "var(--font-heading)",
                  color: "#86efac",
                }}
              >
                Green Planet
              </span>
            </a>
            <p className="text-sm leading-relaxed max-w-sm" style={{ color: "rgba(255,255,255,0.5)" }}>
              An environmental awareness platform inspiring people to protect nature, wildlife, and our shared future on Earth.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4
              className="text-sm font-bold uppercase tracking-widest mb-5 text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-sm transition-colors duration-200 group"
                    style={{ color: "rgba(255,255,255,0.45)" }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = "#86efac" }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.45)" }}
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px mb-6" style={{ background: "rgba(255,255,255,0.1)" }} />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            © 2024 Green Planet. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
            Developed by{" "}
            <a
              href="https://bhathiya.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold transition-colors duration-200"
              style={{ color: "#86efac" }}
              onMouseEnter={(e) => { e.currentTarget.style.color = "#d9f99d" }}
              onMouseLeave={(e) => { e.currentTarget.style.color = "#86efac" }}
            >
              bhathiya.dev
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}
