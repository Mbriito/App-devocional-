import React from 'react';
import { Flower2, Sparkles, BookOpen, RotateCcw, HeartHandshake, MessageCircle, ArrowRight } from 'lucide-react';
import { Sermon } from '../types';
import { getVerseShareText, shareOnWhatsApp } from '../utils/whatsapp';

interface DailyHeroProps {
  todaySermon: Sermon;
  readCount: number;
  totalCount: number;
  activeMood: string | null;
  onSelectMood: (tag: string) => void;
  onClearMood: () => void;
  onScrollToSermon: (num: number) => void;
  onToast?: (msg: string) => void;
}

const MOODS = [
  { tag: 'ansiedade', label: 'Cansaço & Ansiedade', emoji: '🌿' },
  { tag: 'culpa', label: 'Culpa & Cobranças', emoji: '🕊️' },
  { tag: 'descanso', label: 'Paz & Descanso', emoji: '☕' },
  { tag: 'trabalho', label: 'Carreira & Finanças', emoji: '💼' },
  { tag: 'familia', label: 'Família & Filhos', emoji: '🏡' },
  { tag: 'feridas', label: 'Cura do Passado', emoji: '❤️' },
  { tag: 'recomeco', label: 'Novo Recomeço', emoji: '✨' },
  { tag: 'gratidao', label: 'Gratidão & Força', emoji: '🌸' },
];

export const DailyHero: React.FC<DailyHeroProps> = ({
  todaySermon,
  readCount,
  totalCount,
  activeMood,
  onSelectMood,
  onClearMood,
  onScrollToSermon,
  onToast,
}) => {
  const percentage = Math.round((readCount / totalCount) * 100);

  const handleShareTodayVerseWhatsApp = () => {
    const text = getVerseShareText(todaySermon);
    shareOnWhatsApp(text);
    if (onToast) {
      onToast(`Abrindo WhatsApp com o Versículo de Hoje... 📖`);
    }
  };

  return (
    <section className="relative overflow-hidden pt-6 sm:pt-10 pb-8 sm:pb-12 bg-gradient-to-b from-rosewood-100/50 via-rosewood-50/30 to-transparent dark:from-rosewood-950/40 dark:via-stone-950/40 dark:to-transparent border-b border-rosewood-200/50 dark:border-rosewood-900/40">
      
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 right-1/4 w-80 h-80 bg-gradient-to-bl from-rosewood-400/15 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-10 left-1/4 w-72 h-72 bg-gradient-to-tr from-warmgold-400/15 to-transparent rounded-full blur-3xl pointer-events-none" />

      {/* Subtle ornamental top line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-rosewood-400/40 to-transparent" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-6 sm:space-y-7 relative z-10">
        
        {/* Subtitle Badge with Crown / Flower */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 dark:bg-stone-900/90 border border-rosewood-300/80 dark:border-rosewood-800 text-rosewood-900 dark:text-rosewood-200 text-xs font-semibold tracking-wide shadow-sm backdrop-blur-xs">
          <Flower2 className="w-4 h-4 text-rosewood-600 dark:text-rosewood-400 shrink-0" />
          <span className="font-display tracking-widest uppercase text-[11px]">Jornada Devocional Feminina</span>
          <span className="w-1 h-1 rounded-full bg-warmgold-500" />
          <span className="text-stone-500 dark:text-stone-400 font-normal">50 Mensagens Diárias</span>
        </div>

        {/* Hero Title with striking typography */}
        <div className="space-y-3">
          <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold text-stone-900 dark:text-white tracking-tight leading-tight">
            Mulher{' '}
            <span className="relative inline-block">
              <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-rosewood-700 via-rosewood-600 to-warmgold-600 dark:from-rosewood-400 dark:via-rosewood-300 dark:to-warmgold-300 font-serif">
                Plena & Restaurada
              </span>
              <svg className="absolute -bottom-1.5 left-0 w-full h-2 text-rosewood-300/60 dark:text-rosewood-600/40 -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="2.5" fill="none" />
              </svg>
            </span>
          </h2>
          <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 max-w-2xl mx-auto leading-relaxed font-light">
            Mensagens profundas e biblicamente verdadeiras para edificar sua identidade, carreira, família e saúde emocional — sem culpa, com descanso na graça de Cristo.
          </p>
        </div>

        {/* Reading Progress Card with gilded touches */}
        <div className="max-w-md mx-auto bg-white/95 dark:bg-stone-900/90 backdrop-blur p-4 sm:p-4.5 rounded-2xl border border-stone-200/90 dark:border-stone-800 shadow-sm space-y-2.5">
          <div className="flex justify-between items-center text-xs">
            <span className="font-semibold text-stone-700 dark:text-stone-300 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-warmgold-500" />
              <span>Seu Progresso da Jornada</span>
            </span>
            <span className="font-bold text-rosewood-700 dark:text-rosewood-300">
              {percentage}% ({readCount} de {totalCount} concluídas)
            </span>
          </div>
          <div className="w-full bg-stone-100 dark:bg-stone-800 h-2.5 rounded-full overflow-hidden p-0.5">
            <div
              className="bg-gradient-to-r from-rosewood-600 via-rosewood-500 to-warmgold-500 h-full rounded-full transition-all duration-500 ease-out shadow-xs"
              style={{ width: `${percentage}%` }}
            />
          </div>
        </div>

        {/* Today's Special Devotional Recommendation Card with Striking Elegance */}
        <div className="max-w-xl mx-auto text-left bg-gradient-to-br from-white via-rosewood-50/40 to-amber-50/30 dark:from-stone-900/95 dark:via-rosewood-950/40 dark:to-stone-900/90 p-5 sm:p-6 rounded-3xl border border-amber-300/70 dark:border-amber-700/50 shadow-md ring-1 ring-amber-400/15 relative overflow-hidden">
          
          {/* Subtle gold ribbon top-right */}
          <div className="absolute -top-12 -right-12 w-28 h-28 bg-warmgold-400/10 rounded-full blur-xl pointer-events-none" />

          {/* Header Tag */}
          <div className="flex items-center justify-between gap-2 mb-2.5">
            <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-rosewood-700 dark:text-rosewood-300">
              <Sparkles className="w-4 h-4 text-warmgold-500 fill-warmgold-400" />
              <span>Palavra Recomendada Para Hoje</span>
            </div>
            <span className="text-[11px] font-bold text-warmgold-700 dark:text-warmgold-300 bg-amber-100/80 dark:bg-amber-950/60 px-2.5 py-0.5 rounded-full border border-amber-300/70 dark:border-amber-800 shadow-2xs">
              Mensagem #{todaySermon.num}
            </span>
          </div>
          
          <h3 className="font-serif font-bold text-lg sm:text-xl text-stone-900 dark:text-white leading-snug">
            {todaySermon.title}
          </h3>
          
          {/* Verse pill */}
          <div className="mt-2.5 p-3 rounded-2xl bg-amber-50/80 dark:bg-stone-950/70 border border-amber-200/80 dark:border-amber-900/50">
            <p className="text-xs font-serif italic text-stone-800 dark:text-stone-200 leading-relaxed">
              "{todaySermon.scriptureVerseText}"
            </p>
            <div className="mt-1 flex items-center justify-between gap-2">
              <span className="text-[11px] font-bold text-rosewood-800 dark:text-rosewood-300 flex items-center gap-1">
                <BookOpen className="w-3.5 h-3.5 shrink-0" />
                <span>{todaySermon.scripture}</span>
              </span>
              {/* Quick WhatsApp button for the verse */}
              <button
                onClick={handleShareTodayVerseWhatsApp}
                className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-semibold transition-all shadow-2xs cursor-pointer active:scale-95"
                title="Compartilhar versículo de hoje no WhatsApp"
              >
                <MessageCircle className="w-3 h-3" />
                <span>Enviar Versículo</span>
              </button>
            </div>
          </div>

          <p className="mt-3 text-xs text-stone-600 dark:text-stone-300 line-clamp-2 leading-relaxed font-light">
            "{todaySermon.theme}"
          </p>

          {/* Action Row */}
          <div className="mt-4 pt-3.5 border-t border-rosewood-200/60 dark:border-rosewood-900/50 flex flex-wrap items-center justify-between gap-2.5">
            <span className="text-[11px] text-stone-500 dark:text-stone-400 flex items-center gap-1">
              <HeartHandshake className="w-3.5 h-3.5 text-rosewood-500" />
              <span>Edifique seu coração e compartilhe</span>
            </span>

            <div className="flex items-center gap-2">
              <button
                onClick={() => onScrollToSermon(todaySermon.num)}
                className="px-4 py-2 rounded-xl bg-gradient-to-r from-rosewood-700 via-rosewood-800 to-rosewood-900 hover:opacity-95 text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
              >
                <span>Ler Completa</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* "O que seu coração precisa ouvir agora?" Mood selector with vibrant, tactile cards */}
        <div className="pt-3 space-y-3">
          <div className="flex items-center justify-center gap-2">
            <div className="h-[1px] w-8 bg-rosewood-200 dark:bg-rosewood-900" />
            <p className="text-xs uppercase tracking-widest font-bold text-stone-500 dark:text-stone-400 font-display">
              O que seu coração precisa ouvir agora?
            </p>
            <div className="h-[1px] w-8 bg-rosewood-200 dark:bg-rosewood-900" />
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
            {MOODS.map(mood => {
              const isSelected = activeMood === mood.tag;
              return (
                <button
                  key={mood.tag}
                  onClick={() => onSelectMood(mood.tag)}
                  className={`px-3.5 py-2 rounded-2xl text-xs font-medium transition-all shadow-2xs flex items-center gap-1.5 cursor-pointer ${
                    isSelected
                      ? 'bg-rosewood-700 text-white shadow-md ring-2 ring-rosewood-400/50 font-bold scale-105'
                      : 'bg-white dark:bg-stone-900 border border-stone-200/90 dark:border-stone-800 text-stone-700 dark:text-stone-300 hover:border-rosewood-400 dark:hover:border-rosewood-700 hover:bg-rosewood-50/50 dark:hover:bg-rosewood-950/30'
                  }`}
                >
                  <span className="text-sm">{mood.emoji}</span>
                  <span>{mood.label}</span>
                </button>
              );
            })}

            {activeMood && (
              <button
                onClick={onClearMood}
                className="px-3.5 py-2 rounded-2xl text-xs font-semibold bg-stone-200 dark:bg-stone-800 text-stone-700 dark:text-stone-200 hover:bg-stone-300 dark:hover:bg-stone-700 transition-colors flex items-center gap-1.5 cursor-pointer"
                title="Limpar filtro de sentimento"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Ver Todas as Mensagens</span>
              </button>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};
