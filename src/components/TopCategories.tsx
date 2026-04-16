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
        <h2 className="text-2xl font-bold text-center mb-8 uppercase tracking-wide">
          Top Kategorije
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {categories.map((cat) => (
            <Link
              key={cat.label}
              to={`/category/${cat.slug}`}
              className={`group bg-gradient-to-br ${cat.color} rounded-lg p-4 flex flex-col items-center gap-3 hover:shadow-md transition-all duration-300 border border-border/50`}
            >
              <div className="w-28 h-28 flex items-center justify-center">
                <img
                  src={cat.image}
                  alt={cat.label}
                  loading="lazy"
                  width={112}
                  height={112}
                  className="object-contain w-full h-full group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <span className="text-sm font-semibold text-center">{cat.label}</span>
              <span className="text-xs text-primary font-medium border border-primary rounded px-2 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                Saznaj više
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCategories;
