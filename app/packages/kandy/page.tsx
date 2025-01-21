
import HeroSection from "../../components/HomeComponents/HeroSection/HeroSection";
import OverviewSection from "../../components/Packages/MoreInfoPackages/OverviewSection";
import PlacesToVisit from "../../components/Packages/MoreInfoPackages/PlacesToVisit";


export default function page() {
  return (
    <div className=" ">

      <HeroSection buttonsHidden="hidden" maxWidth="max-w-[818px]" headerText="KANDY" normalText="Kandy, often referred to as the Cultural Capital of Sri Lanka, is a picturesque hill city nestled amidst lush greenery and misty mountains. It is known for its cool climate, historical significance, and serene atmosphere. The city's rich cultural heritage, vibrant gardens, and tranquil landscapes make it a captivating destination for travelers seeking history, and natural beauty." imageLocation="/packages/kandy/head.jpeg" />
      <OverviewSection activities={[
        {
          title: 'Visit Gregory Lake',
          description: 'Enjoy boating, jet skiing, or paddle boating while soaking in the serene beauty of this picturesque lake.'
        },
        {
            title: 'Cycling Around Gregory Lake',
            description: 'Rent a bike and cycle around the lake for a refreshing experience.'
          },
        {
          title: 'Hike to Knuckles Mountain Range ',
          description: 'Embark on a hike in the Knuckles Range for breathtaking views, diverse flora, and refreshing mountain air.'
        },
        {
          title: 'Explore the Royal Botanical Gardens  ',
          description: 'Wander through these beautifully maintained gardens, perfect for nature lovers and families.'
        },
        {
          title: 'Temple of the Sacred Tooth Relic  ',
          description: 'Pay homage at this sacred Buddhist temple, a UNESCO World Heritage site.'
        },
        {
          title: 'Discover the Gadaladeniya Temple  ',
          description: 'Explore this ancient temple known for its beautiful architecture and historical significance.'
        },
        {
          title: 'Visit Ceylon Tea Museum ',
          description: 'Learn about the history of tea production in Sri Lanka through exhibits and artifacts.'
        },
        {
          title: 'Explore Hanthana Mountain Range',
          description: " Go on a jeep ride or trek in the Hanthana hills for panoramic views of Kandy natural beauty."
        },
        {
          title: 'Go on a Spice Garden Tour ',
          description: 'Visit nearby spice gardens to learn about Sri Lanka’s famous spices and their uses.'
        },
        {
          title: 'Visit Udawatta Kele Sanctuary  ',
          description: 'Explore this urban forest reserve to enjoy lush greenery, birdwatching, and peaceful walking trails.'
        }
      ]}
        paragraph1={`Colombo, established as a major port by colonial powers, developed into a bustling urban center and the commercial capital of Sri Lanka. Its colonial heritage is reflected in its architecture, with grand old buildings, historic churches, and a sprawling fort area that highlight its history as a hub of trade and governance. The city also became a melting pot of cultures, contributing to its dynamic character.`}
        paragraph2={`Renowned for its vibrant cosmopolitan vibe, Colombo offers a dynamic contrast to Sri Lanka's more tranquil regions. Temperatures typically range from 26°C to 31°C, with warm, sunny days and occasional tropical rains. The city’s bustling streets, modern skyscrapers, and coastal views create a dynamic setting for both business and leisure.`}
        paragraph3={`Traveling through Colombo is a cultural delight, from exploring bustling markets and historic landmarks to savoring diverse cuisine and vibrant nightlife. Its energetic ambiance and cultural richness offer an exciting urban experience for all types of travelers.`}
      />
      <PlacesToVisit places={[
        {
          name: "Kandy Lake",
          image: "/packages/kandy/1.jpeg",
          href: "Kandy Lake",
        },
        {
          name: "Bahirawakanda Temple",
          image: "/packages/kandy/2.png",
          href: "Bahirawakanda Temple",
        },
        {
          name: "Knuckles Mountain",
          image: "/packages/kandy/3.png",
          href: "Knuckles Mountain",
        },
        {
          name: "Sri Dalanda Maligawa",
          image: "/packages/kandy/4.png",
          href: "Sri Dalanda Maligawa",
          className: "col-span-2 xl:max-h-[304px] xl:min-w-[826px]",
        },
        {
            name: "Tea Museum",
            image: "/packages/colombo/5.png",
            href: "Tea Museum",
          },
        {
          name: "Nelligala",
          image: "/packages/kandy/6.png",
          href: "Nelligala",
        },
        {
          name: "Ambuluwawa Tower",
          image: "/packages/kandy/7.png",
          href: "Ambuluwawa Tower",
        },
        {
          name: "Hanthana Bird Park",
          image: "/packages/colombo/8.png",
          href: "Hanthana Bird Park",
        },
       
      ]} />

    </div>
  );
}
