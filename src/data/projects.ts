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
    id: 'drive-motion-2',
    title: 'Motion Cut 02',
    client: 'Private Cut',
    year: 2026,
    category: 'Motion Graphics',
    youtubeId: '',
    embed: true,
    provider: 'drive',
    embedUrl: 'https://drive.google.com/file/d/1XVyt7rZfLne-p4dNbC1Ud8SgckasXXOX/preview',
  },
];

export const shortVideos: Project[] = [
  {
    id: 'drive-short-2',
    title: 'Preview',
    client: 'Up Scale',
    year: 2026,
    category: 'Short Video',
    youtubeId: '',
    embed: true,
    provider: 'drive',
    embedUrl: 'https://drive.google.com/file/d/11elRLzs9wxWZAhW901ruHnAh34qL2jzp/preview',
  },
  {
    id: 'drive-short-3',
    title: 'Consulta',
    client: '@drhaendelfabrini',
    year: 2026,
    category: 'Short Video',
    youtubeId: '',
    embed: true,
    provider: 'drive',
    embedUrl: 'https://drive.google.com/file/d/1dCtCIhxIEW44pxNcj7eK2zFaWOD4aqkP/preview',
  },
  {
    id: 'drive-short',
    title: 'Show cut',
    client: 'Variswap',
    year: 2025,
    category: 'Short Video',
    youtubeId: '',
    embed: true,
    provider: 'drive',
    embedUrl: 'https://drive.google.com/file/d/1lXW-8tXyzirmVAGke2Xd0feFNdMMBTke/preview',
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
    title: 'Vídeo curto 04',
    client: 'Private Cut',
    year: 2025,
    category: 'Short Video',
    youtubeId: '',
    embed: true,
    provider: 'drive',
    embedUrl: 'https://drive.google.com/file/d/1fKxnelf9Ia3jgt-78KYBZsDzLuO9wtGm/preview',
  },
  {
    id: 'drive-short-5',
    title: 'Vídeo curto 05',
    client: 'Private Cut',
    year: 2025,
    category: 'Short Video',
    youtubeId: '',
    embed: true,
    provider: 'drive',
    embedUrl: 'https://drive.google.com/file/d/1Qok4eqj5MPk30cLN2FmbdVnVe2FLGzRs/preview',
  },
  {
    id: 'drive-short-6',
    title: 'Vídeo curto 06',
    client: 'Private Cut',
    year: 2025,
    category: 'Short Video',
    youtubeId: '',
    embed: true,
    provider: 'drive',
    embedUrl: 'https://drive.google.com/file/d/136UXo2ClQrNFjEIua4WFDYY7knXe6s_g/preview',
  },
  {
    id: 'drive-short-7',
    title: 'Vídeo curto 07',
    client: 'Private Cut',
    year: 2025,
    category: 'Short Video',
    youtubeId: '',
    embed: true,
    provider: 'drive',
    embedUrl: 'https://drive.google.com/file/d/1ofIy85KARs_4oPTKWo-B2FuOwYcAziVl/preview',
  },
  {
    id: 'drive-short-8',
    title: 'Vídeo curto 08',
    client: 'Private Cut',
    year: 2025,
    category: 'Short Video',
    youtubeId: '',
    embed: true,
    provider: 'drive',
    embedUrl: 'https://drive.google.com/file/d/13en4Opdpfw0YBKLWK-t1Qw5Y4dsdurzv/preview',
  },
  {
    id: 'drive-short-9',
    title: 'Vídeo curto 09',
    client: 'Private Cut',
    year: 2025,
    category: 'Short Video',
    youtubeId: '',
    embed: true,
    provider: 'drive',
    embedUrl: 'https://drive.google.com/file/d/1QdVDrk-wzCcS2VDuVG9eOvH3GVtJlWmB/preview',
  },
];

export const yearRange = '2022 — 2026';
