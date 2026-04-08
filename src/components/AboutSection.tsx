import skateparkBowl from "@/assets/skatepark-bowl.jpeg";

const AboutSection = () => {
  return (
    <section className="bg-sus-mid grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center" style={{ padding: "clamp(4rem, 8vw, 8rem) clamp(1.5rem, 5vw, 6rem)" }}>
      <div>
        <p className="label-text">Om oss</p>
        <h2 className="section-title">Vi rullar<br />tillsammans</h2>
        <p className="text-base leading-[1.85] mb-6" style={{ color: "rgba(245,240,232,0.75)" }}>
          Säters Udda Sporter är en ideell förening med hjärtat i Säter, Dalarna. Vi driver Pelleparken – Säters enda skatepark – och samlar åkare i alla åldrar och på alla nivåer under ett tak.<br /><br />
          Föreningen sätter regler och ordnar events. Parken drivs av oss, för er. Vare sig du åker skateboard, BMX, trick-kickbike eller inlines – du hör hemma här.
        </p>
        <p className="text-base leading-[1.85]" style={{ color: "rgba(245,240,232,0.75)" }}>
          Peppa varandra och ha roligt tillsammans!
        </p>
      </div>

      <div className="relative overflow-hidden rounded-lg">
        <img
          src={skateparkBowl}
          alt="Skateboardåkare i Pelleparken"
          className="w-full h-full object-cover aspect-[4/5]"
        />
      </div>
    </section>
  );
};

export default AboutSection;
