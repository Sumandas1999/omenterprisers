import React from "react";
import { Link } from "react-router-dom";
import { Home, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Home className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold text-white">OM ENTERPRISERS</span>
            </div>
            <p className="text-gray-400 mb-4">
              Discover your dream property with our premium real estate listings. Find homes, apartments, and commercial properties in top locations.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <p className="text-lg font-semibold mb-4">Quick Links</p>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/properties" className="text-gray-400 hover:text-primary transition-colors">Properties</Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-400 hover:text-primary transition-colors">Pricing</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-gray-400 hover:text-primary transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/testimonials" className="text-gray-400 hover:text-primary transition-colors">Testimonials</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary transition-colors">About Us</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <p className="text-lg font-semibold mb-4">Our Services</p>
            <ul className="space-y-2">
              <li className="text-gray-400 hover:text-primary transition-colors">Property Sales</li>
              <li className="text-gray-400 hover:text-primary transition-colors">Property Management</li>
              <li className="text-gray-400 hover:text-primary transition-colors">Property Valuation</li>
              <li className="text-gray-400 hover:text-primary transition-colors">Investment Consulting</li>
              <li className="text-gray-400 hover:text-primary transition-colors">Interior Design</li>
              <li className="text-gray-400 hover:text-primary transition-colors">Legal Assistance</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <p className="text-lg font-semibold mb-4">Contact Us</p>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <span className="text-gray-400">123 Saheed Nagar, Bhubaneswar, Odisha, 751007</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary" />
                <span className="text-gray-400">+91 98765 43210</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary" />
                <span className="text-gray-400">info@omenterprisers.com</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>© {currentYear} OM ENTERPRISERS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;