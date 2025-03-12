// import TeamCarousel from "../components/AboutComponents/ TeamCarousel";
import CommitmentSection from "../components/AboutComponents/CommitmentSection";
import TeamMembersPage from "../components/AboutComponents/TeamMembersPage";
import VideoSection from "../components/AboutComponents/VideoSection";
import HeroSection from "../components/HomeComponents/HeroSection/HeroSection";


export default function Page() {
  return (
   <div className=" ">
     <HeroSection buttonsHidden="hidden" maxWidth="max-w-6xl" headerText="A Tour of Paradise with Golf" normalText="Our mission is to provide golfers with a unique experience through a “Tour of Paradise with Golf”. At PGTC, we turn your dream golf vacations into cherished memories. Combined with the finest accommodations, exquisite cuisine, and curated sightseeing excursions we shall ensure an unforgettable experience for our clients!" imageLocation="/about_home.jpeg"/>
     <CommitmentSection/>
     {/* <TeamCarousel/> */}
     <TeamMembersPage/>
     <VideoSection/>
   </div>
  );
}
