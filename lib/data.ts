export type Speaker = {
  id: string;
  name: string;
  title: string;
  credentials: string;
  bio: string;
  biohtml: string;
  research: string;
  webinarId: string;
  image: string;
};

export type Webinar = {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  date: string;
  time: string;
  speakerId: string;
  registrationLink: string;
  learningObjectives: string[];
  /** True while the session title/abstract/objectives are still to be announced. */
  tba?: boolean;
  details: {
    cost: string;
    audience: string;
    format: string;
  };
};

export type FAQ = {
  question: string;
  answer: string;
};

export type CeCredit = {
  body: string;
  detail: string;
  pending?: boolean;
  /** Rendered as a footnote below the credit cards rather than as a card. */
  note?: boolean;
};

/* -------------------------------------------------------------------------- */
/*  Event configuration — AWHS 2026                                            */
/*                                                                             */
/*  ⚠️ DRAFT: the TODOs below are awaiting confirmation from NFH.               */
/*  Filling in a value automatically enables the matching UI (register          */
/*  buttons, early-bird banner). No other edits needed.                         */
/* -------------------------------------------------------------------------- */
export const event = {
  /** 13th annual symposium. */
  edition: 13,
  editionOrdinal: "13th",
  date: "October 23, 2026",
  time: "9:50 AM – 4:10 PM EDT",

  // Live 2026 GoToWebinar registration. Setting this to null again would grey
  // out every Register button and restore the "Registration opening soon" note.
  // Organizer dashboard: https://dashboard.gotowebinar.com/webinar/6746566421975507804
  registrationLink:
    "https://attendee.gotowebinar.com/register/6746566421975507804" as
      | string
      | null,

  // TODO(NFH): early-bird cut-off date, e.g. "September 17, 2026".
  earlyBirdDeadline: null as string | null,
  // TODO(NFH): what registrants receive — the 2025 gift package is being replaced.
  earlyBirdReward: null as string | null,

  // NFH Learning Portal — past symposium recordings.
  learningPortalLink: "https://nfh.ca/learning-portal/" as string | null,

  // TODO(NFH): pricing still to be confirmed — figures below are from the 2026 copy.
  pricing: {
    practitioner: { label: "Practitioners", amount: "$ 59", currency: "CAD" },
    student: {
      label: "Students",
      amount: "$ 28",
      currency: "CAD",
      promoCode: "STUDENT",
    },
    note: "Taxes included (for Canadian residents only)",
  },

  ceCredits: [
    {
      body: "CONO",
      detail: "Category A – 5.00 credits; 4.75 (General), 0.25 (Pharmacology)",
      pending: true,
    },
    {
      body: "British Columbia",
      detail: "Category C – 5.00 credits",
      pending: false,
    },
    {
      body: "AANP",
      detail: "5.00 credits; 4.75 (General), 0.25 (Pharmacy)",
      pending: true,
    },
    {
      body: "OANP/OBNM",
      detail:
        "For Oregon attendees seeking OBNM approved CE credits, please note that this event has not been submitted for approval to the OBNM. CE certificate will be issued upon individual request.",
      note: true,
    },
  ] as CeCredit[],

  taglines: [
    "Advance your practice",
    "Empower your patients",
    "Transform women’s health",
  ],
};

export const speakers: Speaker[] = [
  {
    id: "dr-sarah-wilson",
    name: "Dr Sarah Wilson",
    title: "ND",
    credentials: "ND",
    bio: "Dr Sarah Wilson is a passionate naturopathic doctor, author, researcher, and clinical mentor dedicated to bridging evidence-based research with real-world patient care. As the Founder and Director of both Advanced Women’s Health and Advanced Men’s Health, she leads a thriving Canada-wide practice with clinic locations across Ontario and British Columbia.",
    biohtml: `
<p>
  Dr Sarah Wilson is a passionate naturopathic doctor, author, researcher, and clinical mentor dedicated to bridging evidence-based research with real-world patient care. After studying Human Kinetics and Nutraceutical Sciences at the University of Guelph, Dr Sarah transitioned from a research-focused career into naturopathic medicine to bring her scientific background directly into clinical practice.
</p>

<p>
  As the Founder and Director of both Advanced Women’s Health and Advanced Men’s Health, Dr Sarah leads a thriving Canada-wide practice, with clinic locations across Ontario and British Columbia, supporting men and women through a comprehensive, root-cause approach to health.
</p>

<p>
  She is also the founder of Naturopathic Clinical Mentorship, an educational platform dedicated to helping naturopathic doctors confidently integrate evidence-based treatment strategies into practice so both their patients and businesses can thrive.
</p>

<p>
  In addition, Dr Sarah founded In The Treatment Room, a case-based mentorship platform designed to help naturopathic doctors and students strengthen their clinical reasoning, deepen their understanding of complex cases, and learn the art of practice through real-world clinical application.
</p>
`,
    research: "Perimenopause and the neuroendocrine transition",
    webinarId: "rethinking-perimenopause",
    image: "/speakers/sarah-wilson.jpg",
  },
  {
    id: "dr-natalie-mulligan",
    name: "Dr Natalie Mulligan",
    title: "ND",
    credentials: "ND",
    bio: "Dr Natalie Mulligan, ND is the founder and clinical director of EatWell, a multidisciplinary eating disorder treatment centre. She has spent the past eight years building a team dedicated exclusively to the assessment and treatment of eating disorders, with a focus on compassionate, evidence-informed care for adolescents, adults, and their families.",
    biohtml: `
<p>
  Dr Natalie Mulligan, ND is the founder and clinical director of EatWell, a multidisciplinary eating disorder treatment centre. She has spent the past eight years building a team dedicated exclusively to the assessment and treatment of eating disorders, with a focus on providing compassionate, evidence-informed care for adolescents, adults, and their families.
</p>

<p>
  In addition to her clinical work, Natalie enjoys educating healthcare professionals on the recognition and multidisciplinary treatment of eating disorders.
</p>

<p>
  Natalie earned her Bachelor of Science from the University of Waterloo before completing her Doctor of Naturopathy at the Canadian College of Naturopathic Medicine in 2013.
</p>

<p>
  Outside of work, Natalie enjoys life on her small farm in Ontario with her husband, two daughters, dog, and flock of chickens. She loves gardening, reading, and making the most of a slower pace of life.
</p>
`,
    research: "Assessment and treatment of restrictive eating disorders",
    webinarId: "restrictive-eating-disorders",
    image: "/speakers/natalie-mulligan.jpg",
  },
  {
    id: "dr-tori-hudson",
    name: "Dr Tori Hudson",
    title: "ND",
    credentials: "ND",
    bio: "She is a Naturopathic Physician, graduated from the National University of Natural Medicine (NUNM) in 1984, and has served the college in several capacities, including: Medical Director, Associate Academic Dean, and Academic Dean. She is currently a clinical adjunct professor at NUNM, Sonoran University of Health Sciences, Bastyr University and the Canadian College of Naturopathic Medicine",
    biohtml: `
      <p>
  She is a naturopathic physician, graduated from the National University of Natural Medicine in 1984, and has served the college in several capacities, including medical director, associate academic dean, and academic dean.
</p>

<p>
  She is currently a clinical adjunct professor at the National University of Natural Medicine, Sonoran University of Health Sciences, Bastyr University, and the Canadian College of Naturopathic Medicine.
</p>

<p>
  Dr Hudson has been in practice for over 40 years. She is the medical director of her clinic, A Woman’s Time, in Portland, Oregon, and also serves as co-owner and director of product research and education for Vitanica, as well as program director for the Institute of Women’s Health and Integrative Medicine.
</p>

<p>
  She is the founder and co-director of the Naturopathic Education and Research Consortium, a nonprofit organization supporting accredited naturopathic residencies.
</p>

<p>
  Dr Hudson has been appointed as a faculty member of the Fellowship in Integrative Health and Medicine through the Academy of Integrative Health and Medicine, and the Andrew Weil Center for Integrative Medicine at the University of Arizona.
</p>

<p>
  Her awards include the 1990 President’s Award from the American Association of Naturopathic Physicians for her research in women’s health, the 1999 Naturopathic Physician of the Year award, the 2003 NUNM Alumni Pioneer Award, the 2009 Natural Products Association Pioneer Award, and induction into the NUNM Hall of Fame in 2012. In 2016, she was honored with the Oregon Association of Naturopathic Physicians’ Living Legends Award.
</p>

<p>
  In 2021, she received the 2020 American Botanical Council’s Fredi Kronenberg Award for Excellence in Research and Education in Botanicals in Women’s Health.
</p>

<p>
  She is a nationally recognized author of Women’s Encyclopedia of Natural Medicine and The Menopause Companion. Dr Hudson is also a speaker, educator, researcher, and clinician, serving on various editorial boards and advisory panels, and writing regularly for multiple publications.
</p>

    `,
    research: "Women’s health and botanical medicine",
    webinarId: "tori-hudson-session",
    image: "/speakers/tori-hudson.jpg",
  },
  {
    id: "dr-megan-taylor",
    name: "Dr Megan Taylor",
    title: "ND",
    credentials: "ND",
    bio: "Dr Megan Taylor is a naturopathic doctor and fellow of the American Board of Naturopathic Gastroenterology. She practices naturopathic gastroenterology for adult and pediatric patients at Neighborhood Naturopathic & Primary Care, her clinic in Seattle, WA, and serves as adjunct faculty at Bastyr University, teaching the gastroenterology curriculum.",
    biohtml: `
<p>
  Dr Megan Taylor is a naturopathic doctor and fellow of the American Board of Naturopathic Gastroenterology. Dr Taylor practices Naturopathic Gastroenterology for adults and pediatric patients at Neighborhood Naturopathic &amp; Primary Care, her clinic in Seattle, WA, where she also hosts a residency site.
</p>

<p>
  Dr Taylor earned her doctorate in naturopathic medicine from National University of Natural Medicine in Portland, OR. She completed two years of post-graduate residency training in primary care and naturopathic gastroenterology and is well-versed in the evaluation and management of digestive conditions, including common co-occurring conditions such as hEDS, MCAS, Long-COVID, and dysautonomia.
</p>

<p>
  Dr Taylor serves as adjunct faculty at Bastyr University, teaching the gastroenterology curriculum. She also teaches course series in Advanced GI topics for practitioners throughout the year at <a href="https://megantaylornd.com" target="_blank" rel="noopener noreferrer">megantaylornd.com</a>.
</p>

<p>
  She is a proud member and former board member of the Gastroenterology Association of Naturopathic Physicians (<a href="https://gastroanp.org" target="_blank" rel="noopener noreferrer">GastroANP.org</a>).
</p>
`,
    research: "Naturopathic gastroenterology",
    webinarId: "chronic-constipation",
    image: "/speakers/megan-taylor.jpg",
  },
];

export const webinars: Webinar[] = [
  {
    id: "rethinking-perimenopause",
    title:
      "Rethinking Perimenopause: Common Clinical Mistakes and Better Strategies",

    date: "October 23, 2026",
    time: "10:00 – 11:15 AM EDT",
    speakerId: "dr-sarah-wilson",
    registrationLink: "",

    description:
      "Perimenopause has become one of the fastest-growing areas of women’s health, accompanied by increasing use of hormone replacement therapy (HRT). While HRT is well supported for menopause, applying the same treatment strategies to perimenopause is far more nuanced. Rather than a simple hormone deficiency, perimenopause is a dynamic neuroendocrine transition with multiple underlying physiological patterns. Changes in communication between the hypothalamus, pituitary, and ovaries may present as altered GnRH signaling, follicle offloading, intermittent anovulation, exaggerated hormone fluctuations, or declining ovarian reserve. Although these patterns often produce similar symptoms, they require different clinical approaches. This session introduces a practical framework for identifying the physiological drivers of perimenopausal symptoms and demonstrates how they influence assessment, treatment selection, and the appropriate use of HRT. Drawing on current research and extensive clinical experience, participants will learn to distinguish common perimenopausal patterns, determine when HRT is appropriate, when alternative strategies should be prioritized, and develop individualized treatment plans that improve patient outcomes.",
    shortDescription:
      "A practical framework for identifying the physiological drivers of perimenopausal symptoms — and knowing when HRT is the right call.",

    learningObjectives: [
      "Differentiate the physiological differences between menopause and perimenopause and explain why management strategies cannot be directly extrapolated between the two",
      "Recognize the major biological patterns contributing to perimenopausal symptoms, including hypothalamic-pituitary-ovarian communication changes, GnRH dysregulation, follicle offloading, hormonal fluctuation, intermittent anovulation, and declining ovarian reserve",
      "Interpret clinical history, symptom patterns, and laboratory findings to distinguish common perimenopausal phenotypes and identify the most likely underlying mechanisms",
      "Apply an evidence-informed framework to determine when hormone replacement therapy is indicated, when it may be ineffective or inappropriate, and when alternative therapeutic strategies should be prioritized",
      "Develop individualized treatment plans that combine current research with practical clinical decision-making for patients experiencing the perimenopausal transition",
    ],
    details: {
      cost: "$59 CAD practitioners / $28 CAD students",
      audience: "Naturopathic doctors and integrative healthcare practitioners",
      format: "Live virtual session with Q&A",
    },
  },
  {
    id: "restrictive-eating-disorders",
    title:
      "Recognizing Restrictive Eating Disorders in Naturopathic Practice: Avoiding Common Clinical Pitfalls and Optimizing Patient Care",

    date: "October 23, 2026",
    time: "11:15 AM – 12:30 PM EDT",
    speakerId: "dr-natalie-mulligan",
    registrationLink: "",

    description:
      "Restrictive eating disorders frequently present in naturopathic practice but are often not recognized when patients seek care for concerns such as gastrointestinal symptoms, amenorrhea, fatigue, hormonal changes, or suspected food sensitivities. Well-intentioned recommendations, including dietary restriction or elimination protocols, may inadvertently reinforce eating disorder behaviours when the underlying diagnosis is not recognized. Through the use of clinical cases and a review of the current evidence, this presentation will explore the recognition, medical assessment, and multidisciplinary management of restrictive eating disorders in naturopathic practice. Participants will review common medical complications, discuss clinical pitfalls that may unintentionally perpetuate illness, and examine the appropriate role of the naturopathic doctor within an evidence-informed treatment team. Attendees will leave with practical strategies to recognize restrictive eating disorders, avoid common treatment pitfalls, and support safe, evidence-informed multidisciplinary care.",
    shortDescription:
      "Recognize restrictive eating disorders behind common presenting complaints — and avoid the interventions that unintentionally reinforce them.",

    learningObjectives: [
      "Recognize common presentations and red flags of restrictive eating disorders encountered in naturopathic practice",
      "Describe the medical assessment of patients with restrictive eating disorders, including key history, physical examination findings, laboratory investigations, and common medical complications",
      "Identify common naturopathic interventions that may inadvertently reinforce restrictive eating disorders and discuss strategies to minimize potential harm",
      "Apply evidence-informed principles of multidisciplinary management, including appropriate referral and the role of the naturopathic doctor in supporting effective treatment",
    ],
    details: {
      cost: "$59 CAD practitioners / $28 CAD students",
      audience: "Naturopathic doctors and integrative healthcare practitioners",
      format: "Live virtual session with Q&A",
    },
  },
  {
    id: "tori-hudson-session",
    title: "Women’s Health Research Update and Clinical Essentials",

    date: "October 23, 2026",
    time: "1:15 – 2:30 PM EDT",
    speakerId: "dr-tori-hudson",
    registrationLink: "",

    description:
      "A steady stream of research on diet, individual nutrients and botanicals, hormones, and more provides vital and relevant information for clinicians in everyday practice who are treating women for the plethora of primary care and/or gynecological issues they face. Staying up to date on this research can be challenging and even daunting. This lecture will highlight research from 2025 and 2026, and studies that can make a difference in the results and outcomes for your patients — and a few that don’t. There will also be some highlighted clinical essentials in case management.",
    shortDescription:
      "The 2025–2026 research on botanicals, nutraceuticals, and menopause hormone therapy — what changes outcomes for your patients, and what doesn’t.",

    learningObjectives: [
      "Be updated on recent research in botanical medicine as it relates to women’s health",
      "Be updated on recent research in nutraceuticals as they relate to women’s health",
      "Be updated on recent research in menopause hormone therapy",
      "Analyze and assess appropriate utilization of select botanicals, nutraceuticals, and hormones for women’s health",
      "Evaluate the potential benefits and limitations of the indications for these products",
      "Have a deeper academic and scientific understanding of the role of these nutrients, botanicals, and hormones in clinical practice",
    ],
    details: {
      cost: "$59 CAD practitioners / $28 CAD students",
      audience: "Naturopathic doctors and integrative healthcare practitioners",
      format: "Live virtual session with Q&A",
    },
  },
  {
    id: "chronic-constipation",
    title: "Supplemental & Pharmacological Updates for Chronic Constipation",

    date: "October 23, 2026",
    time: "2:45 – 4:00 PM EDT",
    speakerId: "dr-megan-taylor",
    registrationLink: "",

    description:
      "Adult constipation continues to be a leading concern among patients presenting to naturopathic physicians. Available pharmacological treatments have grown tremendously over the last decade, but much prescribing remains in the hands of GI specialists. This talk will review the various supplemental, over-the-counter, and pharmacologic approaches to addressing constipation in adults, including dispelling some long-standing myths associated with use of stimulant laxatives, dosing tips, and troubleshooting adverse effects.",
    shortDescription:
      "A practical review of supplemental, OTC, and pharmacologic options for adult constipation — with dosing tips and myth-busting.",

    learningObjectives: [
      "Review available supplemental and pharmacologic interventions for adult constipation",
      "Confidently prescribe osmotic laxatives, stimulant laxatives, secretagogues, and prokinetics",
      "Manage adverse effects to improve patient tolerability and outcomes",
    ],
    details: {
      cost: "$59 CAD practitioners / $28 CAD students",
      audience: "Naturopathic doctors and integrative healthcare practitioners",
      format: "Live virtual session with Q&A",
    },
  },
];

export const faqs: FAQ[] = [
  {
    question: "Who is the Advances in Women’s Health Symposium for?",
    answer:
      "The symposium is designed for naturopathic doctors, integrative medicine practitioners, and students dedicated to women’s well-being. Each session pairs current research with practical, evidence-based strategies you can apply in clinic right away.",
  },
  {
    question: "Will recordings be available if I can’t attend live?",
    answer:
      "Yes, all registrants will receive access to the session recordings after the live event. This allows you to review the material or watch it later if you can’t attend the live sessions.",
  },
  {
    question: "How do I claim CE credits?",
    answer:
      "CE credits are issued following the symposium based on attendance. CONO and AANP approvals are pending. For Oregon attendees seeking OBNM approved CE credits, please note that this event has not been submitted for approval to the OBNM; a CE certificate will be issued upon individual request.",
  },
  {
    question: "Is there a student rate?",
    answer:
      "Yes. Students may register at the reduced student rate using the promo code STUDENT at checkout.",
  },
  {
    question: "Why have NFH and Vitazan chosen to sponsor this symposium?",
    answer:
      "NFH and Vitazan Professional are manufacturers of professional-grade natural health products, committed to quality, research, and clinical collaboration. Our goal is to advance the evidence-based use of natural products within integrative and naturopathic medicine, and the symposium brings practitioners together around exactly that.",
  },
  {
    question: "Will there be opportunities to ask questions?",
    answer:
      "Yes, each session includes a Q&A where participants can submit questions for the speaker. We encourage active participation to make these sessions as valuable as possible for everyone.",
  },
];

export function getSpeakerByWebinarId(webinarId: string): Speaker | undefined {
  const webinar = webinars.find((w) => w.id === webinarId);
  if (!webinar) return undefined;

  return speakers.find((s) => s.id === webinar.speakerId);
}

export function getWebinarBySpeakerId(speakerId: string): Webinar | undefined {
  const speaker = speakers.find((s) => s.id === speakerId);
  if (!speaker) return undefined;

  return webinars.find((w) => w.id === speaker.webinarId);
}
