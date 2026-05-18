import React from 'react';
import { useLanguage } from '../LanguageContext';
import { Link } from 'react-router-dom';

export const Footer: React.FC = () => {
  const { t } = useLanguage();

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-white border-t border-slate-100 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          <div className="md:col-span-2 flex flex-col items-center md:items-start text-center md:text-left">
            <Link to="/" onClick={handleScrollToTop} className="flex items-center gap-3 text-xl font-extrabold tracking-tight mb-6 group">
               <div className="w-10 h-10 bg-slate-900 rounded-2xl flex items-center justify-center text-white font-bold group-hover:scale-105 transition-transform shadow-lg shadow-slate-200">SK</div>
               <span className="bg-clip-text text-transparent bg-gradient-to-r from-slate-900 to-slate-600">
                 {t('site.name')}
               </span>
            </Link>
            <p className="text-slate-500 font-medium leading-relaxed max-w-md text-sm md:text-base">
              {t('footer.tagline')}
            </p>
          </div>
          
          <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
            <h4 className="font-black text-[10px] uppercase tracking-[0.25em] mb-4 text-slate-400">{t('footer.pages')}</h4>
            <Link to="/archive" onClick={handleScrollToTop} className="text-slate-600 hover:text-brand-accent font-bold transition-all text-sm">{t('footer.archive')}</Link>
            <Link to="/about" onClick={handleScrollToTop} className="text-slate-600 hover:text-brand-accent font-bold transition-all text-sm">{t('footer.about')}</Link>
          </div>

          <div className="flex flex-col gap-4 items-center md:items-start text-center md:text-left">
            <h4 className="font-black text-[10px] uppercase tracking-[0.25em] mb-4 text-slate-400">{t('footer.connect')}</h4>
            <a href="https://www.tiktok.com/@skr17171?_r=1&_t=ZS-96SMUKnqWnv" target="_blank" rel="noopener noreferrer" className="text-slate-600 hover:text-brand-accent font-bold transition-all text-sm">TikTok</a>
            <div className="pt-2">
              <a href="mailto:807471074@qq.com" className="text-slate-900 hover:text-brand-accent font-black text-sm transition-colors">807471074@qq.com</a>
            </div>
          </div>
        </div>
      </div>
      
      <div className="bg-slate-900 py-10 px-6 text-slate-500 font-bold uppercase tracking-[0.2em] text-[10px]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <p>{t('footer.rights')}</p>
          <div className="flex items-center gap-10">
             <Link to="/privacy" onClick={handleScrollToTop} className="hover:text-white transition-colors">{t('footer.privacy')}</Link>
             <Link to="/terms" onClick={handleScrollToTop} className="hover:text-white transition-colors">{t('footer.terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
