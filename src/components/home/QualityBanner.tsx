import { ArrowRight } from 'lucide-react';
import f from '../../assets/images/f.png';
import c from '../../assets/images/c.png';

export default function QualityBanner() {
  return (
    <section className="px-4 md:px-6 py-12 md:py-20 max-w-7xl mx-auto">
      <div className="bg-brand-accent rounded-2xl md:rounded-[3.5rem] p-6 sm:p-8 md:p-12 lg:p-20 relative overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
        <div className="relative z-10 space-y-6 md:space-y-12 order-2 lg:order-1">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            When We Create Furniture, We Strive for The Finest Quality.
          </h2>
          <button className="bg-white text-black py-3 md:py-4 px-6 md:px-8 rounded-full font-bold text-xs md:text-sm hover:translate-x-2 transition-transform whitespace-nowrap">
            See Products
          </button>
        </div>
        
        {/* Image Container - Updated for mobile */}
        <div className="relative w-full aspect-[1/1.2] md:aspect-auto md:h-[400px] lg:h-[500px] order-1 lg:order-2">
          {/* Main Image Circle - Responsive sizing */}
          <div className="absolute inset-0 md:top-0 md:right-0 md:w-[80%] md:h-full rounded-full overflow-hidden border-8 md:border-[12px] border-white/30 shadow-lg md:shadow-2xl h-full w-[90%] right-0 top-0">
            <img src={f} className="w-full h-full object-cover" alt="Furniture highlight" />
          </div>
          
          {/* Secondary small circle - Hidden on mobile, shown on md+ */}
          <div className="absolute bottom-6 md:bottom-10 left-0 w-32 md:w-48 h-40 md:h-64 rounded-full overflow-hidden border-4 md:border-[8px] border-white shadow-lg z-10 hidden md:block">
            <img src={c} className="w-full h-full object-cover" alt="Product detail" />
          </div>
        </div>
        
        {/* Close button - Responsive positioning */}
        <button className="absolute top-4 md:top-10 right-4 md:right-10 w-10 md:w-12 h-10 md:h-12 bg-white text-black rounded-full flex items-center justify-center shadow-md hover:scale-110 transition-transform z-20 flex-shrink-0">
            <ArrowRight className="w-4 md:w-5 h-4 md:h-5 -rotate-45" />
        </button>
      </div>
    </section>
  );
}

