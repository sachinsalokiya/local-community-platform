import { Heart, Users, Globe } from "lucide-react"

export function OurMission() {
  const values = [
    {
      icon: Heart,
      title: "Community First",
      description: "We believe in the power of community to create positive change.",
    },
    {
      icon: Users,
      title: "Inclusive Platform",
      description: "Creating opportunities for everyone to participate and contribute.",
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Starting locally, but thinking globally about our community impact.",
    },
  ]

  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            To empower communities by connecting people through meaningful events and volunteer opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center">
              <value.icon className="h-12 w-12 mx-auto mb-4 text-purple-600" />
              <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}