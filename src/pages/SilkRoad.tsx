import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../components/LanguageContext';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { MessageBoard } from '../components/sections/MessageBoard';
import { Palette, Share2, Mountain, History, Sparkles, Globe } from 'lucide-react';

export const SilkRoad: React.FC = () => {
  const { t, language } = useLanguage();

  const content = {
    en: {
      tag: "Culture & Art",
      title: "Universal Heritage: 2026 Silk Road Digital Arts Festival",
      subtitle: "Synthesizing ancient aesthetics with immersive neural rendering technologies.",
      overview: "The Silk Road Digital Arts Festival officially opened in Xi'an today, featuring a stunning array of digital installations that breathe life into centuries-old tapestries and manuscripts through generative AI and high-fidelity VR.",
      detailedContent: [
        "The winds of the ancient Silk Road are blowing once again, but this time they are carried by waves of digital information. The 2026 Silk Road Digital Arts Festival is not merely an exhibition; it is a time-machine that bridges two millennia of human creativity. As visitors step into the main hall, they are greeted by the 'Symphony of the Sands,' a 360-degree neural rendering that reconstructs the bustling markets of Chang'an at its peak.",
        "The project's technological core lies in its proprietary 'Archival Reconstruction Engine.' By training multi-modal models on thousands of fragmented historical scrolls and archaeological fragments, researchers have managed to fill in the gaps of history with breathtaking accuracy. These are not static images; they are dynamic, interactive environments where avatars populated by large-language models engage with visitors, explaining the nuances of ancient trade routes and cultural exchange.",
        "A standout feature this year is the 'Neural Tapestry'—a collaborative digital canvas where physical brushstrokes in Xi'an are mirrored in real-time by digital artists in Rome, Samarkand, and Istanbul. This real-time synchronization represents a modern-day 'Digital Silk Road,' proving that technology can revitalize ancient connections and foster a new era of global cultural understanding through shared artistic expression.",
        "As the festival expands into the metaverse, millions of virtual visitors from around the world are contributing to the 'Eternal Mural.' This decentralized project allows anyone with a VR headset to leave their own digital mark on a shared virtual wall, creating a living, breathing testament to the universal nature of human heritage in the digital age."
      ],
      highlights: [
        {
          icon: <History className="w-6 h-6" />,
          title: "Archival Revival",
          desc: "AI-restored scrolls from the Tang Dynasty allow visitors to walk through lost architectural wonders in full 8K resolution."
        },
        {
          icon: <Sparkles className="w-6 h-6" />,
          title: "Neural Esthetics",
          desc: "New algorithms create 'living' paintings that respond to audience movement, blending traditional brushwork with digital fluid dynamics."
        },
        {
          icon: <Globe className="w-6 h-6" />,
          title: "Cross-Border Collab",
          desc: "Artists from 45 countries contribute to a massive decentralized mural project spanning physical and digital galleries."
        }
      ],
      statsTitle: "Festival Numbers",
      stats: [
        { label: "Virtual Visitors", value: "12M+" },
        { label: "Participating Artists", value: "450" },
        { label: "AI Narratives", value: "1,200" }
      ]
    },
    zh: {
      tag: "文化与艺术",
      title: "普世遗产：2026 丝绸之路数字艺术节",
      subtitle: "将古代美学与沉浸式神经渲染技术相结合。",
      overview: "丝绸之路数字艺术节今天在西安正式开幕，展出了一系列令人惊叹的数字装置，通过生成式人工智能和高保真虚拟现实技术，让拥有数百年历史的挂毯和手稿焕发生机。",
      detailedContent: [
        "古老丝绸之路的风再次吹起，但这次是由数字信息波承载的。2026 年丝绸之路数字艺术节不仅仅是一个展览；它是一台连接人类两千年创意的时光机。当游客步入主展厅时，迎接他们的是“沙之交响曲”——一个 360 度的神经渲染装置，在巅峰时期重建了长安繁华的市场。",
        "该项目的技术核心在于其专有的“档案重建引擎”。通过在数千卷零散的历史卷轴和考古碎片上训练多模态模型，研究人员成功地以惊人的准确性填补了历史的空白。这些不是静态的图像；它们是动态的、互动的环境，由大语言模型驱动的化身与游客交流，解释古代贸易路线和文化交流的细微差别。",
        "今年的一大亮点是“神经挂毯”——这是一个协作数字画布，西安的实体笔触由罗马、撒马尔罕和伊斯坦布尔的数字艺术家实时镜像呈现。这种实时同步代表了当代的“数字丝绸之路”，证明了技术可以振兴古老的连接，并通过共享的艺术表达促进全球文化理解的新时代。",
        "随着艺术节扩展到元宇宙，全球数百万虚拟游客正在为“永恒壁画”做出贡献。这个去中心化的项目允许任何拥有 VR 头显的人在共享的虚拟墙上留下自己的数字印记，创造出一个充满活力的证明，展示了数字时代人类遗产的普世本质。"
      ],
      highlights: [
        {
          icon: <History className="w-6 h-6" />,
          title: "档案复兴",
          desc: "AI 修复的唐代卷轴让游客可以以全 8K 分辨率漫步在失传的建筑奇迹中。"
        },
        {
          icon: <Sparkles className="w-6 h-6" />,
          title: "神经美学",
          desc: "新算法创建的“活体”绘画可以响应观众的动作，将传统笔触与数字流体动力学融为一体。"
        },
        {
          icon: <Globe className="w-6 h-6" />,
          title: "跨国协作",
          desc: "来自 45 个国家的艺术家为一个跨越实体和数字画廊的大型去中心化壁画项目做出了贡献。"
        }
      ],
      statsTitle: "艺术节数据",
      stats: [
        { label: "虚拟游客", value: "1200万+" },
        { label: "参展艺术家", value: "450" },
        { label: "AI 叙事作品", value: "1,200" }
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
            className="mb-10 md:mb-16 text-center"
          >
            <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-brand-accent mb-4 inline-block px-4 py-1.5 bg-brand-accent/5 rounded-full border border-brand-accent/10">
              {d.tag}
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-8xl font-extrabold tracking-tight mb-6 md:mb-8 text-slate-900 leading-[1.1] md:leading-[0.9]">
              {d.title}
            </h1>
            <p className="text-base md:text-xl text-brand-secondary font-medium max-w-2xl mx-auto leading-relaxed">
              {d.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16">
            {d.highlights.map((h, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="p-8 md:p-10 bg-white rounded-[2rem] md:rounded-[3rem] border border-slate-100 shadow-sm hover:shadow-xl transition-shadow group text-center"
              >
                <div className="w-12 h-12 md:w-16 md:h-16 bg-slate-50 rounded-2xl md:rounded-3xl flex items-center justify-center text-brand-accent mb-6 md:mb-8 mx-auto group-hover:rotate-6 transition-transform">
                  {h.icon}
                </div>
                <h3 className="text-lg md:text-xl font-extrabold mb-3 md:mb-4">{h.title}</h3>
                <p className="text-sm text-brand-secondary leading-relaxed font-medium">{h.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 items-center">
             <div className="p-8 md:p-12 bg-slate-900 text-white rounded-[2.5rem] md:rounded-[4rem] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-full h-full opacity-10 pointer-events-none">
                  <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-brand-accent via-transparent to-transparent" />
                </div>
                <h2 className="text-2xl md:text-3xl font-extrabold mb-6 md:mb-8 text-center sm:text-left">{d.statsTitle}</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 md:gap-8 text-center sm:text-left">
                  {d.stats.map((s, i) => (
                    <div key={i} className="space-y-1">
                      <div className="text-3xl md:text-4xl font-extrabold text-brand-accent">{s.value}</div>
                      <div className="text-[10px] uppercase font-bold tracking-widest text-slate-500">{s.label}</div>
                    </div>
                  ))}
                </div>
             </div>
             <div className="prose prose-lg px-2 md:px-4">
                <p className="text-lg md:text-xl text-brand-secondary leading-relaxed font-medium mb-8 md:mb-10">
                  {d.overview}
                </p>
                <div className="space-y-6 md:space-y-8">
                  {d.detailedContent.map((paragraph, idx) => (
                    <p key={idx} className="text-base md:text-lg text-slate-600 leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
             </div>
          </div>
        </div>
        <MessageBoard topic="silk-road" />
      </main>
      <Footer />
    </div>
  );
};
