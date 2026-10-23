import React from 'react';
import { siteData } from '../data/siteData';

interface FooterProps {
  onOpenPrivacy: () => void;
  onOpenTerms: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy, onOpenTerms }) => {
  return (
    <footer className="relative bg-[#F6EFE4] text-[#6B6256] border-t border-[#C4A05A]/40 pt-12 pb-14 text-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Brand Wordmark & Location */}
        <div className="mb-4">
          <span className="font-display tracking-[0.25em] text-lg font-semibold text-[#1F4A5C]">
            AMARII
          </span>
          <span className="text-xs uppercase tracking-[0.2em] text-[#8F7030] ml-2 font-medium">
            · Beauty Spa
          </span>
          <p className="text-xs text-[#6B6256] mt-1 font-sans">
            Wilmington, Massachusetts · Laser Hair Removal, Facials & Body Treatments
          </p>
        </div>

        {/* Line 1: Copyright */}
        <p className="text-xs text-[#6B6256] mb-3">
          © {new Date().getFullYear()} Andreza Garcia · AMARII Beauty Spa. All rights reserved.
        </p>

        {/* Line 2: Legal Links (In English) */}
        <div className="flex items-center justify-center gap-4 text-xs font-medium text-[#6B6256] mb-4">
          <button
            onClick={onOpenPrivacy}
            className="hover:text-[#1F4A5C] hover:underline transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#8F7030] rounded py-0.5 px-1"
          >
            Privacy Policy
          </button>
          <span aria-hidden="true" className="text-[#C4A05A]/60">·</span>
          <button
            onClick={onOpenTerms}
            className="hover:text-[#1F4A5C] hover:underline transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#8F7030] rounded py-0.5 px-1"
          >
            Terms of Service
          </button>
        </div>

        {/* Optional License Line */}
        {(siteData.licenses.esthetician || siteData.licenses.electrologist) && (
          <p className="text-[11px] text-[#6B6256]/80 font-mono tracking-tight mb-2">
            Licensed Esthetician No. [{siteData.licenses.esthetician || '—'}] · Licensed Electrologist No. [{siteData.licenses.electrologist || '—'}]
          </p>
        )}

        {/* Accessibility & Address statement */}
        <p className="text-[11px] text-[#6B6256]/80 max-w-xl mx-auto leading-relaxed">
          230 Lowell Street, #1C, Wilmington, MA 01887 · Phone & WhatsApp: +1 (781) 692-7644
          <br />
          Designed with WCAG 2.1 AA accessibility compliance in mind.
        </p>

      </div>
    </footer>
  );
};
