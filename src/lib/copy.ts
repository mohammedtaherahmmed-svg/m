import type { Copy } from "@/lib/i18n";

export const chrome = {
  home: { ar: "الرئيسية", en: "Home" },
  about: { ar: "من نحن", en: "About" },
  products: { ar: "المنتجات", en: "Products" },
  solutions: { ar: "الحلول", en: "Solutions" },
  quality: { ar: "الجودة", en: "Quality" },
  contact: { ar: "تواصل", en: "Contact" },
  quote: { ar: "طلب التسعير", en: "Quote list" },
  catalog: { ar: "تصفح الكتالوج", en: "Browse the catalog" },
  add: { ar: "أضف إلى الطلب", en: "Add to quote" },
  added: { ar: "في الطلب", en: "In the quote" },
  all: { ar: "الكل", en: "All" },
  search: { ar: "ابحث بالكود أو الاسم", en: "Search by code or name" },
  empty: { ar: "لا يوجد صنف يطابق البحث.", en: "No item matches that search." },
  clear: { ar: "مسح البحث", en: "Clear search" },
  back: { ar: "الكتالوج", en: "Catalog" },
  related: { ar: "أصناف قريبة", en: "Related items" },
  specs: { ar: "بيانات الكتالوج", en: "Catalog data" },
  formats: { ar: "أشكال التوريد", en: "Supply formats" },
  intended: { ar: "الاستخدام المقصود", en: "Intended use" },
  missing: { ar: "هذا الصنف غير موجود في الكتالوج.", en: "That item is not in the catalog." },
  menu: { ar: "القائمة", en: "Menu" },
  close: { ar: "إغلاق", en: "Close" },
  lang: { ar: "اللغة", en: "Language" },
  skip: { ar: "تخطِّ إلى المحتوى", en: "Skip to content" },
} as const satisfies Record<string, Copy>;

export const homeCopy = {
  kicker: { ar: "لحلول التشخيص المختبري", en: "For IVD Solutions" },
  title: {
    ar: "نصنع الكواشف والأجهزة التي يعمل عليها المختبر كل يوم.",
    en: "We make the reagents and instruments a laboratory runs every day.",
  },
  lede: {
    ar: "مونوكروم تصنّع كواشف التشخيص المختبري. الخطوط الحالية: أقطاب انتقائية، HPLC للهيموغلوبين السكري، عدّ تفريقي خماسي، ومحاليل PCR.",
    en: "MonoChrome manufactures in-vitro diagnostic reagents. The current lines are ISE, HPLC for glycated hemoglobin, five-part differential reagents, and PCR solutions.",
  },
  sample: { ar: "نموذج بطاقة تشغيلة", en: "Sample run card" },
  sampleNote: {
    ar: "شكل توضيحي لطريقة عرض التشغيلة. أرقام الدفعات الحقيقية تُطبع على العبوة.",
    en: "A sample of how a run is shown. Real batch numbers are printed on the pack.",
  },
  rows: [
    { label: { ar: "الخط", en: "Line" }, value: { ar: "ISE · MC-ISE", en: "ISE · MC-ISE" } },
    { label: { ar: "العينة", en: "Matrix" }, value: { ar: "حسب النشرة", en: "Per the insert" } },
    { label: { ar: "القراءة", en: "Read" }, value: { ar: "قطب انتقائي", en: "ISE" } },
    { label: { ar: "الإفراج", en: "Release" }, value: { ar: "فحص مزدوج", en: "Two-person QC" } },
  ],
  families: { ar: "خطوط التصنيع", en: "What we manufacture" },
  familiesLede: {
    ar: "أربعة خطوط كواشف، وكل تشغيلة تخرج ومعها ملفها.",
    en: "Four reagent lines. Every lot leaves with its file.",
  },
  featured: { ar: "من الكتالوج", en: "From the catalog" },
  processTitle: { ar: "من المواصفة إلى العبوة", en: "From specification to pack" },
  steps: [
    {
      n: "01",
      title: { ar: "مواصفة الصنف", en: "Item specification" },
      body: {
        ar: "العينة، طريقة القياس، والعبوة تُكتب قبل الإنتاج. لا نبدأ تشغيلة بوصف شفهي.",
        en: "Specimen, method, and pack are written before production. A lot does not start from a verbal description.",
      },
    },
    {
      n: "02",
      title: { ar: "التحضير والتعبئة", en: "Preparation and fill" },
      body: {
        ar: "الكواشف تُحضَّر وتُعبأ بأرقام تشغيلات، ثم تُراجع مقابل خطة الصنف.",
        en: "Reagents are prepared and filled under lot numbers, then checked against the item plan.",
      },
    },
    {
      n: "03",
      title: { ar: "إفراج الجودة", en: "Quality release" },
      body: {
        ar: "التشغيلة لا تخرج إلا ومعها شهادة وورقة استخدام. الجهاز لا يُشحن بلا دليل وملاحظة تطبيق.",
        en: "A lot does not leave without a certificate and an insert. An instrument does not ship without a manual and an application note.",
      },
    },
    {
      n: "04",
      title: { ar: "توريد للمعمل", en: "Supply to the lab" },
      body: {
        ar: "الموزع أو المستشفى يستلم الصنف وملفه معًا. طلب التسعير على هذا الموقع يجمع الأصناف قبل الحديث التجاري.",
        en: "The distributor or hospital receives the item and its file together. The quote list on this site gathers items before the commercial conversation.",
      },
    },
  ],
  qualityTitle: { ar: "الجودة ملف، لا شعار.", en: "Quality is a file, not a slogan." },
  qualityLede: {
    ar: "نتتبع التشغيلة من المادة حتى العبوة، ونسلّم المستندات مع عرض السعر. أرقام الاعتماد لا تُعرض هنا منفصلة عن نسخها.",
    en: "We trace a lot from material to pack, and we hand documents over with the quotation. Registration numbers are not shown here apart from their copies.",
  },
  qualityCta: { ar: "اقرأ منهج الجودة", en: "Read the quality method" },
  ctaTitle: { ar: "اطلب ملف التسعير للخط الذي تحتاجه.", en: "Ask for a quotation file for the line you need." },
  ctaLede: {
    ar: "أضف الأصناف إلى الطلب، ثم أرسل الملخص على واتساب أو البريد. الأسعار والمستندات تُستكمل من القاهرة.",
    en: "Add items to the quote, then send the summary on WhatsApp or email. Prices and documents are completed from Cairo.",
  },
  ctaButton: { ar: "ابدأ طلب التسعير", en: "Start a quotation" },
};

export const aboutCopy = {
  kicker: { ar: "الشركة", en: "The company" },
  title: {
    ar: "مصنع كواشف تشخيصية، لا وسيط كتالوج فقط.",
    en: "A manufacturer of diagnostic reagents, not only a catalog reseller.",
  },
  lede: {
    ar: "مونوكروم لحلول التشخيص المختبري، من الزيتون الغربي في القاهرة. نصنّع كواشف ISE وHPLC للهيموغلوبين السكري وكواشف العدّ التفريقي الخماسي ومحاليل PCR.",
    en: "MonoChrome for IVD solutions, from West Zeitoun in Cairo. We manufacture ISE reagents, HPLC reagents for glycated hemoglobin, 5-diff reagents, and PCR solutions.",
  },
  points: [
    {
      title: { ar: "مصدر الكاشف", en: "The reagent source" },
      body: {
        ar: "الكاشف يخرج من عندنا، والجهاز الذي يشتغل عليه يُذكر في عرض السعر حتى تبقى البارامترات واضحة.",
        en: "The reagent comes from us. The analyzer it runs on is named in the quotation so the parameters stay clear.",
      },
    },
    {
      title: { ar: "كتالوج بلا مبالغة", en: "A catalog without inflation" },
      body: {
        ar: "لا نكتب نسب حساسية عامة. الأداء يعيش في نشرة الصنف وبيانات التشغيلة التي تُسلَّم مع العرض.",
        en: "We do not print blanket sensitivity figures. Performance lives in the insert and the lot data delivered with the quote.",
      },
    },
    {
      title: { ar: "شريك توزيع أو OEM", en: "Distributor or OEM" },
      body: {
        ar: "نعمل مع موزعين يخدمون المعامل، ومع مصنّعين يريدون كاشفًا سائبًا بمواصفة مكتوبة.",
        en: "We work with distributors who serve laboratories, and with makers who want bulk reagent to a written spec.",
      },
    },
  ],
  serveTitle: { ar: "لمن نُورّد", en: "Who we supply" },
  serve: [
    { title: { ar: "المعمل السريري", en: "Clinical laboratory" }, body: { ar: "ISE، هيموغلوبين سكري، عدّ تفريقي، أو PCR حسب قائمة المعمل.", en: "ISE, glycated hemoglobin, five-part differential, or PCR, as the laboratory menu requires." } },
    { title: { ar: "المستشفى", en: "Hospital" }, body: { ar: "توريد كاشف ثابت مع ملف التشغيلة لكل خط.", en: "A steady reagent supply, with a lot file for each line." } },
    { title: { ar: "الموزع", en: "Distributor" }, body: { ar: "تعبئة وملفات تشغيلات للخطوط الأربعة.", en: "Packs and lot files for the four lines." } },
    { title: { ar: "مختبر جزيئي", en: "Molecular laboratory" }, body: { ar: "محاليل PCR ببروتوكول مكتوب مع التشغيلة.", en: "PCR solutions with a written protocol shipped with the lot." } },
  ],
};

export const solutionsCopy = {
  kicker: { ar: "الحلول", en: "Solutions" },
  title: {
    ar: "أربعة خطوط كواشف، كل خط يُسعَّر وحده.",
    en: "Four reagent lines, each quoted on its own.",
  },
  lede: {
    ar: "اختر الخط، أضف صنفه إلى الطلب، ثم أرسله على واتساب أو البريد.",
    en: "Pick the line, add its item to the quote, then send it on WhatsApp or email.",
  },
  blocks: [
    {
      id: "ise",
      title: { ar: "أيونات على محلل ISE", en: "Ions on an ISE analyzer" },
      body: {
        ar: "كواشف الأقطاب الانتقائية للمحلل المتوافق. قائمة الأيونات تُكتب في الطلب.",
        en: "Ion-selective reagents for the compatible analyzer. The ion menu is written on the request.",
      },
      slugs: ["ise-reagent"],
    },
    {
      id: "hba1c",
      title: { ar: "هيموغلوبين سكري بـ HPLC", en: "Glycated hemoglobin by HPLC" },
      body: {
        ar: "كواشف الفصل لقياس G. hemoglobin. مكوّنات الطقم تُفصَّل في عرض السعر.",
        en: "Chromatography reagents for G. hemoglobin. Set components are itemized in the quotation.",
      },
      slugs: ["hplc-g-hemoglobin"],
    },
    {
      id: "diff",
      title: { ar: "عدّ تفريقي خماسي", en: "Five-part differential" },
      body: {
        ar: "مخفف ومحلول حلّ وشطف. اكتب طراز العدّاد في الرسالة حتى نحدد العبوة.",
        en: "Diluent, lyse, and rinse. Name the counter model in the message so the pack can be sized.",
      },
      slugs: ["five-diff-reagent"],
    },
    {
      id: "pcr",
      title: { ar: "تفاعل PCR", en: "PCR" },
      body: {
        ar: "محاليل ومزائج تضخيم. الهدف والبروتوكول يُتفق عليهما كتابةً، ولا يُعرضان كادعاء عام.",
        en: "Amplification solutions and mixes. Target and protocol are agreed in writing, not posted as a general claim.",
      },
      slugs: ["pcr-solutions"],
    },
  ],
};

export const qualityCopy = {
  kicker: { ar: "نظام الجودة", en: "Quality system" },
  title: { ar: "ما يسافر مع التشغيلة أهم مما يُكتب على الغلاف.", en: "What travels with the lot matters more than the cover line." },
  lede: {
    ar: "نشتغل بنظام جودة لتصنيع الكواشف والأجهزة: مواصفة، تتبع، فحص، وإفراج. الشهادات تُشارك نسخها مع ملف التسعير، ولا نعرض أرقام اعتماد يتيمة على الموقع.",
    en: "We run a quality system for reagent and device manufacture: specification, traceability, testing, and release. Certificate copies travel in the quotation file. Orphan registration numbers are not posted on the site.",
  },
  pillars: [
    {
      title: { ar: "تتبع التشغيلة", en: "Lot traceability" },
      body: { ar: "رقم واحد من المواد الداخلة حتى العبوة التي تصل المعمل.", en: "One number from incoming materials to the pack that reaches the laboratory." },
    },
    {
      title: { ar: "فحص وإفراج", en: "Test and release" },
      body: { ar: "التشغيلة تُفحص مقابل خطتها. جهاز لا يُشحن إذا سقط بند في قائمة الفحص.", en: "A lot is tested against its plan. An instrument does not ship if an inspection item fails." },
    },
    {
      title: { ar: "ثبات موثّق", en: "Documented stability" },
      body: { ar: "مدد الحفظ بعد الفتح تُكتب في النشرة، لا تُقدَّر في محادثة بيع.", en: "In-use stability is written in the insert, not estimated in a sales call." },
    },
    {
      title: { ar: "اقتران الجهاز بالكاشف", en: "Instrument pairing" },
      body: { ar: "ملاحظة التطبيق تحدد البارامترات. تغيير الكاشف يعني مراجعة الملاحظة.", en: "The application note sets parameters. Changing reagent means reviewing that note." },
    },
  ],
  docsTitle: { ar: "ما يُطلب مع عرض السعر", en: "What arrives with a quotation" },
  docs: [
    { ar: "نشرة الاستخدام للصنف", en: "Instructions for use" },
    { ar: "شهادة تحليل للتشغيلة المتاحة", en: "Certificate of analysis for the available lot" },
    { ar: "صحيفة سلامة عند اللزوم", en: "Safety data sheet when required" },
    { ar: "ملخص ثبات أو ورقة قيم للضوابط", en: "Stability summary or control value sheet" },
    { ar: "ملاحظة تطبيق إذا كان الجهاز جزءًا من التوريد", en: "Application note when an instrument is part of the supply" },
  ],
  note: {
    ar: "هذا الموقع كتالوج تعريفي. المواصفات النهائية هي ما يُطبع على التشغيلة التي تشتريها.",
    en: "This site is an introductory catalog. Final specifications are what is printed on the lot you buy.",
  },
};

export const contactCopy = {
  kicker: { ar: "الطلبات", en: "Inquiries" },
  title: { ar: "أرسل طلب التسعير.", en: "Send the quotation request." },
  lede: {
    ar: "النموذج يراجع البيانات ثم يفتح واتساب أو بريدًا جاهزًا إلى مونوكروم. الأصناف التي تضيفها تبقى في هذا المتصفح.",
    en: "The form checks the fields, then opens a ready WhatsApp chat or email to MonoChrome. Items you add stay in this browser.",
  },
  name: { ar: "الاسم", en: "Name" },
  org: { ar: "المعمل أو الشركة", en: "Laboratory or company" },
  email: { ar: "البريد", en: "Email" },
  phone: { ar: "الهاتف", en: "Phone" },
  country: { ar: "الدولة", en: "Country" },
  interest: { ar: "الاهتمام", en: "Interest" },
  message: { ar: "حجم الاستهلاك أو السؤال", en: "Volume or question" },
  optional: { ar: "اختياري", en: "Optional" },
  submit: { ar: "تجهيز الرسالة", en: "Prepare the message" },
  whatsapp: { ar: "أرسل على واتساب", en: "Send on WhatsApp" },
  mail: { ar: "أرسل بالبريد", en: "Send by email" },
  reach: { ar: "التواصل المباشر", en: "Direct contact" },
  list: { ar: "أصناف في الطلب", en: "Items in the quote" },
  emptyList: { ar: "لم تُضف أصنافًا بعد. يمكن إرسال استفسار عام بدونها.", en: "No items yet. A general inquiry can still be prepared." },
  remove: { ar: "إزالة", en: "Remove" },
  ready: { ar: "الملخص جاهز", en: "Summary ready" },
  copy: { ar: "نسخ الملخص", en: "Copy summary" },
  copied: { ar: "نُسخ", en: "Copied" },
  reset: { ar: "طلب جديد", en: "New inquiry" },
  errors: {
    name: { ar: "اكتب الاسم.", en: "Enter a name." },
    org: { ar: "اكتب اسم الجهة.", en: "Enter the organization." },
    email: { ar: "البريد غير مكتمل.", en: "The email looks incomplete." },
    country: { ar: "اكتب الدولة.", en: "Enter the country." },
    message: { ar: "اكتب سطرًا عن الاحتياج، ثمانية أحرف على الأقل.", en: "Write at least a short line about the need." },
  },
};

export const footerCopy = {
  disclaimer: {
    ar: "الكتالوج تعريفي. الأداء والشهادات وأرقام الاعتماد تُقرأ من مستندات التشغيلة المسلّمة مع عرض السعر، لا من صور الموقع.",
    en: "The catalog is introductory. Performance, certificates, and registration numbers are read from the lot documents supplied with a quotation, not from photographs on this site.",
  },
  made: {
    ar: "كواشف ISE وHPLC للهيموغلوبين السكري، وكواشف العدّ التفريقي الخماسي، ومحاليل PCR.",
    en: "ISE reagents, HPLC reagents for glycated hemoglobin, 5-diff reagents, and PCR solutions.",
  },
};
