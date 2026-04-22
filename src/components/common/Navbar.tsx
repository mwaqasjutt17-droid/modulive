import { NAV_LINKS } from '../../imagedetails';
import { Search, ShoppingBag, User, Sofa } from 'lucide-react';
import { motion } from 'motion/react';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between px-6 py-5 max-w-7xl mx-auto w-full sticky top-0 bg-brand-bg/80 backdrop-blur-md z-50">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center">
          <Sofa className="w-5 h-5 text-brand-bg" />
        </div>
        <span className="font-heading font-bold text-xl tracking-tight">Modulive</span>
      </div>

      <div className="hidden md:flex items-center gap-8">
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-sm font-medium text-brand-primary/70 hover:text-brand-primary transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>

      <div className="flex items-center gap-5">
        <button className="p-2 hover:bg-brand-accent/30 rounded-full transition-colors cursor-pointer" id="search-btn">
          <Search className="w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-brand-accent/30 rounded-full transition-colors cursor-pointer relative" id="cart-btn">
          <ShoppingBag className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-brand-bg"></span>
        </button>
        <button className="p-2 hover:bg-brand-accent/30 rounded-full transition-colors cursor-pointer" id="profile-btn">
          <User className="w-5 h-5" />
        </button>
      </div>
    </nav>
  );
}
