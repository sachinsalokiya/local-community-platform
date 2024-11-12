export function ImpactStats() {
  return (
    <section className="bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Community Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { number: "10,000+", label: "Active Members" },
            { number: "500+", label: "Monthly Events" },
            { number: "50,000+", label: "Volunteer Hours" },
          ].map((stat, i) => (
            <div key={i} className="bg-white p-8 rounded-lg shadow-md">
              <div className="text-4xl font-bold text-primary mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}