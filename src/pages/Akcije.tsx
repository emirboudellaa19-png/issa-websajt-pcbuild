import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Tag } from "lucide-react";

const Akcije = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />
      <NavBar />
      <main className="flex-1">
        <div className="container py-10">
          <div className="flex items-center gap-3 mb-6">
            <Tag className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold">Akcije u toku</h1>
          </div>
          <p className="text-muted-foreground mb-8">Iskoristite naše trenutne akcijske ponude i uštedite na najtraženijim proizvodima.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Gaming laptop akcija", desc: "Popusti do 30% na sve gaming laptope", discount: "-30%" },
              { name: "Pametni telefoni", desc: "Sniženje na odabrane modele telefona", discount: "-25%" },
              { name: "Kućanski aparati", desc: "Posebne cijene na bijelu tehniku", discount: "-20%" },
              { name: "Gaming oprema", desc: "Tastature, miševi i slušalice na akciji", discount: "-15%" },
              { name: "Televizori", desc: "Smart TV modeli po sniženim cijenama", discount: "-20%" },
              { name: "Tableti", desc: "Akcija na sve tablete u ponudi", discount: "-10%" },
            ].map((item) => (
              <div key={item.name} className="border rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-lg">{item.name}</h3>
                  <span className="bg-primary text-primary-foreground text-sm font-bold px-2 py-1 rounded">{item.discount}</span>
                </div>
                <p className="text-muted-foreground text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Akcije;
