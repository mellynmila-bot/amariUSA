import React, { useEffect, useCallback, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxImage {
  id: number | string;
  url: string;
  alt: string;
}

interface LightboxProps {
  images: LightboxImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const Lightbox: React.FC<LightboxProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  onPrev,
  onNext,
}) => {
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    },
    [isOpen, onClose, onPrev, onNext]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
      setTimeout(() => closeButtonRef.current?.focus(), 50);
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, handleKeyDown]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      onNext();
    } else if (distance < -50) {
      onPrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (!isOpen || images.length === 0) return null;

  const currentImage = images[currentIndex] || images[0];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Imagem ampliada"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1F4A5C]/95 backdrop-blur-md transition-opacity duration-300 p-4 sm:p-6"
      onClick={onClose}
    >
      {/* Top bar controls */}
      <div
        className="absolute top-4 left-4 right-4 flex items-center justify-between text-[#F6EFE4] z-10 max-w-5xl mx-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="bg-[#1F4A5C]/80 px-4 py-1.5 rounded-full border border-[#C4A05A]/40 text-xs sm:text-sm font-sans tracking-widest text-[#E6D29B]">
          {currentIndex + 1} / {images.length}
        </div>
        <button
          ref={closeButtonRef}
          onClick={onClose}
          aria-label="Fechar galeria"
          className="p-2 sm:p-2.5 rounded-full bg-[#1F4A5C]/80 hover:bg-[#C4A05A] text-[#F6EFE4] border border-[#C4A05A]/40 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6D29B]"
        >
          <X className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrev();
        }}
        aria-label="Foto anterior"
        className="absolute left-2 sm:left-6 p-2 sm:p-3 rounded-full bg-[#1F4A5C]/80 hover:bg-[#C4A05A] text-[#F6EFE4] border border-[#C4A05A]/40 transition-colors z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6D29B]"
      >
        <ChevronLeft className="w-6 h-6 sm:w-7 sm:h-7" />
      </button>

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        aria-label="Próxima foto"
        className="absolute right-2 sm:right-6 p-2 sm:p-3 rounded-full bg-[#1F4A5C]/80 hover:bg-[#C4A05A] text-[#F6EFE4] border border-[#C4A05A]/40 transition-colors z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6D29B]"
      >
        <ChevronRight className="w-6 h-6 sm:w-7 sm:h-7" />
      </button>

      {/* Image Container */}
      <div
        className="relative max-w-4xl max-h-[85vh] flex items-center justify-center p-2"
        onClick={(e) => e.stopPropagation()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={currentImage.url}
          alt={currentImage.alt}
          referrerPolicy="no-referrer"
          className="max-w-full max-h-[80vh] object-contain rounded-2xl border-2 border-[#C4A05A]/50 shadow-2xl transition-all duration-300"
        />
      </div>
    </div>
  );
};
