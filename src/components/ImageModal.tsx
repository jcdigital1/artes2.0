import React, { useEffect } from 'react';
import { ModelItem, CHECKOUT_URL, PRODUCT_PRICE, NFC_MODELS } from '../data/models';
import { X, ChevronLeft, ChevronRight, Zap, Check } from 'lucide-react';

interface ImageModalProps {
  model: ModelItem | null;
  onClose: () => void;
  onSelectModel: (model: ModelItem) => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({ model, onClose, onSelectModel }) => {
  useEffect(() => {
    if (!model) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') {
        const nextIdx = (NFC_MODELS.findIndex((m) => m.id === model.id) + 1) % NFC_MODELS.length;
        onSelectModel(NFC_MODELS[nextIdx]);
      }
      if (e.key === 'ArrowLeft') {
        const prevIdx =
          (NFC_MODELS.findIndex((m) => m.id === model.id) - 1 + NFC_MODELS.length) % NFC_MODELS.length;
        onSelectModel(NFC_MODELS[prevIdx]);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'auto';
    };
  }, [model, onClose, onSelectModel]);

  if (!model) return null;

  const currentIndex = NFC_MODELS.findIndex((m) => m.id === model.id);
  const handleNext = () => {
    const nextIdx = (currentIndex + 1) % NFC_MODELS.length;
    onSelectModel(NFC_MODELS[nextIdx]);
  };
  const handlePrev = () => {
    const prevIdx = (currentIndex - 1 + NFC_MODELS.length) % NFC_MODELS.length;
    onSelectModel(NFC_MODELS[prevIdx]);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
    >
      {/* Modal Dialog Card */}
      <div
        className="relative w-full max-w-3xl max-h-[92vh] flex flex-col md:flex-row bg-gradient-to-b from-[#091b42] to-[#03091c] border border-cyan-400/40 rounded-3xl shadow-[0_0_50px_rgba(6,182,212,0.3)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Fechar visualização"
          className="absolute top-3 right-3 z-30 w-10 h-10 rounded-full bg-black/80 border border-white/20 text-white hover:text-cyan-400 hover:border-cyan-400 flex items-center justify-center transition-colors shadow-lg"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Prev & Next Floating Buttons inside image zone */}
        <button
          onClick={handlePrev}
          aria-label="Modelo anterior"
          className="absolute left-3 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/75 border border-cyan-400/30 text-white hover:text-cyan-300 hover:bg-black/90 flex items-center justify-center transition-colors"
        >
          <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
        </button>

        <button
          onClick={handleNext}
          aria-label="Próximo modelo"
          className="absolute md:left-[calc(55%-20px)] right-3 md:right-auto top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/75 border border-cyan-400/30 text-white hover:text-cyan-300 hover:bg-black/90 flex items-center justify-center transition-colors"
        >
          <ChevronRight className="w-5 h-5 stroke-[2.5]" />
        </button>

        {/* Left: Uncropped Image Viewer */}
        <div className="relative w-full md:w-[55%] min-h-[300px] max-h-[50vh] md:max-h-[85vh] bg-black/60 flex items-center justify-center p-3 sm:p-4">
          <img
            src={model.imageUrl}
            alt={model.title}
            referrerPolicy="no-referrer"
            className="w-full h-full max-h-[75vh] object-contain rounded-xl drop-shadow-[0_10px_25px_rgba(0,0,0,0.8)]"
          />
        </div>

        {/* Right: Info & Direct Purchase CTA */}
        <div className="w-full md:w-[45%] p-5 sm:p-7 flex flex-col justify-between border-t md:border-t-0 md:border-l border-cyan-500/20 bg-gradient-to-b from-[#081533] to-[#020716] overflow-y-auto">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full bg-cyan-950 border border-cyan-400/30 text-[11px] font-bold text-cyan-300 uppercase tracking-wider">
                {model.tag}
              </span>
              <span className="text-xs text-slate-400 font-medium">
                Modelo {currentIndex + 1} de {NFC_MODELS.length}
              </span>
            </div>

            <h3 className="font-heading text-xl sm:text-2xl font-black text-white tracking-tight mb-2">
              {model.title}
            </h3>

            <p className="text-xs font-semibold text-cyan-400 uppercase tracking-wide mb-3">
              {model.category} • Editável no Canva
            </p>

            <p className="text-sm text-slate-300 leading-relaxed mb-6 font-normal">
              {model.description}
            </p>

            <div className="space-y-2 mb-6 text-xs text-slate-200">
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Textos e cores 100% customizáveis</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Compatível com Canva gratuito e Canva Pro</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Edição simples pelo celular ou computador</span>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-cyan-500/20">
            <div className="flex items-baseline justify-between mb-3">
              <span className="text-xs text-slate-400 uppercase font-bold tracking-wider">
                Pacote Completo
              </span>
              <span className="font-heading text-2xl font-black text-white text-glow-cyan">
                {PRODUCT_PRICE}
              </span>
            </div>

            <a
              href={CHECKOUT_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-3d flex items-center justify-center gap-2 w-full py-3.5 px-4 rounded-xl text-sm font-black uppercase text-white bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 border border-cyan-300/40 text-center"
            >
              <span>GARANTIR TODOS OS MODELOS</span>
              <Zap className="w-4 h-4 fill-cyan-200 text-white" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
