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
      <HeroSection maxWidth="max-w-5xl" headerText="Discover the Perfect Swing in Paradise" normalText="Explore Sri Lanka's breathtaking scenery and top golf courses  with PGTC" imageLocation="/home/homegolf.jpeg"/>
      <FeaturesSection/>
      <FeaturedLocations/>
      <LuxuryAdventure/>
      <WhereToNext/>
    
      
    </div>
  );
}  

