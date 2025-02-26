
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/theme-provider";
import ClientDashboard from "./pages/ClientDashboard";
import PhonesPage from "./pages/category/PhonesPage";
import LaptopsPage from "./pages/category/LaptopsPage";
import HeadphonesPage from "./pages/category/HeadphonesPage";
import TvsPage from "./pages/category/TvsPage";
import CartPage from "./pages/CartPage";
import NotFound from "./pages/NotFound";

// Admin imports
import AdminLayout from "./admin/layouts/AdminLayout";
import LoginPage from "./admin/pages/LoginPage";
import DashboardPage from "./admin/pages/DashboardPage";
import ProductsPage from "./admin/pages/ProductsPage";
import OrdersPage from "./admin/pages/OrdersPage";
import UsersPage from "./admin/pages/UsersPage";
import SettingsPage from "./admin/pages/SettingsPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Client Routes */}
            <Route path="/" element={<ClientDashboard />} />
            <Route path="/category/phones" element={<PhonesPage />} />
            <Route path="/category/laptops" element={<LaptopsPage />} />
            <Route path="/category/headphones" element={<HeadphonesPage />} />
            <Route path="/category/tvs" element={<TvsPage />} />
            <Route path="/cart" element={<CartPage />} />
            
            {/* Admin Routes */}
            <Route path="/admin/login" element={<LoginPage />} />
            <Route path="/admin" element={<AdminLayout />}>
              <Route path="dashboard" element={<DashboardPage />} />
              <Route path="products" element={<ProductsPage />} />
              <Route path="orders" element={<OrdersPage />} />
              <Route path="users" element={<UsersPage />} />
              <Route path="settings" element={<SettingsPage />} />
            </Route>
            
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
