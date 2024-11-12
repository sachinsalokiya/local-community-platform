import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, Calendar } from "lucide-react"
import Image from "next/image"

const opportunities = [
  {
    id: 1,
    title: "Community Garden Project",
    organization: "Green Earth Initiative",
    image: "https://images.unsplash.com/photo-1592150621744-aca64f48394a?w=800&auto=format&fit=crop&q=60",
    location: "Downtown Community Center",
    date: "Every Saturday",
    duration: "3 hours",
    tags: ["Environment", "Gardening", "Community"],
  },
  {
    id: 2,
    title: "Youth Mentorship Program",
    organization: "Future Leaders Foundation",
    image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800&auto=format&fit=crop&q=60",
    location: "Local High School",
    date: "Weekdays",
    duration: "2 hours",
    tags: ["Education", "Mentoring", "Youth"],
  },
  {
    id: 3,
    title: "Food Bank Distribution",
    organization: "City Food Bank",
    image: "https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&auto=format&fit=crop&q=60",
    location: "Food Bank Warehouse",
    date: "Every Sunday",
    duration: "4 hours",
    tags: ["Food Security", "Community Service"],
  },
]

export function VolunteerOpportunities() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Current Opportunities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {opportunities.map((opportunity) => (
            <Card key={opportunity.id} className="overflow-hidden">
              <div className="relative h-48">
                <Image
                  src={opportunity.image}
                  alt={opportunity.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{opportunity.title}</h3>
                <p className="text-gray-600 mb-4">{opportunity.organization}</p>
                <div className="space-y-2 mb-4">
                  <div className="flex items-center text-sm text-gray-500">
                    <MapPin className="h-4 w-4 mr-2" />
                    {opportunity.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Calendar className="h-4 w-4 mr-2" />
                    {opportunity.date}
                  </div>
                  <div className="flex items-center text-sm text-gray-500">
                    <Clock className="h-4 w-4 mr-2" />
                    {opportunity.duration}
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mb-4">
                  {opportunity.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                <Button className="w-full">Sign Up</Button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}