
import Gallery from "../components/Gallery/Gallery";
import Inspirations from "../components/Gallery/Inspirations";
import HeroSection from "../components/HomeComponents/HeroSection/HeroSection";


export default function Home() {
  return (
   <div className=" ">
    
     <HeroSection buttonsHidden="hidden" maxWidth="max-w-6xl" headerText="Nature’s Beauty Surrounding Sri Lanka’s Golf Courses" normalText="Step into a world of breathtaking beauty, featuring the stunning landscapes and serene settings surrounding Sri Lanka’s renowned golf clubs. From lush fairways nestled in rolling hills to tranquil waters and majestic backdrops, each scene captures the essence of natural elegance and golfing charm. Experience the unique allure of these extraordinary locations, where world-class golf courses blend seamlessly with the island’s vibrant scenery and timeless appeal." imageLocation="/g1.jpeg"/>
     <Gallery/>
     <Inspirations/>
   </div>
  );
}
