import { useLanguage } from '@/context/LanguageContext';

export default function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <div className="fixed top-12 inset-x-0 z-50 pointer-events-none">
      <div className="max-w-2xl mx-auto px-4 flex justify-end">
        <button
          onClick={toggleLanguage}
          className="cursor-pointer pointer-events-auto flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 border border-white/10 text-gray-200 text-xs font-medium hover:bg-white/20 transition-all backdrop-blur-sm"
        >
          {language === 'en' ? 'עברית' : 'English'}
        </button>
      </div>
    </div>
  );
}
