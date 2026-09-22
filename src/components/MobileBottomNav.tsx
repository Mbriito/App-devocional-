import React from 'react';
import { Sparkles, BookHeart, Layers, Bookmark, PenTool } from 'lucide-react';

interface MobileBottomNavProps {
  activeTab: string;
  onSelectTab: (tab: string) => void;
  onOpenDaily: () => void;
  favCount: number;
  notesCount: number;
}

export const MobileBottomNav: React.FC<MobileBottomNavProps> = ({
  activeTab,
  onSelectTab,
  onOpenDaily,
  favCount,
  notesCount,
}) => {
  return (
    <nav className="no-print md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-stone-900/95 backdrop-blur-md border-t border-stone-200/80 dark:border-stone-800 px-2 py-1.5 shadow-lg flex items-center justify-around transition-colors">
      
      {/* Hoje */}
      <button
        onClick={onOpenDaily}
        className="flex flex-col items-center justify-center p-1.5 min-w-[56px] min-h-[44px] rounded-xl text-stone-600 dark:text-stone-400 hover:text-rosewood-700 dark:hover:text-rosewood-300 transition-colors"
      >
        <Sparkles className="w-5 h-5 text-warmgold-500" />
        <span className="text-[10px] font-medium mt-0.5">Hoje</span>
      </button>

      {/* Todas as Mensagens */}
      <button
        onClick={() => onSelectTab('all')}
        className={`flex flex-col items-center justify-center p-1.5 min-w-[56px] min-h-[44px] rounded-xl transition-colors ${
          activeTab === 'all'
            ? 'text-rosewood-700 dark:text-rosewood-400 font-bold'
            : 'text-stone-600 dark:text-stone-400'
        }`}
      >
        <BookHeart className="w-5 h-5" />
        <span className="text-[10px] mt-0.5">50 Lições</span>
      </button>

      {/* Módulos */}
      <button
        onClick={() => onSelectTab('1')}
        className={`flex flex-col items-center justify-center p-1.5 min-w-[56px] min-h-[44px] rounded-xl transition-colors ${
          ['1', '2', '3', '4', '5'].includes(activeTab)
            ? 'text-rosewood-700 dark:text-rosewood-400 font-bold'
            : 'text-stone-600 dark:text-stone-400'
        }`}
      >
        <Layers className="w-5 h-5" />
        <span className="text-[10px] mt-0.5">Módulos</span>
      </button>

      {/* Favoritas */}
      <button
        onClick={() => onSelectTab('fav')}
        className={`flex flex-col items-center justify-center p-1.5 min-w-[56px] min-h-[44px] rounded-xl transition-colors relative ${
          activeTab === 'fav'
            ? 'text-amber-600 dark:text-amber-400 font-bold'
            : 'text-stone-600 dark:text-stone-400'
        }`}
      >
        <Bookmark className="w-5 h-5" />
        <span className="text-[10px] mt-0.5">Favoritas</span>
        {favCount > 0 && (
          <span className="absolute top-1 right-2 w-4 h-4 bg-amber-500 text-white rounded-full text-[9px] font-bold flex items-center justify-center">
            {favCount}
          </span>
        )}
      </button>

      {/* Meu Diário */}
      <button
        onClick={() => onSelectTab('notes')}
        className={`flex flex-col items-center justify-center p-1.5 min-w-[56px] min-h-[44px] rounded-xl transition-colors relative ${
          activeTab === 'notes'
            ? 'text-rosewood-700 dark:text-rosewood-400 font-bold'
            : 'text-stone-600 dark:text-stone-400'
        }`}
      >
        <PenTool className="w-5 h-5" />
        <span className="text-[10px] mt-0.5">Diário</span>
        {notesCount > 0 && (
          <span className="absolute top-1 right-2 w-4 h-4 bg-rosewood-700 text-white rounded-full text-[9px] font-bold flex items-center justify-center">
            {notesCount}
          </span>
        )}
      </button>

    </nav>
  );
};
