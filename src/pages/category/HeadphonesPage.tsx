
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";

const headphones = [
  {
    id: 1,
    name: "Sony WH-1000XM5",
    price: 399,
    image: "/lovable-uploads/c741cde2-fae6-4342-8b46-4693d79c59bf.png",
    description: "Industry-leading noise cancellation"
  },
  {
    id: 2,
    name: "Apple AirPods Max",
    price: 549,
    image: "/lovable-uploads/c741cde2-fae6-4342-8b46-4693d79c59bf.png",
    description: "Premium audio with spatial audio"
  },
  {
    id: 3,
    name: "Bose QC45",
    price: 329,
    image: "/lovable-uploads/c741cde2-fae6-4342-8b46-4693d79c59bf.png",
    description: "Comfortable noise-cancelling headphones"
  },
  {
    id: 4,
    name: "Sennheiser Momentum 4",
    price: 379,
    image: "/lovable-uploads/c741cde2-fae6-4342-8b46-4693d79c59bf.png",
    description: "Audiophile-grade wireless headphones"
  }
];

const HeadphonesPage = () => {
  return (
    <div className="min-h-screen max-w-[1920px] mx-auto">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold mb-2">Headphones</h1>
          <p className="text-muted-foreground">Immersive audio experiences</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {headphones.map((headphone, index) => (
            <motion.div
              key={headphone.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group cursor-pointer">
                <CardContent className="p-4">
                  <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-gray-100">
                    <img
                      src={headphone.image}
                      alt={headphone.name}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-medium mb-2">{headphone.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{headphone.description}</p>
                  <div className="flex items-center justify-between">
                    <p className="text-lg font-semibold">${headphone.price}</p>
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

export default HeadphonesPage;
