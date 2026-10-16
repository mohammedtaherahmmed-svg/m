import { c as productBySlug } from "./catalog-kRPY7ZIc.mjs";
import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { d as t, f as useI18n, r as Shell, t as PageIntro, u as solutionsCopy } from "./shell-r1SyDj0G.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/solutions-CsmQwnl5.js
var import_jsx_runtime = require_jsx_runtime();
function SolutionsPage() {
	const lang = useI18n((state) => state.lang);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, {
		title: solutionsCopy.title,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageIntro, {
			kicker: t(lang, solutionsCopy.kicker),
			title: t(lang, solutionsCopy.title),
			lede: t(lang, solutionsCopy.lede)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mx-auto flex max-w-6xl flex-col gap-16 px-5 py-14 md:py-20",
			children: solutionsCopy.blocks.map((block, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "grid gap-6 border-t border-line pt-10 md:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "md:col-span-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm tabular-nums text-signal",
							children: ["0", index + 1]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "display mt-3 text-3xl font-semibold",
							children: t(lang, block.title)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 text-muted",
							children: t(lang, block.body)
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "flex flex-col gap-3 md:col-span-7",
					children: block.slugs.map((slug) => {
						const product = productBySlug(slug);
						if (!product) return null;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/products/$slug",
							params: { slug },
							className: "flex items-center justify-between gap-4 border border-line p-4 hover:border-ink",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-xs tabular-nums text-signal",
								children: product.code
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "mt-1 block font-semibold",
								children: t(lang, product.name)
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: product.image,
								alt: "",
								className: "size-16 object-cover",
								width: 160,
								height: 160
							})]
						}) }, slug);
					})
				})]
			}, block.id))
		})]
	});
}
//#endregion
export { SolutionsPage as component };
