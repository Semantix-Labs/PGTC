'use client'
// import { useState } from "react";
import FeaturedLocations from "./components/HomeComponents/FeaturedLocations";
import FeaturesSection from "./components/HomeComponents/FeaturesSection/FeaturesSection";
import HeroSection from "./components/HomeComponents/HeroSection/HeroSection";
import LuxuryAdventure from "./components/HomeComponents/LuxuryAdventure/LuxuryAdventure";
import WhereToNext from "./components/HomeComponents/WhereNext/WhereNext";
// import SVGComponent from "./components/SriLankaSvg/SvgComponent";


export default function Page() {
 

  return (
    <div className="">
      <HeroSection mobileMarginTop="pt-24 md:pt-auto" maxWidth="max-w-5xl" headerText="Tour the Wonders of Paradise with Golf" headerText2="Explore Sri Lanka's breathtaking scenery and top golf courses  with PGTC" normalText="Step into a world of breathtaking beauty, featuring the stunning landscapes and serene settings surrounding Sri Lanka’s renowned golf clubs. From lush fairways nestled in rolling hills to tranquil waters and majestic backdrops, each scene captures the essence of natural elegance and golfing charm. Experience challenging and uniquely designed International Standard Golf Courses, around unique attractions depicting the history, diversity, and taste of true paradise." imageLocation="/home/homegolf.jpeg"/>
      <FeaturesSection/>
      <FeaturedLocations/>
      <LuxuryAdventure/>
      <WhereToNext/>
    
      
    </div>
  );
}  

