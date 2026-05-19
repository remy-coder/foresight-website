import { useState, useEffect, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Heart,
  Mail,
  Phone,
  Menu,
  X,
  Facebook,
  Instagram,
  Linkedin,
  Youtube
} from 'lucide-react';
import { NAVIGATION, PROJECTS } from './constants';
import { getUrlFromId } from './utils/navigation';
import NavLink from './components/NavLink';

// Lazy load pages
const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));
const ProjectDetailPage = lazy(() => import('./pages/ProjectDetailPage'));
const ImpactPage = lazy(() => import('./pages/ImpactPage'));
const GetInvolvedPage = lazy(() => import('./pages/GetInvolvedPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));
const DonatePage = lazy(() => import('./pages/DonatePage'));
const StoryPage = lazy(() => import('./pages/StoryPage'));
const NewsPage = lazy(() => import('./pages/NewsPage'));
const ReportsPoliciesPage = lazy(() => import('./pages/ReportsPoliciesPage'));
const SubscribePage = lazy(() => import('./pages/SubscribePage'));
const LeadersPage = lazy(() => import('./pages/LeadersPage'));
const VolunteerFormPage = lazy(() => import('./pages/VolunteerFormPage'));
const PartnerFormPage = lazy(() => import('./pages/PartnerFormPage'));
const LegacyGivingPage = lazy(() => import('./pages/LegacyGivingPage'));

// Fallback component
const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-[#FAFAFA]">
    <motion.div 
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className="w-10 h-10 border-4 border-primary border-t-transparent rounded-full"
    />
  </div>
);

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [selectedStoryId, setSelectedStoryId] = useState<string | null>(null);

  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname;
      const id = Object.entries({
        '/': 'home',
        '/about': 'about',
        '/about/leaders': 'leaders',
        '/where-we-work': 'projects',
        '/where-we-work/australia': 'projects',
        '/where-we-work/sumba': 'projects',
        '/where-we-work/solomon-islands': 'projects',
        '/stories': 'impact',
        '/get-involved': 'get-involved',
        '/get-involved/volunteer': 'volunteer',
        '/get-involved/partner': 'partner',
        '/get-involved/legacy-giving': 'legacy-giving',
        '/news': 'news',
        '/contact': 'contact',
        '/donate': 'donate',
        '/reports-policies': 'reports-policies',
        '/subscribe': 'subscribe'
      }).find(([p]) => p === path)?.[1] || 'home';

      if (path === '/where-we-work/australia') setSelectedProjectId('projects-australia');
      else if (path === '/where-we-work/sumba') setSelectedProjectId('projects-indonesia');
      else if (path === '/where-we-work/solomon-islands') setSelectedProjectId('projects-solomon-islands');
      else if (path.startsWith('/stories/') && path !== '/stories') {
        setSelectedStoryId(path.replace('/stories/', ''));
        setCurrentPage('story');
        return;
      } else {
        setSelectedProjectId(null);
        setSelectedStoryId(null);
      }
      setCurrentPage(id);
    };

    handlePopState();
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const pageTitles: Record<string, string> = {
      home: 'Foresight Australia | Eradicating Avoidable Blindness',
      about: 'About Us | Foresight Australia Mission & History',
      'leaders': 'Our Leaders | Board of Directors | Foresight Australia',
      'reports-policies': 'Reports & Policies | Foresight Australia',
      projects: 'Our Projects | Sustainable Eye Care Programs Globally',
      impact: 'Our Impact | Measurable Results in Eye Care',
      'get-involved': 'Get Involved | Volunteer, Partner, or Donate',
      volunteer: 'Volunteer | Foresight Australia',
      partner: 'Partner With Us | Foresight Australia',
      'legacy-giving': 'Legacy Giving | Request Info Pack | Foresight Australia',
      contact: 'Contact Us | Foresight Australia Sydney Office',
      donate: 'Donate Now | Give the Gift of Sight'
    };

    let title = pageTitles[currentPage] || 'Foresight Australia | Eradicating Avoidable Blindness';
    if (currentPage === 'projects' && selectedProjectId) {
      const project = PROJECTS.find(p => p.id === selectedProjectId);
      if (project) {
        title = `${project.title} | ${project.location} | Foresight Australia`;
      }
    }
    document.title = title;

    const hash = window.location.hash;
    if (currentPage === 'about' && hash) {
      const sectionId = hash.replace('#', '');
      const element = document.getElementById(sectionId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    } else if (!hash) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentPage, selectedProjectId]);

  const handleNavClick = (id: string) => {
    setSelectedProjectId(null);
    let newPath = getUrlFromId(id);
    
    if (id.startsWith('about-')) {
      const sectionId = id.split('-')[1];
      setCurrentPage('about');
      newPath = '/about';
      window.history.pushState(null, '', newPath + '#' + sectionId);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (id.startsWith('projects-')) {
      setSelectedProjectId(id);
      setCurrentPage('projects');
      window.history.pushState(null, '', newPath);
    } else if (id.startsWith('story-')) {
      const storyId = id.replace('story-', '');
      setSelectedStoryId(storyId);
      setCurrentPage('story');
      window.history.pushState(null, '', newPath);
    } else {
      setCurrentPage(id);
      window.history.pushState(null, '', newPath);
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-gray-900 selection:bg-primary/10 selection:text-primary flex flex-col">
      <AnimatePresence>
        {isScrolled && currentPage !== 'donate' && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="md:hidden fixed bottom-6 left-6 right-6 z-[60]"
          >
            <button
              onClick={() => handleNavClick('donate')}
              className="w-full py-5 bg-accent text-white rounded-2xl font-display font-black uppercase tracking-widest text-[11px] shadow-2xl shadow-accent/40 flex items-center justify-center gap-3 backdrop-blur-lg border border-white/20"
            >
              <Heart className="w-4 h-4 fill-white" /> Restore Sight Now
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-3' : 'py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`glass rounded-2xl px-6 flex justify-between items-center transition-all duration-500 ${isScrolled ? 'h-16' : 'h-20'}`}>
            <div className="flex items-center gap-3 cursor-pointer group" onClick={() => handleNavClick('home')}>
              <img
                src="/media/images/Foresight logo.png"
                alt="Foresight Australia Logo"
                className="h-14 md:h-18 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <div className="hidden md:flex items-center gap-1">
              {NAVIGATION.map((item) => (
                <NavLink
                  key={item.id}
                  id={item.id}
                  label={item.label}
                  dropdown={item.dropdown}
                  currentPage={currentPage}
                  onClick={handleNavClick}
                />
              ))}
            </div>

            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-gray-600 hover:text-primary transition-colors bg-gray-50 rounded-xl"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white border-t border-gray-100 overflow-hidden shadow-2xl rounded-b-3xl mx-4 mt-2"
            >
              <div className="py-4">
                {NAVIGATION.map((item) => (
                  <NavLink
                    key={item.id}
                    id={item.id}
                    label={item.label}
                    dropdown={item.dropdown}
                    currentPage={currentPage}
                    onClick={handleNavClick}
                    mobile
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      <main className={`flex-1 ${currentPage !== 'home' ? 'pt-[100px]' : ''}`}>
        <Suspense fallback={<LoadingFallback />}>
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage + (selectedProjectId || '') + (selectedStoryId || '')}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {currentPage === 'home' && <HomePage onNavigate={handleNavClick} />}
              {currentPage === 'about' && <AboutPage onNavigate={handleNavClick} />}
              {currentPage === 'leaders' && <LeadersPage />}
              {currentPage === 'projects' && !selectedProjectId && (
                <ProjectsPage onSelectProject={handleNavClick} />
              )}
              {currentPage === 'projects' && selectedProjectId && (
                <ProjectDetailPage 
                  projectId={selectedProjectId} 
                  onBack={() => handleNavClick('where-we-work')} 
                  onNavigate={handleNavClick}
                />
              )}
              {currentPage === 'impact' && <ImpactPage onNavigate={handleNavClick} />}
              {currentPage === 'get-involved' && <GetInvolvedPage onNavigate={handleNavClick} />}
              {currentPage === 'volunteer' && <VolunteerFormPage onNavigate={handleNavClick} />}
              {currentPage === 'partner' && <PartnerFormPage onNavigate={handleNavClick} />}
              {currentPage === 'legacy-giving' && <LegacyGivingPage onNavigate={handleNavClick} />}
              {currentPage === 'contact' && <ContactPage />}
              {currentPage === 'donate' && <DonatePage onNavigate={handleNavClick} />}
              {currentPage === 'news' && <NewsPage />}
              {currentPage === 'reports-policies' && <ReportsPoliciesPage />}
              {currentPage === 'story' && selectedStoryId && (
                <StoryPage 
                  storyId={selectedStoryId} 
                  onBack={() => handleNavClick('impact')} 
                  onNavigate={handleNavClick}
                />
              )}
              {currentPage === 'subscribe' && <SubscribePage />}
            </motion.div>
          </AnimatePresence>
        </Suspense>
      </main>

      <footer className="bg-[#004aad] text-white pt-10 pb-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
            <div className="lg:col-span-4">
              <div onClick={() => handleNavClick('home')} className="flex items-center gap-4 mb-6 group cursor-pointer">
                <img
                  src="/media/images/Foresight logo.png"
                  alt="Foresight Australia"
                  className="h-11 md:h-14 w-auto brightness-0 invert opacity-80"
                />
              </div>

              <div className="space-y-2 mb-8">
                <a href="tel:+61280213632" className="flex items-center gap-3 w-full bg-accent hover:bg-accent-dark text-white px-5 py-3 rounded-xl font-display font-bold transition-all">
                  <Phone className="w-4 h-4" />
                  <span className="text-[13px]">+61 2 8021 3632</span>
                </a>
                <button onClick={() => handleNavClick('donate')} className="flex items-center gap-3 w-full border border-white/20 hover:bg-white/5 text-white px-5 py-3 rounded-xl font-display font-bold transition-all">
                  <Heart className="w-4 h-4 text-accent" />
                  <span className="text-[13px]">Donate now</span>
                </button>
                <button onClick={() => handleNavClick('subscribe')} className="flex items-center gap-3 w-full border border-white/20 hover:bg-white/5 text-white px-5 py-3 rounded-xl font-display font-bold transition-all">
                  <Mail className="w-4 h-4 text-accent" />
                  <span className="text-[13px]">Subscribe to newsletter</span>
                </button>
              </div>

              <div className="flex gap-4">
                {[
                  { icon: <Facebook className="w-4 h-4" />, label: 'Facebook', url: 'https://www.facebook.com/ForesightAustralia' },
                  { icon: <Instagram className="w-4 h-4" />, label: 'Instagram', url: 'https://www.instagram.com/foresightaustralia/' },
                  { icon: <Linkedin className="w-4 h-4" />, label: 'LinkedIn', url: 'https://www.linkedin.com/company/foresight-australia/' },
                  { icon: <Youtube className="w-4 h-4" />, label: 'YouTube', url: 'https://www.youtube.com/@foresightaustralia9759' }
                ].map((social) => (
                  <a key={social.label} href={social.url} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center hover:bg-accent hover:scale-110 transition-all">
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <h4 className="text-accent font-display font-black uppercase tracking-widest text-[11px] mb-6">About Us</h4>
                <ul className="space-y-3">
                  {[
                    { label: 'Our Mission & Vision', id: 'about-mission' },
                    { label: 'Our History', id: 'about-history' },
                    { label: 'Our Leaders', id: 'leaders' },
                    { label: 'Reports & Policies', id: 'reports-policies' }
                  ].map((link) => (
                    <li key={link.label}>
                      <button onClick={() => handleNavClick(link.id)} className="text-gray-400 hover:text-white transition-colors text-[13px] font-display font-medium">{link.label}</button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-accent font-display font-black uppercase tracking-widest text-[11px] mb-6">Vision & Health</h4>
                <ul className="space-y-3">
                  {['Eye Health', 'Sustainable Care', 'Clinical Training', 'Impact Data'].map((link) => (
                    <li key={link}>
                      <button onClick={() => handleNavClick('impact')} className="text-gray-400 hover:text-white transition-colors text-[13px] font-display font-medium">{link}</button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-accent font-display font-black uppercase tracking-widest text-[11px] mb-6">Resources</h4>
                <ul className="space-y-3">
                  {['Annual Reports', 'Governance Policies', 'Transparency'].map((link) => (
                    <li key={link}>
                      <button onClick={() => handleNavClick('reports-policies')} className="text-gray-400 hover:text-white transition-colors text-[13px] font-display font-medium">{link}</button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-accent font-display font-black uppercase tracking-widest text-[11px] mb-6">Connect</h4>
                <ul className="space-y-3">
                  {['Contact Us', 'Get Involved', 'Partner With Us', 'Latest News'].map((link, i) => (
                    <li key={i}>
                      <button onClick={() => handleNavClick(['contact', 'get-involved', 'get-involved', 'news'][i])} className="text-gray-400 hover:text-white transition-colors text-[13px] font-display font-medium">{link}</button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-400 text-[11px] font-display font-medium tracking-wide">
              © {new Date().getFullYear()} Foresight Australia. All rights reserved. Registered Charity.
            </p>
            <div className="flex gap-8">
              {['Privacy Policy', 'Terms & Conditions', 'Cookie Policy'].map((link) => (
                <button key={link} onClick={() => handleNavClick('reports-policies')} className="text-gray-400 hover:text-white transition-colors text-[11px] font-display font-bold uppercase tracking-widest">{link}</button>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
