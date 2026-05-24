"use client"

import { Leaf, ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section
      id="cta"
      className="relative py-32 md:py-48 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 20% 50%, rgba(34,197,94,0.3) 0%, transparent 55%), radial-gradient(ellipse at 80% 40%, rgba(5,18,9,0.5) 0%, transparent 50%), linear-gradient(135deg, #14532D 0%, #166534 40%, #15803d 100%)",
      }}
    >
      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-10 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Animated orbs */}
      <div
        className="absolute top-1/2 left-10 -translate-y-1/2 w-72 h-72 rounded-full opacity-15 blur-3xl pointer-events-none animate-float-y"
        style={{ background: "radial-gradient(circle, #bbf7d0 0%, transparent 70%)" }}
      />
      <div
        className="absolute top-1/2 right-10 -translate-y-1/2 w-56 h-56 rounded-full opacity-12 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, #d9f99d 0%, transparent 70%)",
          animation: "float-y 4s ease-in-out infinite reverse",
        }}
      />

      {/* Leaf decorations */}
      <div className="absolute top-12 left-16 opacity-10 pointer-events-none rotate-45">
        <Leaf className="w-20 h-20 text-white" fill="currentColor" />
      </div>
      <div className="absolute bottom-12 right-16 opacity-8 pointer-events-none -rotate-30">
        <Leaf className="w-28 h-28 text-white" fill="currentColor" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span
          className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-8"
          style={{
            background: "rgba(255,255,255,0.15)",
            border: "1px solid rgba(255,255,255,0.3)",
            color: "#d9f99d",
          }}
        >
          The Time Is Now
        </span>

        <h2
          className="font-black text-white leading-tight mb-6"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)",
            textShadow: "0 2px 20px rgba(0,0,0,0.15)",
          }}
        >
          Together We Can{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #ffffff 0%, #d9f99d 55%, #bbf7d0 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Save Our Planet
          </span>
        </h2>

        <p
          className="max-w-2xl mx-auto text-lg md:text-xl leading-relaxed mb-12"
          style={{ color: "rgba(255,255,255,0.75)" }}
        >
          Small actions today create a better planet tomorrow. Join millions of people
          around the world who are choosing to act — for the forests, the oceans, the wildlife,
          and for the generations that come after us.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-5">
          <a
            href="#protect"
            className="group inline-flex items-center gap-3 px-10 py-4 rounded-full text-lg font-bold transition-all duration-300"
            style={{
              background: "rgba(255,255,255,0.95)",
              color: "#14532D",
              boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget
              el.style.transform = "translateY(-3px) scale(1.03)"
              el.style.boxShadow = "0 16px 56px rgba(0,0,0,0.2)"
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget
              el.style.transform = "translateY(0) scale(1)"
              el.style.boxShadow = "0 8px 32px rgba(0,0,0,0.15)"
            }}
          >
            <Leaf className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" fill="currentColor" />
            Take Action Now
          </a>

          <a
            href="#why-nature"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full text-lg font-bold text-white transition-all duration-300"
            style={{
              background: "rgba(255,255,255,0.1)",
              border: "1px solid rgba(255,255,255,0.3)",
              backdropFilter: "blur(8px)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget
              el.style.background = "rgba(255,255,255,0.2)"
              el.style.transform = "translateY(-3px)"
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget
              el.style.background = "rgba(255,255,255,0.1)"
              el.style.transform = "translateY(0)"
            }}
          >
            Learn More
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  )
}
