import { createFileRoute, Link } from "@tanstack/react-router";
import { qualityCopy } from "@/lib/copy";
import { t, useI18n } from "@/lib/i18n";
import { btn, PageIntro, Shell } from "@/components/site/shell";

export const Route = createFileRoute("/quality")({ component: QualityPage });

function QualityPage() {
  const lang = useI18n((state) => state.lang);
  return (
    <Shell title={qualityCopy.title}>
      <PageIntro kicker={t(lang, qualityCopy.kicker)} title={t(lang, qualityCopy.title)} lede={t(lang, qualityCopy.lede)} />
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-px bg-line px-5 py-14 sm:grid-cols-2 md:py-20">
          {qualityCopy.pillars.map((pillar, index) => (
            <article key={pillar.title.en} className="bg-paper p-6">
              <p className="text-sm tabular-nums text-signal">0{index + 1}</p>
              <h2 className="mt-4 text-xl font-semibold">{t(lang, pillar.title)}</h2>
              <p className="mt-2 text-muted">{t(lang, pillar.body)}</p>
            </article>
          ))}
        </div>
      </section>
      <section>
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-2 md:py-20">
          <div>
            <h2 className="display text-3xl font-semibold">{t(lang, qualityCopy.docsTitle)}</h2>
            <ol className="mt-6 flex flex-col">
              {qualityCopy.docs.map((doc, index) => (
                <li key={doc.en} className="flex gap-4 border-b border-line py-4">
                  <span className="tabular-nums text-signal">0{index + 1}</span>
                  <span>{t(lang, doc)}</span>
                </li>
              ))}
            </ol>
          </div>
          <div className="border border-line p-6">
            <img
              src="/media/controls.jpg"
              alt={lang === "ar" ? "عبوات ضبط تمثيلية" : "Representative control vials"}
              className="aspect-video w-full object-cover"
              width={1600}
              height={1200}
            />
            <p className="mt-4 text-muted">{t(lang, qualityCopy.note)}</p>
            <Link to="/contact" search={{ product: "" }} className={`${btn.signal} mt-6`}>
              {t(lang, { ar: "اطلب الملف مع التسعير", en: "Request the file with a quote" })}
            </Link>
          </div>
        </div>
      </section>
    </Shell>
  );
}
