import React from 'react';
import { motion } from 'motion/react';
import { useLanguage } from '../components/LanguageContext';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { MessageBoard } from '../components/sections/MessageBoard';
import { Cpu, Microscope, Zap, Share2, Calendar, User } from 'lucide-react';

export const QuantumProtocol: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      category: 'SCIENCE & TECH',
      title: 'Quantum Protocol 2026: Defining the New Boundaries of Physics',
      date: 'May 18, 2026',
      author: 'Dr. Elena Vance',
      description: 'A breakthrough in quantum synchronization has finally bridged the gap between theoretical multi-node computing and practical application.',
      body: [
        'Researchers in Geneva and Tokyo have successfully demonstrated the first stable "Quantum Entanglement Protocol" across a distance of 800 kilometers. This milestone paves the way for the first truly global quantum internet, promising a level of cryptographic security previously thought impossible.',
        'The protocol, dubbed "Q-Sync 2.0", utilizes a novel approach to error correction that minimizes decoherence even in standard fiber-optic infrastructure. This means that existing global networks could potentially be upgraded to support quantum states without tearing up current foundations.',
        'Industry leaders anticipate that by late 2027, the first commercial-grade quantum encryption services will be available for Tier-1 financial institutions and government agencies, effectively ending the era of traditional RSA security.'
      ]
    },
    zh: {
      category: '科技与科学',
      title: '2026 量子协议：定义物理学的新边界',
      date: '2026年5月18日',
      author: '埃琳娜·万斯 博士',
      description: '量子同步领域的重大突破终于弥合了理论多节点计算与实际应用之间的鸿沟。',
      body: [
        '日内瓦和东京的研究人员成功演示了第一个跨越 800 公里的稳定“量子纠缠协议”。这一里程碑为全球量子互联网铺平了道路，并承诺提供以前认为不可能实现的加密安全水平。',
        '该协议被称为“Q-Sync 2.0”，采用了一种新颖的纠正错误方法，即使在标准光纤基础设施中也能最大限度地减少退相干。这意味着现有的全球网络有可能在不拆除目前基础的情况下升级为支持量子态。',
        '行业领导者预计，到 2027 年底，首批商业级量子加密服务将向一级金融机构和政府机构开放，从而有效终结传统 RSA 安全时代。'
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
                <div className="flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.3em] text-indigo-500 mb-6 border-b border-indigo-100 pb-2 inline-block">
                  <Cpu className="w-4 h-4" />
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
                  <div className="flex items-center gap-2 ml-auto cursor-pointer hover:text-indigo-600 transition-colors">
                    <Share2 className="w-4 h-4" />
                    SHARE
                  </div>
                </div>

                <div className="aspect-[21/9] rounded-[3rem] overflow-hidden mb-12 shadow-2xl shadow-slate-200 border border-slate-100">
                  <img 
                    src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000" 
                    className="w-full h-full object-cover"
                  />
                </div>

                <div className="prose prose-slate prose-lg max-w-none">
                  <p className="text-xl md:text-2xl font-bold text-slate-600 italic mb-10 leading-relaxed border-l-4 border-indigo-500 pl-8">
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
              <div className="p-8 bg-slate-900 rounded-[2.5rem] text-white overflow-hidden relative group">
                <div className="absolute top-0 right-0 p-8 opacity-20 transform translate-x-4 -translate-y-4">
                  <Microscope className="w-32 h-32" />
                </div>
                <h4 className="text-xs font-black uppercase tracking-[0.2em] text-indigo-400 mb-4">{language === 'zh' ? '关键洞察' : 'KEY INSIGHTS'}</h4>
                <ul className="space-y-6 relative z-10">
                  <li className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-[10px] font-black">1</div>
                    <p className="text-xs font-bold leading-relaxed">{language === 'zh' ? '该协议在光纤中比以往任何测试都更稳定。' : 'The protocol is more stable in fiber than any previous test.'}</p>
                  </li>
                  <li className="flex gap-4">
                    <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center shrink-0 text-[10px] font-black">2</div>
                    <p className="text-xs font-bold leading-relaxed">{language === 'zh' ? '现有的互联网基础设施可以在不更换硬件的情况下进行适配。' : 'Existing internet infrastructure can be adapted without hardware replacement.'}</p>
                  </li>
                </ul>
              </div>

              <div className="p-8 bg-indigo-50 rounded-[2.5rem] border border-indigo-100 flex flex-col items-center text-center">
                <Zap className="w-12 h-12 text-indigo-500 mb-4" />
                <h4 className="text-lg font-black text-slate-900 uppercase mb-2">{language === 'zh' ? '实时更新' : 'LIVE UPDATES'}</h4>
                <p className="text-xs text-slate-500 font-bold mb-6">{language === 'zh' ? '订阅此专题获取最新量子科技资讯' : 'Subscribe to this topic for live quantum tech news'}</p>
                <button className="w-full py-4 bg-slate-900 text-white rounded-2xl font-black uppercase text-[10px] tracking-widest hover:bg-indigo-600 transition-all">
                  {language === 'zh' ? '立即订阅' : 'SUBSCRIBE NOW'}
                </button>
              </div>
            </aside>
          </div>
        </div>
        <MessageBoard topic="quantum-protocol" />
      </main>
      <Footer />
    </div>
  );
};
