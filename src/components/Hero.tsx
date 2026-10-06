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
    <section className="relative pt-6 pb-2 sm:pt-8 sm:pb-3 text-center px-4 overflow-hidden">
      {/* Decorative ambient background glows */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[340px] sm:w-[500px] h-[220px] bg-gradient-to-b from-cyan-500/15 via-blue-600/10 to-transparent blur-[70px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      <div className="max-w-3xl mx-auto flex flex-col items-center">
        {/* Top badge: 🔥 NOVOS MODELOS */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-950/70 border border-cyan-400/40 shadow-[0_0_15px_rgba(6,182,212,0.25)] mb-4">
          <span className="text-sm leading-none">🔥</span>
          <span className="text-xs font-semibold uppercase tracking-wider text-cyan-300">
            NOVOS MODELOS
          </span>
        </div>

        {/* Small seals */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 sm:gap-2.5 w-full max-w-2xl">
          {SEALS.map((seal, index) => (
            <div
              key={index}
              className="flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-slate-900/70 border border-cyan-500/20 backdrop-blur-sm shadow-sm hover:border-cyan-400/40 transition-colors"
            >
              <div className="w-4 h-4 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0">
                <Check className="w-2.5 h-2.5 text-cyan-400 stroke-[2.5]" />
              </div>
              <span className="text-xs font-medium text-slate-200 tracking-tight text-left">
                {seal}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
