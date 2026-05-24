"use client"

const habits = [
  { emoji: "🧴", title: "Reusable Bottle", tip: "Carry a reusable water bottle and eliminate single-use plastic from your daily routine." },
  { emoji: "💡", title: "Turn Off Lights", tip: "Switch off lights and unplug devices when not in use to reduce energy consumption." },
  { emoji: "🛍️", title: "No Plastic Bags", tip: "Bring your own cloth bags when shopping. It's a tiny habit with a massive collective impact." },
  { emoji: "🚲", title: "Walk or Cycle", tip: "Choose walking, cycling, or public transport over driving for short journeys when possible." },
  { emoji: "⚡", title: "Save Electricity", tip: "Use energy-efficient appliances and consider switching to renewable energy at home." },
  { emoji: "🚿", title: "Shorter Showers", tip: "A 5-minute shower uses 50% less water than a bath. Small changes add up to thousands of liters saved." },
  { emoji: "🛒", title: "Buy Local", tip: "Support local farmers and reduce food miles. Local produce is fresher and has a smaller carbon footprint." },
  { emoji: "🍽️", title: "Reduce Food Waste", tip: "Plan meals, store food properly, and compost scraps. A third of all food produced globally is wasted." },
]

export function DailyHabits() {
  return (
    <section
      id="habits"
      className="py-24 md:py-36"
      style={{ background: "linear-gradient(180deg, #0a1628 0%, #020617 100%)" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <span
            className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest mb-4"
            style={{
              background: "rgba(34,197,94,0.1)",
              border: "1px solid rgba(34,197,94,0.25)",
              color: "#86efac",
            }}
          >
            Everyday Impact
          </span>
          <h2
            className="text-4xl md:text-5xl font-black text-white mb-4"
            style={{ fontFamily: "var(--font-heading)" }}
          >
            Daily{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #22C55E, #86efac)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Eco Habits
            </span>
          </h2>
          <p className="max-w-xl mx-auto text-white/50 text-lg leading-relaxed">
            Small actions, done daily by millions of people, reshape the world. Start with just one today.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {habits.map((habit) => (
            <div
              key={habit.title}
              className="group relative rounded-2xl p-6 card-hover cursor-default"
              style={{
                background: "rgba(15,23,42,0.65)",
                border: "1px solid rgba(255,255,255,0.06)",
                backdropFilter: "blur(12px)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.borderColor = "rgba(34,197,94,0.2)"
                el.style.background = "rgba(15,23,42,0.9)"
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.borderColor = "rgba(255,255,255,0.06)"
                el.style.background = "rgba(15,23,42,0.65)"
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
                className="text-base font-bold text-white mb-2"
                style={{ fontFamily: "var(--font-heading)" }}
              >
                {habit.title}
              </h3>
              <p className="text-sm text-white/40 leading-relaxed">{habit.tip}</p>

              {/* Hover accent */}
              <div
                className="absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl transition-all duration-300 opacity-0 group-hover:opacity-100"
                style={{
                  background:
                    "linear-gradient(90deg, #22C55E, #86efac, transparent)",
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
