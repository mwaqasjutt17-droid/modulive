import { FEATURES } from '../../imagedetails';
import { Plus, Play } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import b from '../../assets/images/b.png';

export default function Features() {
  const [activeFeature, setActiveFeature] = useState<number | null>(0);

  return (
    <section id="about" className="px-6 py-20 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
      <div className="relative group">
        <div className="rounded-[3rem] overflow-hidden aspect-[4/3] bg-white shadow-2xl relative">
          <img
            src={b}
            alt="Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/5 flex items-center justify-center">
            <button className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform group/play">
              <Play className="w-6 h-6 fill-brand-primary text-brand-primary ml-1" />
            </button>
          </div>
        </div>
        <p className="mt-6 text-sm text-brand-primary/60 max-w-xs leading-relaxed">
          Watch the video and learn more about Modulive's sustainable process.
        </p>
      </div>

      <div>
        <h2 className="text-4xl font-bold mb-10">Why Choose Us</h2>
        <div className="space-y-4">
          {FEATURES.map((feature, i) => (
            <div
              key={i}
              className="border-b border-gray-100 pb-4 last:border-0"
            >
              <button
                onClick={() => setActiveFeature(activeFeature === i ? null : i)}
                className="w-full flex justify-between items-center py-4 text-left group"
              >
                <span className={`text-lg font-semibold transition-colors ${activeFeature === i ? 'text-brand-primary' : 'text-brand-primary/50 group-hover:text-brand-primary'}`}>
                  {feature.title}
                </span>
                <Plus className={`w-5 h-5 transition-transform duration-300 ${activeFeature === i ? 'rotate-45' : ''}`} />
              </button>
              <AnimatePresence>
                {activeFeature === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <p className="text-sm text-brand-primary/50 leading-relaxed mb-6">
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

