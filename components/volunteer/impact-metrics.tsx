import { Heart, Users, Trophy, Clock } from "lucide-react"

export function ImpactMetrics() {
  const metrics = [
    {
      icon: Users,
      value: "10,000+",
      label: "Active Volunteers",
      color: "text-blue-500",
    },
    {
      icon: Clock,
      value: "50,000+",
      label: "Hours Contributed",
      color: "text-green-500",
    },
    {
      icon: Heart,
      value: "1,000+",
      label: "Projects Completed",
      color: "text-red-500",
    },
    {
      icon: Trophy,
      value: "100+",
      label: "Partner Organizations",
      color: "text-yellow-500",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric, index) => (
            <div
              key={index}
              className="bg-white rounded-lg p-6 text-center shadow-md hover:shadow-lg transition-shadow"
            >
              <metric.icon className={`h-12 w-12 mx-auto mb-4 ${metric.color}`} />
              <div className="text-3xl font-bold mb-2">{metric.value}</div>
              <div className="text-gray-600">{metric.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}