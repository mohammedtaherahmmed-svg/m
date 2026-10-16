import { createFileRoute, Link } from "@tanstack/react-router";
import { aboutCopy, homeCopy } from "@/lib/copy";
import { t, useI18n } from "@/lib/i18n";
import { btn, PageIntro, Shell } from "@/components/site/shell";

export const Route = createFileRoute("/about")({ component: AboutPage });

function AboutPage() {
  const lang = useI18n((state) => state.lang);
  return (
    <Shell title={aboutCopy.title}>
      <PageIntro kicker={t(lang, aboutCopy.kicker)} title={t(lang, aboutCopy.title)} lede={t(lang, aboutCopy.lede)} />
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-2 md:py-20">
          <img
            src="/media/brand-scene.jpg"
            alt={lang === "ar" ? "شعار مونوكروم داخل مختبر التشخيص" : "MonoChrome logo in a diagnostic laboratory"}
            className="aspect-video w-full border border-line object-cover"
            width={2048}
            height={1116}
          />
          <div className="flex flex-col gap-8">
            {aboutCopy.points.map((point) => (
              <article key={point.title.en}>
                <h2 className="text-xl font-semibold">{t(lang, point.title)}</h2>
                <p className="mt-2 text-muted">{t(lang, point.body)}</p>
              </article>
            ))}
            <Link to="/products" search={{ family: "all", q: "" }} className={btn.ink}>
              {t(lang, { ar: "إلى الكتالوج", en: "To the catalog" })}
            </Link>
          </div>
        </div>
      </section>
      <section>
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <h2 className="display text-3xl font-semibold">{t(lang, aboutCopy.serveTitle)}</h2>
          <div className="mt-8 grid gap-px bg-line sm:grid-cols-2">
            {aboutCopy.serve.map((item) => (
              <article key={item.title.en} className="bg-paper p-5">
                <h3 className="text-lg font-semibold">{t(lang, item.title)}</h3>
                <p className="mt-2 text-sm text-muted">{t(lang, item.body)}</p>
              </article>
            ))}
          </div>
          <p className="mt-10 max-w-2xl text-muted">{t(lang, homeCopy.ctaLede)}</p>
        </div>
      </section>
    </Shell>
  );
}
