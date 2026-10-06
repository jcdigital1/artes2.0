import React from 'react';
import { CHECKOUT_URL, PRODUCT_PRICE } from '../data/models';
import { Check, Zap, Sparkles } from 'lucide-react';

const FINAL_SEALS = [
  'Acesso digital',
  'Editável',
  'Fácil de personalizar'
];

export const FinalCTA: React.FC = () => {
  return (
    <section className="relative py-14 sm:py-20 px-4 max-w-4xl mx-auto text-center">
      {/* Background radial glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[550px] h-[350px] bg-gradient-to-r from-blue-700/25 via-cyan-500/30 to-blue-600/25 blur-[110px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      {/* Container Box */}
      <div className="relative rounded-3xl p-8 sm:p-12 md:p-14 bg-gradient-to-b from-[#0a1e4a] via-[#051230] to-[#020718] border-2 border-cyan-400/50 shadow-[0_0_60px_-5px_rgba(6,182,212,0.4)] backdrop-blur-xl">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-950/80 border border-cyan-400/40 text-xs font-semibold text-cyan-300 uppercase tracking-wider mb-4">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>ACESSO IMEDIATO</span>
        </div>

        {/* Heading: COMECE AGORA */}
        <h2 className="font-heading text-3xl sm:text-5xl md:text-6xl font-bold uppercase text-white tracking-tight mb-4">
          COMECE AGORA
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl text-slate-200 font-normal max-w-2xl mx-auto mb-6">
          Tenha modelos profissionais prontos para personalizar e usar nas suas placas NFC.
        </p>

        {/* Price Display */}
        <div className="my-6">
          <span className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold text-white text-glow-cyan tracking-tight">
            {PRODUCT_PRICE}
          </span>
          <p className="text-xs sm:text-sm text-cyan-300 font-medium mt-1">
            Pagamento único • Sem mensalidades
          </p>
        </div>

        {/* Big CTA Button */}
        <div className="flex justify-center mb-8">
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-3d animate-pulse-subtle inline-flex items-center justify-center gap-3 w-full max-w-md px-8 py-4 sm:py-4.5 rounded-2xl text-base sm:text-lg md:text-xl font-bold uppercase tracking-wide text-white bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 border border-cyan-300/60 shadow-[0_10px_35px_-5px_rgba(6,182,212,0.6)] cursor-pointer"
          >
            <span>GARANTIR MEUS MODELOS</span>
            <Zap className="w-5 h-5 fill-cyan-200 text-white" />
          </a>
        </div>

        {/* Seals: ✓ Acesso digital, ✓ Editável, ✓ Fácil de personalizar */}
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 pt-4 border-t border-cyan-500/20">
          {FINAL_SEALS.map((seal, index) => (
            <div key={index} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-200">
              <div className="w-4 h-4 rounded-full bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center">
                <Check className="w-2.5 h-2.5 text-cyan-400 stroke-[2.5]" />
              </div>
              <span>{seal}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
