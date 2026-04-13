const MembershipSection = () => {
  return (
    <section id="medlemskap" className="bg-background text-center scroll-mt-12" style={{ padding: "clamp(5rem, 10vw, 10rem) clamp(1.5rem, 5vw, 6rem)" }}>
      <p className="label-text">STÖD OSS</p>
      <h2 className="font-display text-sus-white" style={{ fontSize: "clamp(3.5rem, 9vw, 8rem)", lineHeight: 1 }}>
        Bli medlem
      </h2>
      <p className="text-base leading-[1.8] max-w-[55ch] mx-auto mt-6 mb-12" style={{ color: "rgba(245,240,232,0.8)" }}>
        Medlemsavgift är endast 50 kr per person för ett helt år – eller valfritt högre belopp för att stödja föreningen ytterligare. Som medlem ingår olycksfallsförsäkring i Folksam!
        <br /><br />
        Skriv namn och fullständigt personnummer vid betalning så att vi kan få in LOK-stödbidrag.
      </p>

      <div className="flex flex-col sm:flex-row gap-[2px] max-w-2xl mx-auto mb-12">
        <div className="flex-1 border-2 border-sus-white/30 p-6">
          <p className="text-[0.65rem] tracking-[0.3em] uppercase mb-2" style={{ color: "rgba(245,240,232,0.6)" }}>
            Bankgiro (ingen avgift)
          </p>
          <p className="font-display text-sus-white text-4xl tracking-[0.05em]">5568-2827</p>
        </div>
        <div className="flex-1 border-2 border-sus-white/30 p-6">
          <p className="text-[0.65rem] tracking-[0.3em] uppercase mb-2" style={{ color: "rgba(245,240,232,0.6)" }}>
            Swish
          </p>
          <p className="font-display text-sus-white text-4xl tracking-[0.05em]">123 070 57 80</p>
        </div>
      </div>

    </section>
  );
};

export default MembershipSection;
