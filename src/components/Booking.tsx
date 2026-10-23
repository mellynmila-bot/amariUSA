import React, { useState, useMemo } from 'react';
import {
  Calendar,
  Clock,
  Sparkles,
  Copy,
  Check,
  Send,
  AlertTriangle,
  User,
  Heart,
  HelpCircle,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';
import { siteData } from '../data/siteData';

export const Booking: React.FC = () => {
  const { lang, t } = useLanguage();

  const [formData, setFormData] = useState({
    name: '',
    serviceId: 'consulta-avaliacao',
    customService: '',
    expectation: '',
    date: '',
    timeWindow: '9:00 AM - 12:00 PM',
    firstTime: 'yes',
    notes: '',
  });

  const [copied, setCopied] = useState(false);

  // Time slot options based on working hours
  const timeWindows = [
    'Manhã (9:00 AM – 12:00 PM)',
    'Início da tarde (12:00 PM – 3:30 PM)',
    'Fim de tarde (3:30 PM – 7:00 PM)',
    'Sábado manhã (9:00 AM – 1:00 PM)',
    'Sábado tarde (1:00 PM – 5:00 PM)',
    'Domingo (8:00 AM – 12:00 PM)',
  ];

  const timeWindowsEn = [
    'Morning (9:00 AM – 12:00 PM)',
    'Early afternoon (12:00 PM – 3:30 PM)',
    'Late afternoon (3:30 PM – 7:00 PM)',
    'Saturday morning (9:00 AM – 1:00 PM)',
    'Saturday afternoon (1:00 PM – 5:00 PM)',
    'Sunday (8:00 AM – 12:00 PM)',
  ];

  // Resolve service name
  const selectedServiceName = useMemo(() => {
    if (formData.serviceId === 'custom-consult') {
      return lang === 'pt'
        ? 'Consulta & Avaliação Geral (Ainda não sei)'
        : 'General Consultation (Not sure yet)';
    }
    const found = siteData.services.find((s) => s.id === formData.serviceId);
    if (!found) return lang === 'pt' ? 'Consulta Gratuita' : 'Free Consultation';
    return lang === 'pt'
      ? `${found.namePt} (${found.price})`
      : `${found.nameEn} (${found.price})`;
  }, [formData.serviceId, lang]);

  // Generate formatted WhatsApp message
  const generatedMessage = useMemo(() => {
    const name = formData.name.trim() || (lang === 'pt' ? '[Seu Nome]' : '[Your Name]');
    const expectation = formData.expectation.trim() || (lang === 'pt' ? 'Gostaria de uma recomendação' : 'Looking for recommendations');
    const date = formData.date || (lang === 'pt' ? 'A combinar' : 'To coordinate');
    const time = formData.timeWindow;
    const isFirstTime = formData.firstTime === 'yes'
      ? (lang === 'pt' ? 'Sim, primeira vez' : 'Yes, first time')
      : (lang === 'pt' ? 'Não, já sou cliente' : 'Returning client');
    const notes = formData.notes.trim() || (lang === 'pt' ? 'Nenhuma observação especial' : 'No specific notes');

    if (lang === 'pt') {
      return `Olá, Amarii Beauty Spa! 💛 Gostaria de agendar um horário.
Nome: ${name}
Serviço: ${selectedServiceName}
Expectativa: ${expectation}
Melhor dia e horário: ${date} (${time})
Primeira vez: ${isFirstTime}
Observações: ${notes}`;
    } else {
      return `Hello, Amarii Beauty Spa! 💛 I would like to schedule an appointment.
Name: ${name}
Service: ${selectedServiceName}
Expectation: ${expectation}
Preferred day & time: ${date} (${time})
First time: ${isFirstTime}
Health notes / Disclosures: ${notes}`;
    }
  }, [formData, selectedServiceName, lang]);

  const handleCopyMessage = async () => {
    try {
      await navigator.clipboard.writeText(generatedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // fallback
    }
  };

  const handleSendWhatsApp = () => {
    const encoded = encodeURIComponent(generatedMessage);
    const url = `https://wa.me/${siteData.whatsappRaw}?text=${encoded}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="agendamento" className="relative py-20 sm:py-28 bg-[#1F4A5C] text-[#F6EFE4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <span className="text-xs sm:text-sm font-sans tracking-[0.25em] uppercase font-semibold text-[#E6D29B] bg-[#F6EFE4]/10 px-4 py-1.5 rounded-full border border-[#C4A05A]/40 inline-block mb-4">
            {lang === 'pt' ? 'Passo a Passo Simples' : 'Simple Step-by-Step'}
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal text-[#F6EFE4] mb-4 text-balance">
            {t('booking.title')}
          </h2>
          <p className="text-base sm:text-lg text-[#DDEBF0] font-sans leading-relaxed">
            {t('booking.subtitle')}
          </p>
        </div>

        {/* 2 Columns: Steps on Left, Mini Form on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left Column: 4 Educational Steps & Cancellation Policy */}
          <div className="lg:col-span-5 flex flex-col space-y-6">
            
            {/* 4 Steps Container */}
            <div className="space-y-4">
              {/* Step 1 */}
              <div className="p-5 rounded-2xl bg-[#265366]/70 border border-[#C4A05A]/40 flex items-start gap-4">
                <span className="font-display text-2xl font-bold text-[#E6D29B] leading-none shrink-0 mt-0.5">
                  {t('booking.step1Num')}
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-[#F6EFE4] mb-1">
                    {t('booking.step1Title')}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#DDEBF0] leading-relaxed">
                    {t('booking.step1Desc')}
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="p-5 rounded-2xl bg-[#265366]/70 border border-[#C4A05A]/40 flex items-start gap-4">
                <span className="font-display text-2xl font-bold text-[#E6D29B] leading-none shrink-0 mt-0.5">
                  {t('booking.step2Num')}
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-[#F6EFE4] mb-1">
                    {t('booking.step2Title')}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#DDEBF0] leading-relaxed">
                    {t('booking.step2Desc')}
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="p-5 rounded-2xl bg-[#265366]/70 border border-[#C4A05A]/40 flex items-start gap-4">
                <span className="font-display text-2xl font-bold text-[#E6D29B] leading-none shrink-0 mt-0.5">
                  {t('booking.step3Num')}
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-[#F6EFE4] mb-1">
                    {t('booking.step3Title')}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#DDEBF0] leading-relaxed">
                    {t('booking.step3Desc')}
                  </p>
                </div>
              </div>

              {/* Step 4 */}
              <div className="p-5 rounded-2xl bg-[#265366]/70 border border-[#C4A05A]/40 flex items-start gap-4">
                <span className="font-display text-2xl font-bold text-[#E6D29B] leading-none shrink-0 mt-0.5">
                  {t('booking.step4Num')}
                </span>
                <div>
                  <h3 className="font-display text-base font-semibold text-[#F6EFE4] mb-1">
                    {t('booking.step4Title')}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#DDEBF0] leading-relaxed">
                    {t('booking.step4Desc')}
                  </p>
                </div>
              </div>
            </div>

            {/* Cancellation Policy Card (20%) */}
            <div className="p-5 rounded-2xl bg-[#265366]/90 border border-[#C4A05A]/50 flex items-start gap-3.5">
              <Calendar className="w-5 h-5 text-[#E6D29B] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-display text-sm font-semibold text-[#E6D29B] mb-1">
                  {t('booking.cancellationTitle')}
                </h4>
                <p className="text-xs text-[#DDEBF0] leading-relaxed">
                  {t('booking.cancellationText')}
                </p>
              </div>
            </div>

            {/* Laser Prep Tip Card */}
            <div className="p-4 rounded-2xl bg-[#1a3d4c] border border-[#C4A05A]/30 text-xs text-[#A9CBD6] leading-relaxed flex items-start gap-3">
              <Sparkles className="w-4 h-4 text-[#C4A05A] shrink-0 mt-0.5" />
              <div>
                <strong className="text-[#E6D29B] block mb-0.5">{t('booking.laserPrepHdr')}</strong>
                {t('booking.laserPrepDesc')}
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Booking Mini-Form */}
          <div className="lg:col-span-7 bg-[#F6EFE4] text-[#26343B] p-5 sm:p-8 rounded-[28px] sm:rounded-[32px] border-2 border-[#C4A05A] shadow-2xl">
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-[#C4A05A]/30">
              <h3 className="font-display text-xl sm:text-2xl font-semibold text-[#1F4A5C]">
                {t('form.title')}
              </h3>
              <span className="text-xs text-[#8F7030] font-sans font-semibold uppercase tracking-wider">
                Wilmington, MA
              </span>
            </div>

            <div className="space-y-4">
              
              {/* Field 1: Name */}
              <div>
                <label className="block text-xs font-semibold text-[#1F4A5C] uppercase tracking-wider mb-1.5">
                  {t('form.nameLabel')} <span className="text-[#8F7030]">*</span>
                </label>
                <div className="relative">
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder={t('form.namePlaceholder')}
                    className="w-full px-4 py-3 rounded-2xl bg-[#EFE5D3]/60 border border-[#C4A05A]/50 text-sm text-[#26343B] placeholder-[#26343B]/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C4A05A] transition-all"
                  />
                  <User className="absolute right-3.5 top-3.5 w-4 h-4 text-[#8F7030]/60 pointer-events-none" />
                </div>
              </div>

              {/* Field 2: Service Selection */}
              <div>
                <label className="block text-xs font-semibold text-[#1F4A5C] uppercase tracking-wider mb-1.5">
                  {t('form.serviceLabel')} <span className="text-[#8F7030]">*</span>
                </label>
                <select
                  value={formData.serviceId}
                  onChange={(e) => setFormData({ ...formData, serviceId: e.target.value })}
                  className="w-full px-4 py-3 rounded-2xl bg-[#EFE5D3]/60 border border-[#C4A05A]/50 text-sm text-[#26343B] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C4A05A] transition-all"
                >
                  <option value="custom-consult">{t('form.serviceConsult')}</option>
                  <optgroup label={lang === 'pt' ? 'Faciais e Estéticos' : 'Facials & Aesthetic'}>
                    {siteData.services
                      .filter((s) => s.category === 'faciais')
                      .map((s) => (
                        <option key={s.id} value={s.id}>
                          {lang === 'pt' ? s.namePt : s.nameEn} — {s.price}
                        </option>
                      ))}
                  </optgroup>
                  <optgroup label={lang === 'pt' ? 'Corporais e Massagens' : 'Body & Massages'}>
                    {siteData.services
                      .filter((s) => s.category === 'corporais')
                      .map((s) => (
                        <option key={s.id} value={s.id}>
                          {lang === 'pt' ? s.namePt : s.nameEn} — {s.price}
                        </option>
                      ))}
                  </optgroup>
                  <optgroup label={lang === 'pt' ? 'Depilação a Laser' : 'Laser Hair Removal'}>
                    {siteData.services
                      .filter((s) => s.category === 'laser')
                      .map((s) => (
                        <option key={s.id} value={s.id}>
                          {lang === 'pt' ? s.namePt : s.nameEn} — {s.price}
                        </option>
                      ))}
                  </optgroup>
                </select>
              </div>

              {/* Field 3: Expectation */}
              <div>
                <label className="block text-xs font-semibold text-[#1F4A5C] uppercase tracking-wider mb-1.5">
                  {t('form.expectationLabel')}
                </label>
                <input
                  type="text"
                  value={formData.expectation}
                  onChange={(e) => setFormData({ ...formData, expectation: e.target.value })}
                  placeholder={t('form.expectationPlaceholder')}
                  className="w-full px-4 py-3 rounded-2xl bg-[#EFE5D3]/60 border border-[#C4A05A]/50 text-sm text-[#26343B] placeholder-[#26343B]/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C4A05A] transition-all"
                />
              </div>

              {/* Field 4 & 5: Preferred Date & Time Window */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-[#1F4A5C] uppercase tracking-wider mb-1.5">
                    {t('form.dateLabel')}
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-[#EFE5D3]/60 border border-[#C4A05A]/50 text-sm text-[#26343B] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C4A05A] transition-all"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#1F4A5C] uppercase tracking-wider mb-1.5">
                    {t('form.timeLabel')}
                  </label>
                  <select
                    value={formData.timeWindow}
                    onChange={(e) => setFormData({ ...formData, timeWindow: e.target.value })}
                    className="w-full px-4 py-3 rounded-2xl bg-[#EFE5D3]/60 border border-[#C4A05A]/50 text-sm text-[#26343B] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C4A05A] transition-all"
                  >
                    {(lang === 'pt' ? timeWindows : timeWindowsEn).map((slot, i) => (
                      <option key={i} value={slot}>
                        {slot}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Field 6: First Time Radio */}
              <div>
                <label className="block text-xs font-semibold text-[#1F4A5C] uppercase tracking-wider mb-1.5">
                  {t('form.firstTimeLabel')}
                </label>
                <div className="flex items-center gap-3">
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, firstTime: 'yes' })}
                    className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                      formData.firstTime === 'yes'
                        ? 'bg-[#1F4A5C] text-[#F6EFE4] border-[#1F4A5C] shadow-xs'
                        : 'bg-[#EFE5D3]/50 text-[#26343B] border-[#C4A05A]/40 hover:bg-[#EFE5D3]'
                    }`}
                  >
                    {t('form.firstTimeYes')}
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData({ ...formData, firstTime: 'no' })}
                    className={`flex-1 py-2.5 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all border ${
                      formData.firstTime === 'no'
                        ? 'bg-[#1F4A5C] text-[#F6EFE4] border-[#1F4A5C] shadow-xs'
                        : 'bg-[#EFE5D3]/50 text-[#26343B] border-[#C4A05A]/40 hover:bg-[#EFE5D3]'
                    }`}
                  >
                    {t('form.firstTimeNo')}
                  </button>
                </div>
              </div>

              {/* Field 7: Health & Disclosures (Optional) */}
              <div>
                <label className="block text-xs font-semibold text-[#1F4A5C] uppercase tracking-wider mb-1.5">
                  {t('form.notesLabel')}
                </label>
                <textarea
                  rows={2}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  placeholder={t('form.notesPlaceholder')}
                  className="w-full px-4 py-2.5 rounded-2xl bg-[#EFE5D3]/60 border border-[#C4A05A]/50 text-sm text-[#26343B] placeholder-[#26343B]/40 focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#C4A05A] transition-all resize-none"
                />
              </div>

              {/* Live Message Preview Box */}
              <div className="pt-3">
                <div className="flex items-center justify-between mb-1.5">
                  <span className="text-xs font-bold text-[#8F7030] uppercase tracking-wider">
                    {t('form.previewTitle')}
                  </span>
                  <button
                    type="button"
                    onClick={handleCopyMessage}
                    className="inline-flex items-center gap-1 text-xs text-[#1F4A5C] hover:text-[#C4A05A] font-semibold transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? t('form.btnCopied') : t('form.btnCopy')}</span>
                  </button>
                </div>

                <div className="p-3.5 rounded-2xl bg-[#EFE5D3]/80 border border-[#C4A05A]/50 font-mono text-xs text-[#26343B] whitespace-pre-line leading-relaxed select-all break-words overflow-hidden">
                  {generatedMessage}
                </div>
              </div>

              {/* Action Buttons: Copy Message & Send on WhatsApp */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  onClick={handleCopyMessage}
                  className="flex-1 py-3 px-5 rounded-full bg-[#EFE5D3] hover:bg-[#E6D29B]/60 text-[#1F4A5C] text-xs font-semibold uppercase tracking-wider border border-[#C4A05A] transition-colors flex items-center justify-center gap-2"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-[#8F7030]" />}
                  <span>{copied ? t('form.btnCopied') : t('form.btnCopy')}</span>
                </button>

                <button
                  type="button"
                  onClick={handleSendWhatsApp}
                  className="flex-1 py-3 px-6 rounded-full bg-[#C4A05A] hover:bg-[#8F7030] text-[#F6EFE4] text-xs sm:text-sm font-semibold uppercase tracking-wider shadow-md hover:shadow-lg transition-all border border-[#E6D29B]/60 flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>{t('form.btnSend')}</span>
                </button>
              </div>

              <p className="text-[11px] text-[#6B6256] text-center pt-1 italic">
                {t('form.directNote')}
              </p>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
