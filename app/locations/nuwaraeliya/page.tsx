
import Overview from "../../components/GolfLocations/MoreDetailComponents/Overview";
import PhotoGallery from "../../components/GolfLocations/MoreDetailComponents/PhotoGallery";
import HeroSection from "../../components/HomeComponents/HeroSection/HeroSection";


export default function page() {
  return (
   <div className=" ">
    
     <HeroSection buttonsHidden="hidden" maxWidth="max-w-[818px]" headerText="Nuwara Eliya GC" normalText="“If ever there was an antique piece then this would be it. Very little has changed over the years including the clubhouse which is remarkably beautiful and intimate (and all that)......The golf is laid out on only 92 acres  / 37 ha so you can imagine how creative the layout is. This is adventure golf at its best and its enthralling. I could play this course everyday and still be entertained and have a blast”. - Paul Jansen Golf Course Architect" imageLocation="/home.png"/>
     <Overview />
     <PhotoGallery />
   
     
   </div>
  );
}
