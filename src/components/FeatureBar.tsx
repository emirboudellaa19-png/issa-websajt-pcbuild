import { Tag, CreditCard, Truck, Headphones } from "lucide-react";

const features = [
  { icon: Tag, label: "Akcije u toku" },
  { icon: CreditCard, label: "Kupovina na rate" },
  { icon: Truck, label: "Dostava u cijeloj BiH" },
  { icon: Headphones, label: "Korisnička podrška" },
];

const FeatureBar = () => {
  return (
    <div className="py-8 border-b">
      <div className="container grid grid-cols-2 md:grid-cols-4 gap-6">
        {features.map((f) => (
          <div key={f.label} className="flex flex-col items-center gap-2 text-center">
            <f.icon className="w-10 h-10 text-primary" />
            <span className="text-sm font-medium">{f.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureBar;
