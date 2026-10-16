import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as btn, d as t, f as useI18n, l as qualityCopy, r as Shell, t as PageIntro } from "./shell-r1SyDj0G.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/quality-ffZIfSKO.js
var import_jsx_runtime = require_jsx_runtime();
function QualityPage() {
	const lang = useI18n((state) => state.lang);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, {
		title: qualityCopy.title,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
				kicker: t(lang, qualityCopy.kicker),
				title: t(lang, qualityCopy.title),
				lede: t(lang, qualityCopy.lede)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-b border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto grid max-w-6xl gap-px bg-line px-5 py-14 sm:grid-cols-2 md:py-20",
					children: qualityCopy.pillars.map((pillar, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
						className: "bg-paper p-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "text-sm tabular-nums text-signal",
								children: ["0", index + 1]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "mt-4 text-xl font-semibold",
								children: t(lang, pillar.title)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-muted",
								children: t(lang, pillar.body)
							})
						]
					}, pillar.title.en))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-2 md:py-20",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "display text-3xl font-semibold",
					children: t(lang, qualityCopy.docsTitle)
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
					className: "mt-6 flex flex-col",
					children: qualityCopy.docs.map((doc, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
						className: "flex gap-4 border-b border-line py-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "tabular-nums text-signal",
							children: ["0", index + 1]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t(lang, doc) })]
					}, doc.en))
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border border-line p-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: "/media/controls.jpg",
							alt: lang === "ar" ? "عبوات ضبط تمثيلية" : "Representative control vials",
							className: "aspect-video w-full object-cover",
							width: 1600,
							height: 1200
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted",
							children: t(lang, qualityCopy.note)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							search: { product: "" },
							className: `${btn.signal} mt-6`,
							children: t(lang, {
								ar: "اطلب الملف مع التسعير",
								en: "Request the file with a quote"
							})
						})
					]
				})]
			}) })
		]
	});
}
//#endregion
export { QualityPage as component };
