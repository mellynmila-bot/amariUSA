import React from 'react';
import { MapPin, Award, Gift, ArrowRight, MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { siteData } from '../data/siteData';

export const Hero: React.FC = () => {
  const { lang, t, getWhatsAppUrl } = useLanguage();

  return (
    <section
      id="hero"
      className="relative pt-28 sm:pt-36 pb-16 sm:pb-20 overflow-hidden bg-[#F6EFE4]"
    >
      {/* Background delicate decorative circles/leaves */}
      <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-[#EFE5D3]/40 to-transparent rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Right Column on Desktop, First on Mobile: Organic Blob Photo */}
          <div className="order-1 lg:order-2 lg:col-span-5 flex justify-center items-center relative py-2 sm:py-6">
            <div className="relative w-full max-w-[270px] sm:max-w-[340px] lg:max-w-[410px] aspect-[4/5] flex items-center justify-center">
              
              {/* Secondary Offset Gold Wave Outline */}
              <div
                className="absolute inset-0 translate-x-2.5 translate-y-2.5 sm:translate-x-4 sm:translate-y-4 rounded-[58%_42%_55%_45%_/_50%_58%_42%_50%] border-2 border-[#C4A05A]/45 bg-[#EFE5D3]/50 -z-10 transition-transform duration-700"
                aria-hidden="true"
              />

              {/* Primary Image Container Blob */}
              <div
                className="relative w-full h-full overflow-hidden rounded-[58%_42%_55%_45%_/_50%_58%_42%_50%] border-2 border-[#C4A05A] shadow-xl group"
              >
                <img
                  src={siteData.images.hero}
                  alt={
                    lang === 'pt'
                      ? 'Andreza Garcia, proprietária e esteticista licenciada no AMARII Beauty Spa'
                      : 'Andreza Garcia, owner and licensed esthetician at AMARII Beauty Spa'
                  }
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  loading="eager"
                />

                {/* Delicate subtle gold sheen overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#1F4A5C]/35 via-transparent to-transparent pointer-events-none" />
                
                {/* Floating pill badge */}
                <div className="absolute bottom-5 sm:bottom-6 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#F6EFE4]/95 backdrop-blur-md border border-[#C4A05A] text-[#1F4A5C] text-xs font-semibold shadow-md whitespace-nowrap">
                  Andreza Garcia
                </div>
              </div>

            </div>
          </div>

          {/* Left Column on Desktop, Second on Mobile: Copy & Trust Cards */}
          <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col justify-center text-left">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 mb-3 sm:mb-4">
              <span className="text-xs sm:text-sm font-sans tracking-[0.2em] uppercase font-semibold text-[#8F7030] bg-[#EFE5D3]/70 px-3.5 py-1.5 rounded-full border border-[#C4A05A]/40">
                {t('hero.eyebrow')}
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[50px] leading-[1.18] font-normal text-[#1F4A5C] text-balance mb-4 sm:mb-5">
              {lang === 'pt' ? (
                <>
                  Sua pele merece um{' '}
                  <span className="italic font-normal text-[#8F7030]">
                    recomeço.
                  </span>
                </>
              ) : (
                <>
                  Your skin deserves a{' '}
                  <span className="italic font-normal text-[#8F7030]">
                    fresh start.
                  </span>
                </>
              )}
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-[#26343B]/85 leading-relaxed font-sans max-w-2xl mb-6 sm:mb-8">
              {t('hero.subtitle')}
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 mb-4">
              <a
                href={getWhatsAppUrl(
                  lang === 'pt'
                    ? 'Olá, Andreza! 💛 Gostaria de agendar meu horário no AMARII Beauty Spa.'
                    : 'Hello Andreza! 💛 I would like to schedule an appointment at AMARII Beauty Spa.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#C4A05A] hover:bg-[#8F7030] text-[#F6EFE4] text-sm sm:text-base font-semibold tracking-wide uppercase transition-all duration-200 shadow-md hover:shadow-lg border border-[#E6D29B]/70 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F4A5C]"
              >
                <MessageCircle className="w-5 h-5 text-[#F6EFE4]" />
                <span>{t('hero.ctaBook')}</span>
              </a>

              <a
                href="#servicos"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-transparent hover:bg-[#EFE5D3] text-[#1F4A5C] text-sm sm:text-base font-semibold tracking-wide transition-all duration-200 border border-[#1F4A5C]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C4A05A]"
              >
                <span>{t('hero.ctaServices')}</span>
                <ArrowRight className="w-4 h-4 text-[#8F7030]" />
              </a>
            </div>

            {/* FTC Responsible Language Note */}
            <p className="text-xs text-[#6B6256] mb-6 sm:mb-8 italic">
              * {t('hero.ftcNote')}
            </p>

            {/* 3 Value Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-4 border-t border-[#C4A05A]/25">
              {/* Card 1: Location */}
              <a
                href={siteData.mapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex flex-col p-3.5 rounded-2xl bg-[#EFE5D3]/60 hover:bg-[#EFE5D3] border border-[#C4A05A]/40 transition-all duration-200 shadow-sm"
              >
                <div className="flex items-center gap-2 text-[#8F7030] mb-1">
                  <MapPin className="w-4 h-4 shrink-0 text-[#C4A05A]" />
                  <span className="text-xs font-bold text-[#1F4A5C] uppercase tracking-wider">
                    {t('hero.badgeLocation')}
                  </span>
                </div>
                <span className="text-xs text-[#26343B]/80 group-hover:text-[#1F4A5C]">
                  {t('hero.badgeLocationSub')} ↗
                </span>
              </a>

              {/* Card 2: License */}
              <div className="flex flex-col p-3.5 rounded-2xl bg-[#EFE5D3]/60 border border-[#C4A05A]/40 shadow-sm">
                <div className="flex items-center gap-2 text-[#8F7030] mb-1">
                  <Award className="w-4 h-4 shrink-0 text-[#C4A05A]" />
                  <span className="text-xs font-bold text-[#1F4A5C] uppercase tracking-wider">
                    {t('hero.badgeLicense')}
                  </span>
                </div>
                <span className="text-xs text-[#26343B]/80">
                  {t('hero.badgeLicenseSub')}
                </span>
              </div>

              {/* Card 3: Free Consultation */}
              <a
                href="#agendamento"
                className="group flex flex-col p-3.5 rounded-2xl bg-[#EFE5D3]/60 hover:bg-[#EFE5D3] border border-[#C4A05A]/40 transition-all duration-200 shadow-sm"
              >
                <div className="flex items-center gap-2 text-[#8F7030] mb-1">
                  <Gift className="w-4 h-4 shrink-0 text-[#C4A05A]" />
                  <span className="text-xs font-bold text-[#1F4A5C] uppercase tracking-wider">
                    {t('hero.badgeConsult')}
                  </span>
                </div>
                <span className="text-xs text-[#26343B]/80 group-hover:text-[#1F4A5C]">
                  {t('hero.badgeConsultSub')} →
                </span>
              </a>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
