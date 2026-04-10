import susLogo from "@/assets/sus_final.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen grid place-items-center overflow-hidden bg-black">
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
