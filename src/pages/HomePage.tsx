import { useState, useMemo } from 'react';
import { Music, Search, Clock, List } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { songs } from '@/data/songs';
import SongCard from '@/components/SongCard';
import type { Song } from '@/types/song';

const RECENT_COUNT = 6;

type ViewMode = 'recent' | 'all';

function songMatchesQuery(song: Song, query: string): boolean {
  const q = query.toLowerCase();
  if (song.title.toLowerCase().includes(q)) return true;
  if (song.artist?.toLowerCase().includes(q)) return true;
  for (const section of song.sections) {
    for (const line of section.lines) {
      const lyrics = line.replace(/\[[^\]]+\]/g, '');
      if (lyrics.toLowerCase().includes(q)) return true;
    }
  }
  return false;
}

const sortedSongs = [...songs].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

export default function HomePage() {
  const [query, setQuery] = useState<string>('');
  const [view, setView] = useState<ViewMode>('recent');
  const navigate = useNavigate();

  const isSearching = query.trim().length > 0;

  const searchResults = useMemo(() => {
    if (!isSearching) return [];
    return sortedSongs.filter((song) => songMatchesQuery(song, query.trim()));
  }, [query, isSearching]);

  const displayedSongs = view === 'recent' ? sortedSongs.slice(0, RECENT_COUNT) : sortedSongs;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-gray-900 to-purple-950 flex flex-col">
      <header className="px-4 pt-8 pb-4 max-w-2xl mx-auto w-full">
        <div className="flex items-center gap-3 mb-1">
          <Music className="text-blue-400 w-6 h-6 shrink-0" />
          <h1 className="text-2xl font-bold text-white tracking-tight">Chord Sheets</h1>
        </div>
        <p className="text-sm text-gray-400 ml-9">Song lyrics with guitar chords</p>
      </header>

      <main className="flex-1 px-4 pb-24 max-w-2xl mx-auto w-full">
        <div className="relative mb-6">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search songs or lyrics..."
            className="w-full pl-9 pr-4 py-3 rounded-xl bg-white/10 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/60 focus:bg-white/15 transition-all text-sm"
          />
        </div>

        {isSearching ? (
          <div>
            <p className="text-xs text-gray-500 mb-3 uppercase tracking-widest">
              {searchResults.length} result{searchResults.length !== 1 ? 's' : ''}
            </p>
            {searchResults.length === 0 ? (
              <p className="text-gray-500 text-sm">No songs found.</p>
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
                onClick={() => setView('recent')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  view === 'recent'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/15'
                }`}
              >
                <Clock className="w-3.5 h-3.5" />
                Recent
              </button>
              <button
                onClick={() => setView('all')}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  view === 'all'
                    ? 'bg-blue-600 text-white'
                    : 'bg-white/10 text-gray-300 hover:bg-white/15'
                }`}
              >
                <List className="w-3.5 h-3.5" />
                All Songs
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

      <footer className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-900/80 via-gray-900/80 to-purple-900/80 backdrop-blur-sm border-t border-white/10 px-4 py-3 text-center text-xs text-gray-500">
        <a
          href="https://akivabuckman.com/chord-finder/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors"
        >
          Chord Finder
        </a>
        <span className="mx-2 opacity-40">·</span>
        <span>akivabuckman.com</span>
      </footer>
    </div>
  );
}
