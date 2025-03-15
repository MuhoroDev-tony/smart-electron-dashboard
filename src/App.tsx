
import { Routes, Route } from "react-router-dom";
import ClientDashboard from "@/pages/ClientDashboard";
import AdminDashboard from "@/pages/AdminDashboard";
import DashboardPage from "@/admin/pages/DashboardPage";
import ProductsPage from "@/admin/pages/ProductsPage";
import UsersPage from "@/admin/pages/UsersPage";
import OrdersPage from "@/admin/pages/OrdersPage";
import SettingsPage from "@/admin/pages/SettingsPage";
import LoginPage from "@/admin/pages/LoginPage";
import PhonesPage from "@/pages/category/PhonesPage";
import LaptopsPage from "@/pages/category/LaptopsPage";
import HeadphonesPage from "@/pages/category/HeadphonesPage";
import TvsPage from "@/pages/category/TvsPage";
import CartPage from "@/pages/CartPage";
import AnalyticsDashboard from "@/pages/AnalyticsDashboard";
import NotFound from "@/pages/NotFound";
import { Toaster } from "@/components/ui/sonner";
import AdminLayout from "@/admin/layouts/AdminLayout";
import { ThemeProvider } from "@/components/theme-provider";
import "./App.css";

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<ClientDashboard />} />
        <Route path="/category/phones" element={<PhonesPage />} />
        <Route path="/category/laptops" element={<LaptopsPage />} />
        <Route path="/category/headphones" element={<HeadphonesPage />} />
        <Route path="/category/tvs" element={<TvsPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/analytics" element={<AnalyticsDashboard />} />

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboard />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="users" element={<UsersPage />} />
          <Route path="orders" element={<OrdersPage />} />
          <Route path="settings" element={<SettingsPage />} />
        </Route>

        <Route path="/admin/login" element={<LoginPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster position="top-right" />
    </ThemeProvider>
  );
}

export default App;
