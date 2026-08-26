import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { useI18n, type Lang } from '@/i18n';

const LangToggle = () => {
  const { lang, setLang } = useI18n();
  const options: Lang[] = ['pt', 'en'];

  return (
    <div className="flex items-center text-xs uppercase tracking-[0.2em] font-medium border border-border rounded-full overflow-hidden">
      {options.map((code) => {
        const active = lang === code;
        return (
          <button
            key={code}
            type="button"
            onClick={() => setLang(code)}
            aria-pressed={active}
            className={`px-2.5 py-1 transition-colors ${
              active
                ? 'bg-primary text-primary-foreground'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            {code}
          </button>
        );
      })}
    </div>
  );
};

const Nav = () => {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { label: t.nav.work, href: '#work' },
    { label: t.nav.about, href: '#about' },
    { label: t.nav.contact, href: '#contact' },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu when resizing up to desktop
  useEffect(() => {
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || open ? 'py-3 backdrop-blur-sm bg-background/80 border-b border-border' : 'py-6'
      }`}
    >
      <nav className="max-w-[1600px] mx-auto px-6 md:px-10 flex items-center justify-between">
        <a
          href="#top"
          onClick={() => setOpen(false)}
          className="font-script text-xl text-primary leading-none"
        >
          Pedro<span className="text-foreground">.</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6 md:gap-10">
          <ul className="flex items-center gap-6 md:gap-10 text-sm uppercase tracking-[0.2em] font-medium">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative py-1 transition-colors hover:text-primary
                             after:absolute after:left-0 after:bottom-0 after:h-px after:w-0
                             after:bg-primary after:transition-all hover:after:w-full"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <LangToggle />
        </div>

        {/* Mobile controls */}
        <div className="flex md:hidden items-center gap-3">
          <LangToggle />
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="inline-flex items-center justify-center w-9 h-9 -mr-1 text-foreground hover:text-primary transition-colors"
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile menu panel */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="px-6 pt-6 pb-8 flex flex-col gap-5">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display uppercase text-4xl leading-none text-foreground hover:text-primary transition-colors"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Nav;
