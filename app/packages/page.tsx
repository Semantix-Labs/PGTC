
import HeroSection from "../components/HomeComponents/HeroSection/HeroSection";
import SVGComponent from "../components/Packages/SvgComponent";


export default function Home() {
  return (
   <div className=" ">
    
     <HeroSection buttonsHidden="hidden" maxWidth="max-w-6xl" headerText="Tailored Journeys Just for You" normalText="" imageLocation="/pak.png"/>
     <SVGComponent />
   </div>
  );
}
