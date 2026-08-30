import type { SongSection } from '@/types/song';

interface LyricsDisplayProps {
  sections: SongSection[];
}

const HEBREW_PATTERN = /[֐-׿]/;

export default function LyricsDisplay({ sections }: LyricsDisplayProps) {
  return (
    <div className="space-y-6 mb-4">
      {sections.map((section, sectionIdx) => (
        <div key={sectionIdx}>
          {section.label && (
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-2">
              {section.label}
            </p>
          )}
          <div className="text-sm leading-relaxed overflow-x-auto">
            {section.lines.map((line, lineIdx) => {
              if (line.lyrics === '' && !line.chords) {
                return <div key={lineIdx} className="h-3" />;
              }
              const isHebrew = HEBREW_PATTERN.test(line.lyrics);
              const dir = isHebrew ? 'rtl' : 'ltr';
              return (
                <div key={lineIdx}>
                  {line.chords && (
                    <pre
                      dir={dir}
                      className="text-blue-300 leading-none whitespace-pre"
                      style={{ fontFamily: '"Courier New", monospace' }}
                    >
                      {line.chords}
                    </pre>
                  )}
                  <pre
                    dir={dir}
                    className="text-gray-100 whitespace-pre"
                    style={{ fontFamily: '"Courier New", monospace' }}
                  >
                    {line.lyrics}
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
