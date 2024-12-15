import Image from "next/image"
import { ArrowRight } from 'lucide-react'
import { Card, CardContent } from "../../ui/card";

const locations = [
  {
    id: 1,
    name: "Colombo",
    image: "/home.png",
    link: "/locations/colombo"
  },
  {
    id: 2,
    name: "Colombo",
    image: "/home.png",
    link: "/locations/colombo"
  },
  {
    id: 3,
    name: "Colombo",
    image: "/home.png",
    link: "/locations/colombo"
  },
  {
    id: 4,
    name: "Colombo",
    image: "/home.png",
    link: "/locations/colombo"
  }
]

export default function FeaturedLocations() {
  return (
    <section className="py-16 md:py-24 " style={{ backgroundColor: '#E6ECDE' }}>
      <div className="container mx-auto px-5 xl:px-auto">
        <h2 
          className="text-4xl md:text-[72px] font-semibold text-center mb-16 md:mb-20"
          style={{ color: '#2E5339' }}
        >
          Featured Golf Locations
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {locations.map((location) => (
            <a 
              key={location.id} 
              href={location.link}
              className="group block"
            >
              <Card 
                className="overflow-hidden h-[300px] xl:h-[381px] xl:w-[265px] mx-auto transition-all duration-300 hover:shadow-lg"
                style={{ 
                  borderColor: '#C7A041',
                  borderWidth: '2px',
                  borderRadius: '16px',
                  backgroundColor: 'white'
                }}
              >
                <CardContent className="p-0">
                  <div className="relative xl:w-[265px] h-[240px] w-full xl:h-[313px] aspect-[4/3]">
                    <Image
                      src={location.image}
                      alt={`Golf course in ${location.name}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-4 flex items-center justify-between">
                    <h3 
                      className="text-xl font-semibold"
                      style={{ color: '#2E5339' }}
                    >
                      {location.name}
                    </h3>
                    <div className="relative w-[23px] h-[23px] rounded-full bg-customGreen flex items-center justify-center ">
                    <ArrowRight 
                      className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 text-white"
                      
                    />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

