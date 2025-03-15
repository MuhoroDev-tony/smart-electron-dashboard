
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";

const headphones = [
  {
    id: 1,
    name: "Sony WH-1000XM5",
    price: 349,
    image: "https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?q=80&w=1888&auto=format&fit=crop",
    description: "Industry-leading noise cancellation"
  },
  {
    id: 2,
    name: "Apple AirPods Max",
    price: 549,
    image: "https://images.unsplash.com/photo-1628703143124-907b3af59427?q=80&w=1887&auto=format&fit=crop",
    description: "Computational audio with Spatial Audio technology"
  },
  {
    id: 3,
    name: "Bose QuietComfort Ultra",
    price: 429,
    image: "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=1932&auto=format&fit=crop",
    description: "Exceptional comfort with deep noise cancellation"
  },
  {
    id: 4,
    name: "Sennheiser Momentum 4",
    price: 349.95,
    image: "https://images.unsplash.com/photo-1563210142-a1871124576e?q=80&w=1170&auto=format&fit=crop",
    description: "Audiophile-grade sound with long battery life"
  }
];

const HeadphonesPage = () => {
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
                  <p className="text-sm text-muted-foreground mb-4">{headphone.description}</p>
                  <div className="flex items-center justify-between mt-auto">
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
      
      <Footer />
    </div>
  );
};

export default HeadphonesPage;
