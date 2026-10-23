import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, Globe } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export const Navbar: React.FC = () => {
  const { lang, setLang, t, getWhatsAppUrl } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLang(lang === 'pt' ? 'en' : 'pt');
  };

  const navLinks = [
    { href: '#servicos', label: t('nav.services') },
    { href: '#galeria', label: t('nav.gallery') },
    { href: '#sobre', label: t('nav.about') },
    { href: '#avaliacoes', label: t('nav.feedbacks') },
    { href: '#espaco', label: t('nav.studio') },
    { href: '#localizacao', label: t('nav.location') },
    { href: '#faq', label: t('nav.faq') },
  ];

  return (
    <>
      {/* Skip to Content for ADA / WCAG */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#1F4A5C] focus:text-[#F6EFE4] focus:rounded-full focus:shadow-lg focus:border focus:border-[#C4A05A]"
      >
        {t('nav.skipContent')}
      </a>

      <header
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? 'bg-[#F6EFE4]/95 backdrop-blur-md shadow-sm border-b border-[#C4A05A]/30 py-3'
            : 'bg-[#F6EFE4]/60 backdrop-blur-sm py-4 sm:py-5 border-b border-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {/* Brand Logo Lockup */}
            <a
              href="#"
              className="flex flex-col items-center group text-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C4A05A] rounded-lg px-2 py-1"
            >
              <span className="font-display tracking-[0.25em] text-xl sm:text-2xl font-semibold text-[#1F4A5C] transition-colors group-hover:text-[#C4A05A]">
                AMARII
              </span>
              <div className="flex items-center gap-1.5 w-full justify-center">
                <span className="h-[1px] w-3 bg-[#C4A05A]/60" />
                <span className="text-[10px] sm:text-[11px] font-sans uppercase tracking-[0.2em] text-[#8F7030] font-medium">
                  Beauty Spa
                </span>
                <span className="h-[1px] w-3 bg-[#C4A05A]/60" />
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden xl:flex items-center gap-6" aria-label="Navegação principal">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-xs lg:text-sm font-sans tracking-wide text-[#26343B] hover:text-[#C4A05A] transition-colors py-1 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C4A05A] hover:after:w-full after:transition-all after:duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C4A05A] rounded"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Right Controls: Language Selector & Booking CTA */}
            <div className="flex items-center gap-1.5 sm:gap-3 shrink-0">
              {/* Language Switcher Pill */}
              <button
                onClick={toggleLanguage}
                aria-label={`Trocar idioma para ${lang === 'pt' ? 'Inglês' : 'Português'}`}
                className="flex items-center gap-1 px-2.5 sm:px-3 py-1.5 rounded-full border border-[#C4A05A]/70 bg-[#F6EFE4] hover:bg-[#EFE5D3] text-[#1F4A5C] text-xs font-semibold tracking-wider transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8F7030]"
              >
                <Globe className="w-3.5 h-3.5 text-[#C4A05A] shrink-0" />
                <span className="hidden md:inline font-sans">{t('nav.langSwitch')}</span>
                <span className="md:hidden font-mono uppercase text-[11px]">
                  {lang === 'pt' ? 'EN' : 'PT'}
                </span>
              </button>

              {/* Booking CTA Button */}
              <a
                href={getWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="relative inline-flex items-center gap-1.5 px-3 sm:px-5 py-1.5 sm:py-2 rounded-full bg-[#C4A05A] hover:bg-[#8F7030] text-[#F6EFE4] text-xs sm:text-sm font-semibold tracking-wide uppercase transition-all duration-200 shadow-sm hover:shadow-md border border-[#E6D29B]/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F4A5C]"
              >
                <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" />
                <span>{t('nav.book')}</span>
              </a>

              {/* Mobile Hamburger Button */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? 'Fechar menu de navegação' : 'Abrir menu de navegação'}
                aria-expanded={mobileMenuOpen}
                className="xl:hidden p-2 rounded-full border border-[#C4A05A]/50 bg-[#F6EFE4] text-[#1F4A5C] hover:bg-[#EFE5D3] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C4A05A]"
              >
                {mobileMenuOpen ? <X className="w-4 h-4 sm:w-5 sm:h-5" /> : <Menu className="w-4 h-4 sm:w-5 sm:h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="xl:hidden bg-[#F6EFE4] border-b border-[#C4A05A]/40 shadow-xl px-6 py-6 transition-all duration-300 mt-2 rounded-b-[28px]">
            <nav className="flex flex-col space-y-3" aria-label="Navegação mobile">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-base font-sans font-medium text-[#26343B] hover:text-[#C4A05A] transition-colors py-2 border-b border-[#EFE5D3] last:border-none"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 flex flex-col gap-3">
                <button
                  onClick={() => {
                    toggleLanguage();
                    setMobileMenuOpen(false);
                  }}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-full border border-[#C4A05A] bg-[#EFE5D3] text-[#1F4A5C] text-sm font-semibold"
                >
                  <Globe className="w-4 h-4 text-[#8F7030]" />
                  <span>{t('nav.langSwitch')}</span>
                </button>
                <a
                  href={getWhatsAppUrl()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 w-full py-3 rounded-full bg-[#1F4A5C] text-[#F6EFE4] text-sm font-semibold tracking-wider uppercase border border-[#C4A05A]"
                >
                  <MessageCircle className="w-4 h-4 text-[#E6D29B]" />
                  <span>{t('nav.book')} (WhatsApp)</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};
