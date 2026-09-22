import React, { useState } from 'react';
import { Lock, Sparkles, Eye, EyeOff, AlertCircle, ShieldCheck, HelpCircle, KeyRound } from 'lucide-react';

interface GateLockModalProps {
  isLocked: boolean;
  onUnlock: () => void;
}

const DEFAULT_PASSWORDS = ['PLENA2026', 'MULHERPLENA', 'PLENA', 'DEUS2026'];

export const GateLockModal: React.FC<GateLockModalProps> = ({ isLocked, onUnlock }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);

  if (!isLocked) return null;

  const handleCheckPassword = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const cleanInput = password.trim().toUpperCase();

    // Check custom password or defaults
    const customPass = localStorage.getItem('mulher_custom_pass')?.trim().toUpperCase();
    const isValid = customPass ? cleanInput === customPass : DEFAULT_PASSWORDS.includes(cleanInput);

    if (isValid) {
      setError(false);
      onUnlock();
    } else {
      setError(true);
      setTimeout(() => setError(false), 3500);
    }
  };

  const handleSupportWhatsApp = () => {
    const text = encodeURIComponent("Olá! Sou aluna do devocional Mulher Plena e preciso de suporte com a senha de acesso.");
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/90 backdrop-blur-md flex items-center justify-center p-4">
      <div className="bg-white dark:bg-stone-900 border border-rosewood-200/80 dark:border-rosewood-900/60 rounded-3xl p-6 sm:p-8 max-w-md w-full text-center space-y-5 shadow-2xl relative overflow-hidden animate-in fade-in zoom-in-95">
        
        {/* Glow decoration */}
        <div className="absolute -top-12 -right-12 w-28 h-28 bg-rosewood-500/15 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-12 -left-12 w-28 h-28 bg-warmgold-500/15 rounded-full blur-2xl pointer-events-none" />

        {/* Lock Icon */}
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-rosewood-900 via-rosewood-800 to-rosewood-600 text-white flex items-center justify-center mx-auto shadow-md shadow-rosewood-500/25 ring-1 ring-warmgold-400/40">
          <Lock className="w-6 h-6 text-warmgold-300" />
        </div>

        {/* Title */}
        <div className="space-y-1.5">
          <span className="text-[10px] font-bold tracking-widest text-warmgold-600 dark:text-warmgold-400 uppercase font-display block">
            Área Exclusiva de Acesso
          </span>
          <h2 className="font-serif font-bold text-2xl text-stone-900 dark:text-white">
            Mulher Plena
          </h2>
          <p className="text-xs text-stone-600 dark:text-stone-300 max-w-xs mx-auto leading-relaxed font-light">
            Digite sua senha de aluna para desbloquear as 50 mensagens devocionais e o diário de oração.
          </p>
        </div>

        {/* Quick Password Hint Banner */}
        <div className="p-2.5 rounded-2xl bg-amber-50/80 dark:bg-stone-800/80 border border-amber-200/80 dark:border-amber-900/50 flex items-center justify-center gap-2 text-xs text-amber-900 dark:text-amber-200">
          <KeyRound className="w-3.5 h-3.5 text-warmgold-600 shrink-0" />
          <span>Senha de acesso: <strong className="font-bold tracking-wider text-rosewood-700 dark:text-rosewood-300">PLENA2026</strong></span>
        </div>

        {/* Form */}
        <form onSubmit={handleCheckPassword} className="space-y-3 pt-1">
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha..."
              autoFocus
              className="w-full text-center tracking-widest font-semibold px-4 py-3 text-xs sm:text-sm rounded-2xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-850 text-stone-900 dark:text-white focus:outline-none focus:border-rosewood-600 focus:ring-2 focus:ring-rosewood-500/20 transition-all pr-10 shadow-inner"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 p-1 cursor-pointer"
              title={showPassword ? "Ocultar senha" : "Ver senha"}
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>

          {error && (
            <div className="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/50 text-rose-600 dark:text-rose-400 text-xs font-medium flex items-center justify-center gap-1.5 animate-in fade-in">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>Senha incorreta. Tente <strong>PLENA2026</strong>.</span>
            </div>
          )}

          <button
            type="submit"
            className="w-full py-3 px-6 rounded-2xl bg-gradient-to-r from-rosewood-700 via-rosewood-800 to-rosewood-900 hover:opacity-95 active:scale-[0.99] text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-rosewood-700/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-warmgold-300" />
            <span>Desbloquear Acesso</span>
          </button>
        </form>

        {/* Footer */}
        <div className="pt-2 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-[11px] text-stone-400">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>Acesso Seguro</span>
          </span>
          <button
            onClick={handleSupportWhatsApp}
            className="text-rosewood-600 dark:text-rosewood-400 hover:underline font-medium flex items-center gap-1 cursor-pointer"
          >
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Suporte no WhatsApp</span>
          </button>
        </div>

      </div>
    </div>
  );
};
