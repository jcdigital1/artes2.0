import React from 'react';
import { Palette, Edit3, Smartphone, Zap } from 'lucide-react';

const BENEFITS = [
  {
    icon: Palette,
    emoji: '🎨',
    title: 'MUDE AS CORES',
    description: 'Personalize as artes de acordo com cada cliente.',
    accentColor: 'from-cyan-500/20 to-blue-600/20',
    borderColor: 'border-cyan-400/30'
  },
  {
    icon: Edit3,
    emoji: '✏️',
    title: 'EDITE OS TEXTOS',
    description: 'Troque informações de forma simples.',
    accentColor: 'from-blue-600/20 to-indigo-600/20',
    borderColor: 'border-blue-400/30'
  },
  {
    icon: Smartphone,
    emoji: '📱',
    title: 'EDITE PELO CELULAR',
    description: 'Faça alterações rapidamente direto pelo Canva.',
    accentColor: 'from-sky-500/20 to-cyan-600/20',
    borderColor: 'border-sky-400/30'
  },
  {
    icon: Zap,
    emoji: '⚡',
    title: 'PRONTO PARA PERSONALIZAR',
    description: 'Economize tempo criando suas placas NFC.',
    accentColor: 'from-cyan-400/20 to-emerald-500/20',
    borderColor: 'border-cyan-400/30'
  }
];

export const Benefits: React.FC = () => {
  return (
    <section className="relative py-12 sm:py-16 px-4 max-w-5xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
        <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-bold uppercase text-white tracking-tight mb-4">
          EDITE DO <span className="text-cyan-400 text-glow-cyan">SEU JEITO</span>
        </h2>
        <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 mx-auto rounded-full" />
      </div>

      {/* Modern Benefit Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-12">
        {BENEFITS.map((item, index) => {
          const Icon = item.icon;
          return (
            <div
              key={index}
              className={`relative rounded-2xl p-6 bg-gradient-to-b from-[#0a1b42]/80 via-[#061230]/70 to-[#02091c]/80 border ${item.borderColor} shadow-lg shadow-cyan-950/40 backdrop-blur-md hover:border-cyan-400/60 hover:-translate-y-1 transition-all duration-300 group`}
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-blue-900 to-cyan-900/60 border border-cyan-400/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <span className="text-2xl" role="img" aria-label={item.title}>
                  {item.emoji}
                </span>
              </div>

              <h3 className="font-heading text-base sm:text-lg font-bold text-white tracking-wide uppercase mb-2">
                {item.title}
              </h3>

              <p className="text-sm font-normal text-slate-300 leading-relaxed">
                {item.description}
              </p>
            </div>
          );
        })}
      </div>

      {/* Frase Destacada */}
      <div className="relative rounded-2xl p-6 sm:p-8 bg-gradient-to-r from-blue-950/60 via-cyan-950/50 to-blue-950/60 border border-cyan-400/40 shadow-[0_0_35px_rgba(6,182,212,0.18)] backdrop-blur-md text-center max-w-3xl mx-auto">
        <div className="space-y-1 sm:space-y-2">
          <p className="font-heading text-lg sm:text-2xl md:text-3xl font-bold text-white tracking-tight">
            Você não precisa criar uma arte do zero.
          </p>
          <p className="text-cyan-300 font-medium text-base sm:text-xl">
            Escolha um modelo, personalize e deixe pronto para seu cliente.
          </p>
        </div>
      </div>
    </section>
  );
};
