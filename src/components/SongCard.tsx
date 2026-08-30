import { useNavigate } from 'react-router-dom';
import type { Song } from '@/types/song';
import { useLanguage } from '@/context/LanguageContext';

interface SongCardProps {
  song: Song;
}

function formatDate(dateStr: string, locale: string): string {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString(locale, { year: 'numeric', month: 'short', day: 'numeric' });
}

export default function SongCard({ song }: SongCardProps) {
  const navigate = useNavigate();
  const { language } = useLanguage();
  const locale = language === 'he' ? 'he-IL' : 'en-US';

  return (
    <div
      onClick={() => navigate(`/song/${song.id}`)}
      className="cursor-pointer rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 hover:border-blue-500/40 transition-all duration-200 px-3 py-1.5 flex items-center gap-3"
    >
      <h2 className="text-sm font-semibold text-white truncate shrink-0 max-w-[45%]">{song.title}</h2>
      {song.artist && <p className="text-xs text-gray-400 truncate flex-1">{song.artist}</p>}
      {song.date && (
        <span className="text-xs text-gray-500 whitespace-nowrap ms-auto">{formatDate(song.date, locale)}</span>
      )}
    </div>
  );
}
