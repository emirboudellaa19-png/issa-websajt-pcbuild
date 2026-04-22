import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import heroBanner from "@/assets/hero-banner-new.png";
import heroSlide2 from "@/assets/hero-slide-2.jpg";
import heroSlide3 from "@/assets/hero-slide-3.jpg";

const slides = [
  { src: heroBanner, alt: "ISSA WEBSAJT - Kupi odmah, plati na rate" },
  { src: heroSlide2, alt: "Gaming Week - akcija na gaming opremu" },
  { src: heroSlide3, alt: "Novi mobiteli - najnoviji modeli" },
];

const HeroBanner = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const goTo = (i: number) => setCurrent((i + slides.length) % slides.length);

  return (
    <div className="relative overflow-hidden rounded-sm group">
      <div
        className="flex transition-transform duration-700 ease-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {slides.map((slide) => (
          <img
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            className="w-full h-[300px] md:h-[420px] object-cover flex-shrink-0"
          />
        ))}
      </div>

      <button
        onClick={() => goTo(current - 1)}
        aria-label="Prethodni slajd"
        className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/70 hover:bg-background flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={() => goTo(current + 1)}
        aria-label="Sljedeći slajd"
        className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-background/70 hover:bg-background flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => goTo(i)}
            aria-label={`Idi na slajd ${i + 1}`}
            className={`h-2 rounded-full transition-all ${
              i === current ? "w-6 bg-primary" : "w-2 bg-background/70"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroBanner;
