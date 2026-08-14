import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { songs } from '@/data/songs';
import LyricsDisplay from '@/components/LyricsDisplay';
import SocialLinks from '@/components/SocialLinks';

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default function SongPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const song = songs.find((s) => s.id === id);

  if (!song) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-950 via-gray-900 to-purple-950 flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400 mb-4">Song not found.</p>
          <button
            onClick={() => navigate('/')}
            className="text-blue-400 hover:text-blue-300 text-sm"
          >
            Go back
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-950 via-gray-900 to-purple-950 flex flex-col">
      <header className="px-4 pt-6 pb-4 max-w-2xl mx-auto w-full">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-1.5 text-gray-400 hover:text-white transition-colors text-sm mb-5"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </button>

        <h1 className="text-2xl font-bold text-white leading-tight">{song.title}</h1>
        {song.artist && (
          <p className="text-base text-gray-400 mt-0.5">{song.artist}</p>
        )}

        <div className="flex items-center justify-between mt-3 flex-wrap gap-3">
          <SocialLinks links={song.links} />
          <span className="text-xs text-gray-500">{formatDate(song.date)}</span>
        </div>

        <div className="mt-4 h-px bg-white/10" />
      </header>

      <main className="flex-1 px-4 pb-28 max-w-2xl mx-auto w-full overflow-x-hidden">
        <LyricsDisplay sections={song.sections} />
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
