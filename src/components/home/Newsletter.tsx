import { Mail } from 'lucide-react';

export default function Newsletter() {
  return (
    <section className="px-6 py-28 max-w-5xl mx-auto text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">Subscribe to our newsletter and grab 30% OFF</h2>
      <div className="mt-12 max-w-xl mx-auto relative flex items-center">
        <div className="absolute left-6 text-brand-primary">
          <Mail className="w-6 h-6" />
        </div>
        <input 
          type="email" 
          placeholder="your email address" 
          className="w-full bg-white rounded-full py-6 pl-16 pr-44 text-sm font-medium focus:outline-none shadow-sm placeholder:text-brand-primary/30"
        />
        <button className="absolute right-3 bg-brand-primary text-white py-3 px-10 rounded-full text-xs font-bold hover:bg-brand-primary/90 transition-colors cursor-pointer">
          Subscribe
        </button>
      </div>
    </section>
  );
}
