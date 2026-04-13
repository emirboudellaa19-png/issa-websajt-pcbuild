import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { FileText } from "lucide-react";

const ZatrazitePonudu = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />
      <NavBar />
      <main className="flex-1">
        <div className="container py-10 max-w-2xl">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold">Zatražite ponudu</h1>
          </div>
          <p className="text-muted-foreground mb-8">Popunite formu i dobit ćete personaliziranu ponudu u najkraćem roku.</p>
          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-sm font-medium mb-1">Ime i prezime</label>
              <input className="w-full border rounded-md px-4 py-2 bg-background" placeholder="Vaše ime i prezime" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input className="w-full border rounded-md px-4 py-2 bg-background" type="email" placeholder="vas@email.com" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Telefon</label>
              <input className="w-full border rounded-md px-4 py-2 bg-background" placeholder="+387 XX XXX XXX" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Poruka</label>
              <textarea className="w-full border rounded-md px-4 py-2 bg-background min-h-[120px]" placeholder="Opišite šta vas zanima..." />
            </div>
            <button className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors">
              Pošaljite zahtjev
            </button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ZatrazitePonudu;
