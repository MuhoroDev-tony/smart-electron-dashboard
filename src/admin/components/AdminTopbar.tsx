
import { Button } from "@/components/ui/button";
import { useTheme } from "@/components/theme-provider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Bell,
  Moon,
  Search,
  Sun,
  User,
  Settings,
  LogOut,
  Mail,
  HelpCircle,
  Plus,
  Github,
  Menu
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";

interface AdminTopbarProps {
  onMenuClick?: () => void;
}

export function AdminTopbar({ onMenuClick }: AdminTopbarProps) {
  const { theme, setTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={cn(
      "sticky top-0 z-40 flex h-16 items-center justify-between px-4 transition-all",
      scrolled ? "backdrop-blur-lg bg-background/80 border-b shadow-sm" : "bg-background border-b"
    )}>
      <div className="flex items-center">
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden mr-2"
          onClick={onMenuClick}
        >
          <Menu className="h-5 w-5" />
        </Button>
        
        <div className="hidden md:flex relative max-w-sm">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="pl-9 w-[300px] bg-muted/30 border-muted focus-visible:bg-background"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="relative hover:bg-purple-50 dark:hover:bg-slate-800">
              <Bell className="h-5 w-5 text-slate-700 dark:text-slate-300" />
              <Badge className="absolute -top-1 -right-1 w-4 h-4 p-0 flex items-center justify-center text-[10px] bg-purple-600">
                4
              </Badge>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-80">
            <DropdownMenuLabel>Notifications</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <div className="max-h-[300px] overflow-y-auto">
              {[
                { title: "New order received", time: "2 min ago", icon: "💰" },
                { title: "Product almost out of stock", time: "1 hour ago", icon: "⚠️" },
                { title: "New user signed up", time: "3 hours ago", icon: "👤" },
                { title: "Monthly report available", time: "5 hours ago", icon: "📊" },
              ].map((notification, index) => (
                <DropdownMenuItem key={index} className="cursor-pointer p-3 focus:bg-purple-50 dark:focus:bg-slate-800">
                  <div className="flex items-start gap-3">
                    <div className="text-xl">{notification.icon}</div>
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-none">{notification.title}</p>
                      <p className="text-xs text-muted-foreground">{notification.time}</p>
                    </div>
                  </div>
                </DropdownMenuItem>
              ))}
            </div>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer justify-center text-center text-sm text-purple-600 dark:text-purple-400 font-medium">
              View all notifications
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button
          variant="ghost"
          size="icon"
          className="hover:bg-purple-50 dark:hover:bg-slate-800"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {theme === "light" ? (
            <Moon className="h-5 w-5 text-slate-700 dark:text-slate-300" />
          ) : (
            <Sun className="h-5 w-5 text-slate-700 dark:text-slate-300" />
          )}
        </Button>

        <Button variant="ghost" size="icon" className="hover:bg-purple-50 dark:hover:bg-slate-800">
          <HelpCircle className="h-5 w-5 text-slate-700 dark:text-slate-300" />
        </Button>

        <Separator orientation="vertical" className="h-6" />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="rounded-full h-9 w-9 border-2 border-purple-200 dark:border-slate-700 p-0 ring-purple-400 hover:bg-purple-50 dark:hover:bg-slate-800">
              <img 
                src="https://ui-avatars.com/api/?name=Admin+User&background=8b5cf6&color=fff" 
                alt="User" 
                className="rounded-full"
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-56">
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">Admin User</p>
                <p className="text-xs leading-none text-muted-foreground">
                  admin@example.com
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="gap-2">
              <User className="h-4 w-4" />
              Profile
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-2">
              <Settings className="h-4 w-4" />
              Settings
            </DropdownMenuItem>
            <DropdownMenuItem className="gap-2">
              <Github className="h-4 w-4" />
              GitHub
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="gap-2 text-red-600 dark:text-red-400">
              <LogOut className="h-4 w-4" />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>

        <Button variant="default" size="sm" className="hidden md:flex bg-purple-600 hover:bg-purple-700">
          <Plus className="mr-2 h-4 w-4" />
          New Project
        </Button>
      </div>
    </div>
  );
}
