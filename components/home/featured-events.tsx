import { Button } from "@/components/ui/button"
import { Calendar, Users } from "lucide-react"
import Image from "next/image"

export function FeaturedEvents() {
  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold">Featured Events</h2>
        <Button variant="outline">View All</Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[1, 2, 3].map((i) => (
          <div key={i} className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow">
            <div className="relative h-48">
              <Image
                src={`https://images.unsplash.com/photo-151179540983${i}-ef04bbd61622?q=80&w=1000&auto=format&fit=crop`}
                alt={`Event ${i}`}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center gap-2 text-sm text-gray-500 mb-2">
                <Calendar className="h-4 w-4" />
                <span>Tomorrow, 7:00 PM</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Community Cleanup Drive</h3>
              <p className="text-gray-600 mb-4">Join us in making our neighborhood cleaner and greener.</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-1 text-gray-500">
                  <Users className="h-4 w-4" />
                  <span>42 attending</span>
                </div>
                <Button variant="secondary">Learn More</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}