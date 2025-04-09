"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowRight, X } from "lucide-react"
import { Button } from "../ui/button"
import { Dialog, DialogContent } from "../ui/dialog"

// Sample team member data
const teamMembers = [
    {
        id: 1,
        name: '"Pin" Fernando',
        title: "The Legend of Sri Lankan Golf",
        image: "/Team/3.png",
        bio: `Late W. Pinsiripal "Pin" Fernando is an iconic name in Sri Lankan golf history, revered as one of the finest amateur golfers the country has ever produced`,

        career:
            "He was a long-standing and distinguished member of the Royal Colombo Golf Club (RCGC) as well as the Nuwara Eliya Golf Club (NEGC), the latter being the only other operational golf course in Sri Lanka at the time. ",
        career2:
            "In recognition of his outstanding contributions to the game, the Royal Colombo Golf Club conferred upon him Honorary Life Membership posthumously.",
        career3:
            "A trailblazer in Sri Lankan golf, he was the first Sri Lankan to be admitted to the prestigious Royal & Ancient Golf Club of St. Andrews in Scotland. ",
        career4:
            "His achievements on the golf course remain unparalleled. A multiple-time National Champion, he also holds the record for the most number of Club Championship titles at the Royal Colombo Golf Club — a feat that stands to this day. His dominance was further underscored by his record number of victories at the Sri Lanka Amateur Golf Championship.",
        career5:
            "At the time of his passing, he was the only Sri Lankan to have won the prestigious All-India Golf Championship twice. ",
    },
    {
        id: 2,
        name: "Pam Fernando",
        title: "Mother Superior of Sri Lankan Golf",
        image:
            "/Team/5.png",
        bio: "Late Pam Fernando was a trailblazer in Sri Lankan Ladies golf, setting records that have stood the test of time. As a talented and passionate golfer, she won the Sri Lanka Amateur Golf Championship three times and proudly represented Sri Lanka in the Queen Sirikit Ladies Asian Golf Championship.",

        career:
            `Pam was a member of the Royal Colombo Golf Club (RCGC) and an honorary life member of the Nuwara Eliya Golf Club (NEGC). Her remarkable career was crowned by a Guinness World Record—she became the oldest woman to win a national golf championship, a testament to her skill and endurance in the game she loved.`,
   
        career2:
            `In 1969, she became the first Ceylonese Lady Captain of the Royal Colombo Golf Club.`,
   
        career3:
            `She authored the Centenary History Books of the Royal Colombo Golf Club, the Nuwara Eliya Golf Club, and the Sri Lanka Amateur Golf Championship, and pioneered junior golf development ensuring that future generations would understand and appreciate the rich traditions of the sport in the country.`,
   
        },
    {
        id: 3,
        name: "Dilrukshi Martenstyn",
        title: "Cultivating Excellence in Golf and Nature",
        image: "/Team/4.png",
        bio: "As the first daughter of Pin & Pam Fernando she also became the first Junior Golf Champion of Sri Lanka. Beyond her golfing achievements, Dilrukshi’s efforts in fostering cultural ties between Japan and  Sri Lanka were recognized when she was awarded the Foreign Minister's Commendation by the Embassy of Japan in Sri Lanka on 22nd October 2019. ",

    },
    {
        id: 4,
        name: "Tirusha Jesudason",
        title: "A Trailblazer in Sri Lankan Women's Golf",
        image:
            "/Team/1.png",
        bio: "Tirusha Jesudason the second daughter of Pin & Pam Fernando is an Honorary Member of The Royal Colombo Golf Club, Life Member of Nuwara Eliya Golf Club, and a member of the Victoria Golf Resort.",
        achievements: [
            `As an amateur golfer, she won the Sri Lanka Amateur Ladies Golf Championship four times and the Royal Colombo Golf Club's Ladies Championship five times. `
        ],
        achievements2: [
            `Her prowess extended beyond national borders, securing the All-India Amateur Ladies Golf Championship four times and winning amateur championships in Thailand, Hong Kong, Malaysia, and Indonesia. `
        ],
        achievements3: [
            ` 
            In the USA, she clinched the Utah State Ladies Amateur Championship twice and finished second individually in the Queen Sirikit All Asia Team Championship.`
        ],
        career:
            "In 1981, Tirusha turned professional, becoming the first woman in Southeast Asia to do so. Over an 11-year career on the European Ladies Professional Golf Tour, she achieved several top-10 finishes, with her best performance being fifth in the British Ladies Open Championship.",
        career2:
            " She also competed in tournaments across the USA, Japan, and the Asian Ladies Professional circuits. ",
        career3:
            " After retiring from professional golf in 1991, she returned to Sri Lanka and served as a professional golf coach at the Royal Colombo Golf Club. She resigned from professional golf and regained her amateur status in 1998.",
       
        currentOccupation:
            "Tirusha has contributed to golf course design, including a 6-hole pitch and putt course at Hunas Falls Hotel and assisting in the design of the Victoria Golf Course in Digana, Kandy.",
    },
    {
        id: 5,
        name: "Priath Fernando",
        title: "A Visionary Leader for Sri Lankan Golf",
        image: "/Team/2.png",
        bio: "His deep-rooted passion for the game, impressive playing career, and outstanding contributions in golf administration has set the path to developing Golf in Schools. In addition to being a Life Member of the Royal Colombo Golf Club (RCGC), his memberships at Nuwara Eliya Golf Club, Victoria Golf Resort, Shangri-La Hambantota Golf Resort, and the prestigious Royal & Ancient Golf Club of St. Andrews, Scotland, will ensure that golfing tourists to Sri Lanka experience excellent service.",
        bio2: "In addition to being a Life Member of the Royal Colombo Golf Club (RCGC), his memberships at Nuwara Eliya Golf Club, Victoria Golf Resort, Shangri-La Hambantota Golf Resort, and the prestigious Royal & Ancient Golf Club of St. Andrews, Scotland, will ensure that golfing tourists to Sri Lanka experience excellent service.",
        achievements: [
            `He secured victories in the Sri Lanka Junior Golf Championship, the Royal Colombo Golf Club Championship, and the Nuwara Eliya Golf Club Championship. His talent also led him to represent Sri Lanka in international tournaments held in Sri Lanka, India, and Pakistan.`
        ],
        currentOccupation:
            `A Qualified Level 2 Rules Official, he has served Sri Lanka Golf Union (SLGU) as Honorary Secretary, Honorary Treasurer, Chairman of the Selection Committee, and President. His leadership has significantly contributed to the development and governance of golf in the country.`   ,
        currentOccupation2:
            `At the Royal Colombo Golf Club, Priath’s dedication to the game is further exemplified by his tenure as both Captain and President, ensuring the continued growth and success of one of Sri Lanka’s most historic golf institutions. `   ,
        currentOccupation3:
            `He is now pursuing the development of golf tourism through this company to give an unforgettable journey through Paradise with Golf`   },
]

export default function TeamGallery() {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [selectedMember, setSelectedMember] = useState<(typeof teamMembers)[0] | null>(null)

    const handleOpenDetails = (member: (typeof teamMembers)[0]) => {
        setSelectedMember(member)
        setIsModalOpen(true)
    }

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-12 lg:grid-cols-12 gap-8 justify-center">
                <div className="md:flex gap-8 justify-center  md:col-span-12">
                <div className="mt-10 bg-white rounded-lg shadow-md  md:p-8">
                <h2 className="text-2xl font-bold text-[#2d5d3d] text-center mb-10 mt-2">
                    The Fernando Family - A Legacy of Integrity and Excellence
                </h2>
                <p className="text-center px-2 text-[#c99c33]">
                Dilrukshi, Tirusha, and Priath, as founders of Paradise Golf Tours Ceylon (PGTC), will ensure that every visitor will experience the island&apos;s unique beauty and the warmth of its people. Whether you are coming for a round of golf or to explore the island&apos;s stunning landscapes, you can trust that the Fernando family&apos;s values will be reflected in every aspect of your journey
                </p>
                <h2 className="text-2xl font-bold text-[#2d5d3d] text-center my-8">
                “A Tour of Paradise with Golf”    </h2>
                <div className="md:flex justify-center mt-5 space-y-8 md:space-y-0 gap-8">
                {teamMembers.slice(0, 2).map((member) => (
                        <div
                            key={member.id}
                            className="bg-white rounded-lg shadow-md overflow-hidden xl:w-[400px] lg:w-[350px]"
                        >
                            <div className="relative h-80 w-full">
                                <Image
                                    src={member.image || "/placeholder.svg"}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <div className="p-6 mx-auto grid justify-center">
                                <h2 className="text-xl text-center font-semibold text-gray-800">{member.name}</h2>
                                <p className="text-[#c99c33] mt-1">{member.title}</p>
                                <Button
                                    onClick={() => handleOpenDetails(member)}
                                    className="mt-4 rounded-[15px] bg-[#2d5d3d] hover:bg-[#234732] text-white"
                                >
                                    More Details <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    ))}
                    </div>
            </div>
                 
                </div>

                {/* Second Row: 3 Images */}
                <div className="grid md:grid-cols-3 gap-8 md:col-span-12">
                    {teamMembers.slice(2, 5).map((member) => (
                        <div
                            key={member.id}
                            className="bg-white rounded-lg shadow-md overflow-hidden max-w-[420px]"
                        >
                            <div className="relative h-80 w-full">
                                <Image
                                    src={member.image || "/placeholder.svg"}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <div className="p-6 mx-auto grid justify-center">
                                <h2 className="text-xl text-center font-semibold text-gray-800">{member.name}</h2>
                                <p className="text-[#c99c33] mt-1">{member.title}</p>
                                <Button
                                    onClick={() => handleOpenDetails(member)}
                                    className="mt-4 rounded-[15px] bg-[#2d5d3d] hover:bg-[#234732] text-white"
                                >
                                    More Details <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        

            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogContent className="max-h-[500px] max-w-[320px] md:max-w-[384px] md:h-[70vh] rounded-lg lg:max-h-[750px] lg:max-w-[900px] p-0 pb-12 overflow-y-scroll bg-white hide-scrollbar">
                    <div className="relative">
                        <Button
                            variant="ghost"
                            className="absolute right-2 top-2 h-8 w-8 p-0 rounded-full"
                            onClick={() => setIsModalOpen(false)}
                        >
                            <X className="h-6 w-6 text-[#2d5d3d]" />
                            <span className="sr-only">Close</span>
                        </Button>
                    </div>

                    {selectedMember && (
                        <div>
                            <div className="grid grid-cols-1 lg:grid-cols-5  gap-6">
                                <div className="!col-span-1 lg:!col-span-2 ">
                                    <Image
                                        src={selectedMember.image || "/placeholder.svg"}
                                        alt={selectedMember.name}
                                        fill
                                        className=" !h-[318px] md:!h-[382px] lg:!w-96 lg:!h-96 !rounded-xl lg:!rounded-r-xl"

                                    />
                                </div>

                                <div className="!pt-[300px] md:!pt-[220px] lg:!pt-[300px] md:mt-[150px] lg:mt-[-190px] md:py-8 lg:p-8 md:px-6 overflow-y-auto !col-span-1 md:!col-span-3">
                                    <h2 className="text-4xl lg:text-[96px] leading-10 lg:leading-[110px] font-semibold md:text-center lg:text-start text-[#2d5d3d]">{selectedMember.name}</h2>
                                    <p className="lg:text-2xl text-xl text-[#c99c33] mt-2 mb-6">{selectedMember.title}</p>


                                </div>
                            </div>
                            <div className="px-2 lg:px-4  lg:-mt-[110px] md:-mt-[50px]">
                                <p className="text-gray-700 lg:mt-20 mb-1 text-justify">{selectedMember.bio}</p>
                                <p className="text-gray-700  mb-4 text-justify">{selectedMember.bio2}</p>

                                {selectedMember.achievements && selectedMember.achievements.length > 0 && (
                                    <>
                                        <h3 className="text-xl font-semibold text-[#c99c33] mt-6 mb-3">Amateur Golfing Achievements</h3>
                                        <ul className="list-none  text-gray-700 space-y-1">
                                            {selectedMember.achievements.map((achievement, index) => (
                                                <li className="text-justify" key={index}>{achievement}</li>
                                            ))}
                                            {selectedMember.achievements2?.map((achievement, index) => (
                                                <li className="text-justify" key={index}>{achievement}</li>
                                            ))}
                                            {selectedMember.achievements3?.map((achievement, index) => (
                                                <li className="text-justify" key={index}>{achievement}</li>
                                            ))}
                                        </ul>
                                    </>
                                )}

                                {selectedMember.career && (
                                    <>
                                       {selectedMember.name==="Priath Fernando" || selectedMember.name==="Tirusha Jesudason" && <h3 className="text-xl font-semibold text-[#c99c33] hide-scrollbar mt-6 space-y-4 mb-3">Professional Golfing Career</h3>}
                                        <p className="text-gray-700 mb-2 hide-scrollbar text-justify">{selectedMember.career}</p>
                                        <p className="text-gray-700 mb-2 hide-scrollbar text-justify">{selectedMember.career2}</p>
                                        <p className="text-gray-700 mb-2 text-justify">{selectedMember.career3}</p>
                                        <p className="text-gray-700 mb-2 text-justify">{selectedMember.career4}</p>
                                        <p className="text-gray-700 mb-2 text-justify">{selectedMember.career5}</p>
                                    </>
                                )}

                                {selectedMember.currentOccupation && (
                                    <>
                                        <h3 className="text-xl font-semibold text-[#c99c33] mt-6 mb-3">
                                      {selectedMember.id===4 ? "Golf Course Design and Current Occupation" :"Golf Administration"}
                                        </h3>
                                        <p className="text-gray-700 mb-2">{selectedMember.currentOccupation}</p>
                                        <p className="text-gray-700 mb-2">{selectedMember.currentOccupation2}</p>
                                        <p className="text-gray-700">{selectedMember.currentOccupation3}</p>
                                    </>
                                )}
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </>
    )
}

