export interface ParsedLine {
  chords: string;
  lyrics: string;
  hasChords: boolean;
}

export function parseChordLine(line: string): ParsedLine {
  if (!line.includes('[')) {
    return { chords: '', lyrics: line, hasChords: false }
  }

  let chordLine = ''
  let lyricLine = ''
  let currentPos = 0

  const parts = line.split(/(\[[^\]]+\])/)

  for (const part of parts) {
    if (part.startsWith('[') && part.endsWith(']')) {
      const chord = part.slice(1, -1)
      while (chordLine.length < currentPos) {
        chordLine += ' '
      }
      chordLine += chord
    } else {
      lyricLine += part
      currentPos += part.length
    }
  }

  return { chords: chordLine, lyrics: lyricLine, hasChords: true }
}
