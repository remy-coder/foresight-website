import { motion } from 'motion/react';
import { Award, Quote, CheckCircle2, Target, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';

interface AboutPageProps {
  onNavigate?: (id: string) => void;
}

export default function AboutPage({ onNavigate }: AboutPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-10 pb-8 md:pt-14 md:pb-10 bg-[#FAFAFA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6">

        {/* Intro */}
        <section className="mb-12 md:mb-16 mt-6">
          <div className="bg-white rounded-[2.5rem] p-4 md:p-8 border border-gray-100 shadow-xl overflow-hidden relative">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
              <div className="order-2 lg:order-1 relative z-10">
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[11px] font-black uppercase tracking-[0.2em] mb-4"
                >
                  <Award className="w-4 h-4 fill-primary/20" />
                  <span>Our Foundation</span>
                </motion.div>

                <Quote className="w-12 h-12 md:w-16 md:h-16 text-primary/20 mb-6 md:mb-8" />
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-2xl sm:text-3xl md:text-4xl font-display font-extrabold mb-8 leading-[1.1] tracking-tight text-gray-900"
                >
                  "Restoring someone’s sight means not only giving them the chance to regain their vision, but also being able to live a better life as a result."
                </motion.h1>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  <h3 className="text-lg md:text-xl font-display font-extrabold text-primary mb-3">Professor Frank Billson AO</h3>
                  <p className="text-base md:text-lg text-gray-500 leading-relaxed font-display font-medium">
                    Foresight Australia was founded by Professor Frank Billson AO and Major General Paul Cullen AC. For more than four decades, we have worked to prevent avoidable blindness through sustainable eye care and local skills transfer.
                  </p>
                </motion.div>
              </div>
              <div className="order-1 lg:order-2 relative">
                <div className="absolute inset-0 bg-primary/10 blur-[80px] rounded-full"></div>
                <img 
                  src="/media/images/Profpicture.png" 
                  alt="Professor Frank Billson AO" 
                  className="relative rounded-3xl shadow-2xl z-10 w-full object-cover aspect-square md:aspect-[4/5]" 
                  loading="lazy"
                  width="800"
                  height="1000"
                  decoding="async"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <div id="mission" className="grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-14 mb-12 md:mb-16">
          <motion.div
            whileHover={{ y: -10 }}
            className="lg:col-span-7 bg-[#0F172A] p-6 md:p-12 rounded-3xl md:rounded-[3rem] text-white relative overflow-hidden group shadow-2xl"
          >
            <div className="absolute inset-0 z-0">
              <img 
                src="/media/images/mission picture.png" 
                alt="" 
                className="w-full h-full object-cover opacity-10 group-hover:opacity-20 transition-opacity duration-700" 
                loading="lazy"
                width="1200"
                height="800"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-[#0F172A] via-transparent to-[#0F172A]/90"></div>
            </div>
            <div className="relative z-10">
              <p className="text-2xl md:text-4xl font-display font-extrabold leading-[1.1] tracking-tight mb-10">
                To prevent avoidable blindness and restore sight through sustainable eye care.
              </p>
              <ul className="space-y-4 text-gray-400 font-display font-medium text-base md:text-lg">
                {[
                  'Prevent avoidable blindness through early intervention.',
                  'Establish sustainable eye care systems in underserved regions.',
                  'Provide clinical training and long-term partnerships.',
                  'Create long-term impact for local communities.'
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 bg-white/10 p-1.5 rounded-full"><CheckCircle2 className="w-5 h-5 text-white" /></div>
                    <span className="leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <div className="lg:col-span-5 flex flex-col gap-8 md:gap-12">
            <div className="p-8 md:p-12 rounded-3xl md:rounded-[4rem] bg-white border border-gray-100 shadow-xl flex-1 flex flex-col justify-center transform transition-transform hover:-translate-y-2">
              <h2 className="text-gray-400 font-display font-black uppercase tracking-[0.3em] text-[11px] mb-3 md:mb-8">Our Vision</h2>
              <p className="text-2xl md:text-4xl font-display font-extrabold text-gray-900 leading-tight tracking-tight">
                A world where everyone has access to quality eye care.
              </p>
            </div>

            <div className="p-8 md:p-12 rounded-3xl md:rounded-[4rem] bg-gradient-to-br from-primary to-secondary text-white shadow-xl flex-1 flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
              <h2 className="text-white/60 font-display font-black uppercase tracking-[0.3em] text-[11px] mb-4 relative z-10">Our Philosophy</h2>
              <div className="grid grid-cols-2 gap-4 relative z-10">
                {['Integrated Systems', 'Sustainable Funding', 'Equitable Access', 'Clinical Excellence'].map((item, i) => (
                  <div key={i} className="flex flex-col gap-3 p-5 bg-white/10 backdrop-blur-sm rounded-2xl transition-all group-hover:bg-white/20">
                    <Target className="w-6 h-6 text-accent" />
                    <span className="font-display font-black text-white uppercase tracking-widest text-[11px]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Objectives Section */}
        <div id="objectives" className="mb-12 md:mb-16">
          <div className="bg-white p-6 md:p-12 rounded-3xl md:rounded-[3rem] border border-gray-100 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-bl-full -mr-10 -mt-10"></div>
            <div className="relative z-10">
              <h2 className="text-primary font-display font-extrabold tracking-[0.3em] text-[11px] uppercase mb-5">Our Objectives</h2>
              <div className="space-y-10">
                {[
                  "To alleviate poverty and create an environment that allows the CURE and PREVENTION of blindness through skills transfer.",
                  "To provide capacity building, education and skills transfer for ophthalmologists, eye care workers and managers through sustainable programs tailored to a country’s need.",
                  "To EMPOWER communities and promote partnerships with low-income countries, ensuring a sense of ownership by the people of that country.",
                  "To respond to the special problems of childhood blindness where critical periods of childhood development determine the degree to which the vision can be restored.",
                  "To seek solutions that address blindness and poverty, acknowledging that blindness is a cause and a consequence of poverty."
                ].map((objective, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="flex-shrink-0 w-10 h-10 rounded-2xl bg-primary/5 flex items-center justify-center text-primary font-display font-black group-hover:bg-primary group-hover:text-white transition-all text-sm">
                      {i + 1}
                    </div>
                    <p className="text-base md:text-lg text-gray-700 leading-relaxed font-display font-medium">
                      {objective}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Video Section */}
        <div id="media" className="mb-12 md:mb-16">
          <div className="text-center mb-8">
            <h3 className="text-xl md:text-2xl font-display font-extrabold text-gray-900 mb-4">Learn more about our work and impact</h3>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 1 }}
            className="max-w-5xl mx-auto rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-3xl bg-gray-900 border border-gray-100/50"
          >
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/_qdGwyvpziY"
                title="Foresight Australia Impact"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </div>

        {/* About Page CTA */}
        <div className="mt-16 md:mt-24 text-center pb-8">
          <div className="max-w-3xl mx-auto px-4">
            <h3 className="text-xl md:text-3xl font-display font-extrabold text-gray-900 mb-6 tracking-tight">Support our global mission</h3>
            <p className="text-gray-500 font-display font-medium text-base md:text-lg mb-8">
              Join the thousands who are making sight restoration possible in communities that need it most.
            </p>
            <button
              onClick={() => onNavigate && onNavigate('donate')}
              className="px-8 py-5 bg-accent hover:bg-accent-dark text-white rounded-2xl font-display font-black uppercase tracking-widest text-xs transition-all transform hover:scale-105 shadow-2xl shadow-accent/40 flex items-center justify-center gap-4 mx-auto"
            >
              Restore sight today <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
