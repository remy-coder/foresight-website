import { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ChevronDown, ArrowRight, ShieldCheck, Heart, Award, Quote } from 'lucide-react';

interface DonatePageProps {
  onNavigate?: (id: string) => void;
}

export default function DonatePage({ onNavigate }: DonatePageProps) {
  const [amount, setAmount] = useState<string | null>(null);
  const [frequency, setFrequency] = useState<'single' | 'monthly'>('single');
  const [project, setProject] = useState('All Foresight Projects');

  const tiers = [
    { amount: '$35', title: 'The First Step', outcome: 'Provide a comprehensive eye screening for a child or adult in a remote community.' },
    { amount: '$150', title: 'The Gift of Sight', outcome: 'Fund a cataract surgery and restore someone’s vision in under 30 minutes.' },
    { amount: '$500', title: 'Train a Healer', outcome: 'Support the training of a local nurse or clinician, creating long-term impact.' },
    { amount: '$2,500', title: 'Equip a Clinic', outcome: 'Help provide essential equipment to deliver ongoing eye care services.' }
  ];

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="pt-12 pb-8 md:pt-16 md:pb-10 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2070')] bg-cover bg-center opacity-30 brightness-[0.75]"></div>
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold mb-4 leading-[1.1] tracking-tighter">
              Restore Sight Today
            </h1>
            <p className="text-lg md:text-xl text-secondary opacity-90 font-display font-medium leading-relaxed mb-6">
              Your donation directly supports life-changing eye care and sustainable local training programs.
            </p>
            <p className="text-sm md:text-base text-accent font-display font-black uppercase tracking-[0.2em] italic">
              "You are giving someone the chance to see their family again."
            </p>
          </motion.div>
        </div>
      </section>

      {/* DONATION FORM CONTAINER */}
      <section className="py-8 md:py-10 bg-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-4 lg:px-6">
          <div className="bg-white rounded-[2.5rem] shadow-3xl border border-gray-100 p-6 md:p-8 relative z-10 -mt-20 md:-mt-24">
            
            {/* 4. MONTHLY GIVING TOGGLE */}
            <div className="mb-10 text-center">
              <div className="inline-flex bg-gray-50 p-1.5 rounded-2xl border border-gray-100 mb-6">
                <button
                  onClick={() => setFrequency('monthly')}
                  className={`px-6 py-3 rounded-xl font-display font-black uppercase tracking-widest text-[11px] transition-all ${frequency === 'monthly' ? 'bg-primary text-white shadow-lg' : 'text-gray-400 hover:text-primary'}`}
                >
                  Give Monthly
                </button>
                <button
                  onClick={() => setFrequency('single')}
                  className={`px-6 py-3 rounded-xl font-display font-black uppercase tracking-widest text-[11px] transition-all ${frequency === 'single' ? 'bg-primary text-white shadow-lg' : 'text-gray-400 hover:text-primary'}`}
                >
                  One-Time
                </button>
              </div>
              
              {frequency === 'monthly' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-primary/5 border border-primary/10 rounded-2xl p-4 mb-8 max-w-2xl mx-auto"
                >
                  <h4 className="text-primary font-display font-black uppercase tracking-widest text-xs mb-1">Join The Visionaries</h4>
                  <p className="text-sm text-gray-600 font-display font-medium leading-relaxed">
                    Eradicating avoidable blindness takes consistent, long-term effort. By becoming a monthly supporter, you help us plan surgical missions and build sustainable systems.
                  </p>
                </motion.div>
              )}

              {frequency === 'single' && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-accent/5 border border-accent/10 rounded-2xl p-4 mb-8 max-w-2xl mx-auto text-center"
                >
                  <h4 className="text-accent font-display font-black uppercase tracking-widest text-xs mb-1">Immediate Impact</h4>
                  <p className="text-sm text-gray-600 font-display font-medium leading-relaxed">
                    Your one-time gift provides immediate support for clinical screenings and sight-restoring surgeries for those in urgent need.
                  </p>
                </motion.div>
              )}
            </div>

            {/* 2. IMPACT-BASED DONATION TIERS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-10">
              {tiers.map((tier) => (
                <button
                  key={tier.amount}
                  onClick={() => setAmount(tier.amount)}
                  className={`p-4 md:p-6 rounded-3xl border-2 transition-all text-left flex flex-col gap-3 group ${
                    amount === tier.amount 
                    ? 'border-accent bg-accent/5 shadow-xl shadow-accent/10' 
                    : 'border-gray-100 hover:border-primary/20 hover:bg-gray-50'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className={`text-2xl md:text-3xl font-display font-black ${amount === tier.amount ? 'text-accent' : 'text-gray-900 group-hover:text-primary'}`}>
                      {tier.amount}
                    </span>
                    {amount === tier.amount && <CheckCircle2 className="w-6 h-6 text-accent" />}
                  </div>
                  <div>
                    <span className="block font-display font-black uppercase tracking-widest text-[11px] text-gray-400 mb-1">
                      {tier.title}
                    </span>
                    <p className="text-sm text-gray-600 font-display font-medium leading-normal">
                      {tier.outcome}
                    </p>
                  </div>
                </button>
              ))}
            </div>

            {/* 3. PROJECT-BASED GIVING */}
            <div className="mb-10 max-w-md mx-auto text-center">
              <label className="block font-display font-black uppercase tracking-widest text-[11px] text-gray-400 mb-2">
                Where would you like your impact to go?
              </label>
              <div className="relative">
                <select 
                  value={project}
                  onChange={(e) => setProject(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-4 py-4 font-display font-bold text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20 appearance-none cursor-pointer"
                >
                  <option>All Foresight Projects (Default)</option>
                  <option>Sumba Eye Program</option>
                  <option>Solomon Islands</option>
                  <option>Australian Project</option>
                </select>
                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none">
                   <ChevronDown className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            </div>

            {/* FINAL CTA & TRUST SIGNALS */}
            <div className="text-center">
              <a
                href="https://donorbox.org/foresight-australia-donate" target="_blank" rel="noopener noreferrer" className="w-full md:w-auto px-12 py-6 bg-[#ff751f] hover:bg-[#e6661a] text-white rounded-[1.5rem] font-display font-black uppercase tracking-widest text-sm transition-all transform hover:scale-105 shadow-2xl shadow-accent/40 flex items-center justify-center gap-4 mx-auto mb-4"
              >
                Donate Now <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
              </a>
              
              {/* 5. TRUST & CREDIBILITY */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10 opacity-50">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-gray-600" />
                  <span className="text-[10px] font-display font-black uppercase tracking-widest text-gray-600">Secure SSL Donation</span>
                </div>
                <div className="flex items-center gap-3">
                  <Heart className="w-5 h-5 text-gray-600" />
                  <span className="text-[10px] font-display font-black uppercase tracking-widest text-gray-600">Registered Charity</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-gray-600" />
                  <span className="text-[10px] font-display font-black uppercase tracking-widest text-gray-600">Tax Deductible</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Story */}
      <section className="py-10 md:py-14 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6">
          <div className="bg-primary/5 rounded-[3rem] p-6 md:p-14 border border-primary/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute inset-0 bg-accent/20 blur-[60px] rounded-full"></div>
                <img
                  src="/media/images/Cahara.png"
                  alt="Cahara's clear vision restored"
                  className="rounded-3xl shadow-2xl relative z-10 w-full object-cover aspect-square md:aspect-[4/5]"
                  loading="lazy"
                  width="800"
                  height="1000"
                  decoding="async"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <Quote className="w-16 h-16 text-primary/20 mb-8" />
                <h3 className="text-3xl md:text-5xl font-display font-extrabold text-gray-900 tracking-tight mb-6">
                  She couldn’t see the board. Now she can see her future.
                </h3>
                <div className="mb-8">
                  <p className="text-2xl md:text-3xl font-serif italic text-primary leading-relaxed">
                    "When I put on my glasses, I saw everything."
                  </p>
                </div>
                <p className="text-xl text-gray-600 font-display font-medium leading-relaxed mb-10">
                  Ten-year-old Cahara couldn't see the words on the board or her teacher's smile. A simple pair of glasses changed everything. Now, her world is clear, and her future is bright.
                </p>
                <div className="inline-block px-4 py-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                  <p className="text-primary font-display font-black text-sm uppercase tracking-widest">
                    Your support makes stories like this possible.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
