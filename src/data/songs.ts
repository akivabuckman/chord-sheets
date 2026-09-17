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
  {
    id: 'hashem-malach',
    title: 'ה מלך',
    links: {youtube: "https://youtube.com/shorts/Q-djRusPEwY"},
    hebrewLyrics: 'ה מלך גאות לבש לבש ה עז התעזר אף תיכון תבל בל תימות נכון כסאך מאז מעולם עתה נשאו נהרות ה נשאו נהרות קולם ישאו נהרות דכיים מקולות מים רבים אדירים משברי ים אדיר במרום ה עידותך נאמנו מאד לביתך נאוה קודש ה לאורך ימים',
    standardSections: [
      {
        lines: [          
          { chords: 'G     D  Am Em', lyrics: 'ה מלך  גאות לבש' },
          { chords: 'Em    B  Am   E  G Em', lyrics: ' ל-בש אדו-ני עז התעזר' },
          { chords: 'G        D  Am    Em', lyrics: ' אף תיכון תבל בל תימות' },
          { chords: 'Em      B  Am  E      G Em', lyrics: ' נ-כון כסאך מאז  מעולם עתה' },
          { chords: 'B   G          D            C      Em', lyrics: ' נשאו נהרות אדו-ני נשאו נהרות קולם' },
          { chords: 'Em B       C     Em', lyrics: ' ישאו  נהרות   דכיים' },
          { chords: 'B   G         D               C      Em', lyrics: ' מקולות מים   רבים   אדירים משברי ים' },
          { chords: 'Em     B       C      Em', lyrics: ' אדיר   במרום   אדו---ני' },
          { chords: 'G      D Am  Em', lyrics: 'עידותך נאמנו מאד' },
          { chords: 'Em         B7      Am    E    G   Em', lyrics: ' לביתך   נאוה קודש אדו-ני לאורך  ימים' },
        ],
      },
    ],
    advancedSections: [
      {
        lines: [
          { chords: 'G7/F  G     D7 Am6 Em', lyrics: 'ה   מלך גאות לבש' },
          { chords: 'Em B7 F#m6  A   E/G# G Em', lyrics: ' ל-בש   אדו-ני    עז התעזר' },
          { chords: 'G7/F   G        D7  Am6  Em', lyrics: ' אף תיכון תבל בל תימות' },
          { chords: 'Em  B7 F#m6  A  E/G#   G Em', lyrics: ' נ-כון כסאך מאז    מעולם עתה' },
          { chords: 'B7/A  C7/Bb B7   Cmaj7 A/C#    G/D  B+/D# Em', lyrics: ' נש----או נהרות אדו-ני  נשאו נהרות קולם' },
          { chords: 'Em B7 F#m6  A/C# G/D B+/D# Em', lyrics: ' יש----או  נה---רות   ד----כיים' },
          { chords: 'B7/A  C7/Bb     B7  Cmaj7    A/C#   G/D    B+/D# Em', lyrics: ' מ----קולות   מים   רבים   אדירים משברי    ים' },
          { chords: 'Em   B7 F#m6 A/C# G/D   B+/D# Em', lyrics: 'א-----דיר   במ---רום   א----דוני' },
          { chords: 'G7/F  G     D7 Am6 Em', lyrics: 'עידותך נאמנו מאד' },
          { chords: 'Emadd9   B7  F#m6    A     E/G# G   Em', lyrics: ' לביתך   נאוה קודש אדו-ני לאורך     ימים' },
        ],
      },
    ],
  },
];
