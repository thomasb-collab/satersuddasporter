const MembershipSection = () => {
  return (
    <section className="bg-sus-red text-center" style={{ padding: "clamp(5rem, 10vw, 10rem) clamp(1.5rem, 5vw, 6rem)" }}>
      <p className="label-text">Bli medlem</p>
      <h2 className="font-display text-sus-white" style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)", lineHeight: 1 }}>
        Gå med i<br />rörelsen
      </h2>
      <p className="text-base leading-[1.8] max-w-[55ch] mx-auto mt-6 mb-12" style={{ color: "rgba(245,240,232,0.8)" }}>
        Medlemskap ger obegränsad tillgång till alla zoner, prioriterad bokning för events och workshops, plus tillgång till vår community-app där vi delar clips och planerar sessions.
      </p>

      <a href="#" className="inline-block border-[3px] border-sus-white p-2 no-underline group">
        <span className="block bg-sus-white text-sus-red py-5 px-16 font-display text-2xl tracking-[0.2em] transition-colors duration-200 group-hover:bg-transparent group-hover:text-sus-white">
          BLI MEDLEM
        </span>
      </a>

      <p className="mt-8 text-xs tracking-[0.25em] uppercase" style={{ color: "rgba(245,240,232,0.5)" }}>
        Från 199 kr/mån — Ingen bindningstid
      </p>
    </section>
  );
};

export default MembershipSection;
