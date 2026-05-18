import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLanguage } from '../LanguageContext';
import { Globe, Menu, X, Search } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export const Header: React.FC = () => {
  const { language, setLanguage, t } = useLanguage();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'zh' : 'en');
  };

  const navItems = [
    { label: 'nav.home', path: '/' },
    { label: 'nav.stories', path: '/#latest-stories' },
    { label: 'nav.archive', path: '/archive' },
    { label: 'nav.about', path: '/about' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || location.pathname !== '/' ? 'bg-white/80 backdrop-blur-md py-4 shadow-sm' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="text-xl font-extrabold tracking-tight flex items-center gap-2 group">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-8 h-8 bg-brand-accent rounded-lg flex items-center justify-center text-white font-bold shadow-indigo-200 shadow-lg group-hover:scale-110 transition-transform"
          >
            SK
          </motion.div>
          <span className={isScrolled || location.pathname !== '/' ? 'text-slate-900' : 'text-slate-900'}>{t('site.name')}</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6 mr-4 border-r border-slate-100 pr-6">
            {navItems.map((item, idx) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
              >
                {item.path.startsWith('/#') ? (
                  <a 
                    href={item.path} 
                    className={`text-sm font-bold transition-all ${
                      isScrolled || location.pathname !== '/' ? 'text-slate-500 hover:text-slate-900' : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    {t(item.label)}
                  </a>
                ) : (
                  <Link
                    to={item.path}
                    className={`text-sm font-bold transition-all ${
                      location.pathname === item.path ? 'text-slate-900' : 'text-slate-500 hover:text-slate-900'
                    }`}
                  >
                    {t(item.label)}
                  </Link>
                )}
              </motion.div>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <button className="p-2 text-slate-400 hover:text-slate-900 transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <div className="flex bg-slate-100 p-1 rounded-full text-[10px] font-black uppercase tracking-wider">
              <button 
                onClick={() => setLanguage('en')}
                className={`px-3 py-1 rounded-full transition-all ${language === 'en' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-400'}`}
              >
                EN
              </button>
              <button 
                onClick={() => setLanguage('zh')}
                className={`px-3 py-1 rounded-full transition-all ${language === 'zh' ? 'bg-white shadow-sm text-slate-900' : 'text-slate-400'}`}
              >
                中文
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-6">
              {navItems.map((item) => (
                item.path.startsWith('/#') ? (
                  <a 
                    key={item.label} 
                    href={item.path} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium"
                  >
                    {t(item.label)}
                  </a>
                ) : (
                  <Link 
                    key={item.label} 
                    to={item.path} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg font-medium"
                  >
                    {t(item.label)}
                  </Link>
                )
              ))}
              <div className="pt-6 border-t border-slate-100">
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-400 mb-4 px-2">
                  {t('nav.switchLang')}
                </p>
                <div className="flex bg-slate-50 p-1.5 rounded-2xl gap-2">
                  <button 
                    onClick={() => {
                      setLanguage('en');
                      setMobileMenuOpen(false);
                    }}
                    className={`flex-1 py-3.5 px-4 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                      language === 'en' 
                      ? 'bg-white shadow-sm text-brand-accent' 
                      : 'text-slate-500 hover:text-slate-700'
                    }`}
                  >
                    <span className="text-base">🇺🇸</span> English
                  </button>
                  <button 
                    onClick={() => {
                      setLanguage('zh');
                      setMobileMenuOpen(false);
                    }}
                    className={`flex-1 py-3.5 px-4 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 ${
                      language === 'zh' 
                      ? 'bg-white shadow-sm text-brand-accent' 
                      : 'text-slate-500 hover:text-slate-700'
                    }`}
                  >
                    <span className="text-base">🇨🇳</span> 中文
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
