import { useLanguage } from '@/context/LanguageContext';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-12 end-3 z-50 flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 border border-white/10 text-gray-200 text-xs font-medium hover:bg-white/20 transition-all backdrop-blur-sm"
    >
      <span className="text-sm leading-none">{language === 'en' ? '🇮🇱' : '🇺🇸'}</span>
      {language === 'en' ? 'עברית' : 'English'}
    </button>
  );
}
