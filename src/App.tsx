import React, { useState } from 'react';
import { ModelItem } from './data/models';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Carousel } from './components/Carousel';
import { OfferCard } from './components/OfferCard';
import { Benefits } from './components/Benefits';
import { GalleryGrid } from './components/GalleryGrid';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { FloatingMobileBar } from './components/FloatingMobileBar';
import { ImageModal } from './components/ImageModal';

export default function App() {
  const [selectedModel, setSelectedModel] = useState<ModelItem | null>(null);

  return (
    <div className="min-h-screen bg-[#020617] text-slate-100 flex flex-col relative overflow-x-hidden selection:bg-cyan-500 selection:text-black">
      {/* Background ambient lighting and neon grid accents */}
      <div 
        className="fixed inset-0 pointer-events-none -z-10 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(14,165,233,0.18),rgba(255,255,255,0))]" 
        aria-hidden="true" 
      />
      <div 
        className="fixed inset-0 pointer-events-none -z-10 bg-[radial-gradient(ellipse_60%_50%_at_50%_120%,rgba(37,99,235,0.22),rgba(255,255,255,0))]" 
        aria-hidden="true" 
      />

      {/* Top Navbar */}
      <Navbar />

      {/* Main Content Area */}
      <main className="flex-1 w-full">
        {/* Hero Section */}
        <Hero />

        {/* Automatic 3D Carousel Section */}
        <Carousel onSelectModel={(model) => setSelectedModel(model)} />

        {/* Prominent Offer Section */}
        <OfferCard />

        {/* Benefits Section */}
        <Benefits />

        {/* Secondary Gallery Grid */}
        <GalleryGrid onSelectModel={(model) => setSelectedModel(model)} />

        {/* Final Conversion CTA */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Floating Sticky CTA */}
      <FloatingMobileBar />

      {/* Lightbox Modal for Uncropped Image Previews */}
      <ImageModal
        model={selectedModel}
        onClose={() => setSelectedModel(null)}
        onSelectModel={(model) => setSelectedModel(model)}
      />
    </div>
  );
}
