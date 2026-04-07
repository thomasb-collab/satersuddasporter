const rules = [
  { num: "01", text: "Parken är en avancerad idrotts- och aktivitetsyta. All aktivitet sker på egen risk." },
  { num: "02", text: "Hjälm är obligatoriskt för åkare under 16 år. Vi uppmanar alla att skydda skallen." },
  { num: "03", text: "Vårdnadshavare ansvarar för sina barn. Yngre barn ska ha en vuxen med sig. Parken är inte en lekplats!" },
  { num: "04", text: "Inga motordrivna fordon är tillåtna." },
  { num: "05", text: "Håll parken ren och fin-ta hand om ditt skräp." },
  { num: "06", text: "All skadegörelse och klotter polisanmäls! Det är föreningens medlemmar som får betala." },
  { num: "07", text: "Alla typer av handtag, pegs och trampor ska vara av plast, annars förstör de ytan." },
];

const RulesSection = () => {
  return (
    <section className="bg-sus-bg" style={{ padding: "clamp(4rem, 8vw, 8rem) clamp(1.5rem, 5vw, 6rem)" }}>
      <p className="label-text">Regler</p>
      <h2 className="section-title">TÄNK på<br />det här</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-[2px] mt-12">
        {rules.map((r, i) => (
          <div key={i} className="bg-sus-concrete p-8 relative">
            <div
              className="font-display text-7xl leading-none mb-4"
              style={{ color: "transparent", WebkitTextStroke: "1px rgba(232,83,14,0.3)" }}
            >
              {r.num}
            </div>
            <p className="text-sm leading-[1.75] font-normal" style={{ color: "rgba(245,240,232,0.65)" }}>
              {r.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RulesSection;
