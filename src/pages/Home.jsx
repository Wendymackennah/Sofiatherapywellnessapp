import Navbar from "../components/layout/Navbar";
import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import Services from "../components/home/Services";
import About from "../components/home/About";
import Therapists from "../components/home/Therapists";
import Testimonials from "../components/home/Testimonials";
import CTA from "../components/home/CTA";
import Contact from "../components/home/Contact";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Stats />
      <Services />
      <About />
      <Therapists />
      <Testimonials />
      <CTA />
      <Contact />
      <Footer />
    </>
  );
}