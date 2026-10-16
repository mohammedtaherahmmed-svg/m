import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState, type FormEvent, type ReactNode } from "react";
import { interests, office, productBySlug } from "@/lib/catalog";
import { contactCopy } from "@/lib/copy";
import { t, useI18n, type Lang } from "@/lib/i18n";
import { useQuote } from "@/lib/quote";
import { btn, PageIntro, Shell } from "@/components/site/shell";

type ContactSearch = { product: string };

export const Route = createFileRoute("/contact")({
  validateSearch: (search: Record<string, unknown>): ContactSearch => ({
    product: typeof search.product === "string" ? search.product : "",
  }),
  component: ContactPage,
});

type Fields = {
  name: string;
  organization: string;
  email: string;
  phone: string;
  country: string;
  interest: string;
  message: string;
};

const empty: Fields = {
  name: "",
  organization: "",
  email: "",
  phone: "",
  country: "",
  interest: "general",
  message: "",
};

function ContactPage() {
  const lang = useI18n((state) => state.lang);
  const search = Route.useSearch();
  const slugs = useQuote((state) => state.slugs);
  const add = useQuote((state) => state.add);
  const remove = useQuote((state) => state.remove);
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Record<keyof Fields, string>>>({});
  const [summary, setSummary] = useState("");
  const [copied, setCopied] = useState(false);

  const hydrated = useQuote.persist.hasHydrated();
  const [ready, setReady] = useState(hydrated);

  useEffect(() => {
    const unsub = useQuote.persist.onFinishHydration(() => setReady(true));
    setReady(useQuote.persist.hasHydrated());
    return unsub;
  }, []);

  useEffect(() => {
    if (!ready) return;
    if (search.product && productBySlug(search.product)) add(search.product);
  }, [ready, search.product, add]);

  function update<K extends keyof Fields>(key: K, value: Fields[K]) {
    setFields((current) => ({ ...current, [key]: value }));
  }

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    const next = validate(fields, lang);
    setErrors(next);
    if (Object.keys(next).length > 0) {
      setSummary("");
      return;
    }
    const lines = slugs
      .map((slug) => productBySlug(slug))
      .filter((item) => item !== undefined)
      .map((item) => `- ${item.code} ${item.name[lang]}`);
    const ref = `MC-${Date.now().toString(36).toUpperCase().slice(-6)}`;
    const interest = interests.find((item) => item.id === fields.interest);
    const text = [
      `MonoChrome · For IVD Solutions`,
      `${lang === "ar" ? "مرجع" : "Reference"}: ${ref}`,
      `${t(lang, contactCopy.name)}: ${fields.name}`,
      `${t(lang, contactCopy.org)}: ${fields.organization}`,
      `${t(lang, contactCopy.email)}: ${fields.email}`,
      `${t(lang, contactCopy.phone)}: ${fields.phone || "—"}`,
      `${t(lang, contactCopy.country)}: ${fields.country}`,
      `${t(lang, contactCopy.interest)}: ${interest ? interest.label[lang] : fields.interest}`,
      `${t(lang, contactCopy.list)}:`,
      lines.length ? lines.join("\n") : "—",
      `${t(lang, contactCopy.message)}: ${fields.message}`,
    ].join("\n");
    setSummary(text);
    setCopied(false);
  }

  async function copySummary() {
    try {
      await navigator.clipboard.writeText(summary);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  }

  return (
    <Shell title={contactCopy.title}>
      <PageIntro kicker={t(lang, contactCopy.kicker)} title={t(lang, contactCopy.title)} lede={t(lang, contactCopy.lede)} />
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-5 md:py-20">
        <form className="flex flex-col gap-4 md:col-span-3" onSubmit={onSubmit} noValidate>
          <Field label={t(lang, contactCopy.name)} error={errors.name}>
            <input className={inputCls} value={fields.name} autoComplete="name" onChange={(event) => update("name", event.target.value)} />
          </Field>
          <Field label={t(lang, contactCopy.org)} error={errors.organization}>
            <input className={inputCls} value={fields.organization} autoComplete="organization" onChange={(event) => update("organization", event.target.value)} />
          </Field>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label={t(lang, contactCopy.email)} error={errors.email}>
              <input className={inputCls} type="email" autoComplete="email" value={fields.email} onChange={(event) => update("email", event.target.value)} />
            </Field>
            <Field label={`${t(lang, contactCopy.phone)} · ${t(lang, contactCopy.optional)}`}>
              <input className={inputCls} autoComplete="tel" value={fields.phone} onChange={(event) => update("phone", event.target.value)} />
            </Field>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label={t(lang, contactCopy.country)} error={errors.country}>
              <input className={inputCls} autoComplete="country-name" value={fields.country} onChange={(event) => update("country", event.target.value)} />
            </Field>
            <Field label={t(lang, contactCopy.interest)}>
              <select className={inputCls} value={fields.interest} onChange={(event) => update("interest", event.target.value)}>
                {interests.map((item) => (
                  <option key={item.id} value={item.id}>
                    {t(lang, item.label)}
                  </option>
                ))}
              </select>
            </Field>
          </div>
          <Field label={t(lang, contactCopy.message)} error={errors.message}>
            <textarea className={`${inputCls} min-h-32 py-3`} value={fields.message} onChange={(event) => update("message", event.target.value)} />
          </Field>
          <button type="submit" className={btn.signal}>
            {t(lang, contactCopy.submit)}
          </button>
          {summary ? (
            <div className="border border-line p-4">
              <p className="text-sm font-semibold">{t(lang, contactCopy.ready)}</p>
              <textarea readOnly className={`${inputCls} mt-3 min-h-48 py-3`} value={summary} />
              <div className="mt-3 flex flex-wrap gap-3">
                <a className={btn.signal} href={whatsappHref(summary)} target="_blank" rel="noreferrer">
                  {t(lang, contactCopy.whatsapp)}
                </a>
                <a className={btn.ink} href={mailHref(summary, lang)}>
                  {t(lang, contactCopy.mail)}
                </a>
                <button type="button" className={btn.ghost} onClick={copySummary}>
                  {copied ? t(lang, contactCopy.copied) : t(lang, contactCopy.copy)}
                </button>
                <button
                  type="button"
                  className={btn.ghost}
                  onClick={() => {
                    setSummary("");
                    setFields(empty);
                    setErrors({});
                  }}
                >
                  {t(lang, contactCopy.reset)}
                </button>
              </div>
            </div>
          ) : null}
        </form>
        <aside className="border border-line p-5 md:col-span-2">
          <img
            src="/media/logo-lockup.png"
            alt="MonoChrome For IVD Solutions"
            width={1060}
            height={680}
            className="mb-5 h-auto w-full"
          />
          <h2 className="text-lg font-semibold">{t(lang, contactCopy.reach)}</h2>
          <ul className="mt-3 flex flex-col gap-2 text-sm">
            <li>
              <a href={`tel:${office.phoneTel}`} className="hover:text-signal">
                {office.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`https://wa.me/${office.whatsapp}`} className="hover:text-signal" target="_blank" rel="noreferrer">
                WhatsApp
              </a>
            </li>
            <li>
              <a href={`mailto:${office.email}`} className="hover:text-signal">
                {office.email}
              </a>
            </li>
            <li className="text-muted">{t(lang, office.address)}</li>
          </ul>
          <h2 className="mt-8 text-lg font-semibold">{t(lang, contactCopy.list)}</h2>
          {slugs.length === 0 ? (
            <p className="mt-3 text-sm text-muted">
              {t(lang, contactCopy.emptyList)}{" "}
              <Link to="/products" search={{ family: "all", q: "" }} className="text-signal">
                {t(lang, { ar: "الكتالوج", en: "Catalog" })}
              </Link>
            </p>
          ) : (
            <ul className="mt-4 flex flex-col">
              {slugs.map((slug) => {
                const product = productBySlug(slug);
                if (!product) return null;
                return (
                  <li key={slug} className="flex items-start justify-between gap-3 border-b border-line py-3">
                    <span>
                      <span className="block text-xs tabular-nums text-signal">{product.code}</span>
                      <Link to="/products/$slug" params={{ slug }} className="font-medium hover:text-signal">
                        {t(lang, product.name)}
                      </Link>
                    </span>
                    <button type="button" className="min-h-11 text-sm text-muted hover:text-ink" onClick={() => remove(slug)}>
                      {t(lang, contactCopy.remove)}
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </aside>
      </div>
    </Shell>
  );
}

const inputCls = "min-h-11 w-full border border-line bg-paper px-3 text-ink";

function Field({ label, error, children }: { label: string; error?: string; children: ReactNode }) {
  return (
    <label className="flex flex-col gap-2 text-sm">
      <span>{label}</span>
      {children}
      {error ? <span className="text-signal">{error}</span> : null}
    </label>
  );
}

function whatsappHref(text: string) {
  return `https://wa.me/${office.whatsapp}?text=${encodeURIComponent(text)}`;
}

function mailHref(text: string, lang: Lang) {
  const subject = lang === "ar" ? "طلب تسعير · مونوكروم" : "Quotation request · MonoChrome";
  return `mailto:${office.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
}

function validate(fields: Fields, lang: Lang) {
  const errors: Partial<Record<keyof Fields, string>> = {};
  if (fields.name.trim().length < 2) errors.name = t(lang, contactCopy.errors.name);
  if (fields.organization.trim().length < 2) errors.organization = t(lang, contactCopy.errors.org);
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) errors.email = t(lang, contactCopy.errors.email);
  if (fields.country.trim().length < 2) errors.country = t(lang, contactCopy.errors.country);
  if (fields.message.trim().length < 8) errors.message = t(lang, contactCopy.errors.message);
  return errors;
}
