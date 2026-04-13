import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { CreditCard } from "lucide-react";

const KupovinaNaRate = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />
      <NavBar />
      <main className="flex-1">
        <div className="container py-10">
          <div className="flex items-center gap-3 mb-6">
            <CreditCard className="w-8 h-8 text-primary" />
            <h1 className="text-3xl font-bold">Kupovina na rate</h1>
          </div>
          <p className="text-muted-foreground mb-8">Kupujte proizvode na rate bez kamate i prilagodite plaćanje vašem budžetu.</p>
          <div className="space-y-6">
            {[
              { months: "3 rate", desc: "Bez kamate za iznose preko 100 KM", interest: "0%" },
              { months: "6 rata", desc: "Bez kamate za iznose preko 300 KM", interest: "0%" },
              { months: "12 rata", desc: "Minimalna kamata za iznose preko 500 KM", interest: "2.5%" },
              { months: "24 rate", desc: "Za iznose preko 1000 KM", interest: "5%" },
            ].map((plan) => (
              <div key={plan.months} className="border rounded-lg p-6 flex items-center justify-between hover:shadow-md transition-shadow">
                <div>
                  <h3 className="font-semibold text-lg">{plan.months}</h3>
                  <p className="text-muted-foreground text-sm">{plan.desc}</p>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-bold text-primary">{plan.interest}</span>
                  <p className="text-xs text-muted-foreground">kamata</p>
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

export default KupovinaNaRate;
