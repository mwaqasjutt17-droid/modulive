import { Star } from 'lucide-react';
import { motion } from 'motion/react';
import HeroSlider from './HeroSlider';
import a from '../../assets/images/a.png';
import d from '../../assets/images/d.png';
import e from '../../assets/images/e.png';

export default function Hero() {
  return (
    <section className="px-4 md:px-6 py-8 md:py-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-8 items-center">
      <div className="lg:col-span-12 text-center mb-4 md:mb-8">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold leading-tight md:leading-[1.1] mb-4 md:mb-6"
        >
          Transform Space with <br className="hidden sm:block" /> 
          <span className="flex flex-col sm:flex-row items-center justify-center gap-1 sm:gap-2">
            <span className="inline-block w-12 sm:w-14 md:w-16 h-6 sm:h-7 md:h-8 bg-brand-accent rounded-full overflow-hidden align-middle hidden sm:block flex-shrink-0">
               <img src={a} className="w-full h-full object-cover" alt="Sustainable" />
            </span>
            <span>Sustainable Furniture</span>
          </span>
        </motion.h1>
      </div>

      <div className="lg:col-span-8 overflow-hidden rounded-2xl md:rounded-[2.5rem] relative aspect-[16/9] bg-white shadow-lg md:shadow-2xl">
        <HeroSlider />
      </div>

      <div className="lg:col-span-4 flex flex-col gap-3 md:gap-6">
        <div className="bg-white p-3 md:p-5 rounded-2xl md:rounded-[2rem] flex items-center gap-3 md:gap-4 shadow-sm hover:shadow-md transition-shadow">
          <div className="w-20 md:w-24 h-20 md:h-24 rounded-lg md:rounded-2xl overflow-hidden bg-brand-accent/20 flex-shrink-0">
             <img src={d} className="w-full h-full object-cover" alt="Puffe Chair" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-sm md:text-lg leading-tight truncate">Puffe Chair</h3>
            <p className="text-xs md:text-sm font-semibold mt-1">$126.00</p>
            <div className="flex items-center gap-0.5 mt-2">
              <Star className="w-2.5 md:w-3 h-2.5 md:h-3 fill-yellow-400 text-yellow-400" />
              <Star className="w-2.5 md:w-3 h-2.5 md:h-3 fill-yellow-400 text-yellow-400" />
              <Star className="w-2.5 md:w-3 h-2.5 md:h-3 fill-yellow-400 text-yellow-400" />
              <Star className="w-2.5 md:w-3 h-2.5 md:h-3 fill-yellow-400 text-yellow-400" />
              <Star className="w-2.5 md:w-3 h-2.5 md:h-3 text-gray-300" />
            </div>
          </div>
        </div>
        
        <div className="bg-white p-3 md:p-5 rounded-2xl md:rounded-[2rem] flex items-center gap-3 md:gap-4 shadow-sm hover:shadow-md transition-shadow">
           <div className="w-20 md:w-24 h-20 md:h-24 rounded-lg md:rounded-2xl overflow-hidden bg-brand-accent/20 flex-shrink-0">
             <img src={e} className="w-full h-full object-cover" alt="Elite Chair" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-sm md:text-lg leading-tight truncate">Elite Chair</h3>
            <p className="text-xs md:text-sm font-semibold mt-1">$100.00</p>
             <div className="flex items-center gap-0.5 mt-2">
              <Star className="w-2.5 md:w-3 h-2.5 md:h-3 fill-yellow-400 text-yellow-400" />
              <Star className="w-2.5 md:w-3 h-2.5 md:h-3 fill-yellow-400 text-yellow-400" />
              <Star className="w-2.5 md:w-3 h-2.5 md:h-3 fill-yellow-400 text-yellow-400" />
              <Star className="w-2.5 md:w-3 h-2.5 md:h-3 fill-yellow-400 text-yellow-400" />
              <Star className="w-2.5 md:w-3 h-2.5 md:h-3 fill-yellow-400 text-yellow-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

