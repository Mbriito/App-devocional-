import React, { useState } from 'react';
import { 
  Volume2, 
  VolumeX, 
  PenTool, 
  Bookmark, 
  Share2, 
  Check, 
  CheckCheck, 
  BookOpen, 
  Compass, 
  Sparkles, 
  Heart, 
  Copy,
  Check as IconCheck,
  MessageCircle,
  Quote,
  ArrowLeft,
  ArrowRight
} from 'lucide-react';
import { Sermon, TextSizeOption } from '../types';
import { THEMATIC_TRACKS } from '../data/thematicTracks';
import { getVerseShareText, shareOnWhatsApp } from '../utils/whatsapp';

interface SermonCardProps {
  sermon: Sermon;
  isRead: boolean;
  isFavorite: boolean;
  hasNote: boolean;
  isPlayingAudio: boolean;
  textSize: TextSizeOption;
  activeTrackId?: string | null;
  totalSermonsCount?: number;
  onNavigateToSermon?: (num: number) => void;
  onToggleRead: (num: number) => void;
  onToggleFavorite: (num: number) => void;
  onOpenNotes: (num: number) => void;
  onOpenShare: (num: number, initialTab?: 'verse' | 'full') => void;
  onToggleAudio: (num: number) => void;
  onToast?: (msg: string) => void;
}

export const SermonCard: React.FC<SermonCardProps> = ({
  sermon,
  isRead,
  isFavorite,
  hasNote,
  isPlayingAudio,
  textSize,
  activeTrackId,
  totalSermonsCount = 100,
  onNavigateToSermon,
  onToggleRead,
  onToggleFavorite,
  onOpenNotes,
  onOpenShare,
  onToggleAudio,
  onToast,
}) => {
  const [copiedVerse, setCopiedVerse] = useState(false);

  const currentTrack = activeTrackId ? THEMATIC_TRACKS.find(t => t.id === activeTrackId) : null;
  const trackIndex = currentTrack ? currentTrack.sermonIds.indexOf(sermon.num) : -1;
  const prevTrackSermonNum = trackIndex > 0 ? currentTrack!.sermonIds[trackIndex - 1] : null;
  const nextTrackSermonNum = trackIndex >= 0 && trackIndex < currentTrack!.sermonIds.length - 1 
    ? currentTrack!.sermonIds[trackIndex + 1] 
    : null;

  // Map font sizing for reading comfort
  const getTextClasses = () => {
    switch (textSize) {
      case 'sm':
        return {
          title: 'text-lg sm:text-xl',
          theme: 'text-xs sm:text-sm',
          body: 'text-xs',
          verse: 'text-xs sm:text-sm',
        };
      case 'lg':
        return {
          title: 'text-xl sm:text-2xl',
          theme: 'text-base sm:text-lg',
          body: 'text-sm sm:text-base',
          verse: 'text-sm sm:text-base',
        };
      case 'xl':
        return {
          title: 'text-2xl sm:text-3xl',
          theme: 'text-lg sm:text-xl',
          body: 'text-base sm:text-lg',
          verse: 'text-base sm:text-lg',
        };
      case 'base':
      default:
        return {
          title: 'text-xl sm:text-2xl',
          theme: 'text-sm sm:text-base',
          body: 'text-xs sm:text-sm',
          verse: 'text-xs sm:text-sm',
        };
    }
  };

  const fontClasses = getTextClasses();

  const handleCopyVerse = () => {
    const textToCopy = `"${sermon.scriptureVerseText}" — ${sermon.scripture}`;
    navigator.clipboard.writeText(textToCopy);
    setCopiedVerse(true);
    setTimeout(() => setCopiedVerse(false), 2000);
  };

  const handleShareVerseWhatsApp = () => {
    const text = getVerseShareText(sermon);
    shareOnWhatsApp(text);
    if (onToast) {
      onToast(`Abrindo WhatsApp com o Versículo #${sermon.num}... 📖`);
    }
  };

  return (
    <article
      id={`sermon-${sermon.num}`}
      className={`card-sermon print-break-inside-avoid bg-white dark:bg-stone-900 rounded-3xl p-5 sm:p-8 shadow-sm hover:shadow-md border transition-all duration-300 relative overflow-hidden ${
        isRead
          ? 'border-emerald-300/80 dark:border-emerald-900/60 bg-gradient-to-b from-emerald-50/20 via-white to-white dark:from-emerald-950/20 dark:via-stone-900 dark:to-stone-900'
          : 'border-stone-200/90 dark:border-stone-800 hover:border-rosewood-300/70 dark:hover:border-rosewood-800/60'
      }`}
    >
      {/* Top Bar: Number, Module Tag, Title & Action Icons */}
      <div className="flex flex-wrap items-start justify-between gap-3 border-b border-stone-100 dark:border-stone-800 pb-4">
        
        <div className="flex items-start gap-3.5">
          <div className="relative shrink-0 mt-0.5">
            <span className="w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-gradient-to-br from-rosewood-900 via-rosewood-800 to-rosewood-700 text-warmgold-200 font-bold text-sm sm:text-base flex items-center justify-center shadow-sm ring-1 ring-warmgold-400/40">
              #{sermon.num}
            </span>
            {isRead && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-emerald-500 rounded-full border-2 border-white dark:border-stone-900 flex items-center justify-center text-white text-[9px] font-bold">
                ✓
              </span>
            )}
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-rosewood-600 dark:text-rosewood-400 block leading-tight">
                Módulo {sermon.modId}: {sermon.modTitle}
              </span>
            </div>
            <h3 className={`font-serif font-bold text-stone-900 dark:text-white leading-snug mt-1 ${fontClasses.title}`}>
              {sermon.title}
            </h3>
          </div>
        </div>

        {/* Action Buttons Toolbar */}
        <div className="no-print flex items-center gap-1 sm:gap-1.5 self-end sm:self-auto shrink-0">
          
          {/* Audio Reading */}
          <button
            onClick={() => onToggleAudio(sermon.num)}
            title={isPlayingAudio ? 'Pausar áudio' : 'Ouvir mensagem em voz alta'}
            className={`p-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              isPlayingAudio
                ? 'bg-rosewood-600 text-white shadow-xs animate-pulse'
                : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
            }`}
            aria-label="Ouvir devocional"
          >
            {isPlayingAudio ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
          </button>

          {/* Notes / Diary */}
          <button
            onClick={() => onOpenNotes(sermon.num)}
            title="Minhas anotações e oração"
            className={`p-2 rounded-xl text-xs font-semibold transition-all relative cursor-pointer ${
              hasNote
                ? 'bg-rosewood-100 dark:bg-rosewood-950/80 text-rosewood-800 dark:text-rosewood-300 border border-rosewood-300 dark:border-rosewood-800'
                : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
            }`}
            aria-label="Anotações pessoais"
          >
            <PenTool className="w-4 h-4" />
            {hasNote && (
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-rosewood-600 rounded-full border-2 border-white dark:border-stone-900" />
            )}
          </button>

          {/* Favorite */}
          <button
            onClick={() => onToggleFavorite(sermon.num)}
            title={isFavorite ? 'Remover dos favoritos' : 'Favoritar mensagem'}
            className={`p-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
              isFavorite
                ? 'bg-amber-500 text-white shadow-xs'
                : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-300 hover:bg-stone-200 dark:hover:bg-stone-700'
            }`}
            aria-label="Favoritar"
          >
            <Bookmark className={`w-4 h-4 ${isFavorite ? 'fill-current' : ''}`} />
          </button>

          {/* Share on WhatsApp */}
          <button
            onClick={() => onOpenShare(sermon.num)}
            title="Compartilhar no WhatsApp com uma amiga"
            className="p-2 rounded-xl text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200/80 dark:border-emerald-900/60 transition-colors cursor-pointer"
            aria-label="Compartilhar"
          >
            <Share2 className="w-4 h-4" />
          </button>

          {/* Mark as read */}
          <button
            onClick={() => onToggleRead(sermon.num)}
            title={isRead ? 'Desmarcar como lida' : 'Marcar mensagem como lida'}
            className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all shadow-2xs cursor-pointer ${
              isRead
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'bg-stone-100 dark:bg-stone-800 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-700'
            }`}
          >
            {isRead ? <CheckCheck className="w-4 h-4" /> : <Check className="w-4 h-4" />}
            <span className="hidden sm:inline">{isRead ? 'Concluída' : 'Marcar'}</span>
          </button>

        </div>

      </div>

      {/* Versículo-Base: Striking Editorial Box with Direct WhatsApp Sharing */}
      <div className="mt-5 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-amber-50/80 via-rosewood-50/40 to-stone-50 dark:from-stone-900 dark:via-rosewood-950/30 dark:to-stone-900 border border-amber-200/80 dark:border-amber-900/40 shadow-xs relative overflow-hidden">
        
        {/* Decorative Quote watermark */}
        <Quote className="absolute -top-2 -right-2 w-14 h-14 text-amber-500/10 dark:text-amber-400/5 pointer-events-none" />

        {/* Scripture Header & Action Buttons */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2 relative z-10">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-white/90 dark:bg-stone-800/90 text-rosewood-800 dark:text-rosewood-300 text-xs font-bold uppercase tracking-wider border border-rosewood-200/60 dark:border-rosewood-900/60 shadow-2xs">
            <BookOpen className="w-3.5 h-3.5 text-warmgold-500 shrink-0" />
            <span>Texto-Base Bíblico: {sermon.scripture}</span>
          </div>

          <div className="no-print flex items-center gap-1.5">
            {/* Direct WhatsApp Share for the Verse */}
            <button
              onClick={handleShareVerseWhatsApp}
              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-semibold transition-all shadow-2xs cursor-pointer active:scale-95"
              title="Compartilhar versículo no WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span>WhatsApp</span>
            </button>

            {/* Copy Verse */}
            <button
              onClick={handleCopyVerse}
              className="p-1 px-2 rounded-lg bg-white/80 dark:bg-stone-800/80 hover:bg-white dark:hover:bg-stone-800 text-[11px] font-medium text-stone-700 dark:text-stone-300 border border-stone-200/70 dark:border-stone-700 transition-colors flex items-center gap-1 cursor-pointer"
              title="Copiar versículo"
            >
              {copiedVerse ? (
                <>
                  <IconCheck className="w-3 h-3 text-emerald-600" />
                  <span className="text-emerald-600 font-semibold">Copiado</span>
                </>
              ) : (
                <>
                  <Copy className="w-3 h-3" />
                  <span>Copiar</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Verse Text */}
        <p className={`font-serif italic text-stone-900 dark:text-stone-100 leading-relaxed relative z-10 pt-1 ${fontClasses.verse}`}>
          "{sermon.scriptureVerseText}"
        </p>
      </div>

      {/* Tema Central / Reflexão Bíblica */}
      <div className="mt-4 p-4 sm:p-4.5 rounded-2xl bg-stone-50/90 dark:bg-stone-800/50 border-l-4 border-rosewood-600 dark:border-rosewood-500">
        <p className={`font-serif text-stone-700 dark:text-stone-200 leading-relaxed font-light ${fontClasses.theme}`}>
          {sermon.theme}
        </p>
      </div>

      {/* 4 Practical Application Points */}
      <div className="mt-5 space-y-2.5">
        <h4 className="text-[11px] font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 flex items-center gap-1.5 font-display">
          <Compass className="w-3.5 h-3.5 text-rosewood-600 dark:text-rosewood-400" />
          <span>Aplicação Prática no Dia a Dia</span>
        </h4>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
          {sermon.points.map((pt, idx) => (
            <div
              key={idx}
              className="p-3 sm:p-3.5 rounded-2xl bg-white dark:bg-stone-800/60 border border-stone-200/80 dark:border-stone-800 hover:border-rosewood-300 dark:hover:border-rosewood-800 transition-colors space-y-1 shadow-2xs"
            >
              <div className="flex items-center gap-2">
                <span className="w-5 h-5 rounded-md bg-rosewood-100 dark:bg-rosewood-950/80 text-rosewood-800 dark:text-rosewood-300 text-[11px] font-bold flex items-center justify-center shrink-0">
                  {idx + 1}
                </span>
                <h5 className="font-semibold text-xs text-stone-900 dark:text-stone-100 leading-tight">
                  {pt.title}
                </h5>
              </div>
              <p className={`text-stone-600 dark:text-stone-300 pl-7 leading-relaxed font-light ${fontClasses.body}`}>
                {pt.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Palavra de Fé & Declaração */}
      <div className="mt-5 p-4 rounded-2xl bg-gradient-to-r from-amber-500/10 via-warmgold-400/10 to-amber-500/5 dark:from-amber-950/30 dark:via-stone-800 dark:to-stone-900 border border-amber-300/60 dark:border-amber-700/40 flex items-start gap-3 shadow-2xs">
        <div className="w-8 h-8 rounded-xl bg-warmgold-500/20 text-warmgold-700 dark:text-warmgold-400 flex items-center justify-center shrink-0 mt-0.5">
          <Sparkles className="w-4 h-4 fill-warmgold-400" />
        </div>
        <div className="space-y-0.5">
          <span className="text-[10px] font-bold uppercase tracking-wider text-warmgold-700 dark:text-warmgold-400 font-display block">
            Palavra de Fé & Encorajamento
          </span>
          <p className="font-medium text-xs sm:text-sm text-stone-800 dark:text-stone-200 leading-relaxed">
            {sermon.faith}
          </p>
        </div>
      </div>

      {/* Oração Pessoal */}
      <div className="mt-3.5 p-4 sm:p-5 rounded-2xl bg-gradient-to-br from-rosewood-50/70 via-white to-stone-50 dark:from-rosewood-950/30 dark:via-stone-900 dark:to-stone-900 border border-rosewood-200/60 dark:border-rosewood-900/50 flex items-start gap-3 shadow-2xs">
        <div className="w-8 h-8 rounded-xl bg-rosewood-100 dark:bg-rosewood-950/80 text-rosewood-700 dark:text-rosewood-300 flex items-center justify-center shrink-0 mt-0.5">
          <Heart className="w-4 h-4 fill-rosewood-400 text-rosewood-600" />
        </div>
        <div className="space-y-0.5">
          <span className="text-[10px] font-bold uppercase tracking-wider text-rosewood-700 dark:text-rosewood-400 font-display block">
            Oração Pessoal do Dia
          </span>
          <p className="font-serif italic text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-light">
            "{sermon.prayer}"
          </p>
        </div>
      </div>

      {/* Bottom Completion & Actions Bar with High Elegance & WhatsApp Verse Integration */}
      <div className="no-print mt-6 pt-4 border-t border-stone-100 dark:border-stone-800 flex flex-wrap items-center justify-between gap-3">
        
        {/* Complete Devotional Button (Triggers Confetti) */}
        <div className="flex items-center gap-2.5">
          <button
            onClick={() => onToggleRead(sermon.num)}
            className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition-all flex items-center gap-2 shadow-xs cursor-pointer ${
              isRead
                ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-emerald-600/20'
                : 'bg-gradient-to-r from-rosewood-700 via-rosewood-800 to-rosewood-900 hover:opacity-95 text-white active:scale-[0.98] shadow-rosewood-700/20'
            }`}
          >
            {isRead ? (
              <>
                <CheckCheck className="w-4 h-4 text-emerald-200" />
                <span>Mensagem Concluída ✓</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-warmgold-300" />
                <span>Marcar Como Concluída</span>
              </>
            )}
          </button>
        </div>

        {/* Secondary Sharing & Journal Actions */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Quick WhatsApp Share specifically for the Verse */}
          <button
            onClick={handleShareVerseWhatsApp}
            className="px-3 py-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 hover:bg-emerald-100 dark:hover:bg-emerald-900/60 text-emerald-700 dark:text-emerald-300 border border-emerald-200/80 dark:border-emerald-900/60 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
            title="Enviar apenas o versículo no WhatsApp"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Versículo no WhatsApp</span>
          </button>

          {/* Full Devotional Share Modal */}
          <button
            onClick={() => onOpenShare(sermon.num, 'full')}
            className="px-3 py-2 rounded-xl border border-stone-200 dark:border-stone-700 hover:bg-stone-50 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300 text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
            title="Compartilhar mensagem completa"
          >
            <Share2 className="w-3.5 h-3.5" />
            <span>Devocional Completo</span>
          </button>

          {/* Personal Diary */}
          <button
            onClick={() => onOpenNotes(sermon.num)}
            className="px-3 py-2 rounded-xl border border-stone-200 dark:border-stone-700 hover:bg-stone-50 dark:hover:bg-stone-800 text-stone-700 dark:text-stone-300 text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer"
            title="Anotar no meu diário de oração"
          >
            <PenTool className="w-3.5 h-3.5 text-rosewood-600 dark:text-rosewood-400" />
            <span>Meu Diário</span>
          </button>
        </div>
      </div>

      {/* Thematic Track Navigation or General Next/Previous Lesson Navigation */}
      {currentTrack && trackIndex !== -1 ? (
        <div className="no-print mt-5 p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-rosewood-50 via-warmgold-50/20 to-rosewood-50 dark:from-rosewood-950/40 dark:via-stone-850 dark:to-stone-900 border border-rosewood-200/80 dark:border-rosewood-900/60 flex flex-wrap items-center justify-between gap-3 shadow-2xs">
          <div className="flex items-center gap-2">
            <span className="text-xl p-1.5 rounded-xl bg-white dark:bg-stone-800">{currentTrack.emoji}</span>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-rosewood-700 dark:text-rosewood-400 block">
                Trilha: {currentTrack.title}
              </span>
              <p className="text-xs font-semibold text-stone-800 dark:text-stone-200">
                Passo {trackIndex + 1} de {currentTrack.sermonIds.length} da Sequência
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {prevTrackSermonNum && (
              <button
                onClick={() => onNavigateToSermon?.(prevTrackSermonNum)}
                className="px-3 py-1.5 rounded-xl border border-stone-300 dark:border-stone-700 hover:bg-white dark:hover:bg-stone-800 text-stone-700 dark:text-stone-200 text-xs font-medium flex items-center gap-1.5 transition-colors cursor-pointer active:scale-95"
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Passo Anterior (#{prevTrackSermonNum})</span>
              </button>
            )}

            {nextTrackSermonNum ? (
              <button
                onClick={() => onNavigateToSermon?.(nextTrackSermonNum)}
                className="px-3.5 py-1.5 rounded-xl bg-rosewood-700 hover:bg-rosewood-800 text-white text-xs font-bold flex items-center gap-1.5 transition-all shadow-xs cursor-pointer active:scale-95"
              >
                <span>Próximo Passo (#{nextTrackSermonNum})</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : (
              <span className="px-3 py-1.5 rounded-xl bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-300 text-xs font-bold border border-emerald-300/80">
                ✓ Trilha Concluída!
              </span>
            )}
          </div>
        </div>
      ) : (
        <div className="no-print mt-5 pt-3.5 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-xs text-stone-500">
          <div>
            {sermon.num > 1 ? (
              <button
                onClick={() => onNavigateToSermon?.(sermon.num - 1)}
                className="hover:text-rosewood-700 dark:hover:text-rosewood-400 font-semibold flex items-center gap-1 cursor-pointer transition-colors"
                title={`Ir para Lição #${sermon.num - 1}`}
              >
                <ArrowLeft className="w-3.5 h-3.5" />
                <span>Lição Anterior (#{sermon.num - 1})</span>
              </button>
            ) : <span />}
          </div>

          <div>
            {sermon.num < totalSermonsCount ? (
              <button
                onClick={() => onNavigateToSermon?.(sermon.num + 1)}
                className="hover:text-rosewood-700 dark:hover:text-rosewood-400 font-semibold flex items-center gap-1 cursor-pointer transition-colors"
                title={`Ir para Lição #${sermon.num + 1}`}
              >
                <span>Próxima Lição (#{sermon.num + 1})</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            ) : <span />}
          </div>
        </div>
      )}

    </article>
  );
};
