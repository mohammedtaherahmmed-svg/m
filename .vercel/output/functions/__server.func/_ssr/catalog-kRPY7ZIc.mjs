//#region node_modules/.nitro/vite/services/ssr/assets/catalog-kRPY7ZIc.js
var photoCaption = {
	ar: "صورة تمثيلية لطابع المنتج، وليست بديلاً عن ورقة البيانات.",
	en: "Representative photograph of the product character, not a substitute for the data sheet."
};
var families = [
	{
		id: "chemistry",
		code: "MC-CH",
		name: {
			ar: "كيمياء سريرية",
			en: "Clinical chemistry"
		},
		blurb: {
			ar: "كواشف ضوئية وإنزيمية للتحاليل الروتينية، بعبوات تناسب الأجهزة المفتوحة.",
			en: "Photometric and enzymatic reagents for routine chemistry on open analyzers."
		}
	},
	{
		id: "immunoassay",
		code: "MC-IM",
		name: {
			ar: "مقايسات مناعية",
			en: "Immunoassay"
		},
		blurb: {
			ar: "أطقم إليزا ومكوّنات كشف للوحات الهرمونات والعدوى والواسمات.",
			en: "ELISA kits and detection components for hormones, infection, and markers."
		}
	},
	{
		id: "hematology",
		code: "MC-HM",
		name: {
			ar: "أمراض الدم",
			en: "Hematology"
		},
		blurb: {
			ar: "مخففات ومحاليل حلّ وشطف متوافقة مع عدّادات خلايا الدم.",
			en: "Diluents, lyse, and rinse matched to hematology cell counters."
		}
	},
	{
		id: "rapid",
		code: "MC-RT",
		name: {
			ar: "اختبارات سريعة",
			en: "Rapid tests"
		},
		blurb: {
			ar: "كاسيتات تدفق جانبي للقراءة البصرية في نقطة الرعاية والمختبر.",
			en: "Lateral-flow cassettes for visual reading at the point of care and in the lab."
		}
	},
	{
		id: "instruments",
		code: "MC-AN",
		name: {
			ar: "أجهزة معملية",
			en: "Instruments"
		},
		blurb: {
			ar: "محللات منضدية للكيمياء وأمراض الدم، مع كواشف من نفس المصدر.",
			en: "Benchtop chemistry and hematology analyzers, with reagents from the same maker."
		}
	},
	{
		id: "controls",
		code: "MC-QC",
		name: {
			ar: "ضوابط ومعايرات",
			en: "Controls & calibrators"
		},
		blurb: {
			ar: "مواد ضبط ومعايرة مربوطة بالتشغيلة، تُطلب مع الكاشف لا بمعزل عنه.",
			en: "Lot-linked control and calibrator materials, ordered with the reagent."
		}
	},
	{
		id: "oem",
		code: "MC-OEM",
		name: {
			ar: "توريد OEM",
			en: "OEM supply"
		},
		blurb: {
			ar: "كواشف سائبة ومكوّنات تعبئة لمصنّعي الأجهزة تحت مواصفة متفق عليها.",
			en: "Bulk reagents and fill components for instrument makers, to an agreed spec."
		}
	}
];
var products = [
	{
		slug: "chemistry-line",
		code: "MC-CH-100",
		family: "chemistry",
		name: {
			ar: "خط كواشف الكيمياء السريرية",
			en: "Clinical chemistry reagent line"
		},
		summary: {
			ar: "قائمة روتينية للجلوكوز ووظائف الكبد والكلى والدهون، بصيغ R1/R2 للأجهزة المفتوحة.",
			en: "A routine menu for glucose, liver, kidney, and lipids, in R1/R2 formats for open systems."
		},
		intended: {
			ar: "للاستخدام التشخيصي المختبري داخل المعامل السريرية، كجزء من لوحة كيمياء يومية. الأداء الفعلي يُقرأ من نشرة الصنف وبيانات التشغيلة، لا من هذا الكتالوج.",
			en: "For in-vitro diagnostic use in clinical laboratories as part of a daily chemistry menu. Actual performance is read from the insert and the lot file, not from this catalog."
		},
		image: "/media/reagents.jpg",
		formats: [
			{
				ar: "عبوات محلل مفتوح",
				en: "Open-analyzer bottles"
			},
			{
				ar: "أطقم ثنائية الكاشف",
				en: "Two-reagent kits"
			},
			{
				ar: "تعبئة بالجملة حسب الاتفاق",
				en: "Bulk fill by agreement"
			}
		],
		specs: [
			{
				label: {
					ar: "العينة",
					en: "Specimen"
				},
				value: {
					ar: "مصل أو بلازما، حسب الصنف",
					en: "Serum or plasma, assay dependent"
				}
			},
			{
				label: {
					ar: "المبدأ",
					en: "Principle"
				},
				value: {
					ar: "قياس ضوئي إنزيمي أو لوني",
					en: "Enzymatic or colorimetric photometry"
				}
			},
			{
				label: {
					ar: "الحفظ",
					en: "Storage"
				},
				value: {
					ar: "عادة 2–8°م حتى تاريخ التشغيلة",
					en: "Typically 2–8°C until the lot date"
				}
			},
			{
				label: {
					ar: "التوثيق",
					en: "Documents"
				},
				value: {
					ar: "نشرة استخدام وشهادة تحليل لكل تشغيلة",
					en: "IFU and certificate of analysis per lot"
				}
			},
			{
				label: {
					ar: "الاقتران",
					en: "Pairing"
				},
				value: {
					ar: "بارامترات مفتوحة على محللات متوافقة",
					en: "Open parameters on compatible analyzers"
				}
			}
		],
		points: [
			{
				ar: "نفس مصدر الجهاز عندما تُشغَّل على خط MC-CA.",
				en: "Same maker as the instrument when run on the MC-CA line."
			},
			{
				ar: "كل تشغيلة تحمل رقمًا يظهر على العبوة وملف الجودة.",
				en: "Every lot carries a number on the bottle and in the quality file."
			},
			{
				ar: "القائمة تُفصَّل في عرض السعر: إنزيمات، ركائز، ومعايرات.",
				en: "The quotation itemizes enzymes, substrates, and calibrators."
			}
		]
	},
	{
		slug: "immunoassay-line",
		code: "MC-IM-240",
		family: "immunoassay",
		name: {
			ar: "خط المقايسة المناعية",
			en: "Immunoassay reagent line"
		},
		summary: {
			ar: "أطقم إليزا ومكوّنات كشف للوحات تُبنى حسب احتياج المعمل، مع ضوابط داخلية في الطقم.",
			en: "ELISA kits and detection components built to the laboratory menu, with in-kit controls."
		},
		intended: {
			ar: "مساعدة المختبر على قياس محللات مناعية في عينات بشرية وفق بروتوكول النشرة. لا تُستخدم النتيجة وحدها لاتخاذ قرار علاجي.",
			en: "Helps the laboratory measure immunoassay analytes in human specimens per the insert protocol. A result is not used on its own to make a treatment decision."
		},
		image: "/media/controls.jpg",
		formats: [{
			ar: "شريحة 96 بئرًا",
			en: "96-well plate"
		}, {
			ar: "مكوّنات منفصلة للدمج",
			en: "Separate components for integration"
		}],
		specs: [
			{
				label: {
					ar: "المنصة",
					en: "Platform"
				},
				value: {
					ar: "إليزا، قراءة نقطة نهاية أو حركية",
					en: "ELISA, endpoint or kinetic read"
				}
			},
			{
				label: {
					ar: "العينة",
					en: "Specimen"
				},
				value: {
					ar: "مصل أو بلازما حسب الصنف",
					en: "Serum or plasma, assay dependent"
				}
			},
			{
				label: {
					ar: "الحفظ",
					en: "Storage"
				},
				value: {
					ar: "2–8°م، بعيدًا عن التجميد المتكرر",
					en: "2–8°C, avoid repeated freeze"
				}
			},
			{
				label: {
					ar: "الضبط",
					en: "Control"
				},
				value: {
					ar: "ضوابط داخل الطقم بالإضافة إلى مواد MC-QC",
					en: "In-kit controls plus MC-QC materials"
				}
			},
			{
				label: {
					ar: "التوثيق",
					en: "Documents"
				},
				value: {
					ar: "بروتوكول، منحنى معياري، وشهادة تشغيلة",
					en: "Protocol, standard curve, and lot certificate"
				}
			}
		],
		points: [
			{
				ar: "اللوحة تُجمع مع الموزع: لا نعرض ادعاءات حساسية عامة في الكتالوج.",
				en: "The panel is agreed with the distributor. The catalog states no blanket sensitivity claim."
			},
			{
				ar: "كل بئر وضابط يُتتبّع إلى التشغيلة المطبوعة.",
				en: "Wells and controls trace to the printed lot."
			},
			{
				ar: "يمكن توريد المكوّنات سائبة تحت مسار OEM.",
				en: "Components can ship in bulk under the OEM path."
			}
		]
	},
	{
		slug: "hematology-reagents",
		code: "MC-HM-310",
		family: "hematology",
		name: {
			ar: "كواشف عدّ الدم",
			en: "Hematology system reagents"
		},
		summary: {
			ar: "مخفف، محلول حلّ، وشطف لعدّادات خلايا الدم، مع إرشادات اقتران للمحلل.",
			en: "Diluent, lyse, and rinse for blood cell counters, with analyzer pairing notes."
		},
		intended: {
			ar: "لتحضير وقياس عينات الدم الكامل على عدّادات متوافقة ضمن نطاق النشرة الفنية للصنف.",
			en: "For preparing and measuring whole-blood samples on compatible counters, within the assay’s technical insert."
		},
		image: "/media/reagents.jpg",
		formats: [{
			ar: "جراكن مختبر",
			en: "Laboratory cubitainers"
		}, {
			ar: "عبوات محلل مغلقة عند الطلب",
			en: "Closed analyzer packs on request"
		}],
		specs: [
			{
				label: {
					ar: "العينة",
					en: "Specimen"
				},
				value: {
					ar: "دم كامل على مانع التخثر المحدد",
					en: "Whole blood on the stated anticoagulant"
				}
			},
			{
				label: {
					ar: "المكوّنات",
					en: "Set"
				},
				value: {
					ar: "مخفف، حلّ، شطف",
					en: "Diluent, lyse, rinse"
				}
			},
			{
				label: {
					ar: "الحفظ",
					en: "Storage"
				},
				value: {
					ar: "درجة الغرفة أو 2–8°م حسب الصنف",
					en: "Room temperature or 2–8°C by item"
				}
			},
			{
				label: {
					ar: "الاقتران",
					en: "Pairing"
				},
				value: {
					ar: "ملاحظة تطبيق مع خط MC-HA أو جهاز متوافق",
					en: "Application note with MC-HA or a compatible counter"
				}
			},
			{
				label: {
					ar: "التوثيق",
					en: "Documents"
				},
				value: {
					ar: "نشرة، SDS، وشهادة تشغيلة",
					en: "Insert, SDS, and lot certificate"
				}
			}
		],
		points: [
			{
				ar: "لا يُخلط مخفف تشغيلة مع محلول حلّ من تشغيلة غير موصى بها.",
				en: "Do not mix a diluent lot with a lyse lot outside the recommended pair."
			},
			{
				ar: "خلفية العدّ تُراجع بمواد الضبط قبل إفراج النتائج.",
				en: "Background counts are checked with control material before release."
			},
			{
				ar: "أحجام العبوات تُحدد في عرض السعر حسب استهلاك المعمل.",
				en: "Pack sizes are set in the quotation to the laboratory’s consumption."
			}
		]
	},
	{
		slug: "rapid-cassettes",
		code: "MC-RT-410",
		family: "rapid",
		name: {
			ar: "كاسيتات الاختبار السريع",
			en: "Rapid diagnostic cassettes"
		},
		summary: {
			ar: "اختبارات تدفق جانبي للقراءة البصرية، كل كاسيت مغلف ومعرّف بتشغيلته.",
			en: "Lateral-flow tests for visual reading. Each cassette is pouched and lot-identified."
		},
		intended: {
			ar: "فحص نوعي سريع يساعد المختبر أو عيادة نقطة الرعاية. النتيجة خط بصري تُفسَّر حسب النشرة، وتُؤكد عند اللزوم بطريقة مختبرية.",
			en: "A rapid qualitative screen for the laboratory or point-of-care clinic. The line is read per the insert and confirmed by a laboratory method when required."
		},
		image: "/media/rapid.jpg",
		formats: [{
			ar: "كاسيت مغلف فرديًا",
			en: "Individually pouched cassette"
		}, {
			ar: "علبة مع قطارات ونشرة",
			en: "Kit with pipettes and insert"
		}],
		specs: [
			{
				label: {
					ar: "المبدأ",
					en: "Principle"
				},
				value: {
					ar: "تدفق جانبي مناعي",
					en: "Immunochromatographic lateral flow"
				}
			},
			{
				label: {
					ar: "القراءة",
					en: "Read"
				},
				value: {
					ar: "بصرية خلال النافذة الزمنية في النشرة",
					en: "Visual, inside the insert time window"
				}
			},
			{
				label: {
					ar: "الحفظ",
					en: "Storage"
				},
				value: {
					ar: "جاف، ضمن مدى الحرارة المكتوب على الكيس",
					en: "Dry, inside the temperature range on the pouch"
				}
			},
			{
				label: {
					ar: "الضبط",
					en: "Control"
				},
				value: {
					ar: "خط ضبط داخلي في كل كاسيت",
					en: "Internal control line on every cassette"
				}
			},
			{
				label: {
					ar: "التوثيق",
					en: "Documents"
				},
				value: {
					ar: "نشرة استخدام وشهادة تشغيلة",
					en: "IFU and lot certificate"
				}
			}
		],
		points: [
			{
				ar: "أسماء المحللات تُحدد في الاتفاقية. الكتالوج لا يسرد ادعاءات أداء رقمية.",
				en: "Analyte names are fixed in the agreement. The catalog lists no numeric performance claims."
			},
			{
				ar: "الكيس المفتوح خارج الوقت المحدد لا يُقرأ.",
				en: "A pouch opened past the stated time is not read."
			},
			{
				ar: "مناسب لموزعين يريدون خط نقطة رعاية بجانب الكيمياء.",
				en: "Fits distributors who want a point-of-care line beside chemistry."
			}
		]
	},
	{
		slug: "chemistry-analyzer",
		code: "MC-CA200",
		family: "instruments",
		name: {
			ar: "محلل الكيمياء المنضدي",
			en: "Benchtop chemistry analyzer"
		},
		summary: {
			ar: "محلل منضدي للقياس الضوئي، يُعرض مع كواشف MC-CH وبارامترات تطبيق مكتوبة.",
			en: "A benchtop photometric analyzer, offered with MC-CH reagents and written application parameters."
		},
		intended: {
			ar: "لتشغيل فحوصات الكيمياء السريرية في المعامل صغيرة ومتوسطة الحجم. التركيب والتدريب جزء من ملف التوريد لاحقًا.",
			en: "Runs clinical chemistry assays in small and mid-size laboratories. Installation and training sit in the supply file, not in a storefront checkout."
		},
		image: "/media/analyzer.jpg",
		formats: [{
			ar: "جهاز مع طقم بدء تشغيل",
			en: "Instrument with a start-up kit"
		}, {
			ar: "جهاز فقط للموزع الذي يملك الكاشف",
			en: "Instrument only, for a distributor who holds reagent"
		}],
		specs: [
			{
				label: {
					ar: "القياس",
					en: "Read"
				},
				value: {
					ar: "ضوئي، بارامترات مفتوحة",
					en: "Photometric, open parameters"
				}
			},
			{
				label: {
					ar: "الكاشف",
					en: "Reagent"
				},
				value: {
					ar: "خط MC-CH أو كاشف متوافق موثّق",
					en: "MC-CH line or a documented compatible reagent"
				}
			},
			{
				label: {
					ar: "التشغيل",
					en: "Use"
				},
				value: {
					ar: "منضدي، داخل المختبر",
					en: "Benchtop, inside the laboratory"
				}
			},
			{
				label: {
					ar: "التوثيق",
					en: "Documents"
				},
				value: {
					ar: "دليل مشغّل، قائمة صيانة، وملاحظة تطبيق",
					en: "Operator manual, service list, application note"
				}
			},
			{
				label: {
					ar: "التوريد",
					en: "Supply"
				},
				value: {
					ar: "عرض سعر منفصل للجهاز والكاشف والتركيب",
					en: "Separate quotation lines for instrument, reagent, install"
				}
			}
		],
		points: [
			{
				ar: "الشاشة في الصور تمثيلية. الواجهة الفعلية تُعرض في ملف الجهاز.",
				en: "Screens in photographs are representative. The real interface is in the instrument file."
			},
			{
				ar: "لا نفصل بيع الجهاز عن مسار الكاشف إلا باتفاق مكتوب.",
				en: "We do not split the instrument from a reagent path unless the agreement says so."
			},
			{
				ar: "الصيانة الدورية مذكورة في عرض السعر، لا كوعد مفتوح.",
				en: "Scheduled service is named in the quotation, not left as an open promise."
			}
		]
	},
	{
		slug: "hematology-analyzer",
		code: "MC-HA320",
		family: "instruments",
		name: {
			ar: "عدّاد الدم المنضدي",
			en: "Benchtop hematology analyzer"
		},
		summary: {
			ar: "عدّاد خلايا منضدي يُشغَّل مع ثلاثية MC-HM: مخفف، حلّ، وشطف.",
			en: "A benchtop cell counter run with the MC-HM trio: diluent, lyse, and rinse."
		},
		intended: {
			ar: "عدّ مكوّنات الدم الكامل في المختبر السريري وفق مواصفات الجهاز الواردة في دليل المشغّل.",
			en: "Counts whole-blood components in the clinical laboratory per the specifications in the operator manual."
		},
		image: "/media/lab.jpg",
		formats: [{
			ar: "جهاز مع كواشف البدء",
			en: "Instrument with starting reagents"
		}, {
			ar: "عقد كاشف لاحق بحجم الاستهلاك",
			en: "Follow-on reagent agreement by volume"
		}],
		specs: [
			{
				label: {
					ar: "العينة",
					en: "Specimen"
				},
				value: {
					ar: "دم كامل",
					en: "Whole blood"
				}
			},
			{
				label: {
					ar: "الكاشف",
					en: "Reagent"
				},
				value: {
					ar: "ثلاثية MC-HM الموصى بها",
					en: "Recommended MC-HM trio"
				}
			},
			{
				label: {
					ar: "الضبط",
					en: "Control"
				},
				value: {
					ar: "مواد MC-QC قبل إفراج الوردية",
					en: "MC-QC materials before the shift is released"
				}
			},
			{
				label: {
					ar: "التوثيق",
					en: "Documents"
				},
				value: {
					ar: "دليل، مخطط صيانة، وشهادة توريد",
					en: "Manual, maintenance plan, supply certificate"
				}
			},
			{
				label: {
					ar: "المكان",
					en: "Setting"
				},
				value: {
					ar: "مختبر مستشفى أو معمل خاص",
					en: "Hospital laboratory or private lab"
				}
			}
		],
		points: [
			{
				ar: "الصورة تُظهر منضدة المختبر لا رسمًا هندسيًا للجهاز.",
				en: "The photograph shows a laboratory bench, not an engineering drawing of the unit."
			},
			{
				ar: "خلفية العدّ وحدود الضبط تُسلَّم مع التدريب.",
				en: "Background limits and control ranges ship with training."
			},
			{
				ar: "الاستهلاك الشهري للكاشف يُحسب مع الموزع قبل التعاقد.",
				en: "Monthly reagent use is calculated with the distributor before contract."
			}
		]
	},
	{
		slug: "controls-calibrators",
		code: "MC-QC-500",
		family: "controls",
		name: {
			ar: "ضوابط ومعايرات",
			en: "Controls and calibrators"
		},
		summary: {
			ar: "مواد ضبط ومعايرة تحمل قيمًا خاصة بالتشغيلة، تُشحن مع الكاشف الذي تخدمه.",
			en: "Control and calibrator materials with lot-specific values, shipped with the reagent they serve."
		},
		intended: {
			ar: "لمراقبة ثبات الطريقة ومعايرة القياس داخل المختبر. القيم المطبوعة على العبوة هي المرجع، لا أرقام الكتالوج.",
			en: "For monitoring method stability and calibrating the measurement in the laboratory. Values printed on the vial are the reference, not catalog numbers."
		},
		image: "/media/controls.jpg",
		formats: [{
			ar: "مستويات ضبط متعددة",
			en: "Multi-level controls"
		}, {
			ar: "معاير سائل أو مجفف حسب الصنف",
			en: "Liquid or lyophilized calibrator by item"
		}],
		specs: [
			{
				label: {
					ar: "الربط",
					en: "Link"
				},
				value: {
					ar: "كل عبوة إلى تشغيلة كاشف مذكورة",
					en: "Each vial to a named reagent lot"
				}
			},
			{
				label: {
					ar: "القيم",
					en: "Values"
				},
				value: {
					ar: "ورقة قيم مرافقة للتشغيلة",
					en: "Assay sheet shipped with the lot"
				}
			},
			{
				label: {
					ar: "الحفظ",
					en: "Storage"
				},
				value: {
					ar: "حسب ملصق العبوة بعد الفتح",
					en: "Per the vial label after opening"
				}
			},
			{
				label: {
					ar: "الاستخدام",
					en: "Use"
				},
				value: {
					ar: "مع الكيمياء أو أمراض الدم أو المناعة",
					en: "With chemistry, hematology, or immunoassay"
				}
			},
			{
				label: {
					ar: "التوثيق",
					en: "Documents"
				},
				value: {
					ar: "ورقة قيم وشهادة تحليل",
					en: "Value sheet and certificate of analysis"
				}
			}
		],
		points: [
			{
				ar: "لا ننشر نطاقات رقمية ثابتة هنا لأنها تتغير مع التشغيلة.",
				en: "We do not publish fixed numeric ranges here; they change with the lot."
			},
			{
				ar: "المعمل يرفض النتيجة إذا خرج الضبط عن ورقته.",
				en: "The laboratory rejects a run when the control leaves its sheet."
			},
			{
				ar: "تُطلب مع الكاشف حتى يبقى الملف واحدًا.",
				en: "Order them with the reagent so the file stays singular."
			}
		]
	},
	{
		slug: "oem-bulk",
		code: "MC-OEM-700",
		family: "oem",
		name: {
			ar: "كواشف سائبة للمصنّعين",
			en: "Bulk reagents for OEMs"
		},
		summary: {
			ar: "تصنيع وتعبئة كواشف وأجهزة مكوّنة وفق مواصفة مكتوبة لمصنّع جهاز أو علامة موزع.",
			en: "Manufacture and fill of reagents and configured devices to a written spec for an instrument maker or a distributor brand."
		},
		intended: {
			ar: "توريد مواد وسيطة أو منتج نهائي يوضع عليه اسم الشريك بعد اتفاق الجودة والتعبئة. ليس منتجًا للبيع المباشر للمريض.",
			en: "Supply of intermediates or finished goods labeled for the partner after a quality and pack agreement. Not a product sold directly to a patient."
		},
		image: "/media/lab.jpg",
		formats: [{
			ar: "سائب في عبوات إنتاج",
			en: "Bulk in production containers"
		}, {
			ar: "تعبئة نهائية بعلامة الشريك",
			en: "Finished pack under the partner mark"
		}],
		specs: [
			{
				label: {
					ar: "المواصفة",
					en: "Spec"
				},
				value: {
					ar: "وثيقة اتفاق قبل أول تشغيلة",
					en: "Agreement document before the first lot"
				}
			},
			{
				label: {
					ar: "السرّية",
					en: "Confidentiality"
				},
				value: {
					ar: "تركيبة الشريك لا تُعرض في الكتالوج",
					en: "The partner formula is not shown in the catalog"
				}
			},
			{
				label: {
					ar: "الإفراج",
					en: "Release"
				},
				value: {
					ar: "فحص وفق خطة الجودة المتفق عليها",
					en: "Testing against the agreed quality plan"
				}
			},
			{
				label: {
					ar: "التتبع",
					en: "Trace"
				},
				value: {
					ar: "رقم تشغيلة من المادة حتى العبوة",
					en: "Lot number from material to pack"
				}
			},
			{
				label: {
					ar: "الحد الأدنى",
					en: "Minimum"
				},
				value: {
					ar: "يُحدد في العرض حسب الصنف",
					en: "Set in the quotation by item"
				}
			}
		],
		points: [
			{
				ar: "المسار يبدأ بمواصفة لا بطلب كمية فقط.",
				en: "The path starts with a specification, not a quantity alone."
			},
			{
				ar: "يمكن أن يشمل الجهاز إذا كان ضمن التوريد المتفق عليه.",
				en: "An instrument can be included when it is part of the agreed supply."
			},
			{
				ar: "مستندات الإفراج تذهب إلى الشريك مع كل تشغيلة.",
				en: "Release documents go to the partner with every lot."
			}
		]
	}
];
var interests = [
	...families.map((family) => ({
		id: family.id,
		label: family.name
	})),
	{
		id: "distribution",
		label: {
			ar: "شراكة توزيع",
			en: "Distribution partnership"
		}
	},
	{
		id: "general",
		label: {
			ar: "استفسار عام",
			en: "General inquiry"
		}
	}
];
function familyById(id) {
	const family = families.find((item) => item.id === id);
	if (!family) throw new Error(`Unknown family ${id}`);
	return family;
}
function productBySlug(slug) {
	return products.find((item) => item.slug === slug);
}
function relatedProducts(slug) {
	const current = productBySlug(slug);
	if (!current) return [];
	return products.filter((item) => item.slug !== slug && item.family === current.family).concat(products.filter((item) => item.slug !== slug && item.family !== current.family)).slice(0, 3);
}
function filterProducts(family, q) {
	const query = q.trim().toLowerCase();
	return products.filter((product) => {
		if (!(family === "all" || product.family === family)) return false;
		if (!query) return true;
		return [
			product.code,
			product.name.ar,
			product.name.en,
			product.summary.ar,
			product.summary.en
		].join(" ").toLowerCase().includes(query);
	});
}
var brand = {
	en: "MonoChrome",
	ar: "مونوكروم",
	line: "For IVD Solutions",
	lineAr: "لحلول التشخيص المختبري"
};
function brandName(lang) {
	return lang === "ar" ? brand.ar : brand.en;
}
//#endregion
export { filterProducts as a, productBySlug as c, familyById as i, products as l, brandName as n, interests as o, families as r, photoCaption as s, brand as t, relatedProducts as u };
