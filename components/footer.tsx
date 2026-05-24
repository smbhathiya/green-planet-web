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
  { icon: MessageCircle, label: "Twitter / X", href: "#", color: "#38BDF8" },
  { icon: Camera, label: "Instagram", href: "#", color: "#f472b6" },
  { icon: PlayCircle, label: "YouTube", href: "#", color: "#f97316" },
  { icon: Mail, label: "Email", href: "#", color: "#22C55E" },
]

export function Footer() {
  return (
    <footer
      style={{
        background: "linear-gradient(180deg, #020617 0%, #010410 100%)",
        borderTop: "1px solid rgba(34,197,94,0.08)",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2.5 mb-5 group">
              <Leaf
                className="w-7 h-7 text-green-400 transition-transform duration-300 group-hover:rotate-12"
                fill="currentColor"
              />
              <span
                className="text-xl font-black"
                style={{
                  fontFamily: "var(--font-heading)",
                  background: "linear-gradient(135deg, #22C55E, #86efac)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Green Planet
              </span>
            </a>
            <p className="text-sm text-white/40 leading-relaxed mb-6">
              A modern environmental awareness platform inspiring millions to protect nature, wildlife, and our shared future on Earth.
            </p>
            <div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs"
              style={{
                background: "rgba(34,197,94,0.08)",
                border: "1px solid rgba(34,197,94,0.2)",
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
              className="text-sm font-bold text-white uppercase tracking-widest mb-5"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="flex items-center gap-2 text-sm text-white/40 hover:text-green-400 transition-colors duration-200 group"
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
              className="text-sm font-bold text-white uppercase tracking-widest mb-5"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Connect With Us
            </h4>
            <div className="space-y-3">
              {socialLinks.map(({ icon: Icon, label, href, color }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-3 text-sm text-white/40 transition-all duration-200 group"
                  style={{"--hover-color": color} as React.CSSProperties}
                  onMouseEnter={(e) => {
                    const el = e.currentTarget
                    el.style.color = color
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = ""
                  }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200"
                    style={{
                      background: `${color}12`,
                      border: `1px solid ${color}25`,
                    }}
                  >
                    <Icon style={{ width: 15, height: 15, color }} />
                  </div>
                  {label}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4
              className="text-sm font-bold text-white uppercase tracking-widest mb-5"
              style={{ fontFamily: "var(--font-heading)" }}
            >
              Stay Informed
            </h4>
            <p className="text-sm text-white/40 leading-relaxed mb-5">
              Get weekly environmental news, tips, and stories delivered to your inbox.
            </p>
            <div className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="your@email.com"
                className="w-full px-4 py-3 rounded-xl text-sm text-white placeholder:text-white/25 outline-none focus:ring-1 transition-all duration-200"
                style={{
                  background: "rgba(255,255,255,0.04)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
                onFocus={(e) => {
                  e.currentTarget.style.borderColor = "rgba(34,197,94,0.4)"
                  e.currentTarget.style.boxShadow = "0 0 0 3px rgba(34,197,94,0.08)"
                }}
                onBlur={(e) => {
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)"
                  e.currentTarget.style.boxShadow = "none"
                }}
              />
              <button
                className="w-full py-3 rounded-xl text-sm font-bold text-white transition-all duration-300"
                style={{
                  background: "linear-gradient(135deg, #22C55E 0%, #16a34a 100%)",
                  boxShadow: "0 0 20px rgba(34,197,94,0.25)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget
                  el.style.transform = "translateY(-1px)"
                  el.style.boxShadow = "0 6px 28px rgba(34,197,94,0.45)"
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget
                  el.style.transform = "translateY(0)"
                  el.style.boxShadow = "0 0 20px rgba(34,197,94,0.25)"
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
          style={{
            background:
              "linear-gradient(90deg, transparent, rgba(34,197,94,0.2), transparent)",
          }}
        />

        {/* Bottom row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/25">
            © 2024 Green Planet. All rights reserved. Built with love for Earth.
          </p>
          <div className="flex items-center gap-5">
            {["Privacy Policy", "Terms of Use", "Contact"].map((item) => (
              <a
                key={item}
                href="#"
                className="text-xs text-white/25 hover:text-green-400 transition-colors duration-200"
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
