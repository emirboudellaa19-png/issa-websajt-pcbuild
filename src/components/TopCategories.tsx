import { Monitor, Smartphone, Tv, Wind, Laptop, Watch, ScreenShare, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const categories = [
  { icon: Monitor, label: "Gaming računari", slug: "racunari-i-komponente", color: "from-primary/10 to-primary/5" },
  { icon: Smartphone, label: "Mobiteli", slug: "mobiteli-i-pametni-satovi", color: "from-orange-50 to-orange-100/50" },
  { icon: Tv, label: "Televizori", slug: "televizori-i-audio", color: "from-blue-50 to-blue-100/50" },
  { icon: Wind, label: "Klima uređaji", slug: "hladjenje-i-grijanje", color: "from-cyan-50 to-cyan-100/50" },
  { icon: Laptop, label: "Gaming laptopi", slug: "laptopi-i-tableti", color: "from-purple-50 to-purple-100/50" },
  { icon: Watch, label: "Pametni satovi", slug: "mobiteli-i-pametni-satovi", color: "from-green-50 to-green-100/50" },
  { icon: ScreenShare, label: "Monitori", slug: "oprema-za-racunare", color: "from-indigo-50 to-indigo-100/50" },
  { icon: Zap, label: "Električni romobili", slug: "sport-i-putovanje", color: "from-yellow-50 to-yellow-100/50" },
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
              className={`group bg-gradient-to-br ${cat.color} rounded-lg p-6 flex flex-col items-center gap-4 hover:shadow-md transition-all duration-300 border border-border/50`}
            >
              <cat.icon className="w-14 h-14 text-foreground/70 group-hover:text-primary transition-colors" />
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
