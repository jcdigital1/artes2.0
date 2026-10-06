import React from 'react';
import { CHECKOUT_URL, PRODUCT_PRICE } from '../data/models';
import { ShieldCheck, Zap, DownloadCloud, Sparkles } from 'lucide-react';

export const OfferCard: React.FC = () => {
  return (
    <section className="relative py-8 sm:py-12 px-4 max-w-4xl mx-auto">
      {/* Background radial glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[500px] h-[350px] bg-gradient-to-r from-cyan-600/25 via-blue-600/30 to-cyan-500/25 blur-[100px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      {/* Main Glowing Card */}
      <div className="relative rounded-3xl p-6 sm:p-10 md:p-12 bg-gradient-to-b from-[#091d4a] via-[#05112e] to-[#020718] border-2 border-cyan-400/50 shadow-[0_0_60px_-10px_rgba(6,182,212,0.45),0_20px_50px_rgba(0,0,0,0.8)] backdrop-blur-xl text-center overflow-hidden">
        {/* Subtle decorative circuit/mesh lines */}
        <div className="absolute -top-24 -right-24 w-48 h-48 bg-cyan-400/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />

        {/* Small badge: OFERTA ESPECIAL */}
        <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-cyan-950/80 border border-cyan-400/50 shadow-[0_0_15px_rgba(6,182,212,0.3)] mb-4">
          <Sparkles className="w-3.5 h-3.5 text-cyan-300 animate-spin" style={{ animationDuration: '6s' }} />
          <span className="text-xs sm:text-sm font-semibold tracking-wider text-cyan-300 uppercase">
            OFERTA ESPECIAL
          </span>
        </div>

        {/* Title: LEVE OS NOVOS MODELOS */}
        <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-bold uppercase text-white tracking-tight mb-6">
          LEVE OS NOVOS MODELOS
        </h2>

        {/* Price Highlight */}
        <div className="my-6 py-4 px-6 rounded-2xl bg-gradient-to-r from-blue-950/40 via-cyan-950/30 to-blue-950/40 border border-cyan-500/30 inline-block max-w-md w-full shadow-inner">
          <p className="text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-400 mb-1">
            POR APENAS
          </p>
          <div className="flex items-center justify-center gap-1">
            <span className="font-heading text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight text-white text-glow-cyan">
              {PRODUCT_PRICE}
            </span>
          </div>

          <div className="mt-2 flex items-center justify-center gap-3 text-xs sm:text-sm font-medium text-slate-300">
            <span className="text-cyan-300 font-semibold">Pagamento único</span>
            <span className="text-slate-600" aria-hidden="true">•</span>
            <span className="text-slate-300">Sem mensalidade.</span>
          </div>
        </div>

        {/* Big 3D Button with pulse animation */}
        <div className="mt-4 mb-6 flex justify-center">
          <a
            href={CHECKOUT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-3d animate-pulse-subtle inline-flex items-center justify-center gap-3 w-full max-w-md px-8 py-4 sm:py-4.5 rounded-2xl text-base sm:text-lg md:text-xl font-bold uppercase tracking-wide text-white bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 border border-cyan-300/60 shadow-[0_10px_35px_-5px_rgba(6,182,212,0.6)] cursor-pointer"
          >
            <span>QUERO MEUS MODELOS AGORA</span>
            <Zap className="w-5 h-5 fill-cyan-200 text-white" />
          </a>
        </div>

        {/* Security and reassurance notes */}
        <div className="pt-4 border-t border-cyan-500/20 flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs font-semibold text-slate-300">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-cyan-400" />
            <span>Compra 100% Segura</span>
          </div>
          <div className="flex items-center gap-2">
            <DownloadCloud className="w-4 h-4 text-cyan-400" />
            <span>Acesso Imediato no E-mail</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            <span>Editável no Canva Grátis ou Pro</span>
          </div>
        </div>
      </div>
    </section>
  );
};
