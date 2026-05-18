import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { useLanguage } from '../LanguageContext';
import { Article } from '../../types';
import { ArrowRight, Clock } from 'lucide-react';

interface ArticleCardProps {
  article: Article;
  index: number;
}

export const ArticleCard: React.FC<ArticleCardProps> = ({ article, index }) => {
  const { language, t } = useLanguage();

  const title = article.titles[language];
  const excerpt = article.excerpts[language];

  const LinkComponent = article.url?.startsWith('/') ? Link : 'a';
  const linkProps = article.url?.startsWith('/') 
    ? { to: article.url } 
    : { href: article.url || "#", target: article.url ? "_blank" : undefined, rel: article.url ? "noopener noreferrer" : undefined };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="group relative flex flex-col bg-white border border-slate-100 rounded-[2rem] overflow-hidden hover:shadow-2xl hover:shadow-indigo-500/10 hover:border-indigo-200 transition-all duration-500"
    >
      <LinkComponent 
        {...(linkProps as any)}
        className="flex flex-col flex-grow h-full"
      >
        <div className="aspect-[16/11] overflow-hidden">
          <img 
            src={article.image} 
            alt={title} 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-out"
          />
        </div>
        
        <div className="p-10 flex flex-col flex-grow">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-indigo-600 px-3 py-1 bg-indigo-50 rounded-full">
              {t(article.category)}
            </span>
            <div className="flex items-center gap-2 text-slate-400 text-[10px] font-bold uppercase tracking-widest">
              <Clock className="w-3.5 h-3.5" />
              {article.date}
            </div>
          </div>

          <h3 className="text-2xl font-extrabold leading-tight tracking-tight mb-4 group-hover:text-brand-accent transition-colors">
            {title}
          </h3>
          
          <p className="text-brand-secondary text-sm leading-relaxed mb-10 line-clamp-3">
            {excerpt}
          </p>

          <div className="mt-auto pt-6 border-t border-slate-50 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-slate-100 border-2 border-white shadow-sm overflow-hidden">
                <img src={`/avatar${(article.author.length % 8) + 1}.png`} className="w-full h-full object-cover" />
              </div>
              <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">{article.author}</span>
            </div>
            
            <div className="flex items-center gap-2 text-xs font-extrabold uppercase tracking-[0.2em] text-brand-primary group-hover:text-brand-accent group-hover:gap-4 transition-all">
              {t('article.readMore')}
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </div>
      </LinkComponent>
    </motion.div>
  );
};
