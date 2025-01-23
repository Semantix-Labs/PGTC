
import HeroSection from "../../components/HomeComponents/HeroSection/HeroSection";
import OverviewSection from "../../components/Packages/MoreInfoPackages/OverviewSection";
import PlacesToVisit from "../../components/Packages/MoreInfoPackages/PlacesToVisit";


export default function page() {
  return (
    <div className=" ">

      <HeroSection buttonsHidden="hidden" maxWidth="max-w-[818px]" headerText="KANDY" normalText="Kandy, often referred to as the Cultural Capital of Sri Lanka, is a picturesque hill city nestled amidst lush greenery and misty mountains. It is known for its cool climate, historical significance, and serene atmosphere. The city's rich cultural heritage, vibrant gardens, and tranquil landscapes make it a captivating destination for travelers seeking history, and natural beauty." imageLocation="/packages/kandy/head.jpeg" />
      <OverviewSection activities={[
        {
          title: 'Visit Kandy Lake',
          description: `Enjoy boating, paddle boating while soaking in the serene beauty of this picturesque lake.`
        },
        {
            title: 'Walk Around Peradeniya Gardens',
            description: 'Explore towering palm avenues, vibrant orchids, the Javan fig tree, bamboo groves, and unique cactus species.'
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
      paragraph1={`Kandy, established as a royal city in the 14${<span className="text-[8px]">th</span>} century, flourished as the final capital of Sri Lanka's ancient kings. Its cultural heritage is evident in its architecture, with historic temples, palaces, and traditional houses that reflect its regal past. The city is also home to the revered Temple of the Sacred Tooth Relic, a site of global significance.`}
      paragraph2={`Renowned for its mild climate, Kandy provides a pleasant retreat from the tropical heat, with temperatures averaging between 18°C and 26°C. The city's lush surroundings, including its central lake and forested hills, create a picturesque and serene environment.`}
      paragraph3={`Exploring Kandy is a journey into history and culture, from vibrant festivals and traditional dances to peaceful botanical gardens and scenic landscapes. Its rich heritage and natural charm make it an enriching destination for travelers seeking cultural and spiritual connections.`}
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
