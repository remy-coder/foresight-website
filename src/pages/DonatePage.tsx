import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  Heart, 
  Award, 
  ChevronDown, 
  HelpCircle, 
  Globe, 
  History, 
  Zap 
} from 'lucide-react';

interface DonatePageProps {
  onNavigate?: (id: string) => void;
}

export default function DonatePage({ onNavigate }: DonatePageProps) {
  const [amount, setAmount] = useState<string | null>(null);
  const [frequency, setFrequency] = useState<'single' | 'monthly'>('single');
  const [project, setProject] = useState('All Foresight Projects');
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const tiers = [
    { amount: '$35', title: 'The First Step', outcome: 'Provide a comprehensive eye screening for a child or adult in a remote community.' },
    { amount: '$150', title: 'The Gift of Sight', outcome: 'Fund a cataract surgery and restore someone’s vision in under 30 minutes.' },
    { amount: '$500', title: 'Train a Healer', outcome: 'Support the training of a local nurse or clinician, creating long-term impact.' },
    { amount: '$2,500', title: 'Equip a Clinic', outcome: 'Help provide essential equipment to deliver ongoing eye care services.' }
  ];

  const transparencyCards = [
    {
      icon: <History className="w-6 h-6" />,
      title: 'Over 40 Years',
      text: 'Of dedicated medical impact and sight restoration.'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Global Reach',
      text: 'Active programs across multiple high-need countries.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Sustainable Care',
      text: 'Commitment to training locals and capacity building.'
    }
  ];

  const faqs = [
    {
      question: 'Is my donation tax deductible?',
      answer: 'Yes. Foresight Australia is a registered Australian charity with Deductible Gift Recipient (DGR) status. Donations over $2 are tax deductible for Australian residents.'
    },
    {
      question: 'Where does my money go?',
      answer: 'Your funds directly support clinical outreach missions, specialist training for local doctors and nurses, and the provision of essential ophthalmic equipment to underserved regions.'
    },
    {
      question: 'Can I donate monthly?',
      answer: 'Absolutely. Monthly giving provides us with the consistent support needed to plan long-term surgical missions and educational programs. You can select the "Monthly" option on our Donorbox page.'
    },
    {
      question: 'How is Foresight different?',
      answer: 'We focus on "skills transfer" and sustainability. Instead of just performing surgeries, we equip and train local communities to provide their own eye care for generations to come.'
    }
  ];

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2070')] bg-cover bg-center opacity-30 brightness-[0.75]"></div>
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-extrabold mb-6 leading-[1.1] tracking-tighter">
              Restore Sight Today
            </h1>
            <p className="text-lg md:text-2xl text-secondary opacity-90 font-display font-medium leading-relaxed mb-6">
              Your donation directly supports life-changing eye care and sustainable local training programs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. DONATION PANEL (OVERLAPPING) */}
      <section className="py-8 md:py-10 bg-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-[2.5rem] shadow-3xl border border-gray-100 p-6 md:p-12 relative z-10 -mt-20 md:-mt-24">
            
            {/* A. MONTHLY / ONE-TIME TOGGLE */}
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
              
              {/* B. IMMEDIATE IMPACT BOX */}
              <motion.div
                key={frequency}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className={`rounded-2xl p-6 mb-8 max-w-2xl mx-auto text-center ${frequency === 'monthly' ? 'bg-primary/5 border border-primary/10' : 'bg-accent/5 border border-accent/10'}`}
              >
                <h4 className={`font-display font-black uppercase tracking-widest text-xs mb-2 ${frequency === 'monthly' ? 'text-primary' : 'text-accent'}`}>
                  {frequency === 'monthly' ? 'Join The Visionaries' : 'Immediate Impact'}
                </h4>
                <p className="text-sm text-gray-600 font-display font-medium leading-relaxed">
                  {frequency === 'monthly' 
                    ? 'Eradicating avoidable blindness takes consistent, long-term effort. By becoming a monthly supporter, you help us plan surgical missions and build sustainable systems.'
                    : 'Your one-time gift provides immediate support for clinical screenings and sight-restoring surgeries for those in urgent need.'
                  }
                </p>
              </motion.div>
            </div>

            {/* C. DONATION IMPACT CARDS */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-10">
              {tiers.map((tier) => (
                <button
                  key={tier.amount}
                  onClick={() => setAmount(tier.amount)}
                  className={`p-6 rounded-3xl border-2 transition-all text-left flex flex-col gap-3 group ${
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

            {/* D. PROJECT / IMPACT DROPDOWN */}
            <div className="mb-12 max-w-md mx-auto text-center">
              <label className="block font-display font-black uppercase tracking-widest text-[11px] text-gray-400 mb-4">
                WHERE WOULD YOU LIKE YOUR IMPACT TO GO?
              </label>
              <div className="relative">
                <select 
                  value={project}
                  onChange={(e) => setProject(e.target.value)}
                  className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 font-display font-bold text-gray-700 focus:outline-none focus:ring-2 focus:ring-primary/20 appearance-none cursor-pointer"
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

            {/* E. DONATE NOW BUTTON */}
            <div className="text-center">
              <p className="text-sm text-gray-500 font-display font-medium mb-4">
                Your donation will be processed securely through Donorbox.
              </p>
              <a
                href="https://donorbox.org/foresight-australia-donate" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-full md:w-auto px-12 py-6 bg-[#ff751f] hover:bg-[#e6661a] text-white rounded-[1.5rem] font-display font-black uppercase tracking-widest text-sm transition-all transform hover:scale-105 shadow-2xl shadow-accent/40 flex items-center justify-center gap-4 mx-auto mb-8"
              >
                DONATE NOW <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-2" />
              </a>
              
              {/* F. TRUST BADGES */}
              <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60">
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

      {/* 3. TRUST & TRANSPARENCY SECTION */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#002d62] rounded-[3rem] md:rounded-[5rem] p-8 md:p-20 text-white relative overflow-hidden shadow-3xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] -mr-20 -mt-20"></div>
            
            <div className="relative z-10">
              <div className="max-w-3xl mb-16">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-white/10 rounded-2xl mb-6">
                  <ShieldCheck className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-3xl md:text-5xl font-display font-extrabold mb-8 tracking-tight">Trust & Transparency</h3>
                <p className="text-lg text-secondary/80 font-display font-medium leading-relaxed">
                  We are committed to the highest standards of financial accountability and program effectiveness. View our Annual Reports and Policies for full transparency.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16">
                {transparencyCards.map((card, i) => (
                  <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl">
                    <div className="w-12 h-12 bg-accent/20 rounded-2xl flex items-center justify-center text-accent mb-6">
                      {card.icon}
                    </div>
                    <h4 className="text-xl font-display font-extrabold mb-4">{card.title}</h4>
                    <p className="text-secondary/70 font-display font-medium text-sm leading-relaxed">
                      {card.text}
                    </p>
                  </div>
                ))}
              </div>

              <div className="text-center pt-8 border-t border-white/10">
                <button 
                  onClick={() => onNavigate && onNavigate('reports-policies')}
                  className="px-8 py-5 bg-white text-primary rounded-xl font-display font-black uppercase tracking-widest text-[11px] hover:bg-accent hover:text-white transition-all transform hover:scale-105"
                >
                  Read Reports & Policies
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. DONATION FAQ SECTION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/5 rounded-2xl mb-6 text-primary">
              <HelpCircle className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-gray-900 tracking-tight">Donation FAQ</h2>
            <p className="text-gray-500 font-display font-medium mt-4 uppercase tracking-widest text-xs">Common Questions</p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border border-gray-100 rounded-2xl overflow-hidden bg-gray-50/30 transition-all"
              >
                <button
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
                >
                  <span className="text-lg font-display font-bold text-gray-900">{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-primary transition-transform duration-300 ${activeFaq === index ? 'rotate-180' : ''}`} />
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: activeFaq === index ? 'auto' : 0, opacity: activeFaq === index ? 1 : 0 }}
                  className="overflow-hidden"
                >
                  <div className="px-8 pb-8 text-gray-600 font-display font-medium leading-relaxed">
                    {faq.answer}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
