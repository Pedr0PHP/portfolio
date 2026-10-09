import { useI18n } from '@/i18n';

const Services = () => {
  const { t } = useI18n();
  return (
    <section id="services" className="px-6 md:px-10 pb-24 md:pb-40">
      <div className="max-w-[1600px] mx-auto border-t border-border pt-6">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-12 md:mb-20">
          05 — {t.services.label}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {t.services.items.map((s) => (
            <div
              key={s.title}
              className="group flex flex-col border border-border bg-muted/20 p-6 md:p-8 transition-colors duration-300 hover:bg-primary"
            >
              <h3 className="font-display uppercase text-2xl md:text-3xl leading-none text-foreground transition-colors duration-300 group-hover:text-primary-foreground">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-primary-foreground/80 flex-1">
                {s.desc}
              </p>
              <div className="mt-6">
                <span className="block text-[10px] uppercase tracking-[0.2em] text-muted-foreground transition-colors duration-300 group-hover:text-primary-foreground/70">
                  {t.services.from}
                </span>
                <span className="font-display text-3xl md:text-4xl leading-none text-primary transition-colors duration-300 group-hover:text-primary-foreground">
                  {s.price}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-xl text-xs leading-relaxed text-muted-foreground">
          {t.services.note}
        </p>
      </div>
    </section>
  );
};

export default Services;
