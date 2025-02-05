
import Overview from "../../components/GolfLocations/MoreDetailComponents/Overview";
import PhotoGallery from "../../components/GolfLocations/MoreDetailComponents/PhotoGallery";
import HeroSection from "../../components/HomeComponents/HeroSection/HeroSection";


export default function page() {
  return (
   <div className=" ">
    
     <HeroSection buttonsHidden="hidden" maxWidth="max-w-[818px]" headerText="Shangri-La Golf & Country Resort" normalText="Sea, sand, sun, and golf come together at this unique Rodney Wright designed resort. Built on a former sapphire mine, the course features championship tees stretching 6,107 yards. Edible roughs with 15,000 pineapples and coconut trees add charm, while the lush environment serves as a haven for birds and wildlife. This setting combines natural beauty with a creative layout, offering an unforgettable golfing experience." imageLocation="/home/hambhome.jpeg"/>
     <Overview  details={[
      { label: 'Name', value: 'Shangri-La Golf & Country Club', valueColor: 'text-customGold' },
      { label: 'Location', value: 'Hamabntota , Sri Lanka', valueColor: 'text-customGold' },
      { label: 'Established', value: '2016', valueColor: 'text-customGold' },
      { label: 'Fairways', value: 'Seashore Paspalum ', valueColor: 'text-customGold' },
      { label: 'Other', value: "Caddy’s & Buggies are available, Pro shop", valueColor: 'text-customGold' },
      { label: 'Par', value: '70', valueColor: 'text-customGold' },
      { label: 'Slope rating', value: '68.9 / 127 Blue Tees', valueColor: 'text-customGold' },
      { label: 'Greens', value: 'TIFDWARF', valueColor: 'text-customGold' },
      { label: 'Website Link', value: 'Shangri-La Golf & Country Resort', valueColor: 'text-customGold',webLink:'https://www.shangri-la.com/hambantota/shangrila/golf/' },
      { label: 'Description', value: 'Sea side resort course, From a disused sapphire mine', valueColor: 'text-customGold' },
    ]}/>
     <PhotoGallery photos={[
  {
    id: 1,
    src: '/videos/shangri-la.mp4',
    alt: 'Golfer taking a swing',
    className: 'col-span-2 row-span-2',
    type:'video'
  },
  {
    id: 2,
    src: '/home/hambantota/2.png',
    alt: 'Group of golfers on course',
    className: 'col-span-1 row-span-1'
  },
  {
    id: 3,
    src: '/home/hambantota/3.png',
    alt: 'Golf course fairway view',
    className: 'col-span-1 row-span-1'
  },
  {
    id: 4,
    src: '/home/hambantota/4.png',
    alt: 'Golfers on green course',
    className: 'col-span-1 row-span-1'
  },
  {
    id: 5,
    src: '/home/hambantota/5.png',
    alt: 'Golfer near clubhouse',
    className: 'col-span-1 row-span-1'
  },
  {
    id: 6,
    src: '/home/hambantota/6.png',
    alt: 'Golfer near clubhouse',
    className: 'col-span-1 row-span-1'
  },
  {
    id: 7,
    src: '/home/hambantota/7.png',
    alt: 'Golfer near clubhouse',
    className: 'col-span-1 row-span-1'
  },
  {
    id: 8,
    src: '/home/hambantota/8.png',
    alt: 'Golfer near clubhouse',
    className: 'col-span-1 row-span-1'
  },
  {
    id: 9,
    src: '/home/hambantota/9.png',
    alt: 'Golfer near clubhouse',
    className: 'col-span-1 row-span-1'
  },
]}  />
   
     
   </div>
  );
}
