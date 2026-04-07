import Image from "next/image";
import Hero from "@/components/hero/Hero";
import SkillsMarquee from "@/common/marqueSlider/SkillsMarquee";
import About from "@/components/about/About";
import ServicesSection from "@/components/services/Services";
export default function Home() {
  return (
    <div>
      <Hero />
      <SkillsMarquee />
      <About />
      <ServicesSection />
    </div>
  );
}
