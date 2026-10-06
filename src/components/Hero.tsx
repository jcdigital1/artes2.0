import React from 'react';
import { Check } from 'lucide-react';

const SEALS = [
  'Fácil de editar',
  'Modelos profissionais',
  'Personalize pelo celular',
  'Acesso digital'
];

export const Hero: React.FC = () => {
  return (
    <section className="relative pt-8 pb-4 sm:pt-12 sm:pb-6 text-center px-4 overflow-hidden">
      {/* Decorative ambient background glows */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[340px] sm:w-[600px] h-[340px] bg-gradient-to-b from-cyan-500/20 via-blue-600/15 to-transparent blur-[90px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-3xl mx-auto flex flex-col items-center">
        {/* Top badge: 🔥 NOVOS MODELOS */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-400/40 shadow-[0_0_15px_rgba(6,182,212,0.3)] mb-5">
          <span className="text-base leading-none">🔥</span>
          <span className="text-xs font-bold uppercase tracking-wider text-cyan-300">
            NOVOS MODELOS
          </span>
        </div>

        {/* Large Title: ARTES PARA PLACAS NFC */}
        <h1 className="font-heading text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight text-white leading-[1.08] mb-3">
          ARTES PARA <br />
          <span className="bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent text-glow-cyan">
            PLACAS NFC
          </span>
        </h1>

        {/* Highlight below: 100% EDITÁVEIS NO CANVA */}
        <div className="inline-block mt-1 mb-5 px-4 py-1.5 rounded-xl bg-blue-950/60 border border-cyan-400/30 backdrop-blur-md shadow-[0_0_20px_rgba(6,182,212,0.25)]">
          <span className="text-sm sm:text-lg md:text-xl font-extrabold uppercase tracking-wide text-cyan-200">
            100% EDITÁVEIS NO CANVA
          </span>
        </div>

        {/* Descriptive Text */}
        <div className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl space-y-2 mb-8 font-normal">
          <p>
            Edite facilmente suas artes para placas NFC e deixe seus produtos ainda mais profissionais.
          </p>
          <p className="text-slate-200 font-medium">
            Personalize textos, cores, QR Codes e informações diretamente pelo Canva.
          </p>
          <p className="text-cyan-300 font-semibold text-sm sm:text-base">
            Não precisa ser designer.
          </p>
        </div>

        {/* Small seals */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 w-full max-w-2xl">
          {SEALS.map((seal, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-slate-900/80 border border-cyan-500/20 backdrop-blur-sm shadow-sm hover:border-cyan-400/40 transition-colors"
            >
              <div className="w-4 h-4 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0">
                <Check className="w-2.5 h-2.5 text-cyan-400 stroke-[3]" />
              </div>
              <span className="text-xs font-semibold text-slate-200 tracking-tight text-left">
                {seal}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
