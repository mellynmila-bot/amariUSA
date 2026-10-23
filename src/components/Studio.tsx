import React, { useState } from 'react';
import {
  ShieldCheck,
  Sparkles,
  MapPin,
  Lock,
  HeartHandshake,
  UserCheck,
  MessageCircle,
  ZoomIn,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { siteData } from '../data/siteData';
import { Lightbox } from './Lightbox';

export const Studio: React.FC = () => {
  const { lang, t, getWhatsAppUrl } = useLanguage();
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const studioImages = siteData.images.studio.map((s) => ({
    id: s.id,
    url: s.url,
    alt: lang === 'pt' ? s.altPt : s.altEn,
  }));

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const getFeatureIcon = (iconName: string) => {
    switch (iconName) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#E6D29B]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#E6D29B]" />;
      case 'MapPin':
        return <MapPin className="w-5 h-5 text-[#E6D29B]" />;
      case 'Lock':
        return <Lock className="w-5 h-5 text-[#E6D29B]" />;
      case 'HeartHandshake':
        return <HeartHandshake className="w-5 h-5 text-[#E6D29B]" />;
      case 'UserCheck':
        return <UserCheck className="w-5 h-5 text-[#E6D29B]" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#E6D29B]" />;
    }
  };

  return (
    <section id="espaco" className="relative py-20 sm:py-28 bg-[#1F4A5C] text-[#F6EFE4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Studio Logo at the top of section */}
        <div className="flex flex-col items-center justify-center mb-8">
          <div className="relative p-2.5 rounded-[58%_42%_55%_45%_/_50%_58%_42%_50%] border-2 border-[#C4A05A] bg-[#265366] shadow-md max-w-[120px] sm:max-w-[140px] aspect-square flex items-center justify-center">
            <img
              src={siteData.images.logo}
              alt="Logo oficial AMARII Beauty Spa"
              referrerPolicy="no-referrer"
              className="w-full h-full object-contain rounded-[58%_42%_55%_45%_/_50%_58%_42%_50%]"
              loading="lazy"
            />
          </div>
        </div>

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-sans tracking-[0.25em] uppercase font-semibold text-[#E6D29B] bg-[#F6EFE4]/10 px-4 py-1.5 rounded-full border border-[#C4A05A]/40 inline-block mb-4">
            {lang === 'pt' ? 'Nosso Santuário' : 'Our Sanctuary'}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal text-[#F6EFE4] mb-4 text-balance">
            {t('studio.title')}
          </h2>
          <p className="text-base sm:text-lg text-[#DDEBF0] font-sans leading-relaxed mb-6">
            {t('studio.subtitle')}
          </p>

          {/* Studio Quote */}
          <div className="max-w-2xl mx-auto p-5 rounded-2xl bg-[#265366]/70 border border-[#C4A05A]/40 shadow-sm">
            <p className="font-display italic text-base sm:text-lg text-[#E6D29B]">
              {t('studio.quote')}
            </p>
          </div>
        </div>

        {/* 6 Value Pillars Cards (3x2 Grid) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
          {siteData.studioFeatures.map((feat, index) => (
            <div
              key={index}
              className="p-6 rounded-[28px] bg-[#265366]/60 hover:bg-[#265366] border border-[#C4A05A]/35 hover:border-[#C4A05A] transition-all duration-300 shadow-sm flex flex-col justify-start"
            >
              <div className="p-3 rounded-2xl bg-[#1F4A5C] border border-[#C4A05A]/40 w-fit mb-4">
                {getFeatureIcon(feat.icon)}
              </div>
              <h3 className="font-display text-lg sm:text-xl font-semibold text-[#F6EFE4] mb-2">
                {lang === 'pt' ? feat.titlePt : feat.titleEn}
              </h3>
              <p className="text-sm text-[#DDEBF0]/90 font-sans leading-relaxed">
                {lang === 'pt' ? feat.descPt : feat.descEn}
              </p>
            </div>
          ))}
        </div>

        {/* Studio Photo Infinite Carousel */}
        <div className="mb-16">
          <div className="text-center sm:text-left mb-6">
            <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#F6EFE4]">
              {lang === 'pt' ? 'Conheça o Ambiente' : 'Explore the Studio Atmosphere'}
            </h3>
            <p className="text-xs sm:text-sm text-[#E6D29B] font-sans mt-1 flex items-center justify-center sm:justify-start gap-1.5">
              <span className="text-[#C4A05A] font-bold">✦</span>
              <span>
                {lang === 'pt'
                  ? 'Clique na foto para expandir e ver em tela cheia'
                  : 'Click any photo to expand and view in full screen'}
              </span>
            </p>
          </div>

          {/* Infinite Carousel Viewport without surrounding block */}
          <div className="relative w-full overflow-hidden py-2 [mask-image:_linear-gradient(to_right,transparent_0,_black_24px,_black_calc(100%-24px),transparent_100%)]">
            <div
              className="flex gap-4 sm:gap-6 whitespace-nowrap items-center select-none hover:[animation-play-state:paused]"
              style={{
                animation: 'studioInfiniteGlide 32s linear infinite',
              }}
            >
              {/* Duplicated 3 times for true seamless infinite loop */}
              {[0, 1, 2].map((batch) => (
                <div key={batch} className="flex gap-4 sm:gap-6 shrink-0">
                  {studioImages.map((img, i) => (
                    <div
                      key={`${batch}-${img.id}`}
                      onClick={() => openLightbox(i)}
                      tabIndex={0}
                      role="button"
                      aria-label={`Ver foto ampliada do espaço: ${img.alt} (Clique para expandir)`}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          openLightbox(i);
                        }
                      }}
                      className="group relative w-[260px] sm:w-[320px] md:w-[380px] aspect-[4/3] rounded-2xl sm:rounded-3xl overflow-hidden border border-[#C4A05A]/40 bg-[#265366] shadow-lg cursor-pointer shrink-0 transition-transform duration-300 hover:scale-[1.02] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6D29B]"
                    >
                      <img
                        src={img.url}
                        alt={img.alt}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1F4A5C]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="p-2.5 sm:p-3 rounded-full bg-[#1F4A5C]/90 border border-[#C4A05A] text-[#E6D29B] shadow-lg flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider">
                          <ZoomIn className="w-4 h-4" />
                          <span>{lang === 'pt' ? 'Clique para expandir' : 'Click to expand'}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        <style>{`
          @keyframes studioInfiniteGlide {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-33.333333%);
            }
          }
          @media (prefers-reduced-motion: reduce) {
            [style*="studioInfiniteGlide"] {
              animation: none !important;
              overflow-x: auto;
            }
          }
        `}</style>

        {/* How to Get Here - Instagram Video DKaiGfpu0DJ Embed without cover */}
        <div className="pt-10 border-t border-[#C4A05A]/30">
          <div className="text-center max-w-xl mx-auto mb-6">
            <h3 className="font-display text-2xl font-semibold text-[#F6EFE4] mb-2">
              {t('studio.howToGetTitle')}
            </h3>
            <p className="text-sm text-[#DDEBF0]">
              {lang === 'pt'
                ? 'Assista ao vídeo e veja o trajeto e a facilidade de acesso ao nosso spa em Wilmington.'
                : 'Watch our quick video to preview arrival and parking access in Wilmington.'}
            </p>
          </div>

          <div className="flex justify-center mb-8 px-2">
            <div className="w-full max-w-[340px] sm:max-w-[400px] rounded-3xl overflow-hidden border-2 border-[#C4A05A]/60 bg-[#265366] shadow-xl p-1">
              <iframe
                src={siteData.instagramPostSpaceEmbed}
                className="w-full h-[450px] sm:h-[480px] border-0 rounded-2xl bg-white"
                loading="lazy"
                title="Vídeo no Instagram: Como chegar ao AMARII Beauty Spa"
                allow="encrypted-media"
              />
            </div>
          </div>

          <div className="text-center">
            <a
              href={getWhatsAppUrl(
                lang === 'pt'
                  ? 'Olá, Andreza! 💛 Gostaria de agendar uma visita e conhecer o AMARII Beauty Spa.'
                  : 'Hello Andreza! 💛 I would love to schedule a visit to experience AMARII Beauty Spa.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#C4A05A] hover:bg-[#8F7030] text-[#1F4A5C] hover:text-[#F6EFE4] text-sm sm:text-base font-semibold tracking-wider uppercase transition-all duration-200 shadow-lg border border-[#E6D29B]/70"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{t('studio.cta')}</span>
            </a>
          </div>
        </div>

      </div>

      {/* Lightbox for Studio Photos */}
      <Lightbox
        images={studioImages}
        currentIndex={lightboxIndex ?? 0}
        isOpen={lightboxIndex !== null}
        onClose={closeLightbox}
        onPrev={() => {
          if (lightboxIndex === null) return;
          setLightboxIndex((prev) => (prev! > 0 ? prev! - 1 : studioImages.length - 1));
        }}
        onNext={() => {
          if (lightboxIndex === null) return;
          setLightboxIndex((prev) => (prev! < studioImages.length - 1 ? prev! + 1 : 0));
        }}
      />
    </section>
  );
};
