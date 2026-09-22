import React from 'react';
import { ArrowUp, Share2, Heart } from 'lucide-react';

interface FooterProps {
  onScrollToTop: () => void;
  onShareApp: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onScrollToTop, onShareApp }) => {
  return (
    <footer className="no-print bg-white dark:bg-stone-900 border-t border-stone-200/80 dark:border-stone-800 py-8 pb-24 sm:pb-10 mt-12 transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-xs text-stone-500 dark:text-stone-400">
        
        <div className="space-y-1">
          <p className="font-serif font-bold text-stone-900 dark:text-stone-100 text-sm">
            Mulher Plena & Restaurada
          </p>
          <p className="flex items-center justify-center sm:justify-start gap-1 font-light">
            <span>Desenvolvido com carinho para o seu crescimento diário em Deus</span>
            <Heart className="w-3.5 h-3.5 text-rosewood-500 fill-rosewood-500 inline shrink-0" />
          </p>
        </div>

        <div className="flex items-center gap-2.5">
          <button
            onClick={onScrollToTop}
            className="p-2 px-3 rounded-xl border border-stone-200 dark:border-stone-800 hover:bg-stone-50 dark:hover:bg-stone-800 transition-colors text-stone-700 dark:text-stone-300 flex items-center gap-1.5 font-medium"
            title="Voltar ao início"
          >
            <ArrowUp className="w-3.5 h-3.5" />
            <span>Topo</span>
          </button>

          <button
            onClick={onShareApp}
            className="px-3.5 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold transition-colors flex items-center gap-1.5 shadow-2xs"
            title="Indicar para uma amiga"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Compartilhar App</span>
          </button>
        </div>

      </div>
    </footer>
  );
};
