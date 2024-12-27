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
      <HeroSection maxWidth="max-w-2xl" headerText="Discover the Perfect Swing in Paradise" normalText="Explore Sri Lanka's breathtaking scenery and top golf courses and with PGTC" imageLocation="/home.png"/>
      <FeaturesSection/>
      <FeaturedLocations/>
      <LuxuryAdventure/>
      <WhereToNext/>
      {/* <FeaturedLocations/> */}
      {/* <div className="">
        <SVGComponent />
       
      </div> */}
      
    </div>
  );
}

