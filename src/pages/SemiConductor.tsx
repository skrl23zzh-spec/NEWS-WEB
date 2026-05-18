import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../components/LanguageContext';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { MessageBoard } from '../components/sections/MessageBoard';
import { Globe2, TrendingUp, ShieldCheck, Share2, Calendar, User, Briefcase } from 'lucide-react';

export const SemiConductor: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      category: 'ECONOMICS',
      title: 'The Great Shift: Global Semiconductor Supply Chain Reorganization Complete',
      date: 'May 17, 2026',
      author: 'Marcus Thorne',
      description: 'After three years of intensive geopolitical maneuvering and multi-billion dollar domestic investments, the global map of compute production has been redrawn.',
      body: [
        'The "Silicon Reshore" movement has reached its final phase. As of this month, nearly 45% of advanced sub-5nm fabrication capacity is now distributed across North American and European hubs, significantly reducing the reliance on a single geographic point of failure.',
        'This reorganization hasn\'t come without cost. Global chip prices have stabilized at a higher baseline, reflecting the increased labor and environmental overhead of localized production. However, strategic autonomy is now the primary priority for world governments.',
        'Emerging players in Southeast Asia have also consolidated their position as the world\'s premiere testing and packaging hub, creating a more resilient "hub-and-spoke" model that industry analysts believe can withstand even extreme logistical disruptions.'
      ]
    },
    zh: {
      category: '经济',
      title: '大变局：全球半导体供应链重组基本完成',
      date: '2026年5月17日',
      author: '马库斯·索恩',
      description: '经过三年的密集地缘政治博弈和数百亿美元的国内投资，全球计算生产版图已经重绘。',
      body: [
        '“硅回流”运动已进入最后阶段。截至本月，近 45% 的 5 纳米以下先进制造产能已分布在北美和欧洲中心，显著降低了对单一地理故障点的依赖。',
        '这种重组并非没有代价。全球芯片价格已稳定在较高的基准水平，反映了局部生产增加的劳动力和环境成本。然而，战略自主权现在是各国政府的首要任务。',
        '东南亚的新兴企业也巩固了其作为全球首屈一指的测试和封装中心的地位，建立了一个更具韧性的“轮辐”模型，行业分析师认为该模型甚至可以承受极端物流中断。'
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
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-emerald-600 mb-6 border-b border-emerald-100 pb-2 inline-block">
                  <TrendingUp className="w-4 h-4" />
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
                    <Briefcase className="w-4 h-4" />
                    MARKET NEWS
                  </div>
                </div>

                <div className="aspect-[21/9] rounded-[3rem] overflow-hidden mb-12 shadow-2xl shadow-slate-200 border border-slate-100">
                  <img 
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2000" 
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="prose prose-slate prose-lg max-w-none">
                  <p className="text-xl md:text-2xl font-bold text-slate-600 italic mb-10 leading-relaxed border-l-4 border-emerald-500 pl-8">
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
                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-emerald-400 mb-4">{language === 'zh' ? '供应链数据' : 'SUPPLY CHAIN STATS'}</h4>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between text-[10px] font-black mb-2">
                      <span>{language === 'zh' ? '自主化比例' : 'DOMESTIC RATIO'}</span>
                      <span className="text-emerald-400">45%</span>
                    </div>
                    <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 w-[45%]" />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-[10px] font-black mb-2">
                      <span>{language === 'zh' ? '价格稳定性' : 'PRICE STABILITY'}</span>
                      <span className="text-emerald-400">82%</span>
                    </div>
                    <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 w-[82%]" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-emerald-50 rounded-[2.5rem] border border-emerald-100 flex flex-col items-center text-center">
                <ShieldCheck className="w-12 h-12 text-emerald-500 mb-4" />
                <h4 className="text-lg font-black text-slate-900 uppercase mb-2">{language === 'zh' ? '战略周报' : 'STRATEGIC REPORT'}</h4>
                <p className="text-xs text-slate-500 font-bold mb-6">{language === 'zh' ? '深入了解半导体地缘政治局势' : 'Deep dive into semiconductor geopolitics'}</p>
                <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-emerald-600 transition-all">
                  {language === 'zh' ? '下载报告' : 'DOWNLOAD REPORT'}
                </button>
              </div>
            </aside>
          </div>
        </div>
        <MessageBoard topic="semi-conductor" />
      </main>
      <Footer />
    </div>
  );
};
