import { useParams, Link } from "react-router-dom";
import { getCategoryBySlug } from "@/data/categoryProducts";
import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";

const Category = () => {
  const { slug } = useParams<{ slug: string }>();
  const category = slug ? getCategoryBySlug(slug) : undefined;

  if (!category) {
    return (
      <div className="min-h-screen flex flex-col">
        <TopBar />
        <Header />
        <NavBar />
        <main className="flex-1 container py-16 text-center">
          <h1 className="text-3xl font-bold mb-4">Kategorija nije pronađena</h1>
          <Link to="/" className="text-primary hover:underline">← Nazad na početnu</Link>
        </main>
        <Footer />
      </div>
    );
  }

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
            <span className="text-foreground font-medium">{category.label}</span>
          </div>

          <h1 className="text-3xl font-bold mb-2">{category.label}</h1>
          <p className="text-muted-foreground mb-8">{category.description}</p>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {category.products.map((product) => (
              <Link key={product.slug} to={`/product/${product.slug}`}>
                <ProductCard
                  name={product.name}
                  price={product.price}
                  oldPrice={product.oldPrice}
                  discount={product.discount}
                  description={product.description}
                  slug={product.slug}
                />
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Category;
