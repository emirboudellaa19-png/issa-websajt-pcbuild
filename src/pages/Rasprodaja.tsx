import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Percent } from "lucide-react";

const Rasprodaja = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />
      <NavBar />
      <main className="flex-1">
        <div className="container py-10">
          <div className="flex items-center gap-3 mb-6">
            <Percent className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold">Rasprodaja</h1>
          </div>
          <p className="text-muted-foreground mb-8">Zadnji komadi po najnižim cijenama! Požurite dok traju zalihe.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Stari model laptopa", oldPrice: "1200 KM", newPrice: "799 KM" },
              { name: "Bluetooth zvučnik", oldPrice: "120 KM", newPrice: "69 KM" },
              { name: "Wireless miš", oldPrice: "80 KM", newPrice: "39 KM" },
              { name: "USBHub 4-port", oldPrice: "50 KM", newPrice: "25 KM" },
              { name: "Webcam HD", oldPrice: "150 KM", newPrice: "89 KM" },
              { name: "LED traka 5m", oldPrice: "60 KM", newPrice: "29 KM" },
            ].map((item) => (
              <div key={item.name} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <h3 className="font-semibold text-lg mb-2">{item.name}</h3>
                <div className="flex items-center gap-3">
                  <span className="text-muted-foreground line-through text-sm">{item.oldPrice}</span>
                  <span className="text-primary font-bold text-xl">{item.newPrice}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Rasprodaja;
