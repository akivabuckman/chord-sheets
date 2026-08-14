import { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { songs } from '@/data/songs';
import LyricsDisplay from '@/components/LyricsDisplay';
import SocialLinks from '@/components/SocialLinks';
import YouTubeEmbed from '@/components/YouTubeEmbed';
import Footer from '@/components/Footer';

type ChordLevel = 'standard' | 'advanced';

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

export default function SongPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const song = songs.find((s) => s.id === id);

  const hasStandard = Boolean(song?.standardSections);
  const hasAdvanced = Boolean(song?.advancedSections);
  const [chordLevel, setChordLevel] = useState<ChordLevel>(hasAdvanced ? 'advanced' : 'standard');

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
              Standard
            </button>
            <button
              onClick={() => setChordLevel('advanced')}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                chordLevel === 'advanced'
                  ? 'bg-blue-600 text-white'
                  : 'bg-white/10 text-gray-300 hover:bg-white/15'
              }`}
            >
              Advanced
            </button>
          </div>
        )}

        <LyricsDisplay
          sections={
            (chordLevel === 'advanced' ? song.advancedSections : song.standardSections) ??
            song.advancedSections ??
            song.standardSections ??
            []
          }
        />
      </main>

      <Footer />
    </div>
  );
}
