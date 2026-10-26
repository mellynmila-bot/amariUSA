import React, { useState } from 'react';
import { ChevronDown, MessageCircle, HelpCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { siteData } from '../data/siteData';
import { ScrollReveal } from './ScrollReveal';

export const FAQ: React.FC = () => {
  const { lang, t, getWhatsAppUrl } = useLanguage();
  const [openIds, setOpenIds] = useState<number[]>([1, 2]); // Open first two by default

  const toggleItem = (id: number) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <section id="faq" className="relative py-20 sm:py-28 bg-[#F6EFE4] text-[#26343B]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal direction="up" distance={20} duration={650}>
          <div className="text-center mb-12 sm:mb-16">
            <span className="text-xs sm:text-sm font-sans tracking-[0.25em] uppercase font-semibold text-[#8F7030] bg-[#EFE5D3] px-4 py-1.5 rounded-full border border-[#C4A05A]/40 inline-block mb-4">
              {lang === 'pt' ? 'Tire Suas Dúvidas' : 'Got Questions?'}
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal text-[#1F4A5C] mb-4 text-balance">
              {t('faq.title')}
            </h2>
            <p className="text-base sm:text-lg text-[#26343B]/80 font-sans leading-relaxed">
              {t('faq.subtitle')}
            </p>
          </div>
        </ScrollReveal>

        {/* Accordion List */}
        <ScrollReveal direction="up" delay={80} distance={20}>
          <div className="space-y-3.5 mb-12">
            {siteData.faq.map((item) => {
              const isOpen = openIds.includes(item.id);
              return (
                <div
                  key={item.id}
                  className="rounded-2xl border border-[#C4A05A]/40 bg-[#EFE5D3]/40 overflow-hidden transition-all duration-200"
                >
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    aria-expanded={isOpen}
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8F7030]"
                  >
                    <span className="font-display font-semibold text-base sm:text-lg text-[#1F4A5C]">
                      {lang === 'pt' ? item.questionPt : item.questionEn}
                    </span>
                    <div
                      className={`p-1.5 rounded-full bg-[#EFE5D3] text-[#8F7030] border border-[#C4A05A]/40 shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-180 bg-[#C4A05A] text-[#F6EFE4]' : ''
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-sm sm:text-base text-[#26343B]/85 font-sans leading-relaxed border-t border-[#C4A05A]/20">
                      {lang === 'pt' ? item.answerPt : item.answerEn}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </ScrollReveal>

        {/* Section Final Button */}
        <ScrollReveal direction="up" delay={120} distance={20}>
          <div className="text-center">
            <a
              href={getWhatsAppUrl(
                lang === 'pt'
                  ? 'Olá, Andreza! 💛 Li as dúvidas frequentes e gostaria de agendar meu atendimento.'
                  : 'Hello Andreza! 💛 I checked the FAQ on your site and would love to schedule my visit.'
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#C4A05A] hover:bg-[#8F7030] text-[#F6EFE4] text-sm sm:text-base font-semibold tracking-wider uppercase transition-all duration-200 shadow-md border border-[#E6D29B]/60"
            >
              <MessageCircle className="w-5 h-5" />
              <span>{t('faq.cta')}</span>
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
