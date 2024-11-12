import { HeroSection } from "@/components/home/hero-section"
import { FeaturedEvents } from "@/components/home/featured-events"
import { ImpactStats } from "@/components/home/impact-stats"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <FeaturedEvents />
      <ImpactStats />
    </main>
  )
}