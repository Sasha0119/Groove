import { Track, Playlist } from './types';

export const TRACKS: Track[] = [
  {
    id: '1',
    title: 'Midnight City',
    artist: 'M83',
    album: 'Hurry Up, We\'re Dreaming',
    coverUrl: 'https://picsum.photos/seed/midnight/400/400',
    duration: 243,
    color: '#3b82f6',
    lyrics: [
      "Waiting in a car",
      "Waiting for a ride in the dark",
      "The night city grows",
      "Look at the horizon burn neon",
      "The stars are out",
      "The city is a dream",
      "Midnight city"
    ]
  },
  {
    id: '2',
    title: 'Starboy',
    artist: 'The Weeknd',
    album: 'Starboy',
    coverUrl: 'https://picsum.photos/seed/starboy/400/400',
    duration: 230,
    color: '#ef4444',
    lyrics: [
      "I'm tryna put you in the worst mood, ah",
      "P1 cleaner than your church shoes, ah",
      "Milli point two just to hurt you, ah",
      "Look what you've done",
      "I'm a motherf***ing starboy"
    ]
  },
  {
    id: '3',
    title: 'Levitating',
    artist: 'Dua Lipa',
    album: 'Future Nostalgia',
    coverUrl: 'https://picsum.photos/seed/future/400/400',
    duration: 203,
    color: '#ec4899',
    lyrics: [
      "If you wanna run away with me, I know a galaxy",
      "And I can take you for a ride",
      "I had a premonition that we fell into a rhythm",
      "Where the music don't stop for life"
    ]
  },
  {
    id: '4',
    title: 'Circles',
    artist: 'Post Malone',
    album: 'Hollywood\'s Bleeding',
    coverUrl: 'https://picsum.photos/seed/circles/400/400',
    duration: 215,
    color: '#f59e0b',
    lyrics: [
      "We couldn't turn around 'til we were upside down",
      "I'll be the bad guy and you'll be the light",
      "We'll stay in circles"
    ]
  },
  {
    id: '5',
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    album: 'After Hours',
    coverUrl: 'https://picsum.photos/seed/blinding/400/400',
    duration: 200,
    color: '#ef4444'
  },
  {
    id: '6',
    title: 'Heat Waves',
    artist: 'Glass Animals',
    album: 'Dreamland',
    coverUrl: 'https://picsum.photos/seed/heat/400/400',
    duration: 238,
    color: '#8b5cf6'
  }
];

export const PLAYLISTS: Playlist[] = [
  {
    id: 'p1',
    title: 'Today\'s Top Hits',
    description: 'The hottest tracks right now.',
    coverUrl: 'https://picsum.photos/seed/tophits/400/400',
    tracks: TRACKS.slice(0, 4)
  },
  {
    id: 'p2',
    title: 'Deep Focus',
    description: 'Keep those brain waves flowing.',
    coverUrl: 'https://picsum.photos/seed/focus/400/400',
    tracks: TRACKS.slice(2, 6)
  },
  {
    id: 'p3',
    title: 'Retro Vibes',
    description: 'Back to the 80s and 90s.',
    coverUrl: 'https://picsum.photos/seed/retro/400/400',
    tracks: [TRACKS[0], TRACKS[5]]
  }
];
