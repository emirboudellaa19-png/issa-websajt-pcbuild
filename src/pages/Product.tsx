import { useParams, Link } from "react-router-dom";
import { categories } from "@/data/categoryProducts";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { ShoppingCart, Truck, Shield, RotateCcw } from "lucide-react";

const Product = () => {
  const { slug } = useParams<{ slug: string }>();

  let product = undefined;
  let parentCategory = undefined;
  for (const cat of categories) {
    const found = cat.products.find((p) => p.slug === slug);
    if (found) {
      product = found;
      parentCategory = cat;
      break;
    }
  }

  if (!product || !parentCategory) {
    return (
      <div className="min-h-screen flex flex-col">
        <TopBar />
        <Header />
        <NavBar />
        <main className="flex-1 container py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Proizvod nije pronađen</h1>
          <Link to="/" className="text-primary hover:underline">← Nazad na početnu</Link>
        </main>
        <Footer />
      </div>
    );
  }

  const savings = product.oldPrice ? (product.oldPrice - product.price).toFixed(2) : null;

  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />
      <NavBar />
      <main className="flex-1">
        <div className="container py-8">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground mb-6">
            <Link to="/" className="hover:text-primary">Početna</Link>
            <span>/</span>
            <Link to={`/category/${parentCategory.slug}`} className="hover:text-primary">{parentCategory.label}</Link>
            <span>/</span>
            <span className="text-foreground font-medium">{product.name}</span>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {/* Product image placeholder */}
            <div className="bg-muted rounded-lg aspect-square flex items-center justify-center">
              <ShoppingCart className="w-24 h-24 text-muted-foreground/20" />
            </div>

            {/* Product info */}
            <div>
              {product.discount && (
                <span className="inline-block bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded mb-4">
                  {product.discount}
                </span>
              )}
              <h1 className="text-2xl md:text-3xl font-bold mb-4">{product.name}</h1>
              <p className="text-muted-foreground mb-6">{product.description}</p>

              <div className="flex items-baseline gap-3 mb-2">
                {product.oldPrice && (
                  <span className="text-xl text-muted-foreground line-through">{product.oldPrice.toFixed(2)} KM</span>
                )}
                <span className="text-3xl font-black text-primary">{product.price.toFixed(2)} KM</span>
              </div>
              {savings && (
                <p className="text-sm text-primary font-medium mb-6">Ušteda: {savings} KM</p>
              )}

              <button className="w-full md:w-auto bg-primary text-primary-foreground font-bold py-3 px-10 rounded-lg hover:bg-primary/90 transition-colors flex items-center gap-2 justify-center">
                <ShoppingCart className="w-5 h-5" />
                Dodaj u korpu
              </button>

              <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t">
                <div className="flex flex-col items-center gap-2 text-center">
                  <Truck className="w-6 h-6 text-primary" />
                  <span className="text-xs text-muted-foreground">Besplatna dostava</span>
                </div>
                <div className="flex flex-col items-center gap-2 text-center">
                  <Shield className="w-6 h-6 text-primary" />
                  <span className="text-xs text-muted-foreground">Garancija 24 mj.</span>
                </div>
                <div className="flex flex-col items-center gap-2 text-center">
                  <RotateCcw className="w-6 h-6 text-primary" />
                  <span className="text-xs text-muted-foreground">Povrat 14 dana</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Product;
