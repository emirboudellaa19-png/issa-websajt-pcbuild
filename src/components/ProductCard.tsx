import { ShoppingCart } from "lucide-react";

interface ProductCardProps {
  name: string;
  price: number;
  oldPrice?: number;
  discount?: string;
  image?: string;
}

const ProductCard = ({ name, price, oldPrice, discount }: ProductCardProps) => {
  return (
    <div className="group bg-card border rounded-lg p-4 hover:shadow-lg transition-all duration-300 relative">
      {discount && (
        <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded">
          {discount}
        </span>
      )}
      <div className="aspect-square bg-muted rounded flex items-center justify-center mb-4">
        <ShoppingCart className="w-12 h-12 text-muted-foreground/30" />
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
