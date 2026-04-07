import { Facebook, Instagram, Youtube } from "lucide-react";

const TopBar = () => {
  const links = [
    "Kako naručiti?",
    "Zahtjev za servis",
    "Program lojalnosti",
    "Blog",
  ];

  return (
    <div className="bg-topbar border-b">
      <div className="container flex items-center justify-between py-1.5 text-sm">
        <div className="hidden md:flex items-center gap-4">
          {/* spacer */}
        </div>
        <div className="flex items-center gap-4 ml-auto">
          {links.map((link) => (
            <a
              key={link}
              href="#"
              className="text-topbar-foreground hover:text-foreground transition-colors"
            >
              {link}
            </a>
          ))}
          <div className="flex items-center gap-2 ml-2">
            <a href="#" className="w-7 h-7 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
              <Facebook className="w-3.5 h-3.5" />
            </a>
            <a href="#" className="w-7 h-7 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a href="#" className="w-7 h-7 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
              <Youtube className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
