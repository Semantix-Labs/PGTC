
import HeroSection from "../components/HomeComponents/HeroSection/HeroSection";
import SVGComponent from "../components/Packages/SvgComponent";


export default function Home() {
  return (
   <div className=" ">
    
     <HeroSection buttonsHidden="hidden" maxWidth="max-w-[818px]" headerText="Journeys Crafted for You" normalText="Discover our exclusive packages blending the thrill of golf with Sri Lanka`s scenic beauty. Each package combines golfing at top locations, exploring iconic destinations like tea estates and wildlife safaris, and indulging in luxury. Start your unforgettable journey today!" imageLocation="/home.png"/>
     <SVGComponent />
   </div>
  );
}
