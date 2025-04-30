import AboutSection from "@/app/component/about";
import ContactSection from "@/app/component/contact";
import HeroSection from "@/app/component/hero";
import SkillsSection from "@/app/component/skill";
import WorkSection from "@/app/component/work";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* Background shapes */}
      <div className="shape-blob"></div>
      <div className="shape-blob two"></div>

      {/* <Navigation /> */}
      <HeroSection />
      <SkillsSection />
      <WorkSection />
      <AboutSection />
      <ContactSection />
      {/* <Footer /> */}
    </main>
  );
}
