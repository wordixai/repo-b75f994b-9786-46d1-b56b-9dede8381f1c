import React from 'react';
import { Button } from '@/components/ui/button';

const PopHero = () => {
  return (
    <section className="relative min-h-screen split-bg-orange-pink overflow-hidden">
      {/* Ben Day Dots Overlay */}
      <div className="absolute inset-0 ben-day-dots opacity-10"></div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 text-6xl font-handwrite text-pop-white transform rotate-12 z-10">
        POW!
      </div>
      <div className="absolute bottom-20 right-10 text-4xl font-handwrite text-pop-black transform -rotate-12 z-10">
        BOOM!
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-4 py-20 relative z-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Left Content */}
          <div className="space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <h2 className="font-comic text-6xl md:text-8xl text-pop-white text-comic-outline leading-none">
                BAM!
              </h2>
              <h3 className="font-comic text-4xl md:text-6xl text-pop-black leading-none">
                NEW ARRIVAL
              </h3>
            </div>
            
            <p className="text-xl md:text-2xl font-body text-pop-black max-w-lg">
              Get ready to turn heads with our boldest collection yet! 
              Fashion that screams personality and breaks all the rules.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button variant="grab" size="xl" className="font-handwrite">
                Grab It NOW!
              </Button>
              <Button variant="comic" size="xl">
                EXPLORE COLLECTION
              </Button>
            </div>
          </div>

          {/* Right Content - Model Image */}
          <div className="relative">
            <div className="comic-border bg-pop-white p-8 transform rotate-2 hover:rotate-0 transition-transform duration-300">
              <img
                src="https://images.unsplash.com/photo-1515372039744-b8f02a3ae446?w=500&h=600&fit=crop"
                alt="Pop Art Fashion Model"
                className="w-full h-[600px] object-cover filter contrast-125 saturate-125"
              />
              
              {/* Explosion Price Tag */}
              <div className="absolute -top-4 -right-4 explosion-bg p-4 border-4 border-pop-black transform rotate-12">
                <span className="font-handwrite text-2xl text-pop-black">
                  $89
                </span>
              </div>
              
              {/* Speech Bubble */}
              <div className="absolute -bottom-6 -left-6 bg-pop-white border-4 border-pop-black rounded-full p-4 transform -rotate-12">
                <span className="font-handwrite text-lg text-pop-black">
                  So Cool!
                </span>
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-8 border-transparent border-t-pop-black"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-16 h-16 bg-pop-yellow border-4 border-pop-black rounded-full flex items-center justify-center font-handwrite text-pop-black transform rotate-12 pop-bounce">
        WOW!
      </div>
      <div className="absolute top-3/4 left-3/4 w-12 h-12 bg-pop-blue border-4 border-pop-black transform rotate-45 pop-pulse"></div>
    </section>
  );
};

export default PopHero;