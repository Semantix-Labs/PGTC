export default function OverviewSection() {
    const activities = [
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
    ]
  
    return (
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <section className="mb-16">
          <h1 className="text-customGreen text-4xl md:text-5xl font-semibold text-center mb-8">
            Overview
          </h1>
          <div className="space-y-6  text-[16px] font-medium text-[#C7A041]  leading-relaxed">
            <p>
              Nuwara Eliya, established by British colonists in the 19th century, was developed as a retreat for Europeans seeking a cooler climate. Its colonial heritage is evident in its architecture, with old bungalows, churches, and a golf course that reflect its history as a British holiday destination. The region also became a hub for tea cultivation, contributing to its global recognition.
            </p>
            <p>
              Renowned for its year-round cool climate, Nuwara Eliya offers a refreshing contrast to Sri Lanka`s tropical heat. Temperatures typically range from 10°C to 20°C, with misty mornings and crisp evenings. The weather, combined with rolling hills and lush greenery, creates an idyllic setting for relaxation and exploration.
            </p>
            <p>
              Traveling through Nuwara Eliya is a sensory delight, from scenic train rides and lush tea estates to tranquil landscapes and vibrant gardens. Its peaceful ambiance and natural beauty offer a rejuvenating escape for all types of travelers.
            </p>
          </div>
        </section>
  
        <section>
          <h2 className="text-customGreen text-4xl md:text-5xl font-semibold text-center mb-8">
            Things to do
          </h2>
          <div className="space-y-6">
            {activities.map((activity, index) => (
              <div key={index} className="flex gap-4">
                <div className="mt-2 shrink-0">
                  <div className="w-2 h-2 rounded-full bg-customGold" />
                </div>
                <div>
                  <h3 className="text-customGold text-[24px]  font-bold mb-1">
                    {activity.title}
                  </h3>
                  <p className="text-customGreen text-[16px] font-medium">
                    {activity.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    )
  }
  
  