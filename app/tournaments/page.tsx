"use client"

import { useState } from "react"
import Image from "next/image"
import { Mail, Phone } from "lucide-react"

export default function Home() {
  const [activeTab, setActiveTab] = useState("tournaments")

  return (
    <div className="min-h-screen  ">
      
      <div className=" md:!pt-[120px]   !pt-[100px] "></div>
      {/* <Image
      src="/tournaments/Banner.webp"
      width={2500}
      height={2500}
      alt="Tournament Banner"
      className="w-full  object-cover"
      /> */}

      
      {/* Tab Navigation */}
      <div className="flex flex-col md:flex-row mt-16 container mx-auto">
        <div className="w-full md:w-64 flex-shrink-0">
          <nav className="flex flex-col gap-2 p-4">
            <button
              onClick={() => setActiveTab("tournaments")}
              className={`bg-customGreen  text-center py-4 px-6  font-medium transition-colors ${activeTab === "tournaments" ? "border-[1px] text-white  border-green-600" : "text-gray-400"}`}
            >
              Tournaments
            </button>
            <button
              onClick={() => setActiveTab("golf-in-sri-lanka")}
              className={`bg-customGreen  text-center py-4 px-6  font-medium transition-colors ${activeTab === "golf-in-sri-lanka" ? "border-[1px] text-white  border-green-600" : "text-gray-400"}`}
            >
              Golf In Sri Lanka
            </button>
            <button
              onClick={() => setActiveTab("locations")}
              className={`bg-customGreen  text-center py-4 px-6  font-medium transition-colors ${activeTab === "locations" ? "border-[1px] text-white  border-green-600" : "text-gray-400"}`}
            >
              Locations
            </button>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-4">
          {/* Tournaments Tab Content */}
          {activeTab === "tournaments" && (
            <div className="">
              <Image
              src="/pic2.jpg"
              width={800}
              height={400}
              alt="banner"
              className=""
              />
              <Image
              src="/pic1.jpeg"
              width={800}
              height={400}
              alt="banner"
              className=""
              />
              <h1 className="text-3xl font-bold my-6 text-start">Tournament Schedule</h1>

              <div className="space-y-6 text-gray-700">
                <p className="font-medium">28th September arrival Sri Lanka</p>

                <div>
                  <h2 className="font-bold mb-2">ROYAL COLOMBO GOLF CLUB (RCGC):</h2>
                  <p>Monday, 29th September – Practice Round (9:00am Onwards)</p>
                  <p>Tuesday, 30th September – Tournament Round (8:30am Onwards)</p>
                  <p>Wednesday, 1st October 2025, Travel to Kandy</p>
                </div>

                <div>
                  <h2 className="font-bold mb-2">VICTORIA GOLF RESORT (VGR):</h2>
                  <p>Thursday, 2nd October – Practice Round (9:00am Onwards)</p>
                  <p>Friday, 3rd October – Tournament Round (8:30am Onwards)</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  <p>Package Price for a Single Golfer</p>
                  <p className="md:text-right">USD 7500 /-</p>
                  <p>Supplement for sharing with a Golf partner</p>
                  <p className="md:text-right">USD 2850 /-</p>
                  <p>Supplement for sharing with a Non-Golf partner</p>
                  <p className="md:text-right">USD 1750 /-</p>
                </div>

                <div>
                  <h2 className="font-bold mb-2">Awards</h2>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Overall Winner Paradise Helanka Golf Classic Trophy (Gentleman Winner & Lady Winner)</li>
                    <li>Best Gross Winner each course (Gentleman Winner & Lady Winner)</li>
                    <li>Best Nett Winner at each course (Gentleman Winner & Lady Winner)</li>
                    <li>Longest Accurate Drive at each course (Gentleman Winner & Lady Winner)</li>
                    <li>Nearest To the Pin at each course (Gentleman Winner & Lady Winner)</li>
                    <li>Participation Souvenirs</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-bold mb-2">Schedule</h2>
                  <ul className="space-y-1">
                    <li>Day 1 – Arrival Sri Lanka</li>
                    <li>Day 2 – Practice round at RCGC</li>
                    <li>Day 3 – Tournament at RCGC</li>
                    <li>Day 4 – Travel to Kandy</li>
                    <li>Day 5 – Practice round at VGR</li>
                    <li>Day 6 – Tournament at VGR. Awards ceremony and Gala Dinner</li>
                    <li>Day 7-8 Post tournament tour</li>
                    <li>Day 9 – Return to Colombo</li>
                    <li>Day 10 – Departures</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-bold mb-2">Tournament & Tour Inclusions</h2>
                  <ul className="space-y-1">
                    <li>6 Nights at luxurious hotels on Bed & Breakfast basis during the tournament.</li>
                    <li>3 Nights at luxurious hotels on Bed & Breakfast basis during the post-tour   Nuwara Eliya OR Hambantota.</li>
                    <li>
                       Lunches & Dinners provided from day 2 to day 6.
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-bold mb-2">Accommodation</h2>
                  <p className="font-medium">Tournament days</p>
                  <ul className="space-y-1 mb-4">
                    <li>Colombo : Shangri-La Colombo - 3 nights</li>
                    <li>Kandy : Earl&apos;s Regency Hotel - 3 nights</li>
                  </ul>

                  <p className="font-medium">Post tour</p>
                  <p className="font-medium">Option 1</p>
                  <ul className="space-y-1 mb-4">
                    <li>Nuwara Eliya : The Grand Hotel - 2 nights</li>
                    <li>Colombo : Shangri-La Colombo - 1 night</li>
                  </ul>

                  <p className="font-medium">OR</p>

                  <p className="font-medium">Option 2</p>
                  <ul className="space-y-1">
                    <li>Ella : 98 Acres Resort - 1 night</li>
                    <li>Hambantota : Shangri-La Hambantota Golf Resort & Spa - 1 night</li>
                    <li>Colombo : Shangri-La Colombo - 1 night</li>
                  </ul>
                </div>

                <div>
                  <h2 className="font-bold mb-2">Golf & On-Course Services:</h2>
                  <p className="mb-2">
                    All green fees and golf-related charges are covered during the tournament (excluding post-tour).
                    Morning snacks provided on practice and tournament days.
                    Two (1L) water bottles per person per day.
                    Emergency medical facilities on standby at the courses during practice and tournament dates.
                  </p>
                </div>

                <div>
                  <h2 className="font-bold mb-2">Exclusive Experiences:</h2>
                  <p className="mb-2">
                    A guided visit to the Temple of the Tooth Relic in Kandy. Evening cocktails & spirits with
                    entertainment, including jazz nights, DJ performances, and local cultural shows.
                  </p>
                </div>

                <div>
                  <h2 className="font-bold mb-2">Transport & Assistance:</h2>
                  <p className="mb-2">
                    Luxurious shared transfers for tournament days with English-speaking tour guides and driver
                    assistance. Private transfers for the post-tour with English-speaking chauffeur guides. Arrival &
                    Departure transfers included via premium coaches.
                  </p>
                </div>

               

                <div>
                <h2 className="font-bold mb-2">Additional Benefits:</h2>
               
                  <ul className="space-y-1">
                   <li>All applicable taxes included.</li>
                    <li> Optional Services (Available on Request – Additional Charges Apply)</li>
                    <li>Excursions & Sightseeing tailored to your interests.</li>
                    <li>Private Transfers via SUVs / domestic flights upon prior confirmation.</li>
                    <li>Flight Tickets & Visa Assistance based on country and flight route details.</li>
                    <li>Terms & conditions apply.</li>
                  </ul>
                </div>
                
                <div>
                <div className="space-y-4">
                 
                  <ul className="space-y-2 text-customGray">
                    <li className="flex items-center space-x-2">
                      <div className='w-[22px] h-[22px] rounded-full bg-customGreen relative '><Phone fill='#F8EBC6' className="h-[12px] w-[12px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-customBeige" /></div>
                     <div className="grid">
                     <span>+94 71 318 2912</span>
                     <span>+94 71 708 7004</span>
                     </div>
                    
                    </li>
                   
                    <li className="flex items-center space-x-2">
                      <div className='w-[22px] h-[22px] rounded-full bg-customGreen relative '><Mail className="h-[12px] w-[12px] absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-customBeige" /></div>
                      <div className="grid">
                      <span>www.helanka.com</span>
                      <span>golfsl@helanka.com</span>
                      </div>
                    
                    </li>
                   
                   
                  </ul>
                </div>
                </div>
              
              </div>
            </div>
          )}

          {/* Golf In Sri Lanka Tab Content */}
          {activeTab === "golf-in-sri-lanka" && (
            <div className="max-w-4xl">
              <h1 className="text-4xl font-bold mb-6 uppercase">Golf in Sri Lanka</h1>

              <div className="space-y-6 text-gray-700 leading-relaxed">
                <p>
                  Golf in Sri Lanka has a rich heritage dating back to the British colonial era, making it one of the
                  oldest golfing destinations in Asia. The country offers a variety of challenging golf courses set
                  against stunning landscapes, from misty highland greens to coastal fairways. The Royal Colombo Golf
                  Club, established in 1879, is the second-oldest Royal Golf Club outside the UK, providing a scenic
                  golfing experience in the heart of the commercial capital. In the central highlands, the Nuwara Eliya
                  Golf Club, founded in 1889, offers a classic British-style course with narrow fairways and a cool
                  climate, reminiscent of Scotland.
                </p>

                <p>
                  Meanwhile, the Victoria Golf & Country Resort in Digana, near Kandy, ranks among the top golf courses
                  in Asia, boasting breathtaking views of the Victoria Reservoir and a championship-standard layout. The
                  southern coast features the luxurious Shangri-La Hambantota Golf Resort & Spa, the country&apos;s first and
                  only resort-based golf course, set amidst coconut plantations and sand dunes. For those seeking a
                  unique coastal golfing experience, the Eagle&apos;s Golf Links in Trincomalee provides an 18-hole course
                  with panoramic ocean views.
                </p>

                <p>
                  Sri Lanka is rapidly gaining recognition as a premier golf tourism destination, attracting
                  international players with its combination of historic courses, year-round tropical weather, and
                  luxury golf resorts. Golfers can enjoy a diverse experience, seamlessly blending the sport with
                  cultural excursions, wildlife safaris, and beachside relaxation. Several prestigious tournaments, such
                  as the Sri Lanka Open, the Royal Colombo Golf Championship, and the Paradise Helanka Golf Classic,
                  further highlight the country&apos;s growing prominence in the sport. With increasing investment in golf
                  infrastructure and active promotion by the Sri Lanka Golf Union, the future of golf in Sri Lanka looks
                  promising, making it an ideal destination for both professional players and leisure golfers.
                </p>
              </div>
            </div>
          )}

          {/* Locations Tab Content */}
          {activeTab === "locations" && (
            <div className="max-w-4xl mx-auto">
              {/* Golf Club 1 */}
              <div className="flex flex-col md:flex-row gap-6 mb-12 items-center md:items-start">
                <div className="w-40 h-40 relative flex-shrink-0">
                  <Image
                    src="/tournaments/Golf-Colombo.webp"
                    alt="Royal Colombo Golf Club Logo"
                    width={160}
                    height={160}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-3">Royal Colombo Golf Club</h2>
                  <p className="text-gray-700">
                    It will be an unique opportunity to play at one of the oldest golf clubs in the world, standing in
                    the City of Colombo and is officially allowed to use the word &ldquo;Royal&ldquo;.
                  </p>
                </div>
              </div>

              {/* Golf Club 2 */}
              <div className="flex flex-col md:flex-row gap-6 mb-12 items-center md:items-start">
                <div className="w-40 h-40 relative flex-shrink-0">
                  <Image
                    src="/tournaments/Nuwara-Eliya.webp"
                    alt="Nuwara Eliya Golf Club Logo"
                    width={160}
                    height={160}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-3">Nuwara Eliya Golf Club</h2>
                  <p className="text-gray-700">
                    The Nuwara Eliya Golf Club is one of the oldest Golf Clubs in Sri Lanka. Established in the late
                    19th century, this scenic 18-hole Golf course is located in the hill station of Nuwara Eliya.
                  </p>
                </div>
              </div>

              {/* Golf Club 3 */}
              <div className="flex flex-col md:flex-row gap-6 mb-12 items-center md:items-start">
                <div className="w-40 h-40 relative flex-shrink-0">
                  <Image
                    src="/tournaments/Victoria.webp"
                    alt="Victoria Golf & Country Resort Logo"
                    width={160}
                    height={160}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-3">Victoria Golf & Country Resort, Digana – Kandy</h2>
                  <p className="text-gray-700">
                    This exquisite resort property designed by Donald. Steel, bordering the Victoria reservoir is ranked
                    among the top 100 &quot;Most Beautiful Courses in the World&quot;.
                  </p>
                </div>
              </div>

              {/* Golf Club 4 */}
              <div className="flex flex-col md:flex-row gap-6 mb-12 items-center md:items-start">
                <div className="w-40 h-40 relative flex-shrink-0">
                  <Image
                    src="/tournaments/Shrangila.webp"
                    alt="Shangri-Las's Hambantota Golf Resort & Spa Logo"
                    width={160}
                    height={160}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h2 className="text-2xl font-bold mb-3">Shangri-Las&apos;s Hambantota Golf Resort & Spa</h2>
                  <p className="text-gray-700">
                    Overlooking the pristine southern coast of Sri Lanka, Shangri-La Hambantota is located along the
                    ancient Spice Route in a city steeped in rich history. The resort is home to an 18-hole golf course,
                    an expansive spa and a village that celebrates local Artisans.
                  </p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

