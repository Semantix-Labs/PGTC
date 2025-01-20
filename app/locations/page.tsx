
import GolfLocations from "../components/GolfLocations/GolfLocations";
import TopPlaces from "../components/GolfLocations/TopPlaces";
import HeroSection from "../components/HomeComponents/HeroSection/HeroSection";


export default function Page() {
  return (
   <div className=" ">
     <HeroSection buttonsHidden="hidden" maxWidth="max-w-6xl" headerText="Unforgettable Golf Journeys Through Sri Lanka’s Beauty" normalText="Embark on a unique tour of Sri Lanka, where you can explore the island’s rich culture and stunning landscapes while enjoying world-class golfing. Play on top-tier courses like the Royal Colombo Golf Club, Nuwara Eliya Golf Club, Victoria Golf & Country Resort and Shangri-la Golf & Country Club set in breathtaking locations. Our tours combine the thrill of golf with the beauty of Sri Lanka’s natural wonders, including scenic tea plantations, wildlife, and majestic mountains. Experience luxury accommodations, gourmet dining, and exceptional service as you journey through paradise with golf at the heart of your adventure." imageLocation="/loc.png"/>
     <GolfLocations/>
     <TopPlaces/>
   </div>
  );
}
