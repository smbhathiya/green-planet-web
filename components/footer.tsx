"use client"

import { Leaf, Mail, MessageCircle, Camera, PlayCircle, ArrowRight } from "lucide-react"

const quickLinks = [
  { label: "Why Nature Matters", href: "#why-nature" },
  { label: "Environmental Threats", href: "#problems" },
  { label: "How To Help", href: "#protect" },
  { label: "Wildlife Gallery", href: "#wildlife" },
  { label: "Daily Eco Habits", href: "#habits" },
  { label: "Our Story", href: "#story" },
]

const socialLinks = [
  { icon: MessageCircle, label: "Twitter / X", href: "#", color: "#16a34a" },
  { icon: Camera, label: "Instagram", href: "#", color: "#15803d" },
  { icon: PlayCircle, label: "YouTube", href: "#", color: "#22C55E" },
  { icon: Mail, label: "Email", href: "#", color: "#14532D" },
]

export function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(180deg, #14532D 0%, #0a2518 100%)",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2.5 mb-5 group">
              <Leaf
                className="w-7 h-7 text-green-300 transition-transform duration-300 group-hover:rotate-12"
                fill="currentColor"
              />
              <span
                className="text-xl font-black"
                style={{
                  fontFamily: "var(--font-heading)",
                  background: "linear-gradient(135deg, #86efac, #d9f99d)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Green Planet
              </span>
            </a>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "rgba(255,255,255,0.5)" }}>
              An environmental awareness platform inspiring people to protect nature, wildlife, and our shared future on Earth.
            </p>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs"
              style={{
                background: "rgba(255,255,255,0.08)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "#86efac",
              }}
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              Protecting Earth Since 2024
            </div>
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
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "#86efac"
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(255,255,255,0.45)"
                    }}
                  >
                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-200" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4
              className="text-sm font-bold uppercase tracking-widest mb-5 text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Connect With Us
            </h4>
            <div className="space-y-3">
              {socialLinks.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-3 text-sm transition-all duration-200"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#86efac"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "rgba(255,255,255,0.45)"
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center"
                    style={{
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid rgba(255,255,255,0.12)",
                    }}
                  >
                    <Icon style={{ width: 15, height: 15, color: "#86efac" }} />
                  </div>
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4
              className="text-sm font-bold uppercase tracking-widest mb-5 text-white"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Stay Informed
            </h4>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "rgba(255,255,255,0.45)" }}>
              Get weekly environmental news, tips, and stories delivered to your inbox.
            </p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-xl text-sm outline-none transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.08)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "white",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "rgba(134,239,172,0.5)"
                  e.currentTarget.style.boxShadow = "0 0 0 3px rgba(134,239,172,0.08)"
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.12)"
                  e.currentTarget.style.boxShadow = "none"
                }}
              />
              <button
                className="w-full py-3 rounded-xl text-sm font-bold transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #22C55E 0%, #16a34a 100%)",
                  color: "white",
                  boxShadow: "0 4px 20px rgba(34,197,94,0.3)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget
                  el.style.transform = "translateY(-1px)"
                  el.style.boxShadow = "0 8px 32px rgba(34,197,94,0.45)"
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.transform = "translateY(0)"
                  el.style.boxShadow = "0 4px 20px rgba(34,197,94,0.3)"
                }}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div
          className="h-px mb-8"
          style={{ background: "rgba(255,255,255,0.1)" }}
        />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>
            © 2024 Green Planet. All rights reserved. Built with love for Earth.
          </p>
          <div className="flex items-center gap-5">
            {["Privacy Policy", "Terms of Use", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs transition-colors duration-200"
                style={{ color: "rgba(255,255,255,0.3)" }}
                onMouseEnter={(e) => { e.currentTarget.style.color = "#86efac" }}
                onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(255,255,255,0.3)" }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
