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
 * LINE FORMAT
 * -----------
 * Each line in a section is a { chords?, lyrics } pair:
 *   chords  - optional raw string, printed as-is directly above the lyrics line.
 *             Pad it with spaces yourself to line chords up over the right words/syllables.
 *   lyrics  - the lyric text for that line (no chord markup).
 *
 * Example:
 *   { chords: 'Am        F         C              G', lyrics: 'Yesterday all my troubles seemed so far away' }
 *
 * Renders as:
 *   Am        F         C              G
 *   Yesterday all my troubles seemed so far away
 *
 * Lines with no `chords` are rendered as plain lyric lines (no chord row).
 * Use { lyrics: '' } for a blank spacer line between phrases.
 *
 * For Hebrew (RTL) lines, the browser lays out the lyric text right-to-left,
 * so lining up the chord string above it takes some manual trial and error in
 * the running app - there's no automatic alignment for RTL text.
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
          { chords: 'F          Em7    A7                 Dm', lyrics: 'Yesterday, all my troubles seemed so far away' },
          { chords: 'Bb     C7                      F', lyrics: "Now it looks as though they're here to stay" },
          { chords: 'Dm   G          Bb    F', lyrics: 'Oh I believe in yesterday' },
        ],
      },
      {
        label: 'Verse 2',
        lines: [
          { chords: 'F         Em7     A7             Dm', lyrics: "Suddenly, I'm not half the man I used to be" },
          { chords: 'Bb        C7             F', lyrics: "There's a shadow hanging over me" },
          { chords: 'Dm    G      Bb   F', lyrics: 'Oh yesterday came suddenly' },
        ],
      },
      {
        label: 'Chorus',
        lines: [
          { chords: 'Am      D           F                        C', lyrics: "Why she had to go I don't know, she wouldn't say" },
          { chords: 'Am     D                      F           C', lyrics: 'I said something wrong, now I long for yesterday' },
        ],
      },
      {
        label: 'Verse 3',
        lines: [
          { chords: 'F          Em7      A7           Dm', lyrics: 'Yesterday, love was such an easy game to play' },
          { chords: 'Bb    C7              F', lyrics: 'Now I need a place to hide away' },
          { chords: 'Dm   G          Bb    F', lyrics: 'Oh I believe in yesterday' },
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
          { chords: 'C                           Am', lyrics: "I've heaaaaaard there was a secret chord" },
          { chords: '     C                   Am', lyrics: 'That David played and it pleased the Lord' },
          { chords: '    F                C               C       G', lyrics: "But you don't really care for music, do you? " },
          { chords: 'C                      F', lyrics: 'It goes like this, the fourth, the fifth' },
          { chords: '    Am              F', lyrics: 'The minor fall, the major lift' },
          { chords: '    G               C           Am', lyrics: 'The baffled king composing Hallelujah' },
        ],
      },
      {
        label: 'Chorus',
        lines: [
          { chords: 'F           Am', lyrics: 'Hallelujah, Hallelujah' },
          { chords: 'F           C      G   C', lyrics: 'Hallelujah, Hallelujah ' },
        ],
      },
    ],
    advancedSections: [
      {
        label: 'Verse 1',
        lines: [
          { chords: 'Cmaj7                  Am9', lyrics: "I've heard there was a secret chord" },
          { chords: '     Cmaj7               Am9', lyrics: 'That David played and it pleased the Lord' },
          { chords: '    Fmaj7            G13             Cmaj7   G7sus4', lyrics: "But you don't really care for music, do you? " },
          { chords: 'Cmaj7                  Fmaj7', lyrics: 'It goes like this, the fourth, the fifth' },
          { chords: '    Am9             Fmaj7', lyrics: 'The minor fall, the major lift' },
          { chords: '    G13             Em7         Am9', lyrics: 'The baffled king composing Hallelujah' },
        ],
      },
      {
        label: 'Chorus',
        lines: [
          { chords: 'Fmaj7       Am9', lyrics: 'Hallelujah, Hallelujah' },
          { chords: 'Fmaj7       Cmaj7  G13 Cadd9', lyrics: 'Hallelujah, Hallelujah ' },
        ],
      },
    ],
  },
  {
    id: 'veshamru-slow',
    title: 'ושמרו',
    links: {youtube: "https://youtube.com/shorts/lXTmwjQQA3E"},
    hebrewLyrics: 'ושמרו בני ישראל את השבת לעשות את השבת לדורותם ברית עולם ביני ובין בני ישראל אות היא לעולם כי ששת ימים עשה ה את השמים ואת הארץ וביום השביעי שבת וינפש',
    standardSections: [
      {
        lines: [
          { chords: 'Em  F Dm Am F     Am  Dm Am', lyrics: 'ושמ-רו בני ישראל את השבת' },
          { chords: 'Am   Dm       Am  F    Am  Dm Am', lyrics: ' לע-שות את השבת לדורותם ברית עולם' },
          { chords: 'E  Am         Dm  Em        F   G F', lyrics: 'ביני ובין בני ישראל אות היא לעולם' },
          { chords: 'Em  Am        DmEm  F    G      F', lyrics: 'כי ששת ימים עשה ה את השמים ואת הארץ' },
          { chords: 'Am Dm  Am F   Am  DmAm', lyrics: ' וביום השביעי שבת וינפש' },
        ],
      },
    ],
    advancedSections: [
      {
        lines: [
          { chords: 'Em7  Fmaj7 Bb Am7 Fmaj7 Am7 Dm7 Am7', lyrics: ' ושמ--רו בני ישראל  את הש----בת' },
          { chords: 'Am G  Dm       Am  D   Am7  Dm7 Am7', lyrics: '  לע--שות את השבת לדורותם ברית עו-לם' },
          { chords: 'C7        Dm7 Em7 Fmaj7', lyrics: '    בי--ני ובין בני ישראל ' },
          { chords: 'E7  Esus4 Bb Dm7/C   Dm7', lyrics: '  אות   היא  לעו---לם' },
          { chords: 'A7   Dm7    Em7     Fmaj7', lyrics: '   כי ששת   ימים   עשה השם' },
          { chords: 'E7 F7 G  Am  Bb Dm7/C  Dm7', lyrics: '  את     השמים ואת ה--א-רץ' },
          { chords: 'Am G   Fmaj7 D/F# Fmaj7 Dm7 Am7', lyrics: '  וב-יום    השבי-עי    שבת וינפש' },
        ],
      },
    ],
  },
];
