import { ArrowRight } from 'lucide-react';
import f from '../../assets/images/f.png';
import c from '../../assets/images/c.png';

export default function QualityBanner() {
  return (
    <section className="px-6 py-20 max-w-7xl mx-auto">
      <div className="bg-[#C7D8E2] rounded-[3.5rem] p-12 lg:p-20 relative overflow-hidden grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative z-10 space-y-12">
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            When We Create Furniture, We Strive for The Finest Quality.
          </h2>
          <button className="bg-white text-black py-4 px-8 rounded-full font-bold text-sm hover:translate-x-2 transition-transform">
            See Products
          </button>
        </div>
        
        <div className="relative h-[400px] lg:h-[500px]">
           <div className="absolute top-0 right-0 w-[80%] h-full rounded-full overflow-hidden border-[12px] border-white/30 shadow-2xl">
              <img src={f} className="w-full h-full object-cover" />
           </div>
           <div className="absolute bottom-10 left-0 w-48 h-64 rounded-full overflow-hidden border-[8px] border-white shadow-xl hidden md:block">
              <img src={c} className="w-full h-full object-cover" />
           </div>
        </div>
        
        <button className="absolute top-10 right-10 w-12 h-12 bg-white text-black rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform">
            <ArrowRight className="w-5 h-5 -rotate-45" />
        </button>
      </div>
    </section>
  );
}

