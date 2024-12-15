import Hero from "@/sections/heroSection/hero";
import About from "@/sections/aboutSection/about";

export default function Home() {
  return (
    <>
        <Hero />
        <div className="hero-about"></div>
        <About/>
        <h1>hello world from Home</h1>
    </>
  );
}
