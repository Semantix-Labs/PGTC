import React, { useRef } from 'react';
import Slider from 'react-slick';
import Image from "next/image";
import { ArrowRight } from 'lucide-react';
import { Card, CardContent } from "../../ui/card";
import Link from 'next/link';

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

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
];

function NextArrow(props: { className?: string; style?: React.CSSProperties; onClick?: () => void }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className}   `}
      style={{ 
        ...style, 
        display: "block", 
        right: "-25px", 
        zIndex: 10 
      }}
      onClick={onClick}
    >
      {/* <ArrowRight className="w-6 h-6 text-[#2E5339] hover:text-opacity-80" /> */}
    </div>
  );
}

function PrevArrow(props: { className?: string; style?: React.CSSProperties; onClick?: () => void }) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow prev-arrow`}
      style={{ 
        ...style, 
        display: "block", 
        left: "-25px", 
        zIndex: 10 
      }}
      onClick={onClick}
    >
      
      {/* <ArrowLeft className="w-6 h-6 text-[#2E5339] -mt-5 hover:text-opacity-80" /> */}
    </div>
  );
}

export default function FeaturedLocationsCarousel() {
  const sliderRef = useRef<Slider>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <section 
      className="py-16 md:py-24 relative" 
      style={{ backgroundColor: '#E6ECDE' }}
    >
      <div className="container mx-auto px-5 xl:px-auto">
        <h2 
          className="text-4xl md:text-[72px] font-semibold text-center mb-16 md:mb-20"
          style={{ color: '#2E5339' }}
        >
          Featured Golf Locations
        </h2>
        
        <Slider ref={sliderRef} {...settings}>
          {locations.map((location) => (
            <div key={location.id} className="px-3">
              <Link 
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
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}