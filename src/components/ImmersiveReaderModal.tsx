import React, { useState, useEffect } from 'react';
import { 
  X, 
  BookOpen, 
  Sparkles, 
  Heart, 
  ArrowLeft, 
  ArrowRight, 
  CheckCheck, 
  Check, 
  Bookmark, 
  Volume2, 
  VolumeX, 
  Sun, 
  Moon, 
  Coffee, 
  Type
} from 'lucide-react';
import { Sermon } from '../types';

interface ImmersiveReaderModalProps {
  sermon: Sermon | null;
  isOpen: boolean;
  isRead: boolean;
  isFavorite: boolean;
  isPlayingAudio: boolean;
  totalSermonsCount: number;
  onClose: () => void;
  onToggleRead: (num: number) => void;
  onToggleFavorite: (num: number) => void;
  onToggleAudio: (num: number) => void;
  onNavigateToSermon: (num: number) => void;
}

type ReaderTheme = 'light' | 'sepia' | 'dark';

export const ImmersiveReaderModal: React.FC<ImmersiveReaderModalProps> = ({
  sermon,
  isOpen,
  isRead,
  isFavorite,
  isPlayingAudio,
  totalSermonsCount,
  onClose,
  onToggleRead,
  onToggleFavorite,
  onToggleAudio,
  onNavigateToSermon,
}) => {
  const [theme, setTheme] = useState<ReaderTheme>(() => {
    try {
      const saved = localStorage.getItem('mulher_reader_theme');
      return (saved as ReaderTheme) || 'sepia';
    } catch {
      return 'sepia';
    }
  });

  const [fontSizeLevel, setFontSizeLevel] = useState<number>(() => {
    try {
      const saved = localStorage.getItem('mulher_reader_font_size');
      return saved ? parseInt(saved, 10) : 2; // 1: sm, 2: base, 3: lg, 4: xl
    } catch {
      return 2;
    }
  });

  // Handle ESC key to exit focus mode
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleSetTheme = (newTheme: ReaderTheme) => {
    setTheme(newTheme);
    try {
      localStorage.setItem('mulher_reader_theme', newTheme);
    } catch {}
  };

  const handleAdjustFontSize = (delta: number) => {
    setFontSizeLevel(prev => {
      const next = Math.max(1, Math.min(4, prev + delta));
      try {
        localStorage.setItem('mulher_reader_font_size', String(next));
      } catch {}
      return next;
    });
  };

  if (!isOpen || !sermon) return null;

  // Theme background & text color classes
  const getThemeClasses = () => {
    switch (theme) {
      case 'dark':
        return {
          bg: 'bg-stone-950 text-stone-100',
          paper: 'bg-stone-900 border-stone-800 text-stone-200',
          card: 'bg-stone-900/80 border-stone-800',
          muted: 'text-stone-400',
          accent: 'text-rosewood-400',
          verseBox: 'bg-stone-900 border-stone-800 text-stone-100',
          highlight: 'text-warmgold-300',
        };
      case 'sepia':
        return {
          bg: 'bg-[#fcf8f2] text-[#3e3428]',
          paper: 'bg-[#f8f2e6] border-[#e8ddcc] text-[#3e3428]',
          card: 'bg-[#f3ead8] border-[#e4d6bf]',
          muted: 'text-[#7e6d5b]',
          accent: 'text-[#8b263e]',
          verseBox: 'bg-[#f3ead8] border-[#decbb0] text-[#2f271d]',
          highlight: 'text-[#a26815]',
        };
      case 'light':
      default:
        return {
          bg: 'bg-stone-50 text-stone-900',
          paper: 'bg-white border-stone-200 text-stone-800',
          card: 'bg-stone-50 border-stone-200',
          muted: 'text-stone-500',
          accent: 'text-rosewood-700',
          verseBox: 'bg-amber-50/70 border-amber-200/80 text-stone-900',
          highlight: 'text-amber-800',
        };
    }
  };

  // Typography scale classes
  const getFontSizeClasses = () => {
    switch (fontSizeLevel) {
      case 1:
        return {
          title: 'text-2xl sm:text-3xl',
          theme: 'text-base sm:text-lg',
          verse: 'text-sm sm:text-base',
          body: 'text-sm sm:text-base leading-relaxed',
          pointTitle: 'text-sm font-semibold',
          faith: 'text-sm sm:text-base',
          prayer: 'text-sm sm:text-base',
        };
      case 3:
        return {
          title: 'text-3xl sm:text-4xl',
          theme: 'text-xl sm:text-2xl',
          verse: 'text-lg sm:text-xl',
          body: 'text-lg sm:text-xl leading-relaxed',
          pointTitle: 'text-base sm:text-lg font-semibold',
          faith: 'text-lg sm:text-xl',
          prayer: 'text-lg sm:text-xl',
        };
      case 4:
        return {
          title: 'text-4xl sm:text-5xl',
          theme: 'text-2xl sm:text-3xl',
          verse: 'text-xl sm:text-2xl',
          body: 'text-xl sm:text-2xl leading-relaxed',
          pointTitle: 'text-lg sm:text-xl font-bold',
          faith: 'text-xl sm:text-2xl',
          prayer: 'text-xl sm:text-2xl',
        };
      case 2:
      default:
        return {
          title: 'text-2xl sm:text-4xl',
          theme: 'text-lg sm:text-xl',
          verse: 'text-base sm:text-lg',
          body: 'text-base sm:text-lg leading-relaxed',
          pointTitle: 'text-sm sm:text-base font-semibold',
          faith: 'text-base sm:text-lg',
          prayer: 'text-base sm:text-lg',
        };
    }
  };

  const themeClasses = getThemeClasses();
  const fontClasses = getFontSizeClasses();

  return (
    <div className={`fixed inset-0 z-50 overflow-y-auto ${themeClasses.bg} transition-colors duration-200 select-text animate-in fade-in duration-200`}>
      
      {/* Top Floating Distraction-Free Header */}
      <header className={`sticky top-0 z-20 backdrop-blur-md border-b px-4 py-3 flex items-center justify-between gap-3 ${themeClasses.paper} bg-opacity-90`}>
        
        {/* Left: Message Index & Exit Focus */}
        <div className="flex items-center gap-2">
          <button
            onClick={onClose}
            className="p-2 rounded-xl hover:bg-black/10 dark:hover:bg-white/10 transition-colors flex items-center gap-1.5 text-xs font-semibold cursor-pointer"
            title="Sair do Modo Foco (Esc)"
          >
            <X className="w-5 h-5" />
            <span className="hidden sm:inline">Sair do Modo Foco</span>
          </button>

          <span className="text-xs px-2.5 py-0.5 rounded-full bg-black/5 dark:bg-white/10 font-bold">
            #{sermon.num} de {totalSermonsCount}
          </span>
        </div>

        {/* Center: Module Label */}
        <div className="hidden md:block text-center truncate max-w-sm">
          <span className={`text-[11px] font-bold uppercase tracking-wider ${themeClasses.muted}`}>
            Módulo {sermon.modId}: {sermon.modTitle}
          </span>
        </div>

        {/* Right: Customization Controls (Themes, Font Size, Audio, Favorite, Read) */}
        <div className="flex items-center gap-1 sm:gap-2">
          
          {/* Font Size Adjusters */}
          <div className="flex items-center bg-black/5 dark:bg-white/5 rounded-xl p-0.5 border border-black/10 dark:border-white/10">
            <button
              onClick={() => handleAdjustFontSize(-1)}
              disabled={fontSizeLevel <= 1}
              className="px-2 py-1 text-xs font-bold disabled:opacity-40 hover:bg-black/10 dark:hover:bg-white/10 rounded-lg cursor-pointer"
              title="Diminuir tamanho da letra"
            >
              A-
            </button>
            <span className="px-1 text-[11px] opacity-70">
              <Type className="w-3.5 h-3.5" />
            </span>
            <button
              onClick={() => handleAdjustFontSize(1)}
              disabled={fontSizeLevel >= 4}
              className="px-2 py-1 text-xs font-bold disabled:opacity-40 hover:bg-black/10 dark:hover:bg-white/10 rounded-lg cursor-pointer"
              title="Aumentar tamanho da letra"
            >
              A+
            </button>
          </div>

          {/* Theme Palette Selectors */}
          <div className="flex items-center bg-black/5 dark:bg-white/5 rounded-xl p-0.5 border border-black/10 dark:border-white/10">
            <button
              onClick={() => handleSetTheme('light')}
              className={`p-1.5 rounded-lg transition-colors cursor-pointer ${theme === 'light' ? 'bg-white text-stone-900 shadow-2xs font-bold' : 'opacity-60'}`}
              title="Tema Claro"
            >
              <Sun className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => handleSetTheme('sepia')}
              className={`p-1.5 rounded-lg transition-colors cursor-pointer ${theme === 'sepia' ? 'bg-[#ebdcc3] text-[#3e3428] shadow-2xs font-bold' : 'opacity-60'}`}
              title="Tema Sépia (Livro Físico)"
            >
              <Coffee className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => handleSetTheme('dark')}
              className={`p-1.5 rounded-lg transition-colors cursor-pointer ${theme === 'dark' ? 'bg-stone-800 text-white shadow-2xs font-bold' : 'opacity-60'}`}
              title="Tema Escuro"
            >
              <Moon className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Audio Reading */}
          <button
            onClick={() => onToggleAudio(sermon.num)}
            className={`p-2 rounded-xl transition-all cursor-pointer ${
              isPlayingAudio 
                ? 'bg-rosewood-600 text-white shadow-xs animate-pulse' 
                : 'hover:bg-black/10 dark:hover:bg-white/10 opacity-70'
            }`}
            title={isPlayingAudio ? 'Pausar leitura' : 'Ouvir devocional'}
          >
            {isPlayingAudio ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>

          {/* Favorite */}
          <button
            onClick={() => onToggleFavorite(sermon.num)}
            className="p-2 rounded-xl hover:bg-black/10 dark:hover:bg-white/10 transition-colors cursor-pointer"
            title={isFavorite ? 'Remover dos favoritos' : 'Favoritar mensagem'}
          >
            <Bookmark className={`w-4 h-4 ${isFavorite ? 'fill-amber-500 text-amber-500' : 'opacity-60'}`} />
          </button>

          {/* Mark Completed Button */}
          <button
            onClick={() => onToggleRead(sermon.num)}
            className={`px-3 py-1.5 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
              isRead
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-black/10 dark:bg-white/10 hover:bg-black/15'
            }`}
          >
            {isRead ? <CheckCheck className="w-3.5 h-3.5" /> : <Check className="w-3.5 h-3.5" />}
            <span className="hidden sm:inline">{isRead ? 'Concluída' : 'Marcar Lida'}</span>
          </button>

        </div>
      </header>

      {/* Main Focus Reading Container - Clean & Typography-Centric */}
      <main className="max-w-2xl sm:max-w-3xl mx-auto px-5 sm:px-8 py-8 sm:py-16 space-y-8 sm:space-y-12">
        
        {/* Header Section: Module & Title */}
        <div className="space-y-3 text-center sm:text-left">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <span className={`text-xs font-bold uppercase tracking-widest ${themeClasses.accent}`}>
              Módulo {sermon.modId} • {sermon.modTitle}
            </span>
          </div>

          <h1 className={`font-serif font-bold tracking-tight leading-snug ${fontClasses.title}`}>
            {sermon.title}
          </h1>

          <div className="h-[2px] w-20 bg-rosewood-500/40 rounded-full mx-auto sm:mx-0 mt-4" />
        </div>

        {/* Scripture Box - Large, Reverent Typography */}
        <div className={`p-6 sm:p-8 rounded-3xl border ${themeClasses.verseBox} space-y-3 relative overflow-hidden shadow-2xs`}>
          <div className="flex items-center gap-2">
            <BookOpen className={`w-4 h-4 ${themeClasses.accent}`} />
            <span className="text-xs font-bold uppercase tracking-wider opacity-80">
              Texto Bíblico: {sermon.scripture}
            </span>
          </div>

          <blockquote className={`font-serif italic leading-relaxed pt-1 ${fontClasses.verse}`}>
            "{sermon.scriptureVerseText}"
          </blockquote>
        </div>

        {/* Central Biblical Theme / Reflection */}
        <div className="space-y-3">
          <span className={`text-[11px] font-bold uppercase tracking-widest ${themeClasses.muted} block`}>
            Reflexão Central
          </span>
          <p className={`font-serif leading-relaxed ${fontClasses.theme} opacity-95`}>
            {sermon.theme}
          </p>
        </div>

        {/* The 4 Practical Points - Clean Paragraphs */}
        <div className="space-y-6 pt-4 border-t border-black/10 dark:border-white/10">
          <span className={`text-xs font-bold uppercase tracking-widest ${themeClasses.muted} block`}>
            Aplicação Prática no Dia a Dia
          </span>

          <div className="space-y-6">
            {sermon.points.map((pt, idx) => (
              <div key={idx} className="space-y-1.5">
                <div className="flex items-baseline gap-2.5">
                  <span className={`text-xs font-bold px-2 py-0.5 rounded-md ${themeClasses.card} shrink-0`}>
                    0{idx + 1}
                  </span>
                  <h2 className={`${fontClasses.pointTitle} ${themeClasses.accent}`}>
                    {pt.title}
                  </h2>
                </div>
                <p className={`pl-7 opacity-90 ${fontClasses.body}`}>
                  {pt.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Palavra de Fé & Declaração */}
        <div className={`p-6 rounded-3xl border ${themeClasses.card} space-y-2`}>
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-warmgold-500 fill-warmgold-400" />
            <span className={`text-xs font-bold uppercase tracking-wider ${themeClasses.highlight}`}>
              Palavra de Fé & Encorajamento
            </span>
          </div>
          <p className={`font-medium ${fontClasses.faith} opacity-95`}>
            {sermon.faith}
          </p>
        </div>

        {/* Oração Pessoal */}
        <div className={`p-6 rounded-3xl border ${themeClasses.card} space-y-2`}>
          <div className="flex items-center gap-2">
            <Heart className="w-4 h-4 text-rosewood-500 fill-rosewood-400" />
            <span className={`text-xs font-bold uppercase tracking-wider ${themeClasses.accent}`}>
              Oração Pessoal do Dia
            </span>
          </div>
          <p className={`font-serif italic leading-relaxed ${fontClasses.prayer} opacity-90`}>
            "{sermon.prayer}"
          </p>
        </div>

        {/* Bottom Navigation & Completion Bar */}
        <div className="pt-8 pb-16 border-t border-black/10 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          
          {/* Previous Lesson */}
          <div>
            {sermon.num > 1 ? (
              <button
                onClick={() => onNavigateToSermon(sermon.num - 1)}
                className="px-4 py-2.5 rounded-2xl bg-black/5 dark:bg-white/10 hover:bg-black/10 text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Mensagem #{sermon.num - 1}</span>
              </button>
            ) : <span />}
          </div>

          {/* Conclude Devotional */}
          <button
            onClick={() => onToggleRead(sermon.num)}
            className={`px-6 py-3 rounded-2xl text-xs font-bold transition-all shadow-md flex items-center gap-2 cursor-pointer ${
              isRead
                ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                : 'bg-rosewood-700 hover:bg-rosewood-800 text-white active:scale-95'
            }`}
          >
            {isRead ? (
              <>
                <CheckCheck className="w-4 h-4" />
                <span>Mensagem Concluída ✓</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-warmgold-300" />
                <span>Marcar Esta Mensagem Como Concluída</span>
              </>
            )}
          </button>

          {/* Next Lesson */}
          <div>
            {sermon.num < totalSermonsCount ? (
              <button
                onClick={() => onNavigateToSermon(sermon.num + 1)}
                className="px-4 py-2.5 rounded-2xl bg-black/5 dark:bg-white/10 hover:bg-black/10 text-xs font-semibold flex items-center gap-2 transition-colors cursor-pointer"
              >
                <span>Mensagem #{sermon.num + 1}</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            ) : <span />}
          </div>

        </div>

      </main>

    </div>
  );
};
