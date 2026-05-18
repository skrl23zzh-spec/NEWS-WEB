import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../components/LanguageContext';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { MessageBoard } from '../components/sections/MessageBoard';
import { Satellite, Cpu, Wifi, Radio, Signal, Layers } from 'lucide-react';

export const Sat6G: React.FC = () => {
  const { t, language } = useLanguage();

  const content = {
    en: {
      tag: "Tech Frontiers",
      title: "First Commercial 6G Satellite Constellation Officially Activated",
      subtitle: "Breaking the terrestrial boundaries of connectivity with ultra-low latency orbital networks.",
      overview: "Today marks a watershed moment in telecommunications. The activation of the 'Aurora' constellation enables 6G speeds across the planet, providing the foundation for a truly global autonomous industry and real-time remote surgery capabilities.",
      detailedContent: [
        "The orbital shell is finally alive. After years of testing and hundreds of localized launches, the 'Aurora' network has officially achieved full global mesh capability. This isn't just an incremental update to satellite internet; it is a fundamental re-architecture of how digital information moves across our planet. By utilizing the Sub-THz (0.1 to 10 THz) spectrum, Aurora delivers bandwidth densities previously only possible with physical fiber-optic lines.",
        "One of the most critical features of this constellation is its integrated 'Orbital Compute' layer. Unlike traditional satellites that act as passive relays, each Aurora node is equipped with a high-density AI processing unit. This allows for data to be filtered, compressed, and even analyzed before it ever reaches a ground station. For applications like remote autonomous mining or deep-ocean research, this reduces the decision-making loop to near-zero latency.",
        "The geopolitical implications are equally significant. For the first time, rural and economically isolated regions can bypass the high costs of terrestrial infrastructure and connect directly to the global digital economy. This 'Orbital Leapfrogging' is expected to boost the GDP of several developing nations by as much as 4% annually over the next decade, as it enables high-tech education and tele-medicine to reach even the most remote villages.",
        "Safety and sustainability were at the forefront of the design. Each satellite is equipped with an electric propulsion system for precise debris avoidance and is programmed for a forced atmospheric re-entry at the end of its lifecycle. This ensures that while we expand our digital horizons into space, we do not compromise the safety of our orbital environment for future generations."
      ],
      features: [
        {
          icon: <Wifi className="w-6 h-6" />,
          title: "Terabit Speeds",
          desc: "Theoretical peak speeds of 1Tbps, over 100 times faster than standard 5G networks."
        },
        {
          icon: <Signal className="w-6 h-6" />,
          title: "Microsecond Latency",
          desc: "End-to-end latency reduced to less than 1 millisecond, enabling near-instantaneous feedback loops."
        },
        {
          icon: <Cpu className="w-6 h-6" />,
          title: "Edge Integration",
          desc: "Direct-to-device connectivity without the need for large terrestrial base stations."
        }
      ],
      specTitle: "Technical Specifications",
      specs: [
        { label: "Satellites in Orbit", value: "2,400" },
        { label: "Spectrum Range", value: "Sub-THz" },
        { label: "Global Coverage", value: "99.9%" }
      ]
    },
    zh: {
      tag: "技术前沿",
      title: "首个商业 6G 卫星星座正式启动",
      subtitle: "利用超低延迟轨道网络打破地面通信的边界。",
      overview: "今天标志着电信领域的一个分水岭。 “极光”星座的激活使全球 6G 速度成为可能，为真正的全球自动驾驶行业和实时远程手术能力奠定了基础。",
      detailedContent: [
        "轨道层终于被点亮了。经过多年的测试和数百次局部发射，“极光”网络已正式实现全球全网格化。这不仅仅是卫星互联网的小幅更新；它是全球数字跨行业信息传输方式的基础性重构。通过利用亚太赫兹 (0.1 至 10 THz) 频谱，“极光”提供的带宽密度此前仅能通过物理光纤线路实现。",
        "该星座最关键的特征之一是其集成的“轨道计算”层。与充当无源中继的传统卫星不同，每个“极光”节点都配备了高密度 AI 处理单元。这使得数据能在到达地面站之前进行过滤、压缩甚至分析。对于远程自动采矿或深海研究等应用，这能将决策闭环缩短至近乎零延迟。",
        "地缘政治影响同样重大。偏远和经济孤立地区首次可以绕过昂贵的地面基础设施，直接连接到全球数字经济。这种“轨道跳跃”预计将在未来十年内使几个发展中国家的 GDP 每年增长高达 4%，因为它使高科技教育和远程医疗能够触及最偏远的村庄。",
        "安全和可持续性是设计的核心。每颗卫星都配备了电力推进系统，用于精确避开碎片，并被编程为在生命周期结束时强制重返大气层烧毁。这确保了我们在将数字视野扩展到太空的同时，不会损害未来几代人轨道环境的安全。"
      ],
      features: [
        {
          icon: <Wifi className="w-6 h-6" />,
          title: "太比特速度",
          desc: "理论峰值速度达 1Tbps，比标准 5G 网络快 100 倍以上。"
        },
        {
          icon: <Signal className="w-6 h-6" />,
          title: "微秒级延迟",
          desc: "端到端延迟降低至 1 毫秒以下，实现近乎瞬时的反馈回路。"
        },
        {
          icon: <Cpu className="w-6 h-6" />,
          title: "边缘集成",
          desc: "无需大型地面基站即可实现直接连接设备。"
        }
      ],
      specTitle: "技术参数",
      specs: [
        { label: "在轨卫星数量", value: "2,400" },
        { label: "频谱范围", value: "太赫兹 (THz)" },
        { label: "全球覆盖率", value: "99.9%" }
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
            <span className="text-[10px] font-extrabold uppercase tracking-[0.2em] text-brand-accent mb-4 inline-block px-3 py-1 bg-white rounded-full border border-slate-100 shadow-sm">
              {d.tag}
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-7xl font-extrabold tracking-tight mb-6 md:mb-8 text-slate-900 leading-[1.1] md:leading-[0.95]">
              {d.title}
            </h1>
            <p className="text-lg md:text-2xl text-brand-secondary font-medium max-w-3xl leading-relaxed">
              {d.subtitle}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-10 md:gap-8">
            <div className="lg:col-span-3 space-y-10 md:space-y-12">
              <div className="space-y-6">
                <p className="text-lg md:text-xl text-brand-secondary leading-relaxed font-medium">
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

              <section className="aspect-video rounded-[2rem] md:rounded-[3rem] overflow-hidden relative group">
                <img 
                  src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?auto=format&fit=crop&q=80&w=1200" 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="Satellite"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 text-white">
                  <div className="flex items-center gap-2 text-[10px] md:text-xs font-bold uppercase tracking-widest mb-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    Network Active
                  </div>
                </div>
              </section>

              <section className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {d.features.map((f, i) => (
                  <div key={i} className="p-6 md:p-8 bg-white rounded-[2rem] md:rounded-[2.5rem] border border-slate-100 shadow-sm">
                    <div className="w-10 h-10 md:w-12 md:h-12 bg-indigo-50 rounded-xl md:rounded-2xl flex items-center justify-center text-indigo-600 mb-4 md:mb-6">
                      {f.icon}
                    </div>
                    <h3 className="text-base md:text-lg font-extrabold mb-2 md:mb-4">{f.title}</h3>
                    <p className="text-sm text-brand-secondary leading-relaxed">{f.desc}</p>
                  </div>
                ))}
              </section>
            </div>

            <div className="lg:col-span-1">
              <div className="p-8 md:p-10 bg-white rounded-[2.5rem] md:rounded-[3rem] border border-slate-100 shadow-xl shadow-indigo-500/5 lg:sticky lg:top-32">
                <h3 className="text-lg font-extrabold mb-6 md:mb-8 flex items-center gap-2">
                  <Layers className="w-5 h-5 text-brand-accent" />
                  {d.specTitle}
                </h3>
                <div className="space-y-6">
                  {d.specs.map((s, i) => (
                    <div key={i} className="flex flex-col gap-1">
                      <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400">{s.label}</span>
                      <span className="text-lg md:text-xl font-extrabold text-slate-900">{s.value}</span>
                      <div className="w-full h-px bg-slate-100 mt-2" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        <MessageBoard topic="sat-6g" />
      </main>
      <Footer />
    </div>
  );
};
