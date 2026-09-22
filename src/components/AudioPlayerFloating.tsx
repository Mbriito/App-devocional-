import React from 'react';
import { Volume2, Play, Pause, Square, Gauge } from 'lucide-react';
import { Sermon } from '../types';

interface AudioPlayerFloatingProps {
  sermon: Sermon;
  isPaused: boolean;
  rate: number;
  onTogglePlayPause: () => void;
  onStop: () => void;
  onChangeRate: (newRate: number) => void;
}

export const AudioPlayerFloating: React.FC<AudioPlayerFloatingProps> = ({
  sermon,
  isPaused,
  rate,
  onTogglePlayPause,
  onStop,
  onChangeRate,
}) => {
  const toggleSpeed = () => {
    if (rate === 0.8) onChangeRate(1.0);
    else if (rate === 1.0) onChangeRate(1.2);
    else onChangeRate(0.8);
  };

  return (
    <div className="no-print fixed bottom-16 sm:bottom-6 left-4 right-4 sm:left-auto sm:right-6 z-40 max-w-md w-auto bg-stone-900/95 text-white dark:bg-stone-800/95 backdrop-blur-md px-4 py-3 rounded-2xl shadow-xl border border-stone-700/60 flex items-center justify-between gap-3 animate-in slide-in-from-bottom-5">
      
      {/* Devotional info & wave */}
      <div className="flex items-center gap-2.5 overflow-hidden min-w-0">
        <div className="w-8 h-8 rounded-xl bg-rosewood-600 flex items-center justify-center shrink-0">
          <Volume2 className="w-4 h-4 text-white animate-pulse" />
        </div>
        <div className="truncate">
          <span className="text-[10px] uppercase font-bold text-rose-300 block leading-tight">
            Ouvindo Mensagem #{sermon.num}
          </span>
          <p className="text-xs font-serif font-bold text-stone-100 truncate">
            {sermon.title}
          </p>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center gap-1.5 shrink-0">
        
        {/* Speed toggle */}
        <button
          onClick={toggleSpeed}
          className="px-2 py-1 rounded-lg bg-stone-800 hover:bg-stone-700 text-[11px] font-bold text-stone-300 flex items-center gap-1 transition-colors"
          title="Ajustar velocidade da voz"
        >
          <Gauge className="w-3 h-3 text-warmgold-400" />
          <span>{rate}x</span>
        </button>

        {/* Play/Pause */}
        <button
          onClick={onTogglePlayPause}
          className="p-2 rounded-xl bg-white text-stone-900 hover:bg-stone-200 shadow-xs transition-colors"
          title={isPaused ? "Continuar" : "Pausar"}
          aria-label={isPaused ? "Continuar" : "Pausar"}
        >
          {isPaused ? <Play className="w-4 h-4 fill-current" /> : <Pause className="w-4 h-4 fill-current" />}
        </button>

        {/* Stop */}
        <button
          onClick={onStop}
          className="p-2 rounded-xl text-stone-400 hover:text-rose-400 hover:bg-stone-800 transition-colors"
          title="Parar áudio"
          aria-label="Parar áudio"
        >
          <Square className="w-4 h-4" />
        </button>

      </div>

    </div>
  );
};
