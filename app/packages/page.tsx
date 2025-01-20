
import HeroSection from "../components/HomeComponents/HeroSection/HeroSection";
import SVGComponent from "../components/Packages/SvgComponent";


export default function Home() {
  return (
   <div className=" ">
    
     <HeroSection buttonsHidden="hidden" maxWidth="max-w-6xl" headerText="Tailored Journeys Just for You" normalText="Explore our exclusive packages that seamlessly blend the excitement of golf with the breathtaking beauty of Sri Lanka. Play at world-class courses while immersing yourself in iconic experiences, from visiting lush tea estates to embarking on thrilling wildlife safaris. Each package is designed to offer unparalleled luxury and unforgettable memories. Begin your extraordinary journey today!" imageLocation="/pak.png"/>
     <SVGComponent />
   </div>
  );
}
