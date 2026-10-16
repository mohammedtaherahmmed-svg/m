import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useEffect, useState, type ReactNode } from "react";
import { brand, brandName, office } from "@/lib/catalog";
import { chrome, footerCopy } from "@/lib/copy";
import { t, useI18n, type Copy, type Lang } from "@/lib/i18n";
import { useQuote } from "@/lib/quote";

const links = [
  { to: "/", key: "home" },
  { to: "/about", key: "about" },
  { to: "/products", key: "products" },
  { to: "/solutions", key: "solutions" },
  { to: "/quality", key: "quality" },
  { to: "/contact", key: "contact" },
] as const;

function Mark({ className }: { className?: string }) {
  return (
    <img
      src="/media/logo-mark.png"
      alt=""
      width={872}
      height={360}
      className={className ?? "h-10 w-auto"}
    />
  );
}

export function Shell({ title, children }: { title: Copy; children: ReactNode }) {
  const lang = useI18n((state) => state.lang);
  const setLang = useI18n((state) => state.setLang);
  const count = useQuote((state) => state.slugs.length);
  const pathname = useRouterState({ select: (state) => state.location.pathname });
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
    document.title = `${title[lang]} · ${brandName(lang)}`;
  }, [lang, title]);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-paper text-ink">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-ink focus:px-4 focus:py-3 focus:text-paper"
      >
        {t(lang, chrome.skip)}
      </a>
      <header className="sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur">
        <div className="mx-auto flex min-h-16 max-w-6xl items-center gap-4 px-5">
          <Link to="/" className="flex min-w-0 items-center gap-2">
            <Mark className="h-9 w-auto sm:h-10" />
            <span className="leading-tight">
              <span className="block whitespace-nowrap text-xs font-semibold tracking-wide sm:text-sm">MONO CHROME</span>
              <span className="hidden text-xs text-muted sm:block">
                {lang === "ar" ? brand.lineAr : "FOR IVD SOLUTIONS"}
              </span>
            </span>
          </Link>
          <nav className="ms-auto hidden items-center gap-5 md:flex" aria-label="Primary">
            {links.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="text-sm text-muted transition-colors duration-200 hover:text-ink data-[status=active]:text-ink"
              >
                {t(lang, chrome[item.key])}
              </Link>
            ))}
          </nav>
          <div className="ms-auto flex items-center gap-2 md:ms-0">
            <LangSwitch lang={lang} setLang={setLang} />
            <Link
              to="/contact"
              search={{ product: "" }}
              className="inline-flex min-h-11 items-center gap-2 bg-ink px-3 text-sm text-paper transition-colors duration-200 hover:bg-signal"
            >
              <span className="hidden sm:inline">{t(lang, chrome.quote)}</span>
              <span className="sm:hidden">{lang === "ar" ? "طلب" : "Quote"}</span>
              <span className="tabular-nums text-paper/80">{count}</span>
            </Link>
            <button
              type="button"
              className="inline-flex size-11 items-center justify-center border border-line md:hidden"
              aria-expanded={open}
              aria-label={open ? t(lang, chrome.close) : t(lang, chrome.menu)}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X className="size-5" /> : <Menu className="size-5" />}
            </button>
          </div>
        </div>
        {open ? (
          <nav className="border-t border-line px-5 md:hidden" aria-label="Mobile">
            {links.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                className="flex min-h-11 items-center border-b border-line text-base data-[status=active]:text-signal"
              >
                {t(lang, chrome[item.key])}
              </Link>
            ))}
          </nav>
        ) : null}
      </header>
      <main id="main">{children}</main>
      <footer className="border-t border-line">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <img
              src="/media/logo-lockup.png"
              alt="MonoChrome For IVD Solutions"
              width={1060}
              height={680}
              className="h-auto w-full max-w-64"
            />
            <p className="mt-3 max-w-md text-sm text-muted">{t(lang, footerCopy.made)}</p>
          </div>
          <div className="flex flex-col gap-2 text-sm">
            {links.slice(0, 4).map((item) => (
              <Link key={item.to} to={item.to} className="text-muted hover:text-ink">
                {t(lang, chrome[item.key])}
              </Link>
            ))}
          </div>
          <div className="flex flex-col gap-2 text-sm">
            <a href={`tel:${office.phoneTel}`} className="text-muted hover:text-ink">
              {office.phoneDisplay}
            </a>
            <a
              href={`https://wa.me/${office.whatsapp}`}
              className="text-muted hover:text-ink"
              target="_blank"
              rel="noreferrer"
            >
              WhatsApp
            </a>
            <a href={`mailto:${office.email}`} className="text-muted hover:text-ink">
              {office.email}
            </a>
            <p className="text-muted">{t(lang, office.address)}</p>
          </div>
        </div>
        <p className="mx-auto max-w-6xl border-t border-line px-5 py-6 text-sm text-muted">
          {t(lang, footerCopy.disclaimer)}
        </p>
      </footer>
    </div>
  );
}

function LangSwitch({ lang, setLang }: { lang: Lang; setLang: (lang: Lang) => void }) {
  return (
    <div className="flex border border-line" role="group" aria-label={t(lang, chrome.lang)}>
      {(
        [
          ["ar", "ع"],
          ["en", "EN"],
        ] as const
      ).map(([code, label]) => (
        <button
          key={code}
          type="button"
          aria-pressed={lang === code}
          onClick={() => setLang(code)}
          className={`min-h-11 min-w-11 px-2 text-sm ${lang === code ? "bg-ink text-paper" : "text-muted hover:text-ink"}`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export function PageIntro({ kicker, title, lede }: { kicker: string; title: string; lede: string }) {
  return (
    <header className="border-b border-line">
      <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
        <p className="text-sm text-signal">{kicker}</p>
        <h1 className="display mt-3 max-w-3xl text-4xl font-semibold md:text-5xl">{title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-muted">{lede}</p>
      </div>
    </header>
  );
}

export const btn = {
  signal:
    "inline-flex min-h-11 items-center justify-center gap-2 bg-signal px-5 text-sm font-medium text-paper transition-colors duration-200 hover:bg-ink",
  ghost:
    "inline-flex min-h-11 items-center justify-center gap-2 border border-line bg-paper px-5 text-sm font-medium text-ink transition-colors duration-200 hover:border-ink",
  ink: "inline-flex min-h-11 items-center justify-center gap-2 bg-ink px-5 text-sm font-medium text-paper transition-colors duration-200 hover:bg-signal",
};

export function Plate() {
  const hot = new Set([5, 18, 19, 30, 31, 32, 44, 57, 70, 83]);
  return (
    <div className="grid grid-cols-12 gap-1" aria-hidden>
      {Array.from({ length: 96 }, (_, index) => (
        <span key={index} className={`size-2 rounded-full ${hot.has(index) ? "bg-signal" : "bg-line"}`} />
      ))}
    </div>
  );
}
