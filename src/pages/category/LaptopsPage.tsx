
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";

const laptops = [
  {
    id: 1,
    name: "MacBook Pro 16",
    price: 2499,
    image: "/lovable-uploads/c741cde2-fae6-4342-8b46-4693d79c59bf.png",
    description: "Powerful Apple Silicon for professionals"
  },
  {
    id: 2,
    name: "Dell XPS 15",
    price: 1999,
    image: "/lovable-uploads/c741cde2-fae6-4342-8b46-4693d79c59bf.png",
    description: "Premium Windows laptop with OLED display"
  },
  {
    id: 3,
    name: "Lenovo ThinkPad X1",
    price: 1799,
    image: "/lovable-uploads/c741cde2-fae6-4342-8b46-4693d79c59bf.png",
    description: "Business laptop with excellent keyboard"
  },
  {
    id: 4,
    name: "HP Spectre x360",
    price: 1599,
    image: "/lovable-uploads/c741cde2-fae6-4342-8b46-4693d79c59bf.png",
    description: "Convertible laptop with premium design"
  }
];

const LaptopsPage = () => {
  return (
    <div className="min-h-screen max-w-[1920px] mx-auto">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
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
              <Card className="group cursor-pointer">
                <CardContent className="p-4">
                  <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-gray-100">
                    <img
                      src={laptop.image}
                      alt={laptop.name}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-medium mb-2">{laptop.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{laptop.description}</p>
                  <div className="flex items-center justify-between">
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
    </div>
  );
};

export default LaptopsPage;
