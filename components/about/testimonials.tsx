import Image from "next/image"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote: "This platform has transformed how we connect with our local community. The events we've attended have been incredible!",
    author: "Jessica Smith",
    role: "Community Member",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&auto=format&fit=crop&q=60",
  },
  {
    quote: "As an event organizer, I've found this platform invaluable for reaching engaged community members.",
    author: "David Park",
    role: "Event Organizer",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800&auto=format&fit=crop&q=60",
  },
  {
    quote: "The volunteer opportunities have allowed me to make a real difference in my community while meeting amazing people.",
    author: "Maria Garcia",
    role: "Volunteer",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=800&auto=format&fit=crop&q=60",
  },
]

export function Testimonials() {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What People Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md relative">
              <Quote className="absolute top-6 right-6 h-8 w-8 text-purple-100" />
              <p className="text-gray-600 mb-6">{testimonial.quote}</p>
              <div className="flex items-center">
                <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-gray-500">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}