import AboutSection from "./component/about";
import ContactSection from "./component/contact";
import Footer from "./component/footer";
import HeroSection from "./component/hero";
import Navigation from "./component/navigation";
import SkillsSection from "./component/skill";
import WorkSection from "./component/work";

export default function Home() {
  return (
    <main className="relative overflow-hidden">
      {/* Background shapes */}
      <div className="shape-blob"></div>
      <div className="shape-blob two"></div>

      <Navigation />
      <HeroSection />
      <SkillsSection />
      <WorkSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
