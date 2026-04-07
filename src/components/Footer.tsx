import { Phone, Mail, MapPin, Facebook, Instagram, Youtube } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background/80">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-xl font-black mb-4">
              <span className="text-primary">ISSA</span>
              <span className="text-background"> WEBSAJT</span>
            </h3>
            <p className="text-sm leading-relaxed text-background/60">
              Vaš centar za tehniku! Nudimo širok asortiman računarske opreme, gaming periferija, mobilnih uređaja i kućanskih aparata.
            </p>
            <div className="flex gap-3 mt-4">
              <a href="#" className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-background/10 flex items-center justify-center hover:bg-primary transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-bold mb-4 text-background">Brzi linkovi</h4>
            <ul className="space-y-2 text-sm">
              {["O nama", "Akcije u toku", "Kupovina na rate", "Dostava", "Načini plaćanja", "Program lojalnosti"].map((l) => (
                <li key={l}>
                  <a href="#" className="hover:text-primary transition-colors">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h4 className="font-bold mb-4 text-background">Kategorije</h4>
            <ul className="space-y-2 text-sm">
              {[
                { label: "Računari", slug: "racunari-i-komponente" },
                { label: "Laptopi", slug: "laptopi-i-tableti" },
                { label: "Mobiteli", slug: "mobiteli-i-pametni-satovi" },
                { label: "Gaming", slug: "gaming-i-oprema" },
                { label: "Televizori", slug: "televizori-i-audio" },
                { label: "Kućanski aparati", slug: "kucanski-aparati" },
              ].map((l) => (
                <li key={l.label}>
                  <Link to={`/category/${l.slug}`} className="hover:text-primary transition-colors">{l.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4 text-background">Kontakt</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>032 221-654</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>info@issawebsajt.ba</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span>Zenica, Bosna i Hercegovina</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-background/10 py-4">
        <div className="container text-center text-xs text-background/40">
          © 2024 ISSA WEBSAJT. Sva prava zadržana.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
