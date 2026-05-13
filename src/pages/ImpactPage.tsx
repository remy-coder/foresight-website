import { motion } from 'motion/react';
import { Quote, MapPin, ArrowRight } from 'lucide-react';

interface ImpactPageProps {
  onNavigate?: (id: string) => void;
}

export default function ImpactPage({ onNavigate }: ImpactPageProps) {
  return (
    <div className="pt-24 pb-8 md:pt-32 md:pb-14 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6">
        <div className="max-w-4xl mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-black uppercase tracking-[0.2em] mb-4"
          >
            <span>Measurable Change</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold mb-6 md:mb-8 leading-[1.1] md:leading-[0.95] tracking-tighter"
          >
            Our Shared <span className="text-primary">Impact</span>. <br />Numbers & Stories.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-gray-500 leading-relaxed font-display font-medium max-w-3xl"
          >
            Every screening, every pair of glasses, and every surgery represents a life transformed. We track our progress with rigorous data and factual reports to ensure accountability.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-accent font-display font-extrabold tracking-[0.3em] text-xs uppercase mb-3">Success Story</h2>
            <h3 className="text-xl md:text-3xl font-display font-extrabold text-gray-900 mb-6 md:mb-8 leading-[1.1] tracking-tight">Cahara's Clarity</h3>
            <div className="bg-primary/5 p-6 md:p-8 rounded-3xl md:rounded-[3rem] relative shadow-xl border border-primary/10">
              <Quote className="w-10 h-10 md:w-12 md:h-12 text-primary/10 absolute top-4 right-4 md:top-8 md:right-8" />
              <p className="text-base md:text-xl text-gray-700 leading-relaxed italic font-display font-extrabold mb-6 md:mb-10 relative z-10 tracking-tight">
                "I couldn’t see the blackboard at school, even from the front row. I was scared to sing because I couldn’t read the lyrics, and I thought something was wrong with me."
              </p>
              <p className="text-base md:text-lg text-gray-500 leading-relaxed mb-6 md:mb-10 font-display font-medium">
                Ten-year-old Cahara from Sumba was diagnosed with severe myopia. Within minutes, she was fitted with corrective lenses. "When I put them on, I saw everything clearly—the trees, my teacher’s smile, and the words on the chalkboard."
              </p>
              <div className="font-display font-black text-primary uppercase tracking-[0.2em] text-xs">— Cahara, Sumba, Indonesia</div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute -inset-10 bg-primary/5 blur-[120px] rounded-full"></div>
            <img
              src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2070&auto=format&fit=crop"
              alt="Cahara with glasses"
              className="relative rounded-3xl md:rounded-[4rem] shadow-3xl w-full aspect-square object-cover"
              referrerPolicy="no-referrer"
              loading="lazy"
              width="800"
              height="800"
              decoding="async"
            />
            <div className="absolute -bottom-10 -right-10 glass p-4 md:p-8 rounded-[2rem] shadow-2xl">
              <div className="text-2xl md:text-4xl font-display font-black text-primary tracking-tighter">100%</div>
              <div className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em]">Vision Restored</div>
            </div>
          </motion.div>
        </div>

        <div className="bg-[#0F172A] p-8 md:p-16 rounded-3xl md:rounded-[4rem] text-white relative overflow-hidden shadow-3xl mb-16 md:mb-24">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[160px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 blur-[120px] rounded-full"></div>
          <h2 className="text-primary font-display font-extrabold tracking-[0.3em] text-xs uppercase mb-4 md:mb-12 text-center">Global Statistics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-16 relative z-10">
            {[
              { val: '80%', desc: 'Of global blindness is preventable or treatable with existing medical interventions.' },
              { val: '94%', desc: 'Of vision loss for Aboriginal adults is preventable through early detection.' },
              { val: '285M', desc: 'People are blind or vision impaired globally, requiring urgent eye care services.' }
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="text-3xl md:text-5xl font-display font-black text-primary mb-3 md:mb-6 tracking-tighter group-hover:scale-110 transition-transform duration-500">{stat.val}</div>
                <p className="text-gray-400 text-base md:text-lg font-display font-medium leading-relaxed max-w-[200px] mx-auto">{stat.desc}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Patient Stories Section */}
        <div className="mb-16 md:mb-24">
          <div className="max-w-5xl mx-auto text-center mb-10 md:mb-16">
            <h2 className="text-primary font-display font-extrabold tracking-[0.3em] text-[11px] uppercase mb-2">Real Impact</h2>
            <h3 className="text-xl md:text-3xl font-display font-extrabold text-gray-900 tracking-tight">Patient Stories</h3>
            <p className="text-base md:text-lg text-gray-500 font-display font-medium leading-relaxed mt-4 max-w-2xl mx-auto">
              Behind every statistic is a human life transformed by the power of restored vision. Read their inspiring journeys.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {[
              {
                name: 'Cahara',
                location: 'Sumba, Indonesia',
                image: '/media/images/Cahara.png',
                story: 'Ten-year-old Cahara was diagnosed with severe myopia. With her new glasses, her vision was instantly restored, allowing her to see the blackboard and thrive in school.'
              },
              {
                name: 'Kristin',
                location: 'Solomon Islands',
                image: '/media/images/Kristin.png',
                story: 'Thanks to timely medical intervention, Kristin received the life-changing treatment she needed, restoring her sight and opening up a brighter future.'
              },
              {
                name: 'Richard',
                location: 'Philippines',
                image: '/media/images/Richard.png',
                story: 'Richard regained his independence after a successful sight-restoring surgery. He can now fully support his family and enjoy his everyday life.'
              },
              {
                name: 'Keirwin',
                location: 'Philippines',
                image: '/media/images/Keirwin.png',
                story: 'A targeted clinical procedure changed Keirwin\'s life forever. With clear vision, he is back to learning, playing, and engaging with his community.'
              },
              {
                name: 'Andre',
                location: 'Sumba, Indonesia',
                image: '/media/images/Andre.png',
                story: 'Andre\'s journey to clear sight was made possible through the Sumba Eye Program. He now looks forward to a fulfilling life without the burden of vision loss.'
              }
            ].map((patient, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative bg-white rounded-3xl md:rounded-[2rem] overflow-hidden border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={patient.image}
                    alt={`${patient.name}'s story`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                    width="600"
                    height="450"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/10 to-transparent opacity-60"></div>
                  <div className="absolute bottom-6 left-6 text-white text-left z-10">
                    <h4 className="text-2xl font-display font-extrabold mb-1">{patient.name}</h4>
                    <div className="text-[11px] font-black uppercase tracking-[0.2em] text-primary">{patient.location}</div>
                  </div>
                </div>
                <div className="p-4 md:p-6 flex-grow flex flex-col bg-white">
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed font-display font-medium mb-4 flex-grow">
                    {patient.story}
                  </p>
                  <button onClick={() => onNavigate && onNavigate(`story-${patient.name.toLowerCase()}`)} className="text-xs font-display font-black text-primary uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all w-fit">
                    Read {patient.name}'s Story <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="text-center mt-12 md:mt-20">
          <button
            onClick={() => onNavigate && onNavigate('donate')}
            className="px-8 py-6 bg-accent hover:bg-orange-600 text-white rounded-2xl font-display font-black uppercase tracking-widest text-sm transition-all transform hover:scale-105 shadow-2xl shadow-accent/40 flex items-center justify-center gap-4 mx-auto"
          >
            Donate Now To Save Sight <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
