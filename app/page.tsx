import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { WhyNature } from "@/components/why-nature"
import { EnvProblems } from "@/components/env-problems"
import { Statistics } from "@/components/statistics"
import { HowToProtect } from "@/components/how-to-protect"
import { WildlifeShowcase } from "@/components/wildlife-showcase"
import { DailyHabits } from "@/components/daily-habits"
import { VideoSection } from "@/components/video-section"
import { Quotes } from "@/components/quotes"
import { CTASection } from "@/components/cta-section"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen" style={{ background: "#020617", color: "#f8fafc" }}>
      <Navbar />
      <main>
        <Hero />
        <WhyNature />
        <EnvProblems />
        <Statistics />
        <HowToProtect />
        <WildlifeShowcase />
        <DailyHabits />
        <VideoSection />
        <Quotes />
        <CTASection />
      </main>
      <Footer />
    </div>
  )
}
