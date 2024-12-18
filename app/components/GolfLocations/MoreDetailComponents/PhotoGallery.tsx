import Image from 'next/image'

const photos = [
  {
    id: 1,
    src: '/home/gallery/moreInfo/1.png',
    alt: 'Golfer taking a swing',
    className: 'col-span-2 row-span-2'
  },
  {
    id: 2,
    src: '/home/gallery/moreInfo/2.png',
    alt: 'Group of golfers on course',
    className: 'col-span-1 row-span-1'
  },
  {
    id: 3,
    src: '/home/gallery/moreInfo/3.jpeg',
    alt: 'Golf course fairway view',
    className: 'col-span-1 row-span-1'
  },
  {
    id: 4,
    src: '/home/gallery/moreInfo/4.png',
    alt: 'Golfers on green course',
    className: 'col-span-1 row-span-1'
  },
  {
    id: 5,
    src: '/home/gallery/moreInfo/5.png',
    alt: 'Golfer near clubhouse',
    className: 'col-span-1 row-span-1'
  }
]

export default function PhotoGallery() {
  return (
    <section className="py-12 ">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl text-customGreen font-semibold text-center mb-12">
          Photo Gallery
        </h2>
        
        <div className=" mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {photos.map((photo) => (
              <div 
                key={photo.id}
                className={`relative rounded-xl overflow-hidden ${photo.className}`}
              >
                <div className="aspect-square w-full h-full relative">
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

