
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Star } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const laptops = [
  {
    id: 1,
    name: "MacBook Pro 16",
    price: 2499,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1926&auto=format&fit=crop",
    description: "Powerful Apple Silicon for professionals",
    rating: 4.8
  },
  {
    id: 2,
    name: "Dell XPS 15",
    price: 1999,
    image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=1932&auto=format&fit=crop",
    description: "Premium Windows laptop with OLED display",
    rating: 4.7
  },
  {
    id: 3,
    name: "Lenovo ThinkPad X1",
    price: 1799,
    image: "https://images.unsplash.com/photo-1575024357670-2b5164f470c3?q=80&w=1170&auto=format&fit=crop",
    description: "Business laptop with excellent keyboard",
    rating: 4.6
  },
  {
    id: 4,
    name: "HP Spectre x360",
    price: 1599,
    image: "https://images.unsplash.com/photo-1544731612-de7f96afe55f?q=80&w=2070&auto=format&fit=crop",
    description: "Convertible laptop with premium design",
    rating: 4.5
  },
  {
    id: 5,
    name: "Asus ROG Zephyrus G14",
    price: 1799,
    image: "https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?q=80&w=1770&auto=format&fit=crop",
    description: "Powerful gaming laptop with AMD Ryzen",
    rating: 4.7
  },
  {
    id: 6,
    name: "Microsoft Surface Laptop 5",
    price: 1299,
    image: "https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?q=80&w=1770&auto=format&fit=crop",
    description: "Sleek and lightweight Windows laptop",
    rating: 4.4
  },
  {
    id: 7,
    name: "Razer Blade 15",
    price: 2199,
    image: "https://images.unsplash.com/photo-1603302576837-37561b2e2302?q=80&w=1768&auto=format&fit=crop",
    description: "Premium gaming laptop with RTX graphics",
    rating: 4.6
  },
  {
    id: 8,
    name: "Acer Swift 5",
    price: 1099,
    image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?q=80&w=1771&auto=format&fit=crop",
    description: "Ultra-lightweight laptop with long battery life",
    rating: 4.3
  }
];

const LaptopsPage = () => {
  const { addToCart } = useCart();
  
  const handleAddToCart = (laptop: any) => {
    addToCart({
      id: laptop.id,
      name: laptop.name,
      price: laptop.price,
      image: laptop.image,
      description: laptop.description
    });
  };

  return (
    <div className="min-h-screen max-w-[1920px] mx-auto flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 flex-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold mb-2">Laptops</h1>
          <p className="text-muted-foreground">Premium laptops for work and play</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {laptops.map((laptop, index) => (
            <motion.div
              key={laptop.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group cursor-pointer h-full flex flex-col">
                <CardContent className="p-4 flex flex-col h-full">
                  <div className="aspect-video mb-4 overflow-hidden rounded-lg bg-gray-100">
                    <img
                      src={laptop.image}
                      alt={laptop.name}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-medium mb-2">{laptop.name}</h3>
                  <div className="flex items-center mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i}
                          className={`h-3.5 w-3.5 ${
                            i < Math.floor(laptop.rating) 
                              ? "text-yellow-400 fill-yellow-400" 
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground ml-1">
                      ({laptop.rating})
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{laptop.description}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <p className="text-lg font-semibold">${laptop.price}</p>
                    <Button 
                      size="sm" 
                      variant="secondary"
                      className="bg-purple-600 hover:bg-purple-700 text-white"
                      onClick={() => handleAddToCart(laptop)}
                    >
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Add to Cart
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default LaptopsPage;
