import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Calendar, MapPin, Users, Heart } from "lucide-react"
import Image from "next/image"

const events = [
  {
    id: 1,
    title: "Summer Music Festival",
    image: "https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?w=800&auto=format&fit=crop&q=60",
    date: "June 15, 2024",
    location: "Central Park",
    price: "$49",
    attendees: 234,
  },
  {
    id: 2,
    title: "Tech Conference 2024",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&auto=format&fit=crop&q=60",
    date: "July 2, 2024",
    location: "Convention Center",
    price: "$99",
    attendees: 521,
  },
  {
    id: 3,
    title: "Food & Wine Festival",
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&auto=format&fit=crop&q=60",
    date: "August 10, 2024",
    location: "Downtown Square",
    price: "$75",
    attendees: 342,
  },
]

export function EventsList() {
  return (
    <div className="space-y-6">
      {events.map((event) => (
        <Card key={event.id} className="overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="relative w-full md:w-64 h-48">
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="flex-1 p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                  <div className="space-y-2 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Calendar className="h-4 w-4 mr-2" />
                      {event.date}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-4 w-4 mr-2" />
                      {event.location}
                    </div>
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-2" />
                      {event.attendees} attending
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Button variant="outline" size="icon">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <div className="text-xl font-semibold">{event.price}</div>
                </div>
              </div>
              <div className="mt-4 flex justify-end">
                <Button>Get Tickets</Button>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  )
}