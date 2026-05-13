import { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, Target, Users, Building2, BookOpen, BriefcaseMedical, Eye, CheckCircle2 } from 'lucide-react';
import { PROJECTS } from '../constants';

interface ProjectDetailPageProps {
  projectId: string;
  onBack: () => void;
  onNavigate: (id: string) => void;
}

export default function ProjectDetailPage({ projectId, onBack, onNavigate }: ProjectDetailPageProps) {
  const project = PROJECTS.find(p => p.id === projectId);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) return null;

  return (
    <div className="bg-[#FAFAFA] min-h-screen">
      {/* SECTION 1: Header */}
      <section className="pt-24 pb-8 md:pt-32 md:pb-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6">
          <button
            onClick={onBack}
            className="group flex items-center gap-3 text-primary font-display font-black uppercase tracking-widest text-xs mb-10 md:mb-14 hover:gap-5 transition-all"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Projects</span>
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-center">
            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[11px] font-black uppercase tracking-[0.2em] mb-4"
              >
                <span>{project.location}</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl sm:text-5xl md:text-7xl font-display font-extrabold text-gray-900 mb-8 md:mb-10 leading-[1.05] md:leading-[0.95] tracking-tighter"
              >
                {project.title}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-2xl text-gray-500 leading-relaxed font-display font-medium mb-12 md:mb-16"
              >
                {project.intro}
              </motion.p>

              {projectId === 'projects-indonesia' && (
                <div className="flex flex-wrap gap-8 md:gap-14">
                  {[
                    { label: 'Screenings', value: '200,000+' },
                    { label: 'Surgeries', value: '2,000+' },
                    { label: 'Glasses', value: '25,000+' }
                  ].map((stat, i) => (
                    <div key={i}>
                      <div className="text-3xl md:text-5xl font-display font-black text-primary tracking-tighter">{stat.value}</div>
                      <div className="text-[11px] font-black text-gray-400 uppercase tracking-widest mt-1">{stat.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div className="lg:col-span-5 relative">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="relative rounded-[2.5rem] md:rounded-[3rem] overflow-hidden shadow-3xl aspect-[4/5]"
              >
                <img 
                  src={project.image} 
                  alt={`Primary hero image for the ${project.title} project`} 
                  className="absolute inset-0 w-full h-full object-cover" 
                  loading="eager"
                  fetchPriority="high"
                  width="800"
                  height="1000"
                  decoding="async"
                />
              </motion.div>
              <div className="absolute -bottom-6 -left-6 bg-white p-4 md:p-6 rounded-[2rem] shadow-2xl border border-gray-100 hidden md:block">
                <div className="text-3xl font-display font-black text-primary tracking-tighter">
                  {['projects-indonesia', 'projects-australia', 'projects-solomon-islands'].includes(project.id) ? 'Active' : 'Legacy'}
                </div>
                <div className="text-[11px] font-black text-gray-400 uppercase tracking-widest mt-1">Project Status</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Why it matters */}
      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-4 lg:px-6">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-20 items-start">
            <div className="md:col-span-4">
              <h2 className="text-primary font-display font-black tracking-[0.4em] text-[11px] uppercase mb-3">The Challenge</h2>
              <h3 className="text-2xl md:text-3xl font-display font-extrabold text-gray-900 leading-tight">Why it matters</h3>
            </div>
            <div className="md:col-span-8">
              <div className="flex flex-col gap-6">
                {Array.isArray(project.whyItMatters) ? project.whyItMatters.map((para, i) => (
                  <p key={i} className="text-base md:text-xl text-gray-600 font-display font-medium leading-relaxed">
                    {para}
                  </p>
                )) : (
                  <p className="text-base md:text-xl text-gray-600 font-display font-medium leading-relaxed">
                    {project.whyItMatters}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2.5: Our Story */}
      {'ourStory' in project && project.ourStory && (
        <section className="py-10 md:py-14 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-4 lg:px-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-20 items-start">
              <div className="md:col-span-4">
                <h2 className="text-primary font-display font-black tracking-[0.4em] text-[11px] uppercase mb-3">Our Story</h2>
                <h3 className="text-2xl md:text-3xl font-display font-extrabold text-gray-900 leading-tight">{('storyHeading' in project && project.storyHeading) ? (project as any).storyHeading : 'Over 15 years in Sumba'}</h3>
              </div>
              <div className="md:col-span-8 flex flex-col gap-6">
                {(project as any).ourStory.map((para: string, i: number) => (
                  <p key={i} className="text-base md:text-xl text-gray-600 font-display font-medium leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 3: What we do */}
      <section className="py-10 md:py-14 bg-[#0F172A] text-white relative overflow-hidden rounded-[3rem] md:rounded-[4rem] mx-4 md:mx-10">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[160px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-24 items-center">
            <div>
              <h2 className="text-primary font-display font-black tracking-[0.4em] text-[11px] uppercase mb-5">
                {project.id === 'projects-indonesia' ? 'Our Approach' : 'Our Solution'}
              </h2>
              <h3 className="text-2xl md:text-4xl font-display font-extrabold text-white mb-8 leading-[1.1] tracking-tight">
                {project.id === 'projects-indonesia' ? 'Our approach' : 'What we do'}
              </h3>
              <p className="text-base md:text-xl text-gray-400 font-display font-medium leading-relaxed mb-10">
                {project.whatWeDo}
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {('approachCards' in project && project.approachCards ? (project as any).approachCards : [{ icon: 'Target', label: "Clinical Care" }, { icon: 'Users', label: "Training" }]).map((feature: any, i: number) => {
                  let Icon = Target;
                  if (feature.icon === 'Users') Icon = Users;
                  if (feature.icon === 'Building2') Icon = Building2;
                  if (feature.icon === 'BookOpen') Icon = BookOpen;
                  if (feature.icon === 'BriefcaseMedical') Icon = BriefcaseMedical;
                  if (feature.icon === 'Eye') Icon = Eye;
                  
                  return (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      className="flex flex-col gap-4 p-4 bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 group hover:bg-white/10 transition-all"
                    >
                      <div className="text-primary"><Icon className="w-6 h-6" /></div>
                      <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white">{feature.label}</span>
                      {feature.text && <p className="text-sm md:text-base text-gray-400 font-display font-medium leading-relaxed">{feature.text}</p>}
                    </motion.div>
                  );
                })}
              </div>
            </div>
            <div className="relative rounded-[3rem] overflow-hidden aspect-video lg:aspect-square">
              <img 
                src={project.supportingImages?.[0] || project.image} 
                alt="Impact" 
                className="w-full h-full object-cover opacity-80" 
                loading="lazy"
                width="800"
                height="800"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Key achievements */}
      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-4 lg:px-6">
          <div className="mb-12 md:mb-16">
            <h2 className="text-primary font-display font-black tracking-[0.4em] text-[11px] uppercase mb-3">
              {project.id === 'projects-australia' ? 'Our Impact' : 'Our Progress'}
            </h2>
            <h3 className="text-2xl md:text-4xl font-display font-extrabold text-gray-900 leading-[1.1] tracking-tight">
              {project.id === 'projects-australia' ? 'Our impact' : 'Key achievements'}
            </h3>
          </div>
          {project.id === 'projects-solomon-islands' && project.supportingImages?.[1] && (
            <div className="mb-12 md:mb-16 relative rounded-[3rem] overflow-hidden shadow-md aspect-[21/9] md:aspect-[3/1]">
              <img 
                src={project.supportingImages[1]} 
                alt="Solomon Islands key achievements" 
                className="w-full h-full object-cover" 
                loading="lazy"
                width="1200"
                height="400"
                decoding="async"
              />
            </div>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {project.achievements.map((achievement, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex gap-8 group p-6 bg-gray-50 rounded-3xl border border-transparent hover:border-primary/20 hover:bg-white hover:shadow-xl transition-all duration-500"
              >
                <div className="shrink-0 w-12 h-12 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <p className="text-lg text-gray-600 font-display font-medium leading-relaxed">
                  {achievement}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4.2: Visit Update */}
      {'visitUpdate' in project && project.visitUpdate && (
        <section className="py-10 md:py-14 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-4 lg:px-6">
            <div className="mb-12 md:mb-16">
              <h2 className="text-primary font-display font-black tracking-[0.4em] text-[11px] uppercase mb-3">
                {(project as any).visitUpdate.label}
              </h2>
              <h3 className="text-2xl md:text-4xl font-display font-extrabold text-gray-900 leading-[1.1] tracking-tight">
                {(project as any).visitUpdate.heading}
              </h3>
              <p className="text-lg md:text-xl text-gray-500 font-display font-medium mt-6 leading-relaxed">
                {(project as any).visitUpdate.intro}
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
              {(project as any).visitUpdate.stats.map((stat: any, i: number) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="p-6 bg-primary/5 rounded-2xl text-center border border-primary/10"
                >
                  <div className="text-2xl font-display font-black text-primary tracking-tighter">{stat.value}</div>
                  <div className="text-[10px] font-black text-gray-400 uppercase tracking-widest mt-1">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {(project as any).visitUpdate.blocks.map((block: any, i: number) => (
                <div key={i} className="p-8 bg-gray-50 rounded-3xl border border-gray-100">
                  <h4 className="text-xl font-display font-extrabold text-gray-900 mb-4">{block.heading}</h4>
                  <p className="text-base text-gray-600 font-display font-medium leading-relaxed">{block.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 5: Milestones */}
      {'milestones' in project && (
        <section className="py-10 md:py-14 bg-gray-50">
          <div className="max-w-5xl mx-auto px-4 sm:px-4 lg:px-6">
            <div className="mb-12 md:mb-16">
              <h2 className="text-primary font-display font-black tracking-[0.4em] text-[11px] uppercase mb-3">Timeline</h2>
              <h3 className="text-2xl md:text-3xl font-display font-extrabold text-gray-900 tracking-tight leading-tight">
                {('milestonesHeading' in project && project.milestonesHeading) ? (project as any).milestonesHeading : 'From first visit to embedded care'}
              </h3>
            </div>
            <div className="space-y-6">
              {(project as any).milestones.map((milestone: any, i: number) => (
                <div key={i} className="flex gap-6 md:gap-10 group">
                  <div className="shrink-0 w-24 md:w-32 pt-1">
                    <span className="text-primary font-display font-black text-sm md:text-base tracking-tighter">{milestone.year}</span>
                  </div>
                  <div className="flex-1 pb-6 border-b border-gray-200">
                    <p className="text-base md:text-lg text-gray-600 font-display font-medium leading-relaxed group-hover:text-gray-900 transition-colors">
                      {milestone.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 6: What's next */}
      {project.nextSteps && (
        <section className="py-10 md:py-14 bg-white">
          <div className="max-w-5xl mx-auto px-4 sm:px-4 lg:px-6">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-20 items-start">
              <div className="md:col-span-4">
                <h2 className="text-primary font-display font-black tracking-[0.4em] text-[11px] uppercase mb-3">The Future</h2>
                <h3 className="text-2xl md:text-3xl font-display font-extrabold text-gray-900 leading-tight">What's next</h3>
              </div>
              <div className="md:col-span-8">
                <div className="space-y-8">
                  <p className="text-lg md:text-xl text-gray-600 font-display font-medium leading-relaxed whitespace-pre-wrap">
                    {project.nextSteps}
                  </p>
                  {project.nextStepsList && (
                    <ul className="space-y-5">
                      {project.nextStepsList.map((step, i) => (
                        <li key={i} className="flex gap-4">
                          <div className="mt-1.5 shrink-0"><CheckCircle2 className="w-5 h-5 text-primary" /></div>
                          <span className="text-base md:text-lg text-gray-600 font-display font-medium leading-relaxed">{step}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* SECTION 7: Partners */}
      <section className="py-10 md:py-14 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-4 lg:px-6">
          <div className="mb-12 md:mb-16 text-center">
            <h2 className="text-primary font-display font-black tracking-[0.4em] text-[11px] uppercase mb-3">
              {('partnersHeading' in project && project.partnersHeading) ? (project as any).partnersHeading : 'Built on collaboration'}
            </h2>
            <p className="text-base md:text-lg text-gray-500 font-display font-medium max-w-2xl mx-auto">
              {project.partnersText || 'This program is made possible through the commitment of our local and international partners.'}
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-10">
            {project.partners?.map((partner: string, i: number) => (
              <div key={i} className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100 flex items-center justify-center text-center group hover:shadow-md transition-all">
                <span className="text-[11px] font-black uppercase tracking-widest text-gray-400 group-hover:text-primary transition-colors">{partner}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 8: CTA */}
      <section className="py-10 md:py-14 bg-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h3 className="text-2xl md:text-3xl font-display font-extrabold text-gray-900 mb-6">{project.cta || 'Support this work'}</h3>
          <p className="text-gray-500 font-display font-medium text-base md:text-lg mb-10 leading-relaxed whitespace-pre-wrap">
            {project.ctaText || 'Join us in establishing sustainable eye care systems that last for generations.'}
          </p>
          <button
            onClick={() => onNavigate('donate')}
            className="px-8 py-5 bg-accent hover:bg-accent-dark text-white rounded-2xl font-display font-black uppercase tracking-widest text-xs transition-all transform hover:scale-105 shadow-2xl shadow-accent/40 flex items-center justify-center gap-4 mx-auto"
          >
            Donate to this project <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </section>
    </div>
  );
}
