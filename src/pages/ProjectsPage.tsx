import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { PROJECTS } from '../constants';

interface ProjectsPageProps {
  onSelectProject: (id: string) => void;
}

export default function ProjectsPage({ onSelectProject }: ProjectsPageProps) {
  const activePrograms = PROJECTS.filter(p => ['projects-australia', 'projects-indonesia', 'projects-solomon-islands'].includes(p.id)).map(p => ({
    id: p.id,
    title: p.title,
    location: p.location === 'Australia' ? 'Australia' : p.location === 'Indonesia' ? 'Sumba, Indonesia' : p.location,
    image: p.image,
    text: p.description
  }));

  const impactMilestones = PROJECTS.filter(p => !['projects-australia', 'projects-indonesia', 'projects-solomon-islands'].includes(p.id)).map(p => ({
    id: p.id,
    title: p.title,
    location: p.location,
    image: p.image,
    text: p.description
  }));

  return (
    <div className="pt-14 pb-8 md:pt-20 md:pb-14 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6">
        <div className="max-w-4xl mb-12 md:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-black uppercase tracking-[0.2em] mb-4"
          >
            <span>Our Global Reach</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold mb-6 md:mb-8 leading-[1.1] md:leading-[0.95] tracking-tighter"
          >
            Where We <span className="text-primary">Work</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-base md:text-lg text-gray-500 leading-relaxed font-display font-medium max-w-3xl"
          >
            Foresight Australia partners with local communities across Asia and the Pacific to build sustainable eye care systems that last for generations.
          </motion.p>
        </div>

        {/* ACTIVE PROGRAMS GRID */}
        <div className="mb-12">
          <h2 className="text-primary font-display font-black tracking-[0.3em] text-[11px] uppercase mb-4 flex items-center gap-4">
            Active Programs <span className="h-px bg-primary/10 flex-1"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {activePrograms.map((program, i) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => onSelectProject(program.id)}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col group border border-gray-100 cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden relative">
                  <img
                    src={program.image}
                    alt={program.location}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    loading="lazy"
                    width="600"
                    height="450"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white text-left z-10">
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-primary mb-1">
                      {program.location}
                    </div>
                    <h4 className="text-2xl font-display font-extrabold leading-tight uppercase tracking-tighter">
                      {program.title}
                    </h4>
                  </div>
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <p className="text-gray-500 font-display font-medium leading-relaxed mb-8 flex-1 text-sm md:text-base">
                    {program.text}
                  </p>
                  <button
                    onClick={() => onSelectProject(program.id)}
                    className="flex items-center gap-2 text-primary font-display font-black uppercase tracking-widest text-[11px] group/link w-fit"
                  >
                    View Project <ArrowRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* IMPACT MILESTONES (LEGACY) GRID */}
        <div className="mt-16 md:mt-24">
          <h2 className="text-gray-400 font-display font-black tracking-[0.3em] text-[11px] uppercase mb-4 flex items-center gap-4">
            Impact Milestones (Legacy) <span className="h-px bg-gray-200 flex-1"></span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {impactMilestones.map((milestone, i) => (
              <motion.div
                key={milestone.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5 }}
                onClick={() => onSelectProject(milestone.id)}
                className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 flex flex-col group border border-gray-100 grayscale hover:grayscale-0 cursor-pointer"
              >
                <div className="aspect-[4/3] overflow-hidden relative opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                  <img
                    src={milestone.image}
                    alt={milestone.location}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    loading="lazy"
                    width="600"
                    height="450"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/20 to-transparent"></div>
                  <div className="absolute bottom-6 left-6 right-6 text-white text-left z-10">
                    <div className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-1">
                      {milestone.location}
                    </div>
                    <h4 className="text-2xl font-display font-extrabold leading-tight uppercase tracking-tighter">
                      {milestone.title}
                    </h4>
                  </div>
                </div>
                <div className="p-6 md:p-8 flex flex-col flex-1">
                  <p className="text-gray-500 font-display font-medium leading-relaxed mb-8 flex-1 text-sm md:text-base">
                    {milestone.text}
                  </p>
                  <button
                    onClick={() => onSelectProject(milestone.id)}
                    className="flex items-center gap-2 text-primary font-display font-black uppercase tracking-widest text-[11px] group/link w-fit"
                  >
                    Read More <ArrowRight className="w-4 h-4 group-hover/link:translate-x-2 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
