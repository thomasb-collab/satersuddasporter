const schedule = [
  { day: "Måndag – Fredag", time: "15:00 – 21:00" },
  { day: "Lördag", time: "10:00 – 20:00" },
  { day: "Söndag", time: "10:00 – 18:00" },
  { day: "Helgdagar", time: "12:00 – 17:00" },
];

const HoursSection = () => {
  return (
    <section className="bg-sus-yellow text-sus-bg grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center" style={{ padding: "clamp(4rem, 8vw, 8rem) clamp(1.5rem, 5vw, 6rem)" }}>
      <div>
        <p className="text-[0.65rem] tracking-[0.4em] uppercase mb-2" style={{ color: "rgba(13,13,13,0.5)" }}>Öppettider</p>
        <h2 className="font-display text-sus-bg mb-8" style={{ fontSize: "clamp(3rem, 7vw, 6rem)", lineHeight: 1 }}>
          Alltid rum<br />att röra sig
        </h2>

        <div className="p-1 border-2 border-sus-bg inline-block mt-6">
          <a
            href="#"
            className="block bg-sus-bg text-sus-yellow px-10 py-4 font-display text-xl tracking-[0.15em] no-underline transition-colors duration-200 hover:bg-transparent hover:text-sus-bg"
          >
            BOKA TID →
          </a>
        </div>
      </div>

      <div>
        <table className="w-full border-collapse">
          <tbody>
            {schedule.map((s, i) => (
              <tr key={i} className={i < schedule.length - 1 ? "border-b" : ""} style={{ borderColor: "rgba(13,13,13,0.15)" }}>
                <td className="py-4 text-sm tracking-[0.05em]">{s.day}</td>
                <td className="py-4 text-right font-display text-2xl tracking-[0.1em]">{s.time}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <div className="mt-6 p-5 text-sm leading-[1.7] tracking-[0.03em]" style={{ background: "rgba(13,13,13,0.1)" }}>
          Drop-in alltid välkommet. Egen utrustning rekommenderas men finns att låna på plats. Under 15 år kräver målsmans godkännande.
        </div>
      </div>
    </section>
  );
};

export default HoursSection;
