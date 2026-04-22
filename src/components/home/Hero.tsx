import { Star } from 'lucide-react';
import { motion } from 'motion/react';
import HeroSlider from './HeroSlider';
import a from '../../assets/images/a.png';
import d from '../../assets/images/d.png';
import e from '../../assets/images/e.png';

export default function Hero() {
  return (
    <section className="px-6 py-12 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
      <div className="lg:col-span-12 text-center mb-8">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-bold leading-[1.1] mb-6"
        >
          Transform Space with <br /> 
          <span className="flex items-center justify-center gap-2">
            <span className="inline-block w-16 h-8 bg-brand-accent rounded-full overflow-hidden align-middle -mt-1 hidden md:block">
               <img src={a} className="w-full h-full object-cover" />
            </span>
            Sustainable Furniture
          </span>
        </motion.h1>
      </div>

      <div className="lg:col-span-8 overflow-hidden rounded-[2.5rem] relative aspect-[16/9] bg-white shadow-2xl">
        <HeroSlider />
      </div>

      <div className="lg:col-span-4 flex flex-col gap-6">
        <div className="bg-white p-5 rounded-[2rem] flex items-center gap-4 shadow-sm">
          <div className="w-24 h-24 rounded-2xl overflow-hidden bg-brand-accent/20 flex-shrink-0">
             <img src={d} className="w-full h-full object-cover" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg leading-tight">Puffe Chair</h3>
            <p className="text-sm font-semibold mt-1">$126.00</p>
            <div className="flex items-center gap-1 mt-2">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              <Star className="w-3 h-3 text-gray-300" />
            </div>
          </div>
        </div>
        
        <div className="bg-white p-5 rounded-[2rem] flex items-center gap-4 shadow-sm">
           <div className="w-24 h-24 rounded-2xl overflow-hidden bg-brand-accent/20 flex-shrink-0">
             <img src={e} className="w-full h-full object-cover" />
          </div>
          <div className="flex-1">
            <h3 className="font-bold text-lg leading-tight">Elite Chair</h3>
            <p className="text-sm font-semibold mt-1">$100.00</p>
             <div className="flex items-center gap-1 mt-2">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

