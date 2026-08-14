import type { SongSection } from '@/types/song';
import { parseChordLine } from '@/utils/chordParser';

interface LyricsDisplayProps {
  sections: SongSection[];
}

export default function LyricsDisplay({ sections }: LyricsDisplayProps) {
  return (
    <div className="space-y-6">
      {sections.map((section, sectionIdx) => (
        <div key={sectionIdx}>
          {section.label && (
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-2">
              {section.label}
            </p>
          )}
          <div className="font-mono text-sm leading-relaxed">
            {section.lines.map((line, lineIdx) => {
              if (line === '') {
                return <div key={lineIdx} className="h-3" />;
              }
              const { chords, lyrics, hasChords } = parseChordLine(line);
              return (
                <div key={lineIdx}>
                  {hasChords && (
                    <pre className="text-blue-300 font-semibold leading-none whitespace-pre overflow-x-auto">
                      {chords}
                    </pre>
                  )}
                  <pre className="text-gray-100 whitespace-pre overflow-x-auto">
                    {lyrics}
                  </pre>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
