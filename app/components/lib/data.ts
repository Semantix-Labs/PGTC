export interface TeamMember {
    id: number
    name: string
    title: string
    image: string
    bio: string
    achievements?: string[]
    career?: string
    currentOccupation?: string
  }
  
  export const teamMembers: TeamMember[] = [
    {
      id: 1,
      name: '"Pin" Fernando',
      title: "The Legend of Sri Lankan Golf",
      image:  "/man.png",
      bio: "Pin Fernando is a legendary figure in Sri Lankan golf with decades of experience in the sport. He has won numerous championships and has been instrumental in developing golf in Sri Lanka.",
      achievements: [
        "5-time Sri Lankan National Champion",
        "Former Captain of the Royal Colombo Golf Club",
        "Represented Sri Lanka in international tournaments for over 20 years",
      ],
      career:
        "Pin has dedicated his life to golf, both as a player and later as a coach and mentor to young golfers. His technical expertise and passion for the game have inspired generations of Sri Lankan golfers.",
    },
    {
      id: 2,
      name: "Pam Fernando",
      title: "Mother Superior of Sri Lankan Golf",
      image:  "/man.png",
      bio: "Pam Fernando has been a pioneering figure in women's golf in Sri Lanka, breaking barriers and setting new standards for excellence in the sport.",
      achievements: [
        "3-time Women's National Champion",
        "First female board member of the Sri Lankan Golf Association",
        "Founder of the Women's Golf Development Program",
      ],
      career:
        "Pam's career spans over three decades, during which she has not only competed at the highest levels but also worked tirelessly to promote women's participation in golf throughout Sri Lanka.",
    },
    {
      id: 3,
      name: "Dilrukshi Martenstyn",
      title: "Cultivating Excellence in Golf and Nature",
      image:  "/man.png",
      bio: "Dilrukshi Martenstyn combines her passion for golf with environmental conservation, creating sustainable golf experiences that respect and enhance the natural beauty of Sri Lanka.",
      achievements: [
        "Environmental Golf Course Designer of the Year 2019",
        "Led the eco-certification of three major Sri Lankan golf courses",
        "Author of 'Green Fairways: The Future of Sustainable Golf'",
      ],
      career:
        "After a successful playing career, Dilrukshi turned her attention to golf course design with a focus on environmental sustainability. She has consulted on projects throughout Asia, bringing eco-friendly practices to golf course management.",
    },
    {
      id: 4,
      name: "Tirusha Jesudason",
      title: "A Trailblazer in Sri Lankan Women's Golf",
      image:  "/man.png",
      bio: "Tirusha Jesudason the second daughter of Pin & Pam Fernando is an Honorary Member of The Royal Colombo Golf Club and a member of the Victoria Golf Resort.",
      achievements: [
        "Won the Sri Lanka Amateur Ladies Golf Championship four times",
        "Won the Royal Colombo Golf Club Championship five times",
        "Secured the All-India Amateur Ladies Golf Championship four times",
        "Won amateur championships in Thailand, Hong Kong, Malaysia, and Indonesia",
        "Clinched the Utah State Ladies Amateur Championship twice",
        "Finished second individually in the Queen Sirikit All Asia Team Championship",
      ],
      career:
        "In 1981, Tirusha turned professional, becoming the first woman in Southeast Asia to do so. Over an 11-year career on the European Ladies Professional Golf Tour, she achieved several top-10 finishes, with her best performance being fifth in the British Ladies Open Championship. She also competed in tournaments across the USA, Japan, and the Asian Ladies Professional circuits. After retiring from professional golf in 1991, she returned to Sri Lanka and served as a professional golf coach at the Royal Colombo Golf Club. She resigned from professional golf and regained her amateur status in 1998.",
      currentOccupation:
        "Tirusha has contributed to golf course design, including a 6-hole pitch and putt course at Hunas Falls Hotel and assisting in the design of the Victoria Golf Course in Digana, Kandy.",
    },
    {
      id: 5,
      name: "Priath Fernando",
      title: "A Visionary Leader for Sri Lankan Golf",
      image:  "/man.png",
      bio: "Priath Fernando has been at the forefront of golf tourism in Sri Lanka, showcasing the country's world-class courses to international visitors and elevating Sri Lanka's status as a golfing destination.",
      achievements: [
        "President of the Sri Lankan Golf Tourism Association",
        "Developed the first comprehensive golf tourism strategy for Sri Lanka",
        "Recipient of the Asian Golf Tourism Excellence Award",
      ],
      career:
        "Priath's innovative approach to golf tourism has created new opportunities for Sri Lanka's economy while preserving the cultural and environmental integrity of the country's golf courses. His leadership has been recognized throughout the Asian golf community.",
    },
  ]
  
  