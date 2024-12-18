export default function Overview() {
    const details = [
      { label: 'Name', value: 'Nuwara Eliya Golf Club (NEGC)', valueColor: 'text-customGold' },
      { label: 'Location', value: 'Nuwara Eliya , Sri Lanka', valueColor: 'text-customGold' },
      { label: 'Established', value: '1889', valueColor: 'text-customGold' },
      { label: 'Fairways', value: 'A mix of buffalo & Atawara', valueColor: 'text-customGold' },
      { label: 'Other', value: "Caddy's are available, Pro shop, Not busy on weekdays", valueColor: 'text-customGold' },
      { label: 'Pair', value: '71', valueColor: 'text-customGold' },
      { label: 'Slope rating', value: '68.7 / 129 White Tee (men)', valueColor: 'text-customGold' },
      { label: 'Greens', value: 'Gras Blues', valueColor: 'text-customGold' },
      { label: 'Description', value: 'Hillside, Parkland course, with lots of hills and valleys with mature trees', valueColor: 'text-customGold' },
    ]
  
    return (
      <section className="bg-customLightGreen py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl md:text-5xl text-customGreen font-semibold text-center mb-12">
            Overview
          </h2>
          
          <div className=" mx-auto rounded-xl p-6 md:p-8">
            <div className="grid md:grid-cols-2 gap-6">
              {details.map((detail, index) => (
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
  
  