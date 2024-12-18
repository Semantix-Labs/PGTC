import TeamCarousel from "../components/AboutComponents/ TeamCarousel";
import CommitmentSection from "../components/AboutComponents/CommitmentSection";
import VideoSection from "../components/AboutComponents/VideoSection";
import HeroSection from "../components/HomeComponents/HeroSection/HeroSection";


export default function Page() {
  return (
   <div className=" ">
     <HeroSection buttonsHidden="hidden" maxWidth="max-w-[818px]" headerText="Tour of Paradise With Golf" normalText="Our mission is to to provide golfers with a unique experience through a “Tour of Paradise with Golf” At PGTC, we turn your dream golf vacations into cherished memories Combined with the finest accommodations, exquisite cuisine, and curated sightseeing excursions we shall ensure an unforgettable experience for our clients! " imageLocation="/home.png"/>
     <CommitmentSection/>
     <TeamCarousel/>
     <VideoSection/>
   </div>
  );
}
