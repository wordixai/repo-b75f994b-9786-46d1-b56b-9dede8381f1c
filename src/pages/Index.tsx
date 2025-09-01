import React from 'react';
import PopHeader from '@/components/PopHeader';
import PopHero from '@/components/PopHero';
import ProductGrid from '@/components/ProductGrid';
import PopFooter from '@/components/PopFooter';

const Index = () => {
  return (
    <div className="min-h-screen bg-pop-white">
      <PopHeader />
      <PopHero />
      <ProductGrid />
      <PopFooter />
    </div>
  );
};

export default Index;