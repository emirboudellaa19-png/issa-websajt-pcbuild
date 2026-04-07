import { Monitor, Smartphone, Tv, Wind, Laptop, Watch, ScreenShare, Zap } from "lucide-react";

const categories = [
  { icon: Monitor, label: "Gaming računari", color: "from-primary/10 to-primary/5" },
  { icon: Smartphone, label: "Mobiteli", color: "from-orange-50 to-orange-100/50" },
  { icon: Tv, label: "Televizori", color: "from-blue-50 to-blue-100/50" },
  { icon: Wind, label: "Klima uređaji", color: "from-cyan-50 to-cyan-100/50" },
  { icon: Laptop, label: "Gaming laptopi", color: "from-purple-50 to-purple-100/50" },
  { icon: Watch, label: "Pametni satovi", color: "from-green-50 to-green-100/50" },
  { icon: ScreenShare, label: "Monitori", color: "from-indigo-50 to-indigo-100/50" },
  { icon: Zap, label: "Električni romobili", color: "from-yellow-50 to-yellow-100/50" },
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
            <a
              key={cat.label}
              href="#"
              className={`group bg-gradient-to-br ${cat.color} rounded-lg p-6 flex flex-col items-center gap-4 hover:shadow-md transition-all duration-300 border border-border/50`}
            >
              <cat.icon className="w-14 h-14 text-foreground/70 group-hover:text-primary transition-colors" />
              <span className="text-sm font-semibold text-center">{cat.label}</span>
              <span className="text-xs text-primary font-medium border border-primary rounded px-2 py-0.5 opacity-0 group-hover:opacity-100 transition-opacity">
                Saznaj više
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCategories;
