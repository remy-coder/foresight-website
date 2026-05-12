import { motion } from 'motion/react';
import { Users, Globe, Heart, ArrowRight } from 'lucide-react';

interface GetInvolvedPageProps {
  onNavigate?: (id: string) => void;
}

export default function GetInvolvedPage({ onNavigate }: GetInvolvedPageProps) {
  const handleAction = (item: any) => {
    if (item.id === 'volunteer') {
      onNavigate && onNavigate('volunteer');
    } else if (item.id === 'partner') {
      onNavigate && onNavigate('partner');
    } else if (item.id === 'donate') {
      onNavigate && onNavigate('donate');
    }
  };

  const handleLegacyRequest = () => {
    onNavigate && onNavigate('legacy-giving');
  };

  return (
    <div className="pt-14 pb-8 md:pt-20 md:pb-14 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6">
        <div className="max-w-5xl mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-black uppercase tracking-[0.2em] mb-4"
          >
            <span>Get Involved</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold mb-6 md:mb-8 leading-[1.1] md:leading-[0.95] tracking-tighter"
          >
            Join the <span className="text-primary">Mission</span>. <br />Make a Difference.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-gray-500 leading-relaxed font-display font-medium max-w-3xl"
          >
            Join us in our mission to eliminate avoidable blindness. We offer several pathways for involvement, from professional volunteering to strategic partnerships.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-12 md:mb-16">
          <div className="col-span-full mb-6 md:mb-8">
            <h2 className="text-primary font-display font-black tracking-[0.3em] text-[11px] uppercase mb-2 md:mb-6">Get Involved</h2>
            <h3 className="text-xl md:text-3xl font-display font-extrabold text-gray-900 tracking-tight">Ways You Can Help</h3>
          </div>
          {[
            {
              title: 'Volunteer',
              icon: <Users className="w-8 h-8" />,
              desc: 'Contribute your skills to our clinical missions or support our administrative operations in Australia.',
              action: 'Apply Now',
              color: 'bg-primary',
              id: 'volunteer'
            },
            {
              title: 'Partner',
              icon: <Globe className="w-8 h-8" />,
              desc: 'We collaborate with governments and NGOs to implement sustainable eye health infrastructure.',
              action: 'Become a Partner',
              color: 'bg-accent',
              id: 'partner'
            },
            {
              title: 'Donate',
              icon: <Heart className="w-8 h-8" />,
              desc: 'Your financial contributions directly fund diagnostic screenings, corrective eyewear, and surgeries.',
              action: 'Donate Today',
              color: 'bg-accent',
              id: 'donate'
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -20 }}
              transition={{ delay: i * 0.1 }}
              className="p-4 md:p-8 bg-white rounded-3xl md:rounded-[3rem] border border-gray-100 shadow-xl hover:shadow-3xl transition-all duration-700 group"
            >
              <div className={`${item.color} p-4 md:p-5 rounded-2xl md:rounded-[1.5rem] w-fit mb-6 md:mb-8 text-white group-hover:rotate-12 transition-transform duration-500 shadow-lg`}>
                {item.icon}
              </div>
              <h3 className="text-xl md:text-2xl font-display font-extrabold mb-3 md:mb-4 text-gray-900 tracking-tight">{item.title}</h3>
              <p className="text-sm md:text-lg text-gray-500 mb-6 md:mb-8 leading-relaxed font-display font-medium">{item.desc}</p>
              <button 
                onClick={() => handleAction(item)}
                className="mt-auto font-display font-black text-primary uppercase tracking-[0.2em] text-xs flex items-center gap-3 group-hover:gap-5 transition-all"
              >
                {item.action} <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
              </button>
            </motion.div>
          ))}
        </div>

        <div className="relative rounded-3xl md:rounded-[4rem] overflow-hidden bg-gray-900 p-8 md:p-16 text-white shadow-3xl mb-12 md:mb-16">
          <div className="absolute inset-0 opacity-40">
            <img
              src="https://images.unsplash.com/photo-1516841273335-e39b37888115?q=80&w=2047&auto=format&fit=crop"
              alt="Legacy giving"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
              loading="lazy"
              width="1200"
              height="800"
              decoding="async"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
          <div className="relative z-10 max-w-3xl">
            <h2 className="text-accent font-display font-extrabold tracking-[0.3em] text-xs uppercase mb-3 md:mb-8">Legacy Giving</h2>
            <h3 className="text-xl md:text-3xl font-display font-extrabold mb-6 md:mb-8 leading-[1.1] tracking-tight">A gift that ensures a lasting legacy.</h3>
            <p className="text-base md:text-lg text-gray-300 mb-8 md:mb-10 leading-relaxed font-display font-medium">
              By including a gift in your Will, you ensure that Foresight Australia can continue its vital work in the prevention of blindness for generations to come.
            </p>
            <button 
              onClick={handleLegacyRequest}
              className="px-6 py-4 md:px-8 md:py-5 bg-white text-gray-900 rounded-2xl font-display font-black uppercase tracking-widest text-xs transition-all transform hover:scale-105"
            >
              Request Information Pack
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
