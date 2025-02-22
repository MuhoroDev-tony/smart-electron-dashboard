
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";

const tvs = [
  {
    id: 1,
    name: "LG C3 OLED 65\"",
    price: 1999,
    image: "/lovable-uploads/c741cde2-fae6-4342-8b46-4693d79c59bf.png",
    description: "Perfect blacks with OLED technology"
  },
  {
    id: 2,
    name: "Samsung QN90C Neo QLED 75\"",
    price: 2499,
    image: "/lovable-uploads/c741cde2-fae6-4342-8b46-4693d79c59bf.png",
    description: "Bright and vibrant QLED display"
  },
  {
    id: 3,
    name: "Sony A95K QD-OLED 55\"",
    price: 2299,
    image: "/lovable-uploads/c741cde2-fae6-4342-8b46-4693d79c59bf.png",
    description: "Premium QD-OLED technology"
  },
  {
    id: 4,
    name: "TCL 6-Series 65\"",
    price: 999,
    image: "/lovable-uploads/c741cde2-fae6-4342-8b46-4693d79c59bf.png",
    description: "Great value Mini-LED TV"
  }
];

const TvsPage = () => {
  return (
    <div className="min-h-screen max-w-[1920px] mx-auto">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
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
              <Card className="group cursor-pointer">
                <CardContent className="p-4">
                  <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-gray-100">
                    <img
                      src={tv.image}
                      alt={tv.name}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-medium mb-2">{tv.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{tv.description}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-semibold">${tv.price}</p>
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

export default TvsPage;
