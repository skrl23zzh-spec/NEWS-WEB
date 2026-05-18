import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../components/LanguageContext';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { MessageBoard } from '../components/sections/MessageBoard';
import { TrendingUp, BarChart3, Globe2, Briefcase, Zap, ShieldCheck } from 'lucide-react';

export const MarketRally: React.FC = () => {
  const { t, language } = useLanguage();

  const content = {
    en: {
      tag: "Economic Analysis",
      title: "Global Markets Rally as 2026 Tech Recovery Gains Momentum",
      subtitle: "A synchronized surge across major indices as productivity metrics exceed pre-2024 levels.",
      overview: "The second quarter of 2026 has witnessed an unprecedented rally in global stock markets. Driven by a resurgence in the technology sector, particularly in hardware and AI infrastructure, the gains reflect a structural shift in investor sentiment toward long-term growth assets.",
      detailedContent: [
        "The financial landscape of 2026 is being reshaped by a 'Great Synchronization.' For the first time in nearly a decade, we are seeing correlated growth across major global indices, unfettered by the stagnant inflation fears of the early 2020s. The Nasdaq-200 and the Hang Seng Tech Index have both hit all-time highs this month, supported by robust earnings reports from the 'Foundational Five'—the conglomerate leaders in autonomous systems and orbital communications.",
        "Central to this rally is the normalization of the global supply chain. The massive investments in domestic semiconductor fabrication that began in 2022 have finally reached full capacity. This has eliminated the inventory bottlenecks that once throttled the consumer electronics sector, leading to a 32% increase in year-over-year tech shipments. Investors are no longer pricing in scarcity; they are pricing in abundance.",
        "Moreover, the 'AI Productivity Dividend' is starting to show up on corporate balance sheets across non-tech sectors. From traditional manufacturing to hospitality, the integration of specialized micro-models has led to an average 15% reduction in operational costs. This has allowed companies to expand their margins even in a competitive environment, fueling a broader market confidence that extends well beyond the Silicon Valley bubble.",
        "As we look toward the fiscal year-end, the attention is turning to the 'Green Bond' market. Renewable energy infrastructure has become the preferred hedge against traditional energy volatility, attracting record-breaking inflows from sovereign wealth funds. This shift suggests that the 2026 rally is not a temporary bubble, but rather the foundation of a new, more sustainable economic cycle."
      ],
      keyInsights: [
        {
          icon: <BarChart3 className="w-6 h-6" />,
          title: "Hardware Rebound",
          desc: "Semiconductor throughput has increased by 45% year-over-year, clearing the supply gluts of the previous decade."
        },
        {
          icon: <Globe2 className="w-6 h-6" />,
          title: "Emerging Synergy",
          desc: "New trade corridors in Southeast Asia and Africa are contributing to a more diversified global trade volume."
        },
        {
          icon: <ShieldCheck className="w-6 h-6" />,
          title: "Stable Inflation",
          desc: "Central banks report core inflation hovering near target at 2.1%, allowing for accommodative monetary policy."
        }
      ],
      dataPointTitle: "Sector Performance",
      dataPoints: [
        { label: "AI Infrastructure", value: "+28.4%", color: "bg-brand-accent" },
        { label: "Renewable Energy", value: "+15.8%", color: "bg-indigo-400" },
        { label: "Consumer Tech", value: "+12.2%", color: "bg-slate-400" }
      ]
    },
    zh: {
      tag: "经济分析",
      title: "2026 科技复苏势头强劲，全球市场迎来大涨",
      subtitle: "随着生产力指标超过 2024 年前的水平，各大指数出现同步飙升。",
      overview: "2026 年第二季度见证了全球股市前所未有的反弹。在科技板块复苏（尤其是硬件和人工智能基础设施）的推动下，这些收益反映了投资者情绪向长期增长资产的结构性转折。",
      detailedContent: [
        "2026 年的金融格局正在被一场“大同步”重塑。这是近十年来我们首次看到全球主要指数出现相关性增长，且未受 2020 年代初期停滞不前的通胀担忧影响。纳斯达克-200 指数和恒生科技指数本月均创下历史新高，这得益于“基础五巨头”（自主系统和轨道通信领域的巨头）强劲的财报支持。",
        "这次大涨的核心是全球供应链的正常化。始于 2022 年的国内半导体制造的大规模投资终于达到了满负荷生产。这消除了曾一度限制消费电子行业的库存瓶颈，导致科技产品出货量同比增长了 32%。投资者不再对“稀缺性”定价，而是对“富足性”定价。",
        "此外，“AI 生产力红利”已开始在非科技行业的企业资产负债表上显现。从传统制造业到酒店业，专业化微型模型的整合使运营成本平均降低了 15%。这使公司即使在竞争激烈的环境中也能扩大利润空间，从而推动了远远超出硅谷泡沫的更广泛的市场信心。",
        "展望财年结束，注意力正转向“绿色债券”市场。可再生能源基础设施已成为对冲传统能源波动者的首选，吸引了主权财富基金创纪录的资金流入。这种转变表明，2026 年的大涨并非暂时性的泡沫，而是新的、更可持续的经济周期的基石。"
      ],
      keyInsights: [
        {
          icon: <BarChart3 className="w-6 h-6" />,
          title: "硬件反弹",
          desc: "半导体吞吐量同比增长 45%，清除了过去十年的供应过剩。"
        },
        {
          icon: <Globe2 className="w-6 h-6" />,
          title: "新兴协同效应",
          desc: "东南亚和非洲的新贸易走廊正在促进更加多元化的全球贸易额。"
        },
        {
          icon: <ShieldCheck className="w-6 h-6" />,
          title: "通胀稳定",
          desc: "各国央行报告核心通胀率维持在 2.1% 的目标附近，允许实施宽松的货币政策。"
        }
      ],
      dataPointTitle: "行业表现",
      dataPoints: [
        { label: "AI 基础设施", value: "+28.4%", color: "bg-brand-accent" },
        { label: "可再生能源", value: "+15.8%", color: "bg-indigo-400" },
        { label: "消费科技", value: "+12.2%", color: "bg-slate-400" }
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
            className="mb-10 md:mb-16"
          >
            <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-indigo-600 mb-4 inline-block px-3 py-1 bg-indigo-50 rounded-full border border-indigo-100">
              {d.tag}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-7xl font-extrabold tracking-tight mb-6 md:mb-8 text-slate-900 leading-[1.1] md:leading-[0.95]">
              {d.title}
            </h1>
            <p className="text-lg md:text-2xl text-brand-secondary font-medium max-w-3xl leading-relaxed">
              {d.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-12">
            <div className="lg:col-span-2 space-y-10 md:space-y-12">
              <section className="p-6 md:p-10 bg-white rounded-[2rem] md:rounded-[3rem] border border-slate-100 shadow-xl shadow-indigo-500/5">
                <h2 className="text-xl md:text-2xl font-extrabold mb-6">{language === 'en' ? 'Market Overview' : '市场概览'}</h2>
                <p className="text-base md:text-lg text-brand-secondary leading-relaxed font-medium mb-8 md:mb-10">{d.overview}</p>
                
                <div className="space-y-6 md:space-y-8">
                  {d.detailedContent.map((paragraph, idx) => (
                    <p key={idx} className="text-base md:text-lg text-slate-600 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </section>

              <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {d.keyInsights.map((item, i) => (
                  <div key={i} className="p-6 md:p-8 bg-white rounded-[2rem] md:rounded-[2.5rem] border border-slate-100">
                    <div className="text-indigo-600 mb-4">{item.icon}</div>
                    <h3 className="text-base font-extrabold mb-2">{item.title}</h3>
                    <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </section>
            </div>

            <aside className="p-8 md:p-10 bg-slate-900 text-white rounded-[2.5rem] md:rounded-[3rem] h-fit">
              <h3 className="text-xl font-extrabold mb-8 flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-brand-accent" />
                {d.dataPointTitle}
              </h3>
              <div className="space-y-8">
                {d.dataPoints.map((dp, i) => (
                  <div key={i}>
                    <div className="flex justify-between items-end mb-2">
                      <span className="text-xs font-extrabold uppercase tracking-widest text-slate-400">{dp.label}</span>
                      <span className="text-xl font-extrabold text-brand-accent">{dp.value}</span>
                    </div>
                    <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                      <motion.div 
                        initial={{ width: 0 }}
                        whileInView={{ width: dp.value.replace('%', '') + '%' }}
                        className={`h-full ${dp.color}`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </aside>
          </div>
        </div>
        <MessageBoard topic="market-rally" />
      </main>
      <Footer />
    </div>
  );
};
