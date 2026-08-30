import { useState, useMemo } from 'react';
import { Music, Search, Clock, ArrowDownAZ } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { songs } from '@/data/songs';
import SongCard from '@/components/SongCard';
import Footer from '@/components/Footer';
import { useLanguage } from '@/context/LanguageContext';
import type { Song } from '@/types/song';

type SortMode = 'date' | 'alpha';

function songMatchesQuery(song: Song, query: string): boolean {
  const q = query.toLowerCase();
  if (song.title.toLowerCase().includes(q)) return true;
  if (song.artist?.toLowerCase().includes(q)) return true;
  if (song.lyrics?.toLowerCase().includes(q)) return true;
  if (song.hebrewLyrics?.includes(query)) return true;
  const sections = song.standardSections ?? song.advancedSections ?? [];
  for (const section of sections) {
    for (const line of section.lines) {
      if (line.lyrics.toLowerCase().includes(q)) return true;
    }
  }
  return false;
}

const dateValue = (song: Song): number => (song.date ? new Date(song.date).getTime() : 0);

const songsByDate = [...songs].sort((a, b) => dateValue(b) - dateValue(a));

export default function HomePage() {
  const [query, setQuery] = useState<string>('');
  const [sort, setSort] = useState<SortMode>('alpha');
  const navigate = useNavigate();
  const { t } = useLanguage();

  const isSearching = query.trim().length > 0;

  const searchResults = useMemo(() => {
    if (!isSearching) return [];
    return songsByDate.filter((song) => songMatchesQuery(song, query.trim()));
  }, [query, isSearching]);

  const displayedSongs = useMemo<Song[]>(() => {
    if (sort === 'alpha') {
      return [...songs].sort((a, b) => a.title.localeCompare(b.title, 'en'));
    }
    return songsByDate;
  }, [sort]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-gray-900 to-purple-950 flex flex-col">
      <header className="px-4 pt-8 pb-4 max-w-2xl mx-auto w-full">
        <div className="flex items-center gap-3 mb-1">
          <Music className="text-blue-400 w-6 h-6 shrink-0" />
          <h1 className="text-2xl font-bold text-white tracking-tight">{t.appTitle}</h1>
        </div>
        <p className="text-sm text-gray-400 ms-9">{t.appSubtitle}</p>
      </header>

      <main className="flex-1 px-4 pb-24 max-w-2xl mx-auto w-full">
        <div className="relative mb-6">
          <Search className="absolute start-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t.searchPlaceholder}
            className="w-full ps-9 pe-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/60 focus:bg-white/15 transition-all text-sm"
          />
        </div>

        {isSearching ? (
          <div>
            <p className="text-xs text-gray-500 mb-3 uppercase tracking-widest">
              {t.resultsCount(searchResults.length)}
            </p>
            {searchResults.length === 0 ? (
              <p className="text-gray-500 text-sm">{t.noSongsFound}</p>
            ) : (
              <div className="space-y-2">
                {searchResults.map((song) => (
                  <div
                    key={song.id}
                    onClick={() => navigate(`/song/${song.id}`)}
                    className="cursor-pointer px-4 py-3 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-blue-500/40 transition-all duration-200"
                  >
                    <p className="text-white font-medium text-sm">{song.title}</p>
                    {song.artist && <p className="text-gray-400 text-xs">{song.artist}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <div>
            <div className="flex items-center gap-2 mb-4">
              <button
                onClick={() => setSort('alpha')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  sort === 'alpha'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/15'
                }`}
              >
                <ArrowDownAZ className="w-3.5 h-3.5" />
                {t.alphabetical}
              </button>
              <button
                onClick={() => setSort('date')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  sort === 'date'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/15'
                }`}
              >
                <Clock className="w-3.5 h-3.5" />
                {t.byDate}
              </button>
            </div>

            <div className="space-y-2">
              {displayedSongs.map((song) => (
                <SongCard key={song.id} song={song} />
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
