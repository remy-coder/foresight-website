import { motion } from 'motion/react';
import { ArrowRight, Calendar } from 'lucide-react';
import { NEWS_ARTICLES } from '../constants';

interface NewsPageProps {
  onNavigate?: (id: string) => void;
}

export default function NewsPage({ onNavigate }: NewsPageProps) {
  return (
    <div className="pt-14 pb-8 md:pt-20 md:pb-14 bg-[#FAFAFA] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6">
        <div className="max-w-3xl mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[11px] font-black uppercase tracking-[0.2em] mb-4"
          >
            <span>Latest Updates</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold mb-6 md:mb-10 leading-[1.1] md:leading-[0.95] tracking-tighter"
          >
            News & <span className="text-primary">Announcements</span>.
          </motion.h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {NEWS_ARTICLES.map((article, index) => (
            <motion.article
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => onNavigate && onNavigate('news-' + article.id)}
              className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 cursor-pointer group"
            >
              <div className="aspect-[16/9] w-full relative overflow-hidden">
                <img 
                  src={article.image} 
                  alt={article.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                  loading="lazy"
                  width="800"
                  height="450"
                  decoding="async"
                />
                <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-widest text-primary shadow-sm">
                  {article.category}
                </div>
              </div>
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-[11px] font-black text-gray-400 uppercase tracking-widest mb-3">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>{article.date}</span>
                </div>
                <h3 className="text-2xl font-display font-extrabold text-gray-900 mb-4 group-hover:text-primary transition-colors leading-tight">
                  {article.title}
                </h3>
                <p className="text-gray-600 font-display font-medium leading-relaxed flex-1">
                  {article.excerpt}
                </p>
                <div className="text-xs font-display font-black text-primary uppercase tracking-widest flex items-center gap-2 mt-6">
                  Read Full Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </div>
  );
}

