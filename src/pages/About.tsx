import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../components/LanguageContext';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

export const About: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col pt-32">
      <Header />
      <main className="flex-grow max-w-4xl mx-auto px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-20"
        >
          <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-brand-accent mb-4 inline-block">
            {t('about.mission')}
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8">
            {t('about.title')}
          </h1>
          <div className="w-24 h-1.5 bg-brand-accent rounded-full mx-auto" />
        </motion.div>

        <div className="prose prose-lg max-w-none text-brand-secondary leading-relaxed space-y-8 font-medium">
          <p>
            {t('about.welcome')}
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-12">
            <div className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100">
              <h3 className="text-xl font-bold mb-4 text-brand-primary">{t('about.vision.title')}</h3>
              <p className="text-sm">{t('about.vision.desc')}</p>
            </div>
            <div className="p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100">
              <h3 className="text-xl font-bold mb-4 text-brand-primary">{t('about.perspective.title')}</h3>
              <p className="text-sm">{t('about.perspective.desc')}</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};
