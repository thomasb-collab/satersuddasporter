const TickerSection = () => {
  const items = [
    "SKATEBOARD",
    "PARKOUR",
    "FRISBEEGOLF",
    "SLACKLINE",
    "KENDAMA",
    "SKATEBOARD",
    "PARKOUR",
    "FRISBEEGOLF",
    "SLACKLINE",
    "KENDAMA",
  ];

  return (
    <div className="bg-sus-yellow text-sus-bg py-3.5 overflow-hidden whitespace-nowrap">
      <div
        className="inline-block font-display text-xl tracking-[0.1em]"
        style={{ animation: "ticker 20s linear infinite" }}
      >
        {items.map((item, i) => (
          <span key={i} className="mx-8">
            {item}
            <span className="text-sus-red mx-8">★</span>
          </span>
        ))}
        {items.map((item, i) => (
          <span key={`dup-${i}`} className="mx-8">
            {item}
            <span className="text-sus-red mx-8">★</span>
          </span>
        ))}
      </div>
    </div>
  );
};

export default TickerSection;
