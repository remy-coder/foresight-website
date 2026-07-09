import { motion } from 'motion/react';
import { FileText, ArrowRight, ShieldCheck } from 'lucide-react';

export default function ReportsPoliciesPage() {
  const policies: { label: string; filename: string }[] = [
    { label: 'Foresight Conflict of Interest Policy',                        filename: 'foresight-conflict-of-interest-policy.pdf' },
    { label: 'Foresight Complaints Policy',                                  filename: 'foresight-complaints-policy.pdf' },
    { label: 'Foresight Child Protection Policy',                            filename: 'foresight-child-protection-policy.pdf' },
    { label: 'Foresight Counter-terrorism Policy',                           filename: 'foresight-counter-terrorism-policy.pdf' },
    { label: 'Foresight Financial Management Policy',                        filename: 'foresight-financial-management-policy.pdf' },
    { label: 'Foresight Gender Equity Policy',                               filename: 'foresight-gender-equity-policy.pdf' },
    { label: 'Foresight Whistle Blower Policy',                              filename: 'foresight-whistle-blower-policy.pdf' },
    { label: 'Foresight Non-development Policy',                             filename: 'foresight-non-development-policy.pdf' },
    { label: 'Foresight Corruption and Fraud Prevention Policy',             filename: 'foresight-corruption-and-fraud-prevention-policy.pdf' },
    { label: 'Foresight Constitution – 2020',                                filename: 'foresight-constitution-2020.pdf' },
    { label: 'Foresight Fundraising Policy',                                 filename: 'foresight-fundraising-policy.pdf' },
    { label: 'Foresight Code of Conduct',                                    filename: 'foresight-code-of-conduct.pdf' },
    { label: 'Foresight Transparency and Communication Policy',              filename: 'foresight-transparency-and-communication-policy.pdf' },
    { label: 'Foresight Prevention of Sexual Exploitation and Harassment Policy', filename: 'foresight-prevention-of-sexual-exploitation-and-harassment-policy.pdf' },
    { label: 'Foresight Philosophy and Principles Policy',                   filename: 'foresight-philosophy-and-principles-policy.pdf' },
  ];

  return (
    <div className="pt-14 pb-8 md:pt-20 md:pb-14 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6">
        <div className="max-w-5xl mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-black uppercase tracking-[0.2em] mb-4"
          >
            <span>Transparency</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold mb-6 md:mb-10 leading-[1.1] md:leading-[0.95] tracking-tighter"
          >
            Reports <span className="text-primary">& Policies</span>
          </motion.h1>
        </div>

        <div className="space-y-16 md:space-y-24">
          {/* SECTION 1: Annual Reports */}
          <section id="annual-reports">
            <h2 className="text-xl md:text-2xl font-display font-extrabold text-gray-900 mb-4 tracking-tight">Annual Reports</h2>
            <p className="text-base md:text-lg text-gray-500 font-display font-medium leading-relaxed mb-8 md:mb-10 max-w-3xl">
              Explore our annual reports to see how your support is making a measurable impact.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[2025, 2024].map((year) => (
                <a
                  key={year}
                  href={`/media/documents/annual-report-${year}.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm flex items-center justify-between group hover:border-primary/30 transition-all cursor-pointer hover:shadow-xl"
                >
                  <div className="flex items-center gap-6">
                    <div className="bg-primary/5 p-4 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all">
                      <FileText className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="text-xl font-display font-extrabold text-gray-900">{year} Annual Report</h4>
                      <p className="text-xs text-gray-400 font-display font-black uppercase tracking-widest mt-1">View PDF</p>
                    </div>
                  </div>
                  <ArrowRight className="w-6 h-6 text-gray-300 group-hover:text-primary group-hover:translate-x-2 transition-all" />
                </a>
              ))}
            </div>
          </section>

          {/* SECTION 2: Policies */}
          <section id="governance-policies">
            <h2 className="text-xl md:text-2xl font-display font-extrabold text-gray-900 mb-4 tracking-tight">Governance & Policies</h2>
            <p className="text-base md:text-lg text-gray-500 font-display font-medium leading-relaxed mb-8 md:mb-10 max-w-3xl">
              Foresight Australia is committed to transparency, accountability, and ethical practice. The following policies guide our work.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {policies.map((policy) => (
                <a
                  key={policy.label}
                  href={`/media/documents/${policy.filename}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between group hover:bg-gray-50 hover:border-primary/20 transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <ShieldCheck className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors flex-shrink-0" />
                    <span className="font-display font-bold text-gray-700 group-hover:text-gray-900 transition-colors uppercase text-[11px] tracking-widest">{policy.label}</span>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-primary transition-all flex-shrink-0" />
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
