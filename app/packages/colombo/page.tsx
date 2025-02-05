
import HeroSection from "../../components/HomeComponents/HeroSection/HeroSection";
import OverviewSection from "../../components/Packages/MoreInfoPackages/OverviewSection";
import PlacesToVisit from "../../components/Packages/MoreInfoPackages/PlacesToVisit";


export default function page() {
  return (
    <div className=" ">

      <HeroSection buttonsHidden="hidden" maxWidth="max-w-[818px]" headerText="COLOMBO" normalText="Colombo, the bustling capital of Sri Lanka, is a vibrant metropolis combining modern life with historical charm. Known for its tropical climate, lively streets, and dynamic atmosphere, the city offers a unique blend of cultures, architecture, and cuisines. Colombo's landmarks, markets, and coastal vistas make it a captivating destination for travelers seeking energy and heritage." imageLocation="/packages/colombo/head.jpeg" />
      <OverviewSection activities={[
        {
          title: 'Visit Galle Face Green',
          description: 'Relax by the ocean at Colombo’s most famous open space, ideal for a stroll or enjoying street food.'
        },
        {
          title: 'Explore the National Museum ',
          description: 'Discover Sri Lanka’s rich history and culture through impressive artifacts and exhibits at the country’s largest museum.'
        },
        {
          title: 'Tour Gangaramaya Temple',
          description: 'Visit this beautiful Buddhist temple known for its mix of modern architecture and traditional design.'
        },
        {
          title: 'Walk Through Colombo Fort ',
          description: 'Explore the historic area of Colombo Fort, home to colonial buildings, markets, and the iconic Clock Tower.'
        },
        {
          title: 'Visit Viharamahadevi Park ',
          description: 'Park Relax or have a picnic in Colombo’s largest park, surrounded by lush greenery and a large pond.'
        },
        {
          title: 'Tour the Colombo Dutch Museum ',
          description: 'Learn about the Dutch colonial influence in Sri Lanka through displays of antiques and historical artifacts.'
        },
        {
          title: 'Visit Mount Lavinia Beach ',
          description: 'Enjoy a day at this beautiful beach located just outside Colombo, perfect for sunbathing and swimming.'
        },
        {
          title: 'Explore Colombo’s Street Food Scene ',
          description: "Taste a variety of Sri Lankan street food delicacies, such as kottu, hoppers, and fresh coconut water."
        },
        {
          title: 'Visit the Lotus Tower ',
          description: 'Take a trip to the iconic Lotus Tower, South Asia’s tallest self-supporting structure. Enjoy panoramic views of Colombo.'
        },
        {
          title: 'Take a Tuk-Tuk Ride ',
          description: 'Experience the bustling streets of Colombo in an authentic Sri Lankan tuk-tuk, a fun and colorful way to see the city.'
        }
      ]}
        paragraph1={`Colombo, established as a major port by colonial powers, developed into a bustling urban center and the commercial capital of Sri Lanka. Its colonial heritage is reflected in its architecture, with grand old buildings, historic churches, and a sprawling fort area that highlight its history as a hub of trade and governance. The city also became a melting pot of cultures, contributing to its dynamic character.`}
        paragraph2={`Renowned for its vibrant cosmopolitan vibe, Colombo offers a dynamic contrast to Sri Lanka's more tranquil regions. Temperatures typically range from 26°C to 31°C, with warm, sunny days and occasional tropical rains. The city’s bustling streets, modern skyscrapers, and coastal views create a dynamic setting for both business and leisure.`}
        paragraph3={`Traveling through Colombo is a cultural delight, from exploring bustling markets and historic landmarks to savoring diverse cuisine and vibrant nightlife. Its energetic ambiance and cultural richness offer an exciting urban experience for all types of travelers.`}
      />
      <PlacesToVisit places={[
        {
          name: "GangaramaTemple",
          image: "/packages/colombo/1.png",
          href: "GangaramaTemple",
        },
        {
          name: "Viharamaha Devi Park",
          image: "/packages/colombo/2.png",
          href: "Viharamaha Devi Park",
        },
        {
          name: "Galle Face",
          image: "/packages/colombo/3.png",
          href: "Gall Face",
        },
        {
          name: "Beddegana Wetland Park",
          image: "/packages/colombo/4.png",
          href: "Beddegana Wetland Park",
          className: "col-span-2 xl:max-h-[304px] xl:min-w-[826px]",
        },
        {
          name: "Dehiwala Zoo",
          image: "/packages/colombo/5.png",
          href: "Dehiwala Zoo",
        },
        {
          name: "Red Mosque",
          image: "/packages/colombo/6.png",
          href: "Red Mosque",
        },
        {
          name: "Floating Market",
          image: "/packages/colombo/7.png",
          href: "Floating Market",
        },
        {
          name: "Lotus Tower",
          image: "/packages/colombo/8.png",
          href: "Lotus Tower",
        },
      ]} />

    </div>
  );
}
