import Image from "next/image"
import { Button } from "../../ui/button"
import Link from "next/link";

interface HeroSectionProps {
  headerText: string;
  normalText:string;
  imageLocation:string;
  maxWidth:string;
  buttonsHidden?:string;
}


export default function HeroSection({ headerText, normalText, imageLocation,maxWidth,buttonsHidden }: HeroSectionProps) {
  return (
    <div className="relative min-h-[600px] lg:max-h-[990px] ">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={imageLocation}
          alt="Golfer swinging on a beautiful golf course"
          fill
          className="object-cover brightness-95"
          priority
        />
      </div>
      
      {/* Content Overlay */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-[600px] lg:min-h-[990px] text-center px-4 bg-black/20">
        <h1 className="text-4xl md:text-6xl lg:text-[90px] font-bold text-white mb-4 max-w-7xl leading-tight">
         {headerText}
        </h1>
        
        <p className={`text-lg md:text-[24px] text-white mb-8 ${maxWidth}`}>
          {normalText}
        </p>
        
        <div className={`flex flex-col sm:flex-row gap-4 ${buttonsHidden}`}>
          <Link href="/packages" >
            <Button
              size="lg"
              className="bg-white text-customGreen rounded-[12px] hover:bg-white/90 text-lg px-8"
            >
              Explore Tours
            </Button>
          </Link>
          <Link href="/contact">
            <Button
              size="lg"
              variant="outline"
              className="border-white border-[3px] text-white rounded-[12px] hover:bg-white/20 text-lg px-8"
            >
              Contact Us
            </Button>
          </Link>
        </div>
        </div>
      </div>

  )
}

