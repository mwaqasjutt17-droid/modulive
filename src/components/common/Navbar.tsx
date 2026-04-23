import { NAV_LINKS } from '../../imagedetails';
import { Search, ShoppingBag, User, Sofa, Menu, X } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between px-4 md:px-6 py-4 md:py-5 max-w-7xl mx-auto w-full sticky top-0 bg-brand-bg/80 backdrop-blur-md z-50">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-brand-primary rounded-full flex items-center justify-center flex-shrink-0">
          <Sofa className="w-5 h-5 text-brand-bg" />
        </div>
        <span className="font-heading font-bold text-lg md:text-xl tracking-tight">Modulive</span>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center gap-6 lg:gap-8">
        {NAV_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="text-xs lg:text-sm font-medium text-brand-primary/70 hover:text-brand-primary transition-colors"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Desktop Icons */}
      <div className="flex items-center gap-2 md:gap-4">
        <button className="p-2 hover:bg-brand-accent/30 rounded-full transition-colors cursor-pointer" id="search-btn">
          <Search className="w-4 md:w-5 h-4 md:h-5" />
        </button>
        <button className="p-2 hover:bg-brand-accent/30 rounded-full transition-colors cursor-pointer relative" id="cart-btn">
          <ShoppingBag className="w-4 md:w-5 h-4 md:h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-brand-bg"></span>
        </button>
        <button className="p-2 hover:bg-brand-accent/30 rounded-full transition-colors cursor-pointer" id="profile-btn">
          <User className="w-4 md:w-5 h-4 md:h-5" />
        </button>

        {/* Mobile Hamburger Menu */}
        <button 
          className="md:hidden p-2 hover:bg-brand-accent/30 rounded-full transition-colors"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="absolute top-full left-0 right-0 bg-brand-bg/95 backdrop-blur-md border-t border-gray-200 py-4 px-4 mt-1 md:hidden"
        >
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-brand-primary/70 hover:text-brand-primary transition-colors py-2 px-3 rounded-lg hover:bg-brand-accent/20"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  );
}
