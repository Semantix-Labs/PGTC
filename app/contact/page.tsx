import ContactForm from "../components/ContactComponents/ContactForm";
import ContactPage from "../components/ContactComponents/ContactPage";
import HeroSection from "../components/HomeComponents/HeroSection/HeroSection";


export default function Home() {
  return (
   <div className=" ">
    
     <HeroSection buttonsHidden="hidden" maxWidth="max-w-6xl" headerText="Contact Us" normalText="Discover the perfect blend of golf and travel across Sri Lanka. Whether its luxury golf packages or breathtaking tours of this scenic paradise, we are here to bring your dream vacation to life.  Get in touch to start your tour paradise with golf." imageLocation="/contact.png"/>
     <ContactForm/>
     <ContactPage/>
     
   </div>
  );
}
