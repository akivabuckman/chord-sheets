import { Link } from 'react-router-dom'
import type { Song } from '@/types/song'
import { Music } from 'lucide-react'

interface SongCardProps {
  song: Song;
}

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + 'T00:00:00')
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })
}

export default function SongCard({ song }: SongCardProps) {
  return (
    <Link
      to={`/song/${song.id}`}
      className="block bg-white/5 hover:bg-white/10 border border-white/10 hover:border-blue-400/40 rounded-xl p-4 transition-all duration-200"
    >
      <div className="flex items-start gap-3">
        <div className="mt-0.5 text-blue-400 shrink-0">
          <Music className="w-4 h-4" />
        </div>
        <div className="min-w-0">
          <div className="font-semibold text-white truncate">{song.title}</div>
          {song.artist && (
            <div className="text-sm text-gray-400 truncate">{song.artist}</div>
          )}
          <div className="text-xs text-gray-500 mt-1">{formatDate(song.date)}</div>
        </div>
      </div>
    </Link>
  )
}
