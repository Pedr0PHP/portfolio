import { useI18n } from '@/i18n';

const clients = [
  '@drdanielreisortopedista',
  '@drhaendelfabrini',
  '@dr.leonardoaguiarsantos',
  '@clinicalel',
  '@drajuliana.cirurgiapediatrica',
  '@drapatriciaribeiro',
  '@dranathaliamacedo',
  '@draanacarolina.ped',
  'Agência Iluminar',
  '@adivina.pizzaria',
  '@turismus',
];
const software = ['Premiere Pro', 'After Effects', 'DaVinci Resolve', 'Photoshop'];

const Column = ({ title, items }: { title: string; items: string[] }) => (
  <div>
    <h4 className="font-script text-primary text-lg mb-3">{title}</h4>
    <ul className="space-y-1.5 text-sm md:text-base">
      {items.map((i) => (
        <li key={i} className="text-foreground/90">{i}</li>
      ))}
    </ul>
  </div>
);

const About = () => {
  const { t } = useI18n();
  return (
    <section id="about" className="px-6 md:px-10 pb-24 md:pb-40">
      <div className="max-w-[1600px] mx-auto border-t border-border pt-6">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-12 md:mb-20">
          04 — {t.about.label}
        </p>

        <div className="grid md:grid-cols-12 gap-10 md:gap-16">
          <div className="md:col-span-7">
            <h2 className="font-display uppercase text-5xl md:text-7xl lg:text-8xl leading-[0.85] mb-8">
              {t.about.h1}
              <br />
              {t.about.h2pre}<span className="text-primary">{t.about.h2emph}</span>{t.about.h2post}
              <br />
              <span className="font-script text-3xl md:text-5xl text-accent normal-case">{t.about.script}</span>
            </h2>
            <div className="space-y-4 text-base md:text-lg text-foreground/85 max-w-xl leading-relaxed">
              <p>{t.about.p1}</p>
              <p>{t.about.p2}</p>
              <p>{t.about.p3}</p>
              <p>{t.about.p4}</p>
            </div>
          </div>

          <div className="md:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-8 md:pt-4">
            <Column title={t.about.clients} items={clients} />
            <Column title={t.about.software} items={software} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
