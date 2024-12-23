
import Overview from "../../components/GolfLocations/MoreDetailComponents/Overview";
import PhotoGallery from "../../components/GolfLocations/MoreDetailComponents/PhotoGallery";
import HeroSection from "../../components/HomeComponents/HeroSection/HeroSection";


export default function page() {
  return (
   <div className=" ">
    
     <HeroSection buttonsHidden="hidden" maxWidth="max-w-[818px]" headerText="Nuwara Eliya GC" normalText="“If ever there was an antique piece then this would be it. Very little has changed over the years including the clubhouse which is remarkably beautiful and intimate (and all that)......The golf is laid out on only 92 acres  / 37 ha so you can imagine how creative the layout is. This is adventure golf at its best and its enthralling. I could play this course everyday and still be entertained and have a blast”. - Paul Jansen Golf Course Architect" imageLocation="/home.png"/>
     <Overview  details={[
      { label: 'Name', value: 'Nuwara Eliya Golf Club (NEGC)', valueColor: 'text-customGold' },
      { label: 'Location', value: 'Nuwara Eliya , Sri Lanka', valueColor: 'text-customGold' },
      { label: 'Established', value: '1889', valueColor: 'text-customGold' },
      { label: 'Fairways', value: 'A mix of buffalo & Atawara', valueColor: 'text-customGold' },
      { label: 'Other', value: "Caddy's are available, Pro shop, Not busy on weekdays", valueColor: 'text-customGold' },
      { label: 'Pair', value: '71', valueColor: 'text-customGold' },
      { label: 'Slope rating', value: '68.7 / 129 White Tee (men)', valueColor: 'text-customGold' },
      { label: 'Greens', value: 'Gras Blues', valueColor: 'text-customGold' },
      { label: 'Description', value: 'Hillside, Parkland course, with lots of hills and valleys with mature trees', valueColor: 'text-customGold' },
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
