import Hero from "@/sections/heroSection/hero";
import About from "@/sections/aboutSection/about";
import Services from "@/sections/servicesSection/services";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="hero-about"></div>
      <About />
      <Services services={[]}/>
      <h1>hello world from Home</h1>
    </>
  );
}
