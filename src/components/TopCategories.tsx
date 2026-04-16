import { Link } from "react-router-dom";

import gamingPc from "@/assets/categories/gaming-pc.png";
import smartphone from "@/assets/categories/smartphone.png";
import television from "@/assets/categories/television.png";
import airConditioner from "@/assets/categories/air-conditioner.png";
import gamingLaptop from "@/assets/categories/gaming-laptop.png";
import smartwatch from "@/assets/categories/smartwatch.png";
import monitor from "@/assets/categories/monitor.png";
import electricScooter from "@/assets/categories/electric-scooter.png";

const categories = [
  { image: gamingPc, label: "Gaming računari", slug: "racunari-i-komponente", color: "from-primary/10 to-primary/5" },
  { image: smartphone, label: "Mobiteli", slug: "mobiteli-i-pametni-satovi", color: "from-orange-50 to-orange-100/50" },
  { image: television, label: "Televizori", slug: "televizori-i-audio", color: "from-blue-50 to-blue-100/50" },
  { image: airConditioner, label: "Klima uređaji", slug: "hladjenje-i-grijanje", color: "from-cyan-50 to-cyan-100/50" },
  { image: gamingLaptop, label: "Gaming laptopi", slug: "laptopi-i-tableti", color: "from-purple-50 to-purple-100/50" },
  { image: smartwatch, label: "Pametni satovi", slug: "mobiteli-i-pametni-satovi", color: "from-green-50 to-green-100/50" },
  { image: monitor, label: "Monitori", slug: "oprema-za-racunare", color: "from-indigo-50 to-indigo-100/50" },
  { image: electricScooter, label: "Električni romobili", slug: "sport-i-putovanje", color: "from-yellow-50 to-yellow-100/50" },
];

const TopCategories = () => {
  return (
    <section className="py-10">
      <div className="container">
        <div className="flex items-center gap-3 mb-8">
          <div className="flex-1 h-px bg-border" />
          <h2 className="text-2xl font-bold text-center uppercase tracking-wide">
            Top Kategorije
          </h2>
          <div className="flex-1 h-px bg-border" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {categories.map((cat) => (
            <Link
              key={cat.label}
              to={`/category/${cat.slug}`}
              className="group relative bg-muted/50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300 border border-border/50"
            >
              {/* Card content */}
              <div className="relative flex items-center min-h-[200px] md:min-h-[180px] p-5">
                {/* Text side */}
                <div className="flex flex-col gap-3 z-10 flex-1">
                  <h3 className="text-xl md:text-lg font-extrabold leading-tight">
                    <span className="text-foreground">{cat.label.split(' ')[0]}</span>
                    {cat.label.split(' ').length > 1 && (
                      <>
                        <br />
                        <span className="text-primary">{cat.label.split(' ').slice(1).join(' ')}</span>
                      </>
                    )}
                  </h3>
                  <span className="text-xs font-semibold border border-primary text-primary rounded-full px-3 py-1 w-fit group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Saznaj više
                  </span>
                </div>
                {/* Image side */}
                <div className="w-[45%] flex-shrink-0 flex items-center justify-center">
                  <img
                    src={cat.image}
                    alt={cat.label}
                    loading="lazy"
                    width={160}
                    height={160}
                    className="object-contain w-full h-auto max-h-[170px] group-hover:scale-105 transition-transform duration-300 drop-shadow-lg"
                  />
                </div>
              </div>
              {/* Category name below */}
              <div className="text-center py-2 border-t border-border/30">
                <span className="text-sm font-semibold">{cat.label}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCategories;
