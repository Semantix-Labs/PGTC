interface OverViewPops{
  details: { label: string; value: string; valueColor: string }[]
}


export default function Overview(details: OverViewPops) {
  
    return (
      <section className="bg-customLightGreen py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl text-customGreen font-semibold text-center mb-12">
            Overview
          </h2>
          
          <div className=" mx-auto rounded-xl p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-6">
            {details.details.map((detail: { label: string; value: string; valueColor: string }, index) => (
                <div 
                  key={index} 
                  className={`flex gap-4 items-start ${
                    detail.label === 'Description' ? 'md:col-span-2' : ''
                  }`}
                >
                  <div className="w-32 shrink-0 text-customGreen font-medium">
                    {detail.label}
                  </div>
                  <div className="text-left">
                    : <span className={detail.valueColor}>{detail.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  