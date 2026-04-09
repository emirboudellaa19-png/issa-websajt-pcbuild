import ProductCard from "./ProductCard";
import { Link } from "react-router-dom";

const products = [
  { name: "AMD Ryzen 5 5600X Procesor", price: 239.00, oldPrice: 299.00, discount: "Popust -20%", slug: "amd-ryzen-5-5600x" },
  { name: "Kingston 16GB DDR4 3200MHz RAM", price: 45.00, oldPrice: 55.00, discount: "Popust -18%", slug: "kingston-16gb-ddr4" },
  { name: "Samsung 27\" Curved Monitor FHD 75Hz", price: 329.00, oldPrice: 399.00, discount: "Popust -17%", slug: "samsung-55-qled" },
  { name: "Logitech G502 HERO Gaming Miš", price: 69.00, oldPrice: 89.00, discount: "Popust -22%", slug: "logitech-g502" },
  { name: "ASUS TUF Gaming B550 Matična Ploča", price: 189.00, oldPrice: 219.00, discount: "Popust -14%", slug: "asus-tuf-b550" },
  { name: "WD Blue 1TB SSD NVMe M.2", price: 99.00, oldPrice: 129.00, discount: "Popust -23%", slug: "wd-blue-1tb-ssd" },
  { name: "Corsair 650W PSU 80+ Bronze", price: 79.00, oldPrice: 99.00, discount: "Popust -20%", slug: "corsair-650w-psu" },
  { name: "DeepCool AK620 CPU Cooler", price: 59.00, oldPrice: 69.00, discount: "Popust -15%", slug: "deepcool-ak620" },
];

const ProductsSection = () => {
  return (
    <section className="py-10 bg-muted/30">
      <div className="container">
        <h2 className="text-2xl font-bold text-center mb-8 uppercase tracking-wide">
          Akcije u toku
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {products.map((product) => (
            <Link key={product.name} to={`/product/${product.slug}`}>
              <ProductCard name={product.name} price={product.price} oldPrice={product.oldPrice} discount={product.discount} slug={product.slug} />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
