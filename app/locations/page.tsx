
import GolfLocations from "../components/GolfLocations/GolfLocations";
import TopPlaces from "../components/GolfLocations/TopPlaces";
import HeroSection from "../components/HomeComponents/HeroSection/HeroSection";


export default function Page() {
  return (
   <div className=" ">
     <HeroSection buttonsHidden="hidden" maxWidth="max-w-[818px]" headerText="Golfing with a Scenic Touch" normalText="Sri Lanka offers a unique blend of golf culture and stunning locations. Golf enthusiasts can enjoy world-class courses like Nuwara Eliya Golf Club, set amidst scenic landscapes, and explore picturesque resorts. Traditional golfing with views of tea plantations, wildlife, and mountains makes it ideal for relaxation and adventure!" imageLocation="/loc.png"/>
     <GolfLocations/>
     <TopPlaces/>
   </div>
  );
}
