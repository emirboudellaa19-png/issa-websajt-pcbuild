import { Facebook, Instagram, Youtube } from "lucide-react";

const TopBar = () => {
  const links = [
    "Kako naručiti?",
    "Zahtjev za servis",
    "Program lojalnosti",
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
            <a href="#" aria-label="Facebook" className="w-7 h-7 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
              <Facebook className="w-3.5 h-3.5" />
            </a>
            <a href="#" aria-label="Instagram" className="w-7 h-7 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
              <Instagram className="w-3.5 h-3.5" />
            </a>
            <a href="#" aria-label="YouTube" className="w-7 h-7 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
              <Youtube className="w-3.5 h-3.5" />
            </a>
            <a href="#" aria-label="TikTok" className="w-7 h-7 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors">
              <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor" aria-hidden="true">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.87a8.16 8.16 0 0 0 4.77 1.52V7a4.85 4.85 0 0 1-1.84-.31z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
