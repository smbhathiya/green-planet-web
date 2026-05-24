"use client"

import { Quote } from "lucide-react"

const quotes = [
  {
    text: "Protecting nature means protecting ourselves. Every species saved is a victory for humanity, not just for wildlife.",
    author: "David Attenborough",
    role: "Naturalist & Broadcaster",
    color: "#22C55E",
  },
  {
    text: "The Earth does not belong to us. We belong to the Earth. All things are connected, like the blood which unites one family.",
    author: "Chief Seattle",
    role: "Indigenous Leader & Environmentalist",
    color: "#38BDF8",
  },
  {
    text: "In every walk with nature, one receives far more than he seeks. The clearest way into the Universe is through a forest wilderness.",
    author: "John Muir",
    role: "Naturalist & Author",
    color: "#a78bfa",
  },
]

export function Quotes() {
  return (
    <section
      id="quotes"
      className="py-24 md:py-36"
      style={{ background: "linear-gradient(180deg, #020617 0%, #0a1628 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{
              background: "rgba(167,139,250,0.1)",
              border: "1px solid rgba(167,139,250,0.25)",
              color: "#c4b5fd",
            }}
          >
            Words of Wisdom
          </span>
          <h2
            className="text-4xl md:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Voices for{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #a78bfa, #c4b5fd)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Our Planet
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-white/50 text-lg">
            Throughout history, visionaries have reminded us of our sacred bond with nature. Their words are more urgent than ever.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {quotes.map((quote) => (
            <div
              key={quote.author}
              className="group relative rounded-2xl p-8 card-hover"
              style={{
                background: "rgba(15,23,42,0.65)",
                border: "1px solid rgba(255,255,255,0.06)",
                backdropFilter: "blur(16px)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.borderColor = `${quote.color}30`
                el.style.background = "rgba(15,23,42,0.9)"
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.borderColor = "rgba(255,255,255,0.06)"
                el.style.background = "rgba(15,23,42,0.65)"
              }}
            >
              {/* Background glow */}
              <div
                className="absolute top-0 right-0 w-48 h-48 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle, ${quote.color}20 0%, transparent 70%)`,
                }}
              />

              {/* Quote icon */}
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-6"
                style={{
                  background: `${quote.color}15`,
                  border: `1px solid ${quote.color}30`,
                }}
              >
                <Quote style={{ width: 20, height: 20, color: quote.color }} />
              </div>

              {/* Quote text */}
              <blockquote className="text-white/70 leading-relaxed mb-6 text-[15px] italic relative z-10">
                &ldquo;{quote.text}&rdquo;
              </blockquote>

              {/* Divider */}
              <div
                className="h-px mb-5"
                style={{
                  background: `linear-gradient(90deg, ${quote.color}40, transparent)`,
                }}
              />

              {/* Author */}
              <div className="flex items-center gap-3">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0"
                  style={{
                    background: `${quote.color}20`,
                    border: `1px solid ${quote.color}30`,
                    color: quote.color,
                    fontFamily: "var(--font-heading)",
                  }}
                >
                  {quote.author[0]}
                </div>
                <div>
                  <div
                    className="text-sm font-bold text-white"
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {quote.author}
                  </div>
                  <div className="text-xs text-white/35">{quote.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
