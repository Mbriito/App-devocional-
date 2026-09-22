import React from 'react';
import { X, Type, Check } from 'lucide-react';
import { TextSizeOption } from '../types';

interface FontSettingsModalProps {
  isOpen: boolean;
  currentSize: TextSizeOption;
  onChangeSize: (size: TextSizeOption) => void;
  onClose: () => void;
}

export const FontSettingsModal: React.FC<FontSettingsModalProps> = ({
  isOpen,
  currentSize,
  onChangeSize,
  onClose,
}) => {
  if (!isOpen) return null;

  const SIZES: { id: TextSizeOption; label: string; sample: string }[] = [
    { id: 'sm', label: 'Compacta', sample: 'Texto leve e mais denso' },
    { id: 'base', label: 'Padrão (Recomendada)', sample: 'Equilíbrio ideal de leitura' },
    { id: 'lg', label: 'Grande', sample: 'Mais conforto para a visão' },
    { id: 'xl', label: 'Extra Grande', sample: 'Máxima facilidade de leitura' },
  ];

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white dark:bg-stone-900 rounded-3xl max-w-sm w-full p-5 shadow-2xl border border-stone-200 dark:border-stone-800 space-y-4 animate-in fade-in zoom-in-95">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-stone-100 dark:border-stone-800 pb-3">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-rosewood-100 dark:bg-rosewood-950/80 text-rosewood-700 dark:text-rosewood-300 flex items-center justify-center">
              <Type className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-base text-stone-900 dark:text-white">
                Tamanho do Texto
              </h3>
              <p className="text-xs text-stone-500">Ajuste para seu conforto de leitura</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-600 dark:hover:text-stone-200 rounded-xl"
            aria-label="Fechar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Font Size Options */}
        <div className="space-y-2">
          {SIZES.map(s => {
            const isSelected = currentSize === s.id;
            return (
              <button
                key={s.id}
                onClick={() => onChangeSize(s.id)}
                className={`w-full text-left p-3 rounded-2xl border transition-all flex items-center justify-between ${
                  isSelected
                    ? 'border-rosewood-600 bg-rosewood-50/60 dark:bg-rosewood-950/40 text-rosewood-900 dark:text-rosewood-200'
                    : 'border-stone-200 dark:border-stone-800 hover:bg-stone-50 dark:hover:bg-stone-800/60 text-stone-700 dark:text-stone-300'
                }`}
              >
                <div>
                  <p className="font-semibold text-xs sm:text-sm">{s.label}</p>
                  <p className="text-[11px] text-stone-500 dark:text-stone-400 font-light">{s.sample}</p>
                </div>
                {isSelected && <Check className="w-4 h-4 text-rosewood-600 dark:text-rosewood-400 shrink-0" />}
              </button>
            );
          })}
        </div>

        <div className="pt-2 text-center">
          <button
            onClick={onClose}
            className="w-full py-2.5 rounded-xl bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 text-xs font-semibold"
          >
            Concluir Ajuste
          </button>
        </div>

      </div>
    </div>
  );
};
