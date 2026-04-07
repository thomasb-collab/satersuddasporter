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
          Säter, Dalarna — Est. 2024
        </p>
        <img
          src={susLogo}
          alt="Säters Udda Sporter"
          className="max-w-[min(90vw,800px)] mx-auto opacity-0"
          style={{ animation: "fadeUp 0.8s ease forwards 0.4s" }}
        />
        <p
          className="font-mono uppercase tracking-[0.1em] mt-8 opacity-0"
          style={{
            fontSize: "clamp(0.8rem, 2vw, 1.1rem)",
            color: "rgba(245,240,232,0.55)",
            animation: "fadeUp 0.8s ease forwards 0.6s",
          }}
        >
          Skateparken som blev något mer
        </p>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[0.7rem] tracking-[0.3em] uppercase flex flex-col items-center gap-2 opacity-0"
        style={{
          color: "rgba(245,240,232,0.3)",
          animation: "fadeUp 0.8s ease forwards 1s",
        }}
      >
        Scrolla ner
        <span
          className="w-px h-12 block"
          style={{
            background: "linear-gradient(to bottom, hsl(21 90% 48%), transparent)",
            animation: "pulse-line 2s ease-in-out infinite",
          }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
