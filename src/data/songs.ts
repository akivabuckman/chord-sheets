import type { Song } from '@/types/song'

export const songs: Song[] = [
  {
    id: 'example-song-1',
    title: 'Example Song',
    artist: 'Example Artist',
    date: '2024-01-15',
    links: {
      youtube: 'https://youtube.com/watch?v=example',
      instagram: 'https://instagram.com/p/example',
    },
    sections: [
      {
        label: 'Verse 1',
        lines: [
          '[C]Twinkle twinkle [G]little star',
          '[F]How I wonder [C]what you are',
          '[F]Up above the [C]world so [G]high',
          '[F]Like a diamond [C]in the [G]sky',
        ],
      },
      {
        label: 'Chorus',
        lines: [
          '[C]Twinkle twinkle [G]little star',
          '[F]How I wonder [C]what you [G]are',
        ],
      },
    ],
  },
  {
    id: 'example-song-2',
    title: 'Another Song',
    artist: 'Another Artist',
    date: '2024-02-20',
    links: {
      tiktok: 'https://tiktok.com/@example/video/123',
      facebook: 'https://facebook.com/watch?v=example',
    },
    sections: [
      {
        label: 'Verse',
        lines: [
          '[Am]La la la [F]la la',
          '[C]Something [G]something',
        ],
      },
    ],
  },
]
