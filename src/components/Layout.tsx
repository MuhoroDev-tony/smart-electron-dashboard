
import { Outlet } from "react-router-dom";
import AppSidebar from "./AppSidebar";
import { SidebarTrigger } from "./ui/sidebar";

const Layout = () => {
  return (
    <div className="min-h-screen flex w-full">
      <AppSidebar />
      <main className="flex-1 p-6 lg:px-8">
        <SidebarTrigger />
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
