import Image from "next/image"
import { Button } from "../../ui/button"
import Link from "next/link";

interface HeroSectionProps {
  headerText: string;
  headerText2?: string;
  normalText:string;
  imageLocation:string;
  maxWidth:string;
  buttonsHidden?:string;
  mobileMarginTop?:string
}


export default function HeroSection({ headerText, normalText, imageLocation,maxWidth,buttonsHidden ,headerText2,mobileMarginTop}: HeroSectionProps) {
  return (
    <div className="relative min-h-[600px] lg:max-h-[990px] ">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={imageLocation}
          alt="Golfer swinging on a beautiful golf course"
          fill
          className="object-cover brightness-75"
          priority
        />
      </div>
      
      {/* Content Overlay */}
      <div className={`relative z-10 flex flex-col items-center justify-center min-h-[600px] lg:min-h-[990px] text-center px-4 bg-black/20 ${mobileMarginTop ? mobileMarginTop :'pt-24 md:pt-0'}`}>
        <h1 className="text-4xl md:text-6xl lg:text-[90px] font-bold text-white mb-4 max-w-7xl leading-tight ">
         {headerText}
        </h1>
        
        <p className={`text-lg md:text-[24px] text-white text-justify mb-8 ${maxWidth}`}>
          {normalText}
        </p>
        <p className={`text-lg md:text-[24px] text-justify text-white mb-8 ${maxWidth}`}>
          {headerText2}
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

