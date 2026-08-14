import type { Song } from '@/types/song';

/**
 * HOW TO ADD SONGS
 * ----------------
 * Each song has:
 *   id        - unique slug, used in the URL (e.g. "yesterday-beatles")
 *   title     - display title
 *   artist    - optional artist name
 *   date      - ISO date string "YYYY-MM-DD"
 *   links     - optional social links (tiktok, instagram, facebook, youtube)
 *   standardSections - array of song sections (verse, chorus, bridge, etc.) using standard chords
 *   advancedSections  - same sections using advanced/substitute chords
 *
 *   At least one of standardSections / advancedSections must be provided.
 *   If both are provided, a toggle lets the user switch between them (advanced shown by default).
 *   If only one is provided, it's shown with no toggle.
 *   lyrics        - optional raw English lyrics (no chords), searched on the homepage
 *   hebrewLyrics  - optional raw Hebrew lyrics (no chords), searched on the homepage
 *
 * CHORD FORMAT
 * ------------
 * Each line in a section is a string with chords wrapped in [brackets].
 * The chord appears ABOVE the word/syllable immediately following the bracket.
 *
 * Example:
 *   "[Am]Yesterday [F]all my [C]troubles seemed so [G]far away"
 *
 * Renders as:
 *   Am        F         C              G
 *   Yesterday all my troubles seemed so far away
 *
 * Lines without any brackets are rendered as plain lyric lines (no chord row).
 * Use an empty string "" for a blank spacer line between phrases.
 */

export const songs: Song[] = [
  {
    id: 'yesterday-beatles',
    title: 'Yesterday',
    artist: 'The Beatles',
    date: '2024-01-10',
    links: {
      youtube: 'https://www.youtube.com/watch?v=NrgmdOz227I',
    },
    standardSections: [
      {
        label: 'Verse 1',
        lines: [
          '[F]Yesterday, [Em7]all my [A7]troubles seemed so [Dm]far away',
          '[Bb]Now it [C7]looks as though they\'re [F]here to stay',
          '[Dm]Oh I [G]believe in [Bb]yester[F]day',
        ],
      },
      {
        label: 'Verse 2',
        lines: [
          '[F]Suddenly, [Em7]I\'m not [A7]half the man I [Dm]used to be',
          '[Bb]There\'s a [C7]shadow hanging [F]over me',
          '[Dm]Oh yes[G]terday [Bb]came [F]suddenly',
        ],
      },
      {
        label: 'Chorus',
        lines: [
          '[Am]Why she [D]had to go I [F]don\'t know, she wouldn\'t [C]say',
          '[Am]I said [D]something wrong, now I [F]long for yes[C]terday',
        ],
      },
      {
        label: 'Verse 3',
        lines: [
          '[F]Yesterday, [Em7]love was [A7]such an easy [Dm]game to play',
          '[Bb]Now I [C7]need a place to [F]hide away',
          '[Dm]Oh I [G]believe in [Bb]yester[F]day',
        ],
      },
    ],
  },
  {
    id: 'hallelujah-cohen',
    title: 'Hallelujah',
    artist: 'Leonard Cohen',
    date: '2024-02-14',
    links: {
      youtube: 'https://www.youtube.com/watch?v=ttEMYvpoR-k',
      instagram: 'https://www.instagram.com/',
    },
    lyrics: "I've heard there was a secret chord\nThat David played and it pleased the Lord\nBut you don't really care for music, do you?",
    hebrewLyrics: 'שמעתי שיש אקורד סודי\nשדוד ניגן וזה מצא חן בעיני האל\nאבל לא ממש אכפת לך ממוזיקה, נכון?',
    standardSections: [
      {
        label: 'Verse 1',
        lines: [
          '[C]I\'ve heard there was a [Am]secret chord',
          'That [C]David played and it [Am]pleased the Lord',
          'But [F]you don\'t really [C]care for music, [C]do you? [G]',
          '[C]It goes like this, the [F]fourth, the fifth',
          'The [Am]minor fall, the [F]major lift',
          'The [G]baffled king com[C]posing Halle[Am]lujah',
        ],
      },
      {
        label: 'Chorus',
        lines: [
          '[F]Hallelujah, [Am]Hallelujah',
          '[F]Hallelujah, [C]Hallelu[G]jah [C]',
        ],
      },
    ],
    advancedSections: [
      {
        label: 'Verse 1',
        lines: [
          '[Cmaj7]I\'ve heard there was a [Am9]secret chord',
          'That [Cmaj7]David played and it [Am9]pleased the Lord',
          'But [Fmaj7]you don\'t really [G13]care for music, [Cmaj7]do you? [G7sus4]',
          '[Cmaj7]It goes like this, the [Fmaj7]fourth, the fifth',
          'The [Am9]minor fall, the [Fmaj7]major lift',
          'The [G13]baffled king com[Em7]posing Halle[Am9]lujah',
        ],
      },
      {
        label: 'Chorus',
        lines: [
          '[Fmaj7]Hallelujah, [Am9]Hallelujah',
          '[Fmaj7]Hallelujah, [Cmaj7]Hallelu[G13]jah [Cadd9]',
        ],
      },
    ],
  },
];
