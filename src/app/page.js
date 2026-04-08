import Image from "next/image";
import Hero from "@/components/hero/Hero";
import SkillsMarquee from "@/common/marqueSlider/SkillsMarquee";
import About from "@/components/about/About";
import ServicesSection from "@/components/services/Services";
import Testimonial from "@/components/testimonial/Testimonial";
import Skills from "@/components/skills/Skills";
import CTA from "@/common/CTA/CTA";
export default function Home() {
  return (
    <div>
      <Hero />
      <SkillsMarquee />
      <About />
      <ServicesSection />
      <Testimonial />
      <Skills />
      <CTA />
    </div>
  );
}
