
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ClientDashboard from "./pages/ClientDashboard";
import PhonesPage from "./pages/category/PhonesPage";
import LaptopsPage from "./pages/category/LaptopsPage";
import HeadphonesPage from "./pages/category/HeadphonesPage";
import TvsPage from "./pages/category/TvsPage";
import CartPage from "./pages/CartPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ClientDashboard />} />
          <Route path="/category/phones" element={<PhonesPage />} />
          <Route path="/category/laptops" element={<LaptopsPage />} />
          <Route path="/category/headphones" element={<HeadphonesPage />} />
          <Route path="/category/tvs" element={<TvsPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
