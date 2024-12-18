import Image from "next/image"
import Link from "next/link"

interface Place {
  name: string
  image: string
  href: string
  className?: string
}

const places: Place[] = [
  {
    name: "Pattipola",
    image: "/packages/1.png",
    href: "/places/pattipola",
  },
  {
    name: "Seetha Amman Temple",
    image: "/packages/2.png",
    href: "/places/seetha-amman-temple",
  },
  {
    name: "Victoria Park",
    image: "/packages/3.png",
    href: "/places/victoria-park",
  },
  {
    name: "Horton Plains National Park",
    image: "/packages/4.png",
    href: "/places/horton-plains",
    className: "col-span-2 xl:max-h-[304px] xl:min-w-[826px]",
  },
  {
    name: "Ambewela Farm",
    image: "/packages/5.png",
    href: "/places/ambewela-farm",
  },
  {
    name: "st clair's fal",
    image: "/packages/6.png",
    href: "/places/st-clairs-fall",
  },
  {
    name: "Damro Tea State",
    image: "/packages/7.png",
    href: "/places/damro-tea-state",
  },
  {
    name: "Moon Plains",
    image: "/packages/8.png",
    href: "/places/moon-plains",
  },
]

export default function PlacesToVisit() {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#2F5233]">
        Place to Visit
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {places.map((place) => (
          <Link
            key={place.name}
            href={place.href}
            className={`relative group overflow-hidden rounded-lg ${place.className || ""}`}
          >
            <div className="relative group col-span-1 row-span-1 h-[300px] overflow-hidden rounded-lg transition-transform duration-300 hover:scale-[1.02]">
              <Image
                src={place.image}
                alt={place.name}
                layout="fill"
                className="object-cover w-full min-h-full  transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <h2 className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 right-1/2 w-full text-center text-white text-2xl md:text-3xl font-bold">
                {place.name}
              </h2>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

