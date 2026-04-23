import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import a from '../../assets/images/a.png';
import b from '../../assets/images/b.png';
import c from '../../assets/images/c.png';

const FEATURED_PRODUCTS = [
  {
    id: 1,
    image: a,
    title: "Nordic Comfort Sofa",
    tagline: "Experience minimalist luxury"
  },
  {
    id: 2,
    image: b,
    title: "Modern velvet Chair",
    tagline: "Bold colors for bold spaces"
  },
  {
    id: 3,
    image: c,
    title: "Minimalist Lounge Set",
    tagline: "Handcrafted sustainable design"
  }
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % FEATURED_PRODUCTS.length);
  const prev = () => setCurrent((prev) => (prev - 1 + FEATURED_PRODUCTS.length) % FEATURED_PRODUCTS.length);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <img 
            src={FEATURED_PRODUCTS[current].image} 
            alt={FEATURED_PRODUCTS[current].title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10 flex flex-col justify-end p-4 sm:p-6 md:p-8 lg:p-12">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="max-w-xs sm:max-w-md"
            >
              <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 drop-shadow-lg line-clamp-2">
                {FEATURED_PRODUCTS[current].title}
              </h2>
              <p className="text-white/80 text-xs sm:text-sm md:text-base font-medium mb-3 sm:mb-6 drop-shadow-md line-clamp-1">
                {FEATURED_PRODUCTS[current].tagline}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls - Repositioned for mobile */}
      <div className="absolute bottom-3 sm:bottom-4 md:bottom-8 right-3 sm:right-4 md:right-8 flex flex-col sm:flex-row items-end gap-2 sm:gap-3 md:gap-4 z-20">
        {/* Dots */}
        <div className="flex gap-1 sm:gap-2">
          {FEATURED_PRODUCTS.map((_, i) => (
            <button
               key={i}
               onClick={() => setCurrent(i)}
               className={`h-1 sm:h-1.5 rounded-full transition-all duration-300 ${current === i ? 'w-6 sm:w-8 bg-white' : 'w-1.5 sm:w-2 bg-white/40'}`}
               aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
        
        {/* Arrow buttons */}
        <div className="flex gap-1 sm:gap-2">
          <button 
            onClick={prev}
            className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/40 transition-colors cursor-pointer"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-4 sm:w-5 h-4 sm:h-5" />
          </button>
          <button 
            onClick={next}
            className="w-8 sm:w-10 h-8 sm:h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/40 transition-colors cursor-pointer"
            aria-label="Next slide"
          >
            <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5" />
          </button>
        </div>
      </div>

      {/* Shop button */}
      <button className="absolute top-3 sm:top-4 md:top-8 right-3 sm:right-4 md:right-8 bg-brand-primary text-white py-2 sm:py-3 px-4 sm:px-6 rounded-full flex items-center gap-2 sm:gap-4 hover:pr-7 sm:hover:pr-8 transition-all group/btn shadow-lg z-20 text-xs sm:text-sm">
        <span className="font-semibold hidden sm:inline">Shop Now</span>
        <span className="font-semibold sm:hidden text-xs">Shop</span>
        <div className="w-5 sm:w-6 h-5 sm:h-6 bg-white text-brand-primary rounded-full flex items-center justify-center transition-transform group-hover/btn:rotate-45 flex-shrink-0">
          <ArrowRight className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
        </div>
      </button>
    </div>
  );
}

