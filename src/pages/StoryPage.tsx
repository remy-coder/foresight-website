import { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, MapPin, Quote } from 'lucide-react';
import { PATIENT_STORIES } from '../constants';

interface StoryPageProps {
  storyId: string;
  onBack: () => void;
  onNavigate?: (id: string) => void;
}

export default function StoryPage({ storyId, onBack, onNavigate }: StoryPageProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const story = PATIENT_STORIES[storyId];

  if (!story) {
    return (
      <div className="pt-20 pb-12 md:pt-28 md:pb-20 bg-[#FAFAFA] min-h-screen  flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-display font-extrabold text-gray-900 mb-4 tracking-tighter">Story not found</h2>
          <button onClick={onBack} className="text-primary font-display font-bold hover:underline flex items-center justify-center gap-2 mx-auto">
            <ArrowLeft className="w-5 h-5" /> Back to Impact
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-14 pb-12 md:pt-20 md:pb-20 bg-[#FAFAFA] min-h-screen ">
      <div className="max-w-4xl mx-auto px-4 sm:px-4 lg:px-6">

        <button
          onClick={onBack}
          className="group flex items-center gap-3 text-sm font-display font-black uppercase tracking-widest text-gray-500 hover:text-primary transition-colors mb-4 md:mb-12"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" /> Back to Impact
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 md:mb-12 text-center md:text-left text-balance"
        >
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-display font-extrabold mb-4 md:mb-6 leading-[1.1] md:leading-[0.95] tracking-tighter text-gray-900">
            {story.name}'s <span className="text-primary">Story</span>
          </h1>
          <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-widest shadow-sm">
            <MapPin className="w-4 h-4" /> {story.location}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="aspect-[4/3] md:aspect-[21/9] rounded-3xl md:rounded-[3rem] overflow-hidden shadow-2xl mb-12 md:mb-20 border border-gray-100"
        >
          <img
            src={story.image1}
            alt={`${story.name} Hero`}
            className="w-full h-full object-cover"
            loading="lazy"
            width="1200"
            height="500"
          />
        </motion.div>

        <div className="prose prose-lg md:prose-xl max-w-none prose-p:font-display prose-p:font-medium prose-p:text-gray-600 prose-p:leading-relaxed mx-auto md:mx-0">
          <p>{story.p1}</p>

          <div className="my-12 md:my-16 bg-white p-6 md:p-8 rounded-3xl md:rounded-[2rem] border border-gray-100 shadow-xl relative">
            <Quote className="w-10 h-10 md:w-16 md:h-16 text-accent/20 absolute top-6 left-6 md:top-8 md:left-8" />
            <p className="text-xl md:text-3xl text-gray-800 leading-relaxed italic font-display font-black text-center relative z-10 m-0 tracking-tight">
              {story.quote}
            </p>
          </div>

          <p>{story.p2}</p>

          <img
            src={story.image2}
            alt={`${story.name} Supportive`}
            className="w-full rounded-3xl md:rounded-[2rem] shadow-2xl my-12 border border-gray-100 object-cover"
            loading="lazy"
            width="800"
            height="600"
          />

          <p>{story.p3}</p>
        </div>

        <div className="mt-16 pt-6 border-t border-gray-200 flex flex-col sm:flex-row gap-4 justify-between items-center">
          <button
            onClick={onBack}
            className="w-full sm:w-auto px-8 py-5 bg-white border border-gray-200 hover:border-primary hover:text-primary text-gray-900 rounded-2xl font-display font-black uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-3 shadow-sm hover:shadow-xl"
          >
            <ArrowLeft className="w-5 h-5" /> Back to Impact Stories
          </button>

          <button
            onClick={() => onNavigate && onNavigate('donate')}
            className="w-full sm:w-auto px-8 py-5 bg-accent text-white rounded-2xl font-display font-black uppercase tracking-widest text-xs hover:bg-accent-dark transition-all shadow-xl flex items-center justify-center gap-3 transform hover:scale-105"
          >
            Donate to Save Sight <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
