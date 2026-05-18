import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../components/LanguageContext';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { MessageBoard } from '../components/sections/MessageBoard';
import { Sun, Battery, CloudLightning, TreePine, Leaf, ThermometerSun } from 'lucide-react';

export const EnergyMilestone: React.FC = () => {
  const { t, language } = useLanguage();

  const content = {
    en: {
      tag: "Climate & Energy",
      title: "Renewable Power Milestone: 2026 Solar Output Record",
      subtitle: "New energy structures stabilize as solar and wind integration reaches the critical 50% threshold.",
      overview: "The second quarter of 2026 has proven to be a historic period for global decarbonization. With the integration of next-generation perovskite-silicon tandem cells into the national grid, renewable output has officially matched fossil fuel generation for the first time in an industrial heavyweight nation.",
      detailedContent: [
        "The shift towards a carbon-neutral economy is no longer a distant aspiration; it is our current reality. The recent activation of the 'Aurora-7' solar field has pushed the total national renewable capacity beyond the symbolic 50% mark. This achievement was made possible by the commercial-scale deployment of tandem cell technology, which captures a much broader spectrum of sunlight than traditional silicon panels, reaching efficiency rates exceeding 30%.",
        "However, generation is only half the battle. The true breakthrough of 2026 lies in the synchronization of the grid. Through a network of 'Virtual Power Plants' (VPPs) controlled by localized AI, the erratic nature of wind and solar is being smoothed out. These AI systems predict cloud cover and wind speed fluctuations with millisecond precision, liquidating and storing surplus energy in massive urban gravity batteries and decentralized solid-state hubs.",
        "Socially, the 'Energy Empowerment' program has begun to decentralize the power structure. Small communities and industrial parks are now operating as semi-autonomous energy islands, trading surplus power on a blockchain-secured local market. This has not only lowered energy costs for local businesses but has also created a more resilient infrastructure that is practically immune to large-scale grid failures.",
        "As we move into the second half of the decade, the focus is expanding towards 'Deep Decarbonization.' This involves using the seasonal surplus of renewable energy to power massive carbon capture facilities and green hydrogen electrolyzers, effectively turning our energy peaks into a tool for active atmospheric repair."
      ],
      impacts: [
        {
          icon: <Battery className="w-6 h-6" />,
          title: "Storage Revolution",
          desc: "New solid-state battery hubs have increased grid resilience, allowing for 24/7 delivery of renewable-sourced energy."
        },
        {
          icon: <Leaf className="w-6 h-6" />,
          title: "Emission Deficit",
          desc: "National carbon emissions have dropped 12% faster than projected in the 2024 climate models."
        },
        {
          icon: <Sun className="w-6 h-6" />,
          title: "Grid Intelligence",
          desc: "AI-driven demand response protocols have reduced energy waste by 18% during peak hours."
        }
      ],
      chartTitle: "Energy Mix Evolution",
      data: [
        { label: "Renewables", value: "52%" },
        { label: "Natural Gas", value: "24%" },
        { label: "Coal/Other", value: "24%" }
      ]
    },
    zh: {
      tag: "气候与能源",
      title: "可再生能源里程碑：2026 太阳能发电量纪录",
      subtitle: "随着太阳能和风能集成达到 50% 的关键阈值，新能源结构趋于稳定。",
      overview: "2026 年第二季度已被证明是全球脱碳历史上的一个重要时期。随着下一代钙钛矿-硅叠层电池集成到国家电网中，可再生能源产量在某个工业大国中首次正式赶上了化石燃料发电量。",
      detailedContent: [
        "向碳中和经济的转变不再是一个遥远的愿望；它已成为我们当下的现实。“Aurora-7”太阳能场的最新启动已将国家总可再生能源容量推向了具有象征意义的 50% 大关。这一成就通过钙钛矿-硅叠层电池技术的商业规模部署得以实现，这种技术捕获的阳光光谱比传统的硅板广得多，效率突破了 30%。",
        "然而，发电只是成功的一半。2026 年真正的突破在于电网的同步。通过由本地 AI 控制的“虚拟电厂”(VPP) 网络，风能和太阳能的波动性正在被平抚。这些 AI 系统能以毫秒级的精度预测云层和风速波动，将多余的能量结算并存储在巨大的城市重力电池和去中心化的固态枢纽中。",
        "在社会层面，“能源赋权”计划已开始分散电力结构。小型社区和工业园区现在作为半自主的能源岛运营，在区块链担保的本地市场上交易盈余电力。这不仅降低了本地企业的能源成本，还创造了一个更加坚韧的基础设施，几乎免疫了大规模的电网故障。",
        "随着我们进入这十年的下半叶，重点正在转向“深度脱碳”。这包括利用季节性的可再生能源盈余为大规模碳捕捉设施和绿氢电解槽供电，从而有效地将我们的能源高峰转化为大气主动修复的工具。"
      ],
      impacts: [
        {
          icon: <Battery className="w-6 h-6" />,
          title: "储能革命",
          desc: "新型固态电池枢纽提高了电网弹性，实现了 24/7 全天候输送可再生能源。"
        },
        {
          icon: <Leaf className="w-6 h-6" />,
          title: "碳减排",
          desc: "国家碳排放量下降的速度比 2024 年气候模型预测的快 12%。"
        },
        {
          icon: <Sun className="w-6 h-6" />,
          title: "智能电网",
          desc: "人工智能驱动的需求响应协议在高峰时段减少了 18% 的能源浪费。"
        }
      ],
      chartTitle: "能源结构演变",
      data: [
        { label: "可再生能源", value: "52%" },
        { label: "天然气", value: "24%" },
        { label: "煤炭/其他", value: "24%" }
      ]
    }
  };

  const d = content[language];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      <Header />
      <main className="flex-grow pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-16"
          >
            <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-green-600 mb-4 inline-block px-3 py-1 bg-green-50 rounded-full border border-green-100">
              {d.tag}
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-slate-900 leading-[0.95]">
              {d.title}
            </h1>
            <p className="text-xl md:text-2xl text-brand-secondary font-medium max-w-3xl leading-relaxed">
              {d.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="relative rounded-[3.5rem] overflow-hidden mb-12 shadow-2xl">
                 <img 
                   src="https://images.unsplash.com/photo-1508514177221-188b1cf16e9d?auto=format&fit=crop&q=80&w=1200" 
                   className="w-full h-[500px] object-cover"
                   alt="Energy"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                 <div className="absolute bottom-10 left-10 right-10 flex flex-wrap gap-4">
                    {d.data.map((item, i) => (
                      <div key={i} className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 text-white">
                         <div className="text-[10px] font-bold uppercase tracking-widest opacity-70 mb-1">{item.label}</div>
                         <div className="text-2xl font-extrabold">{item.value}</div>
                      </div>
                    ))}
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {d.impacts.map((imp, i) => (
                  <div key={i} className="p-8 bg-white rounded-[2.5rem] border border-slate-100">
                    <div className="text-green-600 mb-6">{imp.icon}</div>
                    <h3 className="font-extrabold mb-3">{imp.title}</h3>
                    <p className="text-sm text-brand-secondary leading-relaxed font-medium">{imp.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <aside className="space-y-8">
              <div className="p-10 bg-white rounded-[3.5rem] border border-slate-100 shadow-xl shadow-green-500/5">
                <h3 className="text-xl font-extrabold mb-6 flex items-center gap-2">
                  <TreePine className="w-6 h-6 text-green-600" />
                  {language === 'en' ? 'Report Summary' : '报告摘要'}
                </h3>
                <p className="text-brand-secondary leading-relaxed font-medium mb-10">
                  {d.overview}
                </p>

                <div className="space-y-8">
                  {d.detailedContent.map((paragraph, idx) => (
                    <p key={idx} className="text-lg text-slate-600 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            </aside>
          </div>
        </div>
        <MessageBoard topic="energy-milestone" />
      </main>
      <Footer />
    </div>
  );
};
