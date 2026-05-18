import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../components/LanguageContext';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { MessageBoard } from '../components/sections/MessageBoard';
import { Waves, Thermometer, Database, Microscope, Anchor, Share2, Compass } from 'lucide-react';

export const DeepSea: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      tag: "OCEANOGRAPHY EXCLUSIVE",
      title: "Abyss Horizons: China & EU Activate Permanent Deep-Sea Station",
      subtitle: "The dual-core research facility at 6,000 meters depth marks a new era in planetary exploration.",
      overview: "Located in the Hadal zone of the North Pacific, the 'Abyss Horizons' station is a technological marvel designed to withstand pressures equivalent to 600 atmosphere. It is the first permanent human-tended facility on the deep ocean floor.",
      detailedContent: [
        "The project, a landmark collaboration between leading maritime research institutes, was officially activated this week. Consisting of two interconnected modular hulls, the station serves as a long-term observatory for deep-sea hydrothermal vents and the unique extremophile life forms that inhabit them.",
        "Equipped with advanced mass spectrometers and high-definition acoustic cameras, Abyss Horizons provides real-time data back to land-based centers via high-speed fiber-optic linkages. Researchers can now monitor the pulse of the tectonic plates and the chemical composition of the benthic boundary layer without the limitations of short-term dive missions.",
        "Initial readings from the station have already provided surprising data on the rate of carbon sequestration in the deep ocean, suggesting that the 'biological pump' of our planet may be more complex than previously modeled. This data is critical for refining our global climate transition strategies.",
        "Safety remains the highest priority. The station utilizes a revolutionary 'Ceram-Steel' composite hull that actually strengthens under pressure. While currently operated primarily by autonomous systems and remote-controlled ROVs, the station includes a pressurized living module capable of hosting a rotating crew of four scientists for month-long observation cycles."
      ],
      keyMetrics: [
        {
          icon: <Thermometer className="w-6 h-6" />,
          title: "Extreme Stats",
          desc: "Operational at 6,000m depth, maintaining precise ambient monitoring in near-freezing currents."
        },
        {
          icon: <Database className="w-6 h-6" />,
          title: "Real-time Flow",
          desc: "TB-per-day data transmission rate via dedicated deep-sea fiber optic cabling."
        },
        {
          icon: <Microscope className="w-6 h-6" />,
          title: "Bio-Cataloging",
          desc: "Automated DNA sequencing of benthic microbes to map the deep ocean genome."
        }
      ]
    },
    zh: {
      tag: "海洋学独家报道",
      title: "深渊地平线：中欧启用永久性深海研究站",
      subtitle: "位于 6000 米深处的双核心研究设施标志着行星探索的新纪元。",
      overview: "“深渊地平线”研究站位于北太平洋的超深渊带，是一项技术奇迹，旨在承受相当于 600 个大气压的压力。它是深海海底首个永久性的载人维护设施。",
      detailedContent: [
        "该项目是领先的海洋研究机构之间的标志性合作，于本周正式启用。该站由两个相互连接的模块化船体组成，是深海热液喷口及其栖息的独特嗜极生命形式的长期观测站。",
        "“深渊地平线”配备了先进的质谱仪和高清声学摄像机，通过高速光纤链路将实时数据传回陆基中心。研究人员现在可以监测构造板块的脉动和底栖边界层的化学成分，而不再受限于短期潜水任务。",
        "该站的初步读数已经提供了关于深海碳封存率的惊人数据，表明我们星球的“生物泵”可能比之前的模型更为复杂。这些数据对于完善我们的全球气候转型战略至关重要。",
        "安全仍然是重中之重。该站采用了一种革命性的“陶瓷钢”复合材料船体，在压力下其实会变得更强。虽然目前主要由自主系统和远程控制的 ROV 运行，但该站包含一个加压居住模块，能够容纳四名科学家组成的轮流团队进行为期一个月的观测周期。"
      ],
      keyMetrics: [
        {
          icon: <Thermometer className="w-6 h-6" />,
          title: "极端数据",
          desc: "在 6000 米深度运行，在接近冰点的洋流中保持精确的环境监测。"
        },
        {
          icon: <Database className="w-6 h-6" />,
          title: "实时流",
          desc: "通过专用的深海光纤电缆，每日数据传输率达到 TB 级。"
        },
        {
          icon: <Microscope className="w-6 h-6" />,
          title: "生物编目",
          desc: "底栖微生物的自动化 DNA 测序，旨在绘制深海基因组图谱。"
        }
      ]
    }
  };

  const d = language === 'zh' ? content.zh : content.en;

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <main className="pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <span className="px-3 py-1 bg-indigo-600 text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                {d.tag}
              </span>
              <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2">
                <Compass className="w-3 h-3" />
                PACIFIC SECTOR 04
              </span>
            </div>
            <h1 className="text-4xl md:text-7xl font-black tracking-tight text-slate-900 mb-6 leading-[1.1] uppercase">
              {d.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-500 font-bold max-w-4xl leading-tight">
              {d.subtitle}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-12">
            <div className="lg:col-span-8 space-y-12">
              <div className="aspect-[21/9] rounded-[3rem] overflow-hidden shadow-2xl border border-slate-100 relative group">
                <img 
                  src="https://images.unsplash.com/photo-1551244072-5d12893278ab?auto=format&fit=crop&q=80&w=2000" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute top-8 left-8 p-4 bg-black/40 backdrop-blur-md rounded-2xl border border-white/10 text-white">
                  <div className="flex items-center gap-2 mb-1">
                    <Waves className="w-4 h-4 text-cyan-400" />
                    <span className="text-[10px] font-black uppercase tracking-widest">Live Feed</span>
                  </div>
                  <div className="text-xl font-mono font-bold tracking-tighter">DEPTH: -6,024M</div>
                </div>
              </div>

              <div className="prose prose-slate prose-lg max-w-none bg-white p-12 rounded-[3.5rem] border border-slate-100 shadow-sm">
                <p className="text-2xl font-bold text-indigo-600 mb-10 leading-relaxed italic border-l-4 border-indigo-500 pl-8">
                  {d.overview}
                </p>
                <div className="space-y-8">
                  {d.detailedContent.map((p, i) => (
                    <p key={i} className="text-slate-600 leading-relaxed font-medium">
                      {p}
                    </p>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {d.keyMetrics.map((m, i) => (
                  <div key={i} className="p-8 bg-slate-900 rounded-[2.5rem] text-white flex flex-col group hover:bg-indigo-600 transition-colors">
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center mb-6 group-hover:bg-white/20 transition-colors">
                      {m.icon}
                    </div>
                    <h4 className="text-lg font-black uppercase mb-2 leading-tight">{m.title}</h4>
                    <p className="text-xs text-slate-400 font-bold leading-relaxed group-hover:text-white/80">{m.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="lg:col-span-4 space-y-8">
              <div className="p-8 bg-white rounded-[2.5rem] border border-slate-100 shadow-sm">
                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-slate-400 mb-6 border-b pb-4">{language === 'zh' ? '项目伙伴' : 'PROJECT PARTNERS'}</h4>
                <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
                       <Anchor className="w-6 h-6 text-slate-400" />
                    </div>
                    <div>
                      <div className="text-sm font-black text-slate-900 uppercase">Blue Ocean Initiative</div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Lead Engineering</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center">
                       <Microscope className="w-6 h-6 text-slate-400" />
                    </div>
                    <div>
                      <div className="text-sm font-black text-slate-900 uppercase">Nexus Geo-Sensing</div>
                      <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Sensor Networks</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 bg-indigo-600 rounded-[2.5rem] text-white relative overflow-hidden group">
                <div className="absolute -right-4 -bottom-4 opacity-10 transform rotate-12 transition-transform group-hover:scale-110">
                  <Waves className="w-48 h-48" />
                </div>
                <h4 className="text-lg font-black uppercase mb-4 leading-tight">{language === 'zh' ? '深海直播专线' : 'ABYSS LIVE FEED'}</h4>
                <p className="text-xs font-bold text-white/70 mb-8 leading-relaxed italic">{language === 'zh' ? '通过实时 VR 相机，近距离观察从未见过的深海生态系统。' : 'Watch never-before-seen deep-sea ecosystems through our real-time VR cameras.'}</p>
                <button className="w-full py-4 bg-white text-indigo-600 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] shadow-xl hover:bg-slate-100 transition-all flex items-center justify-center gap-2">
                  <Share2 className="w-3 h-3" />
                  {language === 'zh' ? '开启探索' : 'START EXPLORATION'}
                </button>
              </div>
            </aside>
          </div>
        </div>
        <MessageBoard topic="deep-sea-discovery" />
      </main>
      <Footer />
    </div>
  );
};
