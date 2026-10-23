import React, { useEffect, useRef } from 'react';
import { X, Shield, FileText } from 'lucide-react';
import { siteData } from '../data/siteData';

interface LegalModalProps {
  type: 'privacy' | 'terms' | null;
  onClose: () => void;
}

export const LegalModals: React.FC<LegalModalProps> = ({ type, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!type) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    setTimeout(() => closeButtonRef.current?.focus(), 50);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [type, onClose]);

  if (!type) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="legal-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#1F4A5C]/80 backdrop-blur-sm p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl max-h-[85vh] bg-[#F6EFE4] text-[#26343B] rounded-3xl border-2 border-[#C4A05A]/40 shadow-2xl p-6 sm:p-8 flex flex-col my-auto"
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#C4A05A]/30 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-full bg-[#EFE5D3] text-[#8F7030] border border-[#C4A05A]/40">
              {type === 'privacy' ? <Shield className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
            </div>
            <div>
              <h2 id="legal-modal-title" className="font-display text-xl sm:text-2xl font-semibold text-[#1F4A5C]">
                {type === 'privacy' ? 'Privacy Policy' : 'Terms of Service'}
              </h2>
              <p className="text-xs text-[#6B6256] mt-0.5">
                AMARII Beauty Spa · Wilmington, Massachusetts
              </p>
            </div>
          </div>
          <button
            ref={closeButtonRef}
            onClick={onClose}
            aria-label="Close modal"
            className="p-2 rounded-full hover:bg-[#EFE5D3] text-[#26343B] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C4A05A]"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content (always in English as required by PRD) */}
        <div className="overflow-y-auto pr-2 mt-5 text-sm leading-relaxed space-y-4 text-[#26343B]/90 focus-visible:outline-none">
          {type === 'privacy' ? (
            <>
              <div>
                <h3 className="font-semibold text-base text-[#1F4A5C] mb-1">1. Who We Are</h3>
                <p>
                  AMARII Beauty Spa is a specialized beauty, wellness, and aesthetic practice operating at {siteData.address}. You may reach us by phone or WhatsApp at {siteData.whatsappPhone} or via Instagram at {siteData.instagramHandle}.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-base text-[#1F4A5C] mb-1">2. Information We Collect</h3>
                <p>
                  We collect information voluntarily provided by you, including your name, preferred nickname, phone number, selected treatment interests, preferred dates and time windows, and communication history sent through our booking form and WhatsApp. When scheduling specialized aesthetic or laser services, you may choose to disclose health-related information (e.g., pregnancy, prescription medications, recent sun or UV exposure, or skin conditions) necessary to ensure procedure safety and efficacy. Photographs are only taken or utilized with your explicit prior written consent.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-base text-[#1F4A5C] mb-1">3. How We Use Information</h3>
                <p>
                  Your information is used strictly to coordinate appointments, deliver tailored aesthetic treatments, answer customer inquiries, send service preparation guidance, and maintain clinical records compliant with professional standards. We never sell, rent, or trade client personal data to third parties.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-base text-[#1F4A5C] mb-1">4. Third-Party Integrations</h3>
                <p>
                  Our website incorporates interactive features including WhatsApp (Meta), Instagram, and Google Maps embeds. These external services may process data in accordance with their respective privacy policies.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-base text-[#1F4A5C] mb-1">5. Data Security & Retention</h3>
                <p>
                  We implement reasonable technical and organizational safeguards in accordance with Massachusetts data-security regulations (201 CMR 17.00). Client information is retained solely for the period necessary to deliver professional services and satisfy statutory record-keeping requirements.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-base text-[#1F4A5C] mb-1">6. Your Rights & Choices</h3>
                <p>
                  You may request access to, correction of, or deletion of your personal records at any time by contacting us directly via WhatsApp or email. You may also opt out of promotional messages whenever you choose.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-base text-[#1F4A5C] mb-1">7. Children’s Privacy</h3>
                <p>
                  Our website and services are not directed toward children under 13 years of age, and we do not knowingly collect personal data from minors.
                </p>
              </div>
            </>
          ) : (
            <>
              <div>
                <h3 className="font-semibold text-base text-[#1F4A5C] mb-1">1. Educational & General Information</h3>
                <p>
                  The content published on this website is for institutional, general aesthetic educational, and scheduling purposes only. It does not constitute medical diagnosis or medical advice. All cosmetic, laser, and body procedures are preceded by a mandatory personalized skin and suitability assessment.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-base text-[#1F4A5C] mb-1">2. Licensed Professional Standards</h3>
                <p>
                  Aesthetic and Laser Hair Removal (LHR) procedures at AMARII Beauty Spa are performed by licensed professionals holding valid Massachusetts credentials. Clients agree to provide complete and truthful health disclosures to enable safe treatment.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-base text-[#1F4A5C] mb-1">3. Cancellation Policy</h3>
                <p>
                  {siteData.cancellationPolicy.en} Cancellations made with short notice impact scheduling availability for others; please notify our team promptly if you must reschedule your appointment.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-base text-[#1F4A5C] mb-1">4. Pricing & Promotional Terms</h3>
                <p>
                  All stated prices are in United States Dollars (USD) and are subject to adjustment without prior notice. Promotional campaigns (such as introductory launch pricing and complimentary laser trials) are subject to availability, eligibility verification, and specific term caps.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-base text-[#1F4A5C] mb-1">5. Individual Variations & No Guarantees</h3>
                <p>
                  Results from aesthetic procedures, laser hair reduction, and skin treatments vary from person to person based on biological characteristics, skin type, hair texture, and adherence to aftercare guidance. Absolute outcomes are not guaranteed.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-base text-[#1F4A5C] mb-1">6. Limitation of Liability & Governing Law</h3>
                <p>
                  To the fullest extent permitted by applicable law, AMARII Beauty Spa’s liability is strictly limited. These Terms of Service are governed by and construed in accordance with the laws of the Commonwealth of Massachusetts.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-base text-[#1F4A5C] mb-1">7. Digital Accessibility</h3>
                <p>
                  We strive to ensure our website complies with WCAG 2.1 AA accessibility guidelines. If you experience difficulty accessing any part of this site, please contact us at {siteData.whatsappPhone}.
                </p>
              </div>
            </>
          )}
        </div>

        {/* Footer */}
        <div className="pt-4 mt-4 border-t border-[#C4A05A]/30 flex justify-end shrink-0">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-[#1F4A5C] text-[#F6EFE4] text-xs font-semibold tracking-wider uppercase hover:bg-[#C4A05A] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#8F7030]"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};
