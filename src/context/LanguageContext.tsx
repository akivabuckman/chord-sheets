import { createContext, useContext, useEffect, type ReactNode } from 'react';
import { useSearchParams } from 'react-router-dom';
import { translations, type Language, type Translations } from '@/i18n/translations';

interface LanguageContextValue {
  language: Language;
  dir: 'ltr' | 'rtl';
  t: Translations;
  toggleLanguage: () => void;
}

const DEFAULT_LANGUAGE: Language = 'en';

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const urlLang = searchParams.get('lang');
  const language: Language = urlLang === 'he' || urlLang === 'en' ? urlLang : DEFAULT_LANGUAGE;

  const dir = language === 'he' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
  }, [language, dir]);

  useEffect(() => {
    if (urlLang !== 'he' && urlLang !== 'en') {
      const next = new URLSearchParams(searchParams);
      next.set('lang', DEFAULT_LANGUAGE);
      setSearchParams(next, { replace: true });
    }
  }, [urlLang, searchParams, setSearchParams]);

  const toggleLanguage = () => {
    const next = new URLSearchParams(searchParams);
    next.set('lang', language === 'en' ? 'he' : 'en');
    setSearchParams(next, { replace: true });
  };

  return (
    <LanguageContext.Provider value={{ language, dir, t: translations[language], toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
