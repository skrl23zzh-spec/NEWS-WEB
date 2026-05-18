import React from 'react';
import { motion } from 'motion/react';
import { useNavigate, Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';
import { ArrowDownRight, TrendingUp } from 'lucide-react';
import { MOCK_ARTICLES } from '../../constants/mockData';

export const Hero: React.FC = () => {
  const { t, language } = useLanguage();
  const navigate = useNavigate();

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 -z-10 opacity-30 transform translate-x-1/2 -translate-y-1/2">
        <div className="w-[800px] h-[800px] rounded-full border border-gray-200" />
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
          <div className="text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="inline-block px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-700 text-[10px] font-extrabold uppercase tracking-[0.2em] mb-4 md:mb-8"
            >
              {t('hero.featured')}
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-slate-900 leading-[1.1] md:leading-[1.05] tracking-tight mb-6 md:mb-8"
            >
              {t('hero.title')}
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-base md:text-xl text-brand-secondary leading-relaxed max-w-md mx-auto md:mx-0 mb-8 md:mb-12"
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="flex flex-wrap justify-center md:justify-start gap-4"
            >
              <button 
                onClick={() => {
                  const randomIdx = Math.floor(Math.random() * MOCK_ARTICLES.length);
                  const randomArticle = MOCK_ARTICLES[randomIdx];
                  navigate(randomArticle.url);
                }}
                className="flex-1 sm:flex-none px-8 py-4 bg-slate-900 text-white rounded-2xl font-bold hover:shadow-xl hover:shadow-indigo-500/10 transition-all transform hover:-translate-y-1"
              >
                {t('hero.btn.primary')}
              </button>
              <button 
                onClick={() => {
                  const board = document.getElementById('message-board');
                  board?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="flex-1 sm:flex-none px-8 py-4 bg-white border border-slate-200 text-slate-900 rounded-2xl font-bold hover:bg-slate-50 transition-all active:scale-95"
              >
                {t('hero.btn.secondary')}
              </button>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col gap-6"
          >
            <Link 
              to="/quantum-protocol"
              className="relative group overflow-hidden rounded-[2.5rem] md:rounded-[3rem] shadow-2xl border border-slate-100 aspect-square md:aspect-auto md:h-[400px]"
            >
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1000" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                alt="Technology"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent flex flex-col justify-end p-8 md:p-12">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/60 mb-2">{t('hero.featured')}</span>
                <h3 className="text-xl md:text-3xl font-black text-white leading-tight mb-4">
                  {language === 'zh' ? '量子计算协议 2026：定义物理边界' : 'Quantum Protocol 2026: Defining Physics Boundaries'}
                </h3>
                <div className="flex items-center gap-4 text-white/50 text-[10px] font-bold uppercase tracking-widest">
                  <span>Sina Tech</span>
                  <span className="w-1 h-1 bg-white/20 rounded-full" />
                  <span>5 MIN READ</span>
                </div>
              </div>
            </Link>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[1, 2].map(i => (
                <Link 
                  key={i} 
                  to={i === 1 ? "/semi-conductor" : "/battery-tech"}
                  className="p-8 bg-white rounded-[2rem] border border-slate-100 hover:border-indigo-200 transition-all flex flex-col justify-between group shadow-sm"
                >
                  <div>
                    <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-indigo-500 mb-4">
                      <TrendingUp className="w-3 h-3" />
                      {language === 'zh' ? '热门' : 'Trending'}
                    </div>
                    <h4 className="text-base font-bold text-slate-900 line-clamp-2 leading-tight group-hover:text-indigo-600 transition-colors">
                      {i === 1 
                        ? (language === 'zh' ? '全球半导体供应链重组完成' : 'Global Semiconductor Supply Chain Reorganization Complete')
                        : (language === 'zh' ? '新型可再生能源电池技术问世' : 'New Renewable Energy Battery Tech Unveiled')
                      }
                    </h4>
                  </div>
                  <div className="mt-6 flex items-center justify-between text-[10px] font-black uppercase tracking-widest text-slate-400">
                    <span>{i === 1 ? 'ECONOMICS' : 'SCIENCE'}</span>
                    <ArrowDownRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
