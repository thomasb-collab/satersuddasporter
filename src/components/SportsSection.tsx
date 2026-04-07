const sports = [
  { emoji: "🛹", name: "Skateboard", tag: "Bowls · Street · Vert" },
  { emoji: "🏃", name: "Parkour", tag: "Precision · Flow · Freestyle" },
  { emoji: "🥏", name: "Frisbeegolf", tag: "Indoor · 9 hål · Alla nivåer" },
  { emoji: "🤸", name: "Slackline", tag: "Trickline · Longline · Highline" },
  { emoji: "🪀", name: "Kendama", tag: "Spike · Lunar · Juggle" },
  { emoji: "⚡", name: "Freestyle", tag: "Öppet · Kreativt · Blandat" },
];

const SportsSection = () => {
  return (
    <section className="bg-sus-mid" style={{ padding: "clamp(4rem, 8vw, 8rem) clamp(1.5rem, 5vw, 6rem)" }}>
      <p className="label-text">Sporterna</p>
      <h2 className="section-title">Sex sätt att<br />röra sig</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-[2px] mt-12">
        {sports.map((s, i) => (
          <div
            key={i}
            className="bg-sus-concrete py-10 px-12 flex items-center gap-8 transition-colors duration-300 hover:bg-[#363636] relative overflow-hidden"
            data-num={String(i + 1).padStart(2, "0")}
          >
            <span
              className="absolute right-8 top-1/2 -translate-y-1/2 font-display text-[5rem] pointer-events-none"
              style={{ color: "transparent", WebkitTextStroke: "1px rgba(245,240,232,0.06)" }}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-[2.5rem] flex-shrink-0">{s.emoji}</span>
            <div>
              <div className="font-display text-4xl tracking-[0.03em]">{s.name}</div>
              <span className="text-[0.65rem] tracking-[0.2em] uppercase text-sus-yellow block mt-1">
                {s.tag}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SportsSection;
