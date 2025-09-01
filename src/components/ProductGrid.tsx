import React from 'react';
import ProductCard from './ProductCard';
import { Button } from '@/components/ui/button';

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      name: "Neon Bomber Jacket",
      price: 89,
      originalPrice: 120,
      image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=400&h=500&fit=crop",
      rating: 4.8,
      isNew: true,
      isSale: true
    },
    {
      id: 2,
      name: "Pop Art Graphic Tee",
      price: 35,
      image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=500&fit=crop",
      rating: 4.6,
      isNew: true
    },
    {
      id: 3,
      name: "Retro High-Waist Jeans",
      price: 75,
      originalPrice: 95,
      image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=400&h=500&fit=crop",
      rating: 4.9,
      isSale: true
    },
    {
      id: 4,
      name: "Comic Print Hoodie",
      price: 65,
      image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=400&h=500&fit=crop",
      rating: 4.7
    },
    {
      id: 5,
      name: "Holographic Backpack",
      price: 45,
      image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=500&fit=crop",
      rating: 4.5,
      isNew: true
    }
  ];

  return (
    <section className="py-20 bg-pop-white relative ben-day-dots-overlay">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-comic text-5xl md:text-7xl text-pop-black text-pop-shadow mb-4">
            TRENDING NOW
          </h2>
          <p className="text-xl text-muted-foreground font-body max-w-2xl mx-auto">
            The hottest pieces that everyone's talking about. Don't miss out on these limited edition drops!
          </p>
          
          {/* Decorative Elements */}
          <div className="absolute top-10 left-10 text-3xl font-handwrite text-pop-pink transform rotate-12">
            HOT!
          </div>
          <div className="absolute top-10 right-10 text-3xl font-handwrite text-pop-blue transform -rotate-12">
            FRESH!
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          <Button variant="comic" size="xl" className="font-comic text-2xl px-12">
            LOAD MORE AWESOME STUFF
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductGrid;