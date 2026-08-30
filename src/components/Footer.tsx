import { useLanguage } from '@/context/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-900/80 via-gray-900/80 to-purple-900/80 backdrop-blur-sm border-t border-white/10 px-4 py-3 text-center text-xs text-gray-500">
      <a
        href="https://akivabuckman.com/chord-finder/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-400 transition-colors"
      >
        {t.chordFinderLink}
      </a>
      <span className="mx-2 opacity-40">·</span>
      <a
        href="https://akivabuckman.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-blue-400 transition-colors"
      >
        {t.siteName}
      </a>
    </footer>
  );
}
