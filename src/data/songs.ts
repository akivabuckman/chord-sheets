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
 *   sections  - array of song sections (verse, chorus, bridge, etc.)
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
    sections: [
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
    sections: [
      {
        label: 'Verse 1',
        lines: [
          '[C]I\'ve heard there was a [Am]secret chord',
          'That [C]David played and it [Am]pleased the Lord',
          'But [F]you don\'t really [G]care for music, [C]do you? [G]',
          '[C]It goes like this, the [F]fourth, the fifth',
          'The [Am]minor fall, the [F]major lift',
          'The [G]baffled king com[Em]posing Halle[Am]lujah',
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
  },
];
