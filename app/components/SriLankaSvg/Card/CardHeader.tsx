import Image from 'next/image';
import React from 'react';

interface CardHeaderProps {
  title: string;
  description: string;
  imageLocation:string
}

const CardHeader: React.FC<CardHeaderProps> = ({ title, description,imageLocation }) => {
  return (
    <div className="">
      <div className="relative">
        <Image
         width={200}
         height={200} 
          src={imageLocation}
          alt="Nuwara Eliya Golf Course"
          className="w-full h-48 object-cover rounded-lg"
        />
        <h2 className="absolute bottom-4 left-4 text-3xl font-bold text-white drop-shadow-lg">
          {title}
        </h2>
      </div>
      <p className="text-gray-600 text-sm leading-relaxed">
        {description}
      </p>
    </div>
  );
};

export default CardHeader;