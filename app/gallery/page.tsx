
import Gallery from "../components/Gallery/Gallery";
import Inspirations from "../components/Gallery/Inspirations";
import HeroSection from "../components/HomeComponents/HeroSection/HeroSection";


export default function Home() {
  return (
   <div className=" ">
    
     <HeroSection buttonsHidden="hidden" maxWidth="max-w-[818px]" headerText="Captures of Moments" normalText="Immerse yourself in the beauty of Sri Lanka with our curated gallery. Explore stunning images of golfers in action, breathtaking scenic views, and luxurious accommodations. Watch our video clips for a glimpse into the unforgettable experiences awaiting you!" imageLocation="/g1.jpeg"/>
     <Gallery/>
     <Inspirations/>
   </div>
  );
}
