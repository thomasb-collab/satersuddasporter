import HeroSection from "@/components/HeroSection";
import TickerSection from "@/components/TickerSection";
import ShortcutMenu from "@/components/ShortcutMenu";
import AboutSection from "@/components/AboutSection";
import FacebookFeed from "@/components/FacebookFeed";
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
      <ShortcutMenu />
      <AboutSection />
      <FacebookFeed />
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
