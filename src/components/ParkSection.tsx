const zones = [
  { icon: "🛹", name: "Bowlen", desc: "Klassisk betongbowl med pool coping. Från snake run till deep end — allt handgjutet." },
  { icon: "🏃", name: "Snaken", desc: "En slingrande bana att köra i flow. Perfekt för att bygga hastighet och pumpa kurvor." },
  { icon: "🥏", name: "Streetyta", desc: "Klassiska gatuelement – ledges, rails och flatmark. Här tränar du tricks och grinds i urban miljö." },
  { icon: "🤸", name: "Ramperna", desc: "Kör transition i någon av våra tre ramper. Vi har en mindre ramp och två större för mer erfarna åkare." },
];

const ParkSection = () => {
  return (
    <section className="bg-sus-bg" style={{ padding: "clamp(4rem, 8vw, 8rem) clamp(1.5rem, 5vw, 6rem)" }}>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
        <div>
          <p className="label-text">PELLEPARKEN</p>
          <h2 className="section-title mb-0">Parkens<br />zoner</h2>
        </div>
        <p className="text-[0.95rem] leading-[1.8] max-w-[40ch]" style={{ color: "rgba(245,240,232,0.6)" }}>
          En modern betonganläggning byggd av Beaver Concrete. Parken har något förbåde nybörjare och erfarna åkare – från snakerun och streetyta till bowl och ramper.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2px]">
        {zones.map((z, i) => (
          <div
            key={i}
            className="bg-sus-concrete p-10 relative overflow-hidden cursor-default transition-colors duration-300 hover:bg-[#333] group"
          >
            <div
              className="absolute bottom-0 left-0 right-0 h-[3px] bg-sus-yellow origin-left scale-x-0 transition-transform duration-400 group-hover:scale-x-100"
            />
            <span className="text-[2.5rem] mb-6 block opacity-90">{z.icon}</span>
            <div className="font-display text-3xl tracking-[0.05em] mb-3 text-sus-white">{z.name}</div>
            <p className="text-xs leading-[1.7] tracking-[0.02em]" style={{ color: "rgba(245,240,232,0.5)" }}>
              {z.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ParkSection;
