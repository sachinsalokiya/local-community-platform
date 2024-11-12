import { VolunteerHero } from "@/components/volunteer/volunteer-hero"
import { VolunteerOpportunities } from "@/components/volunteer/volunteer-opportunities"
import { ImpactMetrics } from "@/components/volunteer/impact-metrics"

export default function VolunteerPage() {
  return (
    <main className="min-h-screen pt-16">
      <VolunteerHero />
      <ImpactMetrics />
      <VolunteerOpportunities />
    </main>
  )
}