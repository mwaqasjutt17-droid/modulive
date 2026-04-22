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
          <div className="absolute inset-0 bg-black/10 flex flex-col justify-end p-8 md:p-12">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="max-w-md"
            >
              <h2 className="text-white text-3xl md:text-4xl font-bold mb-2 drop-shadow-lg">
                {FEATURED_PRODUCTS[current].title}
              </h2>
              <p className="text-white/80 text-sm md:text-base font-medium mb-6 drop-shadow-md">
                {FEATURED_PRODUCTS[current].tagline}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="absolute bottom-8 right-8 flex items-center gap-4 z-20">
        <div className="flex gap-2">
          {FEATURED_PRODUCTS.map((_, i) => (
            <button
               key={i}
               onClick={() => setCurrent(i)}
               className={`h-1.5 rounded-full transition-all duration-300 ${current === i ? 'w-8 bg-white' : 'w-2 bg-white/40'}`}
            />
          ))}
        </div>
        
        <div className="flex gap-2 ml-4">
          <button 
            onClick={prev}
            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/40 transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button 
            onClick={next}
            className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md text-white flex items-center justify-center hover:bg-white/40 transition-colors cursor-pointer"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      <button className="absolute top-8 right-8 bg-brand-primary text-white py-3 px-6 rounded-full flex items-center gap-4 hover:pr-8 transition-all group/btn shadow-xl z-20">
        <span className="font-semibold text-sm">Shop Now</span>
        <div className="w-6 h-6 bg-white text-brand-primary rounded-full flex items-center justify-center transition-transform group-hover/btn:rotate-45">
          <ArrowRight className="w-3 h-3" />
        </div>
      </button>
    </div>
  );
}

