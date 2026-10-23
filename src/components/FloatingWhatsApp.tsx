import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const FloatingWhatsApp: React.FC = () => {
  const { lang, t, getWhatsAppUrl } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <aside aria-label="Atendimento rápido por WhatsApp" className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40">
      <a
        href={getWhatsAppUrl(
          lang === 'pt'
            ? 'Olá, Andreza! 💛 Vi seu site institucional e gostaria de agendar um horário no AMARII Beauty Spa.'
            : 'Hello Andreza! 💛 I saw your website and would like to schedule an appointment at AMARII Beauty Spa.'
        )}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={t('floating.aria')}
        title={t('floating.aria')}
        className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#C4A05A] hover:bg-[#8F7030] text-[#F6EFE4] shadow-2xl border-2 border-[#E6D29B] transition-all duration-300 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F4A5C]"
      >
        {/* Subtle breathing glow ring */}
        <span
          className="absolute -inset-1.5 rounded-full bg-[#C4A05A]/40 blur-xs -z-10 group-hover:bg-[#8F7030]/50 transition-all animate-pulse"
          aria-hidden="true"
        />

        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 text-[#F6EFE4] shrink-0" />
      </a>
    </aside>
  );
};
