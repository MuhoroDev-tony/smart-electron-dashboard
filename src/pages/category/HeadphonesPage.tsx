
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Star } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const headphones = [
  {
    id: 1,
    name: "Sony WH-1000XM5",
    price: 349,
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=1888&auto=format&fit=crop",
    description: "Industry-leading noise cancellation",
    rating: 4.9
  },
  {
    id: 2,
    name: "Apple AirPods Max",
    price: 549,
    image: "https://images.unsplash.com/photo-1628703143124-907b3af59427?q=80&w=1887&auto=format&fit=crop",
    description: "Computational audio with Spatial Audio technology",
    rating: 4.8
  },
  {
    id: 3,
    name: "Bose QuietComfort Ultra",
    price: 429,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1932&auto=format&fit=crop",
    description: "Exceptional comfort with deep noise cancellation",
    rating: 4.7
  },
  {
    id: 4,
    name: "Sennheiser Momentum 4",
    price: 349.95,
    image: "https://images.unsplash.com/photo-1563210142-a1871124576e?q=80&w=1170&auto=format&fit=crop",
    description: "Audiophile-grade sound with long battery life",
    rating: 4.6
  },
  {
    id: 5,
    name: "Beyerdynamic DT 990 Pro",
    price: 159,
    image: "https://images.unsplash.com/photo-1545127398-14699f92334b?q=80&w=1935&auto=format&fit=crop",
    description: "Studio reference headphones for mixing and mastering",
    rating: 4.5
  },
  {
    id: 6,
    name: "Audio-Technica ATH-M50x",
    price: 149,
    image: "https://images.unsplash.com/photo-1558756520-22cfe5d382ca?q=80&w=1770&auto=format&fit=crop",
    description: "Professional studio monitors with accurate bass response",
    rating: 4.7
  },
  {
    id: 7,
    name: "Jabra Elite 85h",
    price: 249,
    image: "https://images.unsplash.com/photo-1524678606370-a47ad25cb82a?q=80&w=1769&auto=format&fit=crop",
    description: "Weather-resistant headphones with SmartSound",
    rating: 4.4
  },
  {
    id: 8,
    name: "Sony WF-1000XM5",
    price: 299,
    image: "https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?q=80&w=1770&auto=format&fit=crop",
    description: "Premium noise-cancelling earbuds with LDAC support",
    rating: 4.8
  }
];

const HeadphonesPage = () => {
  const { addToCart } = useCart();
  
  const handleAddToCart = (headphone: any) => {
    addToCart({
      id: headphone.id,
      name: headphone.name,
      price: headphone.price,
      image: headphone.image,
      description: headphone.description
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
          <h1 className="text-3xl font-bold mb-2">Headphones</h1>
          <p className="text-muted-foreground">Premium audio for immersive experiences</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {headphones.map((headphone, index) => (
            <motion.div
              key={headphone.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group cursor-pointer h-full flex flex-col">
                <CardContent className="p-4 flex flex-col h-full">
                  <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-gray-100">
                    <img
                      src={headphone.image}
                      alt={headphone.name}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-medium mb-2">{headphone.name}</h3>
                  <div className="flex items-center mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i}
                          className={`h-3.5 w-3.5 ${
                            i < Math.floor(headphone.rating) 
                              ? "text-yellow-400 fill-yellow-400" 
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground ml-1">
                      ({headphone.rating})
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{headphone.description}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <p className="text-lg font-semibold">${headphone.price}</p>
                    <Button 
                      size="sm" 
                      variant="secondary"
                      className="bg-purple-600 hover:bg-purple-700 text-white"
                      onClick={() => handleAddToCart(headphone)}
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

export default HeadphonesPage;
