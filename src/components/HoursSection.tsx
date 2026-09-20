const schedule = [
  { label: "Alla åkare", time: "07:00 – 17:00" },
  { label: "Erfarna åkare", time: "17:00 – 22:00" },
];

const skateOnly = [
  { label: "Tisdagar", time: "17:00 – 21:00" },
  { label: "Lördagar", time: "17:00 – 21:00" },
];

const HoursSection = () => {
  return (
    <section
      id="oppettider"
      className="relative bg-background overflow-hidden scroll-mt-12"
      style={{ padding: "clamp(5rem, 10vw, 10rem) clamp(1.5rem, 5vw, 6rem)" }}
    >
      {/* Decorative border top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-border" />

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="label-text mb-4">Öppettider</p>
            <h2
              className="font-display text-foreground"
              style={{ fontSize: "clamp(4rem, 9vw, 8rem)", lineHeight: 0.9 }}
            >
              NÄR KAN
              <br />
              DU ÅKA?
            </h2>
          </div>
          <p
            className="text-muted-foreground text-sm leading-relaxed max-w-xs tracking-wide"
            style={{ letterSpacing: "0.03em" }}
          >
            Parken är öppen alla dagar. Nybörjare och mindre barn kan med fördel
            åka på förmiddagarna då det oftast är lite lugnare då.
          </p>
        </div>

        {/* Schedule cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {schedule.map((s, i) => (
            <div
              key={i}
              className={`relative p-8 md:p-10 border border-border transition-colors hover:border-primary/40 group ${
                i === 0 ? "bg-card" : "bg-muted"
              }`}
            >
              {/* Accent line */}
              <div
                className={`absolute top-0 left-0 w-full h-[3px] ${
                  i === 0 ? "bg-primary" : "bg-accent"
                }`}
              />

              <p
                className="text-xs tracking-[0.35em] uppercase mb-6"
                style={{ color: "hsl(var(--muted-foreground))" }}
              >
                {s.label}
              </p>

              <p
                className="font-display text-foreground tracking-wider"
                style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1 }}
              >
                {s.time}
              </p>
            </div>
          ))}
        </div>

        {/* Skateboard only — visually separated as its own callout */}
        <div className="mt-16 relative">
          {/* Hazard-stripe divider */}
          <div
            className="h-2 w-full mb-8 rounded-full"
            style={{
              backgroundImage:
                "repeating-linear-gradient(135deg, hsl(var(--red)) 0, hsl(var(--red)) 10px, hsl(var(--bg)) 10px, hsl(var(--bg)) 20px)",
            }}
          />

          <div className="border border-sus-red/30 bg-sus-mid rounded-lg p-6 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xl leading-none" aria-hidden="true">
                🛹
              </span>
              <p
                className="inline-block text-xs tracking-[0.35em] uppercase px-3 py-1 rounded-full border border-sus-red/40 text-sus-red"
              >
                Enbart skateboard
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {skateOnly.map((s, i) => (
                <div
                  key={i}
                  className="relative p-8 md:p-10 border border-sus-red/30 transition-colors hover:border-sus-red/60 bg-card"
                >
                  <div className="absolute top-0 left-0 w-full h-[3px] bg-sus-red" />
                  <p
                    className="text-xs tracking-[0.35em] uppercase mb-6"
                    style={{ color: "hsl(var(--muted-foreground))" }}
                  >
                    {s.label}
                  </p>
                  <p
                    className="font-display text-foreground tracking-wider"
                    style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1 }}
                  >
                    {s.time}
                  </p>
                </div>
              ))}
            </div>

            <p
              className="text-sm mt-6 tracking-wide"
              style={{ letterSpacing: "0.03em", color: "rgba(245,240,232,0.7)" }}
            >
              Under dessa tider är det enbart tillåtet att åka skateboard i parken.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HoursSection;
