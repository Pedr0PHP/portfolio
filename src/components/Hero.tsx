import { useI18n } from '@/i18n';

const Hero = () => {
  const { t } = useI18n();
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-end overflow-hidden pt-32 pb-10 md:pb-16 grain"
    >
      {/* tiny meta row */}
      <div className="max-w-[1600px] w-full mx-auto px-6 md:px-10 flex justify-between text-xs uppercase tracking-[0.25em] text-muted-foreground mb-10 md:mb-16">
        <span>{t.hero.meta}</span>
        <span className="hidden md:inline">{t.hero.vol}</span>
      </div>

      {/* Giant typographic hero */}
      <div className="max-w-[1600px] w-full mx-auto px-6 md:px-10">
        <h1
          className="font-display uppercase text-foreground text-left"
          style={{
            fontSize: 'clamp(6rem, 18vw, 20rem)',
            lineHeight: 0.85,
            letterSpacing: '-0.02em',
            fontWeight: 900,
          }}
        >
          <span className="block">Pedro</span>
          <span className="block">H.P.</span>
        </h1>

        <div className="mt-8 md:mt-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <p className="font-script text-2xl md:text-4xl text-primary">
            {t.hero.rolePre} <span className="text-foreground">{t.hero.roleMid}</span> {t.hero.rolePost}
          </p>
          <p className="max-w-md text-sm md:text-base text-muted-foreground">
            {t.hero.blurb}
          </p>
        </div>
      </div>

      {/* marquee */}
      <div className="mt-16 md:mt-24 border-y border-border py-4 overflow-hidden bg-muted/30">
        <div className="flex gap-12 animate-marquee whitespace-nowrap font-display uppercase text-2xl md:text-3xl">
          {Array.from({ length: 2 }).flatMap((_, i) =>
            t.hero.marquee
              .flatMap((label) => [label, '✶'])
              .map((word, j) => (
                <span key={`${i}-${j}`} className={word === '✶' ? 'text-primary' : 'text-foreground'}>
                  {word}
                </span>
              )),
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
