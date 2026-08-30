import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { translations, type Language, type Translations } from '@/i18n/translations';

interface LanguageContextValue {
  language: Language;
  dir: 'ltr' | 'rtl';
  t: Translations;
  toggleLanguage: () => void;
}

const STORAGE_KEY = 'chord-sheets-language';

const LanguageContext = createContext<LanguageContextValue | undefined>(undefined);

function getInitialLanguage(): Language {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored === 'he' || stored === 'en' ? stored : 'en';
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(getInitialLanguage);

  const dir = language === 'he' ? 'rtl' : 'ltr';

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
    localStorage.setItem(STORAGE_KEY, language);
  }, [language, dir]);

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'he' : 'en'));
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
