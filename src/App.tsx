import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Category from "./pages/Category.tsx";
import Product from "./pages/Product.tsx";
import Akcije from "./pages/Akcije.tsx";
import KupovinaNaRate from "./pages/KupovinaNaRate.tsx";
import ZatrazitePonudu from "./pages/ZatrazitePonudu.tsx";
import Usluge from "./pages/Usluge.tsx";
import Rasprodaja from "./pages/Rasprodaja.tsx";
import NaciniPlacanja from "./pages/NaciniPlacanja.tsx";
import Dostava from "./pages/Dostava.tsx";
import Kontakt from "./pages/Kontakt.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/category/:slug" element={<Category />} />
          <Route path="/product/:slug" element={<Product />} />
          <Route path="/akcije" element={<Akcije />} />
          <Route path="/kupovina-na-rate" element={<KupovinaNaRate />} />
          <Route path="/zatrazite-ponudu" element={<ZatrazitePonudu />} />
          <Route path="/usluge" element={<Usluge />} />
          <Route path="/rasprodaja" element={<Rasprodaja />} />
          <Route path="/nacini-placanja" element={<NaciniPlacanja />} />
          <Route path="/dostava" element={<Dostava />} />
          <Route path="/kontakt" element={<Kontakt />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
