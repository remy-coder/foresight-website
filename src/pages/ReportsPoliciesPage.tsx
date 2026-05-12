import { motion } from 'motion/react';
import { FileText, ArrowRight, ShieldCheck } from 'lucide-react';

export default function ReportsPoliciesPage() {
  const policies = [
    'Foresight Conflict of Interest Policy',
    'Foresight Complaints Policy',
    'Foresight Child Protection Policy',
    'Foresight Counter-terrorism Policy',
    'Foresight Financial Management Policy',
    'Foresight Gender Equity Policy',
    'Foresight Whistle Blower Policy',
    'Foresight Non-development Policy',
    'Foresight Corruption and Fraud Prevention Policy',
    'Foresight Constitution – 2020',
    'Foresight Fundraising Policy',
    'Foresight Code of Conduct',
    'Foresight Transparency and Communication Policy',
    'Foresight Prevention of Sexual Exploitation and Harassment Policy',
    'Foresight Philosophy and Principles Policy'
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
                  key={policy}
                  href={`/media/documents/${policy.toLowerCase().replace(/ – /g, '-').replace(/ /g, '-').replace(/[()]/g, '')}.pdf`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between group hover:bg-gray-50 hover:border-primary/20 transition-all cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <ShieldCheck className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors flex-shrink-0" />
                    <span className="font-display font-bold text-gray-700 group-hover:text-gray-900 transition-colors uppercase text-[11px] tracking-widest">{policy}</span>
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
