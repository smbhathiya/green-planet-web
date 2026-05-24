"use client"

import { FloatingLeaves } from "@/components/floating-leaves"

const habits = [
  { emoji: "🧴", title: "Reusable Bottle", tip: "Carry a reusable water bottle and eliminate single-use plastic from your daily routine.", color: "#16a34a" },
  { emoji: "💡", title: "Turn Off Lights", tip: "Switch off lights and unplug devices when not in use to reduce energy consumption.", color: "#d97706" },
  { emoji: "🛍️", title: "No Plastic Bags", tip: "Bring your own cloth bags when shopping. It's a tiny habit with a massive collective impact.", color: "#0891b2" },
  { emoji: "🚲", title: "Walk or Cycle", tip: "Choose walking, cycling, or public transport over driving for short journeys when possible.", color: "#7c3aed" },
  { emoji: "⚡", title: "Save Electricity", tip: "Use energy-efficient appliances and consider switching to renewable energy at home.", color: "#d97706" },
  { emoji: "🚿", title: "Shorter Showers", tip: "A 5-minute shower uses 50% less water than a bath. Small changes add up to thousands of liters saved.", color: "#0284c7" },
  { emoji: "🛒", title: "Buy Local", tip: "Support local farmers and reduce food miles. Local produce is fresher and has a smaller carbon footprint.", color: "#15803d" },
  { emoji: "🍽️", title: "Reduce Food Waste", tip: "Plan meals, store food properly, and compost scraps. A third of all food produced globally is wasted.", color: "#e11d48" },
]

export function DailyHabits() {
  return (
    <section
      id="habits"
      className="relative py-24 md:py-36 overflow-hidden"
      style={{ background: "#ffffff" }}
    >
      <FloatingLeaves
        count={16}
        direction="up"
        colors={["#22C55E", "#86efac", "#d9f99d", "#15803d", "#bbf7d0"]}
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
            Everyday Impact
          </span>
          <h2
            className="text-4xl md:text-5xl font-black mb-4"
            style={{ fontFamily: "var(--font-heading)", color: "#111827" }}
          >
            Daily{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #14532D, #22C55E)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Eco Habits
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-lg leading-relaxed" style={{ color: "#6b7280" }}>
            Small actions, done daily by millions of people, reshape the world. Start with just one today.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {habits.map((habit) => (
            <div
              key={habit.title}
              className="group relative rounded-2xl p-6 card-hover cursor-default"
              style={{
                background: "#ffffff",
                border: "1px solid #e5e7eb",
                boxShadow: "0 2px 12px rgba(20,83,45,0.05)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.borderColor = `${habit.color}40`
                el.style.boxShadow = `0 8px 32px ${habit.color}15`
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.borderColor = "#e5e7eb"
                el.style.boxShadow = "0 2px 12px rgba(20,83,45,0.05)"
              }}
            >
              <div
                className="text-4xl mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:-rotate-3 inline-block"
                role="img"
                aria-label={habit.title}
              >
                {habit.emoji}
              </div>
              <h3
                className="text-base font-bold mb-2"
                style={{ fontFamily: "var(--font-heading)", color: "#111827" }}
              >
                {habit.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>
                {habit.tip}
              </p>

              {/* Hover accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"
                style={{ background: `linear-gradient(90deg, ${habit.color}, transparent)` }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
