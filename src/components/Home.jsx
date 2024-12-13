import Download from "./Download/Download";
import Footer from "./Footer/Footer";
import HowItWorks from "./HowItWorks/HowItWorks";
import Landing from "./Landing/Landing";
import MainCars from "./MainCars/MainCars";
import Navbar from "./Navbar/Navbar";
import Testimonials from "./Testimonials/Testimonials";
import WhyChooseUs from "./WhyChooseUs/WhyChooseUs";

export default function Home() {
  return (
    <>
      <Navbar/>
      <Landing />
      <MainCars />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <Download />
      <Footer />
    </>
    
  )
}
