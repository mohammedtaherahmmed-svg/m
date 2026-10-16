import { createFileRoute, Link } from "@tanstack/react-router";
import { familyById, photoCaption, productBySlug, relatedProducts } from "@/lib/catalog";
import { chrome } from "@/lib/copy";
import { t, useI18n } from "@/lib/i18n";
import { useQuote } from "@/lib/quote";
import { btn, Shell } from "@/components/site/shell";

export const Route = createFileRoute("/products/$slug")({
  component: ProductPage,
});

function ProductPage() {
  const lang = useI18n((state) => state.lang);
  const { slug } = Route.useParams();
  const product = productBySlug(slug);
  const slugs = useQuote((state) => state.slugs);
  const toggle = useQuote((state) => state.toggle);

  if (!product) {
    return (
      <Shell title={chrome.missing}>
        <div className="mx-auto max-w-6xl px-5 py-20">
          <h1 className="display text-4xl font-semibold">{t(lang, chrome.missing)}</h1>
          <Link to="/products" search={{ family: "all", q: "" }} className={`${btn.ink} mt-8`}>
            {t(lang, chrome.back)}
          </Link>
        </div>
      </Shell>
    );
  }

  const family = familyById(product.family);
  const inQuote = slugs.includes(product.slug);
  const related = relatedProducts(product.slug);

  return (
    <Shell title={product.name}>
      <article className="mx-auto max-w-6xl px-5 py-10 md:py-16">
        <p className="text-sm text-muted">
          <Link to="/products" search={{ family: "all", q: "" }} className="hover:text-ink">
            {t(lang, chrome.back)}
          </Link>
          <span className="px-2">/</span>
          <Link to="/products" search={{ family: product.family, q: "" }} className="hover:text-ink">
            {t(lang, family.name)}
          </Link>
        </p>
        <div className="mt-6 grid gap-8 md:grid-cols-2">
          <figure>
            <img
              src={product.image}
              alt={t(lang, product.name)}
              className="aspect-square w-full border border-line object-cover"
              width={1600}
              height={1200}
            />
            <figcaption className="mt-2 text-xs text-muted">{t(lang, photoCaption)}</figcaption>
          </figure>
          <div>
            <p className="text-sm tabular-nums text-signal">
              {product.code} · {family.code}
            </p>
            <h1 className="display mt-3 text-4xl font-semibold">{t(lang, product.name)}</h1>
            <p className="mt-4 text-lg text-muted">{t(lang, product.summary)}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <button type="button" className={inQuote ? btn.ghost : btn.signal} onClick={() => toggle(product.slug)}>
                {inQuote ? t(lang, chrome.added) : t(lang, chrome.add)}
              </button>
              <Link to="/contact" search={{ product: product.slug }} className={btn.ink}>
                {t(lang, chrome.quote)}
              </Link>
            </div>
            <h2 className="mt-10 text-sm text-signal">{t(lang, chrome.intended)}</h2>
            <p className="mt-2 text-muted">{t(lang, product.intended)}</p>
            <h2 className="mt-8 text-sm text-signal">{t(lang, chrome.formats)}</h2>
            <ul className="mt-2 flex flex-col gap-2 text-sm">
              {product.formats.map((format) => (
                <li key={format.en} className="border-b border-line py-2">
                  {t(lang, format)}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <h2 className="mt-12 text-2xl font-semibold">{t(lang, chrome.specs)}</h2>
        <dl className="mt-4 border-t border-line">
          {product.specs.map((spec) => (
            <div key={spec.label.en} className="grid gap-1 border-b border-line py-4 sm:grid-cols-3">
              <dt className="text-sm text-muted">{t(lang, spec.label)}</dt>
              <dd className="sm:col-span-2">{t(lang, spec.value)}</dd>
            </div>
          ))}
        </dl>
        <ul className="mt-8 grid gap-4 md:grid-cols-3">
          {product.points.map((point) => (
            <li key={point.en} className="border border-line p-4 text-sm">
              {t(lang, point)}
            </li>
          ))}
        </ul>
        <h2 className="mt-14 text-2xl font-semibold">{t(lang, chrome.related)}</h2>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {related.map((item) => (
            <Link key={item.slug} to="/products/$slug" params={{ slug: item.slug }} className="border border-line p-4 hover:border-ink">
              <span className="text-xs tabular-nums text-signal">{item.code}</span>
              <span className="mt-2 block font-semibold">{t(lang, item.name)}</span>
            </Link>
          ))}
        </div>
      </article>
    </Shell>
  );
}
