import ContactForm from "../components/ContactComponents/ContactForm";
import ContactPage from "../components/ContactComponents/ContactPage";
import HeroSection from "../components/HomeComponents/HeroSection/HeroSection";


export default function Home() {
  return (
   <div className=" ">
    
     <HeroSection buttonsHidden="hidden" maxWidth="max-w-[818px]" headerText="Contact Us" normalText="Discover the perfect blend of golf and travel across Sri Lanka. Whether its luxury golf packages or breathtaking tours of this scenic paradise, were here to bring your dream vacation to life. Get in touch today to start your journey!" imageLocation="/contact_home.jpeg"/>
     <ContactForm/>
     <ContactPage/>
     
   </div>
  );
}
