
import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  LogOut,
  Settings,
  X,
  ChevronRight,
  ChevronLeft,
  LayoutDashboard,
  PackageOpen,
  CreditCard,
  UserCog,
  ShoppingCart
} from "lucide-react";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

const mainNavItems = [
  {
    title: "Dashboard",
    href: "/admin/dashboard",
    icon: LayoutDashboard,
    badge: "",
  },
  {
    title: "Products",
    href: "/admin/products",
    icon: PackageOpen,
    badge: "New",
  },
  {
    title: "Orders",
    href: "/admin/orders",
    icon: CreditCard,
    badge: "5",
  },
  {
    title: "Users",
    href: "/admin/users",
    icon: UserCog,
    badge: "",
  },
  {
    title: "Settings",
    href: "/admin/settings",
    icon: Settings,
    badge: "",
  },
];

interface AdminSidebarProps {
  onClose?: () => void;
}

export function AdminSidebar({ onClose }: AdminSidebarProps) {
  const location = useLocation();
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={cn(
      "relative flex h-screen flex-col border-r bg-background shadow-sm transition-all duration-300",
      collapsed ? "w-20" : "w-72"
    )}>
      <div className="flex items-center justify-between p-4 border-b">
        <Link to="/admin/dashboard" className={cn(
          "flex items-center gap-2 font-semibold",
          collapsed ? "justify-center" : "justify-start"
        )}>
          <ShoppingCart className={cn("h-6 w-6 text-purple-500")} />
          {!collapsed && <span className="text-xl bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">Admin</span>}
        </Link>
        <div className="flex items-center">
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full hover:bg-purple-50"
            onClick={toggleCollapse}
          >
            {collapsed ? (
              <ChevronRight className="h-5 w-5 text-purple-500" />
            ) : (
              <ChevronLeft className="h-5 w-5 text-purple-500" />
            )}
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={onClose}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>
      </div>
      
      <ScrollArea className="flex-1 px-4 py-6">
        <nav className="flex flex-col gap-2">
          {mainNavItems.map((item) => (
            <TooltipProvider key={item.href} delayDuration={100}>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    variant={location.pathname === item.href ? "default" : "ghost"}
                    className={cn(
                      "relative w-full justify-start gap-2 transition-all",
                      location.pathname === item.href 
                        ? "bg-purple-100 text-purple-700" 
                        : "hover:bg-purple-50",
                      collapsed ? "justify-center" : "justify-start"
                    )}
                    asChild
                  >
                    <Link to={item.href}>
                      <item.icon className={cn(
                        "h-4 w-4",
                        location.pathname === item.href 
                          ? "text-purple-600" 
                          : "text-muted-foreground"
                      )} />
                      {!collapsed && <span>{item.title}</span>}
                      {!collapsed && item.badge && (
                        <Badge variant="outline" className="ml-auto text-xs py-0 bg-purple-100 text-purple-700">
                          {item.badge}
                        </Badge>
                      )}
                      {collapsed && item.badge && (
                        <Badge className="absolute top-1 right-1 w-4 h-4 p-0 flex items-center justify-center text-[10px] bg-purple-600">
                          {item.badge}
                        </Badge>
                      )}
                    </Link>
                  </Button>
                </TooltipTrigger>
                {collapsed && (
                  <TooltipContent side="right" className="font-medium">
                    {item.title}
                  </TooltipContent>
                )}
              </Tooltip>
            </TooltipProvider>
          ))}
        </nav>
      </ScrollArea>

      <div className={cn(
        "p-4 border-t flex flex-col",
        collapsed ? "items-center" : "items-stretch"
      )}>
        <TooltipProvider delayDuration={100}>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="ghost" size="icon" className="rounded-full hover:bg-purple-50">
                <LogOut className="h-4 w-4 text-purple-600" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side={collapsed ? "right" : "top"}>
              Logout
            </TooltipContent>
          </Tooltip>
        </TooltipProvider>
        
        {!collapsed && (
          <>
            <Separator className="my-4" />
            <div className="rounded-md p-3 bg-purple-50">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-purple-200 flex items-center justify-center">
                  <User className="h-4 w-4 text-purple-700" />
                </div>
                <div className="space-y-1">
                  <p className="text-sm font-medium">Admin User</p>
                  <p className="text-xs text-muted-foreground">admin@example.com</p>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

const User = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);
