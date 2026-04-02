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
    description: 'Closing the Gap in eye health for Indigenous and regional communities who face the greatest barriers to care.',
    image: "/media/images/Indigenousproject.png",
    supportingImages: ["/media/images/Indigenous Australia.jpg"],
    status: 'Active',
    intro: 'Foresight Australia works with regional hospitals, Aboriginal medical services and local partners to strengthen eye care in underserved communities across New South Wales. Our approach focuses on three essentials: the right infrastructure and equipment, the right workforce and training, and strong community access through culturally safe screening, referral and follow-up pathways.',
    whyItMatters: 'Vision loss remains one of the most significant health inequalities affecting Aboriginal and regional communities in Australia. While much of this vision loss is avoidable, people in regional areas still face major barriers to care — including distance, cost, limited local services and a lack of culturally safe pathways. Addressing this challenge requires more than clinical visits alone. It requires the right infrastructure, the right workforce, and strong community access to eye care.',
    whatWeDo: 'We strengthen eye care services by working across three essential areas: infrastructure, human resources and community access. This includes supporting the equipment and clinical spaces needed to deliver care, building local and visiting workforce capacity through training and partnerships, and improving access through culturally safe screening, referral and follow-up pathways. In places like Griffith, this approach helps bring consultations and surgery closer to home while building a more sustainable local service.',
    achievements: [
      'Established a public ophthalmology service at Griffith Base Hospital for the Western Murrumbidgee region',
      'Significantly reduced cataract surgery wait times through regular visiting clinics and surgery',
      'Trained Aboriginal Health Workers, nurses and GPs in eye screening and referral pathways',
      'Strengthened access to care through partnerships with Griffith Aboriginal Medical Service and regional providers'
    ],
    nextSteps: 'Our focus is on strengthening the Griffith model by continuing to build the three foundations of sustainable eye care: infrastructure, human resources and community access. This includes supporting local screening and referral pathways, further training for health workers, and expanding the capacity of regional services to deliver more care closer to home.',
    cta: 'Support our work in Australia'
  },
  {
    id: 'projects-indonesia',
    title: 'Sumba Eye Program',
    location: 'Indonesia',
    description: 'A 20-year commitment to Sumba, transforming lives through sustainable clinical care and specialized medical training.',
    image: "/media/images/Sumbaproject.png",
    supportingImages: ["/media/images/Sumbaproject2.png"],
    status: 'Active',
    intro: 'Our flagship program in Sumba, Indonesia, transforms lives through sustainable clinical care and specialized medical training. Over 20 years, we have built a vision for a whole province that was once entirely underserved.',
    whyItMatters: 'Sumba is one of the most remote and impoverished regions in Indonesia. For the thousands living with cataracts, a simple 15-minute surgery represents the difference between a lifetime of dependency and a future of independence. Without local specialists, many were left in permanent darkness.',
    whatWeDo: 'Our work in Sumba goes beyond short-term visits. We support the development of local eye-care services by helping strengthen the eye clinic at RSUD Waikabubak, training local nurses and hospital staff, and working closely with government and university partners. Alongside screening and cataract surgery programs, we focus on skills transfer, practical support, and the long-term growth of sustainable eye care on the island.',
    achievements: [
      'Developing the Sumba Eye Program in partnership with local hospitals and the Sumba Foundation. Supporting the establishment of eye - care services at RSUD Waikabubak while working alongside long- standing partners on the island.',
      'Delivered cataract surgeries and vision screening programs, including providing glasses to thousands of school children.Continuing to improve access to care through regular outreach visits and local collaboration.',
      'Supporting training and supervision of local clinical staff, including nurses and visiting doctors. Working with Indonesian partners to build skills, with ongoing need for stable ophthalmology coverage on the island.',
      'Strengthening links between hospital services, outreach programs, and local health systems. Progressing toward more consistent, locally delivered care while continuing to rely on visiting teams and partnerships.'
    ],
    nextSteps: 'We are now entering the next phase of the Sumba Eye Program, focused on strengthening consistent, locally delivered eye care. With the eye clinic at RSUD Waikabubak now operational and a resident ophthalmologist in place, our work is shifting toward supporting day-to-day services, training local staff, and improving patient access across the district. Our upcoming visit in April 2026 will focus on surgical support, supervision, and practical training, while continuing to work with hospital, government, and university partners to build a more sustainable eye-care system for Sumba.',
    cta: 'Support our work in Sumba'
  },
  {
    id: 'projects-bangladesh',
    title: 'Chittagong Eye Infirmary',
    location: 'Bangladesh',
    description: 'A global center of excellence for ophthalmic education and sight restoration serving millions.',
    image: "/media/images/Bangladesh home.png",
    supportingImages: ["/media/images/Andre2.png"],
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
    description: 'A 20-year partnership to eliminate avoidable blindness and build a national eye health workforce.',
    image: "/media/images/Solomons Home.png",
    supportingImages: ["/media/images/Solomonproject.png", "/media/images/Solomonproject2.png"],
    status: 'Active',
    intro: 'Foresight has supported eye care development in the Solomon Islands through infrastructure, training, and partnership-building. After earlier work strengthening the National Referral Hospital Eye Unit in Honiara, we are now re-engaging with Solomon Islands ophthalmology leaders and regional partners to support future training, service development, and system strengthening.',
    whyItMatters: 'The Solomon Islands is a geographically dispersed nation where distance, transport costs, and limited specialist services can make access to eye care difficult. Strengthening referral pathways, training, and hospital capacity is essential to improving access to treatment, especially for people living outside Honiara.',
    whatWeDo: 'Foresight’s work in the Solomon Islands has focused on strengthening eye care through practical support for local services. Our earlier work helped upgrade the National Referral Hospital Eye Unit in Honiara through equipment, training, and service development, including support for refraction, dispensing, and diabetic eye screening. We are now re-engaging with local leaders and regional partners to support the next phase of specialist training and service strengthening.',
    achievements: [
      'Supported the upgrade of the National Referral Hospital Eye Unit in Honiara.',
      'Provided equipment to improve diagnosis, treatment, and teaching capacity.',
      'Helped develop refraction, dispensing, and diabetic eye screening services.',
      'Re-established Foresight’s engagement with Solomon Islands ophthalmology leaders and Pacific partners.'
    ],
    nextSteps: 'The next phase of Foresight’s engagement in the Solomon Islands is focused on specialist training, strengthened regional partnerships, and planning for future outreach and service development led by local needs.',
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
  { name: 'George Harris', role: 'Chairman' },
  { name: 'John Karagiorgos', role: 'Treasurer' },
  { name: 'Geoffrey Painter', role: 'Director' },
  { name: 'Kevin Gardner', role: 'Director' },
  { name: 'Mary Crock', role: 'Director' },
  { name: 'Melissa Perrine', role: 'Director' },
  { name: 'Mark Ellis', role: 'Director' },
  { name: 'Georgina Kourt', role: 'Director' },
  { name: 'Kerrie Legg', role: 'Director' },
  { name: 'Aziz Meherali', role: 'Director' },
  { name: 'Janine Hobson', role: 'Director' },
];

export const PARTNERS = [
  { name: 'IAPB', logo: '/media/images/IAPB.png', url: 'https://www.iapb.org/' },
  { name: 'vision 2020', logo: '/media/images/vision2020.png', url: 'https://vision2020australia.org.au/' },
  { name: 'ACFID', logo: '/media/images/ACFID.png', url: 'https://acfid.asn.au/' },
  { name: 'ANZEF', logo: '/media/images/ANZEF.png', url: 'https://anzef.org/' },
];
