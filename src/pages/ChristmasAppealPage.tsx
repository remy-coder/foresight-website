import { useEffect } from 'react';
import { motion } from 'motion/react';
import {
  Heart,
  ArrowRight,
  ShieldCheck,
  Award,
  Users,
  Eye,
  CheckCircle2,
  HelpCircle,
  FileText,
  Mail,
  Phone
} from 'lucide-react';

interface ChristmasAppealPageProps {
  onNavigate: (id: string) => void;
}

export default function ChristmasAppealPage({ onNavigate }: ChristmasAppealPageProps) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
    document.title = 'Christmas Appeal 2026 | Foresight Australia';
  }, []);

  return (
    <div className="bg-[#FAFAFA] min-h-screen flex flex-col font-sans">
      {/* 1. HERO SECTION */}
      <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 bg-[#002d62] text-white overflow-hidden">
        {/* Background Image / Ambient Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/media/images/Sumba Home.JPG"
            alt="Foresight eye care clinic consultation"
            className="w-full h-full object-cover object-center opacity-25 brightness-75 filter"
            loading="eager"
            onError={(e) => {
              // Graceful fallback if Sumba Home image path differs
              const target = e.target as HTMLImageElement;
              target.src = '/media/images/home-hero-sumba-consultation.png';
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#002d62]/80 via-[#002d62]/70 to-[#002d62]"></div>
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 mb-6">
              <span className="bg-accent/20 border border-accent/40 text-[#ffb05c] text-xs font-display font-extrabold uppercase tracking-widest px-4 py-1.5 rounded-full">
                Christmas Appeal 2026
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-display font-extrabold mb-6 tracking-tight leading-[1.08] text-balance">
              Care today. Stronger local eye care for tomorrow.
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 font-display font-medium leading-relaxed mb-10 max-w-2xl mx-auto">
              This Christmas, help bring eye care closer to people who need it—and support the local teams working to make that care last.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="https://donorbox.org/foresight-australia-donate?designation=Christmas%20Appeal%202026"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 md:py-5 bg-accent hover:bg-accent-dark text-white rounded-2xl font-display font-black uppercase tracking-widest text-xs transition-all transform hover:scale-105 shadow-2xl shadow-accent/40 flex items-center justify-center gap-3"
              >
                <Heart className="w-4 h-4 fill-white" />
                Donate to the Christmas Appeal
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#lead-story"
                className="w-full sm:w-auto px-8 py-4 md:py-5 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-2xl font-display font-black uppercase tracking-widest text-xs transition-all backdrop-blur-md flex items-center justify-center"
              >
                Read the Appeal Story
              </a>
            </div>

            <p className="text-xs text-gray-300 font-display font-medium mt-6">
              Donations support Foresight Australia’s broader sight-saving work across our partner programs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. INTRODUCTION & CAMPAIGN GOAL */}
      <section className="py-12 md:py-16 bg-white border-b border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <span className="text-primary font-display font-extrabold tracking-[0.25em] text-[11px] uppercase mb-3 block">
              The Need This Christmas
            </span>
            <p className="text-lg md:text-xl text-gray-700 font-display font-medium leading-relaxed max-w-3xl mx-auto">
              For many people, an eye examination, a pair of glasses or a referral to a specialist can be difficult to access. This Christmas, your support can help Foresight Australia work with local partners to provide eye care and strengthen the services communities rely on into the future.
            </p>
          </div>

          {/* Goal Callout Box */}
          <div className="bg-gradient-to-br from-primary/5 via-white to-accent/5 border border-primary/15 rounded-3xl p-6 sm:p-8 md:p-10 shadow-sm text-center relative overflow-hidden">
            <div className="inline-flex items-center gap-2 mb-2">
              <Award className="w-5 h-5 text-primary" />
              <span className="text-xs font-display font-black uppercase tracking-widest text-primary">
                Fundraising Target
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-gray-900 mb-3 tracking-tight">
              This Christmas, we are aiming to raise $30,000 for Foresight&apos;s work in Sumba and here in Australia. Please give by 31 December 2026.
            </h2>
            <p className="text-sm text-gray-600 font-display font-medium max-w-2xl mx-auto leading-relaxed">
              Every gift helps fund community outreach, optical screening, clinician training, equipment and the referral pathways that connect people with life-changing treatment.
            </p>
          </div>
        </div>
      </section>

      {/* 3. LEAD STORY: A GIRL IN SUMBA */}
      <section id="lead-story" className="py-12 md:py-20 bg-[#FAFAFA] scroll-mt-24 md:scroll-mt-[140px]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl md:rounded-[2.5rem] border border-gray-100 shadow-xl overflow-hidden p-6 sm:p-10 md:p-14">
            <div className="max-w-3xl mx-auto">
              <div className="mb-6">
                <span className="bg-primary/10 text-primary text-xs font-display font-extrabold uppercase tracking-widest px-3 py-1 rounded-full">
                  Lead Story · West Sumba, Indonesia
                </span>
              </div>

              <h2 className="text-2xl sm:text-4xl md:text-4xl font-display font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
                One referral. A step towards care.
              </h2>

              <div className="prose prose-lg text-gray-700 font-display font-medium space-y-5 leading-relaxed text-base sm:text-lg">
                <p>
                  During our September visit to Sumba, our team met a 14-year-old girl whose vision had deteriorated over several years because of cataracts. Her difficulties with sight had forced her to leave school.
                </p>

                <p>
                  She was referred to Dr Saphira at Karitas Hospital and has since had surgery on her right eye, covered by Indonesia&apos;s national health insurance (BPJS). Dr Saphira plans to operate on her left eye soon. Her story shows why timely assessment, referral and access to local specialist care matter.
                </p>

                <div className="p-5 sm:p-6 bg-primary/5 rounded-2xl border-l-4 border-primary my-6">
                  <p className="text-sm sm:text-base text-gray-800 font-display font-bold leading-relaxed mb-0">
                    Your support helps Foresight work alongside local health professionals so that more people can be identified, referred and connected with eye care.
                  </p>
                </div>
              </div>

              {/* Supporting Clinic Image / Placeholder with Explicit Context */}
              <div className="mt-8 pt-8 border-t border-gray-100">
                <div className="rounded-2xl overflow-hidden bg-gray-100 border border-gray-200">
                  <img
                    src="/media/images/home-hero-sumba-consultation.png"
                    alt="Clinical consultation during Foresight Sumba eye program outreach"
                    className="w-full h-64 sm:h-80 object-cover object-center"
                    loading="lazy"
                  />
                  <div className="p-4 bg-gray-50 text-xs text-gray-500 font-display font-medium flex items-start gap-2">
                    <HelpCircle className="w-4 h-4 text-gray-400 shrink-0 mt-0.5" />
                    <span>
                      <em>Representative outreach photograph:</em> Clinical eye assessment during a Foresight Sumba visit. (To respect patient privacy, this general clinic photograph does not depict the individual patient featured above).
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHAT SUPPORTERS HELPED MAKE POSSIBLE (SEPTEMBER 2026 SUMBA IMPACT) */}
      <section className="py-12 md:py-16 bg-white border-y border-gray-100">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-primary font-display font-extrabold tracking-[0.25em] text-[11px] uppercase mb-2 block">
              Recent Field Outcomes
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-gray-900 tracking-tight mb-4">
              What supporters helped make possible
            </h2>
            <p className="text-sm sm:text-base text-gray-600 font-display font-medium leading-relaxed">
              In September 2026, Foresight Australia returned to Sumba alongside local clinicians and hospital partners to provide essential care and support clinical training.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-8">
            <div className="p-6 bg-[#FAFAFA] rounded-2xl border border-gray-100 text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-primary mb-2">913</div>
              <div className="text-xs font-display font-bold uppercase tracking-wider text-gray-800">Patients seen</div>
              <div className="text-[11px] text-gray-400 font-display mt-1">Sept 2026 Sumba visit</div>
            </div>

            <div className="p-6 bg-[#FAFAFA] rounded-2xl border border-gray-100 text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-primary mb-2">928</div>
              <div className="text-xs font-display font-bold uppercase tracking-wider text-gray-800">Pairs of glasses</div>
              <div className="text-[11px] text-gray-400 font-display mt-1">Some received multiple pairs</div>
            </div>

            <div className="p-6 bg-[#FAFAFA] rounded-2xl border border-gray-100 text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-primary mb-2">105</div>
              <div className="text-xs font-display font-bold uppercase tracking-wider text-gray-800">Referrals made</div>
              <div className="text-[11px] text-gray-400 font-display mt-1">To local specialist care</div>
            </div>

            <div className="p-6 bg-[#FAFAFA] rounded-2xl border border-gray-100 text-center">
              <div className="text-3xl sm:text-4xl md:text-5xl font-display font-black text-primary mb-2">15</div>
              <div className="text-xs font-display font-bold uppercase tracking-wider text-gray-800">Cataract surgeries</div>
              <div className="text-[11px] text-gray-400 font-display mt-1">Completed during the visit</div>
            </div>
          </div>

          <div className="bg-primary/5 rounded-2xl p-5 sm:p-6 text-center max-w-3xl mx-auto border border-primary/10">
            <p className="text-xs sm:text-sm text-gray-600 font-display font-medium leading-relaxed mb-0">
              These visit results were made possible through close collaboration with <strong>Dr Saphira</strong> and the team at <strong>Karitas Hospital</strong>, alongside local health workers, visiting volunteers, and dedicated donors.
            </p>
          </div>
        </div>
      </section>

      {/* 5. WORKING TOGETHER FOR BETTER EYE CARE */}
      <section className="py-12 md:py-20 bg-[#FAFAFA]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <span className="text-primary font-display font-extrabold tracking-[0.25em] text-[11px] uppercase mb-3 block">
                Sustainable Partnerships
              </span>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-gray-900 tracking-tight leading-tight mb-6">
                Working together for better eye care
              </h2>
              <p className="text-base sm:text-lg text-gray-700 font-display font-medium leading-relaxed mb-6">
                From Sumba to regional Australia, Foresight works with local health professionals and partners to improve access to eye care. Every community is different, but the goal is shared: care that is accessible today and stronger for the future.
              </p>
              <p className="text-sm sm:text-base text-gray-600 font-display font-medium leading-relaxed mb-6">
                In regional New South Wales, our Griffith initiative supports community-based training for Aboriginal Health Care Workers and regular clinical visits to help close the gap in vision health. In Sumba, we work closely with hospital teams and district community health centres to strengthen local surgical and diagnostic capacity.
              </p>
              <div className="flex items-center gap-3 text-xs sm:text-sm text-primary font-display font-bold">
                <Users className="w-5 h-5 text-accent shrink-0" />
                <span>Locally led care supported by sustainable skills transfer</span>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden shadow-lg border border-gray-100 bg-white">
                <img
                  src="/media/images/IMG_7815.JPG"
                  alt="A Foresight team member in discussion with local colleagues during clinical outreach"
                  className="w-full h-72 sm:h-80 object-cover object-center"
                  loading="eager"
                  decoding="sync"
                />
                <div className="p-4 bg-white text-xs text-gray-500 font-display font-medium">
                  Strengthening local clinical skills and referral networks through collaborative partnerships and shared training.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. HOW A GIFT HELPS */}
      <section className="py-12 md:py-20 bg-white border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-primary font-display font-extrabold tracking-[0.25em] text-[11px] uppercase mb-2 block">
            Your Contribution
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold text-gray-900 tracking-tight mb-4">
            How your gift helps
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-display font-medium max-w-2xl mx-auto leading-relaxed mb-10">
            Foresight Australia combines immediate care with long-term capacity. Your donation directly assists our core priorities:
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left mb-12">
            <div className="p-6 bg-[#FAFAFA] rounded-2xl border border-gray-100 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Eye className="w-5 h-5" />
              </div>
              <h3 className="font-display font-extrabold text-base text-gray-900">
                Support eye examinations and access to glasses
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 font-display font-medium leading-relaxed">
                Helping outreach teams identify vision problems early in schools and remote communities.
              </p>
            </div>

            <div className="p-6 bg-[#FAFAFA] rounded-2xl border border-gray-100 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <Users className="w-5 h-5" />
              </div>
              <h3 className="font-display font-extrabold text-base text-gray-900">
                Help local health workers develop and share skills
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 font-display font-medium leading-relaxed">
                Mentoring community nurses and healthcare workers so skills remain in the community.
              </p>
            </div>

            <div className="p-6 bg-[#FAFAFA] rounded-2xl border border-gray-100 flex flex-col gap-3">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="font-display font-extrabold text-base text-gray-900">
                Support equipment, referrals and ongoing partnerships
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 font-display font-medium leading-relaxed">
                Providing diagnostic equipment and strengthening connections to local hospital specialists.
              </p>
            </div>
          </div>

          <div className="bg-[#002d62] text-white rounded-3xl p-8 sm:p-12 shadow-xl text-center max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-display font-extrabold mb-4 tracking-tight">
              Give the gift of sight this Christmas
            </h3>
            <p className="text-xs sm:text-sm text-gray-200 font-display font-medium mb-6 leading-relaxed">
              Donations are processed securely through Donorbox with the designation &ldquo;Christmas Appeal 2026&rdquo;.
            </p>

            {/* Suggested Amounts matching print form */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 max-w-md mx-auto mb-6">
              {[60, 100, 250, 500].map((amt) => (
                <a
                  key={amt}
                  href={`https://donorbox.org/foresight-australia-donate?designation=Christmas%20Appeal%202026&amount=${amt}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-3 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-center transition-all hover:scale-105"
                >
                  <span className="block font-display font-black text-lg text-white">${amt}</span>
                  <span className="block text-[10px] font-display font-medium text-gray-300 uppercase tracking-wider">Donate</span>
                </a>
              ))}
            </div>

            <a
              href="https://donorbox.org/foresight-australia-donate?designation=Christmas%20Appeal%202026"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-10 py-5 bg-accent hover:bg-accent-dark text-white rounded-2xl font-display font-black uppercase tracking-widest text-xs transition-all transform hover:scale-105 shadow-2xl shadow-accent/40 inline-flex items-center justify-center gap-3"
            >
              <Heart className="w-4 h-4 fill-white" />
              Donate to the Christmas Appeal
              <ArrowRight className="w-4 h-4" />
            </a>

            <p className="text-[11px] text-gray-300 font-display font-medium mt-6">
              Eligible donations of $2 or more to Foresight Australia are tax deductible in Australia.
            </p>
          </div>
        </div>
      </section>

      {/* 7. TRUST, GOVERNANCE & TAX INFORMATION */}
      <section className="py-12 md:py-16 bg-[#FAFAFA] border-t border-gray-100">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="flex items-start gap-3.5 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <ShieldCheck className="w-6 h-6 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-display font-bold uppercase tracking-wider text-gray-900 mb-1">
                  Tax Deductible
                </h4>
                <p className="text-xs text-gray-600 font-display font-medium leading-relaxed">
                  Eligible donations of $2 or more to Foresight Australia are tax deductible in Australia. Your ability to claim depends on your individual circumstances.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <Award className="w-6 h-6 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-display font-bold uppercase tracking-wider text-gray-900 mb-1">
                  Registered Charity
                </h4>
                <p className="text-xs text-gray-600 font-display font-medium leading-relaxed">
                  Foresight Australia is a registered Australian charity with Deductible Gift Recipient (DGR) status.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3.5 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
              <FileText className="w-6 h-6 text-primary shrink-0 mt-0.5" />
              <div>
                <h4 className="text-xs font-display font-bold uppercase tracking-wider text-gray-900 mb-1">
                  Governance & Reports
                </h4>
                <p className="text-xs text-gray-600 font-display font-medium leading-relaxed">
                  Full annual reports and policies are available on our website to ensure accountability.
                </p>
              </div>
            </div>
          </div>

          <div className="p-6 bg-white rounded-2xl border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left shadow-sm">
            <div>
              <p className="text-xs sm:text-sm text-gray-800 font-display font-bold mb-1">
                Foresight Australia
              </p>
              <p className="text-xs text-gray-600 font-display font-medium leading-relaxed">
                PO Box 663, Hornsby NSW 1630 &nbsp;|&nbsp; 02 8021 3632 &nbsp;|&nbsp; <a href="mailto:foresight@foresight.org.au" className="hover:text-primary underline">foresight@foresight.org.au</a> &nbsp;|&nbsp; ABN 38 008 622 311
              </p>
            </div>
            <div className="flex gap-3 shrink-0">
              <button
                onClick={() => onNavigate('reports-policies')}
                className="px-4 py-2 text-xs font-display font-bold text-gray-600 hover:text-primary transition-colors border border-gray-200 rounded-xl"
              >
                Reports & Policies
              </button>
              <button
                onClick={() => onNavigate('contact')}
                className="px-4 py-2 text-xs font-display font-bold text-primary hover:text-accent transition-colors border border-primary/20 rounded-xl bg-primary/5"
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
