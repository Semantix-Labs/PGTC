import HeroSection from "../components/HomeComponents/HeroSection/HeroSection";
import PrivacyPolicy from "../components/Privacy/PrivacyPolicy";



export default function Home() {
  return (
   <div className=" ">
    
     <HeroSection buttonsHidden="hidden" maxWidth="max-w-[818px]" headerText="Privacy Policy" normalText="Your privacy is important to us. We are committed to safeguarding your personal information and being transparent about how we collect, use, and protect it." imageLocation="/privacyhome.jpeg"/>
     <PrivacyPolicy/>
     
   </div>
  );
}
