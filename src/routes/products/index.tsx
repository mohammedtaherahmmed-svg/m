import { createFileRoute, Link } from "@tanstack/react-router";
import { families, familyById, filterProducts, photoCaption, type FamilyId } from "@/lib/catalog";
import { chrome } from "@/lib/copy";
import { t, useI18n } from "@/lib/i18n";
import { PageIntro, Shell } from "@/components/site/shell";

type ProductSearch = { family: string; q: string };

const known = new Set<string>(["all", ...families.map((family) => family.id)]);

export const Route = createFileRoute("/products/")({
  validateSearch: (search: Record<string, unknown>): ProductSearch => {
    const family = typeof search.family === "string" && known.has(search.family) ? search.family : "all";
    const q = typeof search.q === "string" ? search.q : "";
    return { family, q };
  },
  component: ProductsPage,
});

function ProductsPage() {
  const lang = useI18n((state) => state.lang);
  const search = Route.useSearch();
  const navigate = Route.useNavigate();
  const list = filterProducts(search.family, search.q);

  return (
    <Shell title={chrome.products}>
      <PageIntro
        kicker={t(lang, chrome.products)}
        title={t(lang, { ar: "كتالوج الكواشف", en: "Reagent catalog" })}
        lede={t(lang, {
          ar: "أربعة خطوط: كواشف ISE، وكاشف HPLC للهيموغلوبين السكري، وكواشف العدّ التفريقي الخماسي، ومحاليل PCR.",
          en: "Four lines: ISE reagents, HPLC reagent for glycated hemoglobin, 5-diff reagents, and PCR solutions.",
        })}
      />
      <div className="mx-auto max-w-6xl px-5 py-8">
        <div className="flex flex-col gap-4 border border-line p-4">
          <label className="text-sm text-muted" htmlFor="catalog-search">
            {t(lang, chrome.search)}
          </label>
          <input
            id="catalog-search"
            value={search.q}
            onChange={(event) => navigate({ search: { family: search.family, q: event.target.value } })}
            className="min-h-11 border border-line bg-paper px-3 text-ink"
          />
          <div className="flex flex-wrap gap-2">
            <FilterChip
              active={search.family === "all"}
              label={t(lang, chrome.all)}
              onClick={() => navigate({ search: { family: "all", q: search.q } })}
            />
            {families.map((family) => (
              <FilterChip
                key={family.id}
                active={search.family === family.id}
                label={t(lang, family.name)}
                onClick={() => navigate({ search: { family: family.id, q: search.q } })}
              />
            ))}
          </div>
        </div>
        {list.length === 0 ? (
          <p className="mt-10 text-muted">
            {t(lang, chrome.empty)}{" "}
            <button type="button" className="text-signal" onClick={() => navigate({ search: { family: "all", q: "" } })}>
              {t(lang, chrome.clear)}
            </button>
          </p>
        ) : (
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {list.map((product) => {
              const family = familyById(product.family as FamilyId);
              return (
                <Link key={product.slug} to="/products/$slug" params={{ slug: product.slug }} className="border border-line">
                  <img src={product.image} alt="" className="aspect-video w-full object-cover" width={1600} height={1200} />
                  <span className="block p-5">
                    <span className="text-xs tabular-nums text-signal">
                      {product.code} · {t(lang, family.name)}
                    </span>
                    <span className="mt-2 block text-xl font-semibold">{t(lang, product.name)}</span>
                    <span className="mt-2 block text-sm text-muted">{t(lang, product.summary)}</span>
                  </span>
                </Link>
              );
            })}
          </div>
        )}
        <p className="mt-8 text-xs text-muted">{t(lang, photoCaption)}</p>
      </div>
    </Shell>
  );
}

function FilterChip({ active, label, onClick }: { active: boolean; label: string; onClick: () => void }) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`min-h-11 px-3 text-sm ${active ? "bg-ink text-paper" : "border border-line text-ink"}`}
    >
      {label}
    </button>
  );
}
