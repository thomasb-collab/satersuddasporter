import sponsorsImg from "@/assets/sponsors.png";

const SponsorsSection = () => {
  return (
    <section
      id="sponsorer"
      className="bg-sus-bg scroll-mt-12"
      style={{ padding: "clamp(4rem, 8vw, 8rem) clamp(1.5rem, 5vw, 6rem)" }}
    >
      <div className="text-center mb-12">
        <p className="label-text">STÖD</p>
        <h2 className="section-title mb-4">Sponsorer</h2>
        <p
          className="text-sm leading-relaxed max-w-[50ch] mx-auto"
          style={{ color: "rgba(245,240,232,0.5)" }}
        >
          Ett stort tack till alla som stöttar Säter Udda Sporter och gör vår
          verksamhet möjlig.
        </p>
      </div>

      <div className="flex justify-center">
        <div className="bg-white rounded-lg overflow-hidden max-w-xl w-full">
          <img
            src={sponsorsImg}
            alt="Våra sponsorer – Huvudsponsorer, Guldsponsorer, Silversponsorer och Bronssponsorer"
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
