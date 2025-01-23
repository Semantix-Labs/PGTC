
import Overview from "../../components/GolfLocations/MoreDetailComponents/Overview";
import PhotoGallery from "../../components/GolfLocations/MoreDetailComponents/PhotoGallery";
import HeroSection from "../../components/HomeComponents/HeroSection/HeroSection";


export default function page() {
  return (
   <div className=" ">
    
     <HeroSection buttonsHidden="hidden" maxWidth="max-w-[818px]" headerText="Royal Colombo GC" normalText="This golf haven, nestled in the heart of the city, offers a unique experience with its rich history, reflected in the old clubhouse walls. As the second-oldest Royal Golf Club outside the UK, it features a course bisected by an active rail line. Despite its urban surroundings, the course thrives with vibrant nature. Birds flock to the links, and wildlife roams freely, creating a perfect blend of city and nature." imageLocation="/colombo_loc.png"/>
     <Overview  details={[
      { label: 'Name', value: 'Royal Colombo Golf Club (RCGC)', valueColor: 'text-customGold' },
      { label: 'Location', value: 'Colombo , Sri Lanka', valueColor: 'text-customGold' },
      { label: 'Established', value: '1879', valueColor: 'text-customGold' },
      { label: 'Fairways', value: 'Native cow grass', valueColor: 'text-customGold' },
      { label: 'Other', value: "Caddies are available, Pro shop", valueColor: 'text-customGold' },
      { label: 'Par', value: '71', valueColor: 'text-customGold' },
      { label: 'Slope rating', value: '71.3/127', valueColor: 'text-customGold' },
      { label: 'Greens', value: 'TIFEAGLE', valueColor: 'text-customGold' },
      { label: 'Description', value: 'City parkland course, Second oldest Royal golf club outside the UK', valueColor: 'text-customGold' },
    ]}/>
     <PhotoGallery photos={[
  {
    id: 1,
    src: '/videos/colombo.mp4',
    alt: 'Golfer taking a swing',
    className: 'col-span-2 row-span-2',
   
  },
  {
    id: 2,
    src: '/home/gallery/moreInfo/22.png',
    alt: 'Group of golfers on course',
    className: 'col-span-1 row-span-1'
  },
  {
    id: 3,
    src: '/home/gallery/moreInfo/3.png',
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
  },
  {
    id: 6,
    src: '/home/gallery/moreInfo/6.png',
    alt: 'Golfer near clubhouse',
    className: 'col-span-1 row-span-1'
  },
  {
    id: 7,
    src: '/home/gallery/moreInfo/7.png',
    alt: 'Golfer near clubhouse',
    className: 'col-span-1 row-span-1'
  },
  {
    id: 8,
    src: '/home/gallery/moreInfo/8.png',
    alt: 'Golfer near clubhouse',
    className: 'col-span-1 row-span-1'
  },
  {
    id: 9,
    src: '/home/gallery/moreInfo/9.png',
    alt: 'Golfer near clubhouse',
    className: 'col-span-1 row-span-1'
  },
]}  />
   
     
   </div>
  );
}
