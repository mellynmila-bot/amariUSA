import React, { useState } from 'react';
import { Star, MessageCircle, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { siteData } from '../data/siteData';

export const Feedbacks: React.FC = () => {
  const { lang, t, getWhatsAppUrl } = useLanguage();
  const [mobileIndex, setMobileIndex] = useState(0);

  const prevMobile = () => {
    setMobileIndex((prev) => (prev > 0 ? prev - 1 : siteData.feedbacks.length - 1));
  };

  const nextMobile = () => {
    setMobileIndex((prev) => (prev < siteData.feedbacks.length - 1 ? prev + 1 : 0));
  };

  return (
    <section id="avaliacoes" className="relative py-20 sm:py-28 bg-[#F6EFE4] text-[#26343B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-sans tracking-[0.25em] uppercase font-semibold text-[#8F7030] bg-[#EFE5D3] px-4 py-1.5 rounded-full border border-[#C4A05A]/40 inline-block mb-4">
            {lang === 'pt' ? 'Experiências Reais' : 'Client Testimonials'}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal text-[#1F4A5C] mb-4 text-balance">
            {t('feedbacks.title')}
          </h2>
          <p className="text-base sm:text-lg text-[#26343B]/80 font-sans leading-relaxed">
            {t('feedbacks.subtitle')}
          </p>
        </div>

        {/* Desktop Grid (3x2) */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {siteData.feedbacks.map((item) => (
            <div
              key={item.id}
              className="relative p-6 sm:p-7 rounded-[28px] bg-[#EFE5D3]/60 hover:bg-[#EFE5D3] border border-[#C4A05A]/40 hover:border-[#C4A05A] transition-all duration-300 shadow-sm hover:shadow-md flex flex-col justify-between"
            >
              <div>
                {/* 5 Gold Stars & Decorative Quote */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#F59E0B]" aria-label="5 de 5 estrelas">
                    {[...Array(item.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FBBF24] text-[#F59E0B]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#C4A05A]/40" />
                </div>

                <p className="text-sm sm:text-base font-sans text-[#26343B]/90 italic leading-relaxed mb-6">
                  {lang === 'pt' ? item.commentPt : item.commentEn}
                </p>
              </div>

              {/* Client Info */}
              <div className="pt-4 border-t border-[#C4A05A]/25 flex items-center justify-between">
                <div>
                  <h4 className="font-display font-semibold text-base text-[#1F4A5C]">
                    {item.name}
                  </h4>
                  <span className="text-xs text-[#8F7030] font-medium tracking-wide">
                    {lang === 'pt' ? item.treatmentPt : item.treatmentEn}
                  </span>
                </div>
                <span className="text-[11px] font-sans text-[#6B6256] uppercase tracking-wider bg-[#F6EFE4] px-2.5 py-1 rounded-full border border-[#C4A05A]/30">
                  {lang === 'pt' ? 'Verificada' : 'Verified'}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Carousel View */}
        <div className="md:hidden">
          {(() => {
            const current = siteData.feedbacks[mobileIndex];
            return (
              <div className="relative p-6 rounded-[28px] bg-[#EFE5D3]/70 border border-[#C4A05A]/50 shadow-md">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1 text-[#F59E0B]">
                    {[...Array(current.stars)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#FBBF24] text-[#F59E0B]" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-[#C4A05A]/40" />
                </div>

                <p className="text-base font-sans text-[#26343B] italic leading-relaxed mb-6">
                  {lang === 'pt' ? current.commentPt : current.commentEn}
                </p>

                <div className="pt-4 border-t border-[#C4A05A]/30 flex items-center justify-between">
                  <div>
                    <h4 className="font-display font-semibold text-base text-[#1F4A5C]">
                      {current.name}
                    </h4>
                    <span className="text-xs text-[#8F7030] font-medium">
                      {lang === 'pt' ? current.treatmentPt : current.treatmentEn}
                    </span>
                  </div>
                  <span className="text-[11px] font-sans text-[#6B6256] uppercase tracking-wider bg-[#F6EFE4] px-2 py-0.5 rounded-full border border-[#C4A05A]/30">
                    {lang === 'pt' ? 'Verificada' : 'Verified'}
                  </span>
                </div>
              </div>
            );
          })()}

          {/* Mobile Arrows & Pagination */}
          <div className="flex items-center justify-between mt-5 px-2">
            <button
              onClick={prevMobile}
              aria-label="Avaliação anterior"
              className="p-2.5 rounded-full bg-[#EFE5D3] border border-[#C4A05A]/40 text-[#1F4A5C]"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-mono text-[#8F7030]">
              {mobileIndex + 1} / {siteData.feedbacks.length}
            </span>
            <button
              onClick={nextMobile}
              aria-label="Próxima avaliação"
              className="p-2.5 rounded-full bg-[#EFE5D3] border border-[#C4A05A]/40 text-[#1F4A5C]"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* FTC Notice & Action */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-xs text-[#6B6256] italic mb-6">
            * {t('feedbacks.ftcNote')}
          </p>
          <a
            href={getWhatsAppUrl(
              lang === 'pt'
                ? 'Olá, Andreza! 💛 Gostaria de agendar meu horário para conhecer o AMARII Beauty Spa.'
                : 'Hello Andreza! 💛 I would love to schedule an appointment to experience AMARII Beauty Spa.'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#C4A05A] hover:bg-[#8F7030] text-[#F6EFE4] text-sm sm:text-base font-semibold tracking-wider uppercase transition-all duration-200 shadow-md border border-[#E6D29B]/60"
          >
            <MessageCircle className="w-5 h-5" />
            <span>{t('feedbacks.cta')}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
