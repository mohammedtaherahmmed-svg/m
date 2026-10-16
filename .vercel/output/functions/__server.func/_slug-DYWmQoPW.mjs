import { c as productBySlug, i as familyById, s as photoCaption, u as relatedProducts } from "./_ssr/catalog-kRPY7ZIc.mjs";
import { S as require_jsx_runtime, b as Link } from "./_libs/@tanstack/react-router+[...].mjs";
import { n as Route } from "./_ssr/router-DgWeijbb.mjs";
import { a as btn, d as t, f as useI18n, o as chrome, p as useQuote, r as Shell } from "./_ssr/shell-r1SyDj0G.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/_slug-DYWmQoPW.js
var import_jsx_runtime = require_jsx_runtime();
function ProductPage() {
	const lang = useI18n((state) => state.lang);
	const { slug } = Route.useParams();
	const product = productBySlug(slug);
	const slugs = useQuote((state) => state.slugs);
	const toggle = useQuote((state) => state.toggle);
	if (!product) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, {
		title: chrome.missing,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "display text-4xl font-semibold",
				children: t(lang, chrome.missing)
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/products",
				search: {
					family: "all",
					q: ""
				},
				className: `${btn.ink} mt-8`,
				children: t(lang, chrome.back)
			})]
		})
	});
	const family = familyById(product.family);
	const inQuote = slugs.includes(product.slug);
	const related = relatedProducts(product.slug);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, {
		title: product.name,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
			className: "mx-auto max-w-6xl px-5 py-10 md:py-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-sm text-muted",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/products",
							search: {
								family: "all",
								q: ""
							},
							className: "hover:text-ink",
							children: t(lang, chrome.back)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "px-2",
							children: "/"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/products",
							search: {
								family: product.family,
								q: ""
							},
							className: "hover:text-ink",
							children: t(lang, family.name)
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 grid gap-8 md:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: product.image,
						alt: t(lang, product.name),
						className: "aspect-square w-full border border-line object-cover",
						width: 1600,
						height: 1200
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("figcaption", {
						className: "mt-2 text-xs text-muted",
						children: t(lang, photoCaption)
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm tabular-nums text-signal",
							children: [
								product.code,
								" · ",
								family.code
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "display mt-3 text-4xl font-semibold",
							children: t(lang, product.name)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-lg text-muted",
							children: t(lang, product.summary)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: inQuote ? btn.ghost : btn.signal,
								onClick: () => toggle(product.slug),
								children: inQuote ? t(lang, chrome.added) : t(lang, chrome.add)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								search: { product: product.slug },
								className: btn.ink,
								children: t(lang, chrome.quote)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-10 text-sm text-signal",
							children: t(lang, chrome.intended)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-muted",
							children: t(lang, product.intended)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "mt-8 text-sm text-signal",
							children: t(lang, chrome.formats)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "mt-2 flex flex-col gap-2 text-sm",
							children: product.formats.map((format) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
								className: "border-b border-line py-2",
								children: t(lang, format)
							}, format.en))
						})
					] })]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-12 text-2xl font-semibold",
					children: t(lang, chrome.specs)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
					className: "mt-4 border-t border-line",
					children: product.specs.map((spec) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid gap-1 border-b border-line py-4 sm:grid-cols-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-sm text-muted",
							children: t(lang, spec.label)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
							className: "sm:col-span-2",
							children: t(lang, spec.value)
						})]
					}, spec.label.en))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-8 grid gap-4 md:grid-cols-3",
					children: product.points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "border border-line p-4 text-sm",
						children: t(lang, point)
					}, point.en))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-14 text-2xl font-semibold",
					children: t(lang, chrome.related)
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-4 grid gap-4 md:grid-cols-3",
					children: related.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/products/$slug",
						params: { slug: item.slug },
						className: "border border-line p-4 hover:border-ink",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-xs tabular-nums text-signal",
							children: item.code
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-2 block font-semibold",
							children: t(lang, item.name)
						})]
					}, item.slug))
				})
			]
		})
	});
}
//#endregion
export { ProductPage as component };
