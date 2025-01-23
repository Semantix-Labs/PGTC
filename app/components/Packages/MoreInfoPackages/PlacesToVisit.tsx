import Image from "next/image"


interface Place {
  name: string
  image: string
  href: string
  className?: string
}

interface PlacesToVisitPropes{
  places:Place[];
}



export default function PlacesToVisit(places:PlacesToVisitPropes) {
  return (
    <div className="container mx-auto px-4 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-12 text-[#2F5233]">
      Places to Visit
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {places.places.map((place:Place) => (
          <div
            key={place.name}
            className={`relative group overflow-hidden rounded-lg ${place.className || ""}`}
          >
            <div className="relative group col-span-1 row-span-1 h-[300px] overflow-hidden rounded-lg transition-transform duration-300 hover:scale-[1.02]">
              <Image
                src={place.image}
                alt={place.name}
                layout="fill"
                className="object-cover w-full min-h-full  transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent " />
              <h2 className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 right-1/2 w-full text-center text-white text-2xl md:text-3xl xl:text-[40px] 2xl:text-[48px]  font-bold">
                {place.name}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

