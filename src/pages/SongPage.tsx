import { useParams, useNavigate, useSearchParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { songs } from '@/data/songs';
import LyricsDisplay from '@/components/LyricsDisplay';
import SocialLinks from '@/components/SocialLinks';
import ShareButton from '@/components/ShareButton';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import { translateSectionLabel, type Language } from '@/i18n/translations';

type ChordLevel = 'standard' | 'advanced';

function formatDate(dateStr: string, language: Language): string {
  const date = new Date(dateStr + 'T00:00:00');
  const locale = language === 'he' ? 'he-IL' : 'en-US';
  return date.toLocaleDateString(locale, { year: 'numeric', month: 'long', day: 'numeric' });
}

export default function SongPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { t, dir, language } = useLanguage();
  const BackIcon = dir === 'rtl' ? ArrowRight : ArrowLeft;

  const song = songs.find((s) => s.id === id);

  const hasStandard = Boolean(song?.standardSections);
  const hasAdvanced = Boolean(song?.advancedSections);

  const [searchParams, setSearchParams] = useSearchParams();
  const levelParam = searchParams.get('level');
  const chordLevel: ChordLevel =
    levelParam === 'standard' || levelParam === 'advanced'
      ? levelParam
      : hasAdvanced
        ? 'advanced'
        : 'standard';

  const setChordLevel = (level: ChordLevel): void => {
    setSearchParams({ level }, { replace: true });
  };

  if (!song) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-950 via-gray-900 to-purple-950 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400 mb-4">{t.songNotFound}</p>
          <button
            onClick={() => navigate('/')}
            className="text-blue-400 hover:text-blue-300 text-sm"
          >
            {t.goBack}
          </button>
        </div>
      </div>
    );
  }

  const sections = (
    (chordLevel === 'advanced' ? song.advancedSections : song.standardSections) ??
    song.advancedSections ??
    song.standardSections ??
    []
  ).map((section) => ({
    ...section,
    label: section.label ? translateSectionLabel(section.label, language) : section.label,
  }));

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-gray-900 to-purple-950 flex flex-col">
      <header className="px-4 pt-12 pb-4 max-w-2xl mx-auto w-full">
        <button
          onClick={() => navigate('/')}
          className="cursor-pointer inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/10 border border-white/10 text-gray-200 text-sm font-medium hover:bg-white/20 transition-all mb-5"
        >
          <BackIcon className="w-4 h-4" />
          {t.back}
        </button>

        <h1 className="text-2xl font-bold text-white leading-tight">{song.title}</h1>
        {song.artist && (
          <p className="text-base text-gray-400 mt-0.5">{song.artist}</p>
        )}

        <div className="flex items-center justify-between mt-3 flex-wrap gap-3">
          <SocialLinks links={song.links} />
          <div className="flex items-center gap-4">
            <ShareButton />
            {song.date && <span className="text-xs text-gray-500">{formatDate(song.date, language)}</span>}
          </div>
        </div>

        <div className="mt-4 h-px bg-white/10" />
      </header>

      <main className="flex-1 px-4 pb-28 max-w-2xl mx-auto w-full overflow-x-hidden">
        {song.links.youtube && (
          <div className="mb-6">
            <YouTubeEmbed url={song.links.youtube} />
          </div>
        )}

        {hasStandard && hasAdvanced && (
          <div className="flex items-center gap-2 mb-4">
            <button
              onClick={() => setChordLevel('standard')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                chordLevel === 'standard'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/15'
              }`}
            >
              {t.standard}
            </button>
            <button
              onClick={() => setChordLevel('advanced')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                chordLevel === 'advanced'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/15'
              }`}
            >
              {t.advanced}
            </button>
          </div>
        )}

        <LyricsDisplay sections={sections} />
      </main>

      <Footer />
    </div>
  );
}
