
import HeroSection from "../../components/HomeComponents/HeroSection/HeroSection";
import OverviewSection from "../../components/Packages/MoreInfoPackages/OverviewSection";
import PlacesToVisit from "../../components/Packages/MoreInfoPackages/PlacesToVisit";


export default function page() {
  return (
   <div className=" ">
    
     <HeroSection buttonsHidden="hidden" maxWidth="max-w-[818px]" headerText="Nuwara Eliya" normalText="Nuwara Eliya, often referred to as Little England,is a picturesque hill station in Sri Lanka. It is known for its cool climate, rolling green hills, and serene atmosphere. The town's colonial charm, vibrant flower gardens, and misty landscapes make it a refreshing escape for travelers seeking tranquility and natural beauty." imageLocation="/nuwaraHome.jpeg"/>
     <OverviewSection />
     <PlacesToVisit/>
     
   </div>
  );
}
