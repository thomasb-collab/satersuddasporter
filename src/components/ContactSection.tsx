const contactDetails = [
  { key: "Adress", val: "Industrigatan 14, 783 30 Säter" },
  { key: "Telefon", val: "0225-XXX XX", link: "tel:0225-XXXXX" },
  { key: "E-post", val: "hej@satersuddasporter.se", link: "mailto:hej@satersuddasporter.se" },
  { key: "Instagram", val: "@satersudda", link: "https://instagram.com" },
];

const ContactSection = () => {
  return (
    <section className="bg-sus-mid grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start" style={{ padding: "clamp(4rem, 8vw, 8rem) clamp(1.5rem, 5vw, 6rem)" }}>
      <div>
        <p className="label-text">Kontakt</p>
        <h2 className="section-title">Hitta<br />hit</h2>

        <div>
          {contactDetails.map((c, i) => (
            <div
              key={i}
              className="py-6 flex justify-between items-baseline gap-4"
              style={{
                borderTop: "1px solid rgba(245,240,232,0.1)",
                ...(i === contactDetails.length - 1 ? { borderBottom: "1px solid rgba(245,240,232,0.1)" } : {}),
              }}
            >
              <span className="text-[0.65rem] tracking-[0.3em] uppercase flex-shrink-0" style={{ color: "rgba(245,240,232,0.4)" }}>
                {c.key}
              </span>
              <span className="text-sm text-sus-white text-right">
                {c.link ? (
                  <a href={c.link} className="text-sus-yellow no-underline hover:underline">
                    {c.val}
                  </a>
                ) : (
                  c.val
                )}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-sus-concrete aspect-[4/3] flex items-center justify-center relative overflow-hidden">
        <span
          className="font-display text-[8rem] absolute tracking-[0.1em] select-none"
          style={{ color: "rgba(245,240,232,0.04)" }}
        >
          SÄTER
        </span>
        <div className="relative z-10 text-center">
          <div className="text-5xl mb-4">📍</div>
          <div className="font-display text-2xl text-sus-yellow tracking-[0.1em] mb-2">
            Industrigatan 14
          </div>
          <div className="text-xs tracking-[0.25em] uppercase" style={{ color: "rgba(245,240,232,0.4)" }}>
            783 30 Säter, Dalarna
          </div>
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 px-6 py-2.5 border text-sus-yellow no-underline text-[0.7rem] tracking-[0.25em] uppercase transition-colors duration-200 hover:bg-sus-yellow/10"
            style={{ borderColor: "rgba(232,83,14,0.4)" }}
          >
            Öppna karta →
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
