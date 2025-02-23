
import { useState } from "react";
import { AdminSidebar } from "../components/AdminSidebar";
import { AdminTopbar } from "../components/AdminTopbar";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Outlet } from "react-router-dom";

export default function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="flex h-screen w-full">
      {/* Sidebar - hidden on mobile, shown with overlay */}
      <div className={`fixed inset-y-0 z-50 md:relative md:flex ${sidebarOpen ? "flex" : "hidden"}`}>
        <AdminSidebar onClose={() => setSidebarOpen(false)} />
        {/* Overlay for mobile */}
        <div 
          className={`fixed inset-0 bg-background/80 backdrop-blur-sm md:hidden ${sidebarOpen ? "block" : "hidden"}`}
          onClick={() => setSidebarOpen(false)}
        />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <div className="flex items-center gap-2 p-4 md:hidden">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setSidebarOpen(!sidebarOpen)}
          >
            <Menu className="h-6 w-6" />
          </Button>
        </div>
        <AdminTopbar />
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
