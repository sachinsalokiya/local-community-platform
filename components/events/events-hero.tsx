import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, Calendar, MapPin } from "lucide-react"

export function EventsHero() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 gradient-animation opacity-90" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 slide-up">
            Discover Amazing Events
          </h1>
          <p className="text-xl text-white/90 fade-in">
            Find and join events that match your interests
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <div className="glass rounded-2xl p-6 scale-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Input placeholder="Search events..." className="pl-10 bg-white/90 border-0" />
                <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <div className="relative">
                <Input type="date" className="pl-10 bg-white/90 border-0" />
                <Calendar className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
              <div className="relative">
                <Input placeholder="Location" className="pl-10 bg-white/90 border-0" />
                <MapPin className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              </div>
            </div>
            <div className="mt-4 flex justify-end">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Search Events
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}