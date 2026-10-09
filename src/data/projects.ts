export type Project = {
  id: string;
  title: string;
  client: string;
  year: number;
  category: string;
  youtubeId: string;
  embed?: boolean;
  provider?: 'youtube' | 'vimeo' | 'drive';
  embedUrl?: string;
  /** Custom CSS aspect-ratio for the card (e.g. '2 / 1'); overrides the section default. */
  aspectRatio?: string;
};

// Placeholder projects with real YouTube IDs (public videos)
export const projects: Project[] = [
  {
    id: 'midnight-bloom',
    title: 'Midnight Bloom',
    client: 'Sable Records',
    year: 2025,
    category: 'Music Video',
    youtubeId: 'zg2skbFxQyI',
    embed: true,
  },
  {
    id: 'north-current',
    title: 'North Current',
    client: 'Patagonia',
    year: 2025,
    category: 'Commercial',
    youtubeId: 'hPo6ZAQDPjM',
    embed: true,
  },
  {
    id: 'vimeo-feature',
    title: 'Selected Cut',
    client: 'Vimeo Feature',
    year: 2025,
    category: 'Film',
    youtubeId: '',
    embed: true,
    provider: 'vimeo',
    embedUrl: 'https://player.vimeo.com/video/1088123426?h=&title=0&byline=0&portrait=0',
  },
];

export const motionProjects: Project[] = [
  {
    id: 'drive-motion',
    title: 'Motion Cut',
    client: 'Private Cut',
    year: 2026,
    category: 'Motion Graphics',
    youtubeId: '',
    embed: true,
    provider: 'drive',
    embedUrl: 'https://drive.google.com/file/d/1ZMm5GFAUA9FtZANWhEYrYNGt8eYKxtjZ/preview',
  },
  {
    id: 'motion-2',
    title: 'Vídeo para telão',
    client: '@adivina.pizzaria',
    year: 2026,
    category: 'Motion Graphics',
    youtubeId: 'zVSjbM5SnRo',
    embed: true,
    provider: 'youtube',
  },
];

export const shortVideos: Project[] = [
  {
    id: 'drive-short-3',
    title: 'Consulta',
    client: '@drhaendelfabrini',
    year: 2026,
    category: 'Short Video',
    youtubeId: 'QbBdAVjoOaw',
    embed: true,
    provider: 'youtube',
  },
  {
    id: 'drive-short',
    title: 'Show cut',
    client: 'Variswap',
    year: 2025,
    category: 'Short Video',
    youtubeId: 'o3-FoaHpnNM',
    embed: true,
    provider: 'youtube',
  },
  {
    id: 'street-cuts',
    title: 'Chile',
    client: '@turismus',
    year: 2025,
    category: 'Short Video',
    youtubeId: '',
    embed: true,
    provider: 'drive',
    embedUrl: 'https://drive.google.com/file/d/1cB1dBEfqbflbbX-yKQ0dI2RyMrbTDckc/preview',
  },
  {
    id: 'morning-ritual',
    title: 'Consulta',
    client: '@dr.leonardoaguiarsantos',
    year: 2025,
    category: 'Short Video',
    youtubeId: '',
    embed: true,
    provider: 'drive',
    embedUrl: 'https://drive.google.com/file/d/1pHL6vUyIznscUWaufTXLDbyyLWiwa2NE/preview',
  },
  {
    id: 'drive-short-4',
    title: 'Erros de Gravação',
    client: '@helenmagalhaes.fisio',
    year: 2025,
    category: 'Short Video',
    youtubeId: 'anhu0oR8o_w',
    embed: true,
    provider: 'youtube',
  },
  {
    id: 'drive-short-5',
    title: 'Aniversário',
    client: '@alinedermatos',
    year: 2025,
    category: 'Short Video',
    youtubeId: 'wbPelWy7QZM',
    embed: true,
    provider: 'youtube',
  },
  {
    id: 'drive-short-6',
    title: 'Consulta',
    client: '@drapatriciaribeiro',
    year: 2025,
    category: 'Short Video',
    youtubeId: 'qNTdcShbrhg',
    embed: true,
    provider: 'youtube',
  },
  {
    id: 'short-propaganda-1',
    title: 'Propaganda',
    client: '@adivina.pizzaria',
    year: 2025,
    category: 'Short Video',
    youtubeId: 'ini5L98q_Oo',
    embed: true,
    provider: 'youtube',
  },
  {
    id: 'short-propaganda-2',
    title: 'Propaganda',
    client: '@adivina.pizzaria',
    year: 2025,
    category: 'Short Video',
    youtubeId: 'w4yfYZ4h0v4',
    embed: true,
    provider: 'youtube',
  },
  {
    id: 'short-propaganda-3',
    title: 'Propaganda',
    client: '@adivina.pizzaria',
    year: 2025,
    category: 'Short Video',
    youtubeId: '2ea9vZ2Rme0',
    embed: true,
    provider: 'youtube',
  },
];

export const yearRange = '2022 — 2026';
