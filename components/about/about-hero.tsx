import Image from "next/image"

export function AboutHero() {
  return (
    <section className="relative h-[400px] flex items-center">
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&auto=format&fit=crop&q=60"
          alt="About Us"
          fill
          className="object-cover brightness-50"
        />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 text-white text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Our Story
        </h1>
        <p className="text-xl max-w-2xl mx-auto">
          Building stronger communities through meaningful connections and shared experiences
        </p>
      </div>
    </section>
  )
}