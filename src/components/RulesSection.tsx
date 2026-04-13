import trehjulig from "@/assets/trehjulig.png";
import vikbar from "@/assets/vikbar.png";

const rules = [
  { num: "01", text: "Parken är en avancerad idrotts- och aktivitetsyta. All aktivitet sker på egen risk." },
  { num: "02", text: "Hjälm är obligatoriskt för åkare under 16 år. Vi uppmanar alla att skydda skallen." },
  { num: "03", text: "Vårdnadshavare ansvarar för sina barn. Yngre barn ska ha en vuxen med sig. Parken är inte en lekplats!" },
  { num: "04", text: "Inga motordrivna fordon är tillåtna." },
  { num: "05", text: "Håll parken ren och fin — ta hand om ditt skräp." },
  { num: "06", text: "All skadegörelse och klotter polisanmäls! Det är föreningens medlemmar som får betala." },
  { num: "07", text: "Alla typer av handtag, pegs och trampor ska vara av plast, annars förstör de ytan." },
];

const RulesSection = () => {
  return (
    <section
      id="regler"
      className="relative scroll-mt-12"
      style={{
        padding: "clamp(5rem, 10vw, 10rem) clamp(1.5rem, 5vw, 6rem)",
        background: "hsl(var(--primary))",
        color: "hsl(var(--bg))",
      }}
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <p
          className="text-[0.65rem] tracking-[0.4em] uppercase mb-2 font-bold"
          style={{ color: "rgba(0,0,0,0.45)" }}
        >
          Regler
        </p>
        <h2
          className="font-display mb-16"
          style={{
            fontSize: "clamp(4rem, 9vw, 8rem)",
            lineHeight: 0.9,
            color: "hsl(var(--bg))",
          }}
        >
          TÄNK PÅ
          <br />
          DET HÄR
        </h2>

        {/* Rules list */}
        <div className="space-y-0">
          {rules.map((r, i) => (
            <div
              key={i}
              className="flex items-start gap-6 md:gap-10 py-6"
              style={{
                borderBottom: i < rules.length - 1 ? "1px solid rgba(0,0,0,0.15)" : "none",
              }}
            >
              <span
                className="font-display shrink-0"
                style={{
                  fontSize: "clamp(2rem, 4vw, 3.5rem)",
                  lineHeight: 1,
                  color: "rgba(0,0,0,0.2)",
                }}
              >
                {r.num}
              </span>
              <p
                className="text-sm md:text-base leading-relaxed pt-1 font-semibold"
                style={{ color: "rgba(0,0,0,0.9)", maxWidth: "40rem" }}
              >
                {r.text}
              </p>
            </div>
          ))}
        </div>

        {/* Ej tillåtna fordon */}
        <div className="mt-16">
          <div className="flex flex-col sm:flex-row items-center gap-6 sm:gap-10">
            <div className="flex gap-4 shrink-0">
              <img
                src={trehjulig}
                alt="Trehjulig sparkcykel – ej tillåten"
                className="w-32 md:w-40 rounded"
                style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.25)" }}
              />
              <img
                src={vikbar}
                alt="Vikbar sparkcykel – ej tillåten"
                className="w-32 md:w-40 rounded"
                style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.25)" }}
              />
            </div>
            <p
              className="text-sm md:text-base leading-relaxed font-semibold"
              style={{ color: "rgba(0,0,0,0.9)", maxWidth: "30rem" }}
            >
              Trehjuliga samt vikbara sparkcyklar är inte godkända för åkning i parken.
              De är inte konstruerade för parkåkning och kan gå sönder och orsaka skador.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RulesSection;
