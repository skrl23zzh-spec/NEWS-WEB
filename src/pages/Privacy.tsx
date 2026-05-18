import React from 'react';
import { motion } from 'motion/react';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import { useLanguage } from '../components/LanguageContext';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

export const Privacy: React.FC = () => {
  const { language } = useLanguage();

  const content = {
    en: {
      title: 'Privacy Policy',
      subtitle: 'Your privacy is our priority. We are committed to protecting it.',
      sections: [
        {
          title: 'Data Collection',
          content: 'We collect minimal data necessary for providing our services. This includes your username and chosen avatar for the message board, which are stored locally in your browser.',
          icon: <Eye className="w-6 h-6" />
        },
        {
          title: 'How We Use Data',
          content: 'Your interactions on the platform are used solely to enhance your user experience and foster community engagement on our message boards.',
          icon: <FileText className="w-6 h-6" />
        },
        {
          title: 'Data Security',
          content: 'We implement industry-standard security measures to protect your information. However, please remember that no method of transmission over the internet is 100% secure.',
          icon: <Shield className="w-6 h-6" />
        }
      ]
    },
    zh: {
      title: '隐私政策',
      subtitle: '您的隐私是我们的首要任务。我们致力于保护您的个人信息。',
      sections: [
        {
          title: '数据收集',
          content: '我们仅收集提供服务所必需的最少数据。这包括您在留言板上使用的用户名和头像，这些信息均存储在您的本地浏览器中。',
          icon: <Eye className="w-6 h-6" />
        },
        {
          title: '数据用途',
          content: '您在平台上的互动仅用于提升您的用户体验，并促进留言板上的社区参与。',
          icon: <FileText className="w-6 h-6" />
        },
        {
          title: '数据安全',
          content: '我们采取行业标准的各种安全措施来保护您的信息。但请记住，任何互联网传输方法都不是100%安全的。',
          icon: <Shield className="w-6 h-6" />
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
            <Lock className="w-8 h-8" />
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
