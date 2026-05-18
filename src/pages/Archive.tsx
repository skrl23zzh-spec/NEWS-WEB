import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../components/LanguageContext';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { ArticleCard } from '../components/ui/ArticleCard';
import { MOCK_ARTICLES } from '../constants/mockData';

export const Archive: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col pt-32">
      <Header />
      <main className="flex-grow max-w-7xl mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-brand-accent mb-4 inline-block">
              {t('archive.badge')}
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-slate-900">
              {t('archive.title')}
            </h1>
            <div className="w-24 h-1.5 bg-brand-accent rounded-full shadow-lg shadow-indigo-100" />
          </motion.div>
          
          <p className="text-brand-secondary max-w-xs text-sm font-medium leading-relaxed">
            {t('archive.desc')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Using double the articles for archive feel */}
          {[...MOCK_ARTICLES, ...MOCK_ARTICLES].map((article, index) => (
            <ArticleCard key={article.id + index} article={article} index={index} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};
