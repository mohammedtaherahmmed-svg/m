import { createFileRoute, Link } from "@tanstack/react-router";
import { productBySlug } from "@/lib/catalog";
import { solutionsCopy } from "@/lib/copy";
import { t, useI18n } from "@/lib/i18n";
import { PageIntro, Shell } from "@/components/site/shell";

export const Route = createFileRoute("/solutions")({ component: SolutionsPage });

function SolutionsPage() {
  const lang = useI18n((state) => state.lang);
  return (
    <Shell title={solutionsCopy.title}>
      <PageIntro
        kicker={t(lang, solutionsCopy.kicker)}
        title={t(lang, solutionsCopy.title)}
        lede={t(lang, solutionsCopy.lede)}
      />
      <div className="mx-auto flex max-w-6xl flex-col gap-16 px-5 py-14 md:py-20">
        {solutionsCopy.blocks.map((block, index) => (
          <section key={block.id} className="grid gap-6 border-t border-line pt-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <p className="text-sm tabular-nums text-signal">0{index + 1}</p>
              <h2 className="display mt-3 text-3xl font-semibold">{t(lang, block.title)}</h2>
              <p className="mt-4 text-muted">{t(lang, block.body)}</p>
            </div>
            <ul className="flex flex-col gap-3 md:col-span-7">
              {block.slugs.map((slug) => {
                const product = productBySlug(slug);
                if (!product) return null;
                return (
                  <li key={slug}>
                    <Link
                      to="/products/$slug"
                      params={{ slug }}
                      className="flex items-center justify-between gap-4 border border-line p-4 hover:border-ink"
                    >
                      <span>
                        <span className="block text-xs tabular-nums text-signal">{product.code}</span>
                        <span className="mt-1 block font-semibold">{t(lang, product.name)}</span>
                      </span>
                      <img src={product.image} alt="" className="size-16 object-cover" width={160} height={160} />
                    </Link>
                  </li>
                );
              })}
            </ul>
          </section>
        ))}
      </div>
    </Shell>
  );
}
