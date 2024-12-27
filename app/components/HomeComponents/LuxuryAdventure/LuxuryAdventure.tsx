import Image from "next/image"

export default function LuxuryAdventure() {
  return (
    <main className="container mx-auto px-4 py-8 max-w-7xl">
      {/* Hero Section */}
      <div className="grid lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h1 className="text-customGreen text-5xl lg:text-[72px] item-start font-semibold mb-6">
            Experience The<br />Luxury Adventure
          </h1>
          <p className="text-[#C7A041] text-[20px] font-medium leading-[40px] items-center mb-16">
            Experience luxury adventure with gourmet cuisine, offering diverse flavors and fresh ingredients. Enjoy premium accommodations blending comfort and style, set amidst stunning landscapes. Travel in top-tier vehicles, ensuring safety, elegance, and convenience for a seamless journey. Indulge in a perfect mix of adventure and living at every step.
          </p>
          {/* Features Section */}
      <div className="grid md:grid-cols-1 gap-8 items-end ">
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
      </div>
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
            src="/home/4.png"
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

