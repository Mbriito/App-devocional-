import React from 'react';
import { Search, X, Bookmark, PenTool, BookMarked, Compass } from 'lucide-react';
import { MODULES } from '../data/sermons';

interface ModuleTabsProps {
  activeTab: string; // 'all' | '1'..'10' | 'fav' | 'notes'
  totalCount: number;
  onSelectTab: (tab: string) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
  favCount: number;
  notesCount: number;
  onOpen500Modal?: () => void;
  onOpenTracks?: () => void;
}

export const ModuleTabs: React.FC<ModuleTabsProps> = ({
  activeTab,
  totalCount,
  onSelectTab,
  searchTerm,
  onSearchChange,
  favCount,
  notesCount,
  onOpen500Modal,
  onOpenTracks,
}) => {
  return (
    <div className="no-print sticky top-[53px] sm:top-[57px] z-30 bg-white/95 dark:bg-stone-900/95 backdrop-blur-md border-b border-stone-200/80 dark:border-stone-800 py-2.5 sm:py-3 px-4 shadow-xs">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-2.5 sm:gap-3">
        
        {/* Module Tabs (Scrollable on mobile) */}
        <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-1 md:pb-0 scrollbar-none">
          
          <button
            onClick={() => onSelectTab('all')}
            className={`shrink-0 px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              activeTab === 'all'
                ? 'bg-rosewood-700 text-white shadow-xs'
                : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
            }`}
          >
            Todas ({totalCount})
          </button>

          {onOpenTracks && (
            <button
              onClick={onOpenTracks}
              className="shrink-0 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 bg-rosewood-50 dark:bg-rosewood-950/70 text-rosewood-800 dark:text-rosewood-300 border border-rosewood-200/80 dark:border-rosewood-900 hover:bg-rosewood-100 cursor-pointer"
              title="Ver sequências temáticas por assunto"
            >
              <Compass className="w-3.5 h-3.5 text-rosewood-600 dark:text-rosewood-400" />
              <span>Trilhas Guiadas</span>
            </button>
          )}

          {MODULES.map(m => {
            const isCurrent = activeTab === String(m.id);
            return (
              <button
                key={m.id}
                onClick={() => onSelectTab(String(m.id))}
                className={`shrink-0 px-3 py-1.5 rounded-xl text-xs font-medium transition-all cursor-pointer ${
                  isCurrent
                    ? 'bg-rosewood-700 text-white shadow-xs font-semibold'
                    : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
                }`}
                title={m.subtitle}
              >
                M{m.id}: {m.title.split(' ')[0]}
              </button>
            );
          })}

          {/* Bookmarked / Favorites */}
          <button
            onClick={() => onSelectTab('fav')}
            className={`shrink-0 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'fav'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'bg-amber-50 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 border border-amber-200/80 dark:border-amber-900/60 hover:bg-amber-100'
            }`}
          >
            <Bookmark className="w-3.5 h-3.5 text-amber-500 fill-amber-500" />
            <span>Favoritas ({favCount})</span>
          </button>

          {/* Notes Notebook */}
          <button
            onClick={() => onSelectTab('notes')}
            className={`shrink-0 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'notes'
                ? 'bg-rosewood-800 text-white shadow-xs'
                : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
            }`}
          >
            <PenTool className="w-3.5 h-3.5 text-rosewood-600 dark:text-rosewood-400" />
            <span>Meu Diário ({notesCount})</span>
          </button>

          {/* 500 Outlines PDF Hub */}
          {onOpen500Modal && (
            <button
              onClick={onOpen500Modal}
              className="shrink-0 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 bg-warmgold-50 dark:bg-warmgold-950/40 text-warmgold-800 dark:text-warmgold-300 border border-warmgold-300/80 dark:border-warmgold-800 hover:bg-warmgold-100 cursor-pointer"
              title="Abrir o Acervo de 500 Esboços e salvar em PDF"
            >
              <BookMarked className="w-3.5 h-3.5 text-warmgold-600" />
              <span>500 Esboços (PDF)</span>
            </button>
          )}

        </div>

        {/* Real-time search bar */}
        <div className="w-full md:w-72 relative shrink-0">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            placeholder="Buscar versículo, tema, palavra..."
            className="w-full pl-9 pr-8 py-2 text-xs rounded-xl bg-stone-100 dark:bg-stone-800/90 border border-stone-200 dark:border-stone-700 text-stone-800 dark:text-stone-100 placeholder-stone-400 focus:outline-none focus:border-rosewood-500 focus:bg-white dark:focus:bg-stone-900 transition-colors shadow-2xs"
          />
          {searchTerm && (
            <button
              onClick={() => onSearchChange('')}
              className="absolute right-2.5 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 dark:hover:text-stone-200"
              title="Limpar busca"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

      </div>
    </div>
  );
};
