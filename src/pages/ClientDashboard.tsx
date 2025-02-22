
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const products = [
  {
    id: 1,
    name: "Wireless Earbuds",
    price: 89.99,
    image: "/lovable-uploads/c741cde2-fae6-4342-8b46-4693d79c59bf.png",
    category: "headphones"
  },
  {
    id: 2,
    name: "AirPods Max",
    price: 559.99,
    image: "/lovable-uploads/c741cde2-fae6-4342-8b46-4693d79c59bf.png",
    category: "headphones"
  },
  {
    id: 3,
    name: "Bose BT Earphones",
    price: 289.99,
    image: "/lovable-uploads/c741cde2-fae6-4342-8b46-4693d79c59bf.png",
    category: "headphones"
  },
  {
    id: 4,
    name: "VIVEFOX Headphones",
    price: 39.99,
    image: "/lovable-uploads/c741cde2-fae6-4342-8b46-4693d79c59bf.png",
    category: "headphones"
  }
];

const heroSlides = [
  {
    title: "Grab Upto 50% Off On Selected Headphone",
    image: "/lovable-uploads/c741cde2-fae6-4342-8b46-4693d79c59bf.png",
  },
  {
    title: "New Arrivals in Wireless Audio",
    image: "/lovable-uploads/c741cde2-fae6-4342-8b46-4693d79c59bf.png",
  },
  {
    title: "Premium Sound Experience",
    image: "/lovable-uploads/c741cde2-fae6-4342-8b46-4693d79c59bf.png",
  },
];

const ClientDashboard = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative">
        <Carousel className="w-full max-w-screen-2xl mx-auto" opts={{ loop: true, align: "start" }}>
          <CarouselContent>
            {heroSlides.map((slide, index) => (
              <CarouselItem key={index}>
                <div className="relative h-[500px] w-full overflow-hidden bg-[#FEF6F0]">
                  <div className="container h-full mx-auto px-4 flex items-center">
                    <motion.div 
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      className="max-w-lg"
                    >
                      <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
                        {slide.title}
                      </h1>
                      <Button size="lg">
                        Shop Now
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </motion.div>
                    <motion.img
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5 }}
                      src={slide.image}
                      alt="Hero"
                      className="absolute right-0 top-1/2 -translate-y-1/2 h-full w-auto object-contain"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-4" />
          <CarouselNext className="right-4" />
        </Carousel>
      </section>

      {/* Popular Products */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <h2 className="text-2xl font-bold tracking-tight mb-2">Popular Products</h2>
            <p className="text-muted-foreground">Discover our best-selling electronics</p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="group cursor-pointer">
                  <CardContent className="p-4">
                    <div className="aspect-square mb-4 overflow-hidden rounded-lg bg-muted">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <h3 className="font-medium mb-2">{product.name}</h3>
                    <p className="text-lg font-semibold">${product.price}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-50 border-t">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-semibold mb-4">About Us</h3>
              <p className="text-sm text-muted-foreground">
                Your trusted source for premium electronics and accessories.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Categories</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Phones</li>
                <li>Laptops</li>
                <li>Headphones</li>
                <li>TVs</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Customer Service</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Contact Us</li>
                <li>Shipping Policy</li>
                <li>Returns & Exchanges</li>
                <li>FAQs</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect With Us</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Facebook</li>
                <li>Twitter</li>
                <li>Instagram</li>
                <li>LinkedIn</li>
              </ul>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t text-center text-sm text-muted-foreground">
            © 2024 Shopcart. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default ClientDashboard;
