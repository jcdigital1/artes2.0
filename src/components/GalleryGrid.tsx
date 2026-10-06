import React from 'react';
import { NFC_MODELS, ModelItem } from '../data/models';
import { Maximize2, Sparkles } from 'lucide-react';

interface GalleryGridProps {
  onSelectModel: (model: ModelItem) => void;
}

export const GalleryGrid: React.FC<GalleryGridProps> = ({ onSelectModel }) => {
  return (
    <section className="relative py-12 sm:py-16 px-3 sm:px-4 max-w-5xl mx-auto">
      {/* Title */}
      <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-12">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-cyan-950/60 border border-cyan-400/30 text-xs font-bold text-cyan-300 uppercase tracking-widest mb-3">
          <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
          <span>GALERIA COMPLETA</span>
        </div>
        <h2 className="font-heading text-2xl sm:text-4xl md:text-5xl font-black uppercase text-white tracking-tight mb-3">
          CONFIRA OS MODELOS
        </h2>
        <p className="text-sm sm:text-base text-slate-300">
          Toque em qualquer modelo para visualizar em tamanho ampliado
        </p>
      </div>

      {/* Grid: 2 columns on mobile, 3 columns on desktop */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-6">
        {NFC_MODELS.map((model) => (
          <div
            key={model.id}
            onClick={() => onSelectModel(model)}
            className="group relative rounded-2xl p-2 sm:p-3 bg-gradient-to-b from-[#0b1c44] via-[#06112e] to-[#020718] border border-cyan-500/20 hover:border-cyan-400/60 shadow-lg shadow-cyan-950/40 hover:shadow-cyan-500/20 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer flex flex-col justify-between"
          >
            {/* Image Container with preserved aspect ratio - no cropping */}
            <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-slate-950 flex items-center justify-center">
              <img
                src={model.imageUrl}
                alt={model.title}
                referrerPolicy="no-referrer"
                loading="lazy"
                className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
              />

              {/* Hover overlay hint */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-3">
                <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500 text-black text-xs font-extrabold uppercase tracking-wider shadow-md">
                  <Maximize2 className="w-3.5 h-3.5" />
                  Ampliar
                </span>
              </div>

              {/* Tag pill */}
              <div className="absolute top-2 left-2 px-2 py-0.5 rounded-md bg-cyan-950/90 border border-cyan-400/30 text-[10px] sm:text-xs font-bold text-cyan-300 uppercase">
                {model.tag}
              </div>
            </div>

            {/* Model Card Meta */}
            <div className="mt-2.5 sm:mt-3 px-1">
              <span className="text-[10px] sm:text-xs font-semibold text-cyan-400 tracking-wide uppercase block truncate">
                {model.category}
              </span>
              <h3 className="font-heading text-xs sm:text-sm md:text-base font-bold text-white tracking-tight truncate">
                {model.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
