import { i as __toESM } from "../_runtime.mjs";
import { n as brandName, t as brand } from "./catalog-kRPY7ZIc.mjs";
import { J as require_react, S as require_jsx_runtime, b as Link, p as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { r as Menu, t as X } from "../_libs/lucide-react.mjs";
import { n as persist, r as create, t as createJSONStorage } from "../_libs/zustand.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/shell-r1SyDj0G.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var chrome = {
	home: {
		ar: "الرئيسية",
		en: "Home"
	},
	about: {
		ar: "من نحن",
		en: "About"
	},
	products: {
		ar: "المنتجات",
		en: "Products"
	},
	solutions: {
		ar: "الحلول",
		en: "Solutions"
	},
	quality: {
		ar: "الجودة",
		en: "Quality"
	},
	contact: {
		ar: "تواصل",
		en: "Contact"
	},
	quote: {
		ar: "طلب التسعير",
		en: "Quote list"
	},
	catalog: {
		ar: "تصفح الكتالوج",
		en: "Browse the catalog"
	},
	add: {
		ar: "أضف إلى الطلب",
		en: "Add to quote"
	},
	added: {
		ar: "في الطلب",
		en: "In the quote"
	},
	all: {
		ar: "الكل",
		en: "All"
	},
	search: {
		ar: "ابحث بالكود أو الاسم",
		en: "Search by code or name"
	},
	empty: {
		ar: "لا يوجد صنف يطابق البحث.",
		en: "No item matches that search."
	},
	clear: {
		ar: "مسح البحث",
		en: "Clear search"
	},
	back: {
		ar: "الكتالوج",
		en: "Catalog"
	},
	related: {
		ar: "أصناف قريبة",
		en: "Related items"
	},
	specs: {
		ar: "بيانات الكتالوج",
		en: "Catalog data"
	},
	formats: {
		ar: "أشكال التوريد",
		en: "Supply formats"
	},
	intended: {
		ar: "الاستخدام المقصود",
		en: "Intended use"
	},
	missing: {
		ar: "هذا الصنف غير موجود في الكتالوج.",
		en: "That item is not in the catalog."
	},
	menu: {
		ar: "القائمة",
		en: "Menu"
	},
	close: {
		ar: "إغلاق",
		en: "Close"
	},
	lang: {
		ar: "اللغة",
		en: "Language"
	},
	skip: {
		ar: "تخطِّ إلى المحتوى",
		en: "Skip to content"
	}
};
var homeCopy = {
	kicker: {
		ar: "لحلول التشخيص المختبري",
		en: "For IVD Solutions"
	},
	title: {
		ar: "نصنع الكواشف والأجهزة التي يعمل عليها المختبر كل يوم.",
		en: "We make the reagents and instruments a laboratory runs every day."
	},
	lede: {
		ar: "مونوكروم تصنّع كواشف التشخيص المختبري والأجهزة المعملية والطبية. الكاشف والجهاز من مصدر واحد، ولكل تشغيلة ملف يسافر معها.",
		en: "MonoChrome manufactures in-vitro diagnostic reagents and laboratory and medical devices. Reagent and instrument come from one maker, and every lot travels with its file."
	},
	sample: {
		ar: "نموذج بطاقة تشغيلة",
		en: "Sample run card"
	},
	sampleNote: {
		ar: "شكل توضيحي لطريقة عرض التشغيلة. أرقام الدفعات الحقيقية تُطبع على العبوة.",
		en: "A sample of how a run is shown. Real batch numbers are printed on the pack."
	},
	rows: [
		{
			label: {
				ar: "الخط",
				en: "Line"
			},
			value: {
				ar: "كيمياء · MC-CH",
				en: "Chemistry · MC-CH"
			}
		},
		{
			label: {
				ar: "العينة",
				en: "Matrix"
			},
			value: {
				ar: "مصل / بلازما",
				en: "Serum / plasma"
			}
		},
		{
			label: {
				ar: "القراءة",
				en: "Read"
			},
			value: {
				ar: "ضوئية",
				en: "Photometric"
			}
		},
		{
			label: {
				ar: "الإفراج",
				en: "Release"
			},
			value: {
				ar: "فحص مزدوج",
				en: "Two-person QC"
			}
		}
	],
	families: {
		ar: "خطوط التصنيع",
		en: "What we manufacture"
	},
	familiesLede: {
		ar: "سبعة مسارات تخرج من نفس نظام الجودة: كاشف، جهاز، وضبط.",
		en: "Seven paths leave the same quality system: reagent, instrument, and control."
	},
	featured: {
		ar: "من الكتالوج",
		en: "From the catalog"
	},
	processTitle: {
		ar: "من المواصفة إلى العبوة",
		en: "From specification to pack"
	},
	steps: [
		{
			n: "01",
			title: {
				ar: "مواصفة الصنف",
				en: "Item specification"
			},
			body: {
				ar: "العينة، طريقة القياس، والعبوة تُكتب قبل الإنتاج. لا نبدأ تشغيلة بوصف شفهي.",
				en: "Specimen, method, and pack are written before production. A lot does not start from a verbal description."
			}
		},
		{
			n: "02",
			title: {
				ar: "التحضير والتعبئة",
				en: "Preparation and fill"
			},
			body: {
				ar: "الكواشف تُحضَّر وتُعبأ بأرقام تشغيلات. الأجهزة تُراجع مقابل قائمة الفحص الخاصة بها.",
				en: "Reagents are prepared and filled under lot numbers. Instruments are checked against their own inspection list."
			}
		},
		{
			n: "03",
			title: {
				ar: "إفراج الجودة",
				en: "Quality release"
			},
			body: {
				ar: "التشغيلة لا تخرج إلا ومعها شهادة وورقة استخدام. الجهاز لا يُشحن بلا دليل وملاحظة تطبيق.",
				en: "A lot does not leave without a certificate and an insert. An instrument does not ship without a manual and an application note."
			}
		},
		{
			n: "04",
			title: {
				ar: "توريد للمعمل",
				en: "Supply to the lab"
			},
			body: {
				ar: "الموزع أو المستشفى يستلم الصنف وملفه معًا. طلب التسعير على هذا الموقع يجمع الأصناف قبل الحديث التجاري.",
				en: "The distributor or hospital receives the item and its file together. The quote list on this site gathers items before the commercial conversation."
			}
		}
	],
	qualityTitle: {
		ar: "الجودة ملف، لا شعار.",
		en: "Quality is a file, not a slogan."
	},
	qualityLede: {
		ar: "نتتبع التشغيلة من المادة حتى العبوة، ونسلّم المستندات مع عرض السعر. أرقام الاعتماد لا تُعرض هنا منفصلة عن نسخها.",
		en: "We trace a lot from material to pack, and we hand documents over with the quotation. Registration numbers are not shown here apart from their copies."
	},
	qualityCta: {
		ar: "اقرأ منهج الجودة",
		en: "Read the quality method"
	},
	ctaTitle: {
		ar: "اطلب ملف التسعير للخط الذي تحتاجه.",
		en: "Ask for a quotation file for the line you need."
	},
	ctaLede: {
		ar: "أضف الأصناف إلى الطلب، ثم جهّز ملخصًا بأسماء المعمل والكميات التقريبية. الفريق التجاري يكمل الأسعار والمستندات.",
		en: "Add items to the quote, then prepare a summary with the laboratory name and approximate volumes. The commercial team completes prices and documents."
	},
	ctaButton: {
		ar: "ابدأ طلب التسعير",
		en: "Start a quotation"
	}
};
var aboutCopy = {
	kicker: {
		ar: "الشركة",
		en: "The company"
	},
	title: {
		ar: "مصنع كواشف وأجهزة، لا وسيط كتالوج فقط.",
		en: "A manufacturer of reagents and devices, not only a catalog reseller."
	},
	lede: {
		ar: "مونوكروم لحلول التشخيص المختبري. نشاطنا تصنيع الكواشف التشخيصية والأجهزة المعملية والطبية للمعامل والمستشفيات والموزعين ومصنّعي الأجهزة.",
		en: "MonoChrome for IVD solutions. We manufacture diagnostic reagents and laboratory and medical devices for laboratories, hospitals, distributors, and instrument makers."
	},
	points: [
		{
			title: {
				ar: "مصدر واحد",
				en: "One source"
			},
			body: {
				ar: "حين يشتري المعمل الجهاز والكاشف معًا، تبقى بارامترات القياس ومسؤولية التوريد في مكان واحد.",
				en: "When a laboratory buys the instrument and the reagent together, measurement parameters and supply responsibility stay in one place."
			}
		},
		{
			title: {
				ar: "كتالوج بلا مبالغة",
				en: "A catalog without inflation"
			},
			body: {
				ar: "لا نكتب نسب حساسية عامة. الأداء يعيش في نشرة الصنف وبيانات التشغيلة التي تُسلَّم مع العرض.",
				en: "We do not print blanket sensitivity figures. Performance lives in the insert and the lot data delivered with the quote."
			}
		},
		{
			title: {
				ar: "شريك توزيع أو OEM",
				en: "Distributor or OEM"
			},
			body: {
				ar: "نعمل مع موزعين يخدمون المعامل، ومع مصنّعين يريدون كاشفًا سائبًا بمواصفة مكتوبة.",
				en: "We work with distributors who serve laboratories, and with makers who want bulk reagent to a written spec."
			}
		}
	],
	serveTitle: {
		ar: "لمن نُورّد",
		en: "Who we supply"
	},
	serve: [
		{
			title: {
				ar: "المعمل السريري",
				en: "Clinical laboratory"
			},
			body: {
				ar: "كيمياء، مناعة، دم، واختبار سريع ضمن قائمة يومية.",
				en: "Chemistry, immunoassay, hematology, and rapid tests on a daily menu."
			}
		},
		{
			title: {
				ar: "المستشفى",
				en: "Hospital"
			},
			body: {
				ar: "أجهزة منضدية مع تدريب ومسار كاشف واضح.",
				en: "Benchtop instruments with training and a clear reagent path."
			}
		},
		{
			title: {
				ar: "الموزع",
				en: "Distributor"
			},
			body: {
				ar: "تعبئة، ملفات تشغيلات، ودعم فني للأصناف المتفق عليها.",
				en: "Packs, lot files, and technical support for the agreed items."
			}
		},
		{
			title: {
				ar: "مصنّع الجهاز",
				en: "Instrument OEM"
			},
			body: {
				ar: "كواشف سائبة أو منتج نهائي تحت علامة الشريك.",
				en: "Bulk reagents or finished goods under the partner mark."
			}
		}
	]
};
var solutionsCopy = {
	kicker: {
		ar: "الحلول",
		en: "Solutions"
	},
	title: {
		ar: "أربعة طرق لدخول المختبر، ومسار خامس للمصنّعين.",
		en: "Four ways into the laboratory, and a fifth path for makers."
	},
	lede: {
		ar: "اختر المسار الأقرب لعملك، ثم أضف أصنافه إلى طلب التسعير. التفاصيل التجارية تُغلق خارج الكتالوج.",
		en: "Pick the path closest to your work, then add its items to the quote. Commercial detail closes outside the catalog."
	},
	blocks: [
		{
			id: "labs",
			title: {
				ar: "المعمل الروتيني",
				en: "The routine laboratory"
			},
			body: {
				ar: "لوحة كيمياء يومية على محلل منضدي، مع مخففات الدم إذا كان العدّ جزءًا من نفس التوريد. الضوابط تُشحن مع الكاشف.",
				en: "A daily chemistry menu on a benchtop analyzer, plus hematology reagents when the count is part of the same supply. Controls ship with the reagent."
			},
			slugs: [
				"chemistry-line",
				"chemistry-analyzer",
				"controls-calibrators"
			]
		},
		{
			id: "immune",
			title: {
				ar: "لوحة مناعية",
				en: "An immunoassay menu"
			},
			body: {
				ar: "أطقم إليزا تُبنى حسب المحللات التي يطلبها المعمل. البروتوكول ومنحنى المعايرة يأتيان مع التشغيلة.",
				en: "ELISA kits built around the analytes the laboratory asks for. The protocol and calibration curve arrive with the lot."
			},
			slugs: ["immunoassay-line", "controls-calibrators"]
		},
		{
			id: "blood",
			title: {
				ar: "عدّ الدم",
				en: "Blood counting"
			},
			body: {
				ar: "عدّاد منضدي مع ثلاثية المخفف والمحلول والشطف. لا نوصي بخلط تشغيلات غير مقترنة.",
				en: "A benchtop counter with diluent, lyse, and rinse. We do not recommend mixing unpaired lots."
			},
			slugs: ["hematology-analyzer", "hematology-reagents"]
		},
		{
			id: "poc",
			title: {
				ar: "نقطة الرعاية",
				en: "Point of care"
			},
			body: {
				ar: "كاسيتات قراءة بصرية للعيادة أو لاستقبال المختبر، بخط ضبط داخل كل اختبار.",
				en: "Visually read cassettes for the clinic or the laboratory reception, with a control line in every test."
			},
			slugs: ["rapid-cassettes"]
		},
		{
			id: "oem",
			title: {
				ar: "علامة الشريك",
				en: "A partner brand"
			},
			body: {
				ar: "توريد OEM يبدأ بمواصفة وجودة وتعبئة. الكتالوج العام لا يكشف تركيبة الشريك.",
				en: "OEM supply starts with specification, quality, and pack. The public catalog does not expose a partner formula."
			},
			slugs: ["oem-bulk"]
		}
	]
};
var qualityCopy = {
	kicker: {
		ar: "نظام الجودة",
		en: "Quality system"
	},
	title: {
		ar: "ما يسافر مع التشغيلة أهم مما يُكتب على الغلاف.",
		en: "What travels with the lot matters more than the cover line."
	},
	lede: {
		ar: "نشتغل بنظام جودة لتصنيع الكواشف والأجهزة: مواصفة، تتبع، فحص، وإفراج. الشهادات تُشارك نسخها مع ملف التسعير، ولا نعرض أرقام اعتماد يتيمة على الموقع.",
		en: "We run a quality system for reagent and device manufacture: specification, traceability, testing, and release. Certificate copies travel in the quotation file. Orphan registration numbers are not posted on the site."
	},
	pillars: [
		{
			title: {
				ar: "تتبع التشغيلة",
				en: "Lot traceability"
			},
			body: {
				ar: "رقم واحد من المواد الداخلة حتى العبوة التي تصل المعمل.",
				en: "One number from incoming materials to the pack that reaches the laboratory."
			}
		},
		{
			title: {
				ar: "فحص وإفراج",
				en: "Test and release"
			},
			body: {
				ar: "التشغيلة تُفحص مقابل خطتها. جهاز لا يُشحن إذا سقط بند في قائمة الفحص.",
				en: "A lot is tested against its plan. An instrument does not ship if an inspection item fails."
			}
		},
		{
			title: {
				ar: "ثبات موثّق",
				en: "Documented stability"
			},
			body: {
				ar: "مدد الحفظ بعد الفتح تُكتب في النشرة، لا تُقدَّر في محادثة بيع.",
				en: "In-use stability is written in the insert, not estimated in a sales call."
			}
		},
		{
			title: {
				ar: "اقتران الجهاز بالكاشف",
				en: "Instrument pairing"
			},
			body: {
				ar: "ملاحظة التطبيق تحدد البارامترات. تغيير الكاشف يعني مراجعة الملاحظة.",
				en: "The application note sets parameters. Changing reagent means reviewing that note."
			}
		}
	],
	docsTitle: {
		ar: "ما يُطلب مع عرض السعر",
		en: "What arrives with a quotation"
	},
	docs: [
		{
			ar: "نشرة الاستخدام للصنف",
			en: "Instructions for use"
		},
		{
			ar: "شهادة تحليل للتشغيلة المتاحة",
			en: "Certificate of analysis for the available lot"
		},
		{
			ar: "صحيفة سلامة عند اللزوم",
			en: "Safety data sheet when required"
		},
		{
			ar: "ملخص ثبات أو ورقة قيم للضوابط",
			en: "Stability summary or control value sheet"
		},
		{
			ar: "ملاحظة تطبيق إذا كان الجهاز جزءًا من التوريد",
			en: "Application note when an instrument is part of the supply"
		}
	],
	note: {
		ar: "هذا الموقع كتالوج تعريفي. المواصفات النهائية هي ما يُطبع على التشغيلة التي تشتريها.",
		en: "This site is an introductory catalog. Final specifications are what is printed on the lot you buy."
	}
};
var contactCopy = {
	kicker: {
		ar: "الطلبات",
		en: "Inquiries"
	},
	title: {
		ar: "جهّز طلب التسعير على هذا الجهاز.",
		en: "Prepare the quotation on this device."
	},
	lede: {
		ar: "النموذج لا يرسل بريدًا من الموقع. يراجع البيانات، ثم يعطيك ملخصًا تنسخه وتشاركه مع فريق المبيعات. الأصناف التي أضفتها تبقى محفوظة في متصفحك.",
		en: "The form does not send email from the site. It checks the fields, then gives you a summary to copy and share with the sales team. Items you add stay in this browser."
	},
	name: {
		ar: "الاسم",
		en: "Name"
	},
	org: {
		ar: "المعمل أو الشركة",
		en: "Laboratory or company"
	},
	email: {
		ar: "البريد",
		en: "Email"
	},
	phone: {
		ar: "الهاتف",
		en: "Phone"
	},
	country: {
		ar: "الدولة",
		en: "Country"
	},
	interest: {
		ar: "الاهتمام",
		en: "Interest"
	},
	message: {
		ar: "حجم الاستهلاك أو السؤال",
		en: "Volume or question"
	},
	optional: {
		ar: "اختياري",
		en: "Optional"
	},
	submit: {
		ar: "تجهيز الملخص",
		en: "Prepare summary"
	},
	list: {
		ar: "أصناف في الطلب",
		en: "Items in the quote"
	},
	emptyList: {
		ar: "لم تُضف أصنافًا بعد. يمكن إرسال استفسار عام بدونها.",
		en: "No items yet. A general inquiry can still be prepared."
	},
	remove: {
		ar: "إزالة",
		en: "Remove"
	},
	ready: {
		ar: "الملخص جاهز",
		en: "Summary ready"
	},
	copy: {
		ar: "نسخ الملخص",
		en: "Copy summary"
	},
	copied: {
		ar: "نُسخ",
		en: "Copied"
	},
	reset: {
		ar: "طلب جديد",
		en: "New inquiry"
	},
	errors: {
		name: {
			ar: "اكتب الاسم.",
			en: "Enter a name."
		},
		org: {
			ar: "اكتب اسم الجهة.",
			en: "Enter the organization."
		},
		email: {
			ar: "البريد غير مكتمل.",
			en: "The email looks incomplete."
		},
		country: {
			ar: "اكتب الدولة.",
			en: "Enter the country."
		},
		message: {
			ar: "اكتب سطرًا عن الاحتياج، ثمانية أحرف على الأقل.",
			en: "Write at least a short line about the need."
		}
	}
};
var footerCopy = {
	disclaimer: {
		ar: "الكتالوج تعريفي. الأداء والشهادات وأرقام الاعتماد تُقرأ من مستندات التشغيلة المسلّمة مع عرض السعر، لا من صور الموقع.",
		en: "The catalog is introductory. Performance, certificates, and registration numbers are read from the lot documents supplied with a quotation, not from photographs on this site."
	},
	made: {
		ar: "تصنيع كواشف تشخيصية وأجهزة معملية وطبية.",
		en: "Diagnostic reagents and laboratory and medical devices."
	}
};
function t(lang, copy) {
	return copy[lang];
}
var memory$1 = /* @__PURE__ */ new Map();
var storage$1 = createJSONStorage(() => ({
	getItem: (name) => {
		if (typeof window === "undefined") return memory$1.get(name) ?? null;
		return window.localStorage.getItem(name);
	},
	setItem: (name, value) => {
		memory$1.set(name, value);
		if (typeof window !== "undefined") window.localStorage.setItem(name, value);
	},
	removeItem: (name) => {
		memory$1.delete(name);
		if (typeof window !== "undefined") window.localStorage.removeItem(name);
	}
}));
var langChosen = false;
var useI18n = create()(persist((set) => ({
	lang: "ar",
	setLang: (lang) => {
		langChosen = true;
		set({ lang });
	}
}), {
	name: "monochrome-lang",
	storage: storage$1,
	merge: (persisted, current) => {
		if (langChosen) return current;
		const saved = persisted;
		if (saved?.lang === "ar" || saved?.lang === "en") return {
			...current,
			lang: saved.lang
		};
		return current;
	}
}));
var memory = /* @__PURE__ */ new Map();
var storage = createJSONStorage(() => ({
	getItem: (name) => {
		if (typeof window === "undefined") return memory.get(name) ?? null;
		return window.localStorage.getItem(name);
	},
	setItem: (name, value) => {
		memory.set(name, value);
		if (typeof window !== "undefined") window.localStorage.setItem(name, value);
	},
	removeItem: (name) => {
		memory.delete(name);
		if (typeof window !== "undefined") window.localStorage.removeItem(name);
	}
}));
var quoteTouched = false;
var useQuote = create()(persist((set, get) => ({
	slugs: [],
	add: (slug) => {
		quoteTouched = true;
		if (get().slugs.includes(slug)) return;
		set({ slugs: [...get().slugs, slug] });
	},
	remove: (slug) => {
		quoteTouched = true;
		set({ slugs: get().slugs.filter((item) => item !== slug) });
	},
	toggle: (slug) => {
		quoteTouched = true;
		if (get().slugs.includes(slug)) get().remove(slug);
		else get().add(slug);
	},
	clear: () => {
		quoteTouched = true;
		set({ slugs: [] });
	}
}), {
	name: "monochrome-quote",
	storage,
	merge: (persisted, current) => {
		if (quoteTouched) return current;
		const saved = persisted;
		if (saved && Array.isArray(saved.slugs) && saved.slugs.every((item) => typeof item === "string")) return {
			...current,
			slugs: saved.slugs
		};
		return current;
	}
}));
var links = [
	{
		to: "/",
		key: "home"
	},
	{
		to: "/about",
		key: "about"
	},
	{
		to: "/products",
		key: "products"
	},
	{
		to: "/solutions",
		key: "solutions"
	},
	{
		to: "/quality",
		key: "quality"
	},
	{
		to: "/contact",
		key: "contact"
	}
];
function Mark({ className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: "/media/logo-mark.png",
		alt: "",
		width: 872,
		height: 360,
		className: className ?? "h-10 w-auto"
	});
}
function Shell({ title, children }) {
	const lang = useI18n((state) => state.lang);
	const setLang = useI18n((state) => state.setLang);
	const count = useQuote((state) => state.slugs.length);
	const pathname = useRouterState({ select: (state) => state.location.pathname });
	const [open, setOpen] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		document.documentElement.lang = lang;
		document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
		document.title = `${title[lang]} · ${brandName(lang)}`;
	}, [lang, title]);
	(0, import_react.useEffect)(() => {
		setOpen(false);
	}, [pathname]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-paper text-ink",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main",
				className: "sr-only focus:not-sr-only focus:absolute focus:z-50 focus:bg-ink focus:px-4 focus:py-3 focus:text-paper",
				children: t(lang, chrome.skip)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "sticky top-0 z-40 border-b border-line bg-paper/95 backdrop-blur",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex min-h-16 max-w-6xl items-center gap-4 px-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/",
							className: "flex min-w-0 items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mark, { className: "h-9 w-auto sm:h-10" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "leading-tight",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block whitespace-nowrap text-xs font-semibold tracking-wide sm:text-sm",
									children: "MONO CHROME"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden text-xs text-muted sm:block",
									children: lang === "ar" ? brand.lineAr : "FOR IVD SOLUTIONS"
								})]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
							className: "ms-auto hidden items-center gap-5 md:flex",
							"aria-label": "Primary",
							children: links.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.to,
								activeOptions: { exact: item.to === "/" },
								className: "text-sm text-muted transition-colors duration-200 hover:text-ink data-[status=active]:text-ink",
								children: t(lang, chrome[item.key])
							}, item.to))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "ms-auto flex items-center gap-2 md:ms-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LangSwitch, {
									lang,
									setLang
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
									to: "/contact",
									search: { product: "" },
									className: "inline-flex min-h-11 items-center gap-2 bg-ink px-3 text-sm text-paper transition-colors duration-200 hover:bg-signal",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "hidden sm:inline",
											children: t(lang, chrome.quote)
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "sm:hidden",
											children: lang === "ar" ? "طلب" : "Quote"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "tabular-nums text-paper/80",
											children: count
										})
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "inline-flex size-11 items-center justify-center border border-line md:hidden",
									"aria-expanded": open,
									"aria-label": open ? t(lang, chrome.close) : t(lang, chrome.menu),
									onClick: () => setOpen((value) => !value),
									children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
								})
							]
						})
					]
				}), open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
					className: "border-t border-line px-5 md:hidden",
					"aria-label": "Mobile",
					children: links.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: item.to,
						activeOptions: { exact: item.to === "/" },
						className: "flex min-h-11 items-center border-b border-line text-base data-[status=active]:text-signal",
						children: t(lang, chrome[item.key])
					}, item.to))
				}) : null]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "main",
				children
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("footer", {
				className: "border-t border-line",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto grid max-w-6xl gap-8 px-5 py-12 md:grid-cols-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "md:col-span-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: "/media/logo-lockup.png",
								alt: "MonoChrome For IVD Solutions",
								width: 1060,
								height: 680,
								className: "h-auto w-full max-w-64"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 max-w-md text-sm text-muted",
								children: t(lang, footerCopy.made)
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-col gap-2 text-sm",
							children: links.slice(0, 4).map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: item.to,
								className: "text-muted hover:text-ink",
								children: t(lang, chrome[item.key])
							}, item.to))
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col gap-2 text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/quality",
								className: "text-muted hover:text-ink",
								children: t(lang, chrome.quality)
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/contact",
								search: { product: "" },
								className: "text-muted hover:text-ink",
								children: t(lang, chrome.contact)
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mx-auto max-w-6xl border-t border-line px-5 py-6 text-sm text-muted",
					children: t(lang, footerCopy.disclaimer)
				})]
			})
		]
	});
}
function LangSwitch({ lang, setLang }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex border border-line",
		role: "group",
		"aria-label": t(lang, chrome.lang),
		children: [["ar", "ع"], ["en", "EN"]].map(([code, label]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			"aria-pressed": lang === code,
			onClick: () => setLang(code),
			className: `min-h-11 min-w-11 px-2 text-sm ${lang === code ? "bg-ink text-paper" : "text-muted hover:text-ink"}`,
			children: label
		}, code))
	});
}
function PageIntro({ kicker, title, lede }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "border-b border-line",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-6xl px-5 py-14 md:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-signal",
					children: kicker
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "display mt-3 max-w-3xl text-4xl font-semibold md:text-5xl",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-2xl text-lg text-muted",
					children: lede
				})
			]
		})
	});
}
var btn = {
	signal: "inline-flex min-h-11 items-center justify-center gap-2 bg-signal px-5 text-sm font-medium text-paper transition-colors duration-200 hover:bg-ink",
	ghost: "inline-flex min-h-11 items-center justify-center gap-2 border border-line bg-paper px-5 text-sm font-medium text-ink transition-colors duration-200 hover:border-ink",
	ink: "inline-flex min-h-11 items-center justify-center gap-2 bg-ink px-5 text-sm font-medium text-paper transition-colors duration-200 hover:bg-signal"
};
function Plate() {
	const hot = /* @__PURE__ */ new Set([
		5,
		18,
		19,
		30,
		31,
		32,
		44,
		57,
		70,
		83
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid grid-cols-12 gap-1",
		"aria-hidden": true,
		children: Array.from({ length: 96 }, (_, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `size-2 rounded-full ${hot.has(index) ? "bg-signal" : "bg-line"}` }, index))
	});
}
//#endregion
export { btn as a, homeCopy as c, t as d, useI18n as f, aboutCopy as i, qualityCopy as l, Plate as n, chrome as o, useQuote as p, Shell as r, contactCopy as s, PageIntro as t, solutionsCopy as u };
