const FooterSection = () => {
  return (
    <>
      <div className="h-[2px]" style={{ background: "linear-gradient(to right, hsl(21 90% 48%), hsl(11 82% 49%), transparent)" }} />
      <footer className="bg-sus-bg py-12 flex flex-wrap justify-between items-center gap-4" style={{ padding: "3rem clamp(1.5rem, 5vw, 6rem)" }}>
        <div className="font-display text-2xl tracking-[0.1em] text-sus-white">
          SÄTERS <span className="text-sus-yellow">UDDA</span> SPORTER
        </div>
        <div className="text-[0.7rem] tracking-[0.15em] uppercase" style={{ color: "rgba(245,240,232,0.3)" }}>
          © 2024 Säters Udda Sporter. Alla rättigheter reserverade.
        </div>
      </footer>
    </>
  );
};

export default FooterSection;
