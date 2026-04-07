import TopBar from "@/components/TopBar";
import Header from "@/components/Header";
import NavBar from "@/components/NavBar";
import HeroBanner from "@/components/HeroBanner";
import FeatureBar from "@/components/FeatureBar";
import TopCategories from "@/components/TopCategories";
import ProductsSection from "@/components/ProductsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <TopBar />
      <Header />
      <NavBar />
      <main className="flex-1">
        <div className="container mt-0">
          <div className="flex gap-0">
            {/* Sidebar space reserved by NavBar category dropdown */}
            <div className="hidden lg:block w-[280px] flex-shrink-0" />
            {/* Hero */}
            <div className="flex-1 min-w-0">
              <HeroBanner />
            </div>
          </div>
        </div>
        <FeatureBar />
        <TopCategories />
        <ProductsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
