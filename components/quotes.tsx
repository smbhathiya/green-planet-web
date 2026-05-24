"use client"

import { Quote } from "lucide-react"
import { FloatingLeaves } from "@/components/floating-leaves"

const quotes = [
  {
    text: "Protecting nature means protecting ourselves. Every species saved is a victory for humanity, not just for wildlife.",
    author: "David Attenborough",
    role: "Naturalist & Broadcaster",
    color: "#16a34a",
    bg: "#f0fdf4",
    border: "#bbf7d0",
  },
  {
    text: "The Earth does not belong to us. We belong to the Earth. All things are connected, like the blood which unites one family.",
    author: "Chief Seattle",
    role: "Indigenous Leader & Environmentalist",
    color: "#14532D",
    bg: "#dcfce7",
    border: "#86efac",
  },
  {
    text: "In every walk with nature, one receives far more than he seeks. The clearest way into the Universe is through a forest wilderness.",
    author: "John Muir",
    role: "Naturalist & Author",
    color: "#15803d",
    bg: "#f0fdf4",
    border: "#bbf7d0",
  },
]

export function Quotes() {
  return (
    <section
      id="quotes"
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ background: "#f0fdf4" }}
    >
      <FloatingLeaves
        count={16}
        direction="down"
        colors={["#22C55E", "#86efac", "#15803d"]}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{
              background: "#dcfce7",
              border: "1px solid #bbf7d0",
              color: "#14532D",
            }}
          >
            Words of Wisdom
          </span>
          <h2
            className="text-4xl md:text-5xl font-black mb-4"
            style={{ fontFamily: "var(--font-heading)", color: "#111827" }}
          >
            Voices for{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #14532D, #22C55E)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Our Planet
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-lg" style={{ color: "#6b7280" }}>
            Throughout history, visionaries have reminded us of our sacred bond with nature. Their words are more urgent than ever.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {quotes.map((quote) => (
            <div
              key={quote.author}
              className="group relative rounded-2xl p-8 card-hover"
              style={{
                background: "#ffffff",
                border: `1px solid ${quote.border}`,
                boxShadow: "0 2px 12px rgba(20,83,45,0.06)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.background = quote.bg
                el.style.boxShadow = `0 12px 40px ${quote.color}18`
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.background = "#ffffff"
                el.style.boxShadow = "0 2px 12px rgba(20,83,45,0.06)"
              }}
            >
              {/* Quote icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-6"
                style={{
                  background: `${quote.color}12`,
                  border: `1px solid ${quote.border}`,
                }}
              >
                <Quote style={{ width: 20, height: 20, color: quote.color }} />
              </div>

              {/* Quote text */}
              <blockquote
                className="leading-relaxed mb-6 text-[15px] italic"
                style={{ color: "#374151" }}
              >
                &ldquo;{quote.text}&rdquo;
              </blockquote>

              {/* Divider */}
              <div
                className="h-px mb-5"
                style={{
                  background: `linear-gradient(90deg, ${quote.color}50, transparent)`,
                }}
              />

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{
                    background: `${quote.color}15`,
                    border: `1px solid ${quote.border}`,
                    color: quote.color,
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  {quote.author[0]}
                </div>
                <div>
                  <div
                    className="text-sm font-bold"
                    style={{ fontFamily: "var(--font-heading)", color: "#111827" }}
                  >
                    {quote.author}
                  </div>
                  <div className="text-xs" style={{ color: "#9ca3af" }}>
                    {quote.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
