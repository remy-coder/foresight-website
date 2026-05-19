import { motion } from 'motion/react';
import { ArrowRight, Award, Target, Heart, Activity, Users, ShieldCheck, Quote, Globe } from 'lucide-react';
import { IMPACT_STATS, PROJECTS, PARTNERS } from '../constants';

interface HomePageProps {
  onNavigate: (id: string) => void;
}

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[55vh] flex items-center pt-24 md:pt-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/media/images/home-hero-sumba-consultation.png"
            alt="Eye care clinic"
            className="w-full h-full object-cover object-center brightness-75"
            referrerPolicy="no-referrer"
            fetchPriority="high"
            decoding="async"
            width="1920"
            height="1080"
          />
          <div className="absolute inset-0 bg-black/30"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6 relative z-10 w-full py-8 md:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center mt-24 md:mt-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-12 text-white"
            >
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-display font-extrabold leading-[1.1] md:leading-[0.95] mb-8 md:mb-10 text-balance tracking-tighter shadow-sm">
                Restoring <span className="text-secondary">Sight</span>.<br />
                Changing <span className="italic font-serif text-secondary opacity-80">Lives</span>.
              </h1>

              <p className="text-lg md:text-2xl text-gray-200 mb-10 md:mb-14 leading-relaxed max-w-3xl font-display font-medium">
                Delivering sustainable eye care to underserved communities in Australia, Indonesia, and the Pacific.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 md:gap-8">
                <button
                  onClick={() => onNavigate('donate')}
                  className="w-full sm:w-auto px-8 py-6 bg-accent hover:bg-accent-dark text-white rounded-2xl font-display font-black uppercase tracking-widest text-xs transition-all transform hover:scale-105 shadow-2xl shadow-accent/40 flex items-center justify-center gap-4"
                >
                  Donate Now <ArrowRight className="w-6 h-6" />
                </button>
                <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8">
                  <button
                    onClick={() => onNavigate('impact')}
                    className="w-full sm:w-auto px-8 py-6 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-2xl font-display font-black uppercase tracking-widest text-xs transition-all backdrop-blur-xl flex items-center justify-center group"
                  >
                    Explore Our Impact <ArrowRight className="w-5 h-5 ml-4 group-hover:translate-x-2 transition-transform" />
                  </button>
                  <img
                    src="/media/images/40 years logo.png"
                    alt="40 Years of Foresight"
                    className="h-12 md:h-16 w-auto drop-shadow-2xl object-contain brightness-0 invert opacity-90"
                    width="200"
                    height="64"
                    loading="eager"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Official History & Philosophy - The Foresight Model */}
      <section id="foresight-model" className="py-12 md:py-16 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16 md:mb-20">
            <h2 className="text-primary font-display font-extrabold tracking-[0.3em] text-[11px] uppercase mb-3 flex items-center justify-center gap-4">
              <span className="w-12 h-px bg-primary/20"></span> Official History & Philosophy <span className="w-12 h-px bg-primary/20"></span>
            </h2>
            <h3 className="text-3xl md:text-5xl font-display font-extrabold text-gray-900 tracking-tighter leading-[1.05]">The Foresight Model</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {[
              { 
                title: 'The Foundation', 
                desc: 'Established in 1977 by Prof. Frank Billson AO and Gen. Paul Cullen AC to address blindness in Bangladesh.',
                icon: <Award className="w-6 h-6" />
              },
              { 
                title: 'The Philosophy', 
                desc: 'A ‘grassroots up’ model focused on sustainable skills transfer rather than temporary aid, fostering long-term clinical independence.',
                icon: <Target className="w-6 h-6" />
              },
              { 
                title: 'The Mission', 
                desc: 'To prevent and cure avoidable blindness through sustainable development and equitable access for all underserved populations.',
                icon: <Heart className="w-6 h-6" />
              }
            ].map((model, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: i * 0.1 }}
                className="p-8 bg-white rounded-3xl border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 group"
              >
                <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                  {model.icon}
                </div>
                <h4 className="text-2xl font-display font-extrabold text-gray-900 mb-4 tracking-tight">{model.title}</h4>
                <p className="text-gray-500 text-lg leading-relaxed font-display font-medium">
                  {model.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3-Pillar Section */}
      <section className="py-6 md:py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-[2.5rem] p-8 md:p-8 border border-gray-100 flex flex-col h-full hover:shadow-2xl transition-all duration-500 text-center group"
            >
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 mx-auto group-hover:scale-110 transition-transform duration-500 group-hover:bg-primary group-hover:text-white">
                <Activity className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-display font-extrabold text-gray-900 mb-3">Surgical Care</h3>
              <p className="text-primary font-display font-black uppercase tracking-widest text-[11px] mb-3">Direct Impact</p>
              <p className="text-gray-500 font-display font-medium leading-relaxed flex-1 text-lg">
                Providing life-changing procedures to those who need them most, restoring sight and autonomy immediately.
              </p>
            </motion.div>

            {/* Pillar 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gray-50 rounded-[2.5rem] p-8 md:p-8 border border-gray-100 flex flex-col h-full hover:shadow-2xl transition-all duration-500 text-center group"
            >
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 mx-auto group-hover:scale-110 transition-transform duration-500 group-hover:bg-primary group-hover:text-white">
                <Users className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-display font-extrabold text-gray-900 mb-3">Training & Education</h3>
              <p className="text-primary font-display font-black uppercase tracking-widest text-[11px] mb-3">Sustainable Impact</p>
              <p className="text-gray-500 font-display font-medium leading-relaxed flex-1 text-lg">
                Empowering local medical professionals with the skills they need to establish long-term care systems.
              </p>
            </motion.div>

            {/* Pillar 3 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 rounded-[2.5rem] p-8 md:p-8 border border-gray-100 flex flex-col h-full hover:shadow-2xl transition-all duration-500 text-center group"
            >
              <div className="w-20 h-20 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-8 mx-auto group-hover:scale-110 transition-transform duration-500 group-hover:bg-primary group-hover:text-white">
                <ShieldCheck className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-display font-extrabold text-gray-900 mb-3">Infrastructure</h3>

              <p className="text-primary font-display font-black uppercase tracking-widest text-[11px] mb-3">Long-Term Impact</p>
              <p className="text-gray-500 font-display font-medium leading-relaxed flex-1 text-lg">
                Building and equipping specialized eye care facilities to serve communities for generations to come.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Andre Story Section */}
      <section className="py-6 md:py-8 bg-white">
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
                  src="/media/images/Andre.png"
                  alt="Andre"
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
                  "I never expected to see the colors of my village again."
                </h3>
                <p className="text-xl text-gray-600 font-display font-medium leading-relaxed mb-10">
                  Andre watched his world steadily fade to complete darkness. Thanks to a short, specialized procedure, the debilitating barrier to his sight was removed. He received not just medical treatment, but compassionate care.
                </p>
                <button
                  onClick={() => onNavigate('impact')}
                  className="px-6 py-5 bg-white rounded-2xl shadow-sm border border-gray-100 mb-4 text-primary font-display font-black text-xs uppercase tracking-widest hover:shadow-md transition-all flex items-center gap-3"
                >
                  Read more stories <ArrowRight className="w-4 h-4" />
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section - Bento Style */}
      <section className="py-8 md:py-10 bg-[#FAFAFA] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 items-end mb-12 md:mb-16">
            <div className="max-w-2xl">
              <h2 className="text-primary font-display font-extrabold tracking-[0.3em] text-[11px] uppercase mb-2">Our Impact (2025)</h2>
              <h3 className="text-2xl md:text-3xl font-display font-extrabold text-gray-900 leading-[1.1] tracking-tight">Measurable outcomes in sustainable eye care.</h3>
            </div>
            <p className="text-base md:text-lg text-gray-500 font-display font-medium leading-relaxed">
              We track our progress with rigorous data and factual reports, ensuring every contribution supports life-changing treatment and sustainable healthcare infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {IMPACT_STATS.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="p-6 md:p-10 rounded-3xl md:rounded-5xl border border-gray-100 flex flex-col items-center text-center transition-all duration-500 shadow-sm hover:shadow-2xl bg-white"
              >
                <div className="text-3xl md:text-6xl font-display font-black text-primary mb-4 md:mb-6 tracking-tighter">{stat.value}</div>
                <div className="text-[11px] md:text-xs font-display font-black text-gray-400 uppercase tracking-[0.2em] leading-tight">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-8 md:py-10 bg-[#0F172A] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[160px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-accent/5 blur-[120px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-32 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
                {[
                  { icon: <Globe className="w-8 h-8" />, title: "Global Reach", desc: "Active in Indonesia, Bangladesh, and regional Australia, addressing local eye health needs." },
                  { icon: <Users className="w-8 h-8" />, title: "Local Empowerment", desc: "Training local health workers to ensure long-term clinical sustainability." },
                  { icon: <Heart className="w-8 h-8" />, title: "Humanitarian Mission", desc: "Committed to preventing and curing avoidable blindness in underserved communities." },
                  { icon: <Award className="w-8 h-8" />, title: "Clinical Excellence", desc: "Maintaining the highest standards of ophthalmic care and surgical outcomes." }
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 md:p-8 rounded-3xl md:rounded-4xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 group"
                  >
                    <div className="bg-primary/10 p-4 md:p-5 rounded-2xl w-fit mb-6 md:mb-8 group-hover:bg-primary transition-all duration-300 group-hover:scale-110">
                      {feature.icon}
                    </div>
                    <h4 className="text-xl md:text-2xl font-display font-extrabold mb-4">{feature.title}</h4>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-display font-medium">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2 relative p-6 md:p-10 rounded-[2.5rem] overflow-hidden group"
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
                <h2 className="text-accent font-display font-extrabold tracking-[0.3em] text-[11px] uppercase mb-3">Our Mission</h2>
                <h3 className="text-2xl md:text-4xl font-display font-extrabold mb-8 md:mb-10 leading-[1.1] tracking-tight text-balance">A Visionary Approach to <span className="text-primary">Global Health</span></h3>
                <p className="text-lg md:text-xl text-gray-400 mb-10 md:mb-12 leading-relaxed font-display font-medium">
                  Founded in 1977, Foresight Australia has been a pioneer in sustainable eye health. We don't just provide treatment; we build capacity and establish sustainable healthcare infrastructure to ensure long-term eye health for all.
                </p>
                <button
                  onClick={() => onNavigate('about')}
                  className="group flex items-center gap-4 text-xs font-display font-black uppercase tracking-widest text-white hover:text-accent transition-colors"
                >
                  Our mission and objectives <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Projects Preview */}
      <section className="py-8 md:py-10 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-8 md:gap-12">
            <div className="max-w-3xl">
              <h2 className="text-primary font-display font-extrabold tracking-[0.3em] text-[11px] uppercase mb-3">Our Impact</h2>
              <h3 className="text-2xl md:text-4xl font-display font-extrabold text-gray-900 leading-[1.1] tracking-tight">Focusing on where we can make the greatest difference.</h3>
            </div>
            <button
              onClick={() => onNavigate('projects')}
              className="w-full md:w-auto px-8 py-5 bg-gray-50 hover:bg-gray-100 text-gray-900 rounded-2xl font-display font-black uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-3 border border-gray-100"
            >
              See where we work <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -20 }}
                onClick={() => onNavigate(project.id)}
                className="group relative bg-white rounded-3xl md:rounded-5xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-700 cursor-pointer"
              >
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={`Project image for ${project.title} in ${project.location}`}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                    width="600"
                    height="750"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-80"></div>
                  <div className="absolute top-6 right-6 z-20">
                    {project.id === 'projects-solomon-islands' && (
                      <div className="px-4 py-2 bg-accent/90 backdrop-blur-md rounded-xl text-white font-display font-black uppercase tracking-widest text-[10px] shadow-lg border border-white/20">
                        Renewal: Returning 2026
                      </div>
                    )}
                  </div>
                  <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 text-white">
                    <div className="inline-block px-4 py-1.5 bg-accent rounded-xl text-[11px] font-black uppercase tracking-[0.2em] mb-2">
                      {project.location}
                    </div>
                    <h4 className="text-2xl md:text-3xl font-display font-extrabold mb-4 leading-tight">{project.title}</h4>
                    <p className="text-base md:text-lg text-gray-300 line-clamp-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500 transform translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 font-display font-medium">
                      {project.description}
                    </p>
                  </div>
                </div>
                <div className="p-4 md:p-8 flex justify-between items-center bg-white">
                  <span className="text-xs font-display font-black text-gray-400 uppercase tracking-[0.2em]">Our Impact</span>
                  <button 
                    aria-label={`Learn more about ${project.title}`}
                    onClick={(e) => { e.stopPropagation(); onNavigate(project.id); }}
                    className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-primary/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:rotate-12"
                  >
                    <ArrowRight className="w-6 h-6" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Donate */}
      <section className="py-8 md:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative rounded-3xl md:rounded-[5rem] overflow-hidden bg-primary p-8 md:p-36 text-center text-white shadow-3xl"
          >
            <div className="absolute inset-0 opacity-30">
              <img
                src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=2089&auto=format&fit=crop"
                alt="Medical background"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary"></div>
            <div className="relative z-10 max-w-5xl mx-auto">
              <h2 className="text-accent font-display font-extrabold tracking-[0.3em] text-[11px] uppercase mb-3 md:mb-8">Support Our Mission</h2>
              <h3 className="text-3xl md:text-6xl font-display font-extrabold mb-8 md:mb-10 leading-[1.1] tracking-tight">Help us bring the gift of sight to those in need.</h3>
              <p className="text-base md:text-xl text-secondary opacity-90 mb-10 md:mb-14 leading-relaxed font-display font-medium">
                Your contribution directly funds life-changing surgeries, training for local doctors, and essential equipment for underserved communities. Every dollar helps restore vision and hope.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6 md:gap-10">
                <button
                  onClick={() => onNavigate('donate')}
                  className="w-full sm:w-auto px-8 py-6 bg-accent hover:bg-accent-dark text-white rounded-2xl font-display font-black uppercase tracking-widest text-xs transition-all transform hover:scale-105 shadow-2xl shadow-accent/40 flex items-center justify-center gap-4"
                >
                  Make a Donation
                </button>
                <button
                  onClick={() => onNavigate('get-involved')}
                  className="w-full sm:w-auto px-8 py-6 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-2xl font-display font-black uppercase tracking-widest text-xs transition-all backdrop-blur-xl"
                >
                  Get Involved
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="py-10 md:py-14 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6 text-center">
          <h2 className="text-gray-400 font-display font-black tracking-[0.4em] text-[11px] uppercase mb-6 md:mb-16">Our Trusted Partners</h2>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            {PARTNERS.map((partner, i) => (
              <a
                href={partner.url}
                key={i}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-transform hover:scale-110"
              >
                <img src={partner.logo} alt={partner.name} className="h-10 md:h-14 w-auto object-contain" />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
