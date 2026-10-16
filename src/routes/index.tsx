import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { families, products } from "@/lib/catalog";
import { chrome, homeCopy } from "@/lib/copy";
import { t, useI18n } from "@/lib/i18n";
import { btn, Plate, Shell } from "@/components/site/shell";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  const lang = useI18n((state) => state.lang);
  const featured = ["ise-reagent", "hplc-g-hemoglobin", "five-diff-reagent", "pcr-solutions"]
    .map((slug) => products.find((item) => item.slug === slug))
    .filter((item) => item !== undefined);

  return (
    <Shell title={homeCopy.title}>
      <section className="border-b border-line">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-12 md:py-20">
          <div className="md:col-span-7">
            <p className={`text-sm text-signal ${lang === "en" ? "uppercase tracking-widest" : ""}`}>
              {t(lang, homeCopy.kicker)}
            </p>
            <h1 className="display mt-4 text-4xl font-semibold leading-tight md:text-6xl">{t(lang, homeCopy.title)}</h1>
            <p className="mt-6 max-w-xl text-lg text-muted">{t(lang, homeCopy.lede)}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link to="/products" search={{ family: "all", q: "" }} className={btn.signal}>
                {t(lang, chrome.catalog)}
                <ArrowRight className="size-4 rtl:rotate-180" />
              </Link>
              <Link to="/contact" search={{ product: "" }} className={btn.ghost}>
                {t(lang, chrome.quote)}
              </Link>
            </div>
          </div>
          <div className="md:col-span-5">
            <figure className="border border-ink bg-paper">
            <div className="h-1 bg-signal" />
              <img
                src="/media/brand-scene.jpg"
                alt={lang === "ar" ? "شعار مونوكروم لحلول التشخيص المختبري" : "MonoChrome For IVD Solutions logo"}
                className="aspect-video w-full object-cover"
                width={2048}
                height={1116}
              />
              <figcaption className="grid gap-4 border-t border-line p-4 sm:grid-cols-[1fr_auto] sm:items-end">
                <div>
                  <p className="text-xs text-signal">{t(lang, homeCopy.sample)}</p>
                  <dl className="mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
                    {homeCopy.rows.map((row) => (
                      <div key={row.label.en}>
                        <dt className="text-muted">{t(lang, row.label)}</dt>
                        <dd className="font-medium">{t(lang, row.value)}</dd>
                      </div>
                    ))}
                  </dl>
                  <p className="mt-3 text-xs text-muted">{t(lang, homeCopy.sampleNote)}</p>
                </div>
                <Plate />
              </figcaption>
            </figure>
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <h2 className="display text-3xl font-semibold">{t(lang, homeCopy.families)}</h2>
          <p className="mt-3 max-w-2xl text-muted">{t(lang, homeCopy.familiesLede)}</p>
          <div className="mt-8 grid gap-px bg-line sm:grid-cols-2">
            {families.map((family) => (
              <Link
                key={family.id}
                to="/products"
                search={{ family: family.id, q: "" }}
                className="flex min-h-44 flex-col justify-between bg-paper p-5 transition-colors duration-200 hover:bg-line/40"
              >
                <span className="text-xs tabular-nums text-signal">{family.code}</span>
                <span>
                  <span className="block text-xl font-semibold">{t(lang, family.name)}</span>
                  <span className="mt-2 block text-sm text-muted">{t(lang, family.blurb)}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <div className="flex items-end justify-between gap-4">
            <h2 className="display text-3xl font-semibold">{t(lang, homeCopy.featured)}</h2>
            <Link to="/products" search={{ family: "all", q: "" }} className="text-sm text-signal">
              {t(lang, chrome.catalog)}
            </Link>
          </div>
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {featured.map((product) => (
              <Link
                key={product.slug}
                to="/products/$slug"
                params={{ slug: product.slug }}
                className="group border border-line"
              >
                <img
                  src={product.image}
                  alt=""
                  className="aspect-video w-full object-cover"
                  width={1600}
                  height={1200}
                />
                <span className="block p-5">
                  <span className="text-xs tabular-nums text-signal">{product.code}</span>
                  <span className="mt-2 block text-xl font-semibold group-hover:text-signal">{t(lang, product.name)}</span>
                  <span className="mt-2 block text-sm text-muted">{t(lang, product.summary)}</span>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="mx-auto max-w-6xl px-5 py-14 md:py-20">
          <h2 className="display max-w-xl text-3xl font-semibold">{t(lang, homeCopy.processTitle)}</h2>
          <ol className="mt-8 grid gap-px bg-line md:grid-cols-4">
            {homeCopy.steps.map((step) => (
              <li key={step.n} className="bg-paper p-5">
                <span className="text-sm tabular-nums text-signal">{step.n}</span>
                <h3 className="mt-4 text-lg font-semibold">{t(lang, step.title)}</h3>
                <p className="mt-2 text-sm text-muted">{t(lang, step.body)}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="bg-ink text-paper">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-2 md:items-end">
          <div>
            <h2 className="display text-3xl font-semibold md:text-4xl">{t(lang, homeCopy.qualityTitle)}</h2>
            <p className="mt-4 text-paper/80">{t(lang, homeCopy.qualityLede)}</p>
          </div>
          <div className="flex flex-wrap gap-3 md:justify-end">
            <Link to="/quality" className={btn.signal}>
              {t(lang, homeCopy.qualityCta)}
            </Link>
            <Link to="/contact" search={{ product: "" }} className="inline-flex min-h-11 items-center border border-paper/30 px-5 text-sm text-paper hover:border-paper">
              {t(lang, homeCopy.ctaButton)}
            </Link>
          </div>
        </div>
      </section>
    </Shell>
  );
}
