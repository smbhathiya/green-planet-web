"use client"

import { Play } from "lucide-react"

export function VideoSection() {
  return (
    <section
      id="story"
      className="relative py-40 md:py-56 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 30% 60%, rgba(34,197,94,0.3) 0%, transparent 55%), radial-gradient(ellipse at 70% 30%, rgba(20,83,45,0.4) 0%, transparent 55%), linear-gradient(160deg, #14532D 0%, #166534 45%, #15803d 100%)",
      }}
    >
      {/* Cinematic vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(7,26,13,0.6) 100%)",
        }}
      />

      {/* Animated orbs */}
      <div
        className="absolute top-1/3 left-1/3 w-80 h-80 rounded-full opacity-20 blur-3xl pointer-events-none animate-float-y"
        style={{ background: "radial-gradient(circle, #bbf7d0 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-1/3 right-1/3 w-60 h-60 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, #d9f99d 0%, transparent 70%)",
          animation: "float-y 5s ease-in-out infinite reverse",
        }}
      />

      {/* Horizontal accent */}
      <div
        className="absolute left-0 right-0 top-1/2 h-px opacity-15 pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, #bbf7d0, transparent)" }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span
          className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-8"
          style={{
            background: "rgba(255,255,255,0.15)",
            border: "1px solid rgba(255,255,255,0.3)",
            color: "#d9f99d",
          }}
        >
          Our Story
        </span>

        <h2
          className="font-black text-white leading-tight mb-8"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2.5rem, 6vw, 5rem)",
            textShadow: "0 2px 20px rgba(0,0,0,0.2)",
          }}
        >
          Earth Is{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #d9f99d 55%, #bbf7d0 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Our Only Home
          </span>
        </h2>

        <p
          className="max-w-2xl mx-auto text-xl leading-relaxed mb-12"
          style={{ color: "rgba(255,255,255,0.75)" }}
        >
          We did not inherit the Earth from our ancestors. We are borrowing it from our children.
          Every forest cleared, every species lost, every degree of warming is a debt we leave them to pay.
        </p>

        {/* Play button */}
        <div className="flex justify-center">
          <button
            className="group relative w-24 h-24 rounded-full flex items-center justify-center transition-all duration-300"
            style={{
              background: "rgba(255,255,255,0.15)",
              border: "2px solid rgba(255,255,255,0.4)",
              backdropFilter: "blur(12px)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget
              el.style.background = "rgba(255,255,255,0.25)"
              el.style.borderColor = "rgba(255,255,255,0.7)"
              el.style.transform = "scale(1.1)"
              el.style.boxShadow = "0 0 60px rgba(255,255,255,0.2)"
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget
              el.style.background = "rgba(255,255,255,0.15)"
              el.style.borderColor = "rgba(255,255,255,0.4)"
              el.style.transform = "scale(1)"
              el.style.boxShadow = "none"
            }}
            aria-label="Watch our story"
          >
            {/* Pulse rings */}
            <div
              className="absolute inset-0 rounded-full animate-ring-pulse"
              style={{ border: "2px solid rgba(255,255,255,0.25)" }}
            />
            <div
              className="absolute inset-0 rounded-full animate-ring-pulse"
              style={{ border: "2px solid rgba(255,255,255,0.15)", animationDelay: "0.8s" }}
            />

            <Play
              className="w-9 h-9 text-white ml-1 transition-transform duration-300 group-hover:scale-110"
              fill="currentColor"
            />
          </button>
        </div>

        <p className="mt-6 text-sm tracking-wider" style={{ color: "rgba(255,255,255,0.4)" }}>
          Watch Our Environmental Story
        </p>
      </div>
    </section>
  )
}
