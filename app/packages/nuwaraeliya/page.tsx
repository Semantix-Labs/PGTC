
import HeroSection from "../../components/HomeComponents/HeroSection/HeroSection";
// import OverviewSection from "../../components/Packages/MoreInfoPackages/OverviewSection";
import PlacesToVisit from "../../components/Packages/MoreInfoPackages/PlacesToVisit";


export default function page() {
  return (
    <div className=" ">

      <HeroSection buttonsHidden="hidden" maxWidth="max-w-[818px]" headerText="Nuwara Eliya" normalText="Nuwara Eliya, often referred to as Little England,is a picturesque hill station in Sri Lanka. It is known for its cool climate, rolling green hills, and serene atmosphere. The town's colonial charm, vibrant flower gardens, and misty landscapes make it a refreshing escape for travelers seeking tranquility and natural beauty." imageLocation="/nuwaraHome.jpeg" />
      {/* <OverviewSection activities={[
        {
          title: 'Visit Gregory Lake',
          description: 'Enjoy boating, jet skiing, or paddle boating while soaking in the serene beauty of this picturesque lake.'
        },
        {
          title: 'Cycling Around Gregory Lake',
          description: 'Rent a bike and cycle around the lake for a refreshing experience.'
        },
        {
          title: 'Tea Plantation Tours',
          description: 'Explore famous tea estates like Mackwoods, Pedro or Damro for guided tours and tea tastings.'
        },
        {
          title: 'Hike to Single Tree Hill',
          description: 'A relatively easy hike that offers stunning panoramic views of Nuwara Eliya.'
        },
        {
          title: 'Ambewela Farm Visit',
          description: 'Visit "Little New Zealand" to experience lush green pastures and see cattle grazing.'
        },
        {
          title: 'Explore Victoria Park',
          description: 'Stroll through this well-maintained park, perfect for families and couples.'
        },
        {
          title: 'Seetha Amman Temple',
          description: 'Visit this beautiful and historic Hindu temple with connections to the Ramayana.'
        },
        {
          title: 'Waterfall Rappelling',
          description: "For adventure seekers, try rappelling down waterfalls like St. Clair's or Devon Falls.iya."
        },
        {
          title: 'Explore Moon Plains',
          description: 'Take a safari jeep ride to this lesser-known plain for panoramic views of the mountains.'
        },
        {
          title: 'Camping at Horton Plains',
          description: 'Enjoy a night under the stars with scenic natural surroundings.'
        }
      ]}
        paragraph1={`Nuwara Eliya, established by British colonists in the 19th century, was developed as a retreat for Europeans seeking a cooler climate. Its colonial heritage is evident in its architecture, with old bungalows, churches, and a golf course that reflect its history as a British holiday destination. The region also became a hub for tea cultivation, contributing to its global recognition.`}
        paragraph2={`Renowned for its year-round cool climate, Nuwara Eliya offers a refreshing contrast to Sri Lanka's tropical heat. Temperatures typically range from 10°C to 20°C, with misty mornings and crisp evenings. The weather, combined with rolling hills and lush greenery, creates an idyllic setting for relaxation and exploration.`}
        paragraph3={`Traveling through Nuwara Eliya is a sensory delight, from scenic train rides and lush tea estates to tranquil landscapes and vibrant gardens. Its peaceful ambiance and natural beauty offer a rejuvenating escape for all types of travelers.`}
      /> */}
      <PlacesToVisit places={[
        {
          name: "Pattipola",
          image: "/packages/1.png",
          href: "/places/pattipola",
        },
        {
          name: "Seetha Amman Temple",
          image: "/packages/2.png",
          href: "/places/seetha-amman-temple",
        },
        {
          name: "Victoria Park",
          image: "/packages/3.png",
          href: "/places/victoria-park",
        },
        {
          name: "Horton Plains National Park",
          image: "/packages/4.png",
          href: "/places/horton-plains",
          className: "col-span-2 xl:max-h-[304px] xl:min-w-[826px]",
        },
        {
          name: "Ambewela Farm",
          image: "/packages/5.png",
          href: "/places/ambewela-farm",
        },
        {
          name: "st clair's fal",
          image: "/packages/6.png",
          href: "/places/st-clairs-fall",
        },
        {
          name: "Damro Tea State",
          image: "/packages/7.png",
          href: "/places/damro-tea-state",
        },
        {
          name: "Moon Plains",
          image: "/packages/8.png",
          href: "/places/moon-plains",
        },
      ]} />

    </div>
  );
}
