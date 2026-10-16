import { a as filterProducts, i as familyById, r as families, s as photoCaption } from "./catalog-kRPY7ZIc.mjs";
import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Route$1 } from "./router-DgWeijbb.mjs";
import { d as t, f as useI18n, o as chrome, r as Shell, t as PageIntro } from "./shell-r1SyDj0G.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/products-CdpZ19kT.js
var import_jsx_runtime = require_jsx_runtime();
function ProductsPage() {
	const lang = useI18n((state) => state.lang);
	const search = Route$1.useSearch();
	const navigate = Route$1.useNavigate();
	const list = filterProducts(search.family, search.q);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, {
		title: chrome.products,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			kicker: t(lang, chrome.products),
			title: t(lang, {
				ar: "كتالوج الكواشف والأجهزة",
				en: "Reagent and instrument catalog"
			}),
			lede: t(lang, {
				ar: "ثمانية أصناف تغطي الكيمياء والمناعة وأمراض الدم والاختبار السريع والأجهزة والضوابط وتوريد المصنّعين.",
				en: "Eight items covering chemistry, immunoassay, hematology, rapid tests, instruments, controls, and OEM supply."
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-4 border border-line p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
							className: "text-sm text-muted",
							htmlFor: "catalog-search",
							children: t(lang, chrome.search)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							id: "catalog-search",
							value: search.q,
							onChange: (event) => navigate({ search: {
								family: search.family,
								q: event.target.value
							} }),
							className: "min-h-11 border border-line bg-paper px-3 text-ink"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
								active: search.family === "all",
								label: t(lang, chrome.all),
								onClick: () => navigate({ search: {
									family: "all",
									q: search.q
								} })
							}), families.map((family) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FilterChip, {
								active: search.family === family.id,
								label: t(lang, family.name),
								onClick: () => navigate({ search: {
									family: family.id,
									q: search.q
								} })
							}, family.id))]
						})
					]
				}),
				list.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-10 text-muted",
					children: [
						t(lang, chrome.empty),
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "text-signal",
							onClick: () => navigate({ search: {
								family: "all",
								q: ""
							} }),
							children: t(lang, chrome.clear)
						})
					]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid gap-6 sm:grid-cols-2",
					children: list.map((product) => {
						const family = familyById(product.family);
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/products/$slug",
							params: { slug: product.slug },
							className: "border border-line",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: product.image,
								alt: "",
								className: "aspect-video w-full object-cover",
								width: 1600,
								height: 1200
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "block p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-xs tabular-nums text-signal",
										children: [
											product.code,
											" · ",
											t(lang, family.name)
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-2 block text-xl font-semibold",
										children: t(lang, product.name)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-2 block text-sm text-muted",
										children: t(lang, product.summary)
									})
								]
							})]
						}, product.slug);
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-8 text-xs text-muted",
					children: t(lang, photoCaption)
				})
			]
		})]
	});
}
function FilterChip({ active, label, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		"aria-pressed": active,
		onClick,
		className: `min-h-11 px-3 text-sm ${active ? "bg-ink text-paper" : "border border-line text-ink"}`,
		children: label
	});
}
//#endregion
export { ProductsPage as component };
