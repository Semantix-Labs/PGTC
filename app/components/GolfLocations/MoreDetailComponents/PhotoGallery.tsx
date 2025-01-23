import { Play } from 'lucide-react';
import Image from 'next/image'

interface PhotoGalleryPropes{
  photos: {
    id:number,
    src:string,
    alt:string,
    className:string,
    type?: 'video'
  }[];
}


export default function PhotoGallery(photos:PhotoGalleryPropes) {
  return (
    <section className="py-12 ">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl text-customGreen font-semibold text-center mb-12">
          Photo Gallery
        </h2>
        
        <div className=" mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {photos.photos.map((photo:{id:number,src:string,alt:string,className:string, type?: 'video'}) => (
              <div 
                key={photo.id}
                className={`relative rounded-xl overflow-hidden ${photo.className} ${photo.type === 'video' ? 'md:col-span-2 row-span-2' : ''}`}
              >
                <div className="aspect-square w-full h-full relative">
                  {photo.type === 'video' ? (
                    <div className='relative'>
                      <video
                        src={photo.src}
                        controls
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                       <div className="absolute inset-0 flex items-center justify-center">
                          <Play className="w-12 h-12 text-white" />
                        </div>
                    </div>
                  ) : (
                    <Image
                      src={photo.src}
                      alt={photo.alt}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}