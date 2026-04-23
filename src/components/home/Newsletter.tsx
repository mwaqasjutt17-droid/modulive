import { Mail } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="px-4 md:px-6 py-16 md:py-28 max-w-5xl mx-auto text-center">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">Subscribe to our newsletter and grab 30% OFF</h2>
      <div className="mt-8 md:mt-12 max-w-xl mx-auto relative flex items-center flex-col sm:flex-row gap-3 sm:gap-0">
        <div className="absolute left-4 sm:left-6 text-brand-primary z-10 pointer-events-none">
          <Mail className="w-5 md:w-6 h-5 md:h-6" />
        </div>
        <input 
          type="email" 
          placeholder="your email address" 
          className="w-full bg-white rounded-full py-4 sm:py-6 pl-12 sm:pl-16 pr-4 sm:pr-44 text-xs sm:text-sm font-medium focus:outline-none shadow-sm placeholder:text-brand-primary/30"
        />
        <button className="bg-brand-primary text-white py-3 md:py-4 px-6 md:px-10 rounded-full text-xs font-bold hover:bg-brand-primary/90 transition-colors cursor-pointer whitespace-nowrap sm:absolute sm:right-3 w-full sm:w-auto">
          Subscribe
        </button>
      </div>
    </section>
  );
}
