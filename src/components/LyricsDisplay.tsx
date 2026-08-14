import type { SongSection } from '@/types/song'
import { parseChordLine } from '@/utils/chordParser'

interface LyricsDisplayProps {
  sections: SongSection[];
}

export default function LyricsDisplay({ sections }: LyricsDisplayProps) {
  return (
    <div className="space-y-8">
      {sections.map((section, si) => (
        <div key={si}>
          {section.label && (
            <div className="text-blue-400 font-semibold text-sm uppercase tracking-widest mb-3">
              {section.label}
            </div>
          )}
          <div className="space-y-0">
            {section.lines.map((line, li) => {
              const parsed = parseChordLine(line)
              return (
                <div key={li} className="leading-none mb-2">
                  {parsed.hasChords && (
                    <pre className="font-mono text-sm text-blue-300 font-bold whitespace-pre leading-tight">
                      {parsed.chords}
                    </pre>
                  )}
                  <pre className="font-mono text-sm text-gray-100 whitespace-pre leading-snug">
                    {parsed.lyrics || '\u00A0'}
                  </pre>
                </div>
              )
            })}
          </div>
        </div>
      ))}
    </div>
  )
}
