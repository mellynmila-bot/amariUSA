import React, { useMemo } from 'react';
import { MapPin, Clock, Navigation, CheckCircle2, AlertCircle, MessageCircle, Car } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { siteData } from '../data/siteData';

export const Location: React.FC = () => {
  const { lang, t, getWhatsAppUrl } = useLanguage();

  // Calculate current time & day in America/New_York (Wilmington, MA)
  const statusInfo = useMemo(() => {
    try {
      const now = new Date();
      // Formatter in America/New_York
      const nyTimeStr = now.toLocaleTimeString('en-US', {
        timeZone: 'America/New_York',
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
      });
      const nyDayStr = now.toLocaleDateString('en-US', {
        timeZone: 'America/New_York',
        weekday: 'short',
      });

      const [hourStr, minStr] = nyTimeStr.split(':');
      const currentDecimalHour = parseInt(hourStr, 10) + parseInt(minStr, 10) / 60;

      // Day of week mapping (0 = Sun, 1 = Mon ... 6 = Sat)
      const dayMap: Record<string, number> = {
        Sun: 0,
        Mon: 1,
        Tue: 2,
        Wed: 3,
        Thu: 4,
        Fri: 5,
        Sat: 6,
      };
      const dayNum = dayMap[nyDayStr] ?? now.getDay();

      // Find matching hour schedule
      const matchedSchedule = siteData.hours.find((h) => h.daysOfWeek.includes(dayNum));

      if (matchedSchedule) {
        const isOpen =
          currentDecimalHour >= matchedSchedule.openHour &&
          currentDecimalHour < matchedSchedule.closeHour;
        return {
          isOpen,
          activeScheduleIndex: siteData.hours.indexOf(matchedSchedule),
          dayNum,
          nyTimeStr,
        };
      }
    } catch {
      // fallback
    }
    return { isOpen: false, activeScheduleIndex: 0, dayNum: 1, nyTimeStr: '10:00' };
  }, []);

  return (
    <section id="localizacao" className="relative py-20 sm:py-28 bg-[#F6EFE4] text-[#26343B]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-sans tracking-[0.25em] uppercase font-semibold text-[#8F7030] bg-[#EFE5D3] px-4 py-1.5 rounded-full border border-[#C4A05A]/40 inline-block mb-4">
            {lang === 'pt' ? 'Onde Estamos' : 'Our Location'}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal text-[#1F4A5C] mb-4 text-balance">
            {t('location.title')}
          </h2>
          <p className="text-base sm:text-lg text-[#26343B]/80 font-sans leading-relaxed">
            {t('location.subtitle')}
          </p>
        </div>

        {/* 2 Information Cards: Address & Business Hours */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10 items-stretch">
          
          {/* Card 1: Address & Route Planning */}
          <div className="lg:col-span-5 p-7 sm:p-8 rounded-[28px] bg-[#EFE5D3]/70 border-2 border-[#C4A05A]/40 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2.5 text-[#8F7030] mb-3">
                <MapPin className="w-5 h-5 text-[#C4A05A]" />
                <span className="text-xs font-semibold uppercase tracking-widest font-sans">
                  {lang === 'pt' ? 'Endereço em Wilmington' : 'Wilmington Studio Address'}
                </span>
              </div>

              <h3 className="font-display text-2xl font-semibold text-[#1F4A5C] mb-3">
                AMARII Beauty Spa
              </h3>

              <p className="text-base sm:text-lg text-[#26343B] font-medium leading-relaxed mb-4">
                {siteData.address}
              </p>

              <div className="flex items-center gap-2 text-xs sm:text-sm text-[#6B6256] mb-6">
                <Car className="w-4 h-4 text-[#8F7030]" />
                <span>{t('location.parking')}</span>
              </div>
            </div>

            <a
              href={siteData.mapsDirectionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#1F4A5C] hover:bg-[#C4A05A] text-[#F6EFE4] hover:text-[#1F4A5C] text-sm font-semibold tracking-wider uppercase transition-colors shadow-sm border border-[#C4A05A]/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8F7030]"
            >
              <Navigation className="w-4 h-4" />
              <span>{t('location.directions')}</span>
            </a>
          </div>

          {/* Card 2: Operating Hours with America/New_York live highlight */}
          <div className="lg:col-span-7 p-7 sm:p-8 rounded-[28px] bg-[#EFE5D3]/70 border-2 border-[#C4A05A]/40 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <div className="flex items-center gap-2 text-[#8F7030]">
                  <Clock className="w-5 h-5 text-[#C4A05A]" />
                  <span className="text-xs font-semibold uppercase tracking-widest font-sans">
                    {t('location.hoursTitle')}
                  </span>
                </div>

                {/* Real-time Open/Closed badge in NY Timezone */}
                <div
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border ${
                    statusInfo.isOpen
                      ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                      : 'bg-stone-200/80 text-stone-700 border-stone-300'
                  }`}
                >
                  {statusInfo.isOpen ? (
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  ) : (
                    <AlertCircle className="w-3.5 h-3.5 text-stone-500" />
                  )}
                  <span>{statusInfo.isOpen ? t('location.openNow') : t('location.closedNow')}</span>
                </div>
              </div>

              {/* Hours Schedule List */}
              <div className="space-y-3 mb-4">
                {siteData.hours.map((schedule, idx) => {
                  const isCurrentDay = idx === statusInfo.activeScheduleIndex;
                  return (
                    <div
                      key={idx}
                      className={`flex items-center justify-between p-3 rounded-2xl transition-colors ${
                        isCurrentDay
                          ? 'bg-[#F6EFE4] border-2 border-[#C4A05A] font-semibold text-[#1F4A5C] shadow-xs'
                          : 'bg-[#F6EFE4]/40 border border-[#C4A05A]/20 text-[#26343B]/80'
                      }`}
                    >
                      <span className="text-sm">
                        {lang === 'pt' ? schedule.dayPt : schedule.dayEn}
                        {isCurrentDay && (
                          <span className="ml-2 text-[11px] uppercase tracking-wider text-[#8F7030] font-bold">
                            ({lang === 'pt' ? 'Hoje' : 'Today'})
                          </span>
                        )}
                      </span>
                      <span className="text-sm font-mono tracking-tight font-medium">
                        {schedule.time}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <p className="text-xs text-[#6B6256] italic">
              * {t('location.timezoneNote')} · {lang === 'pt' ? 'Atendimento mediante agendamento prévio.' : 'Service by advance appointment.'}
            </p>
          </div>

        </div>

        {/* Embedded Google Maps with Organic Gold Frame */}
        <div className="rounded-[32px] overflow-hidden border-2 border-[#C4A05A]/60 shadow-lg bg-[#EFE5D3] p-1 mb-10">
          <iframe
            src={siteData.mapsEmbedUrl}
            title="Mapa do AMARII Beauty Spa em Wilmington, MA"
            className="w-full h-[380px] sm:h-[430px] rounded-[28px] border-0"
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <a
            href={getWhatsAppUrl(
              lang === 'pt'
                ? 'Olá, Andreza! 💛 Gostaria de agendar meu horário no AMARII Beauty Spa em Wilmington.'
                : 'Hello Andreza! 💛 I would love to book my appointment at AMARII Beauty Spa in Wilmington.'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#C4A05A] hover:bg-[#8F7030] text-[#F6EFE4] text-sm sm:text-base font-semibold tracking-wider uppercase transition-all duration-200 shadow-md border border-[#E6D29B]/60"
          >
            <MessageCircle className="w-5 h-5" />
            <span>{t('location.cta')}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
