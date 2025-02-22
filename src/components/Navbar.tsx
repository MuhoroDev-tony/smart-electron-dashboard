
import { motion } from "framer-motion";
import { Menu, Search, ShoppingCart, User, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b"
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2 font-semibold text-xl">
            <ShoppingCart className="h-6 w-6" />
            Shopcart
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link to="/category/phones" className="text-sm hover:text-primary">Phones</Link>
            <Link to="/category/laptops" className="text-sm hover:text-primary">Laptops</Link>
            <Link to="/category/headphones" className="text-sm hover:text-primary">Headphones</Link>
            <Link to="/category/tvs" className="text-sm hover:text-primary">TVs</Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex relative max-w-sm">
              <Input 
                type="search"
                placeholder="Search products..."
                className="pr-8"
              />
              <Search className="absolute right-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
            <Button size="icon" variant="ghost">
              <ShoppingCart className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="ghost">
              <User className="h-5 w-5" />
            </Button>
            <Button 
              size="icon" 
              variant="ghost" 
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden border-b bg-white"
        >
          <div className="container mx-auto px-4 py-4 space-y-4">
            <div className="flex items-center">
              <Input 
                type="search"
                placeholder="Search products..."
                className="w-full"
              />
            </div>
            <nav className="flex flex-col gap-2">
              <Link 
                to="/category/phones" 
                className="px-4 py-2 hover:bg-gray-100 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Phones
              </Link>
              <Link 
                to="/category/laptops" 
                className="px-4 py-2 hover:bg-gray-100 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Laptops
              </Link>
              <Link 
                to="/category/headphones" 
                className="px-4 py-2 hover:bg-gray-100 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Headphones
              </Link>
              <Link 
                to="/category/tvs" 
                className="px-4 py-2 hover:bg-gray-100 rounded-md"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                TVs
              </Link>
            </nav>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;
