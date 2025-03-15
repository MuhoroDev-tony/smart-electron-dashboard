
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart } from "lucide-react";

const phones = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: 999,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?q=80&w=1964&auto=format&fit=crop",
    description: "Latest iPhone with professional camera system"
  },
  {
    id: 2,
    name: "Samsung Galaxy S24",
    price: 899,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=1227&auto=format&fit=crop",
    description: "Advanced Android flagship with AI features"
  },
  {
    id: 3,
    name: "Google Pixel 8",
    price: 799,
    image: "https://images.unsplash.com/photo-1664478546384-d57ffe74a78c?q=80&w=1950&auto=format&fit=crop",
    description: "Pure Android experience with amazing camera"
  },
  {
    id: 4,
    name: "OnePlus 12",
    price: 699,
    image: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?q=80&w=1980&auto=format&fit=crop",
    description: "Fast performance and charging"
  }
];

const PhonesPage = () => {
  return (
    <div className="min-h-screen max-w-[1920px] mx-auto flex flex-col">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 flex-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-3xl font-bold mb-2">Phones</h1>
          <p className="text-muted-foreground">Discover our latest smartphones</p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {phones.map((phone, index) => (
            <motion.div
              key={phone.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="group cursor-pointer h-full flex flex-col">
                <CardContent className="p-4 flex flex-col h-full">
                  <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-gray-100">
                    <img
                      src={phone.image}
                      alt={phone.name}
                      className="h-full w-full object-cover transition-transform group-hover:scale-105"
                    />
                  </div>
                  <h3 className="font-medium mb-2">{phone.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{phone.description}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <p className="text-lg font-semibold">${phone.price}</p>
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

export default PhonesPage;
