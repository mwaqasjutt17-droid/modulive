import { useState } from 'react';
import { PRODUCTS } from '../../imagedetails';
import { ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ProductGrid() {
  const categories = ['All', 'Chair', 'Cabinet', 'Sofa', 'Bed'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredProducts = activeCategory === 'All'
    ? PRODUCTS
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <section id="products" className="px-6 py-20 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-8">Our Best Quality Products</h2>
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${activeCategory === cat
                  ? 'bg-brand-primary text-white'
                  : 'bg-white border border-gray-100 hover:border-gray-300'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence mode="popLayout">
          {filteredProducts.map((product) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              key={product.id}
              className="bg-white p-4 rounded-[2.5rem] group"
            >
              <div className="aspect-[4/5] rounded-[2rem] overflow-hidden bg-gray-50 mb-6 relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <button className="absolute bottom-4 right-4 w-12 h-12 bg-black text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 cursor-pointer">
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
              <div className="flex justify-between items-center px-2">
                <div>
                  <h3 className="text-sm text-brand-primary/50 font-medium">{product.name}</h3>
                  <p className="font-bold text-lg mt-1">${product.price.toFixed(2)}</p>
                </div>
                <div className="w-10 h-10 border border-gray-100 rounded-full flex items-center justify-center hover:bg-gray-50 transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}
