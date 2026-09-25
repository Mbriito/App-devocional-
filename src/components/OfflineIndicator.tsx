import React from 'react';
import { WifiOff, CheckCircle2 } from 'lucide-react';
import { useOnlineStatus } from '../hooks/useOnlineStatus';

export const OfflineIndicator: React.FC = () => {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed bottom-4 left-4 right-4 sm:right-auto sm:max-w-md z-50 bg-stone-900/95 dark:bg-stone-800/95 text-stone-100 p-3 sm:px-4 rounded-2xl shadow-xl border border-warmgold-500/40 backdrop-blur-md flex items-center justify-between gap-3 animate-in fade-in slide-in-from-bottom-2"
    >
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-xl bg-warmgold-500/20 text-warmgold-400 flex items-center justify-center shrink-0">
          <WifiOff className="w-4 h-4" />
        </div>
        <div>
          <p className="text-xs font-semibold text-white leading-tight">
            Modo Offline Ativo
          </p>
          <p className="text-[11px] text-stone-300 leading-tight font-light mt-0.5">
            Todas as mensagens devocionais estão salvas no seu aparelho para leitura sem internet.
          </p>
        </div>
      </div>
      <div className="shrink-0 flex items-center gap-1 text-[10px] text-emerald-400 font-bold uppercase tracking-wider bg-emerald-950/60 px-2 py-0.5 rounded-md border border-emerald-800">
        <CheckCircle2 className="w-3 h-3" />
        <span>Pronto</span>
      </div>
    </div>
  );
};
