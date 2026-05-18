import React from 'react';
import { motion } from 'motion/react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { useLanguage } from '../components/LanguageContext';
import { Scale, Gavel, AlertCircle, CheckCircle2 } from 'lucide-react';

export const Terms: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Terms of Service',
      subtitle: 'By using our services, you agree to follow these rules and guidelines.',
      sections: [
        {
          title: 'Acceptance of Terms',
          content: 'By accessing this website, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.',
          icon: <CheckCircle2 className="w-6 h-6" />
        },
        {
          title: 'User Conduct',
          content: 'Users are expected to be respectful in our message boards. We reserve the right to remove any content that is offensive, harmful, or violates our community standards.',
          icon: <Gavel className="w-6 h-6" />
        },
        {
          title: 'Disclaimer',
          content: 'The content provided on this site is for informational purposes only. We make no warranties about the completeness, reliability, or accuracy of this information.',
          icon: <AlertCircle className="w-6 h-6" />
        }
      ]
    },
    zh: {
      title: '服务条款',
      subtitle: '使用我们的服务即表示您同意遵守这些规则和准则。',
      sections: [
        {
          title: '接受条款',
          content: '通过访问本网站，您同意受这些服务条款的约束。如果您不同意条款的任何部分，则可能无法访问该服务。',
          icon: <CheckCircle2 className="w-6 h-6" />
        },
        {
          title: '用户行为',
          content: '用户在留言板上应保持尊重。我们保留删除任何具有攻击性、有害或违反我们社区标准的内容的权利。',
          icon: <Gavel className="w-6 h-6" />
        },
        {
          title: '免责声明',
          content: '本网站提供的内容仅供参考。我们不对该信息的完整性、可靠性或准确性做出任何保证。',
          icon: <AlertCircle className="w-6 h-6" />
        }
      ]
    }
  };

  const d = language === 'zh' ? content.zh : content.en;

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-grow pt-32 pb-24 px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="w-16 h-16 bg-slate-900 rounded-3xl flex items-center justify-center text-white mx-auto mb-8 shadow-xl shadow-slate-200">
            <Scale className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-6xl font-black tracking-tight text-slate-900 mb-6 uppercase">
            {d.title}
          </h1>
          <p className="text-lg md:text-xl text-slate-500 font-medium leading-relaxed max-w-2xl mx-auto">
            {d.subtitle}
          </p>
        </motion.div>

        <div className="space-y-12">
          {d.sections.map((section, i) => (
            <motion.section
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-8 md:p-10 bg-slate-50 rounded-[2.5rem] border border-slate-100 group hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 transition-all"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-brand-accent shadow-sm group-hover:scale-110 transition-transform">
                  {section.icon}
                </div>
                <h2 className="text-xl md:text-2xl font-black text-slate-900 uppercase">
                  {section.title}
                </h2>
              </div>
              <p className="text-slate-600 leading-relaxed font-medium md:text-lg">
                {section.content}
              </p>
            </motion.section>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};
