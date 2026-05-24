"use client"

import { useEffect, useState } from "react"
import { ChevronDown, Leaf } from "lucide-react"

const LEAVES = [
  { left: "4%",  delay: "0s",   dur: "14s",  size: 16, opacity: 0.5 },
  { left: "12%", delay: "2.5s", dur: "11s",  size: 10, opacity: 0.4 },
  { left: "20%", delay: "5s",   dur: "16s",  size: 20, opacity: 0.6 },
  { left: "30%", delay: "1s",   dur: "12s",  size: 13, opacity: 0.35 },
  { left: "42%", delay: "4s",   dur: "18s",  size: 18, opacity: 0.5 },
  { left: "52%", delay: "0.5s", dur: "10s",  size: 11, opacity: 0.4 },
  { left: "63%", delay: "3.5s", dur: "15s",  size: 22, opacity: 0.55 },
  { left: "72%", delay: "6s",   dur: "13s",  size: 14, opacity: 0.4 },
  { left: "81%", delay: "2s",   dur: "17s",  size: 9,  opacity: 0.3 },
  { left: "90%", delay: "4.5s", dur: "11s",  size: 17, opacity: 0.5 },
  { left: "96%", delay: "1.5s", dur: "14s",  size: 12, opacity: 0.35 },
  { left: "8%",  delay: "7s",   dur: "19s",  size: 8,  opacity: 0.3 },
]

function LeafParticle({
  left, delay, dur, size, opacity,
}: { left: string; delay: string; dur: string; size: number; opacity: number }) {
  return (
    <div
      className="absolute bottom-0 pointer-events-none"
      style={{
        left,
        animation: `leaf-float ${dur} ${delay} linear infinite`,
        opacity,
      }}
    >
      <Leaf
        style={{ width: size, height: size, color: "#bbf7d0" }}
        fill="currentColor"
      />
    </div>
  )
}

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
        background:
          "radial-gradient(ellipse at 25% 55%, rgba(34,197,94,0.25) 0%, transparent 55%), radial-gradient(ellipse at 75% 25%, rgba(20,83,45,0.3) 0%, transparent 55%), linear-gradient(160deg, #14532D 0%, #166534 35%, #15803d 65%, #22C55E 100%)",
      }}
    >
      {/* Light mesh overlay */}
      <div
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage:
            "radial-gradient(circle at 60% 40%, rgba(255,255,255,0.15) 0%, transparent 60%)",
        }}
      />

      {/* Animated glow orbs */}
      <div
        className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none animate-float-y"
        style={{ background: "radial-gradient(circle, #bbf7d0 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-64 h-64 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, #d9f99d 0%, transparent 70%)",
          animation: "float-y 4.5s ease-in-out infinite reverse",
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Floating leaves */}
      <div className="absolute inset-0 overflow-hidden">
        {LEAVES.map((leaf, i) => (
          <LeafParticle key={i} {...leaf} />
        ))}
      </div>

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
