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
      className={`relative z-20 w-full ${className}`}
    >
      <div className="bg-gradient-to-r from-[#003882]/95 via-[#004aad]/95 to-[#002d62]/95 text-white rounded-xl md:rounded-2xl py-2 px-3 sm:py-2.5 sm:px-4 md:py-2.5 md:px-5 shadow-lg border border-white/20 backdrop-blur-md transition-all">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-4">
          <div className="flex items-center gap-2.5 sm:gap-3 text-left w-full sm:w-auto min-w-0">
            <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-lg bg-accent/20 border border-accent/30 flex items-center justify-center shrink-0 text-accent">
              <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#ff8c00]" aria-hidden="true" />
            </div>
            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
                <span className="bg-accent/25 text-[#ffb05c] text-[9px] font-display font-black uppercase tracking-wider px-2 py-0.5 rounded-full border border-accent/30 shrink-0">
                  Appeal 2026
                </span>
                <h2 className="text-xs sm:text-sm font-display font-extrabold text-white tracking-tight leading-tight">
                  This Christmas, help bring eye care closer.
                </h2>
              </div>
              <p className="text-[11px] sm:text-xs text-gray-200 font-display font-medium leading-tight mt-0.5 hidden xs:block sm:block">
                Support Foresight’s appeal to build stronger local eye care.
              </p>
            </div>
          </div>

          <div className="w-full sm:w-auto shrink-0 flex items-center gap-2 justify-end">
            <a
              href="https://donorbox.org/foresight-australia-donate?designation=Christmas%20Appeal%202026"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-3.5 py-1.5 md:px-4 md:py-2 bg-accent hover:bg-accent-dark text-white rounded-lg md:rounded-xl font-display font-black uppercase tracking-wider text-[10px] md:text-[11px] transition-all transform hover:scale-[1.02] shadow-md shadow-accent/30 flex items-center justify-center gap-1.5 shrink-0"
            >
              Donate
              <ArrowRight className="w-3 h-3 md:w-3.5 md:h-3.5" aria-hidden="true" />
            </a>
            <button
              onClick={() => onNavigate('christmas-appeal')}
              className="w-full sm:w-auto px-3 py-1.5 md:px-3.5 md:py-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-lg md:rounded-xl font-display font-black uppercase tracking-wider text-[10px] md:text-[11px] transition-all flex items-center justify-center gap-1 shrink-0"
            >
              Explore
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
