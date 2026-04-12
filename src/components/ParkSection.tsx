import { useState } from "react";
import parkScooter from "@/assets/park-scooter.jpg";
import parkRamp from "@/assets/park-ramp.jpg";
import parkOverview from "@/assets/park-overview.jpg";
import parkStreet from "@/assets/park-street.jpg";
import parkBowl from "@/assets/park-bowl.jpg";
import parkFlat from "@/assets/park-flat.jpg";
import parkBowl2 from "@/assets/park-bowl2.jpg";
import zoneBgBowl from "@/assets/zone-bg-bowl.jpg";
import zoneBgSnake from "@/assets/zone-bg-snake.jpg";
import zoneBgStreet from "@/assets/zone-bg-street.jpg";
import zoneBgRamp from "@/assets/zone-bg-ramp.jpg";

const zones = [
  { icon: "🛹", name: "Bowlen", desc: "Klassisk betongbowl med pool coping. Från snake run till deep end — allt handgjutet.", bg: zoneBgBowl },
  { icon: "🏃", name: "Snaken", desc: "En slingrande bana att köra i flow. Perfekt för att bygga hastighet och pumpa kurvor.", bg: zoneBgSnake },
  { icon: "🥏", name: "Streetyta", desc: "Klassiska gatuelement – ledges, rails och flatmark. Här tränar du tricks och grinds i urban miljö.", bg: zoneBgStreet },
  { icon: "🤸", name: "Ramperna", desc: "Kör transition i någon av våra tre ramper. Vi har en mindre ramp och två större för mer erfarna åkare.", bg: zoneBgRamp },
];

const galleryImages = [
  { src: parkBowl, alt: "Betongbowl" },
  { src: parkFlat, alt: "Streetyta" },
  { src: parkOverview, alt: "Parkens översikt" },
  { src: parkStreet, alt: "Ledges och rails" },
  { src: parkBowl2, alt: "Bowl från sidan" },
  { src: parkRamp, alt: "Rampen" },
  { src: parkScooter, alt: "Kickbike i rampen" },
];

const ParkSection = () => {
  const [lightboxImg, setLightboxImg] = useState<string | null>(null);

  return (
    <section className="bg-sus-bg" style={{ padding: "clamp(4rem, 8vw, 8rem) clamp(1.5rem, 5vw, 6rem)" }}>
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-4">
        <div>
          <p className="label-text">PELLEPARKEN</p>
          <h2 className="section-title mb-0">Parkens<br />zoner</h2>
        </div>
        <p className="text-[0.95rem] leading-[1.8] max-w-[40ch]" style={{ color: "rgba(245,240,232,0.6)" }}>
          En modern betonganläggning byggd av Beaver Concrete. Parken har något för både nybörjare och erfarna åkare – från snakerun och streetyta till bowl och ramper.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[2px] mb-8">
        {zones.map((z, i) => (
          <div
            key={i}
            className="relative p-10 overflow-hidden cursor-default group min-h-[200px]"
          >
            <img
              src={z.bg}
              alt=""
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-colors duration-300" />
            <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-sus-yellow origin-left scale-x-0 transition-transform duration-400 group-hover:scale-x-100" />
            
            <div className="relative z-10">
              <div className="font-display text-3xl tracking-[0.05em] mb-3 text-sus-white">{z.name}</div>
              <p className="text-xs leading-[1.7] tracking-[0.02em]" style={{ color: "rgba(245,240,232,0.7)" }}>
                {z.desc}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Gallery */}
      <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-7 gap-2">
        {galleryImages.map((img, i) => (
          <button
            key={i}
            onClick={() => setLightboxImg(img.src)}
            className="aspect-square overflow-hidden rounded cursor-pointer group"
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              loading="lazy"
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxImg && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 cursor-pointer"
          onClick={() => setLightboxImg(null)}
        >
          <img
            src={lightboxImg}
            alt="Förstorad bild"
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
          />
        </div>
      )}
    </section>
  );
};

export default ParkSection;
