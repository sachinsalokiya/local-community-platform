import { AboutHero } from "@/components/about/about-hero"
import { OurMission } from "@/components/about/our-mission"
import { TeamSection } from "@/components/about/team-section"
import { Testimonials } from "@/components/about/testimonials"

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-16">
      <AboutHero />
      <OurMission />
      <TeamSection />
      <Testimonials />
    </main>
  )
}