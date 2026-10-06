import React, { useState, useEffect } from 'react';
import { CHECKOUT_URL, PRODUCT_PRICE } from '../data/models';
import { Zap } from 'lucide-react';

export const FloatingMobileBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show when scrolled past hero section (~350px)
      if (window.scrollY > 350) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <aside
      aria-label="Barra de compra rápida"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 p-2.5 bg-[#03091cd9] backdrop-blur-xl border-t border-cyan-500/30 shadow-[0_-10px_25px_rgba(0,0,0,0.7)] animate-in slide-in-from-bottom-5 duration-200"
      style={{ maxHeight: '14vh' }}
    >
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        {/* Price & Title info */}
        <div className="flex flex-col leading-tight pl-1">
          <span className="text-[10px] uppercase font-extrabold tracking-wider text-cyan-400">
            MODELOS EDITÁVEIS
          </span>
          <span className="font-heading text-lg font-black text-white text-glow-cyan">
            {PRODUCT_PRICE}
          </span>
        </div>

        {/* Action Button */}
        <a
          href={CHECKOUT_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-3d flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-xl text-xs font-black uppercase text-white bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 border border-cyan-300/50 shadow-md shadow-cyan-500/30 whitespace-nowrap active:scale-95"
        >
          <span>COMPRAR AGORA</span>
          <Zap className="w-3.5 h-3.5 fill-cyan-200 text-white" />
        </a>
      </div>
    </aside>
  );
};
