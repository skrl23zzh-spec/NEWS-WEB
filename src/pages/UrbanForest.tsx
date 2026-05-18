import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../components/LanguageContext';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { MessageBoard } from '../components/sections/MessageBoard';
import { TreePine, Wind, Heart, Map, Building2, Camera } from 'lucide-react';

export const UrbanForest: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      tag: "URBAN DESIGN 2026",
      title: "The Green Metropolis: Why the City of the Future is a Forest",
      subtitle: "New architectural protocols are mandating 40% canopy cover for all new developments.",
      overview: "Climate adaptation has moved from the outskirts to the city center. The 'Green Canopy' initiative has transformed formerly gray industrial districts into thriving urban forests, reducing local heat island effects by nearly 5 degrees.",
      detailedContent: [
        "In cities today, concrete is no longer the king. A radical shift in urban planning has begun to prioritize 'Biophilic Infrastructure'—the integration of living ecosystems into the very fabric of our buildings and streets. This isn't just about planting more trees; it's about rebuilding the city as a functional, carbon-capturing forest.",
        "The latest projects in Singapore, Paris, and Shenzhen have demonstrated that high-density living can coexist with rich biodiversity. Vertical forests—residential towers covered in thousands of trees—now filter air pollutants and provide natural cooling, drastically reducing the energy load of traditional air conditioning systems.",
        "But the benefits go beyond the environment. Public health data from 'Reforested Districts' shows a' 20% decrease in respiratory issues and a significant improvement in the reported mental well-being of residents. Strolling through a wooded boulevard on the way to work is proving to be the ultimate antidote to the stresses of modern metropolitan life.",
        "To ensure long-term viability, urban forests are managed by 'Smart Soil' networks—automated irrigation systems that use recycled greywater and predictive weather models to maintain optimal health for every tree. Each sapling is tagged with a digital identity, or 'Tree-ID', allowing citizens to track its growth and contribution to the city's overall oxygen output."
      ],
      features: [
        {
          icon: <Wind className="w-6 h-6" />,
          title: "Microclimate Control",
          desc: "Native canopy cover reduces street-level temperatures and mitigates the urban heat island effect."
        },
        {
          icon: <Heart className="w-6 h-6" />,
          title: "Wellness Dividends",
          desc: "Access to green space is now a key metric in urban quality-of-life rankings worldwide."
        },
        {
          icon: <Building2 className="w-6 h-6" />,
          title: "Living Facades",
          desc: "Buildings are now designed as vertical ecosystems that capture carbon and support local pollinators."
        }
      ]
    },
    zh: {
      tag: "城市设计 2026",
      title: "绿色大都市：为什么未来的城市是一座森林",
      subtitle: "新的建筑规范要求所有新开发项目的林冠覆盖率达到 40%。",
      overview: "气候适应已从郊区转移到市中心。“绿阴”倡议已将以前灰色的工业区转变为繁茂的城市森林，将局部热岛效应降低了近 5 度。",
      detailedContent: [
        "在今天的城市中，混凝土不再是王者。城市规划发生了根本性转变，开始优先考虑“亲生物基础设施”——将活生生的生态系统整合到我们的建筑和街道结构中。这不仅仅是种植更多的树木；它是要将城市重建为一个功能性的、能够捕获碳的森林。",
        "新加坡、巴黎和深圳的最新项目表明，高密度生活可以与丰富的生物多样性共存。垂直森林——覆盖着数千棵树木的住宅楼——现在可以过滤空气污染物并提供自然冷却，大幅降低了传统空调系统的能源负荷。",
        "但其好处不仅限于环境。“森林区”的公共卫生数据显示，呼吸系统问题的发生率降低了 20%，居民报告的心理健康状况也有显著改善。上班途中漫步在林荫大道上，正被证明是缓解现代大都市生活压力的终极良药。",
        "为了确保长期可行性，城市森林由“智能土壤”网络管理——自动化灌溉系统利用回收的中水和预测性天气模型来维持每棵树的最佳健康状态。每棵幼苗都贴有数字身份标签“Tree-ID”，让市民可以追踪其生长以及对城市整体氧气输出的贡献。"
      ],
      features: [
        {
          icon: <Wind className="w-6 h-6" />,
          title: "微气候控制",
          desc: "原生林冠覆盖降低了街道层面的温度，并缓解了城市热岛效应。"
        },
        {
          icon: <Heart className="w-6 h-6" />,
          title: "健康紅利",
          desc: "进入绿地现已成为全球城市生活质量排名的关键指标。"
        },
        {
          icon: <Building2 className="w-6 h-6" />,
          title: "活体建筑",
          desc: "现在的建筑被设计成垂直生态系统，可以捕获碳并支持当地的传粉昆虫。"
        }
      ]
    }
  };

  const d = language === 'zh' ? content.zh : content.en;

  return (
    <div className="min-h-screen bg-emerald-50/30">
      <Header />
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="px-4 py-1.5 bg-emerald-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full shadow-lg shadow-emerald-200">
                {d.tag}
              </span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <Map className="w-3 h-3" />
                METRO SECTOR 01
              </span>
            </div>
            <h1 className="text-4xl md:text-8xl font-black tracking-tight text-slate-900 mb-8 leading-[1.1] uppercase">
              {d.title}
            </h1>
            <p className="text-xl md:text-3xl text-emerald-800 font-bold max-w-4xl leading-tight">
              {d.subtitle}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-12">
              <div className="aspect-[21/9] rounded-[3.5rem] overflow-hidden shadow-2xl border border-white relative group">
                <img 
                  src="https://images.unsplash.com/photo-1449824913935-59a10b8d2000?auto=format&fit=crop&q=80&w=2000" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/40 to-transparent" />
                <div className="absolute bottom-8 left-8 p-6 bg-white/10 backdrop-blur-xl rounded-[2.5rem] border border-white/20 text-white">
                  <div className="flex items-center gap-3 mb-2">
                    <TreePine className="w-6 h-6 text-emerald-400" />
                    <span className="text-sm font-black uppercase tracking-widest">Active Reforestation</span>
                  </div>
                  <div className="text-3xl font-black tabular-nums tracking-tighter">CANOPY: 42.8%</div>
                </div>
              </div>

              <div className="bg-white p-10 md:p-16 rounded-[4rem] border border-emerald-100 shadow-sm relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-50 rounded-full translate-x-1/2 -translate-y-1/2 opacity-50 blur-3xl" />
                <div className="relative z-10 prose prose-emerald prose-xl max-w-none">
                  <p className="text-2xl font-bold text-emerald-700 mb-12 leading-relaxed border-l-8 border-emerald-500 pl-10 italic">
                    {d.overview}
                  </p>
                  <div className="space-y-10">
                    {d.detailedContent.map((p, i) => (
                      <p key={i} className="text-slate-600 leading-relaxed font-medium">
                        {p}
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {d.features.map((f, i) => (
                  <div key={i} className="p-8 bg-white rounded-[3rem] border border-emerald-100 flex flex-col group hover:bg-emerald-600 transition-all shadow-sm">
                    <div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center mb-8 group-hover:bg-white/20 transition-colors text-emerald-600 group-hover:text-white">
                      {f.icon}
                    </div>
                    <h4 className="text-lg font-black uppercase mb-3 leading-tight group-hover:text-white">{f.title}</h4>
                    <p className="text-xs text-slate-400 font-bold leading-relaxed group-hover:text-white/80">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="lg:col-span-4 space-y-8">
              <div className="p-8 bg-slate-900 rounded-[3rem] text-white">
                <h4 className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-400 mb-8 border-b border-emerald-900/50 pb-4">{language === 'zh' ? '环境数据' : 'ENVIRONMENTAL DATA'}</h4>
                <div className="space-y-10">
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-400">
                      <span>Air Quality Index</span>
                      <span className="text-emerald-400">GOOD (12)</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-500 w-[95%]" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-slate-400">
                      <span>Temp. Mitigation</span>
                      <span className="text-emerald-400">-4.8°C</span>
                    </div>
                    <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
                      <div className="h-full bg-emerald-400 w-[85%]" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-10 bg-emerald-100 rounded-[3.5rem] border border-emerald-200 flex flex-col items-center text-center">
                <Camera className="w-16 h-16 text-emerald-600 mb-6" />
                <h4 className="text-2xl font-black text-emerald-900 uppercase mb-4 leading-[1.1]">{language === 'zh' ? '虚拟步道' : 'VIRTUAL TRAIL'}</h4>
                <p className="text-sm font-bold text-emerald-800/60 mb-8 leading-relaxed max-w-[200px]">{language === 'zh' ? '全景体验城市森林的宁静。' : 'Experience the tranquility of the urban forest in panoramic 360°.'}</p>
                <button className="w-full py-5 bg-emerald-900 text-white rounded-3xl font-black uppercase text-[10px] tracking-[0.2em] shadow-xl shadow-emerald-900/20 hover:bg-emerald-800 transition-all">
                  {language === 'zh' ? '进入体验' : 'ENTER EXPERIENCE'}
                </button>
              </div>
            </aside>
          </div>
        </div>
        <MessageBoard topic="urban-reforestation" />
      </main>
      <Footer />
    </div>
  );
};
