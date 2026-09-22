import React, { useState, useEffect } from 'react';
import { X, PenTool, Save, Trash2, BookOpen } from 'lucide-react';
import { Sermon } from '../types';

interface NotesModalProps {
  sermon: Sermon | null;
  savedNote: string;
  allNotes: Record<number, string>;
  onSaveNote: (num: number, content: string) => void;
  onDeleteNote: (num: number) => void;
  onClose: () => void;
  onSelectSermon: (num: number) => void;
}

export const NotesModal: React.FC<NotesModalProps> = ({
  sermon,
  savedNote,
  allNotes,
  onSaveNote,
  onDeleteNote,
  onClose,
  onSelectSermon,
}) => {
  const [content, setContent] = useState(savedNote || '');
  const [viewAllNotes, setViewAllNotes] = useState(false);

  useEffect(() => {
    setContent(savedNote || '');
  }, [savedNote]);

  if (!sermon) return null;

  const notesKeys = Object.keys(allNotes).map(Number).filter(k => allNotes[k]?.trim());

  const handleSave = () => {
    onSaveNote(sermon.num, content.trim());
    onClose();
  };

  const handleDelete = () => {
    onDeleteNote(sermon.num);
    setContent('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/60 backdrop-blur-xs flex items-center justify-center p-4">
      <div className="bg-white dark:bg-stone-900 rounded-3xl max-w-lg w-full p-5 sm:p-7 shadow-2xl border border-stone-200 dark:border-stone-800 space-y-4 animate-in fade-in zoom-in-95">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-stone-100 dark:border-stone-800 pb-3">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-xl bg-rosewood-100 dark:bg-rosewood-950/80 text-rosewood-700 dark:text-rosewood-300 flex items-center justify-center shrink-0">
              <PenTool className="w-4 h-4" />
            </div>
            <div>
              <h3 className="font-serif font-bold text-base text-stone-900 dark:text-white">
                Meu Diário de Oração
              </h3>
              <p className="text-xs text-stone-500">
                Reflexões sobre a Mensagem #{sermon.num}
              </p>
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

        {/* Tab switch between Current Note and All Notes */}
        <div className="flex items-center gap-2 border-b border-stone-100 dark:border-stone-800 pb-2">
          <button
            onClick={() => setViewAllNotes(false)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
              !viewAllNotes
                ? 'bg-rosewood-700 text-white shadow-xs'
                : 'text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800'
            }`}
          >
            Anotação Desta Mensagem
          </button>
          
          <button
            onClick={() => setViewAllNotes(true)}
            className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
              viewAllNotes
                ? 'bg-rosewood-700 text-white shadow-xs'
                : 'text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:bg-stone-800'
            }`}
          >
            Todas as Minhas Anotações ({notesKeys.length})
          </button>
        </div>

        {!viewAllNotes ? (
          /* Current Note Editor */
          <div className="space-y-3">
            <div className="bg-rosewood-50/50 dark:bg-stone-800/40 p-3 rounded-2xl border border-rosewood-100/80 dark:border-rosewood-950 text-xs">
              <p className="font-semibold text-rosewood-900 dark:text-rosewood-200">
                {sermon.title}
              </p>
              <p className="text-stone-500 italic mt-0.5 font-serif">
                "{sermon.scriptureVerseText}"
              </p>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-stone-700 dark:text-stone-300">
                O que Deus falou ao seu coração hoje? O que você deseja colocar em oração?
              </label>
              <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                rows={7}
                placeholder="Escreva aqui seus sentimentos, decisões, orações ou pedidos de paz a Deus..."
                className="w-full text-xs sm:text-sm p-3.5 rounded-2xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 text-stone-800 dark:text-stone-100 placeholder-stone-400 focus:outline-none focus:border-rosewood-500 transition-colors leading-relaxed"
              />
            </div>

            <div className="flex items-center justify-between pt-2">
              {savedNote ? (
                <button
                  onClick={handleDelete}
                  className="text-xs text-rose-600 hover:text-rose-700 dark:hover:text-rose-400 font-medium flex items-center gap-1"
                >
                  <Trash2 className="w-3.5 h-3.5" />
                  <span>Excluir</span>
                </button>
              ) : (
                <span className="text-[11px] text-stone-400">Salvo no seu celular</span>
              )}

              <button
                onClick={handleSave}
                className="px-5 py-2.5 rounded-xl bg-rosewood-700 hover:bg-rosewood-800 text-white text-xs font-semibold shadow-xs flex items-center gap-1.5 transition-colors"
              >
                <Save className="w-4 h-4" />
                <span>Salvar no Diário</span>
              </button>
            </div>
          </div>
        ) : (
          /* List of all saved notes */
          <div className="space-y-3 max-h-72 overflow-y-auto pr-1">
            {notesKeys.length === 0 ? (
              <div className="text-center py-8 text-stone-400 text-xs">
                Você ainda não tem anotações salvas. Comece escrevendo suas orações nas mensagens!
              </div>
            ) : (
              notesKeys.map(num => (
                <div
                  key={num}
                  className="p-3.5 rounded-2xl bg-stone-50 dark:bg-stone-950 border border-stone-200 dark:border-stone-800 space-y-1.5 text-xs"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-rosewood-700 dark:text-rosewood-400">
                      Mensagem #{num}
                    </span>
                    <button
                      onClick={() => {
                        onSelectSermon(num);
                        onClose();
                      }}
                      className="text-[11px] text-stone-500 hover:text-rosewood-600 dark:hover:text-rosewood-400 flex items-center gap-1"
                    >
                      <BookOpen className="w-3 h-3" />
                      <span>Ir para reflexão</span>
                    </button>
                  </div>
                  <p className="text-stone-700 dark:text-stone-300 leading-relaxed font-light whitespace-pre-wrap">
                    {allNotes[num]}
                  </p>
                </div>
              ))
            )}
          </div>
        )}

      </div>
    </div>
  );
};
