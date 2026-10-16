import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as btn, c as homeCopy, d as t, f as useI18n, i as aboutCopy, r as Shell, t as PageIntro } from "./shell-r1SyDj0G.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-kd2yiIZY.js
var import_jsx_runtime = require_jsx_runtime();
function AboutPage() {
	const lang = useI18n((state) => state.lang);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, {
		title: aboutCopy.title,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
				kicker: t(lang, aboutCopy.kicker),
				title: t(lang, aboutCopy.title),
				lede: t(lang, aboutCopy.lede)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-b border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-2 md:py-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: "/media/brand-scene.jpg",
						alt: lang === "ar" ? "شعار مونوكروم داخل مختبر التشخيص" : "MonoChrome logo in a diagnostic laboratory",
						className: "aspect-video w-full border border-line object-cover",
						width: 2048,
						height: 1116
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-8",
						children: [aboutCopy.points.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-xl font-semibold",
							children: t(lang, point.title)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-muted",
							children: t(lang, point.body)
						})] }, point.title.en)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/products",
							search: {
								family: "all",
								q: ""
							},
							className: btn.ink,
							children: t(lang, {
								ar: "إلى الكتالوج",
								en: "To the catalog"
							})
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto max-w-6xl px-5 py-14 md:py-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display text-3xl font-semibold",
						children: t(lang, aboutCopy.serveTitle)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-px bg-line sm:grid-cols-2",
						children: aboutCopy.serve.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "bg-paper p-5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-lg font-semibold",
								children: t(lang, item.title)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 text-sm text-muted",
								children: t(lang, item.body)
							})]
						}, item.title.en))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-10 max-w-2xl text-muted",
						children: t(lang, homeCopy.ctaLede)
					})
				]
			}) })
		]
	});
}
//#endregion
export { AboutPage as component };
