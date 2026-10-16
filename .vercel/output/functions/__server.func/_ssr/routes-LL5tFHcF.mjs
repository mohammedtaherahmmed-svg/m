import { l as products, r as families } from "./catalog-kRPY7ZIc.mjs";
import { S as require_jsx_runtime, b as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as ArrowRight } from "../_libs/lucide-react.mjs";
import { a as btn, c as homeCopy, d as t, f as useI18n, n as Plate, o as chrome, r as Shell } from "./shell-r1SyDj0G.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-LL5tFHcF.js
var import_jsx_runtime = require_jsx_runtime();
function Home() {
	const lang = useI18n((state) => state.lang);
	const featured = [
		"chemistry-line",
		"chemistry-analyzer",
		"rapid-cassettes",
		"controls-calibrators"
	].map((slug) => products.find((item) => item.slug === slug)).filter((item) => item !== void 0);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Shell, {
		title: homeCopy.title,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-b border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-12 md:py-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "md:col-span-7",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: `text-sm text-signal ${lang === "en" ? "uppercase tracking-widest" : ""}`,
								children: t(lang, homeCopy.kicker)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: "display mt-4 text-4xl font-semibold leading-tight md:text-6xl",
								children: t(lang, homeCopy.title)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-6 max-w-xl text-lg text-muted",
								children: t(lang, homeCopy.lede)
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-8 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/products",
									search: {
										family: "all",
										q: ""
									},
									className: btn.signal,
									children: [t(lang, chrome.catalog), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 rtl:rotate-180" })]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
									to: "/contact",
									search: { product: "" },
									className: btn.ghost,
									children: t(lang, chrome.quote)
								})]
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "md:col-span-5",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figure", {
							className: "border border-ink bg-paper",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-1 bg-signal" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: "/media/brand-scene.jpg",
									alt: lang === "ar" ? "شعار مونوكروم لحلول التشخيص المختبري" : "MonoChrome For IVD Solutions logo",
									className: "aspect-video w-full object-cover",
									width: 2048,
									height: 1116
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("figcaption", {
									className: "grid gap-4 border-t border-line p-4 sm:grid-cols-[1fr_auto] sm:items-end",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs text-signal",
											children: t(lang, homeCopy.sample)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
											className: "mt-3 grid grid-cols-2 gap-x-4 gap-y-2 text-sm",
											children: homeCopy.rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
												className: "text-muted",
												children: t(lang, row.label)
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
												className: "font-medium",
												children: t(lang, row.value)
											})] }, row.label.en))
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 text-xs text-muted",
											children: t(lang, homeCopy.sampleNote)
										})
									] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plate, {})]
								})
							]
						})
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-b border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-5 py-14 md:py-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "display text-3xl font-semibold",
							children: t(lang, homeCopy.families)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-2xl text-muted",
							children: t(lang, homeCopy.familiesLede)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 grid gap-px bg-line sm:grid-cols-2 lg:grid-cols-3",
							children: families.map((family) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/products",
								search: {
									family: family.id,
									q: ""
								},
								className: "flex min-h-44 flex-col justify-between bg-paper p-5 transition-colors duration-200 hover:bg-line/40",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-xs tabular-nums text-signal",
									children: family.code
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block text-xl font-semibold",
									children: t(lang, family.name)
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-2 block text-sm text-muted",
									children: t(lang, family.blurb)
								})] })]
							}, family.id))
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-b border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-5 py-14 md:py-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-end justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "display text-3xl font-semibold",
							children: t(lang, homeCopy.featured)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/products",
							search: {
								family: "all",
								q: ""
							},
							className: "text-sm text-signal",
							children: t(lang, chrome.catalog)
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-8 grid gap-6 sm:grid-cols-2",
						children: featured.map((product) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/products/$slug",
							params: { slug: product.slug },
							className: "group border border-line",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: product.image,
								alt: "",
								className: "aspect-video w-full object-cover",
								width: 1600,
								height: 1200
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "block p-5",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-xs tabular-nums text-signal",
										children: product.code
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-2 block text-xl font-semibold group-hover:text-signal",
										children: t(lang, product.name)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "mt-2 block text-sm text-muted",
										children: t(lang, product.summary)
									})
								]
							})]
						}, product.slug))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-b border-line",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-5 py-14 md:py-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display max-w-xl text-3xl font-semibold",
						children: t(lang, homeCopy.processTitle)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
						className: "mt-8 grid gap-px bg-line md:grid-cols-4",
						children: homeCopy.steps.map((step) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "bg-paper p-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-sm tabular-nums text-signal",
									children: step.n
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 text-lg font-semibold",
									children: t(lang, step.title)
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-sm text-muted",
									children: t(lang, step.body)
								})
							]
						}, step.n))
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "bg-ink text-paper",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl gap-8 px-5 py-16 md:grid-cols-2 md:items-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "display text-3xl font-semibold md:text-4xl",
						children: t(lang, homeCopy.qualityTitle)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-4 text-paper/80",
						children: t(lang, homeCopy.qualityLede)
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-wrap gap-3 md:justify-end",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/quality",
							className: btn.signal,
							children: t(lang, homeCopy.qualityCta)
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/contact",
							search: { product: "" },
							className: "inline-flex min-h-11 items-center border border-paper/30 px-5 text-sm text-paper hover:border-paper",
							children: t(lang, homeCopy.ctaButton)
						})]
					})]
				})
			})
		]
	});
}
//#endregion
export { Home as component };
