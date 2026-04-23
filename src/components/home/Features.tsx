import { FEATURES } from '../../imagedetails';
import { Plus, Play } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import b from '../../assets/images/b.png';

export default function Features() {
  const [activeFeature, setActiveFeature] = useState<number | null>(0);

  return (
    <section id="about" className="px-4 md:px-6 py-12 md:py-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-start lg:items-center">
      <div className="relative group">
        <div className="rounded-2xl md:rounded-[3rem] overflow-hidden aspect-[4/3] bg-white shadow-lg md:shadow-2xl relative w-full">
          <img
            src={b}
            alt="Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/5 flex items-center justify-center">
            <button className="w-12 sm:w-14 md:w-16 h-12 sm:h-14 md:h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform group/play flex-shrink-0">
              <Play className="w-4 sm:w-5 md:w-6 h-4 sm:h-5 md:h-6 fill-brand-primary text-brand-primary ml-1" />
            </button>
          </div>
        </div>
        <p className="mt-3 md:mt-6 text-xs sm:text-sm text-brand-primary/60 max-w-xs leading-relaxed">
          Watch the video and learn more about Modulive's sustainable process.
        </p>
      </div>

      <div className="w-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6 md:mb-10">Why Choose Us</h2>
        <div className="space-y-3 md:space-y-4">
          {FEATURES.map((feature, i) => (
            <div
              key={i}
              className="border-b border-gray-100 pb-3 md:pb-4 last:border-0"
            >
              <button
                onClick={() => setActiveFeature(activeFeature === i ? null : i)}
                className="w-full flex justify-between items-center py-3 md:py-4 text-left group"
              >
                <span className={`text-base md:text-lg font-semibold transition-colors pr-4 ${activeFeature === i ? 'text-brand-primary' : 'text-brand-primary/50 group-hover:text-brand-primary'}`}>
                  {feature.title}
                </span>
                <Plus className={`w-4 md:w-5 h-4 md:h-5 transition-transform duration-300 flex-shrink-0 ${activeFeature === i ? 'rotate-45' : ''}`} />
              </button>
              <AnimatePresence>
                {activeFeature === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="text-xs sm:text-sm text-brand-primary/50 leading-relaxed mb-4 pr-2">
                      {feature.description}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

