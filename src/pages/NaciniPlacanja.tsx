import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { CreditCard } from "lucide-react";

const NaciniPlacanja = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />
      <NavBar />
      <main className="flex-1">
        <div className="container py-10">
          <div className="flex items-center gap-3 mb-6">
            <CreditCard className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold">Načini plaćanja</h1>
          </div>
          <p className="text-muted-foreground mb-8">Odaberite način plaćanja koji vam najviše odgovara.</p>
          <div className="space-y-4">
            {[
              { method: "Gotovina", desc: "Plaćanje gotovinom prilikom preuzimanja ili u našoj poslovnici." },
              { method: "Kartica", desc: "Visa, Mastercard, American Express — sigurno online plaćanje." },
              { method: "Virman / uplata na račun", desc: "Plaćanje putem bankovnog transfera prije isporuke." },
              { method: "Kupovina na rate", desc: "Plaćanje u ratama putem kreditnih kartica ili ugovora." },
              { method: "Pouzeće", desc: "Plaćanje kuriru prilikom dostave na vašu adresu." },
            ].map((p) => (
              <div key={p.method} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg mb-1">{p.method}</h3>
                <p className="text-muted-foreground text-sm">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NaciniPlacanja;
