import Image from "next/image"

export default function LuxuryAdventure() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Hero Section */}
      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h1 className="text-customGreen text-5xl lg:text-[72px] item-start font-semibold mb-6">
            Experience <br />Unique Culture, Hospitality, Diversity
          </h1>
          <p className="text-[#C7A041] text-[20px] font-medium leading-[40px] items-center mb-16">
          Embark on an unparalleled journey and partake in Sri Lanka’s unique culture, hospitality, diversity with exceptional local gourmet cuisine to titillate your tastebuds. Relax in premium accommodations that seamlessly combine comfort and luxury, set against enchanting scenery. Travel effortlessly in top-of-the-line vehicles, offering safety, elegance, and convenience at every turn. Immerse yourself in an exquisite blend of unforgettable experiences at every step.
          </p>
          <div className="grid md:grid-cols-1 gap-8 items-end ">
        <FeatureCard
          icon='/home/Group.png'
          title="Golfing"
          description="Challenge your golf skills on unique courses, set in diverse and historic locations complemented with unparalleled service."
        />
        {/* <FeatureCard
          icon='/home/Vector.png'
          title="Luxury"
          description="Immerse yourself in unparalleled luxury, where personalized service meets extraordinary experiences and unforgettable adventures."
        />
        <FeatureCard
          icon='/home/2.png'
          title="Exploration"
          description="Embark on a journey of discovery, immersing yourself in diverse cultures, breathtaking landscapes, and thrilling adventures."
        /> */}
      </div>
          {/* Features Section */}
      {/* <div className="grid md:grid-cols-1 gap-8 items-end ">
        <FeatureCard
          icon='/home/Group.png'
          title="Golfing"
          description="World-class golfing experience with stunning landscapes and premium facilities."
        />
        <FeatureCard
          icon='/home/Vector.png'
          title="Luxury"
          description="Experience ultimate luxury, personalized service, and exceptional adventures."
        />
        <FeatureCard
          icon='/home/2.png'
          title="Exploration"
          description="Discover new cultures, landscapes, and adventures on tour."
        />
      </div> */}
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Image
            src="/home/hotel1.png"
            alt="Poolside dining"
            width={300}
            height={400}
            className="rounded-2xl w-full md:h-[400px]  object-cover"
          />
          <Image
            src="/home/bus.png"
            alt="Luxury bus"
            width={300}
            height={400}
            className="rounded-2xl w-full md:h-[400px] object-cover"
          />
          <Image
            src="/home/3.png"
            alt="Golf course"
            width={300}
            height={400}
            className="rounded-2xl w-full md:h-[400px] object-cover"
          />
          <Image
            src="/home/ss.png"
            alt="Luxury resort"
            width={300}
            height={400}
            className="rounded-2xl w-full md:h-[400px] object-cover"
          />
        </div>
      </div>

      
    </main>
  )
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: string
  title: string
  description: string
}) {
  return (
    <div className="flex gap-5 items-start">
      <div className="bg-customGreen w-[88px] h-[88px] min-w-[88px] relative rounded-full  text-customBeige">
      <Image width={128} height={128} src={icon} alt={description} className="w-[44px] h-[40px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  text-customGold" />
    
      </div>
      <div>
        <h3 className="text-customGold text-[24px] leading-[28px] font-semibold mb-2">{title}</h3>
        <p className="text-[#393939] text-[20px]">{description}</p>
      </div>
    </div>
  )
}

