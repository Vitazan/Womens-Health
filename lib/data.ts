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
  learningObjectives: string[]; // ✅ optional
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

export const speakers: Speaker[] = [
  {
    id: "dr-paul-a",
    name: "Dr DeJarra K. Sims",
    title: "ND",
    credentials: "ND",
    bio: "She is a licensed naturopathic doctor in the state of California, published author, and nationally recognized speaker with a focus in naturopathic dermatology. With over 15 years of clinical experience, she helps individuals uncover and address the root causes of chronic skin, hair, and hormonal concerns—naturally. Her educational platform, Superhero Skin+Care, provides tools and resources that empower patients to understand their skin and achieve whole-body wellness",
    biohtml: `
  <p>
  Dr DeJarra K. Sims (aka “Dr DJ”) is a licensed naturopathic doctor in the state of California, published author, and nationally recognized speaker with a focus in naturopathic dermatology. With over 15 years of clinical experience, she helps individuals uncover and address the root causes of chronic skin, hair, and hormonal concerns—naturally.
</p>

<p>
  Her educational platform, Superhero Skin+Care, provides tools and resources that empower patients to understand their skin and achieve whole-body wellness.
</p>

<p>
  Dr Sims earned her Bachelor of Science in Biology from Prairie View A&amp;M University and her Doctor of Naturopathic Medicine from Sonoran University of Health Sciences in Tempe, AZ.
</p>

<p>
  Her professional journey includes teaching dermatology, managing holistic care programs in addiction recovery, and serving diverse communities through education and mentorship.
</p>

<p>
  Now practicing at Integrative Health Matters in Tyler, Texas, Dr Sims brings naturopathic medicine home to the community that shaped her.
</p>

<p>
  She is passionate about delivering culturally aware, evidence-informed care, often blending creativity and humor into her work. Trained in improvisational comedy at The Second City (Hollywood) and Finest City Improv (San Diego), she infuses her lectures with warmth, wit, and wisdom.
</p>

<p>
  Whether consulting with clients, mentoring students, or speaking at medical conferences, Dr DJ’s mission is to help people feel balanced on the inside and glowing on the outside.
</p>

`,

    research: "Dr Paul Anderson",
    webinarId: "nutritional-strategies",
    image: "/speakers/speaker1.jpg",
  },
  {
    id: "dr-paul-s",
    name: "Dr Tori Hudson",
    title: "ND",
    credentials: "ND ",
    bio: "She is a Naturopathic Physician, graduated from the National University of Natural Medicine (NUNM) in 1984 and has served the college in several capacities, including: Medical Director, Associate Academic Dean, and Academic Dean.   She is currently a clinical adjunct professor at NUNM), Sonoran University of Health Sciences, Bastyr University and the Canadian College of Naturopathic Medicine",
    biohtml: `
      <p>
  She is a naturopathic physician, graduated from the National University of Natural Medicine in 1984 and has served the college in several capacities, including medical director, associate academic dean, and academic dean.
</p>

<p>
  She is currently a clinical adjunct professor at the National University of Natural Medicine, Sonoran University of Health Sciences, Bastyr University, and the Canadian College of Naturopathic Medicine.
</p>

<p>
  Dr. Hudson has been in practice for over 40 years. She is the medical director of her clinic, A Woman’s Time, in Portland, Oregon, and also serves as co-owner and director of product research and education for Vitanica, as well as program director for the Institute of Women’s Health and Integrative Medicine.
</p>

<p>
  She is the founder and co-director of the Naturopathic Education and Research Consortium, a nonprofit organization supporting accredited naturopathic residencies.
</p>

<p>
  Dr. Hudson has been appointed as a faculty member of the Fellowship in Integrative Health and Medicine through the Academy of Integrative Health and Medicine, and the Andrew Weil Center for Integrative Medicine at the University of Arizona.
</p>

<p>
  Her awards include the 1990 President’s Award from the American Association of Naturopathic Physicians for her research in women’s health, the 1999 Naturopathic Physician of the Year award, the 2003 NUNM Alumni Pioneer Award, the 2009 Natural Products Association Pioneer Award, and induction into the NUNM Hall of Fame in 2012. In 2016, she was honored with the Oregon Association of Naturopathic Physicians’ Living Legends Award.
</p>

<p>
  In 2021, she received the 2020 American Botanical Council’s Fredi Kronenberg Award for Excellence in Research and Education in Botanicals in Women’s Health.
</p>

<p>
  She is a nationally recognized author of Women’s Encyclopedia of Natural Medicine and The Menopause Companion. Dr. Hudson is also a speaker, educator, researcher, and clinician, serving on various editorial boards and advisory panels, and writing regularly for multiple publications.
</p>

    `,
    research: "Herbal medicine safety and efficacy in cancer care",
    webinarId: "herbal-medicine",
    image: "/speakers/speaker2.jpg",
  },
  {
    id: "dr-neil",
    name: "Dr Baljit Khamba",
    title: "ND, MPH, EdD",
    credentials: "ND, MPH, EdD",
    bio: " She is a distinguished naturopathic physician with a deep commitment to integrative medicine, education, and research. She holds a Doctor of Education from the University of Western Ontario, a Naturopathic Doctor degree from the Canadian College of Naturopathic Medicine, and a Master of Public Health from Lakehead University. Her academic foundation also includes a Bachelor of Science in Psychology from York University. ",
    biohtml: `<p>
  Dr  Baljit K. Khamba is an esteemed professional in the field of naturopathic medicine, with a comprehensive educational background and extensive experience in both clinical and academic settings. She holds a Doctor of Education from the University of Western Ontario, a Naturopathic Doctor degree from the Canadian College of Naturopathic Medicine, and a Master of Public Health from Lakehead University. Her academic journey also includes a Bachelor of Science in Psychology from York University.
</p>

<p>
  Currently, Dr Khamba serves as the Chair of Clinical Sciences in the Department of Naturopathic Medicine at Bastyr University, San Diego. She is also instructing at Susan Samueli Integrative Health Institute at the University of California Irvine. Her roles involve course development, instruction, and participation in university-wide leadership committees
</p>

<p>
  D. Khamba's professional experience spans various roles, including positions as a Naturopathic Doctor at multiple clinics, where she provided integrative treatment for patients with mood disorders, anxiety, and other health conditions. She has also held consultancy roles at GlaxoSmithKline and Clorox, where she developed targeted product lines. Currently, she is a panel member with Vitazan Professional’s NDMAPS where she is involved with product development targeted towards cancer care.
</p>

<p>
Her research contributions are notable, having served as a Research Assistant at the Integrative Health Institute at the University of Alberta, focusing on mental health and the use of natural health product safety. She has been actively involved in mentoring students and coordinating research projects, contributing to peer-reviewed publications in the field of naturopathic medicine.
</p>

<p>
 In addition to her professional pursuits, Dr Khamba has a strong commitment to community service, exemplified by her long-term involvement with Project Sunshine in Toronto, where she designed and delivered programs for children in hospitals. Her diverse experience, coupled with her dedication to both education and clinical practice, makes her a distinguished figure in the field of naturopathic medicine.

 
</p>

  
`,
    research: "Microbiome modulation for cancer immunotherapy support",
    webinarId: "microbiome-cancer",
    image: "/speakers/speaker3.jpg",
  },
  {
    id: "dr-eric",
    name: "Dr Lara Briden ",
    title: "ND",
    credentials: "ND",
    bio: "She is a naturopathic doctor and bestselling author of the books Period Repair Manual, Hormone Repair Manual, and Metabolism Repair for Women. With a strong science background, Lara sits on several advisory boards and is the lead author on a couple of peer-reviewed papers. She has almost 30 years of experience in women’s health and currently sees patients in Christchurch, New Zealand, where she treats women with PCOS, PMS, endometriosis, perimenopause, and many other hormone- and period-related health problems. ",
    biohtml: `
  <p>
    Lara Briden is a naturopathic doctor and bestselling author of the books Period Repair Manual, Hormone Repair Manual, and Metabolism Repair for Women. With a strong science background, Lara sits on several advisory boards and is the lead author on a couple of peer-reviewed papers. She has almost 30 years of experience in women’s health and currently sees patients in Christchurch, New Zealand, where she treats women with PCOS, PMS, endometriosis, perimenopause, and many other hormone- and period-related health problems.
  </p>
`,
    research: "Stress reduction techniques and cancer outcomes",
    webinarId: "mind-body-approaches",
    image: "/speakers/speaker4.jpg",
  },
];

export const webinars: Webinar[] = [
  {
    id: "nutritional-strategies",
    title:
      "Transformative Healing from Within: A Root-Cause Approach to Women's Dermatologic Health",

    date: "October 17, 2025 ",
    time: "10:00 - 11:15 AM EST",
    speakerId: "dr-paul-a",
    registrationLink:
      "https://attendee.gotowebinar.com/register/4271114938770009180",

    description:
      "Chronic skin conditions like acne, melasma, eczema, and alopecia are among the most common yet misunderstood concerns in women’s health. These visible symptoms are often rooted in complex internal imbalances, ranging from hormonal shifts and gut dysfunction to liver congestion, immune dysregulation, and psychoneuroendocrine stress. In this 75-minute case-based lecture, Dr DeJarra K. Sims ND will explore how to recognize and address the root causes of dermatologic presentations across the female lifespan. Drawing on both current research and clinical experience, she will demonstrate how skin symptoms often reflect systemic issues, such as androgen dominance, estrogen-progesterone imbalance, intestinal permeability, phase I/II detoxification disruption, and HPA axis dysregulation. Attendees will leave with a clinical roadmap for integrative, evidence-informed treatment of common skin complaints using therapeutic botanicals, nutrient-based protocols, and lifestyle strategies. This lecture is designed to support providers working with women navigating persistent skin flares—from adolescence through perimenopause—with a deeper, more sustainable approach to healing ",
    shortDescription:
      "Explore therapeutic strategies for mitigating adverse effects of conventional oncology care.",

    learningObjectives: [
      "Identify five key root causes of chronic skin conditions in women. ",
      "Explain how hormonal fluctuations across the lifespan contribute to dermatologic presentations. ",
      "Evaluate skin symptoms within the context of systemic physiology, including gut, liver, immune, and neuroendocrine function",
      "Apply naturopathic protocols, utilizing herbal, nutritional, and lifestyle interventions, to support skin healing. ",
      "Use clinical case examples to develop root-cause treatment strategies for acne, perioral dermatitis, eczema, and keratosis pilaris ",
    ],
    details: {
      cost: "FREE",
      audience: "Healthcare professionals involved in oncology care",
      format: "Live webinar with Q&A",
    },
  },
  {
    id: "herbal-medicine",
    title:
      "Urinary Tract Infections in Women: From Simple to Complex- An Integrative Approach",

    date: "November 19, 2025 ",
    time: "11:15 AM – 12:30 PM EST ",
    speakerId: "dr-paul-s",
    registrationLink:
      "https://attendee.gotowebinar.com/register/8281497838955474525",

    description:
      "Urinary tract infections are often straight forward with natural treatments being very successful, especially acute uncomplicated infections.  Chronic, complicated, recurring, can require expanded special testing, vaginal estrogen, and waning use of prophylactic antibiotics.  A review of the evidence of the botanicals, the use of vaginal estrogen, prophylactic pharmaceutical and natural medicine case management will be the hallmarks of this presentation",
    shortDescription:
      "Explore the role of phytoestrogens in breast cancer risk and treatment.",

    learningObjectives: [
      "Understand the basic etiologies of acute and chronic UTIs in women",
      "Identify when to use antibiotics and how to start without them",
      "Know the top botanical/nutraceutical evidence based options for acute and chronic/recurring UTS",
      "Know how to use vaginal estrogen to reduce recurrence",
    ],
    details: {
      cost: "FREE",
      audience: "Healthcare professionals involved in oncology care",
      format: "Live webinar with Q&A",
    },
  },
  {
    id: "microbiome-cancer",
    title:
      "Cellular Resilience for Women: A Nutrient-Based Approach to Energy, Detox, and Longevity",

    date: "December 10, 2025 ",
    time: "1:15 – 2:30 PM EST",
    speakerId: "dr-neil",
    registrationLink:
      "https://register.gotowebinar.com/register/1817335938156515166",

    description:
      "Women’s health is deeply influenced by the body’s ability to methylate, detoxify, and generate cellular energy, yet many clinicians overlook the critical role these processes play in hormonal balance, cognitive function, and post-burnout recovery. This presentation will explore the impact of key nutrients such as L-5-MTHF, methylcobalamin, chlorophyll, and mitochondrial cofactors in optimizing resilience at the cellular level. Attendees will gain evidence-based strategies for supporting patients experiencing chronic fatigue, mood disorders, estrogen dominance, and post-cancer recovery. With a focus on practical applications, this session will provide actionable protocols that enhance patient outcomes, integrating cutting-edge research with targeted nutritional interventions to support longevity and vitality in women’s health.",
    shortDescription:
      "Explore evolving naturopathic protocols and new metabolic therapies for prostate cancer.",

    learningObjectives: [
      "Explain the role of methylation, detoxification, and mitochondrial function in women's hormonal health and chronic fatigue.",
      "Identify key nutrients such as L-5-MTHF, methylcobalamin, chlorophyll, and mitochondrial cofactors that support cellular resilience.",
      "Apply evidence-based nutritional protocols to support patients experiencing estrogen dominance, post-burnout fatigue, cognitive dysfunction, and post-cancer recovery.",
      "Evaluate the clinical use of antioxidants and superfood formulas to address nutrient gaps and support longevity in women’s health care.  * we cannot talk specially about the product",
      "Integrate a supportive  framework into women’s health practice, including case examples and patient-centered protocols.",
    ],
    details: {
      cost: "FREE",
      audience: "Naturopathic doctors and integrative oncology professionals",
      format: "Live session with downloadable handouts",
    },
  },
  {
    id: "mind-body-approaches",
    title:
      "Beyond Lesions: A Systems Approach to Endometriosis and Pelvic Pain",

    date: "January 14, 2026 ",
    time: "2:45 – 4:00 PM EST",
    speakerId: "dr-eric",
    registrationLink:
      "https://attendee.gotowebinar.com/register/6317651324404373085",

    description:
      "Endometriosis is traditionally defined by the presence of lesions, yet compelling evidence challenges the lesion-centric model, especially for superficial lesions. Many patients experience pelvic pain, infertility, or immune dysfunction without significant lesions, while others have lesions without symptoms. This presentation explores endometriosis and persistent pelvic pain as overlapping syndromes mediated by neuroimmune dysregulation, altered microbiota, and environmental triggers such as bacterial endotoxins and endocrine disruptors. We will explore the role of the immune system, including macrophages and mast cells, in driving inflammation and lesion development, as well as the emerging evidence around intestinal permeability, bacterial contamination (e.g., LPS and Fusobacterium), and the gut-brain-immune axis. Treatment implications include dietary strategies, nervous system regulation, and evidence-informed use of natural antimicrobials such as berberine, NAC, and iodine. By moving beyond lesions, clinicians can adopt a more precise and compassionate approach to treating the whole person.",
    shortDescription:
      "Explore how advanced diagnostics are transforming cancer detection and care strategies.",

    learningObjectives: [
      "Evaluate the limitations of the lesion-based paradigm of endometriosis in explaining persistent pelvic pain and infertility",
      "Describe the role of immune dysregulation—including macrophage and mast cell activation—in endometriosis pathophysiology.",
      "Identify clinical strategies for supporting gut-immune-nervous system health in patients with suspected endometriosis or unexplained pelvic pain.",
    ],
    details: {
      cost: "FREE",
      audience: "Clinicians and diagnostic professionals in oncology",
      format: "Live presentation with Q&A",
    },
  },
];

export const faqs: FAQ[] = [
  {
    question:
      "How is this series distinct from other integrative medicine webinars?",
    answer:
      "This CE-based webinar series integrates core oncology concepts with practical clinical application. It reviews cancer pathophysiology—highlighting angiogenesis, immune function, and their relevance in integrative care—then applies this knowledge to common patient concerns around natural products and lifestyle choices during and after conventional treatment. It explores evidence-informed approaches  helping clinicians translate science into effective, patient-centered care.",
  },
  {
    question:
      "Even if I don’t see cancer patients, how could this series benefit my clinical approach?",
    answer:
      'NDs and integrative practitioners in general practice aim to support the whole person, not just the diagnosis. This series focuses on helping patients with a cancer diagnosis optimize their overall health and wellbeing, rather than offering direct cancer treatment. Cancer patients often have distinct needs that require informed, compassionate care. This series is designed to provide you with tools and knowledge to become "oncology-informed". Our expert panel will address the most common questions that arise in primary care, equipping you with the knowledge and tools to confidently support your patients through every stage of their journey.',
  },
  {
    question: "Why have NFH and Vitazan chosen to spearhead this series?",
    answer:
      "This series is led by experts in integrative oncology with naturopathic training and clinical experience in supportive cancer care. Developed with the recognition that many primary and integrative providers encounter oncology patients, the program offers essential, evidence-informed guidance for delivering compassionate, whole-person care. NFH and Vitazan are manufacturers of professional-grade natural health products, committed to quality, research, and clinical collaboration. Our goal is to advance the evidence-based use of natural products within integrative and naturopathic medicine.",
  },
  {
    question: "Will recordings be available if I can't attend live?",
    answer:
      "Yes, all registrants will receive access to the webinar recording after the live event. This allows you to review the material or watch it later if you can't attend the live session.",
  },
  {
    question: "What platform will be used for the webinars?",
    answer:
      "We use Zoom for our webinar series. Upon registration, you'll receive a unique link to join the webinar. You can participate from any device with internet access.",
  },
  {
    question: "Will there be opportunities to ask questions?",
    answer:
      "Yes, each webinar includes a Q&A session where participants can submit questions for the speaker. We encourage active participation to make these sessions as valuable as possible for everyone.",
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
