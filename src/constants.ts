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
  { value: '3,000+', label: 'screenings conducted' },
  { value: '2,000+', label: 'patients treated' },
  { value: '2,500+', label: 'glasses distributed' },
  { value: 'over 200+', label: 'surgeries performed' },
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
    bio: 'A solicitor in private solo practice and former international partner and senior counsel of the global law firm Baker McKenzie. He provides legal expertise to several not-for-profits, including the Opera Foundation for Young Australians and the RPA Heart Centre Foundation.',
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
    bio: 'An Honorary Medical Officer in Ophthalmology and Oculoplastic Surgery at Sydney Eye Hospital. She focuses on improving rural medical services and eyecare for First Nations people, leading annual surgical field trips to the Northern Territory.',
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
