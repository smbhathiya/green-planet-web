import { Navbar } from "@/components/navbar"
import { BackToTop } from "@/components/back-to-top"
import { Hero } from "@/components/hero"
import { WhyNature } from "@/components/why-nature"
import { EnvProblems } from "@/components/env-problems"
import { Statistics } from "@/components/statistics"
import { HowToProtect } from "@/components/how-to-protect"
import { WildlifeShowcase } from "@/components/wildlife-showcase"
import { DailyHabits } from "@/components/daily-habits"
import { Quotes } from "@/components/quotes"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen" style={{ background: "#f8fafc", color: "#111827" }}>
      <Navbar />
      <main>
        <Hero />
        <WhyNature />
        <EnvProblems />
        <Statistics />
        <HowToProtect />
        <WildlifeShowcase />
        <DailyHabits />
        <Quotes />
        <CTASection />
      </main>
      <Footer />
      <BackToTop />
    </div>
  )
}
