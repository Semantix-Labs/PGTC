
import Gallery from "../components/Gallery/Gallery";
import Inspirations from "../components/Gallery/Inspirations";
import HeroSection from "../components/HomeComponents/HeroSection/HeroSection";


export default function Home() {
  return (
   <div className=" ">
    
     <HeroSection buttonsHidden="hidden" maxWidth="max-w-6xl" headerText="Nature’s Beauty Surrounding Sri Lanka’s Golf Courses" normalText="" imageLocation="/g1.jpeg"/>
     <Gallery/>
     <Inspirations/>
   </div>
  );
}
