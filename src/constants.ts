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
  { id: 'impact', label: 'Impact' },
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
    title: 'Regional & Indigenous Australia',
    location: 'Australia',
    description: 'Closing the Gap in eye health for Indigenous and regional communities who face the greatest barriers to care.',
    image: "/media/images/Indigenousproject.png",
    supportingImages: ["/media/images/Indigenous Australia.jpg"],
    status: 'Active',
    intro: 'Foresight Australia is committed to "Closing the Gap" in eye health for Indigenous and regional communities. By partnering directly with local health services, we provide culturally safe and accessible eye care in remote parts of Western NSW and beyond.',
    whyItMatters: 'Blindness is the primary health gap between Indigenous and non-Indigenous Australians. Aboriginal adults are three times more likely to be blind, yet 94% of this vision loss is preventable. Distances to specialized care, high costs, and a lack of culturally safe services remain the greatest barriers to saving sight in regional Australia.',
    whatWeDo: 'We provide culturally appropriate screening, treatment, and clinical training. By establishing sustainable partnerships with local Aboriginal Community Controlled Health Organisations (ACCHOs), we empower communities and build local capacity. Our team visits regional hubs like Griffith monthly to perform surgeries and consultations at no cost to the patient.',
    achievements: [
      'Established sustainable outreach clinics in regional Griffith and Western NSW.',
      'Provided thousands of screenings and sight-restoring treatments to remote populations.',
      'Delivered culturally safe training programs for local healthcare workers to ensure long-term community ownership.',
      'Successfully reduced surgical wait times in the Murrumbidgee region through regular outreach.'
    ],
    nextSteps: 'Our focus is on expanding mobile screening services and deepening our integration with national "Closing the Gap" initiatives to ensure equitable eye health for all Australians, regardless of their postcode.',
    cta: 'Support our work in Australia'
  },
  {
    id: 'projects-indonesia',
    title: 'The Sumba Eye Program',
    location: 'Indonesia',
    description: 'A 20-year commitment to Sumba, transforming lives through sustainable clinical care and specialized medical training.',
    image: "/media/images/Sumbaproject.png",
    supportingImages: ["/media/images/Sumbaproject2.png"],
    status: 'Active',
    intro: 'Our flagship program in Sumba, Indonesia, transforms lives through sustainable clinical care and specialized medical training. Over 20 years, we have built a vision for a whole province that was once entirely underserved.',
    whyItMatters: 'Sumba is one of the most remote and impoverished regions in Indonesia. For the thousands living with cataracts, a simple 15-minute surgery represents the difference between a lifetime of dependency and a future of independence. Without local specialists, many were left in permanent darkness.',
    whatWeDo: 'We don’t just provide surgery; we build systems. By equipping 4 dedicated eye clinics and training Sumba’s first local ophthalmic surgeons, we have ensured the community has access to quality care year-round. Our approach focuses on "skills transfer" and long-term infrastructure.',
    achievements: [
      'Established the Sumba Eye Program as a regional center of excellence.',
      'Successfully treated thousands of cataract cases and provided glasses to over 10,000 school children.',
      'Mentored local Indonesian surgeons to become fully independent in complex cataract surgery.',
      'Integrated eye health into the primary health system across the entire island of Sumba.'
    ],
    nextSteps: 'Our 2025 update focuses on achieving full provincial self-sufficiency. We are scaling our diabetic retinopathy screening and expanding our pediatric services to ensure no child in Sumba grows up with preventable blindness.',
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
    intro: 'Founded in 1978, the Chittagong Eye Infirmary (CEITC) is Foresight\'s landmark project. It has grown into a world-class training center that serves over one million people across South Asia.',
    whyItMatters: 'In a country with one of the highest densities of blindness in the world, the lack of trained specialists was a massive barrier to care. High-volume, high-quality surgical intervention was needed to tackle the backlog of cataract cases.',
    whatWeDo: 'Foresight provided the foundational support for clinical training and equipment. Today, we continue to support specialized training programs for pediatric ophthalmologists and eye care managers, ensuring the hospital remains a leader in sustainable eye health.',
    achievements: [
      'Built one of the most successful sustainable eye hospitals in the developing world.',
      'Trained hundreds of ophthalmologists and thousands of paramedical staff.',
      'Established a specialized pediatric wing to tackle childhood blindness.',
      'Developed a model for hospital self-sufficiency that is replicated globally.'
    ],
    nextSteps: 'Focusing on advanced sub-specialty training and digital integration to improve patient outreach in rural Bangladesh.',
    cta: 'Support our work in Bangladesh'
  },
  {
    id: 'projects-philippines',
    title: 'Mobile Eye Missions',
    location: 'Philippines',
    description: 'Reaching remote farming communities in Northern Luzon with mobile surgical missions and local clinics.',
    image: "/media/images/Philippines Home.png",
    supportingImages: ["/media/images/Richard2.png"],
    status: 'Active',
    intro: 'Working in Northern Luzon since 2013, we bring specialized eye care to rural areas situated over ten hours from the nearest major city. Our mobile missions bridge the gap for isolated farming communities.',
    whyItMatters: 'In the Cagayan Valley, high levels of poverty mean many families choose between food and basic healthcare. For a farmer, blindness doesn’t just mean losing sight—it means losing their livelihood and descending into deep poverty.',
    whatWeDo: 'We conduct intensive surgical missions where local and international teams work together to clear cataract backlogs. We also provide equipment to provincial hospitals and train local health workers in primary eye care.',
    achievements: [
      'Conducted over 15 major surgical missions restoring sight to thousands.',
      'Equipped rural hospitals with specialized diagnostic and surgical tools.',
      'Established a network of local referrals that ensures no patient is left behind.',
      'Restored the economic livelihoods of hundreds of heads of households through surgery.'
    ],
    nextSteps: 'Developing permanent satellite clinics to ensure eye care is available year-round for remote Luzon communities.',
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
    intro: 'We have been the leading partner in the Solomon Islands for over two decades, working with the government to eliminate avoidable blindness and build a fully independent national eye health network.',
    whyItMatters: 'The Solomon Islands is a nation of islands where transport is expensive and difficult. Many people in outer provinces lived in darkness because they had no way to reach the capital for surgery.',
    whatWeDo: 'We focused on training local nurses and doctors to become specialized eye health providers. By establishing a national training curriculum and building the Regional Eye Centre, we ensured that eye care is delivered by Solomon Islanders, for Solomon Islanders.',
    achievements: [
      'Successfully trained the entire national workforce of eye nurses.',
      'Built and equipped the Regional Eye Centre in Honiara.',
      'Reduced the national blindness rate through systematic outreach programs.',
      'Established full government ownership of the eye care system.'
    ],
    nextSteps: 'Implementing a sustainable outreach model that brings eye care to even the most remote outer provinces via boat.',
    cta: 'Support our work in the Solomon Islands'
  },
  {
    id: 'projects-timor-leste',
    title: 'Timor-Leste Eye Program',
    location: 'Timor Leste',
    description: 'Helping a young nation build its eye care infrastructure from the ground up through specialized training.',
    image: "/media/images/Timorproject.png",
    supportingImages: ["/media/images/Timorproject2.png"],
    status: 'Active',
    intro: 'Timor-Leste faced a critical shortage of ophthalmic specialists, leaving many in rural districts without any access to eye care. Foresight has been a vital partner in building this system since the nation\'s birth.',
    whyItMatters: 'For the thousands of Timorese living with cataracts, life is restricted by preventable blindness. In a young nation rebuilding its infrastructure, vision is the key to education and workforce participation.',
    whatWeDo: 'Foresight supports the National Eye Centre and regional outreach clinics. We provide surgical equipment and fund sub-specialty training for Timorese doctors to ensure they can manage complex cases such as pediatric cataracts.',
    achievements: [
      'Supported hundreds of successful cataract surgeries each year.',
      'Funded critical equipment and medical supplies for the National Eye Centre.',
      'Established sustainable outreach programs reaching all 13 districts.',
      'Supported the training of the next generation of Timorese eye health leaders.'
    ],
    nextSteps: 'Expansion of medical training programs to include vitreoretinal surgery and advanced diagnostic services.',
    cta: 'Support our work in Timor-Leste'
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
