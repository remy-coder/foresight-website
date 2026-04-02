import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const appTsxPath = path.join(__dirname, 'src', 'App-RemyDP.tsx');
let content = fs.readFileSync(appTsxPath, 'utf-8');

// 1. Home page hero image and subheadline
content = content.replace(
    'src="http://www.foresight.org.au/wp-content/uploads/2026/03/Brown-Illustrated-Welcome-December-Poster-5.png"',
    'src="/media/images/home-hero-sumba-consultation.png"'
);
content = content.replace(
    'Foresight Australia is a not-for-profit organisation dedicated to the prevention of avoidable blindness through sustainable eye care programs, clinical training, and long-term partnerships with local communities.',
    '9 out of 10 people who are blind do not need to be. Help us restore sight, train local eye care teams, and build lasting systems.'
);

// Insert Andre story before Partners Section on Home Page
const andre_story = `
      {/* Andre Story */}
      <section className="py-24 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-primary/5 rounded-[3rem] p-8 md:p-20 border border-primary/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-accent/20 blur-[60px] rounded-full"></div>
                <img
                  src="/media/images/Andre.png"
                  alt="Andre"
                  className="rounded-3xl shadow-2xl relative z-10 w-full object-cover aspect-square md:aspect-[4/5]"
                />
              </div>
              <div>
                <Quote className="w-16 h-16 text-primary/20 mb-8" />
                <h3 className="text-3xl md:text-5xl font-display font-extrabold text-gray-900 tracking-tight mb-6">
                  "I never expected to see the colors of my village again."
                </h3>
                <p className="text-xl text-gray-600 font-display font-medium leading-relaxed mb-10">
                  Andre watched his world steadily fade to complete darkness. Thanks to a short, specialized procedure, the debilitating barrier to his sight was removed. He received not just medical treatment, but compassionate care.
                </p>
                <button
                  onClick={() => onNavigate('impact')}
                  className="px-6 py-4 bg-white rounded-2xl shadow-sm border border-gray-100 mb-8 text-primary font-display font-black text-sm uppercase tracking-widest hover:shadow-md transition-all"
                >
                  Read more stories
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

`;
content = content.replace('{/* Partners Section */}', andre_story + '      {/* Partners Section */}');

// 2. About page hero block - Frank Billson
const about_hero_old = `        <div className="max-w-5xl mb-16 md:mb-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-black uppercase tracking-[0.2em] mb-10 shadow-sm"
          >
            <span>Our Story</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl md:text-8xl font-display font-extrabold mb-8 md:mb-12 leading-[1.05] md:leading-[0.95] tracking-tighter"
          >
            A clear vision for a <span className="text-primary relative inline-block">brighter<svg className="absolute w-full h-3 -bottom-1 left-0 text-accent/30" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" /></svg></span> future.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg md:text-2xl text-gray-500 leading-relaxed font-display font-medium max-w-4xl"
          >
            Foresight Australia is a dedicated not-for-profit organisation leading the fight against preventable blindness through clinical excellence, sustainable development, and global partnerships since 1977.
          </motion.p>
        </div>`;

const about_hero_new = `        <div className="max-w-5xl mb-16 md:mb-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-black uppercase tracking-[0.2em] mb-10 shadow-sm"
          >
            <span>Our Founder</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl sm:text-6xl md:text-8xl font-display font-extrabold mb-8 md:mb-12 leading-[1.05] md:leading-[0.95] tracking-tighter"
          >
            Prof Frank Billson <span className="text-primary relative inline-block">AO<svg className="absolute w-full h-3 -bottom-1 left-0 text-accent/30" viewBox="0 0 100 10" preserveAspectRatio="none"><path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="4" fill="transparent" /></svg></span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg md:text-2xl text-primary leading-relaxed font-display font-medium max-w-4xl italic"
          >
            "The patient is everything. In 50 years of medicine, I have never forgotten the person behind the disease."
          </motion.p>
        </div>`;
content = content.replace(about_hero_old, about_hero_new);

// 3. Projects Page - split active/legacy
const projects_page_old = `            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
              {filteredProjects.map((project) => (
                <motion.div`;
const projects_page_new = `            <div className="mb-12">
              <h2 className="text-3xl font-display font-extrabold text-gray-900 mb-8 border-b border-gray-200 pb-4">Active Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.filter(p => ['projects-indonesia', 'projects-australia', 'projects-solomon-islands'].includes(p.id)).map((project) => (
                  <motion.div`;
content = content.replace(projects_page_old, projects_page_new);

const projects_end_exact = `              ))}
            </div>
          </div>
        </div>
    );
}

function ProjectDetailPage`;
const projects_end_exact_new = `              ))}
              </div>
            </div>
            
            <div className="mt-16 mb-12">
              <h2 className="text-3xl font-display font-extrabold text-gray-900 mb-8 border-b border-gray-200 pb-4">Legacy Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.filter(p => !['projects-indonesia', 'projects-australia', 'projects-solomon-islands'].includes(p.id)).map((project) => (
                  <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 group flex flex-col"
                >
                  <div className="relative h-64 overflow-hidden grayscale opacity-80">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-xl text-gray-500 font-display font-black uppercase tracking-widest text-[11px]">
                      {project.location}
                    </div>
                  </div>
                  <div className="p-8 flex flex-col flex-1 bg-gray-50/50">
                    <h3 className="text-2xl font-display font-extrabold text-gray-800 mb-4">{project.title}</h3>
                    <p className="text-gray-500 font-display font-medium leading-relaxed mb-8 flex-1">
                      {project.description}
                    </p>
                    <button
                      onClick={() => onSelectProject(project.id)}
                      className="w-full py-5 bg-white border border-gray-200 hover:bg-gray-50 text-gray-700 rounded-2xl font-display font-black uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-3 group/btn"
                    >
                      Read Legacy Impact <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
    );
}

function ProjectDetailPage`;
// try regext as exact formatting might differ in indentation
content = content.replace(/              \)\)}\n\s*<\/div>\n\s*<\/div>\n\s*<\/div>\n\s*\);\n\s*}\n\n\s*function ProjectDetailPage/s, projects_end_exact_new);

content = content.replace(/SECTION 3: What we do/g, 'SECTION 3: Our Work');
content = content.replace(/What we do<\/h3>/g, 'Our Work</h3>');
content = content.replace(/SECTION 4: Key achievements/g, 'SECTION 4: Stats');
content = content.replace(/Key achievements<\/h3>/g, 'Stats</h3>');
content = content.replace(/SECTION 2: Why it matters/g, 'SECTION 2: Impact');
content = content.replace(/Why it matters<\/h3>/g, 'Impact</h3>');

// 5. Donation Page
const donate_impact_old = `                    {[
                      { val: '$50', desc: 'Help provide eye screenings in remote communities' },
                      { val: '$100', desc: 'Support training of local eye care workers' },
                      { val: '$250', desc: 'Help fund life-changing treatment' }
                    ].map((impact, i) => (`.trim();
const donate_impact_new = `                    {[
                      { val: 'General', desc: "General donation to Foresight's projects" },
                      { val: 'Sumba', desc: 'Support the Sumba Eye Program' },
                      { val: 'Solomon', desc: 'Support the Solomon Islands partnership' },
                      { val: 'Australia', desc: 'Support the Australian Project' }
                    ].map((impact, i) => (`.trim();
if(content.includes(donate_impact_old)) {
    content = content.replace(donate_impact_old, donate_impact_new);
    content = content.replace('grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-16 md:mb-20', 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 mb-16 md:mb-20');
}

// News Page Update
const news_page_regex = /function NewsPage\(\) \{\s*return \(\s*<div.*?(?=function)/s;
const news_page_new = `function NewsPage() {
  return (
            <div className="pt-32 pb-16 md:pt-48 md:pb-24 bg-[#FAFAFA] min-h-screen">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="max-w-3xl mb-16">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[13px] font-black uppercase tracking-[0.2em] mb-10"
                  >
                    <span>Latest Updates</span>
                  </motion.div>
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl sm:text-5xl md:text-7xl font-display font-extrabold mb-8 md:mb-12 leading-[1.1] md:leading-[0.95] tracking-tighter"
                  >
                    News & <span className="text-primary">Announcements</span>.
                  </motion.h1>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                  <motion.article 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col"
                  >
                    <div className="aspect-[16/9] w-full relative">
                      <img src="/media/images/solomon-islands-dr-mathew-bonie-hobart.png" alt="Dr Mathew Bonie" className="w-full h-full object-cover" />
                      <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-widest text-primary">Hobart Conference</div>
                    </div>
                    <div className="p-8 flex flex-col flex-1">
                      <p className="text-gray-400 text-sm font-display font-bold uppercase tracking-widest mb-4">April 2026</p>
                      <h3 className="text-2xl font-display font-extrabold text-gray-900 mb-4">Dr Mathew Bonie at Hobart Conference</h3>
                      <p className="text-gray-600 font-display font-medium leading-relaxed flex-1">Dr Mathew Bonie shares critical updates on the Solomon Islands partnership and achievements in regional eye care.</p>
                      <button className="mt-8 text-primary font-display font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">Read More <ArrowRight className="w-4 h-4" /></button>
                    </div>
                  </motion.article>

                  <motion.article 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 flex flex-col"
                  >
                    <div className="aspect-[16/9] w-full relative">
                      <img src="/media/images/solomon-islands-geoffrey-painter-hobart.png" alt="Geoffrey Painter" className="w-full h-full object-cover" />
                      <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-xl text-[11px] font-black uppercase tracking-widest text-primary">Hobart Conference</div>
                    </div>
                    <div className="p-8 flex flex-col flex-1">
                      <p className="text-gray-400 text-sm font-display font-bold uppercase tracking-widest mb-4">April 2026</p>
                      <h3 className="text-2xl font-display font-extrabold text-gray-900 mb-4">Geoffrey Painter Highlights Solomon Islands Partnership</h3>
                      <p className="text-gray-600 font-display font-medium leading-relaxed flex-1">Geoffrey Painter outlines the historic achievements and long-term goals for building a national eye health workforce in the Solomon Islands.</p>
                      <button className="mt-8 text-primary font-display font-black text-xs uppercase tracking-widest flex items-center gap-2 hover:gap-4 transition-all">Read More <ArrowRight className="w-4 h-4" /></button>
                    </div>
                  </motion.article>
                </div>
              </div>
            </div>
            );
}

`;

content = content.replace(news_page_regex, news_page_new);

// Reduce whitespace globally
content = content.replace(/py-24 md:py-32/g, 'py-16 md:py-24');
content = content.replace(/mb-32 md:mb-48/g, 'mb-16 md:mb-24');
content = content.replace(/py-24 md:py-40/g, 'py-16 md:py-24');

// Finally, Impact title to 'Stories from Field' in ImpactPage:
content = content.replace('<span>Our Impact</span>', '<span>Stories from the Field</span>');

fs.writeFileSync(appTsxPath, content, 'utf-8');

// Update constants.ts
const constantsTsPath = path.join(__dirname, 'src', 'constants.ts');
let const_content = fs.readFileSync(constantsTsPath, 'utf-8');

const_content = const_content.replace("title: 'Regional & Indigenous Australia'", "title: 'Australian Project'");
const_content = const_content.replace("title: 'The Sumba Eye Program'", "title: 'Sumba Eye Program'");
const_content = const_content.replace("{ id: 'impact', label: 'Impact' }", "{ id: 'impact', label: 'Stories from the Field' }");

fs.writeFileSync(constantsTsPath, const_content, 'utf-8');

console.log("Edit complete!");
