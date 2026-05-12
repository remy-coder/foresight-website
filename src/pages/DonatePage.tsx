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
      text: 'Since 1978, we have been dedicated to eradicating avoidable blindness through sustainable partnerships.'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Global Reach',
      text: 'Our impact spans across the Asia-Pacific region, from rural Australia to the remote islands of Indonesia.'
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'Sustainable Care',
      text: 'We don’t just provide surgery; we train local specialists and build infrastructure for long-term self-sufficiency.'
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
    <div className="bg-white min-h-screen">
      {/* 1. HERO SECTION */}
      <section className="pt-24 pb-12 md:pt-32 md:pb-20 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2070')] bg-cover bg-center opacity-20 brightness-[0.75]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary/80 to-primary"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-display font-extrabold mb-6 leading-[1.1] tracking-tighter">
              Restore Sight Today
            </h1>
            <p className="text-lg md:text-2xl text-secondary opacity-90 font-display font-medium leading-relaxed mb-8">
              Your donation directly supports life-changing eye care and sustainable local training programs across the Asia-Pacific.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 2. DONATION IMPACT SECTION */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-primary font-display font-black uppercase tracking-[0.3em] text-[11px] mb-4">The Power of Your Gift</h2>
            <h3 className="text-3xl md:text-5xl font-display font-extrabold text-gray-900 tracking-tight">How your support creates impact</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {tiers.map((tier, index) => (
              <motion.div
                key={tier.amount}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-[2rem] border border-gray-100 bg-gray-50/50 hover:bg-white hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="text-4xl font-display font-black text-primary mb-4 group-hover:scale-110 transition-transform origin-left">
                  {tier.amount}
                </div>
                <h4 className="font-display font-black uppercase tracking-widest text-xs text-gray-400 mb-3">{tier.title}</h4>
                <p className="text-gray-600 font-display font-medium leading-relaxed">
                  {tier.outcome}
                </p>
              </motion.div>
            ))}
          </div>

          {/* 3. DONATION ACTION */}
          <div className="max-w-xl mx-auto text-center">
            <a
              href="https://donorbox.org/foresight-australia-donate" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-4 px-12 py-6 bg-accent hover:bg-accent-dark text-white rounded-2xl font-display font-black uppercase tracking-widest text-sm transition-all transform hover:scale-105 shadow-2xl shadow-accent/40 mb-6"
            >
              Donate Now <ArrowRight className="w-5 h-5" />
            </a>
            <p className="text-sm text-gray-500 font-display font-medium mb-12">
              Your donation will be processed securely through Donorbox.
            </p>

            {/* 4. TRUST BADGES */}
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-primary" />
                <span className="text-[10px] font-display font-black uppercase tracking-widest text-gray-900">Secure SSL</span>
              </div>
              <div className="flex items-center gap-2">
                <Heart className="w-5 h-5 text-primary" />
                <span className="text-[10px] font-display font-black uppercase tracking-widest text-gray-900">Registered Charity</span>
              </div>
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-primary" />
                <span className="text-[10px] font-display font-black uppercase tracking-widest text-gray-900">Tax Deductible</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TRUST & TRANSPARENCY SECTION */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary rounded-[3rem] md:rounded-[5rem] p-8 md:p-20 text-white relative overflow-hidden shadow-3xl">
            <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[100px] -mr-20 -mt-20"></div>
            
            <div className="relative z-10">
              <div className="max-w-3xl mb-16">
                <h2 className="text-accent font-display font-black uppercase tracking-[0.3em] text-[11px] mb-6">Accountability</h2>
                <h3 className="text-3xl md:text-5xl font-display font-extrabold mb-8 tracking-tight">Trust & Transparency</h3>
                <p className="text-lg text-secondary/80 font-display font-medium leading-relaxed">
                  We are committed to the highest standards of financial accountability and program effectiveness. Every gift is an investment in a world where no one is needlessly blind.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16">
                {transparencyCards.map((card, i) => (
                  <div key={i} className="bg-white/5 backdrop-blur-md border border-white/10 p-8 rounded-3xl">
                    <div className="w-12 h-12 bg-accent rounded-2xl flex items-center justify-center text-white mb-6">
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
                  className="inline-flex items-center gap-3 text-xs font-display font-black uppercase tracking-widest text-white hover:text-accent transition-colors"
                >
                  View our Annual Reports and Policies for full transparency <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. DONATION FAQ SECTION */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/5 rounded-2xl mb-6 text-primary">
              <HelpCircle className="w-8 h-8" />
            </div>
            <h2 className="text-3xl md:text-5xl font-display font-extrabold text-gray-900 tracking-tight">Donation FAQ</h2>
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

          <div className="mt-16 text-center">
            <p className="text-gray-500 font-display font-medium mb-6">Still have questions about how your donation is used?</p>
            <button 
              onClick={() => onNavigate && onNavigate('contact')}
              className="text-primary font-display font-black uppercase tracking-widest text-xs hover:underline underline-offset-8"
            >
              Contact our team
            </button>
          </div>
        </div>
      </section>

      {/* Final Bottom CTA */}
      <section className="py-12 bg-primary text-white text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-2xl font-display font-extrabold mb-8 tracking-tight">Ready to make a difference?</h3>
          <a
            href="https://donorbox.org/foresight-australia-donate" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center gap-4 px-10 py-5 bg-accent hover:bg-accent-dark text-white rounded-xl font-display font-black uppercase tracking-widest text-xs transition-all shadow-xl"
          >
            Donate Today <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </section>
    </div>
  );
}
