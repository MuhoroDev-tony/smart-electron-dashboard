
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ShoppingCart, Star } from "lucide-react";
import { useCart } from "@/contexts/CartContext";

const phones = [
  {
    id: 1,
    name: "iPhone 15 Pro",
    price: 999,
    image: "https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?q=80&w=1964&auto=format&fit=crop",
    description: "Latest iPhone with professional camera system",
    rating: 4.9
  },
  {
    id: 2,
    name: "Samsung Galaxy S24",
    price: 899,
    image: "https://images.unsplash.com/photo-1598327105666-5b89351aff97?q=80&w=1227&auto=format&fit=crop",
    description: "Advanced Android flagship with AI features",
    rating: 4.7
  },
  {
    id: 3,
    name: "Google Pixel 8",
    price: 799,
    image: "https://images.unsplash.com/photo-1664478546384-d57ffe74a78c?q=80&w=1950&auto=format&fit=crop",
    description: "Pure Android experience with amazing camera",
    rating: 4.8
  },
  {
    id: 4,
    name: "OnePlus 12",
    price: 699,
    image: "https://images.unsplash.com/photo-1546054454-aa26e2b734c7?q=80&w=1980&auto=format&fit=crop",
    description: "Fast performance and charging",
    rating: 4.6
  },
  {
    id: 5,
    name: "Xiaomi 14 Ultra",
    price: 849,
    image: "https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?q=80&w=1770&auto=format&fit=crop",
    description: "Professional camera system with Leica lenses",
    rating: 4.5
  },
  {
    id: 6,
    name: "Nothing Phone (2)",
    price: 599,
    image: "https://images.unsplash.com/photo-1533228100845-08145b01de14?q=80&w=1938&auto=format&fit=crop",
    description: "Unique design with innovative Glyph interface",
    rating: 4.3
  },
  {
    id: 7,
    name: "Motorola Edge 40 Pro",
    price: 649,
    image: "https://images.unsplash.com/photo-1605236453806-6ff36851218e?q=80&w=1974&auto=format&fit=crop",
    description: "Powerful performance with clean Android experience",
    rating: 4.4
  },
  {
    id: 8,
    name: "Asus ROG Phone 7",
    price: 999,
    image: "https://images.unsplash.com/photo-1543069190-f687a5403248?q=80&w=1770&auto=format&fit=crop",
    description: "Ultimate gaming phone with cooling system",
    rating: 4.7
  }
];

const PhonesPage = () => {
  const { addToCart } = useCart();

  const handleAddToCart = (phone: any) => {
    addToCart({
      id: phone.id,
      name: phone.name,
      price: phone.price,
      image: phone.image,
      description: phone.description
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
                  <div className="flex items-center mb-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i}
                          className={`h-3.5 w-3.5 ${
                            i < Math.floor(phone.rating) 
                              ? "text-yellow-400 fill-yellow-400" 
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                    <span className="text-xs text-muted-foreground ml-1">
                      ({phone.rating})
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-4">{phone.description}</p>
                  <div className="flex items-center justify-between mt-auto">
                    <p className="text-lg font-semibold">${phone.price}</p>
                    <Button 
                      size="sm" 
                      variant="secondary" 
                      className="bg-purple-600 hover:bg-purple-700 text-white"
                      onClick={() => handleAddToCart(phone)}
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

export default PhonesPage;
