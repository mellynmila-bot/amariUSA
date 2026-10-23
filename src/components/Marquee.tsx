import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Marquee: React.FC = () => {
  const { lang } = useLanguage();

  const items = lang === 'pt' ? [
    'DEPILAÇÃO A LASER',
    'FACIAL',
    'CORPORAL',
    'SKIN CARE',
    'AQUA STAR',
    'BEM-ESTAR',
    'WILMINGTON, MA',
  ] : [
    'LASER HAIR REMOVAL',
    'FACIAL',
    'BODY',
    'SKIN CARE',
    'AQUA STAR',
    'WELLNESS',
    'WILMINGTON, MA',
  ];

  return (
    <div className="relative w-full bg-[#1F4A5C] text-[#E6D29B] overflow-hidden py-3.5 border-y border-[#C4A05A]/40 shadow-inner">
      <div className="w-full overflow-hidden">
        {/* Infinite Loop Ribbon */}
        <div className="w-full overflow-hidden">
          <div
            className="flex whitespace-nowrap items-center select-none"
            style={{
              animation: 'amariiMarquee 28s linear infinite',
            }}
          >
            {/* Duplicated for seamless continuous looping */}
            {[0, 1, 2, 3].map((batchIndex) => (
              <div key={batchIndex} className="flex items-center shrink-0">
                {items.map((word, index) => (
                  <span
                    key={`${batchIndex}-${index}`}
                    className="flex items-center text-xs sm:text-sm font-sans tracking-[0.25em] font-medium uppercase px-3 text-[#E6D29B]"
                  >
                    <span>{word}</span>
                    <span className="ml-3 text-[#C4A05A] font-bold text-xs">✦</span>
                  </span>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes amariiMarquee {
          0% {
            transform: translateX(0%);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          [style*="amariiMarquee"] {
            animation: none !important;
            transform: none !important;
            overflow-x: auto;
          }
        }
      `}</style>
    </div>
  );
};
