import { Menu, ChevronRight, Monitor, Gamepad2, Laptop, Smartphone, Tv, Fan, Bike, Refrigerator, LayoutGrid, Home } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const categories = [
  { icon: Monitor, label: "Računari i komponente", slug: "racunari-i-komponente" },
  { icon: Monitor, label: "Oprema za računare", slug: "oprema-za-racunare" },
  { icon: Gamepad2, label: "Gaming i oprema", slug: "gaming-i-oprema" },
  { icon: Laptop, label: "Laptopi i tableti", slug: "laptopi-i-tableti" },
  { icon: Smartphone, label: "Mobiteli i pametni satovi", slug: "mobiteli-i-pametni-satovi" },
  { icon: Tv, label: "Televizori i audio", slug: "televizori-i-audio" },
  { icon: Fan, label: "Hlađenje i grijanje", slug: "hladjenje-i-grijanje" },
  { icon: Bike, label: "Sport i putovanje", slug: "sport-i-putovanje" },
  { icon: Refrigerator, label: "Kućanski aparati", slug: "kucanski-aparati" },
  { icon: LayoutGrid, label: "Ostale kategorije", slug: "ostale-kategorije" },
];

const navLinks = [
  { label: "Akcije u toku", path: "/akcije" },
  { label: "Kupovina na rate", path: "/kupovina-na-rate" },
  { label: "Zatražite ponudu", path: "/zatrazite-ponudu" },
  { label: "Usluge", path: "/usluge" },
  { label: "Rasprodaja", path: "/rasprodaja" },
  { label: "Načini plaćanja", path: "/nacini-placanja" },
  { label: "Dostava", path: "/dostava" },
  { label: "Kontakt", path: "/kontakt" },
];

const NavBar = () => {
  const [showCategories, setShowCategories] = useState(false);

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
                <Link
                  key={cat.label}
                  to={`/category/${cat.slug}`}
                  className="flex items-center gap-3 px-4 py-3 text-sm text-foreground hover:bg-muted transition-colors border-b border-border/50"
                >
                  <cat.icon className="w-5 h-5 text-muted-foreground" />
                  <span className="flex-1">{cat.label}</span>
                  <ChevronRight className="w-4 h-4 text-muted-foreground" />
                </Link>
              ))}
            </div>
          )}
        </div>

        {/* Nav links */}
        <nav className="hidden lg:flex items-center">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.path}
              className="text-nav-foreground text-sm font-medium px-4 py-3 hover:bg-primary-foreground/10 transition-colors whitespace-nowrap"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
