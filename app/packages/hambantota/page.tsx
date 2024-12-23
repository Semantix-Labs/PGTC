
import HeroSection from "../../components/HomeComponents/HeroSection/HeroSection";
import OverviewSection from "../../components/Packages/MoreInfoPackages/OverviewSection";
import PlacesToVisit from "../../components/Packages/MoreInfoPackages/PlacesToVisit";


export default function page() {
  return (
    <div className=" ">

      <HeroSection buttonsHidden="hidden" maxWidth="max-w-[818px]" headerText="HAMBANTOTA" normalText="Hambantota, often referred to as the Rising Hub of the South, is a captivating coastal town in Sri Lanka. It is known for its warm climate, golden beaches, and peaceful ambiance. The town's modern infrastructure, lush wildlife parks, and scenic landscapes make it an appealing destination for travelers seeking adventure and natural beauty." imageLocation="/packages/hambantota/head.jpeg" />
      <OverviewSection activities={[
        {
          title: 'Visit Yala National Park ',
          description: 'Explore famous wildlife parks, known for its diverse animals, including leopards, elephants, and a variety of bird species.'
        },
        {
            title: 'Relax at Tangalle Beach ',
            description: 'Enjoy a peaceful day on this stunning beach with golden sands and calm waters, ideal for swimming and sunbathing.'
          },
        {
          title: 'Go on a Safari at Udawalawe National Park  ',
          description: 'Take a thrilling jeep safari to spot wild elephants and other animals in their natural habitat.'
        },
        {
          title: 'Explore the Rekawa Turtle Sanctuary ',
          description: 'Visit this eco-friendly sanctuary to observe sea turtles nesting and learn about the conservation efforts in the area.'
        },
        {
          title: 'Hike to the Lighthouse at Hambantota  ',
          description: 'Visit "Little New Zealand" to experience lush green pastures and see cattle grazing.'
        },
        {
          title: 'Go Whale Watching in Mirissa  ',
          description: 'Take a boat trip from nearby Mirissa to catch a glimpse of blue whales and dolphins in the Indian Ocean.'
        },
        {
          title: 'Visit the Kataragama Temple ',
          description: 'Explore the sacred temple complex, an important pilgrimage site for Buddhists, Hindus, and Muslims alike.'
        },
        {
          title: 'Explore Bundala National Park ',
          description: "UNESCO Ramsar Wetland site is a paradise for bird watchers and nature lovers, offering diverse ecosystems and wildlife."
        },
        {
          title: 'Go Kayaking on the Walawe River ',
          description: 'Paddle through the serene river waters surrounded by lush vegetation and wildlife for a unique water adventure.'
        },
        {
          title: 'Enjoy a Cultural Experience at the Mahapelessa Hot Springs ',
          description: 'ETake a rejuvenating dip in these natural hot springs, known for their therapeutic properties.'
        }
      ]}
        paragraph1={`Kandy, established as a royal city in the 14th century, flourished as the final capital of Sri Lanka's ancient kings. Its cultural heritage is evident in its architecture, with historic temples, palaces, and traditional houses that reflect its regal past. The city is also home to the revered Temple of the Sacred Tooth Relic, a site of global significance.`}
        paragraph2={`Renowned for its mild climate, Kandy provides a pleasant retreat from the tropical heat, with temperatures averaging between 18°C and 26°C. The city's lush surroundings, including its central lake and forested hills, create a picturesque and serene environment.`}
        paragraph3={`Exploring Kandy is a journey into history and culture, from vibrant festivals and traditional dances to peaceful botanical gardens and scenic landscapes. Its rich heritage and natural charm make it an enriching destination for travelers seeking cultural and spiritual connections.`}
      />
      <PlacesToVisit places={[
        {
          name: "Rekawa Beach",
          image: "/packages/hambantota/1.png",
          href: "Rekawa Beach",
        },
        {
          name: "Mirissa",
          image: "/packages/hambantota/2.png",
          href: "Mirissa",
        },
        {
          name: "Yala National Park",
          image: "/packages/hambantota/3.png",
          href: "Yala National Park",
        },
        {
          name: "Ridiyagama Safari Park",
          image: "/packages/hambantota/4.png",
          href: "Ridiyagama Safari Park",
          className: "col-span-2 xl:max-h-[304px] xl:min-w-[826px]",
        },
        {
            name: "Walawe River",
            image: "/packages/hambantota/5.png",
            href: "Walawe River",
          },
        {
          name: "Hummanaya",
          image: "/packages/hambantota/6.png",
          href: "Hummanaya",
        },
        {
          name: "Thangalla Beach",
          image: "/packages/hambantota/7.png",
          href: "Thangalla Beach",
        },
        {
          name: "Bundala",
          image: "/packages/hambantota/8.png",
          href: "Bundala",
        },
       
      ]} />

    </div>
  );
}
