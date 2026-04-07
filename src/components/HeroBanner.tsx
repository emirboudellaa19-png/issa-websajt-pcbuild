import heroBanner from "@/assets/hero-banner.jpg";

const HeroBanner = () => {
  return (
    <div className="relative overflow-hidden rounded-sm">
      <img
        src={heroBanner}
        alt="ProComp - Rasprodaja do 70%"
        className="w-full h-[300px] md:h-[420px] object-cover"
      />
      <div className="absolute inset-0 flex items-center justify-end pr-8 md:pr-16">
        <div className="text-right">
          <div className="bg-primary text-primary-foreground px-6 py-4 rounded-lg inline-block">
            <p className="text-lg font-bold uppercase">Rasprodaja</p>
            <p className="text-sm">i do</p>
            <p className="text-5xl md:text-7xl font-black">70%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
