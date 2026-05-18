import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../components/LanguageContext';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { MessageBoard } from '../components/sections/MessageBoard';
import { Zap, Sun, Battery, Share2, Calendar, User, Lightbulb } from 'lucide-react';

export const BatteryTech: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      category: 'SCIENCE & ENERGY',
      title: 'Beyond Lithium: New Renewable Energy Battery Tech Unveiled',
      date: 'May 18, 2026',
      author: 'Sarah Jenkins',
      description: 'A revolutionary sodium-solid-state interface has promised to double the energy density of current EV batteries while eliminating fire risks.',
      body: [
        'The "Graphene-Sodium" hybrid architecture developed by the Nexus Institute represents the most significant shift in storage technology since the commercialization of Li-ion in the 90s. This new cell design utilizes abundant materials, potentially reducing battery costs by 60% within the next decade.',
        'Initial testing shows that these cells can reach an 80% charge in under 4 minutes, effectively addressing one of the most persistent hurdles to mass electric vehicle adoption. Furthermore, the solid-state nature of the electrolyte makes the batteries inert to puncture or extreme heat.',
        'Major automotive manufacturers have already formed a consortium to standardize the charging interface for this technology, signaling a rare moment of industry-wide coordination for the sake of the energy transition.'
      ]
    },
    zh: {
      category: '科学与能源',
      title: '超越锂电：新型可再生能源电池技术问世',
      date: '2026年5月18日',
      author: '莎拉·詹金斯',
      description: '革命性的钠固态界面有望将当前电动汽车电池的能量密度提高一倍，同时消除火灾风险。',
      body: [
        'Nexus 研究所开发的“石墨烯-钠”混合架构代表了自 90 年代锂离子商业化以来储能技术最重大的转变。这种新型电池设计利用丰富的材料，有望在未来十年内将电池成本降低 60%。',
        '初始测试显示，这些电池可以在 4 分钟内达到 80% 的电量，有效解决了电动汽车大规模普及面临的最持久障碍之一。此外，电解质的固态特性使电池对穿刺或极端高温具有惰性。',
        '主要汽车制造商已经成立了一个联盟，以标准化该技术的充电接口，这标志着为了能源转型而进行的难得的行业范围内协作。'
      ]
    }
  };

  const d = language === 'zh' ? content.zh : content.en;

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-amber-500 mb-6 border-b border-amber-100 pb-2 inline-block">
                  <Sun className="w-4 h-4" />
                  {d.category}
                </div>
                
                <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-8 leading-[1.1] uppercase">
                  {d.title}
                </h1>

                <div className="flex flex-wrap items-center gap-6 mb-12 text-slate-500 text-[10px] font-bold uppercase tracking-widest border-y border-slate-100 py-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    {d.date}
                  </div>
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4" />
                    {d.author}
                  </div>
                  <div className="flex items-center gap-2 ml-auto">
                    <Battery className="w-4 h-4" />
                    ENERGY TECH
                  </div>
                </div>

                <div className="aspect-[21/9] rounded-[3rem] overflow-hidden mb-12 shadow-2xl shadow-slate-200 border border-slate-100">
                  <img 
                    src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&q=80&w=2000" 
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="prose prose-slate prose-lg max-w-none">
                  <p className="text-xl md:text-2xl font-bold text-slate-600 italic mb-10 leading-relaxed border-l-4 border-amber-500 pl-8">
                    {d.description}
                  </p>
                  <div className="space-y-8">
                    {d.body.map((p, i) => (
                      <p key={i} className="text-slate-600 leading-relaxed font-medium">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            <aside className="lg:col-span-4 space-y-8">
              <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white">
                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-amber-400 mb-4">{language === 'zh' ? '性能对比' : 'PERFORMANCE SPECS'}</h4>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-[10px] font-black mb-2">
                      <span>{language === 'zh' ? '能量密度' : 'ENERGY DENSITY'}</span>
                      <span className="text-amber-400">+100%</span>
                    </div>
                    <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-500 w-full" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[10px] font-black mb-2">
                      <span>{language === 'zh' ? '充电速度' : 'CHARGING SPEED'}</span>
                      <span className="text-amber-400">4 MIN</span>
                    </div>
                    <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-amber-400 w-[90%]" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-amber-50 rounded-[2.5rem] border border-amber-100 flex flex-col items-center text-center">
                <Lightbulb className="w-12 h-12 text-amber-500 mb-4" />
                <h4 className="text-lg font-black text-slate-900 uppercase mb-2">{language === 'zh' ? '创新洞察' : 'INNOVATION INSIGHTS'}</h4>
                <p className="text-xs text-slate-500 font-bold mb-6">{language === 'zh' ? '探索未来储能技术的无限可能' : 'Explore the potential of future storage tech'}</p>
                <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-amber-600 transition-all">
                  {language === 'zh' ? '订阅专题' : 'SUBSCRIBE TOPIC'}
                </button>
              </div>
            </aside>
          </div>
        </div>
        <MessageBoard topic="battery-tech" />
      </main>
      <Footer />
    </div>
  );
};
