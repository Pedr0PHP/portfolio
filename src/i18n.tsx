import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';

export type Lang = 'en' | 'pt';

type Dict = {
  nav: { work: string; about: string; contact: string };
  hero: {
    meta: string;
    vol: string;
    rolePre: string;
    roleMid: string;
    rolePost: string;
    blurb: string;
    marquee: string[];
  };
  work: {
    selectedTitle: string;
    motionTitle: string;
    motionRight: string;
    shortsTitle: string;
    shortsRight: string;
  };
  about: {
    label: string;
    h1: string;
    h2pre: string;
    h2emph: string;
    h2post: string;
    script: string;
    p1: string;
    p2: string;
    p3: string;
    p4: string;
    clients: string;
    software: string;
  };
  contact: {
    label: string;
    sayHi: string;
    basedInLabel: string;
    basedIn: string;
    bookingLabel: string;
    booking: string;
    copyright: (year: number) => string;
    pressPlay: string;
  };
};

const en: Dict = {
  nav: { work: 'Work', about: 'About', contact: 'Contact' },
  hero: {
    meta: 'Est. 2024 — São Paulo / Worldwide',
    vol: 'Vol. 04 / Selected Cuts',
    rolePre: 'Video Editor',
    roleMid: '&',
    rolePost: 'Motion',
    blurb:
      'Video editor working across short-form and long-form, with motion design and a bit of graphic design in the mix. Cutting picture since 2024 out of a small room with a big window.',
    marquee: ['Music Video', 'Commercial', 'Short Film', 'Documentary', 'Motion'],
  },
  work: {
    selectedTitle: 'Selected Work',
    motionTitle: 'Motion Graphics',
    motionRight: 'Animation / Titles',
    shortsTitle: 'Short Videos',
    shortsRight: 'Reels / Shorts / TikTok',
  },
  about: {
    label: 'About',
    h1: 'I cut picture',
    h2pre: 'for a ',
    h2emph: 'living',
    h2post: ',',
    script: 'and for the love of it.',
    p1: "I'm Pedro — an editor based between São Paulo and wherever the next gig takes me. I started cutting on borrowed laptops and never quite stopped.",
    p2: "My work lives where rhythm and image meet. I care about pace, about the cut you don't notice, and about the one that hits like a snare.",
    p3: "On average, I've cut around 70 videos for each client I work with — steady volume, delivered one edit at a time.",
    p4: "Available for select projects in 2026. Let's make something loud.",
    clients: 'Clients',
    software: 'Software',
  },
  contact: {
    label: 'Contact',
    sayHi: 'say hi —',
    basedInLabel: 'Based in',
    basedIn: 'São Paulo, BR — Working worldwide',
    bookingLabel: 'Booking',
    booking: 'Open for Q2 / Q3 2026',
    copyright: (year) => `© ${year} Pedro H.P. — All cuts reserved.`,
    pressPlay: 'Press play.',
  },
};

const pt: Dict = {
  nav: { work: 'Trabalhos', about: 'Sobre', contact: 'Contato' },
  hero: {
    meta: 'Desde 2024 — São Paulo / Mundo',
    vol: 'Vol. 04 / Edições Selecionadas',
    rolePre: 'Editor de Vídeo',
    roleMid: '&',
    rolePost: 'Motion',
    blurb:
      'Editor de vídeo que trabalha com formatos curtos e longos, com motion design e uma pitada de design gráfico no meio. Editando vídeos desde 2024.',
    marquee: ['Videoclipe', 'Comercial', 'Curta', 'Documentário', 'Motion'],
  },
  work: {
    selectedTitle: 'Trabalhos Selecionados',
    motionTitle: 'Motion Graphics',
    motionRight: 'Animação / Títulos',
    shortsTitle: 'Vídeos Curtos',
    shortsRight: 'Reels / Shorts / TikTok',
  },
  about: {
    label: 'Sobre',
    h1: 'Eu edito vídeos',
    h2pre: 'pra ',
    h2emph: 'viver',
    h2post: ',',
    script: 'e pelo amor à coisa.',
    p1: 'Sou o Pedro, um editor que mora entre São Paulo e onde o próximo trabalho me levar.',
    p2: 'Meu trabalho vive onde ritmo e imagem se encontram. Me importo com o tempo, com a edição que você nem percebe.',
    p3: 'Em média, já editei cerca de 70 vídeos para cada cliente com quem trabalho — volume constante, entregue uma edição de cada vez.',
    p4: 'Disponível para projetos selecionados em 2026. Vamos fazer algo alto.',
    clients: 'Clientes',
    software: 'Software',
  },
  contact: {
    label: 'Contato',
    sayHi: 'diga oi —',
    basedInLabel: 'Localização',
    basedIn: 'São Paulo, BR — Trabalhando pelo mundo',
    bookingLabel: 'Agenda',
    booking: 'Disponível no 2º / 3º tri de 2026',
    copyright: (year) => `© ${year} Pedro H.P. — Todas as edições reservadas.`,
    pressPlay: 'Dá o play.',
  },
};

const dictionaries: Record<Lang, Dict> = { en, pt };

type I18nContextValue = { lang: Lang; setLang: (l: Lang) => void; toggle: () => void; t: Dict };

const I18nContext = createContext<I18nContextValue | null>(null);

const getInitialLang = (): Lang => {
  if (typeof window === 'undefined') return 'en';
  const stored = window.localStorage.getItem('lang');
  if (stored === 'en' || stored === 'pt') return stored;
  return navigator.language?.toLowerCase().startsWith('pt') ? 'pt' : 'en';
};

export const I18nProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>(getInitialLang);

  useEffect(() => {
    window.localStorage.setItem('lang', lang);
    document.documentElement.lang = lang === 'pt' ? 'pt-BR' : 'en';
  }, [lang]);

  const value = useMemo<I18nContextValue>(
    () => ({
      lang,
      setLang: setLangState,
      toggle: () => setLangState((l) => (l === 'en' ? 'pt' : 'en')),
      t: dictionaries[lang],
    }),
    [lang],
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

export const useI18n = () => {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error('useI18n must be used within I18nProvider');
  return ctx;
};
