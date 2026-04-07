const AboutSection = () => {
  const stats = [
    { num: "2400", label: "Kvm totalyta" },
    { num: "12", label: "Unika zoner" },
    { num: "350+", label: "Medlemmar" },
    { num: "6", label: "Sporter" },
  ];

  return (
    <section className="bg-sus-mid grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center" style={{ padding: "clamp(4rem, 8vw, 8rem) clamp(1.5rem, 5vw, 6rem)" }}>
      <div>
        <p className="label-text">Om oss</p>
        <h2 className="section-title">Inte bara<br />en skatepark</h2>
        <p className="text-base leading-[1.85] mb-6" style={{ color: "rgba(245,240,232,0.75)" }}>
          Vad som en gång var en övergiven industrilokal i Säter har blivit Dalarnas mest oväntade sportanläggning. Här möts skateboardåkare, parkourutövare, frisbeegolfentusiaster och slackline-artister under samma tak.
        </p>
        <p className="text-base leading-[1.85]" style={{ color: "rgba(245,240,232,0.75)" }}>
          Vi tror på rörelse utan regler, kreativitet utan gränser och gemenskap utan krav. Säters Udda Sporter är platsen där det oväntade händer — varje dag.
        </p>
      </div>

      <div className="relative">
        <span
          className="font-display leading-none pointer-events-none select-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-[55%] hidden md:block"
          style={{
            fontSize: "clamp(8rem, 18vw, 18rem)",
            color: "transparent",
            WebkitTextStroke: "1px rgba(245,216,0,0.25)",
          }}
        >
          24
        </span>
        <div className="grid grid-cols-2 gap-6 relative z-10">
          {stats.map((s, i) => (
            <div
              key={i}
              className="border p-8 transition-colors duration-300 hover:border-sus-yellow"
              style={{
                borderColor: "rgba(245,216,0,0.2)",
                background: "rgba(245,216,0,0.03)",
              }}
            >
              <div className="font-display text-6xl text-sus-yellow leading-none">{s.num}</div>
              <div className="text-[0.7rem] tracking-[0.2em] uppercase mt-1" style={{ color: "rgba(245,240,232,0.5)" }}>
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
