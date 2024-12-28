import Image from "next/image"

export default function WhereToNext() {
  const destinations = [
    {
      id: 1,
      image: "/home/gallery/1.png",
      alt: "Beach wildlife experience with sea turtle",
    },
    {
      id: 2,
      image: "/home/gallery/23.png",
      alt: "Golf course experience",
    },
    {
      id: 3,
      image: "/home/gallery/3.png",
      alt: "Luxury beach resort relaxation",
    },
    {
      id: 4,
      image: "/home/gallery/4.jpeg",
      alt: "Wildlife safari with elephants",
    },
    {
      id: 5,
      image: "/home/gallery/5.png",
      alt: "Mountain resort in the mist",
    },
    {
      id: 6,
      image: "/home/gallery/6.png",
      alt: "Scenic waterfall destination",
    },
    {
      id: 7,
      image: "/home/gallery/7.png",
      alt: "Water sports adventure",
    },
    {
      id: 8,
      image: "/home/gallery/8.jpeg",
      alt: "Historic temple architecture",
    },
  ]

  return (
    <section className="container mx-auto px-4 py-16">
      <h2 className="text-4xl md:text-5xl lg:text-[72px] font-semibold text-customGreen text-center mb-12">
        Where to Next
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {destinations.map((destination) => (
          <div
            key={destination.id}
            className="relative aspect-square overflow-hidden rounded-2xl cursor-pointer group"
          >
            <Image
              src={destination.image}
              alt={destination.alt}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-110"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
            />
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </section>
  )
}

