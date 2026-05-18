import React from 'react';

export type Language = 'en' | 'zh';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = React.createContext<LanguageContextType | undefined>(undefined);

export const translations: Record<Language, Record<string, string>> = {
  en: {
    'nav.home': 'Global News',
    'nav.stories': 'Top Stories',
    'nav.archive': 'Explore',
    'nav.about': 'About',
    'hero.title': 'Beyond the Surface. \nGlobal Insights.',
    'hero.subtitle': 'Critical reporting and curated analysis on the events shaping our collective future. Stay informed with our objective bilingual perspective.',
    'hero.btn.primary': 'Read Latest',
    'hero.btn.secondary': 'Leave a Message',
    'hero.featured': 'Global Bulletin',
    'messageBoard.title': 'Community Voice',
    'messageBoard.subtitle': 'Share your thoughts on today\'s report.',
    'messageBoard.placeholder': 'Write your message...',
    'messageBoard.btn': 'Post Message',
    'messageBoard.recent': 'Recent Messages',
    'newsletter.badge': 'The Daily Pulse',
    'section.latest': 'Breaking News',
    'section.latest.desc': 'Discover our most recent reports on global affairs, technology, and economic shifts.',
    'section.trending': 'Trending Globally',
    'article.readMore': 'Read full article',
    'newsletter.title': 'Stay curious. \nJoin the pulse.',
    'newsletter.desc': 'Subscribe to skr news for weekly insights delivered straight to your inbox. No spam, only news.',
    'newsletter.placeholder': 'Email address',
    'newsletter.button': 'Subscribe',
    'footer.tagline': 'Independent journalism for a connected world.',
    'footer.rights': '© 2026 skr news. All rights reserved.',
    'footer.contact': 'Contact Us',
    'footer.scanWeChat': 'Scan to contact us',
    'article.cat.politics': 'Politics',
    'article.cat.economics': 'Economics',
    'article.cat.tech': 'Technology',
    'article.cat.climate': 'Climate',
    'article.cat.culture': 'Culture',
    'article.cat.world': 'World',
    'article.cat.science': 'Science',
    'hero.index': 'Real-time Index / 实时指数',
    'hero.growth': 'Growth Rate',
    'hero.editorTitle': 'Editor-in-Chief',
    'footer.pages': 'Pages',
    'footer.archive': 'Archive',
    'footer.about': 'About Us',
    'footer.connect': 'Connect',
    'footer.privacy': 'Privacy Policy',
    'footer.terms': 'Terms of Service',
    'footer.privacyShort': 'Privacy',
    'footer.termsShort': 'Terms',
    'footer.careers': 'Careers',
    'about.mission': 'Our Mission',
    'about.title': 'Independent. Global. Precise.',
    'about.welcome': 'Welcome to SKR NEWS. We believe that journalism should be a bridge between cultures, providing clarity in a complex world. Our team of editors and writers work around the clock to bring you stories that matter, with a focus on objectivity and bilingual accessibility.',
    'about.vision.title': 'Global Vision',
    'about.vision.desc': 'Reporting from every corner of the globe to give you the full picture.',
    'about.perspective.title': 'Dual Perspective',
    'about.perspective.desc': 'Bilingual content designed for a modern, interconnected audience.',
    'archive.badge': 'Full Archive',
    'archive.title': 'Explore History.',
    'archive.desc': 'Search through our extensive collection of reports, analyses, and exclusive interviews.',
    'site.name': 'SKR NEWS',
    'nav.switchLang': 'Switch Language',
  },
  zh: {
    'nav.home': '全球新闻',
    'nav.stories': '头条新闻',
    'nav.archive': '探索',
    'nav.about': '关于',
    'hero.title': '深掘表象，\n洞察全球。',
    'hero.subtitle': '深度报道与精选分析，带您了解塑造共同未来的重大事件。以客观的双语视角，保持敏锐洞察。',
    'hero.btn.primary': '阅读最新',
    'hero.btn.secondary': '给我们留言',
    'hero.featured': '全球简报',
    'messageBoard.title': '社区留言板',
    'messageBoard.subtitle': '分享您对今日简讯的看法。',
    'messageBoard.placeholder': '输入您的留言...',
    'messageBoard.btn': '发表留言',
    'messageBoard.recent': '最新留言',
    'newsletter.badge': '每日简讯',
    'section.latest': '即时资讯',
    'section.latest.desc': '探索关于全球事务、技术和经济变化的最新报道。',
    'section.trending': '全球热点',
    'article.readMore': '阅读全文',
    'newsletter.title': '保持好奇。 \n加入 SKR。',
    'newsletter.desc': '订阅 skr news，每周精选资讯直达您的收件箱。拒绝垃圾邮件，专注核心新闻。',
    'newsletter.placeholder': '电子邮箱地址',
    'newsletter.button': '订阅',
    'footer.tagline': '为互联世界提供独立的新闻报道。',
    'footer.rights': '© 2026 skr news. 保留所有权利。',
    'footer.contact': '联系我们',
    'footer.scanWeChat': '扫码联系我们',
    'article.cat.politics': '政治',
    'article.cat.economics': '经济',
    'article.cat.tech': '技术',
    'article.cat.climate': '气候',
    'article.cat.culture': '文化',
    'article.cat.world': '国际',
    'article.cat.science': '科学',
    'hero.index': '实时指数 / Real-time Index',
    'hero.growth': '增长率',
    'hero.editorTitle': '总编辑',
    'footer.pages': '页面',
    'footer.archive': '档案库',
    'footer.about': '关于我们',
    'footer.connect': '联系我们',
    'footer.privacy': '隐私政策',
    'footer.terms': '服务条款',
    'footer.privacyShort': '隐私',
    'footer.termsShort': '条款',
    'footer.careers': '职业',
    'about.mission': '我们的使命',
    'about.title': '独立。全球。精准。',
    'about.welcome': '欢迎来到 SKR 新闻。我们相信新闻应该是文化之间的桥梁，在复杂的世界中提供清晰的视角。我们的编辑和作者团队全天候工作，为您带来重要的报道，专注于客观性和双语可及性。',
    'about.vision.title': '全球视野',
    'about.vision.desc': '报道来自全球每个角落，为您提供完整的画面。',
    'about.perspective.title': '双重视角',
    'about.perspective.desc': '为现代互联受众设计的双语内容。',
    'archive.badge': '完整档案库',
    'archive.title': '探索历史',
    'archive.desc': '搜索我们广泛的报道、分析和独家专访。',
    'site.name': 'SKR 新闻',
    'nav.switchLang': '切换语言',
  }
};

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = React.useState<Language>('zh');

  const t = (key: string) => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = React.useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within LanguageProvider');
  return context;
};
