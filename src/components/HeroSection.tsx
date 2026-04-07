const HeroSection = () => {
  return (
    <section className="relative min-h-screen grid place-items-center overflow-hidden bg-sus-bg">
      {/* Background gradients */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 70% 40%, rgba(245,216,0,0.07) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 20% 80%, rgba(230,51,18,0.06) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Photo collage backdrop */}
      <div className="absolute inset-0 grid grid-cols-4 grid-rows-2 gap-[3px] opacity-[0.18] grayscale contrast-[1.4]">
        {[
          "https://images.unsplash.com/photo-1547447134-cd3f5c716030?w=600&q=80",
          "https://images.unsplash.com/photo-1572731132406-e4d16b26b978?w=600&q=80",
          "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=600&q=80",
          "https://images.unsplash.com/photo-1566442174-b3c9d4d63f8a?w=600&q=80",
          "https://images.unsplash.com/photo-1531804055935-76f44d7c3621?w=600&q=80",
          "https://images.unsplash.com/photo-1543357480-c60d4c9a2e27?w=600&q=80",
          "https://images.unsplash.com/photo-1547447134-cd3f5c716030?w=600&q=80",
          "https://images.unsplash.com/photo-1572731132406-e4d16b26b978?w=600&q=80",
        ].map((url, i) => (
          <div
            key={i}
            className="bg-sus-concrete overflow-hidden bg-cover bg-center"
            style={{ backgroundImage: `url('${url}')` }}
          />
        ))}
      </div>

      {/* Hero content */}
      <div className="relative z-10 text-center p-8">
        <p
          className="font-mono text-xs tracking-[0.35em] uppercase text-sus-yellow mb-6 opacity-0"
          style={{ animation: "fadeUp 0.8s ease forwards 0.2s" }}
        >
          Säter, Dalarna — Est. 2024
        </p>
        <h1
          className="font-display text-sus-white uppercase leading-[0.88] tracking-tight opacity-0"
          style={{
            fontSize: "clamp(5rem, 18vw, 16rem)",
            animation: "fadeUp 0.8s ease forwards 0.4s",
          }}
        >
          SÄTERS
          <span className="text-sus-yellow block">UDDA</span>
          SPORTER
        </h1>
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
            background: "linear-gradient(to bottom, hsl(51 100% 48%), transparent)",
            animation: "pulse-line 2s ease-in-out infinite",
          }}
        />
      </div>
    </section>
  );
};

export default HeroSection;
