import React, { useState } from 'react';
import { Clock, MessageCircle, Sparkles, Gift, CheckCircle2, Award } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { siteData, ServiceItem } from '../data/siteData';

type CategoryFilter = 'all' | 'faciais' | 'corporais' | 'laser' | 'consulta';

export const Services: React.FC = () => {
  const { lang, t, getWhatsAppUrl } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>('all');

  const filteredServices = activeCategory === 'all'
    ? siteData.services
    : siteData.services.filter((s) => s.category === activeCategory);

  const getServiceBookingUrl = (service: ServiceItem) => {
    const serviceName = lang === 'pt' ? service.namePt : service.nameEn;
    const msg = lang === 'pt'
      ? `Olá, Andreza! 💛 Gostaria de agendar o tratamento: ${serviceName} (${service.price}). Poderia me informar os horários disponíveis?`
      : `Hello Andreza! 💛 I would like to book the treatment: ${serviceName} (${service.price}). Could you please share available times?`;
    return getWhatsAppUrl(msg);
  };

  const categories = [
    { id: 'all', label: t('services.tabAll') },
    { id: 'faciais', label: t('services.tabFacial') },
    { id: 'corporais', label: t('services.tabBody') },
    { id: 'laser', label: t('services.tabLaser') },
    { id: 'consulta', label: t('services.tabConsult') },
  ];

  return (
    <section id="servicos" className="relative py-20 sm:py-28 bg-[#1F4A5C] text-[#F6EFE4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <span className="text-xs sm:text-sm font-sans tracking-[0.25em] uppercase font-semibold text-[#E6D29B] bg-[#F6EFE4]/10 px-4 py-1.5 rounded-full border border-[#C4A05A]/40 inline-block mb-4">
            {lang === 'pt' ? 'Menu de Tratamentos' : 'Treatment Menu'}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal text-[#F6EFE4] mb-4 text-balance">
            {t('services.title')}
          </h2>
          <p className="text-base sm:text-lg text-[#DDEBF0] font-sans leading-relaxed">
            {t('services.subtitle')}
          </p>
        </div>

        {/* Special Promo Highlight Banner Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-14">
          {siteData.promos.map((promo) => (
            <div
              key={promo.id}
              className="relative p-6 sm:p-7 rounded-[28px] bg-gradient-to-br from-[#265366] to-[#1a3f4e] border-2 border-[#C4A05A]/50 shadow-xl overflow-hidden flex flex-col justify-between"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#C4A05A]/10 rounded-full blur-2xl pointer-events-none" />
              
              <div>
                <div className="flex items-center justify-between gap-3 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#C4A05A]/25 border border-[#E6D29B]/40 text-[#E6D29B] text-xs font-semibold uppercase tracking-wider">
                    {promo.id === 'aqua-star' ? <Sparkles className="w-3.5 h-3.5" /> : <Gift className="w-3.5 h-3.5" />}
                    {lang === 'pt' ? promo.badgePt : promo.badgeEn}
                  </span>
                  <div className="text-right">
                    <span className="text-2xl sm:text-3xl font-display font-semibold text-[#E6D29B]">
                      {promo.price}
                    </span>
                    {promo.originalPrice && (
                      <span className="text-xs text-[#DDEBF0]/60 line-through ml-2">
                        {promo.originalPrice}
                      </span>
                    )}
                  </div>
                </div>

                <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#F6EFE4] mb-2">
                  {lang === 'pt' ? promo.titlePt : promo.titleEn}
                </h3>
                <p className="text-sm text-[#DDEBF0] leading-relaxed mb-6 font-sans">
                  {lang === 'pt' ? promo.descPt : promo.descEn}
                </p>
              </div>

              <a
                href={getWhatsAppUrl(
                  lang === 'pt'
                    ? `Olá, Andreza! 💛 Vi a promoção "${promo.titlePt}" no site e gostaria de garantir minha vaga.`
                    : `Hello Andreza! 💛 I saw the special promo "${promo.titleEn}" on your website and would love to reserve my spot.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3 px-5 rounded-full bg-[#C4A05A] hover:bg-[#8F7030] text-[#1F4A5C] hover:text-[#F6EFE4] font-semibold text-xs sm:text-sm tracking-wider uppercase transition-colors shadow-md border border-[#E6D29B]/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6D29B]"
              >
                <MessageCircle className="w-4 h-4" />
                <span>{lang === 'pt' ? promo.actionPt : promo.actionEn}</span>
              </a>
            </div>
          ))}
        </div>

        {/* Category Tabs / Filter Chips */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as CategoryFilter)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200 border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6D29B] ${
                  isActive
                    ? 'bg-[#C4A05A] text-[#1F4A5C] border-[#E6D29B] shadow-md'
                    : 'bg-[#F6EFE4]/10 text-[#F6EFE4] border-[#C4A05A]/30 hover:bg-[#F6EFE4]/20 hover:text-[#E6D29B]'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Laser Contextual Opening (if laser or all is selected) */}
        {(activeCategory === 'laser' || activeCategory === 'all') && (
          <div className="mb-8 p-5 sm:p-6 rounded-2xl bg-[#255265]/80 border border-[#C4A05A]/40 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-start gap-3">
              <Sparkles className="w-5 h-5 text-[#E6D29B] shrink-0 mt-0.5" />
              <p className="text-sm text-[#DDEBF0] leading-relaxed">
                {t('services.laserIntro')}
              </p>
            </div>
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#C4A05A]/20 border border-[#C4A05A]/50 text-[#E6D29B] text-xs font-semibold whitespace-nowrap shrink-0">
              <Award className="w-3.5 h-3.5 text-[#E6D29B]" />
              <span>{t('services.laserChip')}</span>
            </div>
          </div>
        )}

        {/* Services Grid (2 cols desktop, 1 col mobile) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
          {filteredServices.map((service) => {
            const isFeatured = service.featured;
            return (
              <div
                key={service.id}
                className={`group relative p-5 sm:p-6 rounded-[28px] bg-[#234F61]/90 hover:bg-[#27586c] border transition-all duration-300 flex flex-col justify-between ${
                  isFeatured
                    ? 'border-[#C4A05A] shadow-lg ring-1 ring-[#C4A05A]/40'
                    : 'border-[#C4A05A]/30 hover:border-[#C4A05A]/60 shadow-sm'
                }`}
              >
                <div className="flex flex-col sm:flex-row gap-4 items-center sm:items-start mb-4 text-center sm:text-left">
                  
                  {/* Organic Blob Thumbnail - Centered on Mobile */}
                  <div className="w-24 h-24 sm:w-24 sm:h-24 shrink-0 rounded-[58%_42%_55%_45%_/_50%_58%_42%_50%] overflow-hidden border-2 border-[#C4A05A]/50 shadow-md mx-auto sm:mx-0">
                    <img
                      src={service.image}
                      alt={lang === 'pt' ? service.namePt : service.nameEn}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                  </div>

                  {/* Info */}
                  <div className="flex-1 w-full">
                    <div className="flex items-center sm:items-start justify-center sm:justify-between gap-2 mb-1.5">
                      <h3 className="font-display text-lg sm:text-xl font-semibold text-[#F6EFE4] group-hover:text-[#E6D29B] transition-colors">
                        {lang === 'pt' ? service.namePt : service.nameEn}
                      </h3>
                    </div>

                    <p className="text-xs sm:text-sm text-[#DDEBF0] leading-relaxed mb-3 font-sans">
                      {lang === 'pt' ? service.descriptionPt : service.descriptionEn}
                    </p>

                    <div className="flex items-center justify-center sm:justify-start gap-4 text-xs text-[#A9CBD6]">
                      <div className="flex items-center gap-1">
                        <Clock className="w-3.5 h-3.5 text-[#C4A05A]" />
                        <span>{service.duration}</span>
                      </div>
                      <span aria-hidden="true">·</span>
                      <span className="capitalize">{service.category}</span>
                    </div>
                  </div>
                </div>

                {/* Card Bottom: Price and WhatsApp Booking Button */}
                <div className="pt-3 border-t border-[#C4A05A]/25 flex items-center justify-between gap-4 mt-auto">
                  <div className="flex items-baseline gap-2">
                    <span className="text-xl sm:text-2xl font-display font-semibold text-[#E6D29B]">
                      {service.price}
                    </span>
                    {service.originalPrice && (
                      <span className="text-xs text-[#DDEBF0]/50 line-through">
                        {service.originalPrice}
                      </span>
                    )}
                  </div>

                  <a
                    href={getServiceBookingUrl(service)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#C4A05A] hover:bg-[#8F7030] text-[#1F4A5C] hover:text-[#F6EFE4] text-xs font-semibold tracking-wide uppercase transition-all duration-200 border border-[#E6D29B]/50 shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E6D29B]"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>{t('services.bookBtn')}</span>
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section General Disclaimer & Bottom Button */}
        <div className="mt-12 text-center max-w-2xl mx-auto">
          <p className="text-xs text-[#A9CBD6] italic mb-6">
            * {t('services.disclaimer')}
          </p>
          <a
            href={getWhatsAppUrl(
              lang === 'pt'
                ? 'Olá, Andreza! 💛 Vi os serviços no site e gostaria de agendar um horário com você.'
                : 'Hello Andreza! 💛 I saw your services on the website and would like to schedule an appointment with you.'
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#C4A05A] hover:bg-[#8F7030] text-[#1F4A5C] hover:text-[#F6EFE4] text-sm sm:text-base font-semibold tracking-wider uppercase transition-all duration-200 shadow-lg border border-[#E6D29B]/70"
          >
            <MessageCircle className="w-5 h-5" />
            <span>{t('services.sectionBook')}</span>
          </a>
        </div>

      </div>
    </section>
  );
};
