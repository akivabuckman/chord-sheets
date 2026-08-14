import { useState, useMemo } from 'react'
import { Music2, Search, ChevronRight } from 'lucide-react'
import { songs } from '@/data/songs'
import SongCard from '@/components/SongCard'
import type { Song } from '@/types/song'

const RECENT_COUNT = 6

function getSortedSongs(): Song[] {
  return [...songs].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export default function HomePage() {
  const [query, setQuery] = useState<string>('')
  const [showAll, setShowAll] = useState<boolean>(false)

  const sorted = useMemo<Song[]>(getSortedSongs, [])

  const searchResults = useMemo<Song[]>(() => {
    if (!query.trim()) return []
    const q = query.toLowerCase()
    return sorted.filter((song) => {
      if (song.title.toLowerCase().includes(q)) return true
      if (song.artist?.toLowerCase().includes(q)) return true
      return song.sections.some((section) =>
        section.lines.some((line) =>
          line.toLowerCase().replace(/\[[^\]]+\]/g, '').includes(q)
        )
      )
    })
  }, [query, sorted])

  const isSearching = query.trim().length > 0
  const recentSongs = sorted.slice(0, RECENT_COUNT)
  const displayAll = showAll ? sorted : sorted.slice(0, RECENT_COUNT)

  return (
    <div className="min-h-screen flex flex-col">
      <header className="px-4 pt-10 pb-6 text-center">
        <div className="flex items-center justify-center gap-2 mb-2">
          <Music2 className="w-7 h-7 text-blue-400" />
          <h1 className="text-3xl font-bold tracking-tight">Chord Sheets</h1>
        </div>
        <p className="text-gray-400 text-sm">Lyrics &amp; chords for songs I cover</p>
      </header>

      <main className="flex-1 max-w-2xl mx-auto w-full px-4 pb-24">
        <div className="relative mb-8">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            value={query}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => setQuery(e.target.value)}
            placeholder="Search songs or lyrics..."
            className="w-full bg-white/8 border border-white/15 rounded-xl pl-10 pr-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-400/60 focus:bg-white/10 transition-all"
          />
        </div>

        {isSearching ? (
          <section>
            <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">
              Results
            </h2>
            {searchResults.length === 0 ? (
              <p className="text-gray-500 text-sm">No songs found.</p>
            ) : (
              <div className="space-y-2">
                {searchResults.map((song) => (
                  <SongCard key={song.id} song={song} />
                ))}
              </div>
            )}
          </section>
        ) : (
          <>
            <section className="mb-10">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-3">
                Recent
              </h2>
              <div className="space-y-2">
                {recentSongs.map((song) => (
                  <SongCard key={song.id} song={song} />
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center justify-between mb-3">
                <h2 className="text-xs font-semibold uppercase tracking-widest text-gray-500">
                  All Songs
                </h2>
                <button
                  onClick={() => setShowAll((prev) => !prev)}
                  className="flex items-center gap-1 text-xs text-blue-400 hover:text-blue-300 transition-colors"
                >
                  {showAll ? 'Show less' : `View all ${sorted.length}`}
                  <ChevronRight className={`w-3 h-3 transition-transform ${showAll ? 'rotate-90' : ''}`} />
                </button>
              </div>
              <div className="space-y-2">
                {displayAll.map((song) => (
                  <SongCard key={song.id} song={song} />
                ))}
              </div>
            </section>
          </>
        )}
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
