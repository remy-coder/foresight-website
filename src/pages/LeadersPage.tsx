import { useEffect } from 'react';
import { motion } from 'motion/react';
import { Users, Linkedin, Mail } from 'lucide-react';
import { TEAM } from '../constants';

export default function LeadersPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-14 pb-8 md:pt-20 md:pb-14 bg-[#FAFAFA] min-h-screen ">
      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6">
        <div className="max-w-4xl mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[11px] font-black uppercase tracking-[0.2em] mb-4"
          >
            <Users className="w-4 h-4" />
            <span>Our Leadership</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-6xl font-display font-extrabold mb-8 leading-[1.1] md:leading-[0.95] tracking-tighter"
          >
            Our Board of <span className="text-primary">Directors</span>.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-500 leading-relaxed font-display font-medium max-w-3xl"
          >
            Foresight Australia is governed by a dedicated group of professionals from the medical, legal, and financial sectors, all committed to our mission of preventing avoidable blindness through sustainable eye-care systems.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
          {TEAM.map((director, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-xl hover:shadow-3xl transition-all duration-700 flex flex-col group"
            >
              <div className="aspect-[4/5] relative overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                <img
                  src={director.image}
                  alt={director.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  loading="lazy"
                  width="400"
                  height="500"
                  decoding="async"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(director.name)}&background=004aad&color=ffffff&size=512`;
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
              </div>
              
              <div className="p-6 md:p-8 flex flex-col flex-1">
                <div className="mb-6">
                  <h3 className="text-2xl font-display font-extrabold text-gray-900 mb-2 tracking-tight">
                    {director.name}
                  </h3>
                  <div className="flex flex-col gap-1">
                    <span className="text-[11px] font-black uppercase tracking-[0.2em] text-primary">
                      {director.role}
                    </span>
                    <span className="text-[10px] font-display font-bold text-gray-400">
                      {director.titles}
                    </span>
                  </div>
                </div>
                
                <p className="text-gray-500 font-display font-medium leading-relaxed mb-6 flex-1 text-sm md:text-base">
                  {director.bio}
                </p>
                
                <div className="pt-6 border-t border-gray-50 flex justify-between items-center">
                   <div className="flex gap-4">
                     <Linkedin className="w-5 h-5 text-gray-300 hover:text-primary transition-colors cursor-pointer" />
                     <Mail className="w-5 h-5 text-gray-300 hover:text-primary transition-colors cursor-pointer" />
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
