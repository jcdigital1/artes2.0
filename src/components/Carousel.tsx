import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';
import { NFC_MODELS, ModelItem } from '../data/models';

interface CarouselProps {
  onSelectModel: (model: ModelItem) => void;
}

export const Carousel: React.FC<CarouselProps> = ({ onSelectModel }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [dragStartX, setDragStartX] = useState<number | null>(null);
  const [dragCurrentX, setDragCurrentX] = useState<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const total = NFC_MODELS.length;

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  // Autoplay timer with pause support
  useEffect(() => {
    if (isPaused || isDragging) return;

    const timer = setInterval(() => {
      nextSlide();
    }, 3500);

    return () => clearInterval(timer);
  }, [isPaused, isDragging, nextSlide]);

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    setDragStartX(e.touches[0].clientX);
    setDragCurrentX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (dragStartX === null) return;
    setDragCurrentX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (dragStartX !== null && dragCurrentX !== null) {
      const diff = dragStartX - dragCurrentX;
      if (diff > 45) {
        nextSlide();
      } else if (diff < -45) {
        prevSlide();
      }
    }
    setDragStartX(null);
    setDragCurrentX(null);
    setIsPaused(false);
  };

  // Mouse drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setIsPaused(true);
    setDragStartX(e.clientX);
    setDragCurrentX(e.clientX);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || dragStartX === null) return;
    setDragCurrentX(e.clientX);
  };

  const handleMouseUp = () => {
    if (isDragging && dragStartX !== null && dragCurrentX !== null) {
      const diff = dragStartX - dragCurrentX;
      if (diff > 50) {
        nextSlide();
      } else if (diff < -50) {
        prevSlide();
      }
    }
    setIsDragging(false);
    setDragStartX(null);
    setDragCurrentX(null);
    setIsPaused(false);
  };

  const handleMouseLeave = () => {
    if (isDragging) {
      handleMouseUp();
    }
    setIsPaused(false);
  };

  // Compute slide position relative to current index (-1 = prev, 0 = current, 1 = next)
  const getSlideOffset = (index: number) => {
    let diff = (index - currentIndex) % total;
    if (diff < -total / 2) diff += total;
    if (diff > total / 2) diff -= total;
    return diff;
  };

  return (
    <section className="relative py-6 sm:py-10 max-w-5xl mx-auto px-2 sm:px-4 select-none">
      {/* Background radial glow */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[320px] sm:w-[680px] h-[360px] bg-gradient-to-r from-blue-700/20 via-cyan-500/25 to-blue-700/20 rounded-full blur-[80px] pointer-events-none -z-10" 
        aria-hidden="true" 
      />

      {/* Carousel Container */}
      <div
        className="relative overflow-hidden cursor-grab active:cursor-grabbing py-4"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={handleMouseLeave}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        {/* Navigation arrows (desktop & mobile) */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            prevSlide();
          }}
          aria-label="Modelo anterior"
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#030d22]/90 border border-cyan-400/40 text-cyan-300 hover:text-white hover:bg-cyan-950/80 hover:border-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-950/80 backdrop-blur-md transition-all duration-200 active:scale-95"
        >
          <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
        </button>

        <button
          onClick={(e) => {
            e.stopPropagation();
            nextSlide();
          }}
          aria-label="Próximo modelo"
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-[#030d22]/90 border border-cyan-400/40 text-cyan-300 hover:text-white hover:bg-cyan-950/80 hover:border-cyan-400 flex items-center justify-center shadow-lg shadow-cyan-950/80 backdrop-blur-md transition-all duration-200 active:scale-95"
        >
          <ChevronRight className="w-6 h-6 stroke-[2.5]" />
        </button>

        {/* 3D Carousel Stage */}
        <div className="relative h-[380px] sm:h-[460px] md:h-[520px] flex items-center justify-center perspective-[1200px]">
          {NFC_MODELS.map((model, idx) => {
            const offset = getSlideOffset(idx);
            const isCenter = offset === 0;
            const isPrev = offset === -1;
            const isNext = offset === 1;
            const isVisible = isCenter || isPrev || isNext;

            if (!isVisible) {
              return null;
            }

            // Calculate responsive translate and 3D transforms
            let transformClass = '';
            let zIndex = 10;
            let opacityClass = 'opacity-0 pointer-events-none';

            if (isCenter) {
              transformClass = 'translate-x-0 scale-100 rotate-y-0';
              zIndex = 25;
              opacityClass = 'opacity-100';
            } else if (isPrev) {
              transformClass = '-translate-x-[72%] sm:-translate-x-[65%] md:-translate-x-[60%] scale-[0.84] sm:scale-[0.88] rotate-y-12';
              zIndex = 15;
              opacityClass = 'opacity-50 sm:opacity-75';
            } else if (isNext) {
              transformClass = 'translate-x-[72%] sm:translate-x-[65%] md:translate-x-[60%] scale-[0.84] sm:scale-[0.88] -rotate-y-12';
              zIndex = 15;
              opacityClass = 'opacity-50 sm:opacity-75';
            }

            return (
              <div
                key={model.id}
                style={{
                  transformStyle: 'preserve-3d',
                  zIndex,
                }}
                className={`absolute transition-all duration-500 ease-out will-change-transform ${transformClass} ${opacityClass}`}
              >
                {/* Card Container */}
                <div
                  onClick={() => onSelectModel(model)}
                  className={`group relative w-[260px] sm:w-[320px] md:w-[360px] rounded-2xl p-2.5 sm:p-3 bg-gradient-to-b from-[#0e214d] via-[#071333] to-[#02091c] border ${
                    isCenter
                      ? 'border-cyan-400/70 shadow-[0_15px_40px_-10px_rgba(6,182,212,0.5),0_0_25px_rgba(37,99,235,0.3)]'
                      : 'border-cyan-500/20 shadow-xl'
                  } transition-all duration-300 cursor-pointer overflow-hidden`}
                >
                  {/* Subtle glass reflection overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent pointer-events-none rounded-2xl" />

                  {/* Image wrapper - maintain aspect ratio without distortion */}
                  <div className="relative aspect-[3/4] w-full rounded-xl overflow-hidden bg-slate-950 flex items-center justify-center shadow-inner">
                    <img
                      src={model.imageUrl}
                      alt={model.title}
                      referrerPolicy="no-referrer"
                      loading={idx < 2 ? 'eager' : 'lazy'}
                      className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                    />

                    {/* Expand Badge on Hover / Active */}
                    <div className="absolute bottom-2.5 right-2.5 px-2.5 py-1 rounded-lg bg-black/75 border border-cyan-400/40 text-cyan-300 text-xs font-semibold flex items-center gap-1.5 backdrop-blur-md opacity-90 group-hover:opacity-100 transition-opacity">
                      <Maximize2 className="w-3 h-3" />
                      <span className="hidden sm:inline">Ver detalhes</span>
                    </div>

                    {/* Tag badge */}
                    <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-cyan-950/85 border border-cyan-400/40 text-[11px] font-bold text-cyan-300 tracking-wider uppercase">
                      {model.tag}
                    </div>
                  </div>

                  {/* Card Title & Subtitle */}
                  <div className="mt-2.5 px-1 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-semibold text-cyan-400/90 tracking-wide uppercase">
                        {model.category}
                      </p>
                      <h3 className="text-sm sm:text-base font-bold text-white tracking-tight truncate">
                        {model.title}
                      </h3>
                    </div>
                    <span className="text-[11px] font-bold text-slate-300 bg-white/5 border border-white/10 px-2 py-0.5 rounded-md">
                      Canva
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Indicators Dots */}
        <div className="flex items-center justify-center gap-2 mt-4 sm:mt-6">
          {NFC_MODELS.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              aria-label={`Ir para modelo ${index + 1}`}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === index
                  ? 'w-7 h-2.5 bg-gradient-to-r from-cyan-400 to-blue-500 shadow-[0_0_10px_rgba(6,182,212,0.7)]'
                  : 'w-2.5 h-2.5 bg-slate-700 hover:bg-slate-500'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
