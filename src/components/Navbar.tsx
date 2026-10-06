import React from 'react';
import { CHECKOUT_URL, PRODUCT_PRICE } from '../data/models';
import { Sparkles, ArrowRight } from 'lucide-react';

export const Navbar: React.FC = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-cyan-500/20 bg-[#030712]/80 backdrop-blur-md">
      <div className="max-w-5xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Brand Zone */}
        <a 
          href="#" 
          className="flex items-center gap-2.5 text-lg font-extrabold tracking-tight text-white hover:text-cyan-400 transition-colors"
          aria-label="Placas NFC Modelos"
        >
          <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-cyan-400 p-[1px] flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <div className="w-full h-full bg-[#030d22] rounded-[7px] flex items-center justify-center">
              <span className="text-cyan-400 font-black text-sm">NFC</span>
            </div>
          </div>
          <span className="font-heading font-black text-base sm:text-lg tracking-wider">
            PLACAS<span className="text-cyan-400">NFC</span>
          </span>
        </a>

        {/* Center label */}
        <div className="hidden md:flex items-center gap-2 text-xs font-semibold text-cyan-300/80 bg-cyan-950/40 border border-cyan-500/20 px-3 py-1 rounded-full">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>Editável no Canva</span>
        </div>

        {/* Action Zone */}
        <a
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 text-xs sm:text-sm font-bold text-white bg-gradient-to-r from-blue-600 via-cyan-600 to-blue-600 hover:from-blue-500 hover:to-cyan-400 rounded-lg shadow-md shadow-cyan-500/25 border border-cyan-400/40 transition-all duration-200 active:scale-95 whitespace-nowrap"
        >
          <span>Garantir por {PRODUCT_PRICE}</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </header>
  );
};
