
interface OverViewPropes{
  activities:{
    title: string;
    description: string;
  }[];
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
}

export default function OverviewSection({activities,paragraph1,paragraph2,paragraph3}:OverViewPropes) {
   
    return (
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <section className="mb-16">
          <h1 className="text-customGreen text-4xl md:text-5xl font-semibold text-center mb-8">
            Overview
          </h1>
          <div className="space-y-6  text-[16px] font-medium text-[#C7A041]  leading-relaxed">
            <p>
              {paragraph1}
            </p>
            <p>
              {paragraph2}
            </p>
            <p>
              {paragraph3}
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
