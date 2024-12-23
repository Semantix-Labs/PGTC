
import Overview from "../../components/GolfLocations/MoreDetailComponents/Overview";
import PhotoGallery from "../../components/GolfLocations/MoreDetailComponents/PhotoGallery";
import HeroSection from "../../components/HomeComponents/HeroSection/HeroSection";


export default function page() {
  return (
   <div className=" ">
    
     <HeroSection buttonsHidden="hidden" maxWidth="max-w-[818px]" headerText="" normalText="This golf haven, nestled in the heart of the city, offers a unique experience with its rich history, reflected in the old clubhouse walls. As the second-oldest Royal Golf Club outside the UK, it features a course bisected by an active rail line. Despite its urban surroundings, the course thrives with vibrant nature. Birds flock to the links, and wildlife roams freely, creating a perfect blend of city and nature." imageLocation="/home.png"/>
     <Overview  details={[
      { label: 'Name', value: 'Shangri La’s Hambantota Golf & Spa', valueColor: 'text-customGold' },
      { label: 'Location', value: 'Hamabntota , Sri Lanka ', valueColor: 'text-customGold' },
      { label: 'Established', value: '2016', valueColor: 'text-customGold' },
      { label: 'Fairways', value: 'Seashore Paspalum', valueColor: 'text-customGold' },
      { label: 'Other', value: "Caddys are available, Pro shop, Not busy on weekdays", valueColor: 'text-customGold' },
      { label: 'Pair', value: '70', valueColor: 'text-customGold' },
      { label: 'Slope rating', value: '68.9 / 127 Blue Tees', valueColor: 'text-customGold' },
      { label: 'Greens', value: 'Paspalum Do', valueColor: 'text-customGold' },
      { label: 'Description', value: 'Sea side resort course, From a disused sapphire mine', valueColor: 'text-customGold' },
    ]}/>
     <PhotoGallery photos={[
  {
    id: 1,
    src: '/home/gallery/moreInfo/1.png',
    alt: 'Golfer taking a swing',
    className: 'col-span-2 row-span-2'
  },
  {
    id: 2,
    src: '/home/gallery/moreInfo/2.png',
    alt: 'Group of golfers on course',
    className: 'col-span-1 row-span-1'
  },
  {
    id: 3,
    src: '/home/gallery/moreInfo/3.jpeg',
    alt: 'Golf course fairway view',
    className: 'col-span-1 row-span-1'
  },
  {
    id: 4,
    src: '/home/gallery/moreInfo/4.png',
    alt: 'Golfers on green course',
    className: 'col-span-1 row-span-1'
  },
  {
    id: 5,
    src: '/home/gallery/moreInfo/5.png',
    alt: 'Golfer near clubhouse',
    className: 'col-span-1 row-span-1'
  }
]}  />
   
     
   </div>
  );
}
