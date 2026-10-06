import React from 'react';
import { CHECKOUT_URL, PRODUCT_PRICE } from '../data/models';
import { Lock, ShieldCheck, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-cyan-500/20 bg-[#020510] py-10 px-4 text-slate-400 text-xs">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center space-y-6">
        {/* Brand Wordmark & Price */}
        <div className="flex flex-col sm:flex-row items-center gap-3">
          <span className="font-heading font-black text-white text-base tracking-wider">
            PLACAS<span className="text-cyan-400">NFC</span>
          </span>
          <span className="hidden sm:inline text-slate-600">•</span>
          <span className="text-slate-300 font-medium">
            Pacote de Modelos de Artes Editáveis • Apenas {PRODUCT_PRICE}
          </span>
        </div>

        {/* Security badges */}
        <div className="flex flex-wrap items-center justify-center gap-4 text-[11px] text-slate-300">
          <div className="flex items-center gap-1.5">
            <Lock className="w-3.5 h-3.5 text-cyan-400" />
            <span>Checkout Seguro PepperPay</span>
          </div>
          <span className="text-slate-700">•</span>
          <div className="flex items-center gap-1.5">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
            <span>Garantia de Satisfação</span>
          </div>
          <span className="text-slate-700">•</span>
          <div className="flex items-center gap-1.5">
            <Mail className="w-3.5 h-3.5 text-cyan-400" />
            <span>Entrega Digital Imediata</span>
          </div>
        </div>

        {/* Required Disclaimer */}
        <div className="max-w-2xl text-[11px] text-slate-300/80 leading-relaxed border-t border-slate-900 pt-6">
          <p>
            <strong className="text-slate-200">Aviso legal:</strong> Os modelos disponibilizados neste pacote são
            compatíveis e <strong className="text-cyan-300">Editáveis no Canva</strong>. Este produto é de
            autoria independente e não possui vínculo comercial, afiliação, patrocínio ou aprovação oficial
            por parte do Canva Pty Ltd.
          </p>
        </div>

        {/* Copyright */}
        <div className="text-[11px] text-slate-400">
          <p>© {new Date().getFullYear()} Artes Para Placas NFC. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
};
