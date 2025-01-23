
import Overview from "../../components/GolfLocations/MoreDetailComponents/Overview";
import PhotoGallery from "../../components/GolfLocations/MoreDetailComponents/PhotoGallery";
import HeroSection from "../../components/HomeComponents/HeroSection/HeroSection";


export default function page() {
  return (
   <div className=" ">
    
     <HeroSection buttonsHidden="hidden" maxWidth="max-w-[818px]" headerText="Nuwara Eliya Golf Club" normalText="Nuwara Eliya is a city in the hill country of the Central Province, Sri Lanka. Its name means 'city on the plain (table land)' or 'city of light'. The city is the administrative capital of Nuwara Eliya District, with a picturesque landscape and temperate climate. It is at an altitude of 1,868 m (6,128 ft) and is considered to be the most important location for tea production in Sri Lanka. The city is overlooked by Pidurutalagala, the tallest mountain in Sri Lanka. " headerText2="Nuwara Eliya is known for its temperate, cool climate – the coolest area in Sri Lanka. The Nuwara Eliya golf course was constructed in 1889 by a Scottish soldier of the Gordon Highlanders for the British servicemen and officials who were posted at Nuwara Eliya.  The course opened in 1890 with nine holes and was upgraded and expanded to eighteen holes in 1893. In 1892 a golf pavilion, consisting of five rooms was constructed, overlooking the links" imageLocation="/nuwarahome.jpeg"/>
     <Overview  details={[
      { label: 'Name', value: 'Nuwara Eliya Golf Club (NEGC)', valueColor: 'text-customGold' },
      { label: 'Location', value: 'Nuwara Eliya , Sri Lanka', valueColor: 'text-customGold' },
      { label: 'Established', value: '1889', valueColor: 'text-customGold' },
      { label: 'Fairways', value: 'A mix of buffalo & Atawara', valueColor: 'text-customGold' },
      { label: 'Other', value: "Caddy's are available, Pro shop", valueColor: 'text-customGold' },
      { label: 'Par', value: '71', valueColor: 'text-customGold' },
      { label: 'Slope rating', value: '68.7 / 129 White Tee (men)', valueColor: 'text-customGold' },
      { label: 'Greens', value: 'Gras Blues', valueColor: 'text-customGold' },
      { label: 'Description', value: 'Hillside, Parkland course, with lots of hills and valleys with mature trees', valueColor: 'text-customGold' },
    ]}/>
     <PhotoGallery photos={[
  {
    id: 1,
    src: '/videos/Nuwaraeliya.mp4',
    alt: 'Golfer taking a swing',
    className: 'col-span-2 row-span-2',
    type: 'video'
  },
  {
    id: 2,
    src: '/home/nuwa1/2.png',
    alt: 'Group of golfers on course',
    className: 'col-span-1 row-span-1'
  },
  {
    id: 3,
    src: '/home/nuwa1/3.png',
    alt: 'Golf course fairway view',
    className: 'col-span-1 row-span-1'
  },
  {
    id: 4,
    src: '/home/nuwa1/4.png',
    alt: 'Golfers on green course',
    className: 'col-span-1 row-span-1'
  },
  {
    id: 5,
    src: '/home/nuwa1/5.jpeg',
    alt: 'Golfer near clubhouse',
    className: 'col-span-1 row-span-1'
  },
  {
    id: 6,
    src: '/home/nuwa1/6.png',
    alt: 'Golfer near clubhouse',
    className: 'col-span-1 row-span-1'
  },
  {
    id:7 ,
    src: '/home/nuwa1/7.png',
    alt: 'Golfer near clubhouse',
    className: 'col-span-1 row-span-1'
  },
  {
    id: 8,
    src: '/home/nuwa1/8.png',
    alt: 'Golfer near clubhouse',
    className: 'col-span-1 row-span-1'
  },
  {
    id:9 ,
    src: '/home/nuwa1/9.png',
    alt: 'Golfer near clubhouse',
    className: 'col-span-1 row-span-1'
  },
]}  />
   
     
   </div>
  );
}
