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
        bio: `Late W. Pinsiripal "Pin" Fernando is an iconic name in Sri Lankan golf history, revered as one of the finest golfers the country has ever produced`,

        career:
            "Honorary Life Membership of Royal Colombo Golf Club (RCGC) was bestowed posthumously. He was also a member of the Nuwara Eliya Golf Club (NEGC) which was the only other surviving golf course. He was the first Sri Lankan to become a member of the prestigious Royal & Ancient Golf Club of St. Andrews, Scotland. His records as a National Title Holder and Club Championship titles are unmatched. dominance on the golf course saw him a record multiple Sri Lanka Amateur Golf Championships, and at the time of his passing was the only Sri Lankans to have won the All-India Golf Championship twice.",
    },
    {
        id: 2,
        name: "Pam Fernando",
        title: "Mother Superior of Sri Lankan Golf",
        image:
            "/Team/5.png",
        bio: "Late Pam Fernando was a trailblazer in Sri Lankan Ladies golf, setting records that have stood the test of time. As a talented and passionate golfer, she won the Sri Lanka Amateur Golf Championship three times and proudly represented Sri Lanka in the Queen Sirikit Ladies Asian Golf Championship.",

        career:
            `Pam was a member of the Royal Colombo Golf Club (RCGC) and an honorary life member of the Nuwara Eliya Golf Club (NEGC). Her remarkable career was crowned by a Guinness World Record—she became the oldest woman to win a national golf championship, a testament to her skill and endurance in the game she loved.She authored the Centenary History Books of the Royal Colombo Golf Club, the Nuwara Eliya Golf Club, and the Sri Lanka Amateur Golf Championship, ensuring that future generations would understand and appreciate the rich traditions of the sport in the country.`,
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
        bio: "Tirusha Jesudason the second daughter of Pin & Pam Fernando is an Honorary Member of The Royal Colombo Golf Club, Life Member of Nuwara Eliya Golf Club,  and a member of the Victoria Golf Resort.",
        achievements: [
            `As an amateur golfer, she won the Sri Lanka Amateur Ladies Golf Championship four times and the Royal Colombo Golf Club Championship five times. Her prowess extended beyond national borders, securing the All-India Amateur Ladies Golf Championship four times and winning amateur championships in Thailand, Hong Kong, Malaysia, and Indonesia. In the USA, she clinched the Utah State Ladies Amateur Championship twice and finished second individually in the Queen Sirikit All Asia Team Championship.`
        ],
        career:
            "In 1981, Tirusha turned professional, becoming the first woman in Southeast Asia to do so. Over an 11-year career on the European Ladies Professional Golf Tour, she achieved several top-10 finishes, with her best performance being fifth in the British Ladies Open Championship. She also competed in tournaments across the USA, Japan, and the Asian Ladies Professional circuits. After retiring from professional golf in 1991, she returned to Sri Lanka and served as a professional golf coach at the Royal Colombo Golf Club. She resigned from professional golf and regained her amateur status in 1998.",
        currentOccupation:
            "Golf Course Design and Current Occupation.Tirusha has contributed to golf course design, including a 6-hole pitch and putt course at Hunas Falls Hotel and assisting in the design of the Victoria Golf Course in Digana, Kandy.",
    },
    {
        id: 5,
        name: "Priath Fernando",
        title: "A Visionary Leader for Sri Lankan Golf",
        image: "/Team/2.png",
        bio: "His deep-rooted passion for the game, impressive playing career, and outstanding contributions in golf administration has set the path to developing Golf in Schools",
        achievements: [
            `He secured victories in the Sri Lanka Junior Golf Championship, the Royal Colombo Golf Club Championship, and the Nuwara Eliya Golf Club Championship. His talent also led him to represent Sri Lanka in international tournaments held in Sri Lanka, India, and Pakistan.`
        ],
        currentOccupation:
            `A Qualified Level 2 Rules Official, he has served Sri Lanka Golf Union (SLGU) as Honorary Secretary, Honorary Treasurer, Chairman of the Selection Committee, and President. His leadership has significantly contributed to the development and governance of golf in the country.
At the Royal Colombo Golf Club, Priath’s dedication to the game is further exemplified by his tenure as both Captain and President, ensuring the continued growth and success of one of Sri Lanka’s most historic golf institutions.
He is now pursuing the development of golf tourism through this company to give an unforgettable journey through Paradise with Golf
`   },
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
                <div className="mt-16 bg-white rounded-lg shadow-md  md:p-8">
                <h2 className="text-2xl font-bold text-[#2d5d3d] text-center mb-4">
                    The Fernando Family - A Legacy of Integrity and Excellence
                </h2>
                <p className="text-center px-2 text-[#c99c33]">
                Dilrukshi, Tirusha, and Priath, as founders of Paradise Golf Tours Ceylon (PGTC), will ensure that every visitor will experience the island&apos;s unique beauty and the warmth of its people. Whether you are coming for a round of golf or to explore the island&apos;s stunning landscapes, you can trust that the Fernando family&apos;s values will be reflected in every aspect of your journey
                </p>
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
                <DialogContent className="max-h-[500px] max-w-[320px] md:max-w-[384px]  rounded-lg lg:max-h-[750px] lg:max-w-[900px] p-0 pb-12 !overflow-y-scroll bg-white">
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
                                        className=" !h-[318px] md:!h-[382px] lg:!w-96 lg:!h-96 rounded-xl"

                                    />
                                </div>

                                <div className="!pt-[300px] md:mt-[202px] lg:mt-[-80px] md:p-8 lg:p-8 overflow-y-auto !col-span-1 md:!col-span-3">
                                    <h2 className="text-4xl lg:text-[96px] lg:leading-[92px] font-semibold text-[#2d5d3d]">{selectedMember.name}</h2>
                                    <p className="text-2xl text-[#c99c33] mt-2 mb-6">{selectedMember.title}</p>


                                </div>
                            </div>
                            <div className="px-2 lg:px-12 overflow-y-scroll">
                                <p className="text-gray-700 lg:mt-20 mb-6">{selectedMember.bio}</p>

                                {selectedMember.achievements && selectedMember.achievements.length > 0 && (
                                    <>
                                        <h3 className="text-xl font-semibold text-[#c99c33] mt-6 mb-3">Amateur Golfing Achievements</h3>
                                        <ul className="list-disc pl-5 text-gray-700 space-y-1">
                                            {selectedMember.achievements.map((achievement, index) => (
                                                <li key={index}>{achievement}</li>
                                            ))}
                                        </ul>
                                    </>
                                )}

                                {selectedMember.career && (
                                    <>
                                        {/* <h3 className="text-xl font-semibold text-[#c99c33] mt-6 mb-3">Professional Golfing Career</h3> */}
                                        <p className="text-gray-700">{selectedMember.career}</p>
                                    </>
                                )}

                                {selectedMember.currentOccupation && (
                                    <>
                                        <h3 className="text-xl font-semibold text-[#c99c33] mt-6 mb-3">
                                      {selectedMember.id===4 ? "  Professional Golfing Career" :"Golf Administration"}
                                        </h3>
                                        <p className="text-gray-700">{selectedMember.currentOccupation}</p>
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

