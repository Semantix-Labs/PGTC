
import GolfLocations from "../components/GolfLocations/GolfLocations";
import TopPlaces from "../components/GolfLocations/TopPlaces";
import HeroSection from "../components/HomeComponents/HeroSection/HeroSection";


export default function Page() {
  return (
   <div className=" ">
     <HeroSection buttonsHidden="hidden" maxWidth="max-w-6xl" headerText="Unforgettable Golf Journeys Through Sri Lanka’s Paradise" normalText="Embark on a unique tour of Sri Lanka, where you can explore the island’s rich culture and stunning scenery while enjoying challenging golf. Play on diverse courses like the Royal Colombo Golf Club, Nuwara Eliya Golf Club, Victoria Golf Resort and Shangri-la Golf & Country Resort set in scenic locations. Our tours combine the thrill of golf with the beauty of natural wonders in paradise. Indulge in the flavors of  tea plantations, spice gardens, and signature curries. Immerse yourself in unique locations, wildlife,  and majestic mountains." imageLocation="/loc.png"/>
     <GolfLocations/>
     <TopPlaces/>
   </div>
  );
}
