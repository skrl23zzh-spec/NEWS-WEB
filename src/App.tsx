/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider, useLanguage } from './components/LanguageContext';
import { Header } from './components/layout/Header';
import { Hero } from './components/layout/Hero';
import { Footer } from './components/layout/Footer';
import { ArticleCard } from './components/ui/ArticleCard';
import { MOCK_ARTICLES } from './constants/mockData';
import { motion } from 'motion/react';
import { About } from './pages/About';
import { Archive } from './pages/Archive';
import { DeepSea } from './pages/DeepSea';
import { MarketRally } from './pages/MarketRally';
import { Sat6G } from './pages/Sat6G';
import { SilkRoad } from './pages/SilkRoad';
import { EnergyMilestone } from './pages/EnergyMilestone';
import { UrbanForest } from './pages/UrbanForest';
import { Privacy } from './pages/Privacy';
import { Terms } from './pages/Terms';
import { QuantumProtocol } from './pages/QuantumProtocol';
import { SemiConductor } from './pages/SemiConductor';
import { BatteryTech } from './pages/BatteryTech';
import { AIFloatingBall } from './components/ui/AIFloatingBall';
import { MessageBoard } from './components/sections/MessageBoard';

function Dashboard() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        <section id="latest-stories" className="px-6 py-16 md:py-32 max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-20 gap-6 md:gap-8 text-center md:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight mb-4 text-slate-900">
                {t('section.latest')}
              </h2>
              <div className="w-16 md:w-24 h-1 md:h-1.5 bg-brand-accent rounded-full shadow-lg shadow-indigo-100 mx-auto md:mx-0" />
            </motion.div>
            
            <p className="text-brand-secondary max-w-sm text-sm font-medium leading-relaxed">
              {t('section.latest.desc')}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {MOCK_ARTICLES.map((article, index) => (
              <ArticleCard key={article.id} article={article} index={index} />
            ))}
          </div>
        </section>

        <MessageBoard />

        {/* Newsletter Section */}
        <section className="px-6 py-20 md:py-32 bg-slate-50 border-t border-slate-100 relative overflow-hidden">
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-7xl font-black tracking-tight mb-6 text-slate-900 leading-[1.1] uppercase"
            >
              {t('newsletter.title')}
            </motion.h2>
            <p className="text-slate-500 text-lg md:text-xl mb-12 max-w-xl mx-auto leading-relaxed font-medium px-4">
              {t('newsletter.desc')}
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto bg-white p-2 rounded-[2rem] shadow-xl shadow-slate-200 border border-slate-100">
              <input 
                type="email" 
                placeholder={t('newsletter.placeholder')}
                className="flex-grow px-8 py-4 rounded-2xl bg-transparent border-none focus:outline-none transition-all placeholder:text-slate-400 font-bold text-base"
              />
              <button className="bg-slate-900 text-white px-10 py-4 rounded-2xl font-black uppercase text-xs tracking-widest hover:bg-brand-accent transition-all active:scale-95 shadow-lg">
                {t('newsletter.button')}
              </button>
            </form>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/about" element={<About />} />
          <Route path="/archive" element={<Archive />} />
          <Route path="/deep-sea" element={<DeepSea />} />
          <Route path="/market-rally" element={<MarketRally />} />
          <Route path="/sat-6g" element={<Sat6G />} />
          <Route path="/silk-road" element={<SilkRoad />} />
          <Route path="/energy-milestone" element={<EnergyMilestone />} />
          <Route path="/urban-forest" element={<UrbanForest />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/quantum-protocol" element={<QuantumProtocol />} />
          <Route path="/semi-conductor" element={<SemiConductor />} />
          <Route path="/battery-tech" element={<BatteryTech />} />
        </Routes>
        <AIFloatingBall />
      </Router>
    </LanguageProvider>
  );
}
