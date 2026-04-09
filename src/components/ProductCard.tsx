import { ShoppingCart } from "lucide-react";
import { productImageMap } from "@/data/productImages";

interface ProductCardProps {
  name: string;
  price: number;
  oldPrice?: number;
  discount?: string;
  image?: string;
  description?: string;
  slug?: string;
}

const ProductCard = ({ name, price, oldPrice, discount, slug }: ProductCardProps) => {
  const imageSrc = slug ? productImageMap[slug] : undefined;

  return (
    <div className="group bg-card border rounded-lg p-4 hover:shadow-lg transition-all duration-300 relative">
      {discount && (
        <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded z-10">
          {discount}
        </span>
      )}
      <div className="aspect-square bg-muted rounded flex items-center justify-center mb-4 overflow-hidden">
        {imageSrc ? (
          <img src={imageSrc} alt={name} loading="lazy" width={512} height={512} className="w-full h-full object-contain" />
        ) : (
          <ShoppingCart className="w-12 h-12 text-muted-foreground/30" />
        )}
      </div>
      <h3 className="text-sm font-medium mb-2 line-clamp-2 min-h-[2.5rem]">{name}</h3>
      <div className="flex items-center gap-2">
        {oldPrice && (
          <span className="text-sm text-muted-foreground line-through">{oldPrice.toFixed(2)} KM</span>
        )}
        <span className="text-lg font-bold text-primary">{price.toFixed(2)} KM</span>
      </div>
      <button className="mt-3 w-full bg-primary text-primary-foreground text-sm font-medium py-2 rounded hover:bg-primary/90 transition-colors opacity-0 group-hover:opacity-100">
        Dodaj u korpu
      </button>
    </div>
  );
};

export default ProductCard;
