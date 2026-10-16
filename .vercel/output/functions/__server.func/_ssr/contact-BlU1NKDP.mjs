import { i as __toESM } from "../_runtime.mjs";
import { c as productBySlug, o as interests } from "./catalog-kRPY7ZIc.mjs";
import { J as require_react, S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as Route$5 } from "./router-DgWeijbb.mjs";
import { a as btn, d as t, f as useI18n, p as useQuote, r as Shell, s as contactCopy, t as PageIntro } from "./shell-r1SyDj0G.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-BlU1NKDP.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var empty = {
	name: "",
	organization: "",
	email: "",
	phone: "",
	country: "",
	interest: "general",
	message: ""
};
function ContactPage() {
	const lang = useI18n((state) => state.lang);
	const search = Route$5.useSearch();
	const slugs = useQuote((state) => state.slugs);
	const add = useQuote((state) => state.add);
	const remove = useQuote((state) => state.remove);
	const [fields, setFields] = (0, import_react.useState)(empty);
	const [errors, setErrors] = (0, import_react.useState)({});
	const [summary, setSummary] = (0, import_react.useState)("");
	const [copied, setCopied] = (0, import_react.useState)(false);
	const hydrated = useQuote.persist.hasHydrated();
	const [ready, setReady] = (0, import_react.useState)(hydrated);
	(0, import_react.useEffect)(() => {
		const unsub = useQuote.persist.onFinishHydration(() => setReady(true));
		setReady(useQuote.persist.hasHydrated());
		return unsub;
	}, []);
	(0, import_react.useEffect)(() => {
		if (!ready) return;
		if (search.product && productBySlug(search.product)) add(search.product);
	}, [
		ready,
		search.product,
		add
	]);
	function update(key, value) {
		setFields((current) => ({
			...current,
			[key]: value
		}));
	}
	function onSubmit(event) {
		event.preventDefault();
		const next = validate(fields, lang);
		setErrors(next);
		if (Object.keys(next).length > 0) {
			setSummary("");
			return;
		}
		const lines = slugs.map((slug) => productBySlug(slug)).filter((item) => item !== void 0).map((item) => `- ${item.code} ${item.name[lang]}`);
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
			`${t(lang, contactCopy.message)}: ${fields.message}`
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, {
		title: contactCopy.title,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			kicker: t(lang, contactCopy.kicker),
			title: t(lang, contactCopy.title),
			lede: t(lang, contactCopy.lede)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-5 md:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				className: "flex flex-col gap-4 md:col-span-3",
				onSubmit,
				noValidate: true,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: t(lang, contactCopy.name),
						error: errors.name,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: inputCls,
							value: fields.name,
							autoComplete: "name",
							onChange: (event) => update("name", event.target.value)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: t(lang, contactCopy.org),
						error: errors.organization,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							className: inputCls,
							value: fields.organization,
							autoComplete: "organization",
							onChange: (event) => update("organization", event.target.value)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t(lang, contactCopy.email),
							error: errors.email,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: inputCls,
								type: "email",
								autoComplete: "email",
								value: fields.email,
								onChange: (event) => update("email", event.target.value)
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: `${t(lang, contactCopy.phone)} · ${t(lang, contactCopy.optional)}`,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: inputCls,
								autoComplete: "tel",
								value: fields.phone,
								onChange: (event) => update("phone", event.target.value)
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-4 sm:grid-cols-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t(lang, contactCopy.country),
							error: errors.country,
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								className: inputCls,
								autoComplete: "country-name",
								value: fields.country,
								onChange: (event) => update("country", event.target.value)
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: t(lang, contactCopy.interest),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
								className: inputCls,
								value: fields.interest,
								onChange: (event) => update("interest", event.target.value),
								children: interests.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
									value: item.id,
									children: t(lang, item.label)
								}, item.id))
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: t(lang, contactCopy.message),
						error: errors.message,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							className: `${inputCls} min-h-32 py-3`,
							value: fields.message,
							onChange: (event) => update("message", event.target.value)
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "submit",
						className: btn.signal,
						children: t(lang, contactCopy.submit)
					}),
					summary ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "border border-line p-4",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm font-semibold",
								children: t(lang, contactCopy.ready)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
								readOnly: true,
								className: `${inputCls} mt-3 min-h-48 py-3`,
								value: summary
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-3 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: btn.ink,
									onClick: copySummary,
									children: copied ? t(lang, contactCopy.copied) : t(lang, contactCopy.copy)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: btn.ghost,
									onClick: () => {
										setSummary("");
										setFields(empty);
										setErrors({});
									},
									children: t(lang, contactCopy.reset)
								})]
							})
						]
					}) : null
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "border border-line p-5 md:col-span-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/media/logo-lockup.png",
						alt: "MonoChrome For IVD Solutions",
						width: 1060,
						height: 680,
						className: "mb-5 h-auto w-full"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-lg font-semibold",
						children: t(lang, contactCopy.list)
					}),
					slugs.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-3 text-sm text-muted",
						children: [
							t(lang, contactCopy.emptyList),
							" ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/products",
								search: {
									family: "all",
									q: ""
								},
								className: "text-signal",
								children: t(lang, {
									ar: "الكتالوج",
									en: "Catalog"
								})
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 flex flex-col",
						children: slugs.map((slug) => {
							const product = productBySlug(slug);
							if (!product) return null;
							return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "flex items-start justify-between gap-3 border-b border-line py-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-xs tabular-nums text-signal",
									children: product.code
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/products/$slug",
									params: { slug },
									className: "font-medium hover:text-signal",
									children: t(lang, product.name)
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "min-h-11 text-sm text-muted hover:text-ink",
									onClick: () => remove(slug),
									children: t(lang, contactCopy.remove)
								})]
							}, slug);
						})
					})
				]
			})]
		})]
	});
}
var inputCls = "min-h-11 w-full border border-line bg-paper px-3 text-ink";
function Field({ label, error, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "flex flex-col gap-2 text-sm",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }),
			children,
			error ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-signal",
				children: error
			}) : null
		]
	});
}
function validate(fields, lang) {
	const errors = {};
	if (fields.name.trim().length < 2) errors.name = t(lang, contactCopy.errors.name);
	if (fields.organization.trim().length < 2) errors.organization = t(lang, contactCopy.errors.org);
	if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) errors.email = t(lang, contactCopy.errors.email);
	if (fields.country.trim().length < 2) errors.country = t(lang, contactCopy.errors.country);
	if (fields.message.trim().length < 8) errors.message = t(lang, contactCopy.errors.message);
	return errors;
}
//#endregion
export { ContactPage as component };
