import skateparkBowl from "@/assets/skatepark-bowl.jpeg";

const AboutSection = () => {
  return (
    <section
      className="bg-sus-mid relative overflow-hidden"
      style={{ padding: "clamp(5rem, 10vw, 10rem) 0" }}
    >
      <div className="grid grid-cols-1 lg:grid-cols-5 items-center gap-0">
        {/* Image — left side, bleeds to edge */}
        <div className="lg:col-span-3 relative">
          <div className="relative overflow-hidden lg:rounded-r-2xl">
            <img
              src={skateparkBowl}
              alt="Skateboardåkare i Pelleparken"
              className="w-full object-cover aspect-[4/3] lg:aspect-[3/2]"
            />
            {/* Gradient overlay for text readability on mobile */}
            <div
              className="absolute inset-0 lg:hidden"
              style={{
                background:
                  "linear-gradient(to top, hsl(var(--bg)) 0%, transparent 50%)",
              }}
            />
          </div>
        </div>

        {/* Text — right side */}
        <div
          className="lg:col-span-2 relative z-10 -mt-20 lg:mt-0"
          style={{ padding: "0 clamp(1.5rem, 5vw, 5rem)" }}
        >
          <p className="label-text">Om oss</p>
          <h2 className="section-title">
            Vi rullar
            <br />
            tillsammans
          </h2>

          <p
            className="text-sm md:text-base leading-[1.9] mb-6"
            style={{ color: "rgba(245,240,232,0.7)" }}
          >
            Säters Udda Sporter är en ideell förening med hjärtat i Säter,
            Dalarna. Vi driver Pelleparken – Säters enda skatepark – och samlar
            åkare i alla åldrar och på alla nivåer på samma ställe.
          </p>

          <p
            className="text-sm md:text-base leading-[1.9] mb-8"
            style={{ color: "rgba(245,240,232,0.7)" }}
          >
            Föreningen sätter regler och ordnar events. Parken drivs av oss, för
            er. Vare sig du åker skateboard, BMX, trick-kickbike eller inlines –
            du hör hemma här.
          </p>

          <p
            className="font-display text-xl md:text-2xl tracking-wide text-sus-yellow"
          >
            Peppa varandra och ha roligt tillsammans!
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
