
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";

const laptops = [
  {
    id: 1,
    name: "MacBook Pro 16",
    price: 2499,
    image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?q=80&w=1926&auto=format&fit=crop",
    description: "Powerful Apple Silicon for professionals"
  },
  {
    id: 2,
    name: "Dell XPS 15",
    price: 1999,
    image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?q=80&w=1932&auto=format&fit=crop",
    description: "Premium Windows laptop with OLED display"
  },
  {
    id: 3,
    name: "Lenovo ThinkPad X1",
    price: 1799,
    image: "https://images.unsplash.com/photo-1575024357670-2b5164f470c3?q=80&w=1170&auto=format&fit=crop",
    description: "Business laptop with excellent keyboard"
  },
  {
    id: 4,
    name: "HP Spectre x360",
    price: 1599,
    image: "https://images.unsplash.com/photo-1544731612-de7f96afe55f?q=80&w=2070&auto=format&fit=crop",
    description: "Convertible laptop with premium design"
  }
];

const LaptopsPage = () => {
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
                  <p className="text-sm text-muted-foreground mb-4">{laptop.description}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <p className="text-lg font-semibold">${laptop.price}</p>
                    <Button size="sm" variant="secondary">
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
