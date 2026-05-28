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

  // Extended story format (e.g. Ezry & Lodowyk) uses h2/h3/h4/p4/p5/pullQuote etc.
  const isExtended = !!(story.h2 || story.pullQuote || story.p4);

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
            {story.title
              ? <><span className="text-primary">{story.title}</span></>
              : <>{story.name}'s <span className="text-primary">Story</span></>
            }
          </h1>
          <div className="flex flex-wrap gap-3 justify-center md:justify-start">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-widest shadow-sm">
              <MapPin className="w-4 h-4" /> {story.location}
            </div>
            {story.date && (
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent/10 text-accent text-xs font-black uppercase tracking-widest shadow-sm">
                {story.date}
              </div>
            )}
            {story.program && (
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-100 text-gray-600 text-xs font-black uppercase tracking-widest shadow-sm">
                {story.program}
              </div>
            )}
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

          {/* Standard story: quote block after p1 */}
          {!isExtended && (
            <div className="my-12 md:my-16 bg-white p-6 md:p-8 rounded-3xl md:rounded-[2rem] border border-gray-100 shadow-xl relative">
              <Quote className="w-10 h-10 md:w-16 md:h-16 text-accent/20 absolute top-6 left-6 md:top-8 md:left-8" />
              <p className="text-xl md:text-3xl text-gray-800 leading-relaxed italic font-display font-black text-center relative z-10 m-0 tracking-tight">
                {story.quote}
              </p>
            </div>
          )}

          {/* Extended story: inline quote from Lodowyk after p1 */}
          {isExtended && (
            <blockquote className="my-8 md:my-10 border-l-4 border-primary pl-6 md:pl-8">
              <p className="text-xl md:text-2xl text-primary font-display font-extrabold italic tracking-tight m-0">
                {story.quote}
              </p>
            </blockquote>
          )}

          {story.h2 && (
            <h2 className="text-2xl md:text-3xl font-display font-extrabold text-gray-900 mt-12 mb-6 tracking-tight leading-tight not-prose">
              {story.h2}
            </h2>
          )}

          <p>{story.p2}</p>

          {story.h3 && (
            <h2 className="text-2xl md:text-3xl font-display font-extrabold text-gray-900 mt-12 mb-6 tracking-tight leading-tight not-prose">
              {story.h3}
            </h2>
          )}

          <p>{story.p3}</p>

          {/* Pull quote (extended stories) */}
          {story.pullQuote && (
            <div className="my-12 md:my-16 bg-white p-6 md:p-10 rounded-3xl md:rounded-[2rem] border border-gray-100 shadow-xl relative">
              <Quote className="w-10 h-10 md:w-16 md:h-16 text-accent/20 absolute top-6 left-6 md:top-8 md:left-8" />
              <p className="text-xl md:text-3xl text-gray-800 leading-relaxed italic font-display font-black text-center relative z-10 m-0 tracking-tight">
                {story.pullQuote}
              </p>
              {story.pullQuoteAttribution && (
                <p className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em] text-center mt-4 m-0 relative z-10 not-prose">
                  {story.pullQuoteAttribution}
                </p>
              )}
            </div>
          )}

          {story.h4 && (
            <h2 className="text-2xl md:text-3xl font-display font-extrabold text-gray-900 mt-12 mb-6 tracking-tight leading-tight not-prose">
              {story.h4}
            </h2>
          )}

          {story.p4 && <p>{story.p4}</p>}

          {/* Second image (shown between p3 and closing for standard stories, after p4 for extended) */}
          <img
            src={story.image2}
            alt={`${story.name} Supportive`}
            className="w-full rounded-3xl md:rounded-[2rem] shadow-2xl my-12 border border-gray-100 object-cover not-prose"
            loading="lazy"
            width="800"
            height="600"
          />

          {story.p5 && <p>{story.p5}</p>}

          {/* Standard stories: p3 is the final paragraph — already rendered above for standard, but for extended we need to show the closing p after image */}
        </div>

        {/* Custom CTA for extended stories */}
        {story.ctaHeading && (
          <div className="mt-12 p-8 bg-white rounded-3xl border border-gray-100 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-center md:text-left">
              <h4 className="text-xl font-display font-extrabold text-gray-900 mb-2">{story.ctaHeading}</h4>
              <p className="text-gray-500 font-display font-medium text-sm md:text-base">Your contribution funds glasses, surgeries, and training for local eye care workers.</p>
            </div>
            <button
              onClick={() => onNavigate && onNavigate('donate')}
              className="w-full md:w-auto shrink-0 px-8 py-5 bg-accent text-white rounded-2xl font-display font-black uppercase tracking-widest text-xs hover:bg-accent-dark transition-all shadow-xl flex items-center justify-center gap-3 transform hover:scale-105"
            >
              {story.ctaButtonText || 'Give the Gift of Sight'} <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        <div className="mt-12 pt-6 border-t border-gray-200 flex flex-col sm:flex-row gap-4 justify-between items-center">
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
