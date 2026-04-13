import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Wrench } from "lucide-react";

const Usluge = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />
      <NavBar />
      <main className="flex-1">
        <div className="container py-10">
          <div className="flex items-center gap-3 mb-6">
            <Wrench className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold">Usluge</h1>
          </div>
          <p className="text-muted-foreground mb-8">Nudimo širok spektar usluga za naše klijente.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Servis računara", desc: "Profesionalni servis i popravka svih vrsta računara i laptopa." },
              { title: "Instalacija softvera", desc: "Instalacija operativnih sistema, drajvera i potrebnih programa." },
              { title: "Mrežna rješenja", desc: "Postavljanje i konfiguracija kućnih i poslovnih mreža." },
              { title: "Nadogradnja hardvera", desc: "Upgrade RAM-a, SSD-a, grafičke kartice i drugih komponenti." },
              { title: "Konsultacije", desc: "Savjetovanje pri odabiru opreme za vaše potrebe." },
              { title: "Garancijski servis", desc: "Brz i pouzdan garancijski servis za sve kupljene proizvode." },
            ].map((s) => (
              <div key={s.title} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                <h3 className="font-semibold text-lg mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Usluge;
