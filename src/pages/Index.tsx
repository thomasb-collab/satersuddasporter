import HeroSection from "@/components/HeroSection";
import TickerSection from "@/components/TickerSection";
import AboutSection from "@/components/AboutSection";
import NewsSection from "@/components/NewsSection";
import ParkSection from "@/components/ParkSection";

import HoursSection from "@/components/HoursSection";
import RulesSection from "@/components/RulesSection";
import MembershipSection from "@/components/MembershipSection";
import ContactSection from "@/components/ContactSection";
import SponsorsSection from "@/components/SponsorsSection";
import FooterSection from "@/components/FooterSection";

const Index = () => {
  return (
    <div className="scroll-smooth">
      <HeroSection />
      <TickerSection />
      <AboutSection />
      <NewsSection />
      <ParkSection />
      
      <HoursSection />
      <RulesSection />
      <MembershipSection />
      <ContactSection />
      <SponsorsSection />
      <FooterSection />
    </div>
  );
};

export default Index;
