import { Sofa, Instagram, Twitter, Facebook } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-primary text-white mt-16 md:mt-20 pt-12 md:pt-16 pb-8 md:pb-10 px-4 md:px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-b border-white/10 pb-12 md:pb-16">
        <div className="space-y-4 md:space-y-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center flex-shrink-0">
              <Sofa className="w-5 h-5 text-brand-primary" />
            </div>
            <span className="font-heading font-bold text-lg md:text-xl tracking-tight">Modulive</span>
          </div>
          <p className="text-white/60 text-xs md:text-sm leading-relaxed max-w-xs">
            We offer premium furniture that is sustainably made and perfectly crafted for your living space.
          </p>
        </div>

        <div className="space-y-4 md:space-y-6">
          <h4 className="font-semibold text-base md:text-lg">Service</h4>
          <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-white/50">
            <li><a href="#" className="hover:text-white transition-colors">Legal Policy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Data Privacy</a></li>
            <li><a href="#" className="hover:text-white transition-colors">Return Policy</a></li>
          </ul>
        </div>

        <div className="space-y-4 md:space-y-6">
          <h4 className="font-semibold text-base md:text-lg">Connect</h4>
          <div className="flex gap-3 md:gap-4">
            <a href="#" className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors"><Instagram className="w-3.5 md:w-4 h-3.5 md:h-4" /></a>
            <a href="#" className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors"><Twitter className="w-3.5 md:w-4 h-3.5 md:h-4" /></a>
            <a href="#" className="p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors"><Facebook className="w-3.5 md:w-4 h-3.5 md:h-4" /></a>
          </div>
        </div>

        <div className="space-y-4 md:space-y-6">
          <h4 className="font-semibold text-base md:text-lg">Contact Us</h4>
          <ul className="space-y-2 md:space-y-3 text-xs md:text-sm text-white/50">
            <li><a href="mailto:engrmwaqas@gmail.com" className="hover:text-white transition-colors break-all">engrmwaqas@gmail.com</a></li>
            <li><a href="tel:03069377493" className="hover:text-white transition-colors">03069377493</a></li>
            <li>Johar Town, Lahore, Pakistan</li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-3 md:gap-4 text-xs text-white/30">
        <p>© Copyright 2026 Modulive. All Rights Reserved.</p>
        <div className="flex gap-4 md:gap-8 text-xs">
          <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
}
