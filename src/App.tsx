import React, { useState, useEffect, useMemo } from 'react';
import { Header } from './components/Header';
import { DailyHero } from './components/DailyHero';
import { ModuleTabs } from './components/ModuleTabs';
import { SermonCard } from './components/SermonCard';
import { ShareModal } from './components/ShareModal';
import { NotesModal } from './components/NotesModal';
import { AudioPlayerFloating } from './components/AudioPlayerFloating';
import { GateLockModal } from './components/GateLockModal';
import { OfflineIndicator } from './components/OfflineIndicator';
import { FontSettingsModal } from './components/FontSettingsModal';
import { MobileBottomNav } from './components/MobileBottomNav';
import { Catalog500Modal } from './components/Catalog500Modal';
import { Footer } from './components/Footer';
import { SERMONS } from './data/sermons';
import { THEMATIC_TRACKS } from './data/thematicTracks';
import { Sermon, TextSizeOption } from './types';
import { Sparkles, CheckCircle2, RotateCcw, Compass, BookMarked } from 'lucide-react';
import { fireDevotionalConfetti } from './utils/confetti';
import { shareOnWhatsApp } from './utils/whatsapp';

export default function App() {
  // Persistence state
  const [readSermons, setReadSermons] = useState<Set<number>>(() => {
    try {
      const saved = localStorage.getItem('mulher_plena_read');
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });

  const [favoriteSermons, setFavoriteSermons] = useState<Set<number>>(() => {
    try {
      const saved = localStorage.getItem('mulher_plena_fav');
      return saved ? new Set(JSON.parse(saved)) : new Set();
    } catch {
      return new Set();
    }
  });

  const [notes, setNotes] = useState<Record<number, string>>(() => {
    try {
      const saved = localStorage.getItem('mulher_plena_notes');
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem('mulher_theme');
      if (saved) return saved === 'dark';
      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    } catch {
      return false;
    }
  });

  const [isLocked, setIsLocked] = useState<boolean>(() => {
    try {
      const unlocked = localStorage.getItem('mulher_plena_unlocked');
      return unlocked !== 'true'; // Password protection active
    } catch {
      return true;
    }
  });

  const [textSize, setTextSize] = useState<TextSizeOption>(() => {
    try {
      const saved = localStorage.getItem('mulher_text_size');
      return (saved as TextSizeOption) || 'base';
    } catch {
      return 'base';
    }
  });

  // UI state
  const [activeTab, setActiveTab] = useState<string>('all'); // 'all', '1'..'10', 'fav', 'notes'
  const [activeTrackId, setActiveTrackId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [shareSermon, setShareSermon] = useState<Sermon | null>(null);
  const [shareInitialTab, setShareInitialTab] = useState<'verse' | 'full'>('verse');
  const [notesSermon, setNotesSermon] = useState<Sermon | null>(null);
  const [isFontModalOpen, setIsFontModalOpen] = useState<boolean>(false);
  const [is500ModalOpen, setIs500ModalOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Audio Reading state
  const [playingSermonNum, setPlayingSermonNum] = useState<number | null>(null);
  const [isAudioPaused, setIsAudioPaused] = useState<boolean>(false);
  const [audioRate, setAudioRate] = useState<number>(1.0);

  // Synchronize Dark Mode on HTML tag
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('mulher_theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('mulher_theme', 'light');
    }
  }, [isDark]);

  // Synchronize text size
  useEffect(() => {
    try {
      localStorage.setItem('mulher_text_size', textSize);
    } catch {}
  }, [textSize]);

  // Toast auto-clear
  useEffect(() => {
    if (toastMessage) {
      const timer = setTimeout(() => setToastMessage(null), 3500);
      return () => clearTimeout(timer);
    }
  }, [toastMessage]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
  };

  // Determine today's devotional dynamically based on day of year
  const todaySermon = useMemo(() => {
    const now = new Date();
    const start = new Date(now.getFullYear(), 0, 0);
    const diff = now.getTime() - start.getTime();
    const oneDay = 1000 * 60 * 60 * 24;
    const dayOfYear = Math.floor(diff / oneDay);
    const chosenNum = ((dayOfYear - 1) % SERMONS.length) + 1;
    return SERMONS.find(s => s.num === chosenNum) || SERMONS[0];
  }, []);

  // Filtered devotions with prioritized guided thematic tracks
  const filteredSermons = useMemo(() => {
    // If a thematic track is selected, present sermons in the exact curated order of the track
    if (activeTrackId) {
      const track = THEMATIC_TRACKS.find(t => t.id === activeTrackId);
      if (track) {
        const trackSermons = track.sermonIds
          .map(id => SERMONS.find(s => s.num === id))
          .filter((s): s is Sermon => s !== undefined);

        if (searchTerm.trim() !== '') {
          const q = searchTerm.toLowerCase();
          return trackSermons.filter(s => (
            s.title.toLowerCase().includes(q) ||
            s.scripture.toLowerCase().includes(q) ||
            s.scriptureVerseText.toLowerCase().includes(q) ||
            s.theme.toLowerCase().includes(q) ||
            s.faith.toLowerCase().includes(q) ||
            s.points.some(p => p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q))
          ));
        }

        return trackSermons;
      }
    }

    return SERMONS.filter(s => {
      // Tab filter
      if (activeTab === 'fav') {
        if (!favoriteSermons.has(s.num)) return false;
      } else if (activeTab === 'notes') {
        if (!notes[s.num]?.trim()) return false;
      } else if (activeTab !== 'all') {
        if (s.modId !== Number(activeTab)) return false;
      }

      // Search term
      if (searchTerm.trim() !== '') {
        const q = searchTerm.toLowerCase();
        const matchTitle = s.title.toLowerCase().includes(q);
        const matchScripture = s.scripture.toLowerCase().includes(q);
        const matchVerse = s.scriptureVerseText.toLowerCase().includes(q);
        const matchTheme = s.theme.toLowerCase().includes(q);
        const matchFaith = s.faith.toLowerCase().includes(q);
        const matchPoints = s.points.some(
          p => p.title.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q)
        );
        if (!matchTitle && !matchScripture && !matchVerse && !matchTheme && !matchFaith && !matchPoints) {
          return false;
        }
      }

      return true;
    });
  }, [activeTab, activeTrackId, searchTerm, favoriteSermons, notes]);

  // Read toggle
  const handleToggleRead = (num: number) => {
    const isCurrentlyRead = readSermons.has(num);
    const next = new Set(readSermons);

    if (isCurrentlyRead) {
      next.delete(num);
      showToast(`Mensagem #${num} desmarcada.`);
    } else {
      const isFirstEver = readSermons.size === 0;
      next.add(num);
      const isAllCompleted = next.size === SERMONS.length;

      // Trigger celebratory confetti animation effect
      fireDevotionalConfetti(isFirstEver, isAllCompleted);

      if (isAllCompleted) {
        showToast(`Glória a Deus! Você concluiu todas as ${SERMONS.length} mensagens do Mulher Plena! 👑🕊️✨`);
      } else if (isFirstEver) {
        showToast(`Parabéns pela sua 1ª mensagem concluída! 🌸🎉 O primeiro passo de uma linda jornada!`);
      } else if (next.size === 10) {
        showToast(`Marco alcançado: 10 mensagens lidas! Continue firme! 🌿✨`);
      } else if (next.size === 25) {
        showToast(`Metade de um grande ciclo alcançado! Deus é fiel! 🌸⭐`);
      } else if (next.size === 50) {
        showToast(`Glória a Deus! 50 mensagens concluídas com vitória! 👑✨`);
      } else {
        showToast(`Parabéns! Mensagem #${num} concluída com sucesso! 🕊️✨`);
      }
    }

    setReadSermons(next);
    try {
      localStorage.setItem('mulher_plena_read', JSON.stringify([...next]));
    } catch {}
  };

  // Favorite toggle
  const handleToggleFavorite = (num: number) => {
    const next = new Set(favoriteSermons);
    if (next.has(num)) {
      next.delete(num);
      showToast(`Mensagem #${num} removida dos favoritos.`);
    } else {
      next.add(num);
      showToast(`Mensagem #${num} salva nos favoritos! ⭐`);
    }
    setFavoriteSermons(next);
    try {
      localStorage.setItem('mulher_plena_fav', JSON.stringify([...next]));
    } catch {}
  };

  // Notes handling
  const handleSaveNote = (num: number, text: string) => {
    const next = { ...notes, [num]: text };
    setNotes(next);
    try {
      localStorage.setItem('mulher_plena_notes', JSON.stringify(next));
    } catch {}
    showToast(`Anotação da mensagem #${num} salva no seu diário! ✍️`);
  };

  const handleDeleteNote = (num: number) => {
    const next = { ...notes };
    delete next[num];
    setNotes(next);
    try {
      localStorage.setItem('mulher_plena_notes', JSON.stringify(next));
    } catch {}
    showToast(`Anotação da mensagem #${num} excluída.`);
  };

  // Audio speech synthesis reading
  const handleToggleAudio = (num: number) => {
    if (!('speechSynthesis' in window)) {
      showToast('Seu navegador não suporta leitura em áudio.');
      return;
    }

    if (playingSermonNum === num) {
      if (isAudioPaused) {
        window.speechSynthesis.resume();
        setIsAudioPaused(false);
        showToast('Áudio retomado.');
      } else {
        window.speechSynthesis.pause();
        setIsAudioPaused(true);
        showToast('Áudio pausado.');
      }
      return;
    }

    window.speechSynthesis.cancel();

    const sermon = SERMONS.find(s => s.num === num);
    if (!sermon) return;

    const fullText = `${sermon.title}. Texto bíblico: ${sermon.scripture}. ${sermon.scriptureVerseText}. Reflexão: ${sermon.theme}. Palavra de fé: ${sermon.faith}. Oração pessoal: ${sermon.prayer}.`;
    const utterance = new SpeechSynthesisUtterance(fullText);
    utterance.lang = 'pt-BR';
    utterance.rate = audioRate;

    utterance.onend = () => {
      setPlayingSermonNum(null);
      setIsAudioPaused(false);
    };

    utterance.onerror = () => {
      setPlayingSermonNum(null);
      setIsAudioPaused(false);
    };

    window.speechSynthesis.speak(utterance);
    setPlayingSermonNum(num);
    setIsAudioPaused(false);
    showToast(`Iniciando leitura em voz alta da mensagem #${num}... 🎧`);
  };

  const handleStopAudio = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
    setPlayingSermonNum(null);
    setIsAudioPaused(false);
  };

  const handleChangeAudioRate = (newRate: number) => {
    setAudioRate(newRate);
    if (playingSermonNum !== null) {
      handleToggleAudio(playingSermonNum);
    }
  };

  // Scroll to devotional element
  const handleScrollToSermon = (num: number) => {
    // If not in current filtered list, reset filters
    const isCurrentlyVisible = filteredSermons.some(s => s.num === num);
    if (!isCurrentlyVisible) {
      setActiveTab('all');
      setActiveTrackId(null);
      setSearchTerm('');
    }

    setTimeout(() => {
      const el = document.getElementById(`sermon-${num}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        el.classList.add('ring-4', 'ring-warmgold-400', 'ring-offset-2');
        setTimeout(() => el.classList.remove('ring-4', 'ring-warmgold-400', 'ring-offset-2'), 2500);
      }
    }, 150);
  };

  // Track selection
  const handleSelectTrack = (trackId: string) => {
    if (activeTrackId === trackId) {
      setActiveTrackId(null);
      showToast('Filtro de trilha removido. Exibindo acervo completo.');
    } else {
      setActiveTrackId(trackId);
      setActiveTab('all'); // Clear tab restrictions
      setSearchTerm('');
      
      const track = THEMATIC_TRACKS.find(t => t.id === trackId);
      if (track) {
        showToast(`Trilha iniciada: ${track.emoji} ${track.title} (${track.sermonIds.length} mensagens em sequência)`);
      }

      // Smooth scroll to the track container
      setTimeout(() => {
        const el = document.getElementById('trilhas-do-coracao') || document.getElementById(`sermon-${track?.sermonIds[0]}`);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);
    }
  };

  const handleClearTrack = () => {
    setActiveTrackId(null);
    showToast('Exibindo todo o acervo de devocionais.');
  };

  // General App Share
  const handleShareApp = () => {
    const text = (
      `🌸 *Mulher Plena & Restaurada* — Devocional e Acervo da Mulher Cristã!\n\n` +
      `Uma bênção de mensagens bíblicas diárias sobre identidade, cura de feridas, sabedoria no trabalho e paz na família sem culpas. Acesse e seja edificada!`
    );
    const success = shareOnWhatsApp(text);
    if (success) {
      showToast('Abrindo WhatsApp para compartilhar... 🌸');
    } else {
      navigator.clipboard.writeText(text);
      showToast('Texto de indicação copiado para compartilhar! 📋');
    }
  };

  const handleUnlock = () => {
    setIsLocked(false);
    try {
      localStorage.setItem('mulher_plena_is_locked', 'false');
      localStorage.setItem('mulher_plena_unlocked', 'true');
    } catch {}
    showToast('Acesso liberado com sucesso! Seja muito bem-vinda 🌸');
  };

  const handleLock = () => {
    setIsLocked(true);
    try {
      localStorage.setItem('mulher_plena_is_locked', 'true');
      localStorage.removeItem('mulher_plena_unlocked');
    } catch {}
    showToast('Aplicativo bloqueado com senha.');
  };

  const notesCount = useMemo(() => {
    return Object.values(notes).filter(n => n.trim().length > 0).length;
  }, [notes]);

  const currentPlayingSermon = useMemo(() => {
    if (!playingSermonNum) return null;
    return SERMONS.find(s => s.num === playingSermonNum) || null;
  }, [playingSermonNum]);

  const activeTrack = THEMATIC_TRACKS.find(t => t.id === activeTrackId);

  return (
    <div className="min-h-screen bg-stone-50 dark:bg-stone-950 text-stone-800 dark:text-stone-100 flex flex-col font-sans antialiased transition-colors duration-200">
      
      {/* Password Gate */}
      <GateLockModal isLocked={isLocked} onUnlock={handleUnlock} />

      {/* Header Bar */}
      <Header
        readCount={readSermons.size}
        totalCount={SERMONS.length}
        isDark={isDark}
        onToggleTheme={() => setIsDark(!isDark)}
        onOpenDaily={() => handleScrollToSermon(todaySermon.num)}
        onOpenProgress={() => showToast(`Você já concluiu ${readSermons.size} de ${SERMONS.length} mensagens da sua caminhada! 🌿`)}
        onShareApp={handleShareApp}
        onLockApp={handleLock}
        onOpenFontSize={() => setIsFontModalOpen(true)}
        onOpen500Modal={() => setIs500ModalOpen(true)}
      />

      {/* Hero with Today's Devotional and Thematic Sequences */}
      <DailyHero
        todaySermon={todaySermon}
        readCount={readSermons.size}
        totalCount={SERMONS.length}
        activeTrackId={activeTrackId}
        onSelectTrack={handleSelectTrack}
        onClearTrack={handleClearTrack}
        onScrollToSermon={handleScrollToSermon}
        onOpen500Modal={() => setIs500ModalOpen(true)}
        onToast={showToast}
      />

      {/* Sticky Filter Bar */}
      <ModuleTabs
        activeTab={activeTab}
        totalCount={SERMONS.length}
        onSelectTab={setActiveTab}
        searchTerm={searchTerm}
        onSearchChange={setSearchTerm}
        favCount={favoriteSermons.size}
        notesCount={notesCount}
        onOpen500Modal={() => setIs500ModalOpen(true)}
        onOpenTracks={() => {
          const el = document.getElementById('trilhas-do-coracao');
          el?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }}
      />

      {/* Main Devotionals List */}
      <main className="flex-1 max-w-5xl w-full mx-auto p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8">
        
        {/* Active Thematic Track Banner in main area */}
        {activeTrack && (
          <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-r from-rosewood-900 via-rosewood-800 to-stone-900 text-white shadow-md border border-rosewood-700/60 flex flex-wrap items-center justify-between gap-3 animate-in fade-in">
            <div className="flex items-center gap-3">
              <span className="text-2xl p-2 rounded-2xl bg-white/10">{activeTrack.emoji}</span>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold uppercase tracking-wider text-warmgold-300">
                    Trilha Temática Guiada
                  </span>
                  <span className="text-[10px] bg-white/20 px-2 py-0.5 rounded-full font-medium">
                    {filteredSermons.length} lições na sequência
                  </span>
                </div>
                <h3 className="font-serif font-bold text-base sm:text-lg">
                  {activeTrack.title}
                </h3>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => handleScrollToSermon(activeTrack.sermonIds[0])}
                className="px-3.5 py-1.5 rounded-xl bg-warmgold-500 hover:bg-warmgold-400 text-stone-950 text-xs font-bold transition-all shadow-xs cursor-pointer active:scale-95"
              >
                Ler Passo 1 (#{activeTrack.sermonIds[0]})
              </button>
              <button
                onClick={handleClearTrack}
                className="px-3 py-1.5 rounded-xl bg-white/15 hover:bg-white/25 text-white text-xs font-medium transition-colors flex items-center gap-1 cursor-pointer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Ver Todas as Mensagens</span>
              </button>
            </div>
          </div>
        )}

        {/* Filter / Result indicator bar */}
        {(searchTerm || activeTab !== 'all') && !activeTrack && (
          <div className="flex items-center justify-between text-xs text-stone-500 px-2">
            <span>
              Exibindo <strong>{filteredSermons.length}</strong> de {SERMONS.length} mensagens
              {activeTab !== 'all' && ` • Filtro: ${activeTab}`}
            </span>
            <button
              onClick={() => {
                setActiveTab('all');
                setActiveTrackId(null);
                setSearchTerm('');
              }}
              className="text-rosewood-700 dark:text-rosewood-400 hover:underline font-semibold flex items-center gap-1 cursor-pointer"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Limpar filtros</span>
            </button>
          </div>
        )}

        {/* Devotional Cards */}
        {filteredSermons.length > 0 ? (
          <div className="space-y-6 sm:space-y-8">
            {filteredSermons.map(sermon => (
              <SermonCard
                key={sermon.num}
                sermon={sermon}
                isRead={readSermons.has(sermon.num)}
                isFavorite={favoriteSermons.has(sermon.num)}
                hasNote={Boolean(notes[sermon.num]?.trim())}
                isPlayingAudio={playingSermonNum === sermon.num}
                textSize={textSize}
                activeTrackId={activeTrackId}
                totalSermonsCount={SERMONS.length}
                onNavigateToSermon={handleScrollToSermon}
                onToggleRead={handleToggleRead}
                onToggleFavorite={handleToggleFavorite}
                onOpenNotes={(num) => {
                  const s = SERMONS.find(item => item.num === num) || null;
                  setNotesSermon(s);
                }}
                onOpenShare={(num, tab = 'verse') => {
                  const s = SERMONS.find(item => item.num === num) || null;
                  setShareInitialTab(tab);
                  setShareSermon(s);
                }}
                onToggleAudio={handleToggleAudio}
                onToast={showToast}
              />
            ))}
          </div>
        ) : (
          /* Empty State */
          <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl p-10 text-center space-y-4 shadow-xs max-w-md mx-auto">
            <div className="w-12 h-12 rounded-2xl bg-rosewood-100 dark:bg-rosewood-950/80 text-rosewood-600 dark:text-rosewood-400 flex items-center justify-center mx-auto">
              <Sparkles className="w-6 h-6" />
            </div>
            <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-white">
              Nenhuma mensagem encontrada
            </h3>
            <p className="text-xs text-stone-500 leading-relaxed font-light">
              Tente buscar por outras palavras-chave ou limpe os filtros para explorar as {SERMONS.length} reflexões.
            </p>
            <button
              onClick={() => {
                setActiveTab('all');
                setActiveTrackId(null);
                setSearchTerm('');
              }}
              className="px-4 py-2 rounded-xl bg-rosewood-700 text-white text-xs font-semibold hover:bg-rosewood-800 transition-colors cursor-pointer"
            >
              Ver todas as {SERMONS.length} mensagens
            </button>
          </div>
        )}

      </main>

      {/* Floating Audio Bar */}
      {currentPlayingSermon && (
        <AudioPlayerFloating
          sermon={currentPlayingSermon}
          isPaused={isAudioPaused}
          rate={audioRate}
          onTogglePlayPause={() => handleToggleAudio(currentPlayingSermon.num)}
          onStop={handleStopAudio}
          onChangeRate={handleChangeAudioRate}
        />
      )}

      {/* 500 Outlines & PDF Catalog Modal */}
      <Catalog500Modal
        isOpen={is500ModalOpen}
        onClose={() => setIs500ModalOpen(false)}
        onSelectSermon={handleScrollToSermon}
        onToast={showToast}
      />

      {/* Share Modal */}
      <ShareModal
        sermon={shareSermon}
        initialTab={shareInitialTab}
        onClose={() => setShareSermon(null)}
      />

      {/* Notes / Prayer Diary Modal */}
      <NotesModal
        sermon={notesSermon}
        savedNote={notesSermon ? notes[notesSermon.num] || '' : ''}
        allNotes={notes}
        onSaveNote={handleSaveNote}
        onDeleteNote={handleDeleteNote}
        onClose={() => setNotesSermon(null)}
        onSelectSermon={handleScrollToSermon}
      />

      {/* Font Settings Modal */}
      <FontSettingsModal
        isOpen={isFontModalOpen}
        currentSize={textSize}
        onChangeSize={(size) => setTextSize(size)}
        onClose={() => setIsFontModalOpen(false)}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-20 sm:bottom-6 right-4 sm:right-6 z-50 bg-stone-900 text-white text-xs px-4 py-3 rounded-2xl shadow-xl flex items-center gap-2.5 border border-stone-800 animate-in fade-in slide-in-from-bottom-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Offline Status Indicator */}
      <OfflineIndicator />

      {/* Mobile-first bottom navigation bar */}
      <MobileBottomNav
        activeTab={activeTab}
        totalCount={SERMONS.length}
        onSelectTab={setActiveTab}
        onOpenDaily={() => handleScrollToSermon(todaySermon.num)}
        favCount={favoriteSermons.size}
        notesCount={notesCount}
      />

      {/* Footer */}
      <Footer
        onScrollToTop={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        onShareApp={handleShareApp}
      />

    </div>
  );
}
