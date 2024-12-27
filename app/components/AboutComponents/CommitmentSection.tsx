import Image from 'next/image'

export default function CommitmentSection() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid md:grid-cols-2 gap-8  items-center">
        <div className="relative w-full max-w-[500px] max-h-[500px] aspect-square rounded-3xl overflow-hidden">
          <Image
            src="/about2.png"
            alt="Golf instructor teaching students on a golf course"
            fill
            className="object-cover"
          />
        </div>
        
        <div className="space-y-6">
          <h2 className="text-[#2d523f] max-w-[430px] text-5xl font-bold">
            Commitment to Excellence
          </h2>
          
          <div className="text-[#d4a853] text-lg max-w-[460px] leading-[40px]">
            <p className="mb-4">
              <span className="font-semibold ">Our Vision:</span> Paradise Golf Tours Ceylon (Pvt) Ltd to become the most sought-after golf tourism company specializing in organizing exclusive golf tours and tournaments across the breathtaking landscapes of Sri Lanka.
            </p>
            <p>
              We aim to deliver a seamless blend of luxury travel, world-class golfing experiences, and personalized services tailored to meet the desires of our clients.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

