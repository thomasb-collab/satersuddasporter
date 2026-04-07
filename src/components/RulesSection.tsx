const rules = [
  { num: "01", text: "Respektera utrymmet och varandra. Alla nivåer är välkomna — uppmuntra, döm inte." },
  { num: "02", text: "Hjälm obligatorisk för alla under 18. Rekommenderas starkt för alla åldrar i bowl och parkour." },
  { num: "03", text: "Vänta på din tur. Kolla innan du droppar in. Ögonkontakt räcker." },
  { num: "04", text: "Ingen mat eller dryck i aktivitetszonerna. Häng i loungen istället." },
  { num: "05", text: "Plocka upp efter dig. Broken gear rapporteras i receptionen, vi fixar det." },
  { num: "06", text: "Ha kul. Det är bokstavligen det enda syftet med hela stället." },
];

const RulesSection = () => {
  return (
    <section className="bg-sus-bg" style={{ padding: "clamp(4rem, 8vw, 8rem) clamp(1.5rem, 5vw, 6rem)" }}>
      <p className="label-text">Regler</p>
      <h2 className="section-title">Keep it<br />clean</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] mt-12">
        {rules.map((r, i) => (
          <div key={i} className="bg-sus-concrete p-8 relative">
            <div
              className="font-display text-7xl leading-none mb-4"
              style={{ color: "transparent", WebkitTextStroke: "1px rgba(245,216,0,0.3)" }}
            >
              {r.num}
            </div>
            <p className="text-sm leading-[1.75]" style={{ color: "rgba(245,240,232,0.65)" }}>
              {r.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RulesSection;
