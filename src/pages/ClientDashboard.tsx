import { motion } from "framer-motion";
import { ArrowRight, Star, Clock, Truck } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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

const featuredCategories = [
  { name: "Phones", icon: "📱", description: "Latest smartphones and accessories" },
  { name: "Laptops", icon: "💻", description: "Powerful computers for work and play" },
  { name: "Headphones", icon: "🎧", description: "Premium audio experiences" },
  { name: "TVs", icon: "📺", description: "Crystal clear displays" },
];

const features = [
  { 
    icon: Star,
    title: "Premium Quality",
    description: "Only the best brands and products"
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description: "Always here to help you"
  },
  {
    icon: Truck,
    title: "Fast Delivery",
    description: "Quick and reliable shipping"
  }
];

const faqs = [
  {
    question: "How long does shipping take?",
    answer: "Standard shipping typically takes 3-5 business days. Express shipping options are available at checkout for faster delivery."
  },
  {
    question: "What is your return policy?",
    answer: "We offer a 30-day return policy on all items. Products must be in original condition with tags attached."
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship to most countries worldwide. Shipping costs and delivery times vary by location."
  },
  {
    question: "How can I track my order?",
    answer: "Once your order ships, you'll receive a tracking number via email to monitor your delivery status."
  }
];

const ClientDashboard = () => {
  return (
    <div className="min-h-screen max-w-[1920px] mx-auto">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative">
        <Carousel 
          className="w-full max-w-screen-2xl mx-auto" 
          opts={{ 
            loop: true, 
            align: "start",
            autoplay: true,
            delay: 5000
          }}
        >
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
        </Carousel>
      </section>

      {/* Featured Categories */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight mb-2">Shop by Category</h2>
            <p className="text-muted-foreground">Find what you need in our curated collections</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredCategories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                  <div className="text-4xl mb-4">{category.icon}</div>
                  <h3 className="font-semibold mb-2">{category.name}</h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Products Section */}
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

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-12 text-center"
          >
            <h2 className="text-3xl font-bold tracking-tight mb-2">Frequently Asked Questions</h2>
            <p className="text-muted-foreground">Find answers to common questions about our services</p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger>{faq.question}</AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-4">Stay Updated</h2>
            <p className="mb-6">Subscribe to our newsletter for exclusive offers and updates</p>
            <div className="flex flex-col sm:flex-row gap-2 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-md text-foreground"
              />
              <Button variant="secondary">Subscribe</Button>
            </div>
          </motion.div>
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
