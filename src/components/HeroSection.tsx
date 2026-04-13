import susLogo from "@/assets/sus_final.png";
import { Facebook } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen grid place-items-center overflow-hidden bg-black">
      {/* Facebook link top-right */}
      <a
        href="https://www.facebook.com/Satersuddasporter/"
        target="_blank"
        rel="noopener noreferrer"
        className="absolute top-6 right-6 z-20 bg-[#1877F2] hover:bg-[#166FE5] text-white rounded-full p-2.5 transition-colors shadow-lg opacity-0"
        style={{ animation: "fadeUp 0.8s ease forwards 0.6s" }}
        aria-label="Besök oss på Facebook"
      >
        <Facebook className="w-6 h-6" />
      </a>

      {/* Hero content */}
      <div className="relative z-10 text-center p-8">
        <p
          className="font-mono text-xs tracking-[0.35em] uppercase text-sus-yellow mb-6 opacity-0"
          style={{ animation: "fadeUp 0.8s ease forwards 0.2s" }}
        >
          {"\n"}
        </p>
        <img
          src={susLogo}
          alt="Säters Udda Sporter"
          className="max-w-[min(90vw,800px)] mx-auto opacity-0"
          style={{ animation: "fadeUp 0.8s ease forwards 0.4s" }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
