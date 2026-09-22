import React, { useState, useEffect } from 'react';
import { Lock, Sparkles, Eye, EyeOff, AlertCircle, ShieldCheck, HelpCircle, Clock } from 'lucide-react';
import { verifyPassword } from '../utils/security';

interface GateLockModalProps {
  isLocked: boolean;
  onUnlock: () => void;
}

const MAX_ATTEMPTS = 5;
const LOCKOUT_SECONDS = 30;

export const GateLockModal: React.FC<GateLockModalProps> = ({ isLocked, onUnlock }) => {
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [failedAttempts, setFailedAttempts] = useState(0);
  const [lockoutTimer, setLockoutTimer] = useState(0);

  // Handle countdown if locked out due to brute force attempts
  useEffect(() => {
    if (lockoutTimer <= 0) return;
    const interval = setInterval(() => {
      setLockoutTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, [lockoutTimer]);

  if (!isLocked) return null;

  const handleCheckPassword = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (lockoutTimer > 0 || isLoading) return;

    if (!password.trim()) {
      setError(true);
      setTimeout(() => setError(false), 3000);
      return;
    }

    setIsLoading(true);
    try {
      const isValid = await verifyPassword(password);
      if (isValid) {
        setError(false);
        setPassword('');
        setFailedAttempts(0);
        onUnlock();
      } else {
        const newAttempts = failedAttempts + 1;
        setFailedAttempts(newAttempts);
        setError(true);

        if (newAttempts >= MAX_ATTEMPTS) {
          setLockoutTimer(LOCKOUT_SECONDS);
        } else {
          setTimeout(() => setError(false), 3500);
        }
      }
    } catch {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSupportWhatsApp = () => {
    const text = encodeURIComponent("Olá! Sou aluna do devocional Mulher Plena e preciso de auxílio com meu acesso.");
    window.open(`https://api.whatsapp.com/send?text=${text}`, '_blank');
  };

  const isBlocked = lockoutTimer > 0;

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
            Digite sua senha de aluna para acessar as 50 mensagens devocionais e o diário de oração.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleCheckPassword} className="space-y-3 pt-1">
          <div className="relative">
            <input
              type={showPassword ? 'text' : 'password'}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Digite sua senha..."
              disabled={isBlocked || isLoading}
              maxLength={40}
              autoComplete="current-password"
              spellCheck={false}
              autoCorrect="off"
              autoFocus
              className="w-full text-center tracking-widest font-semibold px-4 py-3 text-xs sm:text-sm rounded-2xl border border-stone-200 dark:border-stone-700 bg-stone-50 dark:bg-stone-850 text-stone-900 dark:text-white focus:outline-none focus:border-rosewood-600 focus:ring-2 focus:ring-rosewood-500/20 transition-all pr-10 shadow-inner disabled:opacity-50"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              disabled={isBlocked || isLoading}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 p-1 cursor-pointer disabled:opacity-40"
              title={showPassword ? "Ocultar senha" : "Ver senha"}
              aria-label={showPassword ? "Ocultar senha digitada" : "Exibir senha digitada"}
            >
              {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            </button>
          </div>

          {/* Error Message - Does NOT reveal password */}
          {error && !isBlocked && (
            <div className="p-2.5 rounded-xl bg-rose-50 dark:bg-rose-950/40 border border-rose-200 dark:border-rose-900/50 text-rose-600 dark:text-rose-400 text-xs font-medium flex items-center justify-center gap-1.5 animate-in fade-in">
              <AlertCircle className="w-3.5 h-3.5 shrink-0" />
              <span>Senha incorreta. Verifique os dados digitados.</span>
            </div>
          )}

          {/* Brute force lockout banner */}
          {isBlocked && (
            <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/50 text-amber-800 dark:text-amber-300 text-xs font-medium flex items-center justify-center gap-1.5 animate-in fade-in">
              <Clock className="w-3.5 h-3.5 shrink-0 animate-spin" />
              <span>Muitas tentativas. Aguarde {lockoutTimer}s para tentar novamente.</span>
            </div>
          )}

          <button
            type="submit"
            disabled={isBlocked || isLoading}
            className="w-full py-3 px-6 rounded-2xl bg-gradient-to-r from-rosewood-700 via-rosewood-800 to-rosewood-900 hover:opacity-95 active:scale-[0.99] text-white text-xs font-bold uppercase tracking-wider shadow-md shadow-rosewood-700/25 transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <span className="inline-block w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            ) : (
              <Sparkles className="w-4 h-4 text-warmgold-300" />
            )}
            <span>{isLoading ? 'Verificando...' : 'Desbloquear Acesso'}</span>
          </button>
        </form>

        {/* Footer */}
        <div className="pt-2 border-t border-stone-100 dark:border-stone-800 flex items-center justify-between text-[11px] text-stone-400">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>Acesso Criptografado</span>
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
