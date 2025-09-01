import React from 'react';
import { Button } from '@/components/ui/button';
import { Heart, Star } from 'lucide-react';

interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  isNew?: boolean;
  isSale?: boolean;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <div className="group relative">
      {/* Pop Art Frame */}
      <div className="comic-border bg-pop-white p-4 transform hover:scale-105 transition-all duration-300 hover:rotate-1">
        {/* Image Container */}
        <div className="relative overflow-hidden bg-gray-100 mb-4">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover filter contrast-110 saturate-110 group-hover:contrast-125 group-hover:saturate-125 transition-all duration-300"
          />
          
          {/* Hover Overlay with Ben Day Dots */}
          <div className="absolute inset-0 ben-day-dots opacity-0 group-hover:opacity-20 transition-opacity duration-300 bg-pop-blue"></div>
          
          {/* Badges */}
          <div className="absolute top-2 left-2 space-y-2">
            {product.isNew && (
              <span className="explosion-bg px-3 py-1 border-2 border-pop-black font-handwrite text-sm transform rotate-12">
                NEW!
              </span>
            )}
            {product.isSale && (
              <span className="bg-pop-pink text-pop-white px-3 py-1 border-2 border-pop-black font-handwrite text-sm transform -rotate-12">
                SALE!
              </span>
            )}
          </div>

          {/* Wishlist Button */}
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-2 right-2 bg-pop-white/80 hover:bg-pop-white border-2 border-pop-black rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
          >
            <Heart className="h-4 w-4" />
          </Button>
        </div>

        {/* Product Info */}
        <div className="space-y-3">
          <h3 className="font-body font-bold text-lg text-pop-black group-hover:text-pop-pink transition-colors">
            {product.name}
          </h3>
          
          {/* Rating */}
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                className={`h-4 w-4 ${
                  i < Math.floor(product.rating)
                    ? 'fill-pop-yellow text-pop-yellow'
                    : 'text-gray-300'
                }`}
              />
            ))}
            <span className="text-sm text-muted-foreground ml-2">
              ({product.rating})
            </span>
          </div>

          {/* Price */}
          <div className="flex items-center space-x-2">
            <span className="explosion-bg px-3 py-1 border-2 border-pop-black font-handwrite text-xl transform rotate-1">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-gray-500 line-through font-body">
                ${product.originalPrice}
              </span>
            )}
          </div>

          {/* Buy Button */}
          <Button 
            variant="grab" 
            className="w-full font-handwrite text-lg group-hover:scale-105 group-hover:pop-wiggle"
          >
            Grab It!
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;