import { Search, Phone, User, ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-background py-4">
      <div className="container flex items-center gap-6">
        {/* Logo */}
        <Link to="/" className="flex-shrink-0">
          <span className="text-3xl font-black tracking-tight">
            <span className="text-primary">ISSA</span>
            <span className="text-foreground"> WEBSAJT</span>
          </span>
        </Link>

        {/* Search */}
        <div className="flex-1 max-w-xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Unesite pojam za pretragu..."
              className="w-full border rounded-lg py-2.5 px-4 pr-12 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
            />
            <button className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-primary">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-6">
          <a href="tel:032221654" className="flex items-center gap-2 text-sm">
            <Phone className="w-5 h-5 text-primary" />
            <span className="font-medium">032 221-654</span>
          </a>
          <a href="#" className="flex items-center gap-2 text-sm hover:text-primary transition-colors">
            <User className="w-5 h-5" />
            <span>Prijava / registracija</span>
          </a>
          <a href="#" className="flex items-center gap-2 text-sm relative">
            <ShoppingCart className="w-5 h-5" />
            <span className="absolute -top-2 -right-4 bg-primary text-primary-foreground text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">0</span>
            <span className="ml-3 font-medium">0 KM</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
