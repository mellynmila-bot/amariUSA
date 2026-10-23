import React, { createContext, useContext, useState, useEffect } from 'react';
import { siteData } from '../data/siteData';

export type Language = 'pt' | 'en';

interface LanguageContextType {
  lang: Language;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
  getWhatsAppUrl: (message?: string) => string;
}

export const translations = {
  pt: {
    // Navigation
    'nav.services': 'Serviços',
    'nav.gallery': 'Galeria',
    'nav.about': 'Sobre',
    'nav.feedbacks': 'Avaliações',
    'nav.studio': 'Espaço',
    'nav.location': 'Localização',
    'nav.faq': 'FAQ',
    'nav.book': 'Agendar',
    'nav.langSwitch': 'Read in English',
    'nav.skipContent': 'Pular para o conteúdo principal',

    // Hero
    'hero.eyebrow': 'LASER • FACIAL • CORPORAL • WILMINGTON, MA 🇺🇸',
    'hero.title': 'Sua pele merece um recomeço.',
    'hero.subtitle': 'Laser, facial e corporal em Wilmington, MA, com tecnologia, ciência e o acolhimento de quem cuida com propósito.',
    'hero.ctaBook': 'Agendar meu horário',
    'hero.ctaServices': 'Ver serviços',
    'hero.ftcNote': 'Resultados desde as primeiras sessões, que variam de pessoa para pessoa.',
    'hero.badgeLocation': 'Wilmington, MA',
    'hero.badgeLocationSub': '230 Lowell St, 2º andar',
    'hero.badgeLicense': 'Profissional Licenciada',
    'hero.badgeLicenseSub': 'Esteticista e Electrologista',
    'hero.badgeConsult': 'Consulta Gratuita',
    'hero.badgeConsultSub': 'Avaliação personalizada de 30 min',

    // Marquee
    'marquee.text': 'DEPILAÇÃO A LASER ✦ FACIAL ✦ CORPORAL ✦ SKIN CARE ✦ AQUA STAR ✦ BEM-ESTAR ✦ WILMINGTON, MA ✦',
    'marquee.pause': 'Pausar animação',
    'marquee.play': 'Continuar animação',

    // Services
    'services.title': 'Cuidados que renovam a pele e o corpo',
    'services.subtitle': 'Do laser ao facial, escolha o tratamento ideal e conte com uma profissional que entende de ciência e de cuidado.',
    'services.tabAll': 'Todos os Cuidados',
    'services.tabFacial': 'Faciais e Estéticos',
    'services.tabBody': 'Corporais e Massagens',
    'services.tabLaser': 'Depilação a Laser',
    'services.tabConsult': 'Consulta',
    'services.laserIntro': 'Depilação a laser segura e eficaz, com redução gradual dos pelos e resultados desde as primeiras sessões, que variam de pessoa para pessoa.',
    'services.laserChip': 'Profissional licenciada',
    'services.bookBtn': 'Agendar',
    'services.sectionBook': 'Agendar meu horário',
    'services.disclaimer': 'Todos os tratamentos são precedidos de avaliação. Os resultados variam de pessoa para pessoa.',
    'services.promoTag': 'Oferta por tempo limitado',

    // Gallery
    'gallery.title': 'Resultados que contam a sua própria história',
    'gallery.subtitle': 'Comparações de antes e depois de tratamentos reais no Amarii.',
    'gallery.disclaimer': 'Resultados individuais variam. Imagens publicadas com consentimento das clientes.',
    'gallery.cta': 'Quero resultados assim',

    // About
    'about.title': 'Conheça a Andreza Garcia',
    'about.subtitle': 'Mais que um nome, um propósito: ciência e beleza juntas para cuidar de você.',
    'about.quote': '“A estética, para mim, não é apenas uma área de atuação, é um propósito de vida.”',
    'about.p1': 'Amarii significa “dom divino”, “promessa de Deus”: um nome que traz fé, proteção e esperança. Ao escolher a Amarii, você escolhe uma experiência de renascimento, bem-estar e autoestima. Para a Andreza, os resultados vão além da técnica: são um dom que ela realiza com amor e gratidão.',
    'about.p2': 'Farmacêutica com mais de 10 anos de experiência e pós-graduada em farmácia estética no Brasil, a Andreza trabalhou 3 anos em farmácia de manipulação, onde aprofundou o conhecimento sobre substâncias e cosméticos. Hoje, como esteticista e electrologista licenciada nos Estados Unidos, é apta a trabalhar com Laser Hair Removal, uma das suas principais especialidades. Com olhar clínico, sabe interpretar rótulos, avaliar a qualidade dos produtos e oferecer orientações seguras para você cuidar da pele com confiança.',
    'about.badge1': '+10 anos de experiência',
    'about.badge2': 'Pós em Farmácia Estética',
    'about.badge3': 'Esteticista licenciada',
    'about.badge4': 'Electrologista licenciada',
    'about.badge5': 'Especialista em Laser Hair Removal',
    'about.cta': 'Agendar com a Andreza',
    'about.instaTitle': 'Acompanhe a rotina do Amarii',
    'about.instaSubtitle': 'Bastidores, dicas de cuidado e novidades, todos os dias no @amariibeautyspa.',
    'about.instaFollow': 'Seguir @amariibeautyspa',
    'about.instaBook': 'Agendar meu horário',
    'about.glanceTitle': 'Em resumo · At a glance',
    'about.glanceBody': 'O AMARII Beauty Spa é um spa de beleza em Wilmington, Massachusetts, especializado em depilação a laser, facial e tratamentos corporais, com atendimento acolhedor e fluente em português e inglês. Fundado por Andreza Garcia, farmacêutica esteta (10+ anos de experiência clínica no Brasil), esteticista e electrologista licenciada pelo estado de Massachusetts nos Estados Unidos. Atendimento com hora marcada para Wilmington, Burlington, Woburn, Reading, Tewksbury, Andover, Billerica, Lowell e North Reading.',

    // Feedbacks
    'feedbacks.title': 'Quem passa por aqui, volta mais leve',
    'feedbacks.subtitle': 'Palavras de clientes que escolheram o Amarii para se cuidar.',
    'feedbacks.ftcNote': 'Depoimentos de clientes reais sobre suas experiências de atendimento. Os resultados de procedimentos estéticos são individuais e variam de pessoa para pessoa.',
    'feedbacks.cta': 'Quero viver essa experiência',

    // Space / Studio
    'studio.title': 'Um espaço criado para você desacelerar e se renovar',
    'studio.subtitle': 'Segurança, tecnologia e aconchego em um ambiente reservado para o seu bem-estar.',
    'studio.quote': '“Aqui, cada atendimento é um recomeço: um momento para respirar, se cuidar e se sentir bem na sua própria pele.”',
    'studio.howToGetTitle': 'Veja como chegar ao Amarii',
    'studio.cta': 'Agendar minha visita',
    'studio.carouselPause': 'Pausar carrossel',
    'studio.carouselPlay': 'Iniciar carrossel',

    // Location
    'location.title': 'Encontre o seu cantinho de bem-estar',
    'location.subtitle': 'Estamos em Wilmington, MA, prontos para receber você.',
    'location.directions': 'Como chegar (Google Maps)',
    'location.hoursTitle': 'Horário de Funcionamento',
    'location.timezoneNote': 'Fuso horário local (Wilmington / Boston)',
    'location.openNow': 'Aberto agora',
    'location.closedNow': 'Fechado no momento',
    'location.parking': 'Estacionamento gratuito no local.',
    'location.cta': 'Agendar meu horário',

    // Booking
    'booking.title': 'Vamos transformar a sua beleza juntas?',
    'booking.subtitle': 'Conte o que você deseja e agende o seu atendimento pelo WhatsApp em poucos passos.',
    'booking.step1Num': '01',
    'booking.step1Title': 'Escolha o serviço',
    'booking.step1Desc': 'Veja os tratamentos e escolha o que deseja, ou comece pela consulta gratuita.',
    'booking.step2Num': '02',
    'booking.step2Title': 'Conte a sua expectativa',
    'booking.step2Desc': 'Explique o resultado que você gostaria de alcançar e o que mais te incomoda.',
    'booking.step3Num': '03',
    'booking.step3Title': 'Informe sobre a sua saúde',
    'booking.step3Desc': 'Avise sobre gravidez, medicações, bronzeado recente e condições de pele. Para laser, venha com a área aparada 24h antes.',
    'booking.step4Num': '04',
    'booking.step4Title': 'Escolha dia e horário',
    'booking.step4Desc': 'Indique a melhor preferência dentro do nosso funcionamento e receba a confirmação rápida pelo WhatsApp.',
    'booking.cancellationTitle': 'Política de Cancelamento (20%)',
    'booking.cancellationText': 'Sabemos que imprevistos acontecem. Cancelamentos têm uma taxa de 20%. Se não puder comparecer, avise o quanto antes para reagendarmos com carinho.',
    'booking.laserPrepHdr': 'Dica importante para o Laser:',
    'booking.laserPrepDesc': 'Apare a área com lâmina 24h antes e evite exposição solar direta recente. Na avaliação, tiramos todas as suas dúvidas.',

    // Booking Form
    'form.title': 'Pré-agendamento WhatsApp',
    'form.nameLabel': 'Como gostaria de ser chamada(o)?',
    'form.namePlaceholder': 'Seu nome completo ou como prefere ser chamada(o)',
    'form.serviceLabel': 'Serviço de interesse',
    'form.serviceDefault': 'Selecione um tratamento...',
    'form.serviceConsult': 'Ainda não sei, quero começar pela Consulta Gratuita',
    'form.expectationLabel': 'Qual a sua expectativa principal?',
    'form.expectationPlaceholder': 'Ex: Quero me livrar dos pelos da axila, clarear a pele, relaxar...',
    'form.dateLabel': 'Melhor dia para você',
    'form.timeLabel': 'Melhor faixa de horário',
    'form.timeDefault': 'Selecione uma faixa de horário...',
    'form.firstTimeLabel': 'É a sua primeira vez conosco?',
    'form.firstTimeYes': 'Sim, primeira vez',
    'form.firstTimeNo': 'Já sou cliente',
    'form.notesLabel': 'Algo que devemos saber? (opcional)',
    'form.notesPlaceholder': 'Gravidez, medicações em uso, pele bronzeada recentemente, sensibilidades...',
    'form.previewTitle': 'Pré-visualização da mensagem',
    'form.btnCopy': 'Copiar mensagem',
    'form.btnCopied': 'Mensagem copiada!',
    'form.btnSend': 'Enviar pelo WhatsApp',
    'form.directNote': 'Você será redirecionada(o) com a mensagem formatada para o WhatsApp do AMARII Beauty Spa.',

    // FAQ
    'faq.title': 'Perguntas Frequentes',
    'faq.subtitle': 'Tudo o que você precisa saber antes de agendar.',
    'faq.cta': 'Agendar meu horário',

    // Floating WhatsApp
    'floating.text': 'Agendar',
    'floating.aria': 'Agendar horário pelo WhatsApp',
  },
  en: {
    // Navigation
    'nav.services': 'Services',
    'nav.gallery': 'Gallery',
    'nav.about': 'About',
    'nav.feedbacks': 'Reviews',
    'nav.studio': 'Studio',
    'nav.location': 'Location',
    'nav.faq': 'FAQ',
    'nav.book': 'Book Now',
    'nav.langSwitch': 'Ler em português',
    'nav.skipContent': 'Skip to main content',

    // Hero
    'hero.eyebrow': 'LASER • FACIAL • BODY • WILMINGTON, MA 🇺🇸',
    'hero.title': 'Your skin deserves a fresh start.',
    'hero.subtitle': 'Laser, facial and body treatments in Wilmington, MA, with technology, science and the warmth of someone who cares with purpose.',
    'hero.ctaBook': 'Book my appointment',
    'hero.ctaServices': 'Explore services',
    'hero.ftcNote': 'Results visible from early sessions. Individual results vary from person to person.',
    'hero.badgeLocation': 'Wilmington, MA',
    'hero.badgeLocationSub': '230 Lowell St, 2nd floor',
    'hero.badgeLicense': 'Licensed Professional',
    'hero.badgeLicenseSub': 'Esthetician & Electrologist',
    'hero.badgeConsult': 'Free Consultation',
    'hero.badgeConsultSub': 'Custom 30-min evaluation',

    // Marquee
    'marquee.text': 'LASER HAIR REMOVAL ✦ FACIAL ✦ BODY ✦ SKIN CARE ✦ AQUA STAR ✦ WELLNESS ✦ WILMINGTON, MA ✦',
    'marquee.pause': 'Pause animation',
    'marquee.play': 'Play animation',

    // Services
    'services.title': 'Care that renews skin and body',
    'services.subtitle': 'From laser to facials, choose your ideal treatment with a professional who understands science and care.',
    'services.tabAll': 'All Treatments',
    'services.tabFacial': 'Facials & Aesthetic',
    'services.tabBody': 'Body & Massages',
    'services.tabLaser': 'Laser Hair Removal',
    'services.tabConsult': 'Consultation',
    'services.laserIntro': 'Safe, gentle, and effective laser hair removal with progressive hair reduction and results from early sessions. Individual results vary.',
    'services.laserChip': 'Licensed practitioner',
    'services.bookBtn': 'Book',
    'services.sectionBook': 'Book my appointment',
    'services.disclaimer': 'All treatments are preceded by an assessment. Results vary from person to person.',
    'services.promoTag': 'Limited time offer',

    // Gallery
    'gallery.title': 'Results that tell their own story',
    'gallery.subtitle': 'Before-and-after comparisons from real treatments at Amarii.',
    'gallery.disclaimer': 'Individual results vary. Photos published with client consent.',
    'gallery.cta': 'I want results like these',

    // About
    'about.title': 'Meet Andreza Garcia',
    'about.subtitle': 'More than a name, a purpose: science and beauty together to care for you.',
    'about.quote': '“Aesthetics is not just an occupation for me; it is my life purpose.”',
    'about.p1': 'Amarii means “divine gift”, “promise of God”: a name carrying faith, protection, and hope. Choosing Amarii is choosing an experience of renewal, well-being, and confidence. For Andreza, the outcomes go far beyond technique: they represent a heartfelt calling practiced with love and gratitude.',
    'about.p2': 'A pharmacist with over 10 years of experience and post-graduate specialization in aesthetic pharmacy in Brazil, Andreza spent 3 years in compounding pharmacy deepening her expertise in active ingredients and cosmetics. Today, as a Massachusetts Licensed Esthetician and Licensed Electrologist, she is certified to perform Laser Hair Removal, one of her primary specialties. With a keen clinical perspective, she analyzes formulations, selects pristine products, and provides reliable care so you can nurture your skin with utmost peace of mind.',
    'about.badge1': '10+ Years of Experience',
    'about.badge2': 'Post-grad in Aesthetic Pharmacy',
    'about.badge3': 'Licensed Esthetician',
    'about.badge4': 'Licensed Electrologist',
    'about.badge5': 'Laser Hair Removal Specialist',
    'about.cta': 'Book with Andreza',
    'about.instaTitle': 'Follow life at Amarii',
    'about.instaSubtitle': 'Behind the scenes, skincare tips and updates every day on @amariibeautyspa.',
    'about.instaFollow': 'Follow @amariibeautyspa',
    'about.instaBook': 'Book my appointment',
    'about.glanceTitle': 'At a glance',
    'about.glanceBody': 'AMARII Beauty Spa is a boutique beauty and wellness spa in Wilmington, Massachusetts, offering Laser Hair Removal, advanced facials, and body treatments in Portuguese and English. Founded by Andreza Garcia, an aesthetic pharmacist (10+ years pharmaceutical background in Brazil) and Massachusetts Licensed Esthetician & Electrologist. Welcoming clients from Wilmington, Burlington, Woburn, Reading, Tewksbury, Andover, Billerica, Lowell, and North Reading.',

    // Feedbacks
    'feedbacks.title': 'Those who visit leave feeling lighter',
    'feedbacks.subtitle': 'Words from clients who chose Amarii to care for themselves.',
    'feedbacks.ftcNote': 'Reviews from real clients reflecting their personal experiences. Cosmetic procedure results are unique and vary from person to person.',
    'feedbacks.cta': 'I want to experience this',

    // Space / Studio
    'studio.title': 'A space created for you to slow down and renew',
    'studio.subtitle': 'Safety, technology and comfort in a private space for your well-being.',
    'studio.quote': '“Here, every session is a fresh beginning: a moment to breathe, nourish yourself, and feel beautiful in your own skin.”',
    'studio.howToGetTitle': 'See how to get to Amarii',
    'studio.cta': 'Book my studio visit',
    'studio.carouselPause': 'Pause carousel',
    'studio.carouselPlay': 'Play carousel',

    // Location
    'location.title': 'Find your little corner of well-being',
    'location.subtitle': 'We are located in Wilmington, MA, ready to welcome you.',
    'location.directions': 'Get Directions (Google Maps)',
    'location.hoursTitle': 'Operating Hours',
    'location.timezoneNote': 'Local Time (Wilmington / Boston)',
    'location.openNow': 'Open now',
    'location.closedNow': 'Closed at the moment',
    'location.parking': 'Free convenient parking on premises.',
    'location.cta': 'Book my appointment',

    // Booking
    'booking.title': 'Shall we transform your beauty together?',
    'booking.subtitle': 'Tell us what you want and book your appointment on WhatsApp in a few steps.',
    'booking.step1Num': '01',
    'booking.step1Title': 'Choose your treatment',
    'booking.step1Desc': 'Review our treatments and pick your favorite, or start with our free 30-min consultation.',
    'booking.step2Num': '02',
    'booking.step2Title': 'Share your expectations',
    'booking.step2Desc': 'Tell us about the results you desire and the concerns you would love to address.',
    'booking.step3Num': '03',
    'booking.step3Title': 'Health & wellness notes',
    'booking.step3Desc': 'Notify us of pregnancy, active medications, recent tanning, or skin sensitivities. For laser, shave 24h prior.',
    'booking.step4Num': '04',
    'booking.step4Title': 'Pick date & time',
    'booking.step4Desc': 'Indicate your preferred day and time within our business hours to receive prompt WhatsApp confirmation.',
    'booking.cancellationTitle': 'Cancellation Policy (20%)',
    'booking.cancellationText': 'We understand that unexpected things come up. Cancellations carry a 20% fee. If you cannot attend, please kindly notify us as soon as possible to reschedule.',
    'booking.laserPrepHdr': 'Important Laser Note:',
    'booking.laserPrepDesc': 'Please shave the treatment zone with a razor 24 hours prior and avoid recent direct sun exposure. We review all protocols at your consultation.',

    // Booking Form
    'form.title': 'WhatsApp Pre-Booking',
    'form.nameLabel': 'How would you like to be addressed?',
    'form.namePlaceholder': 'Your name or preferred nickname',
    'form.serviceLabel': 'Service of interest',
    'form.serviceDefault': 'Select a service...',
    'form.serviceConsult': 'Not sure yet, I would like a Free Consultation',
    'form.expectationLabel': 'What is your primary goal or expectation?',
    'form.expectationPlaceholder': 'E.g., underarm laser hair reduction, skin hydration, relaxing massage...',
    'form.dateLabel': 'Preferred date',
    'form.timeLabel': 'Preferred time window',
    'form.timeDefault': 'Select a time window...',
    'form.firstTimeLabel': 'Is this your first time with us?',
    'form.firstTimeYes': 'Yes, first visit',
    'form.firstTimeNo': 'Returning client',
    'form.notesLabel': 'Anything we should know? (optional)',
    'form.notesPlaceholder': 'Pregnancy, medications, recent sun exposure, allergies or skin sensitivities...',
    'form.previewTitle': 'Live message preview',
    'form.btnCopy': 'Copy message',
    'form.btnCopied': 'Message copied!',
    'form.btnSend': 'Send via WhatsApp',
    'form.directNote': 'You will be redirected with this formatted message to AMARII Beauty Spa on WhatsApp.',

    // FAQ
    'faq.title': 'Frequently Asked Questions',
    'faq.subtitle': 'Everything you need to know before booking.',
    'faq.cta': 'Book my appointment',

    // Floating WhatsApp
    'floating.text': 'Book',
    'floating.aria': 'Book appointment on WhatsApp',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<Language>(() => {
    try {
      const saved = localStorage.getItem('amarii_lang');
      if (saved === 'en' || saved === 'pt') return saved;
    } catch {
      // ignore
    }
    return 'pt';
  });

  const setLang = (newLang: Language) => {
    setLangState(newLang);
    try {
      localStorage.setItem('amarii_lang', newLang);
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    const html = document.documentElement;
    if (lang === 'pt') {
      html.lang = 'pt-BR';
      document.title = 'AMARII Beauty Spa | Depilação a Laser e Estética Brasileira em Wilmington, MA';
    } else {
      html.lang = 'en-US';
      document.title = 'AMARII Beauty Spa | Laser Hair Removal, Facials & Body Treatments in Wilmington, MA';
    }
  }, [lang]);

  const t = (key: string): string => {
    const langDict = translations[lang] as Record<string, string>;
    if (langDict && langDict[key]) {
      return langDict[key];
    }
    const ptDict = translations.pt as Record<string, string>;
    return ptDict[key] || key;
  };

  const getWhatsAppUrl = (customMessage?: string): string => {
    const defaultMsg = lang === 'pt'
      ? 'Olá, Amarii Beauty Spa! 💛 Vi o seu site e gostaria de agendar um horário.'
      : 'Hello, Amarii Beauty Spa! 💛 I saw your website and would like to schedule an appointment.';
    const textToSend = customMessage ? customMessage.trim() : defaultMsg;
    return `https://wa.me/${siteData.whatsappRaw}?text=${encodeURIComponent(textToSend)}`;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t, getWhatsAppUrl }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
