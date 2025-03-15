
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Star } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const tvs = [
  {
    id: 1,
    name: "LG C3 OLED 65\"",
    price: 1999,
    image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?q=80&w=2070&auto=format&fit=crop",
    description: "Perfect blacks with OLED technology",
    rating: 4.8
  },
  {
    id: 2,
    name: "Samsung QN90C Neo QLED 75\"",
    price: 2499,
    image: "https://images.unsplash.com/photo-1611689102192-1f6e0e52df0a?q=80&w=2072&auto=format&fit=crop",
    description: "Bright and vibrant QLED display",
    rating: 4.7
  },
  {
    id: 3,
    name: "Sony A95K QD-OLED 55\"",
    price: 2299,
    image: "https://images.unsplash.com/photo-1577979749830-f1d742b96791?q=80&w=2071&auto=format&fit=crop",
    description: "Premium QD-OLED technology",
    rating: 4.9
  },
  {
    id: 4,
    name: "TCL 6-Series 65\"",
    price: 999,
    image: "https://images.unsplash.com/photo-1461151304267-38535e780c79?q=80&w=2033&auto=format&fit=crop",
    description: "Great value Mini-LED TV",
    rating: 4.5
  },
  {
    id: 5,
    name: "Hisense U8K Mini-LED 65\"",
    price: 1299,
    image: "https://images.unsplash.com/photo-1611689102698-7a63bc0a0d3b?q=80&w=2072&auto=format&fit=crop",
    description: "Excellent brightness and local dimming",
    rating: 4.6
  },
  {
    id: 6,
    name: "LG G3 OLED evo 77\"",
    price: 3799,
    image: "https://images.unsplash.com/photo-1509281373149-e957c6296406?q=80&w=1928&auto=format&fit=crop",
    description: "Ultra-bright OLED with perfect blacks",
    rating: 4.9
  },
  {
    id: 7,
    name: "Sony X95L Mini LED 85\"",
    price: 3999,
    image: "https://images.unsplash.com/photo-1467293622093-9f15c96be70f?q=80&w=2070&auto=format&fit=crop",
    description: "Massive screen with impressive brightness",
    rating: 4.7
  },
  {
    id: 8,
    name: "Samsung S95C OLED 65\"",
    price: 2799,
    image: "https://images.unsplash.com/photo-1601944179066-29b8f7ded14b?q=80&w=2070&auto=format&fit=crop",
    description: "QD-OLED with exceptional color volume",
    rating: 4.8
  }
];

const TvsPage = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (tv: any) => {
    addToCart({
      id: tv.id,
      name: tv.name,
      price: tv.price,
      image: tv.image,
      description: tv.description
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
          <h1 className="text-3xl font-bold mb-2">TVs</h1>
          <p className="text-muted-foreground">Experience cinematic viewing at home</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {tvs.map((tv, index) => (
            <motion.div
              key={tv.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group cursor-pointer h-full flex flex-col">
                <CardContent className="p-4 flex flex-col h-full">
                  <div className="aspect-video mb-4 overflow-hidden rounded-lg bg-gray-100">
                    <img
                      src={tv.image}
                      alt={tv.name}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-medium mb-1">{tv.name}</h3>
                  <div className="flex items-center mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i}
                          className={`h-3.5 w-3.5 ${
                            i < Math.floor(tv.rating) 
                              ? "text-yellow-400 fill-yellow-400" 
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground ml-1">
                      ({tv.rating})
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{tv.description}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <p className="text-lg font-semibold">${tv.price}</p>
                    <Button 
                      size="sm" 
                      variant="secondary"
                      className="bg-purple-600 hover:bg-purple-700 text-white"
                      onClick={() => handleAddToCart(tv)}
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

export default TvsPage;
