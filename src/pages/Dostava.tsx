import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Truck } from "lucide-react";

const Dostava = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />
      <NavBar />
      <main className="flex-1">
        <div className="container py-10">
          <div className="flex items-center gap-3 mb-6">
            <Truck className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold">Dostava</h1>
          </div>
          <p className="text-muted-foreground mb-8">Brza i pouzdana dostava na teritoriji cijele Bosne i Hercegovine.</p>
          <div className="space-y-4">
            {[
              { zone: "Zenica i okolina", time: "1 radni dan", price: "Besplatno za narudžbe preko 50 KM" },
              { zone: "Sarajevo, Tuzla, Mostar", time: "1-2 radna dana", price: "7 KM" },
              { zone: "Ostali gradovi BiH", time: "2-3 radna dana", price: "10 KM" },
              { zone: "Ruralna područja", time: "3-5 radnih dana", price: "12 KM" },
            ].map((d) => (
              <div key={d.zone} className="border rounded-lg p-6 flex flex-col md:flex-row md:items-center md:justify-between hover:shadow-md transition-shadow">
                <div>
                  <h3 className="font-semibold text-lg">{d.zone}</h3>
                  <p className="text-muted-foreground text-sm">{d.time}</p>
                </div>
                <span className="text-primary font-bold mt-2 md:mt-0">{d.price}</span>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dostava;
