import AIAssistant from "../components/AIAssistant";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Portfolio from "../components/Portfolio";
import Services from "../components/Services";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Portfolio />
      <Services />
      <AIAssistant />
      <Contact />
      <Footer/>
    </>
  );
}
