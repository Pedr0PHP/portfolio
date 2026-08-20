import { projects, motionProjects, shortVideos, yearRange, type Project } from '@/data/projects';
import { useI18n } from '@/i18n';

type Props = { onOpen: (id: string) => void };

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" className="w-8 h-8 fill-current" aria-hidden>
    <path d="M5 3.5v17l15-8.5z" />
  </svg>
);

const ProjectCard = ({
  project,
  onOpen,
  aspect = 'video',
  hideMeta = false,
}: {
  project: Project;
  onOpen: (id: string) => void;
  aspect?: 'video' | 'vertical';
  hideMeta?: boolean;
}) => {
  const thumb = `https://img.youtube.com/vi/${project.youtubeId}/maxresdefault.jpg`;
  const fallback = `https://img.youtube.com/vi/${project.youtubeId}/hqdefault.jpg`;
  const aspectClass = aspect === 'vertical' ? 'aspect-[9/16]' : 'aspect-video';

  if (project.embed) {
    const src =
      project.embedUrl ??
      `https://www.youtube.com/embed/${project.youtubeId}?rel=0&modestbranding=1&playsinline=1`;
    return (
      <div className="group text-left block w-full">
        <div className={`relative w-full ${aspectClass} overflow-hidden bg-muted`}>
          <iframe
            src={src}
            title={project.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
            allowFullScreen
            className="absolute inset-0 w-full h-full"
          />
        </div>
        {!hideMeta && (
          <div className="mt-4 md:mt-5">
            <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
              {project.client}
            </p>
            <div className="mt-1.5 flex items-baseline justify-between gap-4">
              <h3 className="font-display uppercase text-2xl md:text-4xl leading-none text-foreground">
                {project.title}
              </h3>
              <span className="shrink-0 text-[11px] uppercase tracking-[0.22em] text-primary">
                {project.category}
              </span>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <button
      onClick={() => onOpen(project.youtubeId)}
      className="group text-left block w-full"
      aria-label={`Play ${project.title}`}
    >
      <div className={`relative w-full ${aspectClass} overflow-hidden bg-muted`}>
        <img
          src={thumb}
          onError={(e) => {
            const img = e.currentTarget;
            if (img.src !== fallback) img.src = fallback;
          }}
          alt={project.title}
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
        <div className="absolute inset-0 bg-background/0 group-hover:bg-background/30 transition-colors duration-500" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary text-primary-foreground shadow-poster-sm pl-1.5">
            <PlayIcon />
          </span>
        </div>
      </div>

      {!hideMeta && (
        <div className="mt-4 md:mt-5">
          <p className="text-[11px] uppercase tracking-[0.22em] text-muted-foreground">
            {project.client}
          </p>
          <div className="mt-1.5 flex items-baseline justify-between gap-4">
            <h3 className="font-display uppercase text-2xl md:text-4xl leading-none text-foreground transition-colors group-hover:text-primary">
              {project.title}
            </h3>
            <span className="shrink-0 text-[11px] uppercase tracking-[0.22em] text-primary">
              {project.category}
            </span>
          </div>
        </div>
      )}
    </button>
  );
};

const SectionHeader = ({ number, title, right }: { number: string; title: string; right?: string }) => (
  <div className="flex items-end justify-between mb-12 md:mb-20 border-t border-border pt-6">
    <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">
      {number} — {title}
    </p>
    {right && (
      <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground">{right}</p>
    )}
  </div>
);

const Work = ({ onOpen }: Props) => {
  const { t } = useI18n();
  return (
    <>
      <section id="work" className="px-6 md:px-10 pb-24 md:pb-40">
        <div className="max-w-[1600px] mx-auto">
          <SectionHeader number="01" title={t.work.selectedTitle} right={yearRange} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} onOpen={onOpen} hideMeta />
            ))}
          </div>
        </div>
      </section>

      <section id="motion" className="px-6 md:px-10 pb-24 md:pb-40">
        <div className="max-w-[1600px] mx-auto">
          <SectionHeader number="02" title={t.work.motionTitle} right={t.work.motionRight} />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
            {motionProjects.map((p) => (
              <ProjectCard key={p.id} project={p} onOpen={onOpen} />
            ))}
          </div>
        </div>
      </section>

      <section id="shorts" className="px-6 md:px-10 pb-24 md:pb-40">
        <div className="max-w-[1600px] mx-auto">
          <SectionHeader number="03" title={t.work.shortsTitle} right={t.work.shortsRight} />
          <div className="grid grid-cols-2 gap-x-6 md:gap-x-10 gap-y-16 max-w-[900px] mx-auto">
            {shortVideos.map((p) => (
              <ProjectCard key={p.id} project={p} onOpen={onOpen} aspect="vertical" />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
