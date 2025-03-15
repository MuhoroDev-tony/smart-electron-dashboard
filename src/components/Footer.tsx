
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-100 to-blue-50 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-semibold text-purple-800 mb-4">About ShopCart</h3>
            <p className="text-sm text-gray-600">
              Your trusted source for premium electronics and accessories with fast shipping and excellent customer service.
            </p>
            <div className="flex space-x-4 mt-4">
              <Facebook className="h-5 w-5 text-purple-600 hover:text-purple-800 cursor-pointer" />
              <Twitter className="h-5 w-5 text-purple-600 hover:text-purple-800 cursor-pointer" />
              <Instagram className="h-5 w-5 text-purple-600 hover:text-purple-800 cursor-pointer" />
              <Linkedin className="h-5 w-5 text-purple-600 hover:text-purple-800 cursor-pointer" />
            </div>
          </div>
          <div>
            <h3 className="font-semibold text-purple-800 mb-4">Shop Categories</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>
                <Link to="/category/phones" className="hover:text-purple-700">Phones</Link>
              </li>
              <li>
                <Link to="/category/laptops" className="hover:text-purple-700">Laptops</Link>
              </li>
              <li>
                <Link to="/category/headphones" className="hover:text-purple-700">Headphones</Link>
              </li>
              <li>
                <Link to="/category/tvs" className="hover:text-purple-700">TVs</Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-purple-800 mb-4">Customer Service</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li className="hover:text-purple-700 cursor-pointer">Contact Us</li>
              <li className="hover:text-purple-700 cursor-pointer">Shipping Policy</li>
              <li className="hover:text-purple-700 cursor-pointer">Returns & Exchanges</li>
              <li className="hover:text-purple-700 cursor-pointer">FAQs</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-purple-800 mb-4">Contact Information</h3>
            <ul className="space-y-3 text-sm text-gray-600">
              <li className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-purple-600" />
                <span>123 Commerce St, Tech City, TC 12345</span>
              </li>
              <li className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-purple-600" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-purple-600" />
                <span>support@shopcart.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-purple-200 text-center text-sm text-gray-600">
          <p>© 2024 ShopCart Electronics. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <span className="hover:text-purple-700 cursor-pointer">Privacy Policy</span>
            <span className="hover:text-purple-700 cursor-pointer">Terms of Service</span>
            <span className="hover:text-purple-700 cursor-pointer">Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
