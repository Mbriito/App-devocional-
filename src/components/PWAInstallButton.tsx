import React, { useState } from 'react';
import { Download, Smartphone, X, Share, PlusSquare, Sparkles } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';

export const PWAInstallButton: React.FC = () => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showIOSGuide, setShowIOSGuide] = useState(false);

  // If already installed or running as standalone, hide button
  if (isInstalled) {
    return null;
  }

  // Android / Chromium / Desktop flow
  if (isInstallable) {
    return (
      <button
        onClick={install}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-rosewood-700 via-rosewood-800 to-rosewood-900 hover:opacity-95 text-white text-xs font-semibold shadow-xs transition-all active:scale-95 cursor-pointer"
        title="Instalar devocional no seu celular para ler offline"
      >
        <Download className="w-3.5 h-3.5 text-warmgold-300" />
        <span className="hidden sm:inline">Baixar App</span>
        <span className="sm:hidden">Instalar</span>
      </button>
    );
  }

  // iOS Safari flow
  if (isIOS) {
    return (
      <>
        <button
          onClick={() => setShowIOSGuide(true)}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-rosewood-700 via-rosewood-800 to-rosewood-900 hover:opacity-95 text-white text-xs font-semibold shadow-xs transition-all active:scale-95 cursor-pointer"
          title="Instalar devocional no iPhone / iPad"
        >
          <Smartphone className="w-3.5 h-3.5 text-warmgold-300" />
          <span className="hidden sm:inline">Instalar no iPhone</span>
          <span className="sm:hidden">Instalar</span>
        </button>

        {showIOSGuide && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/80 backdrop-blur-xs p-4 animate-in fade-in">
            <div className="w-full max-w-sm rounded-3xl bg-white dark:bg-stone-900 p-6 shadow-2xl border border-rosewood-200/80 dark:border-rosewood-900/60 space-y-4 animate-in zoom-in-95 relative">
              <button
                onClick={() => setShowIOSGuide(false)}
                className="absolute top-4 right-4 p-1.5 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 rounded-xl hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors cursor-pointer"
                aria-label="Fechar"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-2xl bg-rosewood-100 dark:bg-rosewood-950 text-rosewood-700 dark:text-rosewood-300 flex items-center justify-center shrink-0">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-serif font-bold text-base text-stone-900 dark:text-white leading-tight">
                    Instalar no iPhone / iPad
                  </h3>
                  <p className="text-[11px] text-stone-500 dark:text-stone-400">
                    Tenha o Devocional na sua tela inicial sem precisar abrir o navegador
                  </p>
                </div>
              </div>

              <div className="space-y-2.5 text-xs text-stone-700 dark:text-stone-300 pt-1">
                <div className="p-3 rounded-2xl bg-stone-50 dark:bg-stone-800/80 border border-stone-200/80 dark:border-stone-700 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-rosewood-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    1
                  </div>
                  <div>
                    <p className="font-medium text-stone-900 dark:text-white">
                      Toque no botão Compartilhar
                    </p>
                    <p className="text-stone-500 dark:text-stone-400 text-[11px] mt-0.5 flex items-center gap-1">
                      Ícone <Share className="w-3.5 h-3.5 text-rosewood-600 inline" /> na barra inferior do Safari.
                    </p>
                  </div>
                </div>

                <div className="p-3 rounded-2xl bg-stone-50 dark:bg-stone-800/80 border border-stone-200/80 dark:border-stone-700 flex items-start gap-3">
                  <div className="w-6 h-6 rounded-lg bg-rosewood-600 text-white flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                    2
                  </div>
                  <div>
                    <p className="font-medium text-stone-900 dark:text-white">
                      Selecione "Adicionar à Tela de Início"
                    </p>
                    <p className="text-stone-500 dark:text-stone-400 text-[11px] mt-0.5 flex items-center gap-1">
                      Ícone <PlusSquare className="w-3.5 h-3.5 text-rosewood-600 inline" /> na lista de opções.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/50 text-[11px] text-amber-800 dark:text-amber-300 flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-warmgold-500 shrink-0" />
                <span>O app funcionará offline e com carregamento instantâneo.</span>
              </div>

              <button
                onClick={() => setShowIOSGuide(false)}
                className="w-full py-2.5 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-200 hover:bg-stone-200 dark:hover:bg-stone-700 text-xs font-semibold transition-colors cursor-pointer"
              >
                Entendi
              </button>
            </div>
          </div>
        )}
      </>
    );
  }

  // Fallback for other browsers: still show a helpful Install pill that offers PWA instructions
  return (
    <>
      <button
        onClick={() => setShowIOSGuide(true)}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-gradient-to-r from-rosewood-700 via-rosewood-800 to-rosewood-900 hover:opacity-95 text-white text-xs font-semibold shadow-xs transition-all active:scale-95 cursor-pointer"
        title="Instalar aplicativo para uso offline"
      >
        <Download className="w-3.5 h-3.5 text-warmgold-300" />
        <span className="hidden sm:inline">Instalar App</span>
        <span className="sm:hidden">Instalar</span>
      </button>

      {showIOSGuide && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-stone-950/80 backdrop-blur-xs p-4 animate-in fade-in">
          <div className="w-full max-w-sm rounded-3xl bg-white dark:bg-stone-900 p-6 shadow-2xl border border-rosewood-200/80 dark:border-rosewood-900/60 space-y-4 animate-in zoom-in-95 relative">
            <button
              onClick={() => setShowIOSGuide(false)}
              className="absolute top-4 right-4 p-1.5 text-stone-400 hover:text-stone-700 dark:hover:text-stone-200 rounded-xl hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors cursor-pointer"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-2xl bg-rosewood-100 dark:bg-rosewood-950 text-rosewood-700 dark:text-rosewood-300 flex items-center justify-center shrink-0">
                <Download className="w-5 h-5 text-rosewood-600 dark:text-rosewood-400" />
              </div>
              <div>
                <h3 className="font-serif font-bold text-base text-stone-900 dark:text-white leading-tight">
                  Instalar no Celular ou PC
                </h3>
                <p className="text-[11px] text-stone-500 dark:text-stone-400">
                  Acesso rápido e offline direto da tela inicial
                </p>
              </div>
            </div>

            <div className="space-y-2 text-xs text-stone-700 dark:text-stone-300 pt-1">
              <p className="leading-relaxed">
                Para instalar o <strong>Mulher Plena</strong> e usar offline sem internet:
              </p>
              <ul className="list-disc pl-5 space-y-1 text-stone-600 dark:text-stone-400 text-[11px]">
                <li><strong>No Android (Chrome):</strong> Toque nos 3 pontinhos no canto superior e selecione <em>"Instalar aplicativo"</em>.</li>
                <li><strong>No iPhone (Safari):</strong> Toque no botão de <em>Compartilhar</em> e escolha <em>"Adicionar à Tela de Início"</em>.</li>
                <li><strong>No Computador (Chrome/Edge):</strong> Clique no ícone de instalar na barra de endereços.</li>
              </ul>
            </div>

            <button
              onClick={() => setShowIOSGuide(false)}
              className="w-full py-2.5 rounded-xl bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-200 hover:bg-stone-200 dark:hover:bg-stone-700 text-xs font-semibold transition-colors cursor-pointer"
            >
              Fechar
            </button>
          </div>
        </div>
      )}
    </>
  );
};
