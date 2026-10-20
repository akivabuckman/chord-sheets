import { useNavigate } from 'react-router-dom';
import { Music, ChevronRight, ChevronLeft } from 'lucide-react';
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
  const { language, dir } = useLanguage();
  const locale = language === 'he' ? 'he-IL' : 'en-US';
  const ChevronIcon = dir === 'rtl' ? ChevronLeft : ChevronRight;

  return (
    <div
      onClick={() => navigate(`/song/${song.id}`)}
      className="cursor-pointer group rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-blue-500/40 transition-all duration-200 px-4 py-3 flex items-center gap-3"
    >
      <div className="shrink-0 w-9 h-9 rounded-lg bg-blue-500/10 flex items-center justify-center">
        <Music className="w-4 h-4 text-blue-400" />
      </div>
      <div className="min-w-0 flex-1">
        <h2 className="text-sm font-semibold text-white truncate">{song.title}</h2>
        {song.artist && <p className="text-xs text-gray-400 truncate mt-0.5">{song.artist}</p>}
      </div>
      {song.date && (
        <span className="shrink-0 text-xs text-gray-500 whitespace-nowrap">{formatDate(song.date, locale)}</span>
      )}
      <ChevronIcon className="shrink-0 w-4 h-4 text-gray-600 group-hover:text-gray-400 transition-colors" />
    </div>
  );
}
