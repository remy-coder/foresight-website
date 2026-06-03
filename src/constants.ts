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
      { id: 'projects-indonesia', label: 'Sumba Eye Program' },
      { id: 'projects-solomon-islands', label: 'Solomon Islands' },
      { id: 'projects-bangladesh', label: 'Bangladesh' },
      { id: 'projects-philippines', label: 'Philippines' },
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
  { value: '200,000+', label: 'Patients Screened' },
  { value: '2,000+', label: 'Surgeries Performed' },
  { value: '25,000+', label: 'Glasses Distributed' },
  { value: '40+', label: 'Years of Sight Restoration' },
];

export const PROJECTS = [
  {
    id: 'projects-australia',
    title: 'Griffith Indigenous Eye Health',
    location: 'Australia',
    description: 'Enhancing eye-care accessibility and closing the gap in healthcare access for Indigenous populations in rural New South Wales.',
    image: "/media/images/Indigenousproject.png",
    supportingImages: ["/media/images/Indigenous Australia.jpg"],
    status: 'Active',
    intro: 'A sustainable, community-based model closing the gap in eye care for Aboriginal and Torres Strait Islander people in regional New South Wales — through specialist clinical services, targeted training, and locally embedded screening programs.',
    whyItMatters: [
      'Aboriginal and Torres Strait Islander Australians are three times more likely to experience vision loss than non-Indigenous Australians — yet up to 94% of this blindness is preventable or treatable. In the Western Murrumbidgee Local Health District (MLHD) of rural NSW, geographic isolation, limited specialist workforce, and a lack of culturally safe referral pathways have historically left communities without access to basic eye care.',
      'When the only local ophthalmologist retired in early 2022 and no replacement could be recruited, the region\'s 19 public hospitals were left without a single public ophthalmology clinic. For Aboriginal patients requiring cataract surgery, the wait stretched to 18 months or more. For those with diabetic retinopathy — one of the leading causes of preventable blindness in Indigenous communities — there was no screening pathway at all.'
    ],
    storyHeading: 'How it started',
    ourStory: [
      'In 2021, Foresight Australia identified the Western Murrumbidgee Local Health District as a region of urgent need — with strong support from Turramurra Rotary and the NSW Ministry of Health. When the region\'s only ophthalmologist retired in early 2022 and could not be replaced, Foresight moved quickly: by February 2022, the GBH Department of Ophthalmology was formally established and the first clinical visit undertaken.',
      'Led by Associate Professor Geoffrey Painter, Dr Dominic McCall, and orthoptist Kerrie Legg — all volunteering their time — the team has visited every four weeks since, providing surgical and outpatient care while simultaneously building the community-based screening infrastructure that will allow this work to continue independently.',
      'The programme is supported by the Western Murrumbidgee LHD, Gordon Eye Surgery, Chatswood Private Hospital, the MediAid Foundation, Turramurra Rotary, Griffith Avanti Rotary, and funded in part by ANZEF (Australian and New Zealand Eye Foundation) grants.'
    ],
    whatWeDo: 'Foresight\'s model in Griffith has two interconnected pillars. The first is a permanent, hospital-based ophthalmology clinic at Griffith Base Hospital — staffed by visiting specialists every four weeks — providing surgical and outpatient care to the entire Western MLHD. The second is a structured training programme that equips Aboriginal Health Care Workers and GPs at local Aboriginal Medical Services with the skills and equipment to screen for the three leading causes of vision loss in their communities: refractive error, cataract, and diabetic retinopathy.',
    approachCards: [
      { icon: 'Target', label: 'Clinical Care', text: 'A team of ophthalmologists, orthoptists, and a RANZCO-accredited registrar visits Griffith Base Hospital every four weeks to provide comprehensive ophthalmic care — the only public hospital-based ophthalmology clinic in the Western MLHD. Surgical lists are conducted at St Vincent\'s Community Private Hospital, Griffith, covering both public and private patients. This has cut cataract surgery waiting times from 18 months to just 3–6 months.' },
      { icon: 'Users', label: 'Training', text: 'Foresight has delivered five structured upskilling workshops since 2022, training Aboriginal Health Care Workers and GPs from across the MLHD — including Griffith, Wagga, Narrandera, Leeton, Tumut, Lake Cargelligo, and Hay. Participants learn ocular anatomy, cataract and glaucoma recognition, diabetic retinopathy screening, slit lamp examination, visual acuity testing, intraocular pressure measurement, and retinal photography. All graduates receive a full set of donated screening equipment to use in their communities.' },
      { icon: 'BriefcaseMedical', label: 'EQUIPMENT', text: 'Foresight has donated over 46 sets of personal examination equipment, portable slit lamps, iCare tonometers, vision charts, and portable retinal cameras to Aboriginal Medical Services across the region — at Griffith, Lake Cargelligo, Hay, and Narrandera. This equipment remains permanently in the communities, enabling ongoing screening between specialist visits.' },
      { icon: 'Eye', label: 'DIABETIC SCREENING', text: 'Diabetic retinopathy is a leading cause of preventable blindness in Aboriginal communities. Foresight reactivated GAMS\'s retinal camera, trained dedicated Aboriginal Health Care Workers in retinal photography, and donated a portable retinal camera for outreach visits. Diabetic retinopathy screening is now being integrated into the Passport to Better Health programme, which reaches isolated communities across the MLHD and beyond.' }
    ],
    achievements: [
      'Over 40 Aboriginal Health Care Workers, GPs, registered nurses, and medical students trained across five workshops since 2022 — from Griffith, Wagga, Narrandera, Leeton, Tumut, Lake Cargelligo, and Hay.',
      'Cataract surgery waiting times cut from 18 months to 3–6 months following the establishment of the GBH Ophthalmology Department — the first public hospital ophthalmology clinic in the Western MLHD in 14 years.',
      'Four Aboriginal Medical Services now equipped with dedicated ophthalmic screening equipment at Griffith, Lake Cargelligo, Hay, and Narrandera — enabling regular optometry visits and a direct referral pathway to Griffith Base Hospital.',
      'Won the MLHD Excellence Award 2023 for \'Saving Sight is Our Vision\'. Published in the Australian Journal of Rural Health (August 2025) and accepted as a poster at the RANZCO 2024 and 2025 Scientific Meetings.'
    ],
    milestonesHeading: 'From first visit to embedded care',
    milestones: [
      { year: 'February 2022', text: 'GBH Department of Ophthalmology established. First clinical visit conducted. First public ophthalmology clinic in the Western MLHD in 14 years.' },
      { year: 'October 2022', text: 'First Foresight upskilling workshop: 9 Aboriginal Health Care Workers from GAMS trained in cataract, glaucoma, and diabetic retinopathy screening. Screening equipment donated by Foresight.' },
      { year: 'March–September 2023', text: 'Second upskilling workshop delivered in two parts, expanding training to GPs for the first time. GAMS retinal camera reactivated for diabetic retinopathy screening.' },
      { year: 'Late 2023', text: 'Foresight awarded inaugural ANZEF grant of $35,000 to expand the training programme across the Western MLHD.' },
      { year: 'April–May 2024', text: 'First ANZEF-funded workshop: training expanded to GPs and nurses alongside Aboriginal Health Care Workers. Portable retinal camera donated to GAMS through Turramurra and Griffith Avanti Rotary. Slit lamp donated to Narrandera Aboriginal Corporation with support from partner organisations.' },
      { year: 'October 2024', text: 'Second ANZEF-funded workshop: training expanded to MLHD Aboriginal Health Care Workers from Wagga, Narrandera, Leeton, and Tumut. Eye screening integrated into the Passport to Better Health outreach programme. Award won at MLHD Excellence Awards.' },
      { year: 'April–May 2025', text: 'Third ANZEF-funded workshop: dedicated retinal photography training for Passport to Better Health team. New GP trained. Medical students from GAMS and GBH participate.' }
    ],
    nextSteps: 'The Griffith model has proven that a sustainable, community-embedded approach can close the gap in eye care — even in one of Australia\'s most under-resourced regions. Our focus now is on deepening and expanding that impact.\n\nOur priorities for 2025–2026:',
    nextStepsList: [
      'Expanding diabetic retinopathy screening into the Passport to Better Health outreach programme — reaching isolated communities across the MLHD and into central and south-west NSW',
      'Training remaining MLHD Aboriginal Health Care Workers, including those in the Eastern MLHD and through Marathon Health',
      'Developing a dedicated advanced training stream for registered nurses and nurse practitioners who have requested more specialised instruction',
      'Integrating the second retinal camera at Murrin Bridge Aboriginal Medical Centre into the existing referral pathway',
      'Installing and activating a planned retinal camera at Hay AMS',
      'Continuing to mentor GAMS GPs in diabetic retinopathy screening and ongoing ophthalmic education',
      'Ultimately recruiting a permanent ophthalmologist to Griffith to secure the long-term sustainability of the clinical service'
    ],
    partnersHeading: 'Built on collaboration',
    partnersText: 'The Griffith Indigenous Eye Health Program is made possible through the commitment of:',
    partners: [
      'Western Murrumbidgee Local Health District (MLHD) — clinic facilities, funding, and accreditation',
      'Gordon Eye Surgery — ophthalmologists and orthoptists',
      'Chatswood Private Hospital — RANZCO-accredited registrar',
      'Griffith Aboriginal Medical Service (GAMS) — host organisation for training and community outreach',
      'MediAid Foundation — support for prioritised Indigenous cataract surgery',
      'ANZEF (Australian and New Zealand Eye Foundation) — grant funding for upskilling workshops',
      'Turramurra Rotary and Griffith Avanti Rotary — equipment donations and community support'
    ],
    partnerLogos: [
      { name: 'Western Murrumbidgee Local Health District (MLHD)', logo: null },
      { name: 'Gordon Eye Surgery', logo: '/media/images/Gordoneye.png' },
      { name: 'Chatswood Private Hospital', logo: '/media/images/Chatswood private.png' },
      { name: 'Griffith Aboriginal Medical Service (GAMS)', logo: null },
      { name: 'MediAid Foundation', logo: null },
      { name: 'ANZEF — Australian & New Zealand Eye Foundation', logo: '/media/images/ANZEF.png' },
      { name: 'Turramurra Rotary', logo: '/media/images/Turramurra Rotary.png' },
      { name: 'Griffith Avanti Rotary', logo: null }
    ],
    cta: 'Support our work in Australia',
    ctaText: 'Every four weeks, our volunteer team flies to Griffith to keep this service running — restoring sight, training local health workers, and building a system that works for Aboriginal communities on their terms. Your support funds the training, equipment, and visits that make it possible.'
  },
  {
    id: 'projects-indonesia',
    title: 'Sumba Eye Program',
    location: 'Indonesia',
    description: 'A long-term, sustainable partnership transforming eye health on Sumba Island through infrastructure, training, and surgical excellence.',
    image: "/media/images/Sumbaproject.png",
    supportingImages: ["/media/images/Sumbaproject2.png", "/media/images/Andre2.png"],
    status: 'Active',
    intro: 'A long-term partnership transforming eye health on Sumba Island — now evolving from outreach missions into a permanent, locally-led eye care service in West Sumba.',
    whyItMatters: [
      'One person goes blind every minute in Indonesia — and 80% of that blindness is preventable or curable. Sumba is one of Indonesia\'s most isolated and under-resourced islands, home to around 850,000 people in its central and western districts, yet with no permanent ophthalmic specialist and almost no local eye care infrastructure.',
      'Based on national prevalence data, an estimated 9,000 people on Sumba are blind and a further 21,000 live with moderate to severe visual impairment — many from cataracts that can be corrected with a simple 15-minute procedure. For a farmer, a mother, or a child trying to learn, untreated vision loss means lost productivity, dependency, and a diminished life. It doesn\'t have to be this way.'
    ],
    ourStory: [
      'The Sumba Eye Program was founded in 2007 by Dr Mark Ellis AM, an Australian ophthalmologist who first travelled to West Sumba with a team of surgeons and optometrists to deliver eye camps to a population that had never seen a specialist. What began as a single annual surgical mission has grown into one of the most sustained eye health programs in eastern Indonesia.',
      'For over a decade, the program operated successfully before joining Foresight Australia in 2021 — bringing with it a proven clinical track record, established local relationships, and a clear vision for the future: building a permanent, locally run eye health system that can serve Sumba long after visiting teams go home.',
      'Today, the program maintains active MOUs with RSUD Waikabubak Hospital, Hasanuddin University (UNHAS) in Makassar, and the Sumba Foundation, and works closely with PERDAMI (the Indonesian Ophthalmologists Association) to build a lasting clinical infrastructure for Central and West Sumba.'
    ],
    whatWeDo: 'Our work in Sumba focuses on building self-sufficiency. We establish permanent infrastructure, provide specialized training for local nurses and hospital staff, and screen thousands of children through school-based programs to detect vision loss early.',
    approachCards: [
      { icon: 'Target', label: 'Clinical Care', text: 'Each visit delivers comprehensive outreach eye screening in remote villages across Central and West Sumba, bringing services directly to communities that cannot reach hospitals. In a typical week, our team sees 150–200 patients per day, distributing prescription glasses, identifying surgical referrals, and performing cataract operations at partner hospitals. To date, the program has conducted 2,000+ surgeries, distributed 25,000+ glasses, and screened 200,000+ patients.' },
      { icon: 'Users', label: 'Training', text: 'Our long-term goal is not to be needed. We invest deeply in training local Eye Care Nurses (ECNs) — sponsoring them through formal ophthalmic training at UNHAS in Makassar, so they can run clinics, conduct screenings, and assist in surgery independently. Four trained ECNs now command eye clinics across the island as part of their regular medical duties. We also provide structured mentorship visits, lectures for UNHAS ophthalmology students, and training for hospital staff.' },
      { icon: 'Building2', label: 'Infrastructure', text: 'In 2024, Foresight equipped and established a permanent eye clinic and surgical theatre at RSUD Waikabubak Hospital in West Sumba — serving a catchment of approximately 200,000 people. An optical workshop was also established in partnership with OneSight/Essilor.' },
      { icon: 'BookOpen', label: 'School Screening', text: 'With approximately 700 primary schools and 200,000 students across Sumba, undetected childhood vision problems represent a silent crisis. Our program is piloting school-based screening initiatives to detect myopia, amblyopia, and other conditions early — before they become permanent.' }
    ],
    achievements: [
      'A permanent eye clinic and surgical theatre established at RSUD Waikabubak Hospital in West Sumba — serving a catchment of approximately 200,000 people and now functioning as a developing local eye care system, not just an outreach activity.',
      '2,000+ cataract surgeries and 200,000+ eye examinations delivered across 15+ years of missions. In our most recent April 2026 visit alone, the team saw 818 patients in four clinical days, performed 55 cataract surgeries, completed 3 YAG laser treatments, and provided 744 pairs of glasses.',
      'Four local Eye Care Nurses (ECNs) trained and sponsored through UNHAS in Makassar, now leading daily clinic operations with growing confidence and independence. In April 2026, eight Puskesmas (community health centre) staff began structured training to strengthen primary-care referral pathways.',
      'Transitioned from foreign-led surgical missions to a locally-driven service model. Hospital eye nurses now play an active leadership role, and Indonesian doctors increasingly lead surgical care — the hallmark of a mature, sustainable program.'
    ],
    visitUpdate: {
      label: 'LATEST UPDATE',
      heading: 'April 2026: A turning point',
      intro: 'In April 2026, Foresight Australia returned to RSUD Waikabubak to continue building a sustainable eye care system for West Sumba. The visit demonstrated clear progress compared with previous trips: better clinic organisation, smoother patient flow, increased local capability, and a service model that is now transitioning from short-term outreach to a developing, locally-driven clinic.',
      stats: [
        { value: '818', label: 'Patients seen' },
        { value: '744', label: 'Pairs of glasses provided' },
        { value: '55', label: 'Cataract surgeries' },
        { value: '3', label: 'YAG laser treatments' },
        { value: '105', label: 'Referrals made' },
        { value: '100%', label: 'Post-operative reviews completed' }
      ],
      blocks: [
        {
          heading: 'Stronger local ownership',
          body: 'Hospital eye nurses played a more active role in daily operations, demonstrating greater confidence and leadership. Patient flow improved significantly with eight parallel screening stations, structured patient numbering, and dedicated clinical spaces for screening, biometry, surgery, and post-operative care. Collaboration between hospital staff, Indonesian clinicians, and the visiting team was stronger than ever.'
        },
        {
          heading: 'Expanding into primary care',
          body: 'For the first time, eight Puskesmas (community health centre) staff from across the district participated in structured training — learning visual acuity testing, basic refraction, identification of common eye conditions, and referral pathways. Strengthening this primary-care network is essential for earlier detection and sustainable continuity of care between specialist visits.'
        }
      ]
    },
    milestones: [
      { year: '2007', text: 'Program founded by Dr Mark Ellis AM in West Sumba. First surgical eye camp delivered to a population with no specialist eye care.' },
      { year: '2021', text: 'Sumba Eye Program joins Foresight Australia. MOUs signed with Hasanuddin University (UNHAS) and the Sumba Foundation.' },
      { year: 'October 2024', text: 'Agreement to open a permanent eye clinic at RSUD Waikabubak Hospital in West Sumba. Formal partnership established with PERDAMI (NTT Province).' },
      { year: 'May 2025', text: 'Outreach mission delivers screenings to 174 patients. MOU with RSUD Waikabubak progressed and nurse training continued.' },
      { year: 'October 2025', text: 'First joint surgical mission at the new Waikabubak clinic: 765 patients seen, 730 glasses distributed, 79 surgeries performed. Meeting with local government secures political commitment to program sustainability.' },
      { year: 'April 2026', text: 'Refresher training for nurses and pilot Puskesmas GP training program begins.' }
    ],
    nextSteps: 'The April 2026 visit confirmed that the foundations of a sustainable eye care system in West Sumba are now clearly taking shape. The next phase is about consolidating those gains and removing the remaining barriers to long-term viability.\n\nOur priorities for the September 2026 follow-up visit and beyond:',
    nextStepsList: [
      'Progress BPJS approval — Indonesia\'s national health insurance system — so that more patients can access affordable care through the clinic',
      'Re-establish consistent ophthalmology coverage following a planned gap from May to July, exploring interim arrangements with Dr Saphira from Karitas and other local partners',
      'Deliver refresher training for hospital eye nurses and structured supervised practice for Puskesmas staff',
      'Strengthen Puskesmas referral pathways to enable earlier case identification across the district',
      'Improve local affordability of glasses and follow-up care — crucial for full visual outcomes and long-term continuity',
      'Continue building a sustainable, financially viable, locally led clinic that operates consistently between visiting team trips'
    ],
    partnersText: 'Delivering effective eye care in a remote region like Sumba requires more than clinical expertise — it requires trusted local partnerships. The Sumba Eye Program works in close collaboration with:',
    partners: [
      'UNHAS',
      'PERDAMI',
      'Community and government partner — with deep roots in Sumba and an established relationship with the West Sumba Health Department, the Sumba Foundation is essential to the program\'s local reach and long-term sustainability.',
      'OneSight/Essilor — optical workshop equipment and spectacle supply',
      'ANZEF and Perpetual Foundation — grant funders supporting ongoing program operations',
      'PT Berlian Mansari Opti-Medic'
    ],
    partnerLogos: [
      { name: 'Hasanuddin University (UNHAS)', logo: '/media/images/unhas.png', url: 'https://www.unhas.ac.id/' },
      { name: 'PERDAMI — Indonesian Ophthalmologists Association', logo: '/media/images/perdami.png', url: 'https://www.perdami.or.id/web/' },
      { name: 'The Sumba Foundation', logo: '/media/images/Sumba Foundation.jpg', url: 'https://sumbafoundation.org/' },
      { name: 'OneSight / Essilor', logo: '/media/images/One Sight.png', url: 'https://onesight.essilorluxottica.com/' },
      { name: 'ANZEF — Australian & New Zealand Eye Foundation', logo: '/media/images/ANZEF.png', url: 'https://anzef.org/' },
      { name: 'Perpetual Foundation', logo: '/media/images/perpetuallogo.png', url: 'https://www.perpetual.com.au/' },
      { name: 'PT Berlian Mansari Opti-Medic', logo: '/media/images/PT Equipment.jpg', url: 'https://berjaya-moc.com/' },
      { name: 'RSUD Waikabubak Hospital', logo: null },
    ],
    cta: 'Support our work in Sumba',
    ctaText: 'April 2026 showed us that a sustainable eye care system in West Sumba is no longer a vision — it is taking shape. Your support funds the training, surgical visits, and partnerships that transform episodic outreach into permanent local care.'
  },
  {
    id: 'projects-bangladesh',
    title: 'Chittagong Eye Infirmary',
    location: 'Bangladesh',
    description: "Foresight was an early contributor to the establishment of the Chittagong Eye Infirmary and Training Complex.",
    image: "/media/images/Bangladesh home.png",
    supportingImages: ["/media/images/Sumbaproject.png"],
    status: 'Legacy',
    intro: "Founded in 1978, the Chittagong Eye Infirmary and Training Complex (CEITC) is one of Foresight's landmark projects.",
    whatWeDid: "Foresight was an early contributor to the establishment of the Chittagong Eye Infirmary and Training Complex (CEITC), founded in 1978. Foresight's involvement helped lay the groundwork for what grew into a significant eye care institution in Bangladesh.\n\nForesight is no longer active in Bangladesh. This project is recognised as part of Foresight's legacy work.",
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
    description: 'Re-establishing over two decades of collaboration to rebuild local ophthalmic capacity and address the crisis of diabetic retinopathy.',
    image: "/media/images/Solomonproject.png",
    supportingImages: ["/media/images/Solomons3.jpg", "/media/images/Solomons4.jpg"],
    status: 'Active',
    intro: "Nearly three decades of partnership with the Solomon Islands — building specialist eye care capacity, upgrading infrastructure, and preparing to return in 2026 to address the country's growing crisis of diabetic retinopathy.",
    whyItMatters: [
      "The Solomon Islands faces a compounding eye health crisis. Since 2012, local health services have been under significant strain — and diabetes has become the defining public health emergency. Today, 80% of hospital admissions at the National Referral Hospital are diabetes-related, with 60% of those patients experiencing some form of vision loss from diabetic retinopathy — a condition that is largely preventable with early screening and treatment.",
      "Outside of Honiara, access to any form of specialist eye care remains severely limited. Regional centres in Gizo, Auki, and Kirakira have eye clinics, but lack consistent staffing, modern equipment, and specialist support. Without regular surgical visits and training, local capacity deteriorates quickly — leaving entire island populations without care."
    ],
    storyHeading: 'Almost 30 years in the Solomon Islands',
    ourStory: [
      "Foresight's connection to the Solomon Islands began in 1996, when Associate Professor Geoffrey Painter and Dr Neale Mulligan made the first ophthalmic surgical visit to the National Referral Hospital Eye Unit in Honiara — the start of what would become one of the organisation's longest international partnerships.",
      "Over nearly three decades, Foresight has delivered 15+ surgical and skills transfer visits, upgraded the NRH Eye Unit and operating theatre, built and equipped four eye clinics in regional centres, supported the training of ophthalmologists and ophthalmic nurses, and funded specialist training scholarships that produced the Solomon Islands' first and second locally qualified ophthalmologists.",
      "The partnership has operated through multiple phases — from the Pacific Islands Project (1996–2009), to AusAID-funded infrastructure projects (2009–2013), to continuous medical equipment support (2014–2019). Foresight is now preparing to return in 2026 with a renewed focus on diabetic retinopathy and sustainable local surgical capacity."
    ],
    whatWeDo: "As we prepare to return to the Solomon Islands in 2026, our work focuses on three interconnected priorities: specialist surgical support and mentoring for local doctors at the National Referral Hospital and regional centres; targeted training in diabetic retinopathy screening and laser treatment — the most urgent unmet clinical need in the country; and equipment provision to ensure clinics in Honiara, Gizo, Auki, and Kirakira have the tools they need to operate independently between visits.",
    approachCards: [
      { icon: 'Target', label: 'Clinical Care', text: 'Visiting teams of ophthalmologists and ophthalmic nurses provide surgical support and subspecialty care at the National Referral Hospital in Honiara, as well as outreach to regional centres including Gizo and Auki. Surgical sessions focus on cataract, diabetic retinopathy laser treatment, and other sight-restoring procedures unavailable locally.' },
      { icon: 'Users', label: 'Training', text: 'Foresight\'s training model focuses on building local permanence. We have funded two Solomon Island doctors through full ophthalmology specialist qualifications — Dr John Hue (2000) and Dr Mundi Qalo (2005, Diploma of Ophthalmology, University of PNG). The Christina Gordon Scholarship continues to support local doctors and senior nurses for specialist training in Australia. Our 2026 return will prioritise mentoring in diabetic retinopathy screening and advanced laser techniques.' },
      { icon: 'BriefcaseMedical', label: 'EQUIPMENT', text: 'Foresight has equipped the NRH Eye Unit and five regional eye clinics with ophthalmic surgical and diagnostic equipment — including portable slit lamps, keratometers, autoclaves, retinal cameras, and laser units. Equipment provision remains central to each visit, ensuring local teams can continue providing care after visiting teams depart.' },
      { icon: 'Eye', label: 'DIABETIC RETINOPATHY', text: 'With 80% of NRH admissions being diabetes-related and 60% of those patients experiencing vision loss, diabetic retinopathy is the defining eye health crisis in the Solomon Islands. Our 2026 mission will introduce a structured screening programme using portable retinal cameras, coupled with laser treatment support and training for local clinical staff.' }
    ],
    achievements: [
      '15+ surgical and skills transfer visits to the National Referral Hospital Eye Unit and regional centres since 1996 — delivering cataract surgery, subspecialty care, and hands-on clinical training across nearly three decades of continuous partnership.',
      'Two Solomon Island doctors fully qualified as ophthalmologists through Foresight-funded training — Dr John Hue (trained in Australia, 2000, now specialising in diabetic management in the Solomon Islands) and Dr Mundi Qalo (Diploma of Ophthalmology, University of PNG, 2005, now providing surgical services across Pacific nations).',
      'Four eye clinics built and five regional clinics equipped across the Solomon Islands — in Honiara, Gizo, Auki, and Kirakira — extending eye care beyond the capital to island populations that would otherwise have no access to specialist services.',
      'The Christina Gordon Scholarship, established in 2004 from a generous bequest, has funded specialist ophthalmic training for Solomon Islands doctors and senior nurses in Australia — building the specialist workforce the country needs for long-term sustainability.'
    ],
    nextSteps: "After several years away, Foresight is preparing to return to the Solomon Islands in 2026 with a renewed mission and sharper focus.\n\nOur priorities for the 2026 return:",
    nextStepsList: [
      'Recommencing regular surgical visits and specialist mentoring at the National Referral Hospital in Honiara and at regional centres in Gizo and Auki',
      'Launching a structured diabetic retinopathy screening programme using portable retinal cameras — to identify the thousands of patients currently presenting to hospital with advanced, preventable vision loss',
      'Providing laser treatment training for local doctors to enable independent management of diabetic retinopathy between visits',
      'Partnering with Rotary International on a $100,000 Global Grant to fund advanced surgical equipment and subspecialty training',
      'Refreshing equipment at the NRH Eye Unit and regional clinics to restore full operational capacity',
      'Re-establishing the Christina Gordon Scholarship to support the next generation of Solomon Islands eye health specialists'
    ],
    partnersHeading: 'A long-standing collaboration',
    partnersText: 'The Solomon Islands National Eye Program has been built through decades of partnership with:',
    partners: [
      'The National Referral Hospital Eye Unit, Honiara — our primary clinical partner since 1996',
      'The Solomon Islands Department of Ophthalmology and National Task Force for the Prevention of Blindness',
      'University of Papua New Guinea — specialist training for Solomon Islands doctors',
      'AusAID — infrastructure project funding 2009–2013',
      'Rotary International — Global Grant partner for 2026 equipment and training investment'
    ],
    cta: 'Support our work in the Solomon Islands',
    ctaText: "Nearly 30 years ago, Foresight made its first visit to Honiara and helped train the Solomon Islands' first ophthalmologist. Today, with a diabetes epidemic threatening the sight of thousands, we are preparing to return. Your support makes that possible — funding the surgical visits, equipment, and training that restore sight and build lasting local capacity."
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
    bio: 'George is a solicitor in private practice, formerly senior counsel in a global law firm. He sits on the boards of charities which pursue medical research, increase public awareness of the Australian constitutional framework, system of government and civic heritage, support the teaching of classical Greek and Latin in Australian universities and support the professional development and pursuit of excellence by young Australian opera artists.',
    image: '/media/images/George.png'
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
    image: '/media/images/Geoffrey.png'
  },
  {
    name: 'Prof Mary Crock',
    role: 'Director',
    titles: 'BA (Hons) LLB (Hons) PhD FAAL',
    bio: 'Professor of Public Law at the University of Sydney’s Law School and an Accredited Specialist in Immigration Law. She is a globally recognized expert on refugees with disabilities and was named one of the AFR\'s 100 Women of Influence.',
    image: '/media/images/Mary.jpg'
  },
  {
    name: 'Ms Melissa Perrine',
    role: 'Director',
    titles: 'BExPhys, MSportExSci, MPhysio, MSci',
    bio: 'A registered physiotherapist and four-time Winter Paralympian. Although legally blind, she has held four World Championship titles and served as Australia\'s opening ceremony flag bearer at the Beijing 2022 games.',
    image: '/media/images/Melissa.png'
  },
  {
    name: 'Dr Mark F. Ellis AM',
    role: 'Director',
    titles: 'MB BS, FRANZCO, FRACS',
    bio: 'A Consultant Ophthalmologist who founded an independent eye reach program in West Sumba in 2007. He has served as Chairman of the Victorian Branch of RANZCO and worked extensively in India and East Timor.',
    image: '/media/images/Mark Eliis.png'
  },
  {
    name: 'Dr Georgina Kourt',
    role: 'Director',
    titles: 'MBBS, FRANZCO, FRACS',
    bio: 'An Honorary Medical Officer in Ophthalmology and Oculoplastic Surgery at Sydney Eye Hospital. She focuses on improving rural medical services and eyecare for First Nations people and has previously undertaken annual surgical field trips to the Northern Territory. She currently undertakes surgical outreach in the Murrumbidgee region. She is also a Senior Inspector appointed by RANZCO for accreditation of Hospitals for the training of Ophthalmology Registrars.',
    image: '/media/images/Gina.png'
  },
  {
    name: 'Ms Kerrie Legg',
    role: 'Director',
    titles: 'RN, Mid Cert, MN',
    bio: 'CEO/DON of Chatswood Private Hospital, one of Australia\'s largest stand-alone day hospitals. She has participated in 17 overseas outreach projects to the Solomon Islands, China, and the Philippines over the last 23 years.',
    image: 'https://ui-avatars.com/api/?name=ML&background=004aad&color=ffffff&size=512'
  },
  {
    name: 'Mr Kevin Gardner',
    role: 'Director',
    titles: 'MCOM BBus FCPA FCIS JP',
    bio: 'Former Chairman of Lenity Australia and CEO of Sydney Eye Hospital Foundation. He has over 40 years of senior management experience in finance and accounting and currently serves as a Director for the Mercy Foundation.',
    image: '/media/images/Kevin.png'
  },
  {
    name: 'Mr Aziz Meherali',
    role: 'Director',
    titles: 'CFP, BaBUS',
    bio: 'A Senior Wealth Adviser with over 25 years of experience in the financial planning industry. He specializes in developing investment and executive strategies for private clients and holds a Strategic Leadership qualification from Stanford.',
    image: '/media/images/Aziz.png'
  },
  {
    name: 'Ms Janine Hobson',
    role: 'Director',
    titles: 'B. Optom (Hons) GradCert Therapeutic Optometry',
    bio: 'An experienced Optometrist and founder of Young Eyes Optometrists. She specializes in children\'s vision and therapeutic optometry and is involved with the Sumba Eye Program training local staff in paediatric care.',
    image: '/media/images/Janine.jpg'
  },
];

export const PARTNERS = [
  { name: 'IAPB', logo: '/media/images/IAPB.png', url: 'https://www.iapb.org/' },
  { name: 'vision 2020', logo: '/media/images/vision2020.png', url: 'https://vision2020australia.org.au/' },
  { name: 'ACFID', logo: '/media/images/ACFID.png', url: 'https://acfid.asn.au/' },
  { name: 'ANZEF', logo: '/media/images/ANZEF.png', url: 'https://anzef.org/' },
];

export const PATIENT_STORIES: Record<string, any> = {
  'cahara': {
    name: 'Cahara',
    location: 'Sumba, Indonesia',
    image1: '/media/images/Cahara.png',
    image2: '/media/images/Sumbaproject2.png',
    quote: '"When I put on my glasses, I saw everything clearly—the trees, my teacher’s smile, and the words on the chalkboard."',
    p1: 'Ten-year-old Cahara from Sumba was diagnosed with severe myopia. For years, she struggled to keep up in class, unable to see the blackboard even from the front row. She was scared to sing because she couldn’t read the lyrics, and she thought something was fundamentally wrong with her.',
    p2: 'Within minutes of being screened by the Sumba Eye Program team during a school outreach visit, she was fitted with her first pair of corrective lenses. The transformation was immediate. The blurry world she had grown accustomed to suddenly snapped into sharp focus.',
    p3: 'With her vision restored, Cahara is now thriving in school and engaging fully with her community. Her journey from the back of the classroom to the front is a powerful reminder of how simple medical interventions can unlock a child\'s potential and change their future forever.'
  },
  'kristin': {
    name: 'Kristin',
    location: 'Solomon Islands',
    image1: '/media/images/Kristin.png',
    image2: '/media/images/Solomonproject.png',
    quote: '"I thought my working days were over. Now, I can support my family again and see my grandchildren grow."',
    p1: 'Kristin, a grandmother from a remote village in the Solomon Islands, had seen her world slowly fade to grey over several years. Cataracts in both eyes had left her almost entirely dependent on her family for daily tasks.',
    p2: 'Through the National Eye Program supported by Foresight, Kristin underwent a 20-minute sight-restoring surgery. The procedure, which is standard in many parts of the world, was life-changing for her. When the bandages were removed the following day, she could see clearly for the first time in years.',
    p3: 'Restored vision meant restored independence. Kristin is now back to her garden, contributing to her family\'s livelihood and participating in community life. Her story reflects the thousand of elders whose lives are transformed by surgical intervention each year.'
  },
  'richard': {
    name: 'Richard',
    location: 'Philippines',
    image1: '/media/images/Richard.png',
    image2: '/media/images/Richard2.png',
    quote: '"Being able to work again is the greatest gift. I no longer feel like a burden to my children."',
    p1: 'Richard, a farmer in Northern Luzon, relied on his sight for his survival. When cataracts began to cloud his vision, he could no longer work his fields safely, leading to a direct and devastating impact on his family\'s income.',
    p2: 'During a mobile surgical mission supported by Foresight Australia, Richard received the surgery he desperately needed. The volunteer medical team worked tirelessly to clear the backlog of patients, ensuring that farmers like Richard could return to their essential work.',
    p3: 'Today, Richard is back in the fields, productive and proud. His successful recovery has not only benefited him but has stabilized his entire household, proving that eye care is a critical component of economic stability in rural communities.'
  },
  'keirwin': {
    name: 'Keirwin',
    location: 'Philippines',
    image1: '/media/images/Keirwin.png',
    image2: '/media/images/Philippines Home.png',
    quote: '"I can play with my friends now without being afraid of falling down. Everything is so bright!"',
    p1: 'Keirwin was born with a congenital eye condition that severely limited his depth perception and clarity. In his early years, he was often hesitant to play or explore, fearful of the obstacles he couldn\'t clearly see.',
    p2: 'A targeted clinical procedure at a regional hospital in the Philippines changed Keirwin\'s life. The surgery corrected the structural issues in his eyes, allowing his brain to finally receive clear visual signals for the first time.',
    p3: 'With clear vision, Keirwin is now a bundle of energy. He is excelling in his early education and is no longer held back by the fear of the dark or the unknown. His early intervention has set him on a path toward a full and active life.'
  },
  'andre': {
    name: 'Andre',
    location: 'Sumba, Indonesia',
    image1: '/media/images/Andre.png',
    image2: '/media/images/Andre2.png',
    quote: '"I never expected to see the colors of my village again. It is like being born a second time."',
    p1: 'Andre had lived in darkness for nearly a decade. Living in a remote part of West Sumba, he had little hope of receiving specialized medical care until the Sumba Eye Program established its permanent clinic at RSUD Waikabubak.',
    p2: 'Andre was one of the first patients to receive surgery at the newly equipped facility. The local nurses, trained by Foresight specialists, assisted in the procedure, demonstrating the sustainable model of care that Foresight champions.',
    p3: 'When Andre returned to his village, he was greeted as a man returned from the shadows. His story has inspired others in his community to seek screening, helping to break the stigma and fear surrounding eye surgery in the region.'
  },
  'ezry-and-lodowyk': {
    name: 'Ezry & Lodowyk',
    title: 'She didn\'t know she couldn\'t see.',
    location: 'West Sumba, Indonesia',
    program: 'Sumba Eye Program',
    date: 'April 2026',
    image1: '/media/images/Ezry.png',
    image2: '/media/images/Sumbaproject2.png',
    quote: '"Sis, let\'s get our eyes checked. So you can get cool glasses like mine."',
    p1: 'Lodowyk had his eyes tested at last year\'s Foresight outreach in West Sumba, Indonesia. His prescription came back at minus six — enough that he\'d spent years sitting at the front of the class, still struggling to make out what his teacher wrote on the board. He received a pair of glasses. He moved to the back of the room. And this year, when our team returned to Sumba for the April 2026 visit, he came back — and brought his sixteen-year-old sister with him.',
    h2: 'Blurry was just how the world looked',
    p2: 'Ezry had never complained about her vision. She hadn\'t thought there was anything to complain about. Blurry was simply how the world looked. She\'d grown up shy — quiet in a way that, in hindsight, her family understands a little differently now. She was nervous at the outreach. Reluctant. Foresight volunteer Craig had gently encouraged the children\'s mother, Stella, to bring Ezry along, and Stella had done her best to reassure her. But Ezry still felt embarrassed. She didn\'t want to be the centre of attention. When our team examined her eyes, they found a prescription of minus twelve. Worse than her brother\'s. Significantly worse.',
    h3: 'Taking it in quietly',
    p3: 'She was given glasses, and she stood there for a moment — just looking around. Then further. At things outside, at distances she\'d never seen clearly. Taking it in quietly, the way a shy person does when something surprises them. Blurry had been normal. This was not normal. This was just — better.',
    pullQuote: '"Their eye condition becomes an obstacle to their dreams. We as parents are ready to support their dreams."',
    pullQuoteAttribution: '— Stella, mother of Lodowyk and Ezry',
    h4: 'Two children. Two futures.',
    p4: 'Ezry wants to be a doctor. Lodowyk wants to be a soldier. Two children, one family, two futures that now look considerably clearer. What Foresight gave this family wasn\'t extraordinary. It was a pair of glasses — the most ordinary thing in the world. What was extraordinary was being there to give it.',
    p5: 'This story is one of hundreds from our April 2026 visit to West Sumba, where our team saw 818 patients, performed 55 cataract surgeries, and distributed 744 pairs of glasses in just four days.',
    ctaHeading: 'Your support makes stories like this possible.',
    ctaButtonText: 'Give the Gift of Sight'
  }
};

export interface NewsArticleContentBlock {
  type: 'paragraph' | 'heading' | 'list' | 'cta';
  text?: string;
  items?: string[];
  buttonText?: string;
  buttonAction?: string;
}

export interface NewsArticle {
  id: string;
  title: string;
  date: string;
  category: string;
  location?: string;
  image: string;
  excerpt: string;
  content: NewsArticleContentBlock[];
}

export const NEWS_ARTICLES: NewsArticle[] = [
  {
    id: 'sumba-visit-2026',
    title: 'April 2026 Sumba Eye Program Visit: A Turning Point for Sustainable Eye Care in West Sumba',
    date: 'April 2026',
    category: 'Program Update',
    location: 'West Sumba, Indonesia',
    image: '/media/images/Sumbaproject.png',
    excerpt: 'In April 2026, Foresight Australia returned to RSUD Waikabubak Hospital in West Sumba for another milestone visit — 818 patients seen, 55 cataract surgeries performed, and a growing local team taking ownership of the eye clinic.',
    content: [
      {
        type: 'paragraph',
        text: 'In April 2026, Foresight Australia returned to RSUD Waikabubak Hospital in West Sumba, Indonesia, for another visit to the Sumba Eye Program. This visit marked a clear step forward in the program\'s evolution — from a series of outreach missions into a developing, locally-led eye care service that continues to grow between visits.'
      },
      {
        type: 'heading',
        text: 'Key outcomes from the April 2026 visit'
      },
      {
        type: 'paragraph',
        text: 'Over four clinical days, the team delivered a comprehensive range of eye care services to 818 patients. The results speak for themselves:'
      },
      {
        type: 'list',
        items: [
          '818 patients received care over four clinical days',
          '744 pairs of glasses provided',
          '55 cataract surgeries performed',
          '3 YAG laser treatments completed',
          '105 referrals made',
          '100% of post-operative reviews completed before the team departed'
        ]
      },
      {
        type: 'heading',
        text: 'A stronger, more organised clinic'
      },
      {
        type: 'paragraph',
        text: 'One of the most encouraging signs from this visit was the improvement in how the clinic operated day to day. Compared with earlier visits, patient movement was more structured, staff roles were clearer, and the overall service was more coordinated.'
      },
      {
        type: 'paragraph',
        text: 'Eight parallel screening stations ran efficiently throughout each day. Hospital eye nurses played a more active and confident role in daily operations — managing patient flow, supporting refraction, assisting in surgery preparation, and conducting post-operative checks. Their growing capability contributed significantly to the improved efficiency and quality of care.'
      },
      {
        type: 'paragraph',
        text: 'This reflects an important shift: the eye care model at RSUD Waikabubak is no longer operating only as a short-term outreach event. It is increasingly functioning as a developing local eye care system.'
      },
      {
        type: 'heading',
        text: 'Training the next layer of care — Puskesmas staff'
      },
      {
        type: 'paragraph',
        text: 'A major new development in April 2026 was the formal engagement of Puskesmas staff in the program for the first time. Puskesmas are government-run community health centres that serve as the first point of contact for patients in rural communities across West Sumba.'
      },
      {
        type: 'paragraph',
        text: 'Eight Puskesmas staff from across the district participated in a structured training and observation program during the visit. They learned basic visual acuity testing, trial lens use, identification of common eye conditions, and referral pathways to the hospital clinic.'
      },
      {
        type: 'paragraph',
        text: 'Their feedback was enthusiastic. As one participant said: "The training helped us understand how to test vision correctly and identify patients who need glasses or further treatment. We want more training so we can help our communities better."'
      },
      {
        type: 'paragraph',
        text: 'Strengthening this primary care network is essential for earlier detection and sustainable continuity of care between specialist visits.'
      },
      {
        type: 'heading',
        text: 'Looking ahead to September 2026'
      },
      {
        type: 'paragraph',
        text: 'The April 2026 visit confirmed that the foundations of a sustainable eye care system in West Sumba are now clearly taking shape. The next phase focuses on consolidating those gains.'
      },
      {
        type: 'paragraph',
        text: 'The team will return in September 2026 with the following priorities:'
      },
      {
        type: 'list',
        items: [
          'Progress BPJS approval so more patients can access affordable care through Indonesia\'s national health insurance system',
          'Deliver refresher training for hospital eye nurses',
          'Expand structured training for Puskesmas staff across the district',
          'Strengthen referral pathways between community health centres and the hospital clinic',
          'Continue building toward a financially sustainable, locally led clinic that operates consistently between visiting team trips'
        ]
      },
      {
        type: 'paragraph',
        text: 'The April 2026 visit showed that this program is evolving in exactly the right direction. Continued support from donors, partners, and the local community will be essential to convert this progress into permanence. Thank you to everyone who makes this work possible.'
      },
      {
        type: 'cta',
        buttonText: 'Support the Sumba Eye Program',
        buttonAction: '/donate'
      }
    ]
  },
  {
    id: 'griffith-excellence-2024',
    title: 'Recognised for Excellence: How Foresight is Closing the Gap in Eye Care for First Nations Australians',
    date: '2026',
    category: 'Program Update',
    location: 'Griffith, New South Wales',
    image: '/media/images/Indigenousproject.png',
    excerpt: 'Foresight Australia\'s Griffith Indigenous Eye Health program has won the MLHD Excellence Award and secured an inaugural ANZEF grant — recognition of a model that is transforming eye care access for Aboriginal communities in rural NSW.',
    content: [
      {
        type: 'paragraph',
        text: 'When the Western Murrumbidgee Local Health District\'s only visiting ophthalmologist retired after 14 years of service, a critical gap opened in eye care for one of regional New South Wales\' most underserved communities. Foresight Australia stepped in — and what followed has been recognised as one of the most impactful eye health initiatives in rural Australia.'
      },
      {
        type: 'heading',
        text: 'Three problems. One integrated solution.'
      },
      {
        type: 'paragraph',
        text: 'Working in partnership with Gordon Eye Surgery and Chatswood Private Hospital, Foresight identified three urgent needs in the Western Murrumbidgee Local Health District and built a response to address all three simultaneously.'
      },
      {
        type: 'paragraph',
        text: 'The first was the absence of any regular specialist ophthalmology service. Foresight established a permanent clinic at Griffith Base Hospital — the first hospital-based public ophthalmology clinic in the district in 14 years — with a visiting team of ophthalmologists, an orthoptist, and a RANZCO-accredited registrar attending every four weeks.'
      },
      {
        type: 'paragraph',
        text: 'The second was the waiting list for cataract surgery, which had stretched beyond 12 months. By allocating additional theatre time at St Vincent\'s Community Private Hospital, the team reduced that waiting time to just a few months — and has maintained it there since.'
      },
      {
        type: 'paragraph',
        text: 'The third was access to eye care for Aboriginal communities across the district. This is where the program\'s impact has been most transformative.'
      },
      {
        type: 'heading',
        text: 'Training the people closest to the community'
      },
      {
        type: 'paragraph',
        text: 'Based on Foresight\'s core philosophy of sustainable empowerment over short-term aid, the team developed a structured training program for Aboriginal Health Care Workers and GPs at the Griffith Aboriginal Medical Service (GAMS). The goal: equip the people already trusted within these communities with the skills and equipment to detect eye disease and vision impairment before it becomes irreversible.'
      },
      {
        type: 'paragraph',
        text: 'Training seminars were run in 2022 and 2023, with participants learning to identify cataracts, glaucoma, and diabetic retinopathy — one of the most prevalent causes of preventable blindness in Aboriginal communities. Each graduate received diagnostic equipment donated by Foresight to use in their day-to-day work.'
      },
      {
        type: 'paragraph',
        text: 'The results spoke for themselves. As one GP shared after completing the training: "I am now able to treat patients in general practice with eye problems rather than sending them to the emergency department." Another said the practical sessions were "very valuable" and called for them to be run periodically to keep skills current.'
      },
      {
        type: 'heading',
        text: 'MLHD Excellence Award'
      },
      {
        type: 'paragraph',
        text: 'In 2023, the project was awarded the MLHD Excellence Award under the theme "Saving Sight is Our Vision" — formal recognition from the health district itself of the program\'s impact on clinical outcomes and community access.'
      },
      {
        type: 'heading',
        text: 'ANZEF grant — expanding the reach'
      },
      {
        type: 'paragraph',
        text: 'In late 2023, Foresight was proud to receive one of the inaugural grants from the Australian and New Zealand Eye Foundation (ANZEF) — the philanthropic arm of RANZCO — to continue and expand the training program.'
      },
      {
        type: 'paragraph',
        text: 'The first ANZEF-funded training seminar was delivered at GAMS in 2024, combining refresher training for previously trained staff with new streams for GAMS doctors and expanded training for Aboriginal Health Care Workers across the broader MLHD — including staff from Wagga, Narrandera, Leeton, Tumut, and Hay.'
      },
      {
        type: 'paragraph',
        text: 'Two further ANZEF-funded seminars are planned, which will expand screening capacity into more remote areas of the Western MLHD and initiate a school screening program for children.'
      },
      {
        type: 'heading',
        text: 'What this means for the community'
      },
      {
        type: 'paragraph',
        text: 'The Griffith model demonstrates that closing the gap in eye health for First Nations Australians does not require a permanent specialist presence — it requires the right infrastructure, the right partnerships, and a genuine commitment to training the people already embedded in the community.'
      },
      {
        type: 'paragraph',
        text: 'With established referral pathways from Aboriginal Medical Service sites across the MLHD into the Griffith Base Hospital clinic, the system is now self-reinforcing: community health workers screen, identify, and refer; the visiting specialist team treats; and the cycle continues — visit after visit, community after community.'
      },
      {
        type: 'paragraph',
        text: 'Foresight Australia is grateful to the Western Murrumbidgee Local Health District, Gordon Eye Surgery, Chatswood Private Hospital, ANZEF, Turramurra Rotary, and Griffith Avanti Rotary for their partnership in making this program possible — and to the Aboriginal Health Care Workers, GPs, and nurses across the district who are turning training into lasting change.'
      },
      {
        type: 'cta',
        buttonText: 'Support the Griffith Program',
        buttonAction: '/donate'
      }
    ]
  },
  {
    id: 'solomon-leadership-2025',
    title: 'Supporting Eye Health Leadership in Solomon Islands',
    date: 'October 2025',
    category: 'Hobart Conference',
    location: 'Solomon Islands',
    image: '/media/images/solomon-islands-dr-mathew-bonie-hobart.png',
    excerpt: 'Foresight Australia was pleased to sponsor Dr Mathew Bonie, an ophthalmologist from Solomon Islands, to attend the recent RANZCO Global Eye Health and IAPB conference in Hobart.',
    content: [
      {
        type: 'paragraph',
        text: 'Foresight Australia was pleased to sponsor Dr Mathew Bonie, an ophthalmologist from Solomon Islands, to attend the recent RANZCO Global Eye Health and IAPB conference in Hobart.'
      },
      {
        type: 'paragraph',
        text: 'This provided an important opportunity for Dr Bonie to hear from and connect with leaders in global eye health, while also helping strengthen planning for future programmes in Solomon Islands to build local ophthalmic capacity.'
      },
      {
        type: 'paragraph',
        text: 'Foresight remains committed to supporting long-term, locally led eye health development in Solomon Islands through partnership, skills transfer, and sustained engagement.'
      }
    ]
  },
  {
    id: 'ranzco-conference-2025',
    title: 'Foresight Australia at the RANZCO Global Eye Health and IAPB Conference',
    date: 'October 2025',
    category: 'Hobart Conference',
    location: 'Australia',
    image: '/media/images/solomon-islands-geoffrey-painter-hobart.png',
    excerpt: 'Foresight Australia was represented at the recent RANZCO Global Eye Health and IAPB conference in Hobart by A/Prof Geoffrey Painter AM, who promoted Foresight’s return to in-country support for Solomon Islands in 2026.',
    content: [
      {
        type: 'paragraph',
        text: 'Foresight Australia was represented at the recent RANZCO Global Eye Health and IAPB conference in Hobart by A/Prof Geoffrey Painter AM, who promoted Foresight’s return to in-country support for Solomon Islands in 2026.'
      },
      {
        type: 'paragraph',
        text: 'During the conference, Geoffrey participated in the RANZCO Global Health Roundtable NGO discussion as well as the PacEYES meeting, helping continue important conversations about eye health partnerships and future collaboration across the region.'
      },
      {
        type: 'paragraph',
        text: 'This year is especially significant, marking the 30th anniversary of Geoffrey’s first visit to Solomon Islands — a reminder of Foresight’s long-standing connection and commitment to strengthening local eye care capacity.'
      }
    ]
  }
];

