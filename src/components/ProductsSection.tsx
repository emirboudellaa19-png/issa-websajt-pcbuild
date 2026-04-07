import ProductCard from "./ProductCard";

const products = [
  { name: "AMD Ryzen 5 5600X Procesor", price: 239.00, oldPrice: 299.00, discount: "Popust -20%" },
  { name: "Kingston 16GB DDR4 3200MHz RAM", price: 45.00, oldPrice: 55.00, discount: "Popust -18%" },
  { name: "Samsung 27\" Curved Monitor FHD 75Hz", price: 329.00, oldPrice: 399.00, discount: "Popust -17%" },
  { name: "Logitech G502 HERO Gaming Miš", price: 69.00, oldPrice: 89.00, discount: "Popust -22%" },
  { name: "ASUS TUF Gaming B550 Matična Ploča", price: 189.00, oldPrice: 219.00, discount: "Popust -14%" },
  { name: "WD Blue 1TB SSD NVMe M.2", price: 99.00, oldPrice: 129.00, discount: "Popust -23%" },
  { name: "Corsair 650W PSU 80+ Bronze", price: 79.00, oldPrice: 99.00, discount: "Popust -20%" },
  { name: "DeepCool AK620 CPU Cooler", price: 59.00, oldPrice: 69.00, discount: "Popust -15%" },
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
            <ProductCard key={product.name} {...product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;
