import heroBanner from "@/assets/hero-banner-new.png";

const HeroBanner = () => {
  return (
    <div className="overflow-hidden rounded-sm">
      <img
        src={heroBanner}
        alt="TECHNO-GEAR - Kupi odmah, plati na rate"
        className="w-full h-[300px] md:h-[420px] object-cover"
      />
    </div>
  );
};

export default HeroBanner;
