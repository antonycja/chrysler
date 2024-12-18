import Hero from "@/sections/heroSection/hero";
import About from "@/sections/aboutSection/about";
import Services from "@/sections/servicesSection/services";
import Data from "@/constants/data";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="hero-about"></div>
      <About />
      <Services />
      <h1>hello world from Home</h1>
    </>
  );
}
