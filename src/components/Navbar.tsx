
import { motion } from "framer-motion";
import { Menu, Search, User, X } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { useState } from "react";
import { CartIndicator } from "./CartIndicator";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // This would typically navigate to a search results page
      // Since we don't have one, we'll just alert for demonstration
      alert(`Searching for: ${searchQuery}`);
      // In a real implementation, you'd navigate to a search results page:
      // navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery("");
    }
  };

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b"
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2 font-semibold text-xl">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-purple-600"
            >
              <circle cx="8" cy="21" r="1" />
              <circle cx="19" cy="21" r="1" />
              <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
            </svg>
            Shopcart
          </Link>

          <div className="hidden md:flex items-center gap-6">
            <Link to="/category/phones" className="text-sm hover:text-purple-600">Phones</Link>
            <Link to="/category/laptops" className="text-sm hover:text-purple-600">Laptops</Link>
            <Link to="/category/headphones" className="text-sm hover:text-purple-600">Headphones</Link>
            <Link to="/category/tvs" className="text-sm hover:text-purple-600">TVs</Link>
          </div>

          <div className="flex items-center gap-4">
            <form onSubmit={handleSearch} className="hidden sm:flex relative max-w-sm">
              <Input 
                type="search"
                placeholder="Search products..."
                className="pr-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button 
                type="submit" 
                variant="ghost" 
                size="icon" 
                className="absolute right-0 top-0 h-full"
              >
                <Search className="h-4 w-4 text-muted-foreground" />
              </Button>
            </form>
            <CartIndicator />
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
            <form onSubmit={handleSearch} className="flex items-center">
              <Input 
                type="search"
                placeholder="Search products..."
                className="w-full"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button type="submit" variant="ghost" size="icon" className="ml-2">
                <Search className="h-4 w-4" />
              </Button>
            </form>
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
