/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export const COLORS = {
  primary: '#0056b3', // Blue
  secondary: '#e6f2ff', // Light Blue
  accent: '#ff8c00', // Orange
  text: '#1a1a1a',
  muted: '#666666',
};

export const NAVIGATION = [
  { id: 'home', label: 'Home' },
  {
    id: 'about',
    label: 'About Us',
    dropdown: [
      { id: 'about-mission', label: 'Mission & Vision' },
      { id: 'about-history', label: 'Our History' },
      { id: 'leaders', label: 'Our Leaders' },
      { id: 'reports-policies', label: 'Reports & Policies' },
    ]
  },
  {
    id: 'projects',
    label: 'Where We Work',
    dropdown: [
      { id: 'projects', label: 'Overview' },
      { id: 'projects-australia', label: 'Australia' },
      { id: 'projects-indonesia', label: 'Indonesia' },
      { id: 'projects-bangladesh', label: 'Bangladesh' },
      { id: 'projects-philippines', label: 'Philippines' },
      { id: 'projects-solomon-islands', label: 'Solomon Islands' },
      { id: 'projects-timor-leste', label: 'Timor-Leste' },
    ]
  },
  { id: 'impact', label: 'Stories from the Field' },
  { id: 'get-involved', label: 'Get Involved' },
  { id: 'news', label: 'News' },
  { id: 'contact', label: 'Contact' },
  { id: 'donate', label: 'Donate' },
];

export const IMPACT_STATS = [
  { value: '1,200+', label: 'screenings conducted' },
  { value: '565', label: 'patients treated' },
  { value: '800+', label: 'glasses distributed' },
  { value: '100+', label: 'surgeries performed' },
];

export const PROJECTS = [
  {
    id: 'projects-australia',
    title: 'Australian Project',
    location: 'Australia',
    description: 'Improving access to eye care for underserved communities across Australia.',
    image: "/media/images/Indigenousproject.png",
    supportingImages: ["/media/images/Indigenous Australia.jpg"],
    status: 'Active',
    intro: 'Australia is a world leader in eye health, yet many communities—particularly in regional and underserved areas—still face significant barriers to accessing timely care. Foresight Australia is working to help bridge these gaps by supporting initiatives that improve access, coordination, and delivery of eye care services.',
    whyItMatters: 'Vision loss remains one of the most significant health inequalities affecting Aboriginal and regional communities in Australia. While much of this vision loss is avoidable, people in regional areas still face major barriers to care — including distance, cost, limited local services and a lack of culturally safe pathways.',
    whatWeDo: 'Foresight Australia is working to help bridge these gaps by supporting initiatives that improve access, coordination, and delivery of eye care services. Our focus is on practical, sustainable models and collaboration to establish lasting eye health infrastructure in regional and underserved areas.',
    achievements: [
      'Established a public ophthalmology service at Griffith Base Hospital for the Western Murrumbidgee region',
      'Significantly reduced cataract surgery wait times through regular visiting clinics and surgery',
      'Trained Aboriginal Health Workers, nurses and GPs in eye screening and referral pathways',
      'Strengthened access to care through partnerships with Griffith Aboriginal Medical Service and regional providers'
    ],
    nextSteps: 'Our focus is on strengthening the Griffith model by continuing to build the three foundations of sustainable eye care: infrastructure, human resources and community access.',
    cta: 'Support our work in Australia'
  },
  {
    id: 'projects-indonesia',
    title: 'Sumba Eye Program',
    location: 'Indonesia',
    description: 'A long-term commitment transforming eye care in Sumba through training, infrastructure, and sustainable service delivery.',
    image: "/media/images/Sumbaproject.png",
    supportingImages: ["/media/images/Sumbaproject2.png", "/media/images/Andre2.png"],
    status: 'Active',
    intro: 'The Sumba Eye Program represents Foresight Australia’s commitment to long-term, sustainable eye care development. For over two decades, we have worked alongside local partners to transform access to eye care across Sumba—moving from visiting services to locally delivered, ongoing care.',
    whyItMatters: 'Sumba is one of the most remote and impoverished regions in Indonesia. For the thousands living with cataracts, a simple 15-minute surgery represents the difference between a lifetime of dependency and a future of independence. Without local specialists, many were left in permanent darkness.',
    whatWeDo: 'Our work in Sumba goes beyond short-term visits. We support the development of local eye-care services by helping strengthen the eye clinic at RSUD Waikabubak, training local nurses and hospital staff, and working closely with government and university partners.',
    achievements: [
      'Training local professionals',
      'Supporting clinical infrastructure',
      'Delivering outreach screening/surgical services',
      'Building systems that continue long after we leave'
    ],
    nextSteps: 'Our upcoming visit in April 2026 will focus on surgical support, supervision, and practical training, while continuing to work with hospital, government, and university partners to build a more sustainable eye-care system for Sumba.',
    cta: 'Support our work in Sumba'
  },
  {
    id: 'projects-bangladesh',
    title: 'Chittagong Eye Infirmary',
    location: 'Bangladesh',
    description: 'A global center of excellence for ophthalmic education and sight restoration serving millions.',
    image: "/media/images/Bangladesh home.png",
    supportingImages: ["/media/images/Sumbaproject.png"],
    status: 'Active',
    intro: 'Founded in 1978, the Chittagong Eye Infirmary and Training Complex (CEITC) is one of Foresight’s landmark projects. It has grown into a major eye care and training institution that has served more than one million people across South Asia.',
    whyItMatters: 'In Bangladesh, a high burden of avoidable blindness and a shortage of trained specialists created major barriers to care. There was a strong need for high-volume, high-quality cataract surgery and training to reduce the backlog and expand access to treatment.',
    whatWeDo: 'Foresight helped establish the foundations of the Chittagong Eye Infirmary and Training Complex through early support for clinical training and equipment. Today, we continue to support specialised training in areas such as paediatric ophthalmology and eye health management, helping strengthen the hospital’s long-term leadership in sustainable eye care.',
    achievements: [
      'Built one of the leading eye hospitals in the region through a model focused on quality, scale and sustainability.',
      'Supported the training of ophthalmologists and large numbers of allied eye care staff.',
      'Helped establish specialised services for childhood blindness, including paediatric eye care.',
      'Contributed to a sustainable hospital model that has informed eye care development more broadly.'
    ],
    nextSteps: 'Foresight continues to support specialised training and capacity building in partnership with the Chittagong Eye Infirmary and Training Complex, with a focus on strengthening long-term clinical leadership and sustainable eye care delivery.',
    cta: 'Support our work in Bangladesh'
  },
  {
    id: 'projects-philippines',
    title: 'Supporting Eye Care in Northern Luzon',
    location: 'Philippines',
    description: 'Reaching remote farming communities in Northern Luzon with mobile surgical missions and local clinics.',
    image: "/media/images/Philippines Home.png",
    supportingImages: ["/media/images/Richard2.png"],
    status: 'Active',
    intro: 'Since 2013, Foresight Australia has supported eye care development in Northern Luzon through a small number of targeted visits and hospital-based support. Our work in the Philippines has included seven major visits and one minor visit, focused on strengthening services and supporting local eye care capacity. This work has centred on partnership support rather than mobile outreach, with equipment donated to one hospital with assistance from the Sydney Adventist Network.',
    whyItMatters: 'In Northern Luzon, access to specialist eye care can be limited for people living outside larger centres. Foresight Australia’s work in the Philippines focused on supporting hospital-based eye care services in the Cagayan Valley through targeted visits, equipment support, and collaboration with local partners.',
    whatWeDo: 'We supported one hospital-based eye care service in the Cagayan Valley through targeted visits, clinical support, and donated equipment provided with assistance from the Sydney Adventist Network.',
    achievements: [
      'Conducted seven major visits and one minor visit in support of eye care services in Northern Luzon.',
      'Supported one hospital in the Cagayan Valley through donated equipment, with assistance from the Sydney Adventist Network.',
      'Contributed to hospital-based eye care support through targeted clinical involvement and partnership collaboration.',
      'Helped build a foundation for ongoing local service development through practical, targeted support.'
    ],
    nextSteps: 'Foresight Australia’s work in the Philippines has focused on targeted, hospital-based support. Any future involvement would depend on local partnerships, available resources, and opportunities to strengthen sustainable eye care services in the Cagayan Valley.',
    cta: 'Support our work in the Philippines'
  },
  {
    id: 'projects-solomon-islands',
    title: 'National Eye Program',
    location: 'Solomon Islands',
    description: 'A long-standing partnership supporting the development of local eye care capacity in Solomon Islands.',
    image: "/media/images/Solomons Home.png",
    supportingImages: ["/media/images/Solomonproject.png", "/media/images/Solomonproject2.png"],
    status: 'Active',
    intro: 'Foresight Australia has a long and enduring relationship with the Solomon Islands, spanning decades. Through earlier programs delivered with ABF and ABI, significant progress was made. We are now preparing to return to in-country support, with a renewed focus on strengthening ophthalmic capacity.',
    whyItMatters: 'The Solomon Islands is a geographically dispersed nation where distance, transport costs, and limited specialist services can make access to eye care difficult. Strengthening referral pathways, training, and hospital capacity is essential.',
    whatWeDo: 'Our work focuses on returning to in-country support with a renewed emphasis on strengthening ophthalmic capacity through surgical delivery, training, and long-term partnerships.',
    achievements: [
      'Surgical delivery',
      'Training/mentoring',
      'System development',
      'Long-term partnerships'
    ],
    nextSteps: 'The next phase of Foresight’s engagement in the Solomon Islands is focused on specialist training, surgical mentoring, and planning for future service development led by local needs.',
    cta: 'Support our work in the Solomon Islands'
  },
  {
    id: 'projects-timor-leste',
    title: 'Timor-Leste',
    location: 'Timor Leste',
    description: 'Helping a young nation build its eye care infrastructure from the ground up through specialized training.',
    image: "/media/images/Timorproject.png",
    supportingImages: ["/media/images/Timorproject2.png"],
    status: 'Active',
    intro: 'Foresight supported eye care development in Timor-Leste during the early years of the nation’s health system, helping address a critical shortage of ophthalmic services. This work formed part of Foresight’s broader commitment to strengthening access to eye care in underserved communities. We do not currently operate in Timor-Leste.',
    whyItMatters: 'Timor-Leste faced major barriers to eye care, with many people living with avoidable vision loss and limited access to treatment, particularly outside main centres. In the country’s early years of rebuilding, strengthening eye care was important for health, education and participation in daily life.',
    whatWeDo: 'Foresight supported the development of eye care services in Timor-Leste through partnerships that helped strengthen clinical capacity and access to treatment. This included support for national eye care services, outreach activity, equipment, and specialist training to help build local capability over time.',
    achievements: [
      'Helped expand access to cataract surgery and eye care services in Timor-Leste',
      'Supported equipment and medical supply needs for eye care service delivery',
      'Contributed to outreach activity to improve access beyond major centres',
      'Supported training and capacity building for Timorese eye health professionals'
    ],

    cta: 'Support our work'
  }
];

export const TEAM = [
  { 
    name: 'George Harris', 
    role: 'Chairman', 
    titles: 'B.A. L.L.M',
    bio: 'A solicitor in private solo practice and former international partner and senior counsel of the global law firm Baker McKenzie. He provides legal expertise to several not-for-profits, including the Opera Foundation for Young Australians and the RPA Heart Centre Foundation.',
    image: '/media/images/board-george-harris.png'
  },
  { 
    name: 'John Karagiorgos', 
    role: 'Treasurer', 
    titles: 'CA BUS MTAX',
    bio: 'A practicing chartered accountant and partner specializing in general tax matters for the medical, real estate, and property sectors. He has assisted businesses in expanding their profiles and increasing profitability over a thirty-year career.',
    image: '/media/images/board-john-karagiorgos.png'
  },
  { 
    name: 'A/Prof Geoffrey T. Painter AM', 
    role: 'Director', 
    titles: 'MBBS MPhil FRANZCO FRACS',
    bio: 'An ophthalmic surgeon and co-founder of Gordon Eye Surgery. He has led 18 surgical and teaching trips to the Solomon Islands and was awarded a Member of the Order of Australia (AM) for services to ophthalmology in Australia and the Asia Pacific region.',
    image: '/media/images/board-geoffrey-painter.png'
  },
  { 
    name: 'Prof Mary Crock', 
    role: 'Director', 
    titles: 'BA (Hons) LLB (Hons) PhD FAAL',
    bio: 'Professor of Public Law at the University of Sydney’s Law School and an Accredited Specialist in Immigration Law. She is a globally recognized expert on refugees with disabilities and was named one of the AFR\'s 100 Women of Influence.',
    image: '/media/images/board-mary-crock.png'
  },
  { 
    name: 'Ms Melissa Perrine', 
    role: 'Director', 
    titles: 'BExPhys, MSportExSci, MPhysio, MSci',
    bio: 'A registered physiotherapist and four-time Winter Paralympian. Although legally blind, she has held four World Championship titles and served as Australia\'s opening ceremony flag bearer at the Beijing 2022 games.',
    image: '/media/images/board-melissa-perrine.png'
  },
  { 
    name: 'Dr Mark F. Ellis AM', 
    role: 'Director', 
    titles: 'MB BS, FRANZCO, FRACS',
    bio: 'A Consultant Ophthalmologist who founded an independent eye reach program in West Sumba in 2007. He has served as Chairman of the Victorian Branch of RANZCO and worked extensively in India and East Timor.',
    image: '/media/images/board-mark-ellis.png'
  },
  { 
    name: 'Dr Georgina Kourt', 
    role: 'Director', 
    titles: 'MBBS, FRANZCO, FRACS',
    bio: 'An Honorary Medical Officer in Ophthalmology and Oculoplastic Surgery at Sydney Eye Hospital. She focuses on improving rural medical services and eyecare for First Nations people, leading annual surgical field trips to the Northern Territory.',
    image: '/media/images/board-georgina-kourt.png'
  },
  { 
    name: 'Ms Kerrie Legg', 
    role: 'Director', 
    titles: 'RN, Mid Cert, MN',
    bio: 'CEO/DON of Chatswood Private Hospital, one of Australia\'s largest stand-alone day hospitals. She has participated in 17 overseas outreach projects to the Solomon Islands, China, and the Philippines over the last 23 years.',
    image: '/media/images/board-kerrie-legg.png'
  },
  { 
    name: 'Mr Kevin Gardner', 
    role: 'Director', 
    titles: 'MCOM BBus FCPA FCIS JP',
    bio: 'Former Chairman of Lenity Australia and CEO of Sydney Eye Hospital Foundation. He has over 40 years of senior management experience in finance and accounting and currently serves as a Director for the Mercy Foundation.',
    image: '/media/images/board-kevin-gardner.png'
  },
  { 
    name: 'Mr Aziz Meherali', 
    role: 'Director', 
    titles: 'CFP, BaBUS',
    bio: 'A Senior Wealth Adviser with over 25 years of experience in the financial planning industry. He specializes in developing investment and executive strategies for private clients and holds a Strategic Leadership qualification from Stanford.',
    image: '/media/images/board-aziz-meherali.png'
  },
  { 
    name: 'Ms Janine Hobson', 
    role: 'Director', 
    titles: 'B. Optom (Hons) GradCert Therapeutic Optometry',
    bio: 'An experienced Optometrist and founder of Young Eyes Optometrists. She specializes in children\'s vision and therapeutic optometry and is involved with the Sumba Eye Program training local staff in paediatric care.',
    image: '/media/images/board-janine-hobson.png'
  },
];

export const PARTNERS = [
  { name: 'IAPB', logo: '/media/images/IAPB.png', url: 'https://www.iapb.org/' },
  { name: 'vision 2020', logo: '/media/images/vision2020.png', url: 'https://vision2020australia.org.au/' },
  { name: 'ACFID', logo: '/media/images/ACFID.png', url: 'https://acfid.asn.au/' },
  { name: 'ANZEF', logo: '/media/images/ANZEF.png', url: 'https://anzef.org/' },
];
