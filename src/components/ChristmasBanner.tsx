import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

interface ChristmasBannerProps {
  onNavigate: (id: string) => void;
  className?: string;
}

/**
 * Christmas 2026 Campaign Announcement Banner
 * Can be easily enabled/disabled or removed post-campaign.
 */
export default function ChristmasBanner({ onNavigate, className = '' }: ChristmasBannerProps) {
  return (
    <div
      role="region"
      aria-label="Christmas 2026 Fundraising Appeal"
      className={`relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}
    >
      <div className="bg-gradient-to-r from-[#003882] via-[#004aad] to-[#002d62] text-white rounded-2xl md:rounded-3xl p-4 sm:p-5 md:p-6 shadow-xl border border-white/15 backdrop-blur-md transition-all">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-start sm:items-center gap-3.5 text-left w-full sm:w-auto">
            <div className="w-10 h-10 rounded-xl bg-accent/20 border border-accent/30 flex items-center justify-center shrink-0 mt-0.5 sm:mt-0 text-accent">
              <Sparkles className="w-5 h-5 text-[#ff8c00]" aria-hidden="true" />
            </div>
            <div>
              <div className="inline-flex items-center gap-2 mb-1">
                <span className="bg-accent/20 text-[#ffb05c] text-[10px] font-display font-extrabold uppercase tracking-widest px-2.5 py-0.5 rounded-full border border-accent/30">
                  Christmas Appeal 2026
                </span>
              </div>
              <h2 className="text-base sm:text-lg md:text-xl font-display font-extrabold text-white tracking-tight leading-snug">
                This Christmas, help bring eye care closer.
              </h2>
              <p className="text-xs sm:text-sm text-gray-200 font-display font-medium leading-relaxed mt-0.5">
                Support Foresight’s Christmas Appeal and help build stronger local eye care.
              </p>
            </div>
          </div>

          <div className="w-full sm:w-auto shrink-0 flex flex-col sm:flex-row gap-2.5 justify-end">
            <a
              href="https://donorbox.org/foresight-australia-donate?designation=Christmas%20Appeal%202026"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-5 py-3 md:px-6 md:py-3.5 bg-accent hover:bg-accent-dark text-white rounded-xl md:rounded-2xl font-display font-black uppercase tracking-widest text-[11px] md:text-xs transition-all transform hover:scale-[1.02] shadow-lg shadow-accent/30 flex items-center justify-center gap-2 group"
            >
              Donate to Appeal
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </a>
            <button
              onClick={() => onNavigate('christmas-appeal')}
              className="w-full sm:w-auto px-4 py-3 md:px-5 md:py-3.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl md:rounded-2xl font-display font-black uppercase tracking-widest text-[11px] md:text-xs transition-all flex items-center justify-center gap-2"
            >
              Explore Appeal
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
