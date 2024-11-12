import { Button } from "@/components/ui/button"
import { Heart, Users, Trophy } from "lucide-react"
import Image from "next/image"

export function VolunteerHero() {
  return (
    <section className="relative h-[500px] flex items-center">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1593113598332-cd288d649433?w=800&auto=format&fit=crop&q=60"
          alt="Volunteering"
          fill
          className="object-cover brightness-50"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-white">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Make a Difference in Your Community
          </h1>
          <p className="text-xl mb-8">
            Join thousands of volunteers who are creating positive change through meaningful actions
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
              Find Opportunities
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}