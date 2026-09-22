import React, { useState, useEffect } from 'react';
import { X, Copy, Send, Check, BookOpen, Sparkles, MessageCircle } from 'lucide-react';
import { Sermon } from '../types';
import { getVerseShareText, getFullSermonShareText, shareOnWhatsApp } from '../utils/whatsapp';

interface ShareModalProps {
  sermon: Sermon | null;
  initialTab?: 'verse' | 'full';
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({
  sermon,
  initialTab = 'verse',
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'verse' | 'full'>(initialTab);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab, sermon]);

  if (!sermon) return null;

  const currentText = activeTab === 'verse' ? getVerseShareText(sermon) : getFullSermonShareText(sermon);

  const handleCopy = () => {
    navigator.clipboard.writeText(currentText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendWhatsApp = () => {
    shareOnWhatsApp(currentText);
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4 animate-in fade-in">
      <div className="bg-white dark:bg-stone-900 rounded-3xl max-w-lg w-full p-5 sm:p-7 shadow-2xl border border-rosewood-200/80 dark:border-rosewood-900/60 space-y-4 animate-in zoom-in-95 relative overflow-hidden">
        
        {/* Subtle decorative glow */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-rosewood-400/10 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-warmgold-400/10 rounded-full blur-2xl pointer-events-none" />

        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-stone-100 dark:border-stone-800 pb-3 relative z-10">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-tr from-emerald-600 to-teal-500 text-white flex items-center justify-center shadow-md shadow-emerald-500/20 shrink-0">
              <MessageCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400 font-display block">
                Compartilhar via WhatsApp
              </span>
              <h3 className="font-serif font-bold text-lg text-stone-900 dark:text-white leading-tight">
                Abençoe uma Amiga
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 rounded-xl hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Mode Selector (Verse vs Full Devotional) */}
        <div className="grid grid-cols-2 gap-1.5 p-1 bg-stone-100 dark:bg-stone-800/80 rounded-2xl relative z-10">
          <button
            type="button"
            onClick={() => setActiveTab('verse')}
            className={`py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
              activeTab === 'verse'
                ? 'bg-white dark:bg-stone-900 text-rosewood-800 dark:text-rosewood-300 shadow-xs border border-rosewood-200/50 dark:border-stone-700'
                : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-rosewood-600 dark:text-rosewood-400" />
            <span>Apenas o Versículo</span>
          </button>
          
          <button
            type="button"
            onClick={() => setActiveTab('full')}
            className={`py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-2 transition-all ${
              activeTab === 'full'
                ? 'bg-white dark:bg-stone-900 text-rosewood-800 dark:text-rosewood-300 shadow-xs border border-rosewood-200/50 dark:border-stone-700'
                : 'text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5 text-warmgold-500" />
            <span>Devocional Completo</span>
          </button>
        </div>

        {/* Text Area Preview / WhatsApp Bubble look */}
        <div className="space-y-1.5 relative z-10">
          <div className="flex items-center justify-between text-xs text-stone-500 dark:text-stone-400">
            <span className="font-medium">Mensagem formatada para o WhatsApp:</span>
            <span className="text-[11px] font-semibold text-rosewood-700 dark:text-rosewood-300">
              {sermon.scripture}
            </span>
          </div>

          <div className="relative">
            <textarea
              readOnly
              value={currentText}
              rows={activeTab === 'verse' ? 5 : 8}
              className="w-full text-xs sm:text-[13px] p-3.5 rounded-2xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 text-stone-800 dark:text-stone-200 leading-relaxed font-sans select-all focus:outline-none focus:border-rosewood-500/50 transition-all shadow-inner"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5 pt-2 border-t border-stone-100 dark:border-stone-800 relative z-10">
          <button
            type="button"
            onClick={handleCopy}
            className="order-2 sm:order-1 px-4 py-2.5 rounded-xl border border-stone-200 dark:border-stone-700 text-stone-700 dark:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 text-xs font-semibold flex items-center justify-center gap-2 transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-4 h-4 text-emerald-600" />
                <span className="text-emerald-600">Copiado para a área de transferência!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copiar Mensagem</span>
              </>
            )}
          </button>
          
          <button
            type="button"
            onClick={handleSendWhatsApp}
            className="order-1 sm:order-2 px-5 py-3 rounded-2xl bg-gradient-to-r from-emerald-600 via-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md shadow-emerald-600/25 active:scale-[0.98] transition-all cursor-pointer"
          >
            <Send className="w-4 h-4" />
            <span>Enviar no WhatsApp</span>
          </button>
        </div>

      </div>
    </div>
  );
};
