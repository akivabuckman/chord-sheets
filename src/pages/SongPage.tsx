import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, Calendar } from 'lucide-react'
import { songs } from '@/data/songs'
import LyricsDisplay from '@/components/LyricsDisplay'
import SocialLinks from '@/components/SocialLinks'

function formatDate(dateStr: string): string {
  const date = new Date(dateStr + 'T00:00:00')
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export default function SongPage() {
  const { id } = useParams<{ id: string }>()
  const song = songs.find((s) => s.id === id)

  if (!song) return <Navigate to="/" replace />

  return (
    <div className="min-h-screen flex flex-col">
      <header className="px-4 pt-6 pb-4 max-w-2xl mx-auto w-full">
        <Link
          to="/"
          className="inline-flex items-center gap-1.5 text-sm text-gray-400 hover:text-white transition-colors mb-6"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>
        <h1 className="text-2xl font-bold text-white mb-1">{song.title}</h1>
        {song.artist && (
          <p className="text-blue-400 font-medium mb-3">{song.artist}</p>
        )}
        <div className="flex items-center gap-1.5 text-gray-500 text-sm mb-4">
          <Calendar className="w-3.5 h-3.5" />
          <span>{formatDate(song.date)}</span>
        </div>
        <SocialLinks links={song.links} />
      </header>

      <main className="flex-1 max-w-2xl mx-auto w-full px-4 pb-24 pt-6">
        <div className="bg-white/5 border border-white/10 rounded-xl p-5 overflow-x-auto">
          <LyricsDisplay sections={song.sections} />
        </div>
      </main>

      <footer className="fixed bottom-0 left-0 right-0 bg-gradient-to-r from-blue-950 via-gray-900 to-blue-950 border-t border-white/10 px-4 py-2 flex items-center justify-between text-xs text-gray-500">
        <span>Chord Sheets</span>
        <a
          href="https://akivabuckman.com/chord-finder/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-400 transition-colors"
        >
          Chord Finder ↗
        </a>
      </footer>
    </div>
  )
}
