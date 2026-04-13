import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Kontakt = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />
      <NavBar />
      <main className="flex-1">
        <div className="container py-10">
          <h1 className="text-3xl font-bold mb-8">Kontakt</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <h2 className="text-xl font-semibold mb-4">Kontakt informacije</h2>
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">Telefon</p>
                  <p className="text-muted-foreground">032 221 654</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">info@issawebsajt.ba</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">Adresa</p>
                  <p className="text-muted-foreground">Ulica Zmaja od Bosne 10, Zenica 72000</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">Radno vrijeme</p>
                  <p className="text-muted-foreground">Pon - Pet: 08:00 - 17:00</p>
                  <p className="text-muted-foreground">Sub: 09:00 - 14:00</p>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-xl font-semibold mb-4">Pošaljite poruku</h2>
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <input className="w-full border rounded-md px-4 py-2 bg-background" placeholder="Ime i prezime" />
                <input className="w-full border rounded-md px-4 py-2 bg-background" type="email" placeholder="Email" />
                <input className="w-full border rounded-md px-4 py-2 bg-background" placeholder="Predmet" />
                <textarea className="w-full border rounded-md px-4 py-2 bg-background min-h-[120px]" placeholder="Vaša poruka..." />
                <button className="bg-primary text-primary-foreground px-6 py-3 rounded-md font-medium hover:bg-primary/90 transition-colors">
                  Pošaljite
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Kontakt;
