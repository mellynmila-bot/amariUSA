import React, { useState } from 'react';
import { MessageCircle, ZoomIn } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { siteData } from '../data/siteData';
import { Lightbox } from './Lightbox';
import { ScrollReveal } from './ScrollReveal';

export const Gallery: React.FC = () => {
  const { lang, t, getWhatsAppUrl } = useLanguage();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const images = siteData.images.gallery.map((g) => ({
    id: g.id,
    url: g.url,
    alt: lang === 'pt' ? g.altPt : g.altEn,
  }));

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : images.length - 1));
  };

  const handleNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! < images.length - 1 ? prev! + 1 : 0));
  };

  return (
    <section id="galeria" className="relative py-20 sm:py-28 bg-[#EFE5D3] text-[#26343B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up" distance={20} duration={650}>
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <span className="text-xs sm:text-sm font-sans tracking-[0.25em] uppercase font-semibold text-[#8F7030] bg-[#F6EFE4] px-4 py-1.5 rounded-full border border-[#C4A05A]/40 inline-block mb-4">
              {lang === 'pt' ? 'Transformações Reais' : 'Real Transformations'}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal text-[#1F4A5C] mb-4 text-balance">
              {t('gallery.title')}
            </h2>
            <p className="text-base sm:text-lg text-[#26343B]/80 font-sans leading-relaxed">
              {t('gallery.subtitle')}
            </p>
          </div>
        </ScrollReveal>

        {/* 6 Photo Organic Grid (3x2 Desktop, 2x3 Mobile) */}
        <ScrollReveal direction="up" delay={80} distance={20}>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-6">
            {images.map((img, index) => (
              <div
                key={img.id}
                onClick={() => openLightbox(index)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openLightbox(index);
                  }
                }}
                tabIndex={0}
                role="button"
                aria-label={`Ver foto ampliada ${index + 1} de ${images.length}`}
                className="group relative aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden border-2 border-[#C4A05A]/40 bg-[#F6EFE4] shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8F7030]"
              >
                <img
                  src={img.url}
                  alt={img.alt}
                  referrerPolicy="no-referrer"
                  loading="eager"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-108"
                />

                {/* Mobile subtle corner zoom indicator + Desktop hover overlay */}
                <div className="absolute bottom-2.5 right-2.5 sm:hidden p-1.5 rounded-full bg-[#F6EFE4]/90 text-[#1F4A5C] shadow-md border border-[#C4A05A] pointer-events-none">
                  <ZoomIn className="w-3.5 h-3.5 text-[#8F7030]" />
                </div>
                <div className="hidden sm:flex absolute inset-0 bg-[#1F4A5C]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 items-center justify-center pointer-events-none">
                  <div className="p-2 sm:p-3 rounded-full bg-[#F6EFE4]/90 text-[#1F4A5C] shadow-lg border border-[#C4A05A]">
                    <ZoomIn className="w-4 h-4 sm:w-5 sm:h-5 text-[#8F7030]" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Note below grid & Section CTA */}
        <ScrollReveal direction="up" delay={120} distance={20}>
          <div className="mt-10 sm:mt-12 text-center max-w-2xl mx-auto">
            <p className="text-xs sm:text-sm text-[#6B6256] italic mb-6">
              * {t('gallery.disclaimer')}
            </p>

            <a
              href={getWhatsAppUrl(
                lang === 'pt'
                  ? 'Olá, Andreza! 💛 Vi a galeria de resultados no site e gostaria de agendar uma consulta para o meu caso.'
                  : 'Hello Andreza! 💛 I saw the results gallery on your website and would love to schedule a consultation for my case.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#1F4A5C] hover:bg-[#C4A05A] text-[#F6EFE4] hover:text-[#1F4A5C] text-sm sm:text-base font-semibold tracking-wider uppercase transition-all duration-200 shadow-md border border-[#C4A05A]/60"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{t('gallery.cta')}</span>
            </a>
          </div>
        </ScrollReveal>

      </div>

      {/* Lightbox Modal */}
      <Lightbox
        images={images}
        currentIndex={lightboxIndex ?? 0}
        isOpen={lightboxIndex !== null}
        onClose={closeLightbox}
        onPrev={handlePrev}
        onNext={handleNext}
      />
    </section>
  );
};
