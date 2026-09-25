import React, { useState } from 'react';
import { 
  Flower2, 
  Sparkles, 
  BookOpen, 
  RotateCcw, 
  HeartHandshake, 
  MessageCircle, 
  ArrowRight, 
  Check, 
  Copy, 
  Compass, 
  BookMarked,
  Layers,
  ChevronRight
} from 'lucide-react';
import { Sermon } from '../types';
import { THEMATIC_TRACKS } from '../data/thematicTracks';
import { getVerseShareText, shareOnWhatsApp } from '../utils/whatsapp';

interface DailyHeroProps {
  todaySermon: Sermon;
  readCount: number;
  totalCount: number;
  activeTrackId: string | null;
  onSelectTrack: (trackId: string) => void;
  onClearTrack: () => void;
  onScrollToSermon: (num: number) => void;
  onOpen500Modal: () => void;
  onToast?: (msg: string) => void;
}

export const DailyHero: React.FC<DailyHeroProps> = ({
  todaySermon,
  readCount,
  totalCount,
  activeTrackId,
  onSelectTrack,
  onClearTrack,
  onScrollToSermon,
  onOpen500Modal,
  onToast,
}) => {
  const [copiedTodayVerse, setCopiedTodayVerse] = useState(false);
  const percentage = Math.round((readCount / totalCount) * 100);

  const activeTrack = THEMATIC_TRACKS.find(t => t.id === activeTrackId) || null;

  const handleShareTodayVerseWhatsApp = () => {
    const text = getVerseShareText(todaySermon);
    const success = shareOnWhatsApp(text);
    if (onToast) {
      if (success) {
        onToast(`Abrindo WhatsApp com o Versículo de Hoje... 📖`);
      } else {
        navigator.clipboard.writeText(text);
        onToast(`Versículo copiado para a área de transferência! 📋`);
      }
    }
  };

  const handleCopyTodayVerse = () => {
    const text = `"${todaySermon.scriptureVerseText}" — ${todaySermon.scripture} (Devocional Mulher Plena)`;
    navigator.clipboard.writeText(text);
    setCopiedTodayVerse(true);
    setTimeout(() => setCopiedTodayVerse(false), 2000);
    if (onToast) {
      onToast('Versículo copiado com sucesso! ✨');
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
        <div className="flex flex-wrap items-center justify-center gap-2">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 dark:bg-stone-900/90 border border-rosewood-300/80 dark:border-rosewood-800 text-rosewood-900 dark:text-rosewood-200 text-xs font-semibold tracking-wide shadow-xs backdrop-blur-xs">
            <Flower2 className="w-4 h-4 text-rosewood-600 dark:text-rosewood-400 shrink-0" />
            <span className="font-display tracking-widest uppercase text-[11px]">Jornada Devocional Feminina</span>
            <span className="w-1 h-1 rounded-full bg-warmgold-500" />
            <span className="text-stone-500 dark:text-stone-400 font-normal">{totalCount} Mensagens & 10 Trilhas</span>
          </div>

          <button
            onClick={onOpen500Modal}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-gradient-to-r from-warmgold-500/15 to-amber-500/15 hover:from-warmgold-500/25 hover:to-amber-500/25 text-warmgold-800 dark:text-warmgold-300 border border-warmgold-400/50 text-xs font-semibold transition-all cursor-pointer shadow-2xs"
            title="Acessar o Acervo Completo de 500 Esboços e baixar em PDF"
          >
            <BookMarked className="w-3.5 h-3.5 text-warmgold-600" />
            <span>Coletânea 500 Esboços (PDF)</span>
          </button>
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
            Mensagens bíblicas profundas para transformar sua mente, carreira, família e saúde emocional — com descanso na graça de Cristo e sem o peso de culpas desnecessárias.
          </p>
        </div>

        {/* Reading Progress Card with gilded touches */}
        <div className="max-w-md mx-auto bg-white/95 dark:bg-stone-900/90 backdrop-blur p-4 sm:p-4.5 rounded-2xl border border-stone-200/90 dark:border-stone-800 shadow-sm space-y-2.5">
          <div className="flex justify-between items-center text-xs">
            <span className="font-semibold text-stone-700 dark:text-stone-300 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-warmgold-500" />
              <span>Seu Progresso de Leitura</span>
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

        {/* Today's Special Devotional Card */}
        <div className="max-w-xl mx-auto text-left bg-gradient-to-br from-white via-rosewood-50/40 to-amber-50/30 dark:from-stone-900/95 dark:via-rosewood-950/40 dark:to-stone-900/90 p-5 sm:p-6 rounded-3xl border border-amber-300/70 dark:border-amber-700/50 shadow-md ring-1 ring-amber-400/15 relative overflow-hidden">
          
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
          
          {/* Verse box */}
          <div className="mt-2.5 p-3 rounded-2xl bg-amber-50/80 dark:bg-stone-950/70 border border-amber-200/80 dark:border-amber-900/50">
            <p className="text-xs font-serif italic text-stone-800 dark:text-stone-200 leading-relaxed">
              "{todaySermon.scriptureVerseText}"
            </p>
            <div className="mt-2 flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-amber-200/50 dark:border-stone-800">
              <span className="text-[11px] font-bold text-rosewood-800 dark:text-rosewood-300 flex items-center gap-1">
                <BookOpen className="w-3.5 h-3.5 shrink-0" />
                <span>{todaySermon.scripture}</span>
              </span>
              <div className="flex items-center gap-1.5">
                <button
                  onClick={handleShareTodayVerseWhatsApp}
                  className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white text-[11px] font-semibold transition-all shadow-2xs cursor-pointer active:scale-95"
                  title="Compartilhar versículo de hoje no WhatsApp"
                >
                  <MessageCircle className="w-3 h-3" />
                  <span>WhatsApp</span>
                </button>
                <button
                  onClick={handleCopyTodayVerse}
                  className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-white dark:bg-stone-800 text-stone-700 dark:text-stone-200 hover:bg-stone-100 dark:hover:bg-stone-700 text-[11px] font-medium border border-stone-200 dark:border-stone-700 transition-colors cursor-pointer"
                  title="Copiar versículo"
                >
                  {copiedTodayVerse ? <Check className="w-3 h-3 text-emerald-600" /> : <Copy className="w-3 h-3" />}
                  <span>{copiedTodayVerse ? 'Copiado' : 'Copiar'}</span>
                </button>
              </div>
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

            <button
              onClick={() => onScrollToSermon(todaySermon.num)}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-rosewood-700 via-rosewood-800 to-rosewood-900 hover:opacity-95 text-white text-xs font-bold uppercase tracking-wider shadow-sm transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
            >
              <span>Ler Mensagem Completa</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* SEÇÃO PRINCIPAL: "O que seu coração precisa ouvir agora?"                  */}
        {/* Trilhas Temáticas Guiadas com Sequências Passo a Passo e Botões Validados */}
        {/* ========================================================================= */}
        <div id="trilhas-do-coracao" className="pt-6 sm:pt-8 space-y-4">
          
          <div className="space-y-1.5 text-center">
            <div className="flex items-center justify-center gap-2">
              <div className="h-[1px] w-8 sm:w-16 bg-rosewood-300 dark:bg-rosewood-800" />
              <p className="text-xs sm:text-sm uppercase tracking-widest font-extrabold text-rosewood-800 dark:text-rosewood-300 font-display flex items-center gap-2">
                <Compass className="w-4 h-4 text-warmgold-500" />
                <span>O que seu coração precisa ouvir agora?</span>
              </p>
              <div className="h-[1px] w-8 sm:w-16 bg-rosewood-300 dark:bg-rosewood-800" />
            </div>
            <p className="text-xs text-stone-600 dark:text-stone-300 font-light max-w-xl mx-auto">
              Selecione o sentimento ou momento da sua vida para iniciar uma <strong>Sequência Guiada</strong> com mensagens organizadas passo a passo.
            </p>
          </div>

          {/* Active Track Highlight Banner (if a track is currently selected) */}
          {activeTrack && (
            <div className="max-w-3xl mx-auto p-4 sm:p-5 rounded-3xl bg-gradient-to-r from-rosewood-900 via-rosewood-800 to-stone-900 text-white shadow-lg border border-warmgold-400/40 text-left animate-in fade-in slide-in-from-top-3">
              <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <span className="text-2xl p-2 rounded-2xl bg-white/10">{activeTrack.emoji}</span>
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-warmgold-300 block">
                      Trilha Sequencial Ativa ({activeTrack.sermonIds.length} Lições)
                    </span>
                    <h4 className="font-serif font-bold text-base sm:text-lg">
                      {activeTrack.title}
                    </h4>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onScrollToSermon(activeTrack.sermonIds[0])}
                    className="px-3.5 py-1.5 rounded-xl bg-warmgold-500 hover:bg-warmgold-400 text-stone-950 text-xs font-bold transition-all shadow-xs flex items-center gap-1.5 cursor-pointer active:scale-95"
                  >
                    <span>Ir para o Passo 1</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={onClearTrack}
                    className="p-1.5 px-2.5 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-medium transition-colors flex items-center gap-1 cursor-pointer"
                    title="Sair desta trilha e ver todo o acervo"
                  >
                    <RotateCcw className="w-3 h-3" />
                    <span>Ver Todas</span>
                  </button>
                </div>
              </div>

              <p className="text-xs text-rosewood-100 font-light mt-3 leading-relaxed">
                {activeTrack.description}
              </p>

              {/* Clickable Sequence Steps Roadmap */}
              <div className="mt-3.5 pt-3 border-t border-white/10 space-y-2">
                <span className="text-[10px] font-bold uppercase tracking-wider text-stone-300 block">
                  Sequência das Mensagens desta Trilha (Clique para ler):
                </span>
                <div className="flex flex-wrap items-center gap-1.5">
                  {activeTrack.sermonIds.map((sermonNum, idx) => (
                    <button
                      key={sermonNum}
                      onClick={() => onScrollToSermon(sermonNum)}
                      className="px-2.5 py-1 rounded-xl bg-white/15 hover:bg-white/30 text-white text-[11px] font-semibold flex items-center gap-1 transition-all cursor-pointer hover:scale-105 active:scale-95 border border-white/15"
                      title={`Ir para Lição #${sermonNum}`}
                    >
                      <span className="w-4 h-4 rounded-full bg-warmgold-400 text-stone-950 text-[9px] font-bold flex items-center justify-center">
                        {idx + 1}
                      </span>
                      <span>Lição #{sermonNum}</span>
                    </button>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Grid of Curated Thematic Track Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-3 max-w-4xl mx-auto text-left">
            {THEMATIC_TRACKS.map(track => {
              const isSelected = activeTrackId === track.id;
              return (
                <div
                  key={track.id}
                  className={`p-3.5 sm:p-4 rounded-2xl border transition-all duration-200 relative flex flex-col justify-between ${
                    isSelected
                      ? 'bg-rosewood-50 dark:bg-rosewood-950/60 border-rosewood-500 shadow-md ring-2 ring-rosewood-400/50'
                      : 'bg-white dark:bg-stone-900 border-stone-200/90 dark:border-stone-800 hover:border-rosewood-300 dark:hover:border-rosewood-700 hover:shadow-xs'
                  }`}
                >
                  <div className="space-y-1.5">
                    <div className="flex items-center justify-between gap-1.5">
                      <div className="flex items-center gap-2">
                        <span className="text-xl p-1.5 rounded-xl bg-stone-100 dark:bg-stone-800">
                          {track.emoji}
                        </span>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-rosewood-700 dark:text-rosewood-400">
                          {track.badge}
                        </span>
                      </div>
                      <span className="text-[10px] text-stone-500 dark:text-stone-400 bg-stone-100 dark:bg-stone-800/80 px-2 py-0.5 rounded-full font-medium">
                        {track.sermonIds.length} lições
                      </span>
                    </div>

                    <h4 className="font-serif font-bold text-sm text-stone-900 dark:text-white leading-snug pt-1">
                      {track.title}
                    </h4>

                    <p className="text-[11px] text-stone-600 dark:text-stone-300 font-light line-clamp-2 leading-relaxed">
                      {track.subtitle}
                    </p>
                  </div>

                  {/* Explicit Action Button for this track */}
                  <div className="mt-3 pt-2.5 border-t border-stone-100 dark:border-stone-800/80 flex items-center justify-between gap-2">
                    <button
                      onClick={() => onSelectTrack(track.id)}
                      className={`w-full py-1.5 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                        isSelected
                          ? 'bg-rosewood-700 text-white shadow-xs font-bold'
                          : 'bg-stone-100 dark:bg-stone-800 text-stone-800 dark:text-stone-200 hover:bg-rosewood-700 hover:text-white'
                      }`}
                    >
                      {isSelected ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-warmgold-300" />
                          <span>Trilha Selecionada</span>
                        </>
                      ) : (
                        <>
                          <span>Iniciar Sequência</span>
                          <ArrowRight className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Reset / Explore All button if filtered */}
          {activeTrackId && (
            <div className="pt-2 text-center">
              <button
                onClick={onClearTrack}
                className="px-4 py-2 rounded-2xl text-xs font-bold bg-stone-200 dark:bg-stone-800 text-stone-700 dark:text-stone-200 hover:bg-stone-300 dark:hover:bg-stone-700 transition-colors inline-flex items-center gap-1.5 cursor-pointer shadow-2xs"
              >
                <RotateCcw className="w-3.5 h-3.5" />
                <span>Limpar Trilha e Ver Todas as Mensagens ({totalCount})</span>
              </button>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
