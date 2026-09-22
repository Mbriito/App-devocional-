import React from 'react';
import { BookHeart, Sparkles, CheckCircle2, Share2, Moon, Sun, Printer, Lock, Type } from 'lucide-react';
import { PWAInstallButton } from './PWAInstallButton';

interface HeaderProps {
  readCount: number;
  totalCount: number;
  isDark: boolean;
  onToggleTheme: () => void;
  onOpenDaily: () => void;
  onOpenProgress: () => void;
  onShareApp: () => void;
  onLockApp: () => void;
  onOpenFontSize: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  readCount,
  totalCount,
  isDark,
  onToggleTheme,
  onOpenDaily,
  onOpenProgress,
  onShareApp,
  onLockApp,
  onOpenFontSize,
}) => {
  return (
    <header className="no-print sticky top-0 z-40 bg-white/95 dark:bg-stone-900/95 backdrop-blur-md border-b border-rosewood-200/60 dark:border-rosewood-950/80 shadow-xs transition-colors">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-between gap-3">
        
        {/* Brand & Identity with elegant emblem */}
        <div className="flex items-center gap-2.5 sm:gap-3">
          <div className="relative">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-2xl bg-gradient-to-tr from-rosewood-900 via-rosewood-800 to-rosewood-600 flex items-center justify-center text-white shadow-md shadow-rosewood-500/20 ring-1 ring-warmgold-400/40 shrink-0">
              <BookHeart className="w-5 h-5 text-warmgold-200" />
            </div>
          </div>
          <div>
            <span className="text-[10px] font-bold tracking-widest text-warmgold-600 dark:text-warmgold-400 uppercase font-display block leading-none mb-0.5">
              Devocional da Mulher Cristã
            </span>
            <h1 className="text-base sm:text-lg font-serif font-extrabold text-stone-900 dark:text-white leading-tight">
              Mulher Plena
            </h1>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1.5 sm:gap-2">
          
          {/* In-App PWA Install Button */}
          <PWAInstallButton />

          {/* Daily Quick Pick (Desktop) */}
          <button
            onClick={onOpenDaily}
            className="hidden md:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-gradient-to-r from-rosewood-50 to-amber-50/50 hover:from-rosewood-100 hover:to-amber-100 dark:from-rosewood-950/70 dark:to-stone-900 text-rosewood-900 dark:text-rosewood-200 text-xs font-semibold border border-rosewood-200/80 dark:border-rosewood-900 transition-all cursor-pointer shadow-2xs"
            title="Ver mensagem devocional indicada para hoje"
          >
            <Sparkles className="w-3.5 h-3.5 text-warmgold-500 fill-warmgold-400" />
            <span>Mensagem de Hoje</span>
          </button>

          {/* Reading Progress Pill */}
          <button
            onClick={onOpenProgress}
            className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1.5 rounded-xl bg-stone-100 dark:bg-stone-800/80 text-stone-700 dark:text-stone-300 text-xs font-medium border border-stone-200/80 dark:border-stone-700/80 hover:border-rosewood-400 transition-all shadow-2xs cursor-pointer"
            title="Ver progresso de leitura"
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span className="font-bold text-stone-900 dark:text-white">{readCount}</span>
            <span className="text-stone-400 dark:text-stone-500">/{totalCount}</span>
          </button>

          {/* Font Size Adjuster for Accessibility */}
          <button
            onClick={onOpenFontSize}
            className="p-2 rounded-xl text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 border border-stone-200/80 dark:border-stone-800 transition-colors cursor-pointer"
            title="Ajustar tamanho da letra e acessibilidade"
            aria-label="Ajustar tamanho da fonte"
          >
            <Type className="w-4 h-4" />
          </button>

          {/* WhatsApp Recommendation */}
          <button
            onClick={onShareApp}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-xs transition-colors cursor-pointer"
            title="Compartilhar aplicativo com uma amiga"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Compartilhar</span>
          </button>

          {/* Theme Toggle (Dark/Light) */}
          <button
            onClick={onToggleTheme}
            className="p-2 rounded-xl text-stone-600 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 border border-stone-200/80 dark:border-stone-800 transition-colors cursor-pointer"
            title={isDark ? "Mudar para modo claro" : "Mudar para modo escuro"}
            aria-label="Alternar tema"
          >
            {isDark ? <Sun className="w-4 h-4 text-warmgold-400" /> : <Moon className="w-4 h-4 text-stone-700" />}
          </button>

          {/* Print / PDF Export */}
          <button
            onClick={() => window.print()}
            className="hidden sm:inline-flex p-2 rounded-xl text-rosewood-700 dark:text-rosewood-300 hover:bg-rosewood-50 dark:hover:bg-rosewood-950 border border-rosewood-200 dark:border-rosewood-900 transition-colors cursor-pointer"
            title="Imprimir ou Salvar em PDF"
            aria-label="Imprimir devocional"
          >
            <Printer className="w-4 h-4" />
          </button>

          {/* Lock / Protect App */}
          <button
            onClick={onLockApp}
            className="p-2 rounded-xl text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 border border-stone-200/80 dark:border-stone-800 transition-colors cursor-pointer"
            title="Bloquear com senha de aluna"
            aria-label="Bloquear aplicativo"
          >
            <Lock className="w-4 h-4" />
          </button>

        </div>

      </div>
    </header>
  );
};
