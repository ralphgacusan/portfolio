import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Skills from "../../components/Skills/Skills";
import FeaturedProjects from "../../components/ProjectGrid/FeaturedProjects";
import Experience from "../../components/Experience/Experience";
import Contact from "../../components/ContactForm/Contact";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <FeaturedProjects />
      <Experience />
      <Contact />
    </>
  );
}
