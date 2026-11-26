import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight, MapPin, Calendar, CheckCircle2 } from 'lucide-react';
import { NEWS_ARTICLES } from '../constants';

interface NewsDetailPageProps {
  articleId: string;
  onBack: () => void;
  onNavigate?: (id: string) => void;
}

function renderFormattedText(text: string) {
  if (!text || !text.includes('**')) return text;
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith('**') && part.endsWith('**')) {
      return (
        <strong key={i} className="font-bold text-gray-900">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

export default function NewsDetailPage({ articleId, onBack, onNavigate }: NewsDetailPageProps) {
  const article = NEWS_ARTICLES.find(a => a.id === articleId);

  useEffect(() => {
    window.scrollTo(0, 0);
    if (article) {
      if (article.metaTitle) {
        document.title = article.metaTitle;
      }
      if (article.metaDescription) {
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute('content', article.metaDescription);
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute('content', article.metaDescription);
      }
      if (article.image) {
        const ogImg = document.querySelector('meta[property="og:image"]');
        if (ogImg) ogImg.setAttribute('content', article.image.startsWith('http') ? article.image : window.location.origin + article.image);
        const twImg = document.querySelector('meta[name="twitter:image"]');
        if (twImg) twImg.setAttribute('content', article.image.startsWith('http') ? article.image : window.location.origin + article.image);
      }
    }
  }, [articleId, article]);

  if (!article) {
    return (
      <div className="pt-20 pb-12 md:pt-28 md:pb-20 bg-[#FAFAFA] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-display font-extrabold text-gray-900 mb-4 tracking-tighter">Article not found</h2>
          <button onClick={onBack} className="text-primary font-display font-bold hover:underline flex items-center justify-center gap-2 mx-auto">
            <ArrowLeft className="w-5 h-5" /> Back to News
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-14 pb-12 md:pt-20 md:pb-20 bg-[#FAFAFA] min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-4 lg:px-6">
        <button
          onClick={onBack}
          className="group flex items-center gap-3 text-sm font-display font-black uppercase tracking-widest text-gray-500 hover:text-primary transition-colors mb-4 md:mb-12"
        >
          <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" /> Back to News
        </button>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8 md:mb-12 text-center md:text-left text-balance"
        >
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-extrabold mb-4 md:mb-6 leading-[1.1] md:leading-[0.95] tracking-tighter text-gray-900">
            {article.title}
          </h1>
          <div className="flex flex-wrap items-center gap-3 justify-center md:justify-start">
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 text-primary text-xs font-black uppercase tracking-widest shadow-sm">
              <Calendar className="w-4 h-4" /> {article.date}
            </div>
            <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-accent/10 text-accent text-xs font-black uppercase tracking-widest shadow-sm">
              <span>{article.category}</span>
            </div>
            {article.location && (
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gray-100 text-gray-600 text-xs font-black uppercase tracking-widest shadow-sm">
                <MapPin className="w-4 h-4" /> {article.location}
              </div>
            )}
          </div>
        </motion.div>

        <motion.figure
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.1 }}
          className="mb-12 md:mb-16"
        >
          <div className="aspect-[16/9] md:aspect-[21/9] rounded-3xl md:rounded-[3rem] overflow-hidden shadow-2xl border border-gray-100">
            <img
              src={article.image}
              alt={article.imageAlt || article.title}
              className="w-full h-full object-cover"
              loading="lazy"
              width="1200"
              height="500"
            />
          </div>
          {article.caption && (
            <figcaption className="mt-3 text-center text-xs md:text-sm text-gray-500 font-display font-medium">
              {article.caption}
            </figcaption>
          )}
        </motion.figure>

        <div className="prose prose-lg md:prose-xl max-w-none prose-p:font-display prose-p:font-medium prose-p:text-gray-600 prose-p:leading-relaxed mx-auto md:mx-0">
          {article.standfirst && (
            <p className="text-xl md:text-2xl font-display font-bold text-gray-900 leading-snug md:leading-relaxed mb-8">
              {article.standfirst}
            </p>
          )}
          {article.content.map((block, index) => {
            if (block.type === 'standfirst' && block.text) {
              return (
                <p key={index} className="text-xl md:text-2xl font-display font-bold text-gray-900 leading-snug md:leading-relaxed mb-8">
                  {block.text}
                </p>
              );
            }
            if (block.type === 'paragraph' && block.text) {
              return (
                <p key={index} className="mb-6">
                  {renderFormattedText(block.text)}
                </p>
              );
            }
            if (block.type === 'heading' && block.text) {
              if (block.level === 'h3') {
                return (
                  <h3 key={index} className="text-xl md:text-2xl font-display font-extrabold text-gray-900 mt-8 mb-4 tracking-tight leading-tight">
                    {block.text}
                  </h3>
                );
              }
              return (
                <h2 key={index} className="text-2xl md:text-3xl font-display font-extrabold text-gray-900 mt-12 mb-6 tracking-tight leading-tight">
                  {block.text}
                </h2>
              );
            }
            if (block.type === 'list' && block.items) {
              return (
                <ul key={index} className="space-y-4 my-8 pl-0">
                  {block.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-4 list-none pl-0">
                      <div className="mt-1 bg-primary/5 p-1.5 rounded-full shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-gray-600 font-display font-medium leading-relaxed">
                        {renderFormattedText(item)}
                      </span>
                    </li>
                  ))}
                </ul>
              );
            }
            if (block.type === 'button') {
              return (
                <div key={index} className="my-8">
                  <a
                    href={block.buttonAction || '/christmas-appeal'}
                    onClick={(e) => {
                      e.preventDefault();
                      const target = block.buttonAction === '/christmas-appeal' || block.buttonAction === 'christmas-appeal'
                        ? 'christmas-appeal'
                        : (block.buttonAction?.replace('/', '') || 'donate');
                      if (onNavigate) onNavigate(target);
                      else window.location.href = block.buttonAction || '/christmas-appeal';
                    }}
                    className="px-8 py-4 md:py-5 bg-accent hover:bg-accent-dark text-white rounded-2xl font-display font-black uppercase tracking-widest text-xs transition-all transform hover:scale-105 shadow-xl shadow-accent/30 inline-flex items-center gap-3 cursor-pointer"
                  >
                    {block.buttonText || 'Support the Christmas Appeal'}
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              );
            }
            if (block.type === 'sources' && block.links) {
              return (
                <div key={index} className="mt-12 pt-8 border-t border-gray-200 text-xs text-gray-500 font-display">
                  <h4 className="font-extrabold uppercase tracking-widest text-[11px] text-gray-700 mb-3">
                    Sources
                  </h4>
                  <ul className="space-y-2 pl-0 list-none">
                    {block.links.map((link, lIdx) => (
                      <li key={lIdx} className="leading-relaxed">
                        <a
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-gray-600 hover:text-primary underline transition-colors"
                        >
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            }
            if (block.type === 'cta') {
              return (
                <div key={index} className="my-12 p-8 bg-white rounded-3xl border border-gray-100 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="text-center md:text-left">
                    <h4 className="text-xl font-display font-extrabold text-gray-900 mb-2">Want to make a difference?</h4>
                    <p className="text-gray-500 font-display font-medium text-sm md:text-base m-0">Your support directly funds training, equipment, and surgical programs.</p>
                  </div>
                  <button
                    onClick={() => {
                      const target = block.buttonAction === '/christmas-appeal' || block.buttonAction === 'christmas-appeal'
                        ? 'christmas-appeal'
                        : (block.buttonAction?.replace('/', '') || 'donate');
                      if (onNavigate) onNavigate(target);
                      else window.location.href = block.buttonAction || '/donate';
                    }}
                    className="w-full md:w-auto shrink-0 px-8 py-5 bg-accent text-white rounded-2xl font-display font-black uppercase tracking-widest text-xs hover:bg-accent-dark transition-all shadow-xl flex items-center justify-center gap-3 transform hover:scale-105"
                  >
                    {block.buttonText || 'Support the program'} <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              );
            }
            return null;
          })}
        </div>

        <div className="mt-16 pt-6 border-t border-gray-200 flex flex-col sm:flex-row gap-4 justify-between items-center">
          <button
            onClick={onBack}
            className="w-full sm:w-auto px-8 py-5 bg-white border border-gray-200 hover:border-primary hover:text-primary text-gray-900 rounded-2xl font-display font-black uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-3 shadow-sm hover:shadow-xl"
          >
            <ArrowLeft className="w-5 h-5" /> Back to News
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
