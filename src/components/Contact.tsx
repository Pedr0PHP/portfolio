import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { useI18n } from '@/i18n';

const EMAIL = 'pedrohenrique.pinheiro071@gmail.com';

const socials = [
  { label: 'WHATSAPP', href: 'https://wa.me/5519992313145' },
  { label: 'Vimeo', href: 'https://vimeo.com/wetriedpictures?fl=pp&fe=sh' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/pedrohenrique071/' },
];

const CopyEmailButton = ({ className = '' }: { className?: string }) => {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
    } catch {
      const el = document.createElement('textarea');
      el.value = EMAIL;
      document.body.appendChild(el);
      el.select();
      document.execCommand('copy');
      document.body.removeChild(el);
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? 'Copied' : 'Copy email'}
      title={copied ? 'Copied!' : 'Copy email'}
      className={`shrink-0 inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 rounded-full border border-border text-foreground hover:text-primary hover:border-primary transition-colors duration-300 ${className}`}
    >
      {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
    </button>
  );
};

const Contact = () => {
  const { t } = useI18n();
  return (
    <footer id="contact" className="px-6 md:px-10 pb-10 pt-10 border-t border-border">
      <div className="max-w-[1600px] mx-auto">
        <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-10">
          05 — {t.contact.label}
        </p>

        <p className="font-script text-primary text-2xl md:text-3xl mb-4">{t.contact.sayHi}</p>

        {/* Desktop: single line, no wrap */}
        <div className="hidden sm:flex items-center gap-4">
          <a
            href={`mailto:${EMAIL}`}
            className="inline-block font-display uppercase text-foreground hover:text-primary transition-colors duration-300 leading-[0.9] whitespace-nowrap"
            style={{ fontSize: 'clamp(1.5rem, 4vw, 4rem)' }}
          >
            {EMAIL}
          </a>
          <CopyEmailButton />
        </div>

        {/* Mobile: split across three lines so it stays large but fits */}
        <a
          href={`mailto:${EMAIL}`}
          className="sm:hidden block font-display uppercase text-foreground hover:text-primary transition-colors duration-300 leading-[0.9]"
          style={{ fontSize: 'clamp(2.5rem, 11vw, 5rem)' }}
        >
          <span className="block whitespace-nowrap">pedrohenrique</span>
          <span className="block whitespace-nowrap">.pinheiro071@</span>
          <span className="block whitespace-nowrap">gmail.com</span>
        </a>
        <CopyEmailButton className="sm:hidden mt-4" />

        <ul className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm uppercase tracking-[0.2em]">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className="text-foreground hover:text-primary transition-colors duration-300"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="mt-16 md:mt-24 grid md:grid-cols-2 gap-10 border-t border-border pt-10">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">{t.contact.basedInLabel}</p>
            <p className="text-lg">{t.contact.basedIn}</p>
          </div>
          <div className="md:text-right">
            <p className="text-xs uppercase tracking-[0.25em] text-muted-foreground mb-2">{t.contact.bookingLabel}</p>
            <p className="text-lg">{t.contact.booking}</p>
          </div>
        </div>

        <div className="mt-16 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <p>{t.contact.copyright(new Date().getFullYear())}</p>
          <p className="font-script normal-case tracking-normal text-base text-primary">{t.contact.pressPlay}</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
