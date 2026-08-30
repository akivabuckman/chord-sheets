export type Language = 'en' | 'he';

export interface Translations {
  appTitle: string;
  appSubtitle: string;
  searchPlaceholder: string;
  resultsCount: (n: number) => string;
  noSongsFound: string;
  byDate: string;
  alphabetical: string;
  back: string;
  standard: string;
  advanced: string;
  songNotFound: string;
  goBack: string;
  share: string;
  linkCopied: string;
  chordFinderLink: string;
  siteName: string;
}

export const translations: Record<Language, Translations> = {
  en: {
    appTitle: 'Chord Sheets',
    appSubtitle: 'Song lyrics with guitar chords',
    searchPlaceholder: 'Search songs or lyrics...',
    resultsCount: (n) => `${n} result${n !== 1 ? 's' : ''}`,
    noSongsFound: 'No songs found.',
    byDate: 'Newest',
    alphabetical: 'A–Z',
    back: 'Back',
    standard: 'Standard',
    advanced: 'Advanced',
    songNotFound: 'Song not found.',
    goBack: 'Go back',
    share: 'Share',
    linkCopied: 'Link copied',
    chordFinderLink: 'Want to find your own chords? Try my chord finder',
    siteName: 'akivabuckman.com',
  },
  he: {
    appTitle: 'שירונט אקורדים',
    appSubtitle: 'מילים של שירים עם אקורדים',
    searchPlaceholder: 'חיפוש שירים או מילים...',
    resultsCount: (n) => `${n} תוצאות`,
    noSongsFound: 'לא נמצאו שירים.',
    byDate: 'חדשים',
    alphabetical: 'א–ת',
    back: 'חזרה',
    standard: 'רגיל',
    advanced: 'מתקדם',
    songNotFound: 'השיר לא נמצא.',
    goBack: 'חזרה',
    share: 'שיתוף',
    linkCopied: 'הקישור הועתק',
    chordFinderLink: 'רוצים למצוא אקורדים בעצמכם? נסו את מחפש האקורדים שלי',
    siteName: 'akivabuckman.com',
  },
};

const SECTION_LABEL_TRANSLATIONS: Record<string, string> = {
  intro: 'פתיחה',
  verse: 'בית',
  'pre-chorus': 'טרום פזמון',
  prechorus: 'טרום פזמון',
  chorus: 'פזמון',
  bridge: 'גשר',
  outro: 'סיום',
  interlude: 'ביניים',
};

export function translateSectionLabel(label: string, language: Language): string {
  if (language === 'en') return label;

  const match = label.match(/^([a-zA-Z- ]+?)\s*(\d*)$/);
  if (!match) return label;

  const [, name, number] = match;
  const translated = SECTION_LABEL_TRANSLATIONS[name.trim().toLowerCase()];
  if (!translated) return label;

  return number ? `${translated} ${number}` : translated;
}
