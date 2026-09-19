const contactDetails = [
  { key: "Adress", val: "Kungsvägen 20, 783 35 Säter" },
  { key: "E-post", val: "foreningensus@gmail.com", link: "mailto:foreningensus@gmail.com" },
  { key: "Facebook", val: "Säter Udda Sporter", link: "https://www.facebook.com/Satersuddasporter/" },
];

const ContactSection = () => {
  return (
    <section id="kontakt" className="bg-sus-mid grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start scroll-mt-12" style={{ padding: "clamp(4rem, 8vw, 8rem) clamp(1.5rem, 5vw, 6rem)" }}>
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

      <div className="bg-sus-concrete aspect-[4/3] relative overflow-hidden">
        <iframe
          title="Karta till Pelleparken, Kungsvägen 20, Säter"
          src="https://www.google.com/maps?q=Kungsv%C3%A4gen+20,+783+35+S%C3%A4ter&output=embed"
          className="absolute inset-0 w-full h-full border-0"
          style={{ filter: "grayscale(0.3) contrast(1.1)" }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <a
          href="https://maps.app.goo.gl/2mc6CeVs7bobiUY99"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 right-4 z-10 inline-block px-6 py-2.5 border text-sus-yellow no-underline text-[0.7rem] tracking-[0.25em] uppercase transition-colors duration-200 hover:bg-sus-yellow/10 bg-sus-mid/90 backdrop-blur-sm"
          style={{ borderColor: "rgba(232,83,14,0.4)" }}
        >
          Öppna karta →
        </a>
      </div>
    </section>
  );
};

export default ContactSection;
