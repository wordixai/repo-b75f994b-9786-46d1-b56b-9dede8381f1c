import React from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

const PopFooter = () => {
  return (
    <footer className="bg-pop-black text-pop-white relative ben-day-dots-overlay">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <h3 className="font-comic text-3xl text-pop-pink text-pop-shadow">
              POP SHOP
            </h3>
            <p className="font-body text-gray-300">
              Where fashion meets rebellion. Express yourself with bold, unconventional style that breaks all the rules.
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-4">
              {[Instagram, Twitter, Facebook, Youtube].map((Icon, index) => (
                <Button
                  key={index}
                  variant="ghost"
                  size="icon"
                  className="text-pop-white hover:text-pop-pink hover:bg-pop-white/10 border-2 border-pop-white hover:border-pop-pink transition-all"
                >
                  <Icon className="h-5 w-5" />
                </Button>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-comic text-xl text-pop-yellow">
              QUICK LINKS
            </h4>
            <ul className="space-y-2 font-body">
              {['About Us', 'Size Guide', 'Shipping Info', 'Returns', 'Contact'].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-300 hover:text-pop-pink transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="space-y-4">
            <h4 className="font-comic text-xl text-pop-blue">
              CATEGORIES
            </h4>
            <ul className="space-y-2 font-body">
              {['New Arrivals', 'Tops', 'Bottoms', 'Accessories', 'Sale'].map((category) => (
                <li key={category}>
                  <a href="#" className="text-gray-300 hover:text-pop-blue transition-colors">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="font-comic text-xl text-pop-orange">
              STAY UPDATED
            </h4>
            <p className="font-body text-gray-300 text-sm">
              Get the latest drops and exclusive deals straight to your inbox!
            </p>
            
            <div className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                className="bg-pop-white text-pop-black border-2 border-pop-white rounded-none font-body"
              />
              <Button 
                variant="explosion" 
                className="w-full font-handwrite"
              >
                Subscribe!
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t-4 border-pop-white">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="font-body text-gray-300 text-center md:text-left">
              © 2024 POP SHOP. All rights reserved. Made with 💥 for the bold and fearless.
            </p>
            
            <div className="flex space-x-6 font-body text-sm">
              <a href="#" className="text-gray-300 hover:text-pop-pink transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-pop-blue transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Corner Elements */}
      <div className="absolute bottom-4 left-4 text-2xl font-handwrite text-pop-yellow transform rotate-12">
        Thanks!
      </div>
      <div className="absolute top-4 right-4 text-2xl font-handwrite text-pop-pink transform -rotate-12">
        Stay Cool!
      </div>
    </footer>
  );
};

export default PopFooter;