import React from 'react';
import { Search, ShoppingCart, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const PopHeader = () => {
  return (
    <header className="bg-pop-white border-b-4 border-pop-black relative ben-day-dots-overlay">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="font-comic text-4xl md:text-5xl text-pop-black text-pop-shadow transform -rotate-1">
              POP SHOP
            </h1>
          </div>

          {/* Navigation - Hidden on mobile */}
          <nav className="hidden md:flex items-center space-x-8">
            {['NEW', 'TOPS', 'BOTTOMS', 'ACCESSORIES', 'SALE'].map((item) => (
              <a
                key={item}
                href="#"
                className="font-comic text-lg text-pop-black hover:text-pop-pink transition-colors duration-200 hover:scale-110 transform"
              >
                {item}
              </a>
            ))}
          </nav>

          {/* Search and Cart */}
          <div className="flex items-center space-x-4">
            {/* Search - Hidden on mobile */}
            <div className="hidden md:flex items-center relative">
              <Input
                type="text"
                placeholder="Search for awesome stuff..."
                className="w-64 rounded-full border-4 border-pop-black bg-pop-white pl-4 pr-12 py-2 font-body"
              />
              <Button 
                size="icon" 
                variant="comic"
                className="absolute right-1 top-1 bottom-1 rounded-full w-8 h-8"
              >
                <Search className="h-4 w-4" />
              </Button>
            </div>

            {/* Cart */}
            <Button variant="explosion" size="icon" className="relative">
              <ShoppingCart className="h-6 w-6" />
              <span className="absolute -top-2 -right-2 bg-pop-pink text-pop-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold border-2 border-pop-black">
                3
              </span>
            </Button>

            {/* Mobile Menu */}
            <Button variant="comic" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
            </Button>
          </div>
        </div>

        {/* Mobile Search */}
        <div className="mt-4 md:hidden">
          <div className="flex items-center relative">
            <Input
              type="text"
              placeholder="Search..."
              className="w-full rounded-full border-4 border-pop-black bg-pop-white pl-4 pr-12 py-2"
            />
            <Button 
              size="icon" 
              variant="comic"
              className="absolute right-1 top-1 bottom-1 rounded-full w-8 h-8"
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default PopHeader;