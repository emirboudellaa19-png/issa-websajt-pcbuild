import { Menu, ChevronRight, Monitor, Gamepad2, Laptop, Smartphone, Tv, Fan, Bike, Refrigerator, LayoutGrid } from "lucide-react";
import { useState } from "react";

const categories = [
  { icon: Monitor, label: "Računari i komponente" },
  { icon: Monitor, label: "Oprema za računare" },
  { icon: Gamepad2, label: "Gaming i oprema" },
  { icon: Laptop, label: "Laptopi i tableti" },
  { icon: Smartphone, label: "Mobiteli i pametni satovi" },
  { icon: Tv, label: "Televizori i audio" },
  { icon: Fan, label: "Hlađenje i grijanje" },
  { icon: Bike, label: "Sport i putovanje" },
  { icon: Refrigerator, label: "Kućanski aparati" },
  { icon: LayoutGrid, label: "Ostale kategorije" },
];

const navLinks = [
  "Akcije u toku",
  "Kupovina na rate",
  "Zatražite ponudu",
  "Usluge",
  "Rasprodaja",
  "Načini plaćanja",
  "Dostava",
  "Kontakt",
];

const NavBar = () => {
  const [showCategories, setShowCategories] = useState(true);

  return (
    <div className="bg-nav">
      <div className="container flex items-stretch">
        {/* Categories dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowCategories(!showCategories)}
            className="flex items-center gap-2 bg-primary text-primary-foreground font-medium px-5 py-3 hover:bg-primary/90 transition-colors min-w-[250px]"
          >
            <Menu className="w-5 h-5" />
            <span>Sve Kategorije</span>
          </button>

          {showCategories && (
            <div className="absolute top-full left-0 w-[280px] bg-background shadow-lg border z-50">
              {categories.map((cat) => (
                <a
                  key={cat.label}
                  href="#"
                  className="flex items-center gap-3 px-4 py-3 text-sm text-foreground hover:bg-muted transition-colors border-b border-border/50"
                >
                  <cat.icon className="w-5 h-5 text-muted-foreground" />
                  <span className="flex-1">{cat.label}</span>
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Nav links */}
        <nav className="hidden lg:flex items-center">
          {navLinks.map((link) => (
            <a
              key={link}
              href="#"
              className="text-nav-foreground text-sm font-medium px-4 py-3 hover:bg-primary-foreground/10 transition-colors whitespace-nowrap"
            >
              {link}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
