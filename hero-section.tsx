import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=3869&auto=format&fit=crop"
          alt="Community events background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-violet-500/50 to-purple-500/50 backdrop-blur-sm" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 w-full">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 slide-up">
            Connect with Your Community
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-12 fade-in">
            Discover local events and make a lasting impact through volunteering
          </p>
          
          {/* Search box with glass effect */}
          <div className="glass rounded-2xl p-6 max-w-2xl mx-auto scale-in">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Input 
                  placeholder="Search events..." 
                  className="pl-10 h-12 bg-white/90 border-0"
                />
                <MapPin className="absolute left-3 top-3.5 h-5 w-5 text-gray-400" />
              </div>
              <Button size="lg" className="h-12 px-8 bg-primary hover:bg-primary/90">
                Explore
              </Button>
            </div>
          </div>

          {/* Stats with glass effect */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-3xl mx-auto">
            {[
              { number: "10K+", label: "Events" },
              { number: "50K+", label: "Members" },
              { number: "100K+", label: "Volunteer Hours" },
            ].map((stat, i) => (
              <div
                key={i}
                className="glass rounded-xl p-6 text-white fade-in"
                style={{ animationDelay: `${i * 0.2}s` }}
              >
                <div className="text-3xl font-bold mb-1">{stat.number}</div>
                <div className="text-white/80">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}