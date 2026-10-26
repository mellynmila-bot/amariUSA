import React from 'react';
import { Award, MessageCircle, Instagram, Sparkles } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { siteData } from '../data/siteData';
import { ScrollReveal } from './ScrollReveal';

export const About: React.FC = () => {
  const { lang, t, getWhatsAppUrl } = useLanguage();

  const badges = [
    t('about.badge1'),
    t('about.badge2'),
    t('about.badge3'),
    t('about.badge4'),
    t('about.badge5'),
  ];

  return (
    <section id="sobre" className="relative py-20 sm:py-28 bg-[#DDEBF0] text-[#26343B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 2-Column About Profile */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-16">
          
          {/* Left Column: Photo in Organic Blob with Gold Frame */}
          <div className="lg:col-span-5 flex justify-center">
            <ScrollReveal direction="up" distance={24} duration={700}>
              <div className="relative w-full max-w-[340px] sm:max-w-[400px] aspect-[4/5] mx-auto">
              
              {/* Back Gold Shadow Accent */}
              <div
                className="absolute inset-0 translate-x-3 translate-y-3 rounded-[58%_42%_55%_45%_/_50%_58%_42%_50%] border-2 border-[#C4A05A]/40 bg-[#A9CBD6]/40 -z-10"
                aria-hidden="true"
              />

              {/* Front Photo Blob */}
              <div className="relative w-full h-full overflow-hidden rounded-[58%_42%_55%_45%_/_50%_58%_42%_50%] border-2 border-[#C4A05A] shadow-xl">
                <img
                  src={siteData.images.about}
                  alt={
                    lang === 'pt'
                      ? 'Andreza Garcia, farmacêutica esteta e esteticista licenciada no Amarii Beauty Spa'
                      : 'Andreza Garcia, aesthetic pharmacist and licensed esthetician at Amarii Beauty Spa'
                  }
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                />
              </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Bio, Quote & Badges */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left">
            <ScrollReveal direction="up" delay={80} distance={24} duration={700}>
              <div className="inline-flex items-center justify-center lg:justify-start gap-2 mb-3">
                <span className="text-xs sm:text-sm font-sans tracking-[0.25em] uppercase font-semibold text-[#8F7030] bg-[#F6EFE4] px-4 py-1.5 rounded-full border border-[#C4A05A]/40">
                  {lang === 'pt' ? 'Quem Cuida de Você' : 'Your Dedicated Specialist'}
                </span>
              </div>

              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal text-[#1F4A5C] mb-3 text-balance">
                {t('about.title')}
              </h2>

              <p className="text-base sm:text-lg text-[#1F4A5C]/80 font-sans mb-6 font-medium">
                {t('about.subtitle')}
              </p>

              {/* Serif Italic Quote with Gold Quotation Marks */}
              <blockquote className="relative p-5 sm:p-6 rounded-2xl bg-[#F6EFE4]/80 border-l-0 border border-[#C4A05A]/40 mb-6 shadow-sm">
                <p className="font-display italic text-lg sm:text-xl text-[#1F4A5C] leading-relaxed">
                  {t('about.quote')}
                </p>
                <footer className="mt-2 text-xs uppercase tracking-wider font-semibold text-[#8F7030]">
                  — Andreza Garcia
                </footer>
              </blockquote>

              {/* Paragraph 1: Emotional & Purpose */}
              <p className="text-sm sm:text-base text-[#26343B]/85 leading-relaxed font-sans mb-4">
                {t('about.p1')}
              </p>

              {/* Paragraph 2: Technical, Pharmacy & Licensing */}
              <p className="text-sm sm:text-base text-[#26343B]/85 leading-relaxed font-sans mb-6">
                {t('about.p2')}
              </p>

              {/* Gold Badges / Seals */}
              <div className="flex flex-wrap justify-center lg:justify-start gap-2 sm:gap-2.5 mb-8">
                {badges.map((badge, idx) => (
                  <div
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3 sm:px-3.5 py-1.5 rounded-full bg-[#F6EFE4] border border-[#C4A05A]/60 text-[#1F4A5C] text-xs font-semibold shadow-xs"
                  >
                    <Sparkles className="w-3.5 h-3.5 text-[#8F7030] shrink-0" />
                    <span>{badge}</span>
                  </div>
                ))}
              </div>

              {/* Optional License Line */}
              {(siteData.licenses.esthetician || siteData.licenses.electrologist) && (
                <p className="text-xs text-[#6B6256] mb-6 font-mono">
                  Licenses: Esthetician No. [{siteData.licenses.esthetician || '—'}] · Electrologist No. [{siteData.licenses.electrologist || '—'}]
                </p>
              )}

              <div>
                <a
                  href={getWhatsAppUrl(
                    lang === 'pt'
                      ? 'Olá, Andreza! 💛 Gostaria de conversar com você sobre um atendimento no AMARII Beauty Spa.'
                      : 'Hello Andreza! 💛 I would love to speak with you regarding a treatment at AMARII Beauty Spa.'
                  )}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-full bg-[#1F4A5C] hover:bg-[#C4A05A] text-[#F6EFE4] hover:text-[#1F4A5C] text-sm sm:text-base font-semibold tracking-wider uppercase transition-all duration-200 shadow-md border border-[#C4A05A]/60"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>{t('about.cta')}</span>
                </a>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Instagram Sub-Block */}
        <ScrollReveal direction="up" delay={100} distance={24} duration={700}>
          <div className="pt-12 border-t border-[#C4A05A]/30">
            <div className="text-center max-w-2xl mx-auto mb-8">
              <div className="inline-flex items-center gap-2 text-[#8F7030] mb-2">
                <Instagram className="w-5 h-5 text-[#C4A05A]" />
                <span className="font-semibold text-sm tracking-widest uppercase">
                  {siteData.instagramHandle}
                </span>
              </div>
              <h3 className="font-display text-2xl sm:text-3xl text-[#1F4A5C] font-semibold mb-2">
                {t('about.instaTitle')}
              </h3>
              <p className="text-sm text-[#26343B]/80 font-sans">
                {t('about.instaSubtitle')}
              </p>
            </div>

            {/* Integrated Instagram Post DO0nfXjlDl3 Embed without cover */}
            <div className="flex justify-center mb-8 px-1 sm:px-2">
              <div className="w-full max-w-[360px] sm:max-w-[400px] rounded-3xl overflow-hidden border-2 border-[#C4A05A]/60 bg-[#F6EFE4] shadow-lg p-1">
                <iframe
                  src={siteData.instagramPostAboutEmbed}
                  className="w-full h-[430px] sm:h-[480px] border-0 rounded-2xl bg-white"
                  loading="lazy"
                  title="Post no Instagram de Andreza Garcia no AMARII Beauty Spa"
                  allow="encrypted-media"
                />
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3.5 sm:gap-4">
              <a
                href={siteData.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-3 rounded-full bg-[#F6EFE4] hover:bg-[#EFE5D3] text-[#1F4A5C] text-xs sm:text-sm font-semibold tracking-wide border border-[#C4A05A]/70 shadow-sm transition-colors"
              >
                <Instagram className="w-4 h-4 text-[#8F7030]" />
                <span>{t('about.instaFollow')}</span>
              </a>

              <a
                href={getWhatsAppUrl(
                  lang === 'pt'
                    ? 'Olá, Andreza! 💛 Vi suas publicações no Instagram e gostaria de agendar um horário.'
                    : 'Hello Andreza! 💛 I saw your Instagram posts and would love to book an appointment.'
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 sm:py-3 rounded-full bg-[#C4A05A] hover:bg-[#8F7030] text-[#F6EFE4] text-xs sm:text-sm font-semibold tracking-wide uppercase transition-colors shadow-sm border border-[#E6D29B]/60"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{t('about.instaBook')}</span>
              </a>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
