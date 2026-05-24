"use client"

import { useEffect, useState } from "react"
import { ChevronDown, Leaf } from "lucide-react"
import { FloatingLeaves } from "@/components/floating-leaves"

export function Hero() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/hero.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Dark gradient overlay for text readability */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(160deg, rgba(7,26,13,0.72) 0%, rgba(10,30,16,0.55) 50%, rgba(7,26,13,0.65) 100%)",
        }}
      />

      {/* Floating leaves */}
      <FloatingLeaves
        count={22}
        direction="up"
        colors={["#bbf7d0", "#d9f99d", "#86efac", "#ffffff", "#dcfce7"]}
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-20 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-wider uppercase mb-8 transition-all duration-700"
          style={{
            background: "rgba(255,255,255,0.15)",
            border: "1px solid rgba(255,255,255,0.35)",
            color: "#d9f99d",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(20px)",
            transitionDelay: "0.1s",
          }}
        >
          <Leaf className="w-3.5 h-3.5" />
          Environmental Awareness Platform
        </div>

        {/* Heading */}
        <h1
          className="font-black leading-tight mb-6 transition-all duration-700 text-white"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2.5rem, 7vw, 5.5rem)",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(30px)",
            transitionDelay: "0.25s",
            textShadow: "0 2px 20px rgba(0,0,0,0.2)",
          }}
        >
          <span
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #d9f99d 55%, #bbf7d0 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Protect Nature
          </span>
          <br />
          <span className="text-white/90">Before It&apos;s Too Late</span>
        </h1>

        {/* Subheading */}
        <p
          className="max-w-2xl mx-auto text-lg md:text-xl leading-relaxed mb-10 transition-all duration-700"
          style={{
            color: "rgba(255,255,255,0.8)",
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(30px)",
            transitionDelay: "0.4s",
          }}
        >
          Nature provides us with air, water, food, and life itself. Together we
          can build a greener future for the next generation and those that follow.
        </p>

        {/* Buttons */}
        <div
          className="flex flex-wrap items-center justify-center gap-4 transition-all duration-700"
          style={{
            opacity: mounted ? 1 : 0,
            transform: mounted ? "translateY(0)" : "translateY(30px)",
            transitionDelay: "0.55s",
          }}
        >
          <a
            href="#why-nature"
            className="group inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-base font-bold transition-all duration-300"
            style={{
              background: "rgba(255,255,255,0.95)",
              color: "#14532D",
              boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget
              el.style.transform = "translateY(-3px) scale(1.02)"
              el.style.boxShadow = "0 16px 48px rgba(0,0,0,0.2)"
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget
              el.style.transform = "translateY(0) scale(1)"
              el.style.boxShadow = "0 8px 32px rgba(0,0,0,0.15)"
            }}
          >
            <Leaf className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" fill="currentColor" />
            Discover Why It Matters
          </a>

          <a
            href="#problems"
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-base font-bold text-white transition-all duration-300"
            style={{
              background: "rgba(255,255,255,0.12)",
              border: "1px solid rgba(255,255,255,0.35)",
              backdropFilter: "blur(8px)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget
              el.style.background = "rgba(255,255,255,0.22)"
              el.style.transform = "translateY(-3px)"
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget
              el.style.background = "rgba(255,255,255,0.12)"
              el.style.transform = "translateY(0)"
            }}
          >
            See The Threats
          </a>
        </div>

        {/* Stats row */}
        <div
          className="flex flex-wrap justify-center gap-8 mt-16 pt-8 transition-all duration-700"
          style={{
            borderTop: "1px solid rgba(255,255,255,0.15)",
            opacity: mounted ? 1 : 0,
            transitionDelay: "0.75s",
          }}
        >
          {[
            { value: "15B+", label: "Trees Lost Yearly" },
            { value: "40K+", label: "Species Endangered" },
            { value: "8M+", label: "Tons Ocean Plastic" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-2xl md:text-3xl font-black mb-1"
                style={{
                  fontFamily: "var(--font-heading)",
                  background: "linear-gradient(135deg, #ffffff, #d9f99d)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {stat.value}
              </div>
              <div className="text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.55)" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-scroll-bounce">
        <span className="text-xs uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.45)" }}>Scroll</span>
        <ChevronDown className="w-5 h-5" style={{ color: "rgba(255,255,255,0.5)" }} />
      </div>
    </section>
  )
}
