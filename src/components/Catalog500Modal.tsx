import React, { useState } from 'react';
import { X, BookOpen, Printer, Download, Sparkles, ChevronRight, Search, FileText, CheckCircle2 } from 'lucide-react';
import { VOLUMES_500, VolumeInfo } from '../data/catalog500';

interface Catalog500ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectSermon: (num: number) => void;
  onToast?: (msg: string) => void;
}

export const Catalog500Modal: React.FC<Catalog500ModalProps> = ({
  isOpen,
  onClose,
  onSelectSermon,
  onToast,
}) => {
  const [selectedVolume, setSelectedVolume] = useState<VolumeInfo | null>(VOLUMES_500[0]);
  const [searchTerm, setSearchTerm] = useState('');

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
    if (onToast) {
      onToast('Abrindo diálogo de impressão/salvar em PDF... 🖨️');
    }
  };

  const filteredVolumes = VOLUMES_500.filter(v => {
    if (!searchTerm.trim()) return true;
    const q = searchTerm.toLowerCase();
    return (
      v.title.toLowerCase().includes(q) ||
      v.subtitle.toLowerCase().includes(q) ||
      v.description.toLowerCase().includes(q) ||
      v.keyPassages.toLowerCase().includes(q) ||
      v.sampleTopics.some(t => t.toLowerCase().includes(q))
    );
  });

  return (
    <div className="fixed inset-0 z-50 bg-stone-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-5 overflow-y-auto">
      <div className="bg-white dark:bg-stone-900 border border-stone-200 dark:border-stone-800 rounded-3xl w-full max-w-4xl shadow-2xl overflow-hidden flex flex-col max-h-[92vh] animate-in fade-in zoom-in-95 duration-200">
        
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-gradient-to-r from-rosewood-900 via-rosewood-800 to-rosewood-700 text-white flex items-start justify-between gap-4 relative overflow-hidden">
          <div className="relative z-10 space-y-1">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/15 text-warmgold-300 text-[11px] font-bold uppercase tracking-wider">
              <Sparkles className="w-3 h-3 text-warmgold-400" />
              <span>Coletânea Completa • 500 Esboços</span>
            </div>
            <h3 className="font-serif text-xl sm:text-2xl font-bold leading-tight">
              Acervo de Esboços & Pregações para Mulheres
            </h3>
            <p className="text-xs text-rosewood-100 font-light max-w-xl">
              10 Grandes Volumes Temáticos divididos em 500 tópicos estruturados para ministério feminino, células, discipulado e edificação pessoal.
            </p>
          </div>

          <div className="flex items-center gap-2 relative z-10 shrink-0">
            <button
              onClick={handlePrint}
              className="p-2 sm:px-3 sm:py-1.5 rounded-xl bg-white/20 hover:bg-white/30 text-white text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Imprimir ou Salvar como PDF"
            >
              <Printer className="w-4 h-4" />
              <span className="hidden sm:inline">Salvar PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-black/20 hover:bg-black/40 text-white transition-colors cursor-pointer"
              aria-label="Fechar"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="p-4 border-b border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900/50 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="w-full relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" />
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Buscar volume, tema bíblico, passagem ou palavra-chave..."
              className="w-full pl-9 pr-4 py-2 text-xs rounded-xl bg-white dark:bg-stone-800 border border-stone-200 dark:border-stone-700 text-stone-800 dark:text-stone-100 placeholder-stone-400 focus:outline-none focus:border-rosewood-500 transition-colors"
            />
          </div>
          <span className="text-[11px] text-stone-500 whitespace-nowrap">
            10 Volumes • 500 Temas Homiléticos
          </span>
        </div>

        {/* Modal Body: Left sidebar (Volumes list) & Right panel (Volume details) */}
        <div className="flex-1 overflow-y-auto grid grid-cols-1 md:grid-cols-12 divide-y md:divide-y-0 md:divide-x divide-stone-200 dark:divide-stone-800">
          
          {/* Left Column: Volume cards */}
          <div className="md:col-span-5 p-3 sm:p-4 space-y-2 overflow-y-auto max-h-[500px]">
            {filteredVolumes.map((vol) => {
              const isSelected = selectedVolume?.volumeNum === vol.volumeNum;
              return (
                <button
                  key={vol.volumeNum}
                  onClick={() => setSelectedVolume(vol)}
                  className={`w-full text-left p-3 rounded-2xl border transition-all cursor-pointer flex items-start gap-3 ${
                    isSelected
                      ? 'border-rosewood-500 bg-rosewood-50/70 dark:bg-rosewood-950/40 shadow-xs ring-1 ring-rosewood-400'
                      : 'border-stone-200/80 dark:border-stone-800 hover:bg-stone-50 dark:hover:bg-stone-800/60'
                  }`}
                >
                  <span className={`w-8 h-8 rounded-xl flex items-center justify-center font-bold text-xs shrink-0 ${
                    isSelected
                      ? 'bg-rosewood-700 text-white'
                      : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300'
                  }`}>
                    V{vol.volumeNum}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1">
                      <span className="text-[10px] font-bold uppercase tracking-wider text-rosewood-600 dark:text-rosewood-400">
                        {vol.themeRange}
                      </span>
                      <span className="text-[10px] text-stone-400">50 temas</span>
                    </div>
                    <h4 className="font-serif font-bold text-xs text-stone-900 dark:text-white truncate">
                      {vol.title}
                    </h4>
                    <p className="text-[11px] text-stone-500 dark:text-stone-400 line-clamp-1 font-light">
                      {vol.subtitle}
                    </p>
                  </div>
                  <ChevronRight className="w-4 h-4 text-stone-400 self-center shrink-0" />
                </button>
              );
            })}
          </div>

          {/* Right Column: Selected Volume View */}
          <div className="md:col-span-7 p-4 sm:p-6 space-y-4 overflow-y-auto max-h-[500px]">
            {selectedVolume ? (
              <div className="space-y-4">
                
                {/* Volume Badge and Title */}
                <div>
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-lg bg-rosewood-100 dark:bg-rosewood-950 text-rosewood-800 dark:text-rosewood-300 text-xs font-bold mb-1.5">
                    <BookOpen className="w-3.5 h-3.5" />
                    <span>Volume {selectedVolume.volumeNum} • {selectedVolume.themeRange}</span>
                  </div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-stone-900 dark:text-white">
                    {selectedVolume.title}
                  </h3>
                  <p className="text-xs text-stone-600 dark:text-stone-300 font-light mt-0.5">
                    {selectedVolume.subtitle}
                  </p>
                </div>

                {/* Description */}
                <div className="p-3.5 rounded-2xl bg-stone-50 dark:bg-stone-800/50 border border-stone-200/80 dark:border-stone-800">
                  <p className="text-xs text-stone-700 dark:text-stone-300 leading-relaxed font-light">
                    {selectedVolume.description}
                  </p>
                  <p className="mt-2 text-[11px] font-medium text-rosewood-700 dark:text-rosewood-400">
                    <strong>Textos-Chave:</strong> {selectedVolume.keyPassages}
                  </p>
                </div>

                {/* Sample Topics / Outline Index */}
                <div className="space-y-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 dark:text-stone-400 font-display flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-rosewood-600" />
                    <span>Principais Esboços & Pregações Deste Volume</span>
                  </h4>
                  
                  <div className="space-y-1.5">
                    {selectedVolume.sampleTopics.map((topic, idx) => (
                      <div
                        key={idx}
                        className="p-2.5 rounded-xl bg-white dark:bg-stone-800 border border-stone-200/80 dark:border-stone-700/80 flex items-center justify-between gap-2 text-xs"
                      >
                        <div className="flex items-center gap-2 min-w-0">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                          <span className="font-medium text-stone-800 dark:text-stone-200 truncate">
                            {topic}
                          </span>
                        </div>
                        {selectedVolume.volumeNum <= 2 && (
                          <button
                            onClick={() => {
                              onSelectSermon(idx + 1 + (selectedVolume.volumeNum - 1) * 50);
                              onClose();
                            }}
                            className="px-2 py-0.5 rounded-lg bg-rosewood-50 dark:bg-rosewood-950 text-rosewood-700 dark:text-rosewood-300 text-[10px] font-bold hover:bg-rosewood-100 transition-colors shrink-0 cursor-pointer"
                          >
                            Ler Lição
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Practical Advice Banner */}
                <div className="p-3 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200/80 dark:border-amber-900/50 flex items-center justify-between gap-3 text-xs text-amber-800 dark:text-amber-300">
                  <span>
                    📖 <strong>Dica Homilética:</strong> Utilize os pontos práticos e orações como base para estudos de células e congressos de mulheres.
                  </span>
                  <button
                    onClick={handlePrint}
                    className="px-3 py-1.5 rounded-xl bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs whitespace-nowrap cursor-pointer transition-colors shadow-2xs"
                  >
                    Imprimir Volume
                  </button>
                </div>

              </div>
            ) : (
              <div className="text-center py-12 text-stone-400">
                Selecione um volume ao lado para ver os detalhes
              </div>
            )}
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-4 border-t border-stone-200 dark:border-stone-800 bg-stone-50 dark:bg-stone-900 flex flex-wrap items-center justify-between gap-3 text-xs">
          <span className="text-stone-500 text-[11px]">
            Mulher Plena & Restaurada • Formato preparado para impressão e leitura mobile.
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 rounded-xl bg-stone-200 dark:bg-stone-800 hover:bg-stone-300 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 font-semibold transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Salvar em PDF</span>
            </button>
            <button
              onClick={onClose}
              className="px-4 py-1.5 rounded-xl bg-rosewood-700 hover:bg-rosewood-800 text-white font-bold transition-colors cursor-pointer"
            >
              Fechar
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
