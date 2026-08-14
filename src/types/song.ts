export interface SongLinks {
  tiktok?: string;
  instagram?: string;
  facebook?: string;
  youtube?: string;
}

export interface SongSection {
  label?: string;
  lines: string[];
}

export interface Song {
  id: string;
  title: string;
  artist?: string;
  date: string;
  links: SongLinks;
  standardSections?: SongSection[];
  advancedSections?: SongSection[];
  lyrics?: string;
  hebrewLyrics?: string;
}
