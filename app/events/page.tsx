import { EventsHero } from "@/components/events/events-hero"
import { EventsList } from "@/components/events/events-list"
import { EventFilters } from "@/components/events/event-filters"

export default function EventsPage() {
  return (
    <main className="min-h-screen pt-16">
      <EventsHero />
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-64 shrink-0">
            <EventFilters />
          </aside>
          <div className="flex-1">
            <EventsList />
          </div>
        </div>
      </div>
    </main>
  )
}