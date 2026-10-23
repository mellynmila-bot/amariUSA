import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { Services } from './components/Services';
import { Gallery } from './components/Gallery';
import { About } from './components/About';
import { Feedbacks } from './components/Feedbacks';
import { Studio } from './components/Studio';
import { Location } from './components/Location';
import { Booking } from './components/Booking';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { WaveDivider } from './components/WaveDivider';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { LegalModals } from './components/LegalModals';

export const AppContent: React.FC = () => {
  const [legalModalType, setLegalModalType] = useState<'privacy' | 'terms' | null>(null);

  return (
    <div className="min-h-screen bg-[#F6EFE4] text-[#26343B] font-sans flex flex-col selection:bg-[#C4A05A]/25 selection:text-[#1F4A5C]">
      {/* Fixed Navigation */}
      <Navbar />

      {/* Main Content Landmark for Accessibility */}
      <main id="main-content" tabIndex={-1} className="focus:outline-none flex-grow">
        
        {/* 1. Hero (Bege Claro #F6EFE4) */}
        <Hero />

        {/* Word Marquee ribbon between Hero and Services */}
        <Marquee />

        {/* Transition into 2. Serviços (Azul Profundo #1F4A5C) */}
        <WaveDivider fillColor="#1F4A5C" />
        <Services />

        {/* Transition into 3. Galeria (Areia #EFE5D3) */}
        <WaveDivider fillColor="#EFE5D3" />
        <Gallery />

        {/* Transition into 4. Sobre + Instagram (Azul Névoa #DDEBF0) */}
        <WaveDivider fillColor="#DDEBF0" />
        <About />

        {/* Transition into 5. Feedbacks (Bege Claro #F6EFE4) */}
        <WaveDivider fillColor="#F6EFE4" />
        <Feedbacks />

        {/* Transition into 6. Espaço (Azul Profundo #1F4A5C) */}
        <WaveDivider fillColor="#1F4A5C" />
        <Studio />

        {/* Transition into 7. Localização (Bege Claro #F6EFE4) */}
        <WaveDivider fillColor="#F6EFE4" />
        <Location />

        {/* Transition into 8. Agendamento + Educação (Azul Profundo #1F4A5C) */}
        <WaveDivider fillColor="#1F4A5C" />
        <Booking />

        {/* Transition into 9. FAQ (Bege Claro #F6EFE4) */}
        <WaveDivider fillColor="#F6EFE4" />
        <FAQ />

        {/* 10. Rodapé (Bege Claro #F6EFE4, continuous from FAQ) */}
        <Footer
          onOpenPrivacy={() => setLegalModalType('privacy')}
          onOpenTerms={() => setLegalModalType('terms')}
        />

      </main>

      {/* Floating Action Button */}
      <FloatingWhatsApp />

      {/* Accessible Legal Modals */}
      <LegalModals
        type={legalModalType}
        onClose={() => setLegalModalType(null)}
      />
    </div>
  );
};

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
