import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import AnimatedBackground from "@/components/AnimatedBackground";
import Solutions from "@/components/Solutions";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import About from "@/components/About";
import Process from "@/components/Process";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-[#F8FAFC]">
      <AnimatedBackground />
      <Navbar />
      <Hero />
      <Solutions />
      <Services />
      <Portfolio />
      <About />
      <Process />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  );
}
