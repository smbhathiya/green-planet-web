"use client"

import { Leaf, ArrowRight } from "lucide-react"

export function CTASection() {
  return (
    <section
      id="cta"
      className="relative py-32 md:py-48 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 20% 50%, rgba(20,83,45,0.6) 0%, transparent 55%), radial-gradient(ellipse at 80% 40%, rgba(15,23,42,0.5) 0%, transparent 50%), linear-gradient(135deg, #071a0d 0%, #0a2518 40%, #0F172A 100%)",
      }}
    >
      {/* Grid texture */}
      <div
        className="absolute inset-0 opacity-5 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(34,197,94,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(34,197,94,0.4) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Animated orbs */}
      <div
        className="absolute top-1/2 left-10 -translate-y-1/2 w-72 h-72 rounded-full opacity-20 blur-3xl pointer-events-none animate-float-y"
        style={{ background: "radial-gradient(circle, #22C55E 0%, transparent 70%)" }}
      />
      <div
        className="absolute top-1/2 right-10 -translate-y-1/2 w-56 h-56 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{
          background: "radial-gradient(circle, #38BDF8 0%, transparent 70%)",
          animation: "float-y 4s ease-in-out infinite reverse",
        }}
      />

      {/* Leaf decorations */}
      <div className="absolute top-12 left-16 opacity-15 pointer-events-none rotate-45">
        <Leaf className="w-20 h-20 text-green-400" fill="currentColor" />
      </div>
      <div className="absolute bottom-12 right-16 opacity-10 pointer-events-none -rotate-30">
        <Leaf className="w-28 h-28 text-green-300" fill="currentColor" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span
          className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-8"
          style={{
            background: "rgba(34,197,94,0.15)",
            border: "1px solid rgba(34,197,94,0.35)",
            color: "#86efac",
          }}
        >
          The Time Is Now
        </span>

        <h2
          className="font-black text-white leading-tight mb-6"
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "clamp(2.2rem, 5.5vw, 4.5rem)",
          }}
        >
          Together We Can{" "}
          <span
            style={{
              background: "linear-gradient(135deg, #22C55E 0%, #86efac 50%, #38BDF8 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Save Our Planet
          </span>
        </h2>

        <p className="max-w-2xl mx-auto text-lg md:text-xl text-white/55 leading-relaxed mb-12">
          Small actions today create a better planet tomorrow. Join millions of people
          around the world who are choosing to act — for the forests, the oceans, the wildlife,
          and for the generations that come after us.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-5">
          <a
            href="mailto:action@greenplanet.org"
            className="group inline-flex items-center gap-3 px-10 py-4 rounded-full text-lg font-bold text-white transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #22C55E 0%, #16a34a 100%)",
              boxShadow: "0 0 40px rgba(34,197,94,0.45)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget
              el.style.transform = "translateY(-3px) scale(1.03)"
              el.style.boxShadow = "0 16px 56px rgba(34,197,94,0.6)"
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget
              el.style.transform = "translateY(0) scale(1)"
              el.style.boxShadow = "0 0 40px rgba(34,197,94,0.45)"
            }}
          >
            <Leaf className="w-5 h-5 transition-transform duration-300 group-hover:rotate-12" />
            Join Now
          </a>

          <a
            href="#protect"
            className="inline-flex items-center gap-3 px-10 py-4 rounded-full text-lg font-bold text-white/80 hover:text-white transition-all duration-300"
            style={{
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.15)",
              backdropFilter: "blur(8px)",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget
              el.style.background = "rgba(34,197,94,0.1)"
              el.style.borderColor = "rgba(34,197,94,0.4)"
              el.style.transform = "translateY(-3px)"
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget
              el.style.background = "rgba(255,255,255,0.06)"
              el.style.borderColor = "rgba(255,255,255,0.15)"
              el.style.transform = "translateY(0)"
            }}
          >
            Take Action
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Social proof */}
        <div className="mt-14 flex flex-col items-center gap-3">
          <div className="flex -space-x-3">
            {["#22C55E", "#38BDF8", "#a78bfa", "#f97316", "#fbbf24"].map((color, i) => (
              <div
                key={i}
                className="w-10 h-10 rounded-full border-2 flex items-center justify-center text-sm font-bold"
                style={{
                  background: `${color}20`,
                  borderColor: color,
                  color,
                  fontFamily: "var(--font-heading)",
                  zIndex: 5 - i,
                }}
              >
                {["A", "M", "S", "K", "L"][i]}
              </div>
            ))}
          </div>
          <p className="text-sm text-white/40">
            Join{" "}
            <span className="text-green-400 font-semibold">50,000+</span>{" "}
            people already taking action for a greener future
          </p>
        </div>
      </div>
    </section>
  )
}
