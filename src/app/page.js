import Hero from "@/sections/heroSection/hero";
import About from "@/sections/aboutSection/about";
import Services from "@/sections/servicesSection/services";
import Data from "@/constants/data";
import Testimonials from "@/sections/testimonialSection/testimonials";
import Clients from "@/sections/clientsSection/clients";
import Footer from "@/sections/footerSection/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="hero-about"></div>
      <About />
      <Services />
      <Testimonials />
      <Clients />
      <Footer />
    </>
  );
}
