import type { Copy, Lang } from "@/lib/i18n";

export type FamilyId = "ise" | "hplc" | "hematology" | "pcr";

export type Spec = { label: Copy; value: Copy };

export type Product = {
  slug: string;
  code: string;
  family: FamilyId;
  name: Copy;
  summary: Copy;
  intended: Copy;
  image: string;
  formats: Copy[];
  specs: Spec[];
  points: Copy[];
};

export type Family = {
  id: FamilyId;
  code: string;
  name: Copy;
  blurb: Copy;
};

const photoNote: Copy = {
  ar: "صورة تمثيلية لطابع المنتج، وليست بديلاً عن ورقة البيانات.",
  en: "Representative photograph of the product character, not a substitute for the data sheet.",
};

export const photoCaption = photoNote;

export const families: Family[] = [
  {
    id: "ise",
    code: "MC-ISE",
    name: { ar: "كواشف ISE", en: "ISE reagents" },
    blurb: {
      ar: "كواشف الأقطاب الانتقائية للأيونات على المحللات المتوافقة.",
      en: "Ion-selective electrode reagents for compatible analyzers.",
    },
  },
  {
    id: "hplc",
    code: "MC-HPLC",
    name: { ar: "كاشف HPLC للهيموغلوبين السكري", en: "HPLC reagent for G. hemoglobin" },
    blurb: {
      ar: "كواشف الفصل الكروماتوجرافي لقياس الهيموغلوبين السكري.",
      en: "Chromatography reagents for glycated hemoglobin measurement.",
    },
  },
  {
    id: "hematology",
    code: "MC-5D",
    name: { ar: "كواشف العدّ التفريقي الخماسي", en: "5-diff reagents" },
    blurb: {
      ar: "مخفف ومحلول حلّ وشطف لعدّادات الدم ذات العدّ التفريقي الخماسي.",
      en: "Diluent, lyse, and rinse for five-part differential counters.",
    },
  },
  {
    id: "pcr",
    code: "MC-PCR",
    name: { ar: "محاليل PCR", en: "PCR solutions" },
    blurb: {
      ar: "محاليل ومزائج تضخيم الحمض النووي للعمل الجزيئي داخل المختبر.",
      en: "Amplification mixes and solutions for laboratory molecular work.",
    },
  },
];

export const products: Product[] = [
  {
    slug: "ise-reagent",
    code: "MC-ISE",
    family: "ise",
    name: { ar: "كواشف ISE", en: "ISE reagent" },
    summary: {
      ar: "كواشف تشغيل الأقطاب الانتقائية لقياس الأيونات على المحللات المتوافقة.",
      en: "Operating reagents for ion-selective electrodes on compatible analyzers.",
    },
    intended: {
      ar: "للاستخدام التشخيصي المختبري في قياس الأيونات، مثل الصوديوم والبوتاسيوم والكلوريد، حسب الصنف المتفق عليه في عرض السعر. الأداء يُقرأ من النشرة لا من هذه الصفحة.",
      en: "For in-vitro diagnostic measurement of ions, such as sodium, potassium, and chloride, on the item agreed in the quotation. Performance is read from the insert, not from this page.",
    },
    image: "/media/reagents.jpg",
    formats: [
      { ar: "عبوات محلل", en: "Analyzer bottles" },
      { ar: "طقم تشغيل حسب الاستهلاك", en: "Operating set by consumption" },
    ],
    specs: [
      { label: { ar: "المبدأ", en: "Principle" }, value: { ar: "قطب انتقائي للأيونات", en: "Ion-selective electrode" } },
      { label: { ar: "العينة", en: "Specimen" }, value: { ar: "حسب نشرة الصنف", en: "As stated in the item insert" } },
      { label: { ar: "الاقتران", en: "Pairing" }, value: { ar: "محلل ISE متوافق، يُذكر في العرض", en: "A compatible ISE analyzer, named in the quote" } },
      { label: { ar: "الحفظ", en: "Storage" }, value: { ar: "حسب ملصق العبوة", en: "As printed on the pack" } },
      { label: { ar: "التوثيق", en: "Documents" }, value: { ar: "نشرة استخدام وشهادة تشغيلة", en: "IFU and lot certificate" } },
    ],
    points: [
      { ar: "قائمة الأيونات وأحجام العبوات تُقفل في عرض السعر.", en: "The ion menu and pack sizes are closed in the quotation." },
      { ar: "لا نخلط كاشف تشغيلة مع محلل غير مذكور في ملاحظة التطبيق.", en: "A reagent lot is not paired with an analyzer outside the application note." },
      { ar: "كل تشغيلة تحمل رقمًا على العبوة وفي ملف الجودة.", en: "Every lot carries a number on the pack and in the quality file." },
    ],
  },
  {
    slug: "hplc-g-hemoglobin",
    code: "MC-HPLC",
    family: "hplc",
    name: { ar: "كاشف HPLC للهيموغلوبين السكري", en: "HPLC reagent for G. hemoglobin" },
    summary: {
      ar: "كواشف الفصل السائل عالي الأداء لقياس الهيموغلوبين السكري في المختبر.",
      en: "High-performance liquid chromatography reagents for laboratory glycated hemoglobin.",
    },
    intended: {
      ar: "لقياس الهيموغلوبين السكري (G. hemoglobin) بطريقة HPLC على الجهاز المتوافق المذكور في العرض. نسب الأداء لا تُنشر هنا بمعزل عن النشرة.",
      en: "For measuring glycated hemoglobin by HPLC on the compatible system named in the quotation. Performance figures are not posted here apart from the insert.",
    },
    image: "/media/analyzer.jpg",
    formats: [
      { ar: "طقم كواشف HPLC", en: "HPLC reagent set" },
      { ar: "تعبئة حسب حجم المحلل", en: "Fill sized to the analyzer" },
    ],
    specs: [
      { label: { ar: "المبدأ", en: "Principle" }, value: { ar: "كروماتوغرافيا سائلة عالية الأداء", en: "High-performance liquid chromatography" } },
      { label: { ar: "المحلل", en: "Analyte" }, value: { ar: "الهيموغلوبين السكري", en: "Glycated hemoglobin" } },
      { label: { ar: "العينة", en: "Specimen" }, value: { ar: "دم كامل، حسب النشرة", en: "Whole blood, per the insert" } },
      { label: { ar: "الاقتران", en: "Pairing" }, value: { ar: "جهاز HPLC متوافق يُسمى في العرض", en: "A compatible HPLC system named in the quote" } },
      { label: { ar: "التوثيق", en: "Documents" }, value: { ar: "نشرة، شهادة تشغيلة، وورقة معايرة إن وُجدت", en: "Insert, lot certificate, and calibrator sheet when supplied" } },
    ],
    points: [
      { ar: "مكوّنات الطقم (طور متحرك، كاشف حلّ، معاير) تُفصَّل في عرض السعر.", en: "Set components (eluent, hemolyzing reagent, calibrator) are itemized in the quotation." },
      { ar: "لا نذكر اسم جهاز تجاري إلا إذا كان ضمن الاتفاق.", en: "A commercial instrument name is stated only when it is part of the agreement." },
      { ar: "التشغيلة لا تخرج بلا شهادة.", en: "A lot does not leave without a certificate." },
    ],
  },
  {
    slug: "five-diff-reagent",
    code: "MC-5D",
    family: "hematology",
    name: { ar: "كواشف العدّ التفريقي الخماسي", en: "5-diff reagent" },
    summary: {
      ar: "ثلاثية المخفف ومحلول الحلّ والشطف لعدّادات الدم ذات الخمسة أجزاء.",
      en: "Diluent, lyse, and rinse for five-part differential hematology analyzers.",
    },
    intended: {
      ar: "لتحضير وقياس الدم الكامل على عدّاد تفريقي خماسي متوافق، ضمن نطاق نشرة الصنف. لا تُخلط تشغيلات غير مقترنة.",
      en: "For preparing and measuring whole blood on a compatible five-part counter, within the item insert. Unpaired lots are not mixed.",
    },
    image: "/media/lab.jpg",
    formats: [
      { ar: "مخفف ومحلول حلّ وشطف", en: "Diluent, lyse, and rinse" },
      { ar: "عبوات حسب استهلاك المعمل", en: "Packs sized to laboratory use" },
    ],
    specs: [
      { label: { ar: "العينة", en: "Specimen" }, value: { ar: "دم كامل على مانع التخثر المحدد", en: "Whole blood on the stated anticoagulant" } },
      { label: { ar: "النظام", en: "System" }, value: { ar: "عدّاد تفريقي خماسي متوافق", en: "Compatible 5-diff counter" } },
      { label: { ar: "المكوّنات", en: "Set" }, value: { ar: "مخفف، حلّ، شطف", en: "Diluent, lyse, rinse" } },
      { label: { ar: "الحفظ", en: "Storage" }, value: { ar: "حسب ملصق كل عبوة", en: "Per each bottle label" } },
      { label: { ar: "التوثيق", en: "Documents" }, value: { ar: "نشرة، SDS، وشهادة تشغيلة", en: "Insert, SDS, and lot certificate" } },
    ],
    points: [
      { ar: "المخفف ومحلول الحلّ يُشحنان كزوج تشغيلات موصى به.", en: "Diluent and lyse ship as a recommended lot pair." },
      { ar: "طراز العدّاد يُكتب في طلب التسعير قبل تحديد العبوة.", en: "The counter model is written on the quote request before pack size is set." },
      { ar: "خلفية العدّ تُراجع في المعمل قبل إفراج النتائج.", en: "Background counts are checked in the laboratory before results are released." },
    ],
  },
  {
    slug: "pcr-solutions",
    code: "MC-PCR",
    family: "pcr",
    name: { ar: "محاليل PCR", en: "PCR solutions" },
    summary: {
      ar: "محاليل ومزائج لتفاعل البلمرة المتسلسل في مختبر التشخيص الجزيئي.",
      en: "Solutions and mixes for polymerase chain reaction work in the molecular laboratory.",
    },
    intended: {
      ar: "لدعم خطوات التضخيم داخل المختبر حسب البروتوكول المتفق عليه. الكتالوج لا يسمي هدفًا جينيًا ولا يدّعي حد كشف. ذلك يبقى في نشرة الصنف.",
      en: "Supports amplification steps in the laboratory under the agreed protocol. The catalog names no gene target and states no detection limit. Those stay in the item insert.",
    },
    image: "/media/controls.jpg",
    formats: [
      { ar: "مزيج تفاعل", en: "Reaction mix" },
      { ar: "محاليل مساندة حسب الطلب", en: "Supporting solutions on request" },
    ],
    specs: [
      { label: { ar: "الطريقة", en: "Method" }, value: { ar: "تفاعل بلمرة متسلسل", en: "Polymerase chain reaction" } },
      { label: { ar: "الاستخدام", en: "Use" }, value: { ar: "مختبر جزيئي، وفق النشرة", en: "Molecular laboratory, per the insert" } },
      { label: { ar: "الحفظ", en: "Storage" }, value: { ar: "مجمّد أو مبرّد حسب الملصق", en: "Frozen or refrigerated, per the label" } },
      { label: { ar: "البروتوكول", en: "Protocol" }, value: { ar: "يُسلَّم مع التشغيلة", en: "Delivered with the lot" } },
      { label: { ar: "التوثيق", en: "Documents" }, value: { ar: "نشرة وشهادة تشغيلة", en: "Insert and lot certificate" } },
    ],
    points: [
      { ar: "تركيبة المزيج والهدف تُحدد كتابةً قبل الإنتاج.", en: "Mix composition and target are fixed in writing before production." },
      { ar: "لا نعرض ادعاء حساسية عامًا على الموقع.", en: "The site states no blanket sensitivity claim." },
      { ar: "أحجام التعبئة تتبع حجم عمل المعمل.", en: "Fill sizes follow the laboratory’s workload." },
    ],
  },
];

export const interests: { id: string; label: Copy }[] = [
  ...families.map((family) => ({ id: family.id, label: family.name })),
  { id: "distribution", label: { ar: "شراكة توزيع", en: "Distribution partnership" } },
  { id: "general", label: { ar: "استفسار عام", en: "General inquiry" } },
];

export function familyById(id: FamilyId) {
  const family = families.find((item) => item.id === id);
  if (!family) throw new Error(`Unknown family ${id}`);
  return family;
}

export function productBySlug(slug: string) {
  return products.find((item) => item.slug === slug);
}

export function relatedProducts(slug: string) {
  const current = productBySlug(slug);
  if (!current) return [];
  return products.filter((item) => item.slug !== slug).slice(0, 3);
}

export function filterProducts(family: string, q: string) {
  const query = q.trim().toLowerCase();
  return products.filter((product) => {
    const familyOk = family === "all" || product.family === family;
    if (!familyOk) return false;
    if (!query) return true;
    const blob = [product.code, product.name.ar, product.name.en, product.summary.ar, product.summary.en]
      .join(" ")
      .toLowerCase();
    return blob.includes(query);
  });
}

export const brand = {
  en: "MonoChrome",
  ar: "مونوكروم",
  line: "For IVD Solutions",
  lineAr: "لحلول التشخيص المختبري",
};

export const office = {
  phoneDisplay: "01102743373",
  phoneTel: "+201102743373",
  whatsapp: "201102743373",
  email: "Mu.taher@outlook.sa",
  address: {
    ar: "74 الزيتون الغربي، القاهرة، مصر",
    en: "74 West Zeitoun, Cairo, Egypt",
  } satisfies Copy,
};

export function brandName(lang: Lang) {
  return lang === "ar" ? brand.ar : brand.en;
}
