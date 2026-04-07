const schedule = [
  { day: "Alla åkare", time: "07:00 – 17:00" },
  { day: "Erfarna åkare", time: "17:00 – 22:00" },
];

const HoursSection = () => {
  return (
    <section className="bg-sus-yellow text-sus-bg grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center" style={{ padding: "clamp(4rem, 8vw, 8rem) clamp(1.5rem, 5vw, 6rem)" }}>
      <div>
        <p className="text-[0.65rem] tracking-[0.4em] uppercase mb-2 font-bold" style={{ color: "rgba(13,13,13,0.5)" }}>Öppettider</p>
        <h2 className="font-display text-sus-bg mb-8" style={{ fontSize: "clamp(3rem, 7vw, 6rem)", lineHeight: 1 }}>
          du åka?
        </h2>

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
          Parken är ppen alla dagar. Nybörjare och mindre barn kan med fördel åka på förmiddagarna då det brukar vara lite lugnare i parken.
        </div>
      </div>
    </section>
  );
};

export default HoursSection;
