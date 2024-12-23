
import HeroSection from "../../components/HomeComponents/HeroSection/HeroSection";
import OverviewSection from "../../components/Packages/MoreInfoPackages/OverviewSection";
import PlacesToVisit from "../../components/Packages/MoreInfoPackages/PlacesToVisit";


export default function page() {
  return (
    <div className=" ">

      <HeroSection buttonsHidden="hidden" maxWidth="max-w-[818px]" headerText="COLOMBO" normalText="Colombo, the bustling capital of Sri Lanka, is a vibrant metropolis combining modern life with historical charm. Known for its tropical climate, lively streets, and dynamic atmosphere, the city offers a unique blend of cultures, architecture, and cuisines. Colombo's landmarks, markets, and coastal vistas make it a captivating destination for travelers seeking energy and heritage." imageLocation="/packages/colombo/head.jpeg" />
      <OverviewSection activities={[
        {
          title: 'Visit Gregory Lake ',
          description: 'Enjoy boating, jet skiing, or paddle boating while soaking in the serene beauty of this picturesque lake.'
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
          title: 'Visit Viharamahadevi ',
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
        paragraph1={`andy, established as a royal city in the 14th century, flourished as the final capital of Sri Lanka's ancient kings. Its cultural heritage is evident in its architecture, with historic temples, palaces, and traditional houses that reflect its regal past. The city is also home to the revered Temple of the Sacred Tooth Relic, a site of global significance.`}
        paragraph2={`Renowned for its mild climate, Kandy provides a pleasant retreat from the tropical heat, with temperatures averaging between 18°C and 26°C. The city's lush surroundings, including its central lake and forested hills, create a picturesque and serene environment.`}
        paragraph3={`Exploring Kandy is a journey into history and culture, from vibrant festivals and traditional dances to peaceful botanical gardens and scenic landscapes. Its rich heritage and natural charm make it an enriching destination for travelers seeking cultural and spiritual connections.`}
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
          name: "Gall Face",
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
