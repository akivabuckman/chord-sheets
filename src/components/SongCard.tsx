import { useNavigate } from 'react-router-dom';
import type { Song } from '@/types/song';
import SocialLinks from '@/components/SocialLinks';

interface SongCardProps {
  song: Song;
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + 'T00:00:00');
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}

export default function SongCard({ song }: SongCardProps) {
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/song/${song.id}`)}
      className="cursor-pointer rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-blue-500/40 transition-all duration-200 p-4 flex flex-col gap-2"
    >
      <div className="flex items-start justify-between gap-2">
        <div>
          <h2 className="text-base font-semibold text-white leading-snug">{song.title}</h2>
          {song.artist && (
            <p className="text-sm text-gray-400">{song.artist}</p>
          )}
        </div>
        <span className="text-xs text-gray-500 whitespace-nowrap pt-0.5">{formatDate(song.date)}</span>
      </div>
      <div onClick={(e) => e.stopPropagation()}>
        <SocialLinks links={song.links} />
      </div>
    </div>
  );
}
