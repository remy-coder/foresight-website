/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Eye,
  Globe,
  Heart,
  Users,
  ArrowRight,
  ArrowLeft,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  ChevronRight,
  ChevronDown,
  Award,
  BookOpen,
  Calendar,
  CheckCircle2,
  Quote,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Target,
  Activity,
  FileText,
  ShieldCheck,
  Lock,
  Cookie
} from 'lucide-react';
import { NAVIGATION, IMPACT_STATS, PROJECTS, TEAM, PARTNERS } from './constants';

interface NavLinkProps {
  id: string;
  label: string;
  dropdown?: { id: string; label: string }[];
  mobile?: boolean;
  currentPage: string;
  onClick: (id: string) => void;
  key?: string;
}

const NavLink = ({ id, label, dropdown, mobile = false, currentPage, onClick }: NavLinkProps) => {
  const [isOpen, setIsOpen] = useState(false);

  if (dropdown && !mobile) {
    return (
      <div
        className="relative group"
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <button
          onClick={() => onClick(id)}
          className={`
            px-4 py-2 font-display font-semibold transition-all duration-300 flex items-center gap-1
            ${currentPage === id ? 'text-primary' : 'text-gray-600 hover:text-primary'}
          `}
          aria-expanded={isOpen}
          aria-haspopup="true"
        >
          {label}
          <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
          <span className={`absolute bottom-0 left-4 right-4 h-0.5 bg-primary transform origin-left transition-transform duration-300 ${currentPage === id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
        </button>

        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              className="absolute top-full left-0 w-64 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 mt-2 z-50"
            >
              {dropdown.map((subItem, idx) => (
                <button
                  key={idx}
                  onClick={() => onClick(subItem.id)}
                  className="w-full text-left px-4 py-3 rounded-xl hover:bg-gray-50 text-gray-600 hover:text-primary transition-all font-display font-medium text-sm flex items-center justify-between group"
                >
                  {subItem.label}
                  <ChevronRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0" />
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

  if (dropdown && mobile) {
    return (
      <div className="w-full">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`
            w-full text-left py-4 px-6 text-lg font-display font-semibold flex items-center justify-between
            ${currentPage === id ? 'text-primary' : 'text-gray-600'}
          `}
          aria-expanded={isOpen}
        >
          {label}
          <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="bg-gray-50 overflow-hidden"
            >
              {dropdown.map((subItem, idx) => (
                <button
                  key={idx}
                  onClick={() => onClick(subItem.id)}
                  className="w-full text-left py-4 px-10 text-base font-display font-medium text-gray-500 hover:text-primary transition-colors"
                >
                  {subItem.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    );
  }

    if (id === 'donate') {
    return (
      <a
        href="/donate"
        className={`
          ${mobile ? 'block w-full text-left py-4 px-6 text-lg font-display font-semibold' : 'px-4 py-2 font-display font-semibold transition-all duration-300 relative group'}
          ${currentPage === id ? 'text-primary' : 'text-gray-600 hover:text-primary'}
          bg-accent text-white rounded-full px-6 py-2.5 hover:bg-accent-dark shadow-md hover:shadow-lg transform hover:-translate-y-0.5 md:ml-2
          ${mobile ? 'text-center mx-6 my-6 w-auto block' : ''}
        `}
      >
        {label}
      </a>
    );
  }

  return (
    <Link to={idToUrl(id)}
      onClick={(e) => {
        if (dropdown && !mobile) e.preventDefault();
        onClick(id);
      }}
      
       className={`
        ${mobile ? 'block w-full text-left py-4 px-6 text-lg font-display font-semibold' : 'px-4 py-2 font-display font-semibold transition-all duration-300 relative group'}
        ${currentPage === id ? 'text-primary' : 'text-gray-600 hover:text-primary'}
        ${id === 'donate' ? 'bg-accent text-white rounded-full px-6 py-2.5 hover:bg-accent-dark shadow-md hover:shadow-lg transform hover:-translate-y-0.5 md:ml-2' : ''}
        ${mobile && id === 'donate' ? 'text-center mx-6 my-6 w-auto block' : ''}
      `}
    >
      {label}
      {!mobile && id !== 'donate' && (
        <span className={`absolute bottom-0 left-4 right-4 h-0.5 bg-primary transform origin-left transition-transform duration-300 ${currentPage === id ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}`} />
      )}
    
    </Link>
  );
};


export const idToUrl = (id: string) => {
  if (id === 'home') return '/';
  if (id === 'about') return '/about';
  if (id === 'about-mission') return '/about#mission';
  if (id === 'leaders') return '/about/our-leaders';
  if (id === 'reports-policies' || id === 'annual-reports') return '/about/reports-policies';
  if (id === 'contact') return '/contact';
  if (id === 'news') return '/news';
  if (id === 'get-involved') return '/get-involved';
  if (id === 'donate') return '/donate';
  if (id === 'projects') return '/where-we-work';
  if (id === 'projects-indonesia') return '/where-we-work/indonesia';
  if (id === 'projects-australia') return '/where-we-work/australia';
  if (id === 'projects-solomon-islands') return '/where-we-work/solomon-islands';
  if (id === 'projects-timor-leste') return '/where-we-work/timor-leste';
  if (id === 'projects-bangladesh') return '/where-we-work/bangladesh';
  if (id === 'projects-philippines') return '/where-we-work/philippines';
  if (id === 'impact') return '/stories';
  if (id.startsWith('story-')) return `/stories/${id.replace('story-', '')}`;
  return `/${id}`;
};

function StoryPageWrapper({ onNavigate }: { onNavigate?: (id: string) => void }) {
  const { storyId } = useParams<{storyId: string}>();
  return <StoryPage storyId={storyId || ''} onBack={() => onNavigate && onNavigate('impact')} onNavigate={onNavigate} />;
}

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');
  const [projectFilter, setProjectFilter] = useState('All');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [selectedStoryId, setSelectedStoryId] = useState<string | null>(null);
  const [isNotFound, setIsNotFound] = useState(false);

  useEffect(() => {
    const handlePopState = () => {
      const state = urlToState(window.location.pathname);
      if (state) {
        setCurrentPage(state.page);
        setSelectedProjectId(state.project);
        setSelectedStoryId(state.story);
        setIsNotFound(false);
      } else {
        setIsNotFound(true);
      }
    };
    
    handlePopState();

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const pageTitles: Record<string, string> = {
      home: 'Foresight Australia | Eradicating Avoidable Blindness',
      about: 'About Us | Foresight Australia Mission & History',
      'reports-policies': 'Reports & Policies | Foresight Australia',
      'annual-reports': 'Annual Reports & Policies | Foresight Australia',
      projects: 'Our Projects | Sustainable Eye Care Programs Globally',
      impact: 'Our Impact | Measurable Results in Eye Care',
      'get-involved': 'Get Involved | Volunteer, Partner, or Donate',
      contact: 'Contact Us | Foresight Australia Sydney Office',
      donate: 'Donate Now | Give the Gift of Sight'
    };

    let title = pageTitles[currentPage] || 'Foresight Australia';
    if (currentPage === 'projects' && selectedProjectId) {
      const project = PROJECTS.find(p => p.id === selectedProjectId);
      if (project) {
        title = `${project.title} | ${project.location} | Foresight Australia`;
      }
    }
    document.title = title;

    // Handle scrolling to sections if hash is present
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
  }, [currentPage]);

  const handleNavClick = (id: string) => {
    setSelectedProjectId(null);
    if (id.startsWith('about-')) {
      const sectionId = id.split('-')[1];
      setCurrentPage('about');
      window.location.hash = sectionId;
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else if (id.startsWith('projects-')) {
      const countryId = id.replace('projects-', '');
      const countryMap: Record<string, string> = {
        'all': 'All',
        'australia': 'Australia',
        'indonesia': 'Indonesia',
        'bangladesh': 'Bangladesh',
        'philippines': 'Philippines',
        'solomon-islands': 'Solomon Islands',
        'timor-leste': 'Timor Leste'
      };
      setProjectFilter(countryMap[countryId] || 'All');
      setCurrentPage('projects');
      window.location.hash = '';
    } else if (id.startsWith('story-')) {
      const storyId = id.replace('story-', '');
      setSelectedStoryId(storyId);
      setCurrentPage('story');
      window.location.hash = '';
      window.history.pushState(null, '', `/stories/${storyId}`);
    } else {
      setCurrentPage(id);
      window.location.hash = '';
      setProjectFilter('All');
      if (id === 'home' || id === 'impact') {
        window.history.pushState(null, '', `/${id === 'home' ? '' : id}`);
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#FAFAFA] font-sans text-gray-900 selection:bg-primary/10 selection:text-primary">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'py-3' : 'py-6'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className={`glass rounded-2xl px-6 flex justify-between items-center transition-all duration-500 ${isScrolled ? 'h-16' : 'h-20'}`}>
            <div className="flex items-center gap-3 cursor-pointer group" onClick={() => setCurrentPage('home')}>
              <img
                src="/media/images/Foresight logo.png"
                alt="Foresight Australia Logo"
                className="h-14 md:h-18 w-auto object-contain group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Desktop Nav */}
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

            {/* Mobile Menu Button */}
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

        {/* Mobile Nav */}
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
                    mobile
                    currentPage={currentPage}
                    onClick={handleNavClick}
                  />
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Main Content */}
      <main className="pt-20">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <Routes>
              <Route path="/" element={<HomePage onNavigate={handleNavClick} onSelectProject={(id) => handleNavClick(id)} />} />
              <Route path="/about" element={<AboutPage onNavigate={handleNavClick} />} />
              <Route path="/about/our-leaders" element={<LeadersPage />} />
              <Route path="/about/reports-policies" element={<ReportsPoliciesPage />} />
              <Route path="/about/annual-reports" element={<ReportsPoliciesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/news" element={<NewsPage />} />
              <Route path="/get-involved" element={<GetInvolvedPage onNavigate={handleNavClick} />} />
              <Route path="/volunteer" element={<VolunteerPage onNavigate={handleNavClick} />} />
              <Route path="/partner" element={<PartnerPage onNavigate={handleNavClick} />} />
              <Route path="/donate" element={<DonatePage onNavigate={handleNavClick} />} />
              
              <Route path="/where-we-work" element={<ProjectsPage onSelectProject={(id) => handleNavClick(id)} />} />
              <Route path="/where-we-work/indonesia" element={<ProjectDetailPage projectId="projects-indonesia" onBack={() => handleNavClick('projects')} onNavigate={handleNavClick} />} />
              <Route path="/where-we-work/australia" element={<ProjectDetailPage projectId="projects-australia" onBack={() => handleNavClick('projects')} onNavigate={handleNavClick} />} />
              <Route path="/where-we-work/solomon-islands" element={<ProjectDetailPage projectId="projects-solomon-islands" onBack={() => handleNavClick('projects')} onNavigate={handleNavClick} />} />
              <Route path="/where-we-work/timor-leste" element={<ProjectDetailPage projectId="projects-timor-leste" onBack={() => handleNavClick('projects')} onNavigate={handleNavClick} />} />
              <Route path="/where-we-work/bangladesh" element={<ProjectDetailPage projectId="projects-bangladesh" onBack={() => handleNavClick('projects')} onNavigate={handleNavClick} />} />
              <Route path="/where-we-work/philippines" element={<ProjectDetailPage projectId="projects-philippines" onBack={() => handleNavClick('projects')} onNavigate={handleNavClick} />} />
              
              <Route path="/stories" element={<ImpactPage onNavigate={handleNavClick} />} />
              <Route path="/stories/:storyId" element={<StoryPageWrapper onNavigate={handleNavClick} />} />
              <Route path="/subscribe" element={<SubscribePage />} />
              <Route path="*" element={<div className="min-h-screen flex items-center justify-center font-display text-4xl">404 - Page Not Found</div>} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-[#004aad] to-[#00337a] text-white pt-[40px] pb-[30px] md:pt-[40px] md:pb-[30px] relative">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-11 mb-10 md:mb-14">
            {/* Left Column: Branding & Contact Buttons */}
            <div className="lg:col-span-4">
              <Link to="/" className="flex items-center gap-4 mb-6 group cursor-pointer">
                <img
                  src="/media/images/Foresight logo.png"
                  alt="Foresight Australia Logo"
                  className="h-11 md:h-14 w-auto brightness-0 invert opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 object-contain"
                />
              </Link>

              <div className="space-y-2.5 mb-8">
                <a
                  href="tel:+61280213632"
                  className="flex items-center gap-3 w-full bg-accent hover:bg-accent-dark text-white px-5 py-3 rounded-xl font-display font-bold transition-all transform hover:scale-[1.02] shadow-lg shadow-accent/20"
                >
                  <Phone className="w-4 h-4 transition-colors" />
                  <span className="text-[13px]">+61 2 8021 3632</span>
                </a>
                <a
                  href="/donate"
                  className="flex items-center gap-3 w-full border border-white/20 hover:bg-white/5 text-white px-5 py-3 rounded-xl font-display font-bold transition-all transform hover:scale-[1.02]"
                >
                  <Heart className="w-4 h-4 text-accent" />
                  <span className="text-[13px]">Donate now</span>
                </a>
                <button
                  onClick={() => setCurrentPage('subscribe')}
                  className="flex items-center gap-3 w-full border border-white/20 hover:bg-white/5 text-white px-5 py-3 rounded-xl font-display font-bold transition-all transform hover:scale-[1.02]"
                >
                  <Mail className="w-4 h-4 text-accent" />
                  <span className="text-[13px]">Subscribe to newsletter</span>
                </button>
              </div>

              <div className="flex gap-4">
                {[
                  { icon: <Facebook className="w-4 h-4" />, label: 'Facebook', url: 'https://www.facebook.com/ForesightAustralia' },
                  { icon: <Instagram className="w-4 h-4" />, label: 'Instagram', url: 'https://www.instagram.com/foresightaustralia/' },
                  { icon: <Linkedin className="w-4 h-4" />, label: 'LinkedIn', url: 'https://www.linkedin.com/company/foresight-australia/?viewAsMember=true' },
                  { icon: <Youtube className="w-4 h-4" />, label: 'YouTube', url: 'https://www.youtube.com/@foresightaustralia9759' }
                ].map((social) => (
                  <a key={social.label} href={social.url} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-white/10 border border-white/20 flex items-center justify-center hover:bg-accent hover:border-accent hover:scale-110 transition-all duration-500 group">
                    <span className="sr-only">{social.label}</span>
                    <div className="text-white transition-colors">
                      {social.icon}
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Navigation Columns */}
            <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              <div>
                <h4 className="text-accent font-display font-black uppercase tracking-widest text-[11px] mb-6">About Us</h4>
                <ul className="space-y-3">
                  {[
                    { label: 'Our Mission & Vision', id: 'about-mission' },
                    { label: 'Our History', id: 'about-history' },
                    { label: 'Annual Reports', id: 'reports-policies' },
                    { label: 'Governance & Policies', id: 'reports-policies' }
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
                      <button onClick={() => setCurrentPage('impact')} className="text-gray-400 hover:text-white transition-colors text-[13px] font-display font-medium">{link}</button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-accent font-display font-black uppercase tracking-widest text-[11px] mb-6">Resources</h4>
                <ul className="space-y-3">
                  {[
                    { label: 'Annual Reports', id: 'annual-reports' },
                    { label: 'Governance Policies', id: 'annual-reports' },
                    { label: 'Transparency', id: 'annual-reports' }
                  ].map((link) => (
                    <li key={link.label}>
                      <button onClick={() => handleNavClick(link.id)} className="text-gray-400 hover:text-white transition-colors text-[13px] font-display font-medium">{link.label}</button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="text-accent font-display font-black uppercase tracking-widest text-[11px] mb-6">Get in Touch</h4>
                <ul className="space-y-4">
                  <li className="flex gap-3">
                    <MapPin className="w-4 h-4 text-accent shrink-0" />
                    <span className="text-gray-400 text-[13px] font-display font-medium leading-relaxed">
                      PO Box 663<br />HORNSBY NSW 2077
                    </span>
                  </li>
                  <li className="flex gap-3">
                    <Mail className="w-4 h-4 text-accent shrink-0" />
                    <a href="mailto:foresight@foresight.org.au" className="text-gray-400 hover:text-white transition-colors text-[13px] font-display font-medium">foresight@foresight.org.au</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-6 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-[11px] text-gray-500 font-display font-black uppercase tracking-widest">
            <div className="flex flex-wrap justify-center md:justify-start gap-6 md:gap-10">
              <button onClick={() => handleNavClick('annual-reports')} className="hover:text-white transition-colors">Annual Reports</button>
              <button onClick={() => handleNavClick('annual-reports')} className="hover:text-white transition-colors">Governance & Policies</button>
              <button onClick={() => handleNavClick('annual-reports')} className="hover:text-white transition-colors">Privacy Policy</button>
              <button onClick={() => handleNavClick('annual-reports')} className="hover:text-white transition-colors">Terms & Conditions</button>
              <button onClick={() => handleNavClick('annual-reports')} className="hover:text-white transition-colors">Cookies Policy</button>
            </div>
            <div className="text-center md:text-right space-y-2">
              <p>© 2026 Foresight Australia. Registered Charity.</p>
              <p className="text-gray-600">ABN: 38 008 622 311</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

// --- Page Components ---

function HomePage({ onNavigate, onSelectProject }: { onNavigate: (id: string) => void; onSelectProject: (id: string) => void }) {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative h-[55vh] flex items-center pt-12 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="/media/images/home-hero-sumba-consultation.png"
            alt="Eye care clinic"
            className="w-full h-full object-cover object-center brightness-[0.35]"
            referrerPolicy="no-referrer"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#061735]/45 via-[#061735]/35 to-[#FAFAFA]/85"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6 relative z-10 w-full py-12 md:py-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-8 text-white"
            >
              <div className="flex items-center gap-6 mb-8 md:mb-10">
                <div className="inline-block mb-2 rounded-full border border-[#38b6ff]/30 bg-[#004aad]/10 px-4 py-2 text-[13px] md:text-[14px] font-bold uppercase tracking-[0.12em] text-[#38b6ff] backdrop-blur-sm">
                  40 Years of Impact
                </div>
              </div>

              <h1 className="text-2xl sm:text-3xl md:text-5xl font-display font-extrabold leading-[1.1] md:leading-[0.95] mb-8 md:mb-10 text-balance tracking-tighter">
                Restoring <span className="text-secondary">Sight</span>.<br />
                Changing <span className="italic font-serif text-secondary opacity-80">Lives</span>.
              </h1>

              <p className="text-lg md:text-xl text-gray-300 mb-10 md:mb-14 leading-relaxed max-w-2xl font-display font-medium">
                Delivering sustainable eye care to underserved communities in Australia, Indonesia, and the Pacific.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <a
                  href="/donate"
                  className="w-full sm:w-auto px-8 py-5 bg-accent hover:bg-accent-dark text-white rounded-2xl font-display font-black uppercase tracking-widest text-xs transition-all transform hover:scale-105 shadow-2xl shadow-accent/30 flex items-center justify-center gap-4"
                >
                  Donate Now <ArrowRight className="w-5 h-5" />
                </a>
                <button
                  onClick={() => onNavigate('impact')}
                  className="w-full sm:w-auto px-8 py-5 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-2xl font-display font-black uppercase tracking-widest text-xs transition-all backdrop-blur-xl flex items-center justify-center"
                >
                  Our Impact
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section - Bento Style */}
      <section className="py-10 md:py-14 bg-[#FAFAFA] relative overflow-hidden" >
        <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-end mb-16 md:mb-24">
            <div className="max-w-2xl">
              <h2 className="text-primary font-display font-extrabold tracking-[0.3em] text-[13px] uppercase mb-3">Our Impact (2025)</h2>
              <h3 className="text-2xl md:text-4xl font-display font-extrabold text-gray-900 leading-[1.1] tracking-tight">Measurable outcomes in sustainable eye care.</h3>
            </div>
            <p className="text-lg md:text-xl text-gray-500 font-display font-medium leading-relaxed">
              We track our progress with rigorous data and factual reports, ensuring every contribution supports life-changing treatment and sustainable healthcare infrastructure.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
            {IMPACT_STATS.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`p-6 md:p-10 rounded-3xl md:rounded-5xl border border-gray-100 flex flex-col items-center text-center transition-all duration-500 shadow-sm hover:shadow-2xl ${index % 2 === 0 ? 'bg-white' : 'stats-card-bg'
                  }`}
              >
                <div className="text-3xl md:text-6xl font-display font-black text-primary mb-4 md:mb-6 tracking-tighter">{stat.value}</div>
                <div className="text-[13px] font-display font-black text-gray-400 uppercase tracking-[0.2em] leading-tight">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section >

      {/* Features Section */}
      < section className="py-10 md:py-14 bg-[#0F172A] text-white relative overflow-hidden" >
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/5 blur-[160px] rounded-full"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-accent/5 blur-[120px] rounded-full"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-32 items-center">
            <div className="order-2 lg:order-1">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
                {[
                  { icon: <Globe className="w-8 h-8" />, title: "Global Reach", desc: "Active in Indonesia, Bangladesh, and regional Australia, addressing local eye health needs." },
                  { icon: <Users className="w-8 h-8" />, title: "Local Empowerment", desc: "Training local health workers to ensure long-term clinical sustainability." },
                  { icon: <Heart className="w-8 h-8" />, title: "Humanitarian Mission", desc: "Believing sight is a fundamental human right for all underserved populations." },
                  { icon: <Award className="w-8 h-8" />, title: "Clinical Excellence", desc: "Maintaining the highest standards of ophthalmic care and surgical outcomes." }
                ].map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 md:p-8 rounded-3xl md:rounded-4xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all duration-500 group"
                  >
                    <div className="bg-primary/10 p-4 md:p-5 rounded-2xl w-fit mb-6 md:mb-8 group-hover:bg-primary transition-all duration-300 group-hover:scale-110">
                      {feature.icon}
                    </div>
                    <h4 className="text-xl md:text-2xl font-display font-extrabold mb-4">{feature.title}</h4>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed font-display font-medium">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-accent font-display font-extrabold tracking-[0.3em] text-[13px] uppercase mb-3">Our Mission</h2>
              <h3 className="text-2xl md:text-4xl font-display font-extrabold mb-8 md:mb-10 leading-[1.1] tracking-tight text-balance">A Visionary Approach to <span className="text-primary">Global Health</span></h3>
              <p className="text-lg md:text-xl text-gray-400 mb-10 md:mb-12 leading-relaxed font-display font-medium">
                Founded in 1977, Foresight Australia has been a pioneer in sustainable eye health. We don't just provide treatment; we build capacity and establish sustainable healthcare infrastructure to ensure long-term eye health for all.
              </p>
              <button
                onClick={() => onNavigate('about')}
                className="group flex items-center gap-4 text-[13px] font-display font-black uppercase tracking-widest text-white hover:text-accent transition-colors"
              >
                Our mission and objectives <ArrowRight className="w-6 h-6 group-hover:translate-x-3 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </section >

      {/* Projects Preview */}
      < section className="py-10 md:py-14 bg-white" >
        <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 md:mb-20 gap-8 md:gap-12">
            <div className="max-w-3xl">
              <h2 className="text-primary font-display font-extrabold tracking-[0.3em] text-[13px] uppercase mb-3">Our Impact</h2>
              <h3 className="text-2xl md:text-4xl font-display font-extrabold text-gray-900 leading-[1.1] tracking-tight">Focusing on where we can make the greatest difference.</h3>
            </div>
            <button
              onClick={() => onNavigate('projects')}
              className="w-full md:w-auto px-8 py-5 bg-gray-50 hover:bg-gray-100 text-gray-900 rounded-2xl font-display font-black uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-3 border border-gray-100"
            >
              See where we work <ArrowRight className="w-5 h-5" />
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            {PROJECTS.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -20 }}
                onClick={() => onSelectProject(project.id)}
                className="group relative bg-white rounded-3xl md:rounded-5xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-700 cursor-pointer"
              >
                <div className="aspect-[4/5] overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/20 to-transparent opacity-80"></div>
                  <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 text-white">
                    <div className="inline-block px-4 py-1.5 bg-accent rounded-xl text-[11px] font-black uppercase tracking-[0.2em] mb-2">
                      {project.location}
                    </div>
                    <h4 className="text-2xl md:text-3xl font-display font-extrabold mb-4 leading-tight">{project.title}</h4>
                    <p className="text-base md:text-lg text-gray-300 line-clamp-2 opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-all duration-500 transform translate-y-0 lg:translate-y-4 lg:group-hover:translate-y-0 font-display font-medium">
                      {project.description}
                    </p>
                  </div>
                </div>
                <div className="p-4 md:p-8 flex justify-between items-center bg-white">
                  <span className="text-[13px] font-display font-black text-gray-400 uppercase tracking-[0.2em]">Learn More</span>
                  <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-primary/5 flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-all duration-500 group-hover:rotate-12">
                    <ArrowRight className="w-6 h-6" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section >

      {/* Call to Donate */}
      < section className="py-14 md:py-28 bg-white" >
        <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative rounded-3xl md:rounded-[5rem] overflow-hidden bg-primary p-8 md:p-36 text-center text-white shadow-3xl"
          >
            <div className="absolute inset-0 opacity-30">
              <img
                src="https://images.unsplash.com/photo-1532938911079-1b06ac7ceec7?q=80&w=2089&auto=format&fit=crop"
                alt="Medical background"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-primary"></div>
            <div className="relative z-10 max-w-5xl mx-auto">
              <h2 className="text-accent font-display font-extrabold tracking-[0.3em] text-[13px] uppercase mb-4 md:mb-12">Support Our Mission</h2>
              <h3 className="text-4xl md:text-8xl font-display font-extrabold mb-10 md:mb-14 leading-[1.1] tracking-tight">Help us bring the gift of sight to those in need.</h3>
              <p className="text-xl md:text-2xl text-secondary opacity-90 mb-12 md:mb-20 leading-relaxed font-display font-medium">
                Your contribution directly funds life-changing surgeries, training for local doctors, and essential equipment for underserved communities. Every dollar helps restore vision and hope.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-6 md:gap-10">
                <a
                  href="/donate"
                  className="w-full sm:w-auto px-12 py-5 bg-accent hover:bg-accent-dark text-white rounded-2xl font-display font-black uppercase tracking-widest text-sm transition-all transform hover:scale-105 shadow-2xl shadow-accent/40"
                >
                  Make a Donation
                </a>
                <button
                  onClick={() => onNavigate('get-involved')}
                  className="w-full sm:w-auto px-12 py-5 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-2xl font-display font-black uppercase tracking-widest text-sm transition-all backdrop-blur-xl"
                >
                  Other ways to help
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section >

      
      {/* Andre Story */}
      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6">
          <div className="bg-primary/5 rounded-[3rem] p-6 md:p-14 border border-primary/10">
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
                  className="px-4 py-4 bg-white rounded-2xl shadow-sm border border-gray-100 mb-4 text-primary font-display font-black text-sm uppercase tracking-widest hover:shadow-md transition-all"
                >
                  Read more stories
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      < section className="py-10 md:py-14 bg-gray-50" >
        <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6 text-center">
          <h2 className="text-gray-400 font-display font-black tracking-[0.4em] text-[13px] uppercase mb-6 md:mb-16">Our Trusted Partners</h2>
          <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
            {PARTNERS.map((partner, i) => (
              <a
                href={partner.url}
                key={i}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center h-12 md:h-16 hover:scale-110 transition-transform duration-300"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="max-h-full max-w-full object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </section >
    </div >
  );
}

function AboutPage({ onNavigate }: { onNavigate?: (id: string) => void }) {
  return (
    <div className="pt-20 pb-12 md:pt-28 md:pb-20 bg-[#FAFAFA] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6">

        {/* Intro */}
        <div className="max-w-5xl mb-16 md:mb-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[13px] font-black uppercase tracking-[0.2em] mb-5 shadow-sm"
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
        </div>

        {/* Video Section */}
        <div id="media" className="mb-16 md:mb-24">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-display font-extrabold text-gray-900 mb-4">Learn more about our work and impact</h3>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="max-w-5xl mx-auto rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-3xl bg-gray-900 border border-gray-100/50"
          >
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/_qdGwyvpziY"
                title="Foresight Australia Impact"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          </motion.div>
        </div>

        {/* Objectives Section (NEW) */}
        <div id="objectives" className="mb-16 md:mb-24">
          <div className="bg-white p-8 md:p-16 rounded-3xl md:rounded-[4rem] border border-gray-100 shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-bl-full -mr-10 -mt-10"></div>
            <div className="relative z-10">
              <h2 className="text-primary font-display font-extrabold tracking-[0.3em] text-[11px] uppercase mb-6">Our Objectives</h2>
              <div className="space-y-10">
                {[
                  "To alleviate poverty and create an environment that allows the CURE and PREVENTION of blindness through skills transfer.",
                  "To provide capacity building, education and skills transfer for ophthalmologists, eye care workers and managers through sustainable programs tailored to a country’s need.",
                  "To EMPOWER communities and promote partnerships with low-income countries, ensuring a sense of ownership by the people of that country.",
                  "To respond to the special problems of childhood blindness where critical periods of childhood development determine the degree to which the vision can be restored.",
                  "To seek solutions that address blindness and poverty, acknowledging that blindness is a cause and a consequence of poverty."
                ].map((objective, i) => (
                  <div key={i} className="flex gap-8 group">
                    <div className="flex-shrink-0 w-12 h-12 rounded-2xl bg-primary/5 flex items-center justify-center text-primary font-display font-black group-hover:bg-primary group-hover:text-white transition-all">
                      {i + 1}
                    </div>
                    <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-display font-medium">
                      {objective}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Mission & Vision Section */}
        <div id="mission" className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 mb-16 md:mb-24">
          <motion.div
            whileHover={{ y: -10 }}
            className="lg:col-span-7 bg-[#0F172A] p-8 md:p-16 rounded-3xl md:rounded-[4rem] text-white relative overflow-hidden group shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/20 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2"></div>

            <h2 className="text-accent font-display font-black uppercase tracking-[0.3em] text-[11px] mb-5 md:mb-16">Our Mission</h2>
            <div className="relative z-10">
              <p className="text-3xl md:text-5xl font-display font-extrabold leading-[1.1] tracking-tight mb-12">
                To prevent avoidable blindness and restore sight through sustainable eye care.
              </p>
              <ul className="space-y-6 text-gray-400 font-display font-medium text-lg md:text-xl">
                {[
                  'Prevent avoidable blindness through early intervention.',
                  'Establish sustainable eye care systems in underserved regions.',
                  'Provide clinical training and long-term partnerships.',
                  'Create long-term impact for local communities.'
                ].map((text, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <div className="mt-1 bg-white/10 p-1.5 rounded-full"><CheckCircle2 className="w-5 h-5 text-white" /></div>
                    <span className="leading-relaxed">{text}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <div className="lg:col-span-5 flex flex-col gap-8 md:gap-12">
            <div className="p-8 md:p-12 rounded-3xl md:rounded-[4rem] bg-white border border-gray-100 shadow-xl flex-1 flex flex-col justify-center transform transition-transform hover:-translate-y-2">
              <h2 className="text-gray-400 font-display font-black uppercase tracking-[0.3em] text-[11px] mb-3 md:mb-8">Our Vision</h2>
              <p className="text-2xl md:text-4xl font-display font-extrabold text-gray-900 leading-tight tracking-tight">
                A world where everyone has access to quality eye care.
              </p>
            </div>

            <div className="p-8 md:p-12 rounded-3xl md:rounded-[4rem] bg-gradient-to-br from-primary to-secondary text-white shadow-xl flex-1 flex flex-col justify-center relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
              <h2 className="text-white/60 font-display font-black uppercase tracking-[0.3em] text-[11px] mb-4 relative z-10">Our Philosophy</h2>
              <div className="grid grid-cols-2 gap-4 relative z-10">
                {['Integrated Systems', 'Sustainable Funding', 'Equitable Access', 'Clinical Excellence'].map((item, i) => (
                  <div key={i} className="flex flex-col gap-3 p-5 bg-white/10 backdrop-blur-sm rounded-2xl transition-all group-hover:bg-white/20">
                    <Target className="w-6 h-6 text-accent" />
                    <span className="font-display font-black text-white uppercase tracking-widest text-[11px]">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* History Timeline preserves lines 877-920 layout */}
        <div id="history" className="mb-16 md:mb-24">
          <div className="max-w-3xl mb-16 md:mb-24">
            <h2 className="text-primary font-display font-extrabold tracking-[0.3em] text-[11px] uppercase mb-3 flex items-center gap-4">
              <span className="w-12 h-px bg-primary"></span> Our History
            </h2>
            <h3 className="text-4xl md:text-6xl font-display font-extrabold text-gray-900 tracking-tighter leading-tight">Decades of Dedication</h3>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/0 via-primary/20 to-primary/0 hidden md:block"></div>
            <div className="space-y-12 md:space-y-20">
              {[
                { year: '1977', title: 'Foundation', desc: 'Foresight Australia was established in response to urgent requests for eye health assistance in Bangladesh.' },
                { year: '1982', title: 'NGO Registration', desc: 'Formally registered as an autonomous non-government organisation to expand international programs.' },
                { year: '1986', title: 'Charitable Status', desc: 'Granted independent status as an official charity and company limited by guarantee in Australia.' },
                { year: '1994', title: 'Humanitarian Award', desc: 'Awarded the inaugural Weary Dunlop Asia Medal for humanitarian service.' },
                { year: '2025', title: 'Continuing the Mission', desc: 'Foresight Australia continues to deliver sustainable eye care, training, and prevention programs globally.' }
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.6 }}
                  className={`flex flex-col md:flex-row items-center gap-8 md:gap-16 ${i % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="flex-1 w-full">
                    <div className={`p-6 md:p-8 bg-white rounded-3xl md:rounded-[3rem] border border-gray-100 shadow-xl hover:shadow-2xl hover:border-primary/20 transition-all duration-500 group ${i % 2 === 0 ? 'md:text-right' : ''}`}>
                      <span className="text-5xl md:text-7xl font-display font-black text-transparent bg-clip-text bg-gradient-to-br from-primary/20 to-transparent mb-4 md:mb-6 block tracking-tighter group-hover:from-primary transition-all">{item.year}</span>
                      <h3 className="text-2xl md:text-3xl font-display font-extrabold mb-4 text-gray-900 tracking-tight">{item.title}</h3>
                      <p className="text-gray-500 text-lg leading-relaxed font-display font-medium">{item.desc}</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-white border-4 border-primary shadow-[0_0_20px_rgba(37,99,235,0.3)] relative z-10 hidden md:flex items-center justify-center">
                    <div className="w-2 h-2 bg-primary rounded-full"></div>
                  </div>
                  <div className="flex-1 hidden md:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Annual Reports & Policies (Merged into About page) */}
        <div id="annual-reports" className="mb-24 md:mb-32">
          <div className="bg-white p-8 md:p-16 rounded-3xl md:rounded-[4rem] border border-gray-100 shadow-xl overflow-hidden relative">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 rounded-bl-full -mr-10 -mt-10"></div>

            <div className="mb-16 md:mb-20">
              <h2 className="text-primary font-display font-extrabold tracking-[0.3em] text-[11px] uppercase mb-3">Transparency</h2>
              <h3 className="text-3xl md:text-5xl font-display font-extrabold text-gray-900 tracking-tighter">Annual Reports & Policies</h3>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 relative z-10">
              <div className="space-y-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-primary/10 rounded-xl"><BookOpen className="w-6 h-6 text-primary" /></div>
                  <h4 className="font-display font-extrabold text-2xl tracking-tight">Annual Reports</h4>
                </div>
                {[2025, 2024].map((year) => (
                  <a
                    key={year}
                    href={`/media/documents/annual-report-${year}.pdf`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-gray-50 rounded-2xl border border-transparent shadow-sm flex items-center justify-between group hover:border-primary/30 hover:bg-white hover:shadow-md transition-all cursor-pointer"
                  >
                    <div className="flex items-center gap-4">
                      <span className="font-display font-extrabold text-xl text-primary">{year}</span>
                      <span className="font-display font-bold text-gray-700">Annual Report</span>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-white border border-gray-100 flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-colors">
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-all" />
                    </div>
                  </a>
                ))}
              </div>

              <div className="space-y-8">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-accent/10 rounded-xl"><ShieldCheck className="w-6 h-6 text-accent" /></div>
                  <h4 className="font-display font-extrabold text-2xl tracking-tight">Governance Policies</h4>
                </div>
                {[
                  'foresight-conflict-of-interest-policy.pdf',
                  'foresight-complaints-policy.pdf',
                  'foresight-child-protection-policy.pdf',
                  'foresight-counter-terrorism-policy.pdf',
                  'Foresight Financial Management Policy',
                  'foresight-gender-equity-policy.pdf',
                  'foresight-whistle-blower-policy.pdf',
                  'foresight-non-development-policy.pdf',
                  'foresight-corruption-and-fraud-prevention-policy.pdf',
                  'foresight-constitution-2020.pdf',
                  'foresight-fundraising-policy.pdf',
                  'foresight-code-of-conduct.pdf',
                  'foresight-transparency-and-communication-policy.pdf',
                  'foresight-prevention-of-sexual-exploitation-and-harassment-policy-1.pdf',
                  'foresight-philosophy-and-principles-policy.pdf'
                ].slice(0, 6).map((policy) => (
                  <a
                    key={policy}
                    href={`/media/documents/${policy.title}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-4 bg-gray-50 rounded-2xl border border-transparent shadow-sm flex items-center justify-between group hover:border-accent/30 hover:bg-white hover:shadow-md transition-all cursor-pointer"
                  >
                    <span className="font-display font-bold text-gray-700 w-4/5">{policy}</span>
                    <div className="w-10 h-10 shrink-0 rounded-full bg-white border border-gray-100 flex items-center justify-center group-hover:bg-accent group-hover:border-accent transition-colors">
                      <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-all" />
                    </div>
                  </a>
                ))}
                <button
                  onClick={() => onNavigate && onNavigate('reports-policies')}
                  className="w-full py-4 text-accent font-display font-black uppercase tracking-widest text-xs hover:underline"
                >
                  View All Policies
                </button>
              </div>
            </div>
          </div>

          {/* About Page CTA */}
          <div className="mt-24 md:mt-32 text-center pb-12">
            <div className="max-w-3xl mx-auto px-4">
              <h3 className="text-2xl md:text-4xl font-display font-extrabold text-gray-900 mb-8 tracking-tight">Support our global mission</h3>
              <p className="text-gray-500 font-display font-medium text-lg md:text-xl mb-12">
                Join the thousands who are making sight restoration possible in communities that need it most.
              </p>
              <a
                href="/donate"
                className="px-8 py-6 bg-accent hover:bg-accent-dark text-white rounded-2xl font-display font-black uppercase tracking-widest text-sm transition-all transform hover:scale-105 shadow-2xl shadow-accent/40 flex items-center justify-center gap-4 mx-auto"
              >
                Restore sight today <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function MapSection({ onSelect }: { onSelect: (id: string) => void }) {
  const locations = [
    { id: 'projects-bangladesh', name: 'Bangladesh', x: 195, y: 205 },
    { id: 'projects-philippines', name: 'Philippines', x: 468, y: 192 },
    { id: 'projects-indonesia', name: 'Indonesia (Sumba)', x: 398, y: 358 },
    { id: 'projects-timor-leste', name: 'Timor-Leste', x: 452, y: 372 },
    { id: 'projects-solomon-islands', name: 'Solomon Islands', x: 790, y: 355 },
    { id: 'projects-australia', name: 'Australia', x: 530, y: 492 },
  ];

  return (
    <div className="relative w-full bg-[#0F172A] rounded-[3rem] md:rounded-[5rem] overflow-hidden p-6 md:p-14 mb-24 md:mb-32 shadow-3xl group">
      {/* Background Decor */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_30%,_var(--tw-gradient-stops))] from-primary/40 via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 w-full">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-primary font-display font-black tracking-[0.4em] text-[13px] uppercase mb-2">Interactive Global Reach</h2>
          <h3 className="text-3xl md:text-5xl font-display font-extrabold text-white tracking-tight">Where We Work Across the <span className="text-primary">Asia-Pacific</span></h3>
        </div>

        <div className="relative aspect-[16/8] max-w-5xl mx-auto flex items-center justify-center">
          {/* Map Image Background */}
          <div className="absolute inset-0 pointer-events-none">
            <img
              src="/media/images/map.png"
              alt=""
              aria-hidden="true"
              className="w-full h-full object-contain opacity-35"
            />
          </div>

          {/* Interactive Markers Layer */}
          <div className="absolute inset-0">
            <svg viewBox="0 0 1000 650" className="w-full h-full">
              {locations.map((loc) => (
                <motion.g
                  key={loc.id}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.15 }}
                  className="cursor-pointer"
                  onClick={() => onSelect(loc.id)}
                >
                  <circle cx={loc.x} cy={loc.y} r="28" className="fill-primary/20 animate-pulse" />
                  <circle cx={loc.x} cy={loc.y} r="8" className="fill-primary shadow-[0_0_20px_rgba(56,182,255,0.6)]" />
                  <text
                    x={loc.x}
                    y={loc.y + 40}
                    textAnchor="middle"
                    className="fill-white font-display font-black text-[12px] uppercase tracking-[0.25em] drop-shadow-md"
                  >
                    {loc.name}
                  </text>
                </motion.g>
              ))}
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectsPage({ initialFilter = 'All', onSelectProject }: { initialFilter?: string, onSelectProject: (id: string) => void }) {
  const [filter, setFilter] = useState(initialFilter);
  const countries = ['All', 'Australia', 'Indonesia', 'Bangladesh', 'Philippines', 'Solomon Islands', 'Timor Leste'];

  const filteredProjects = filter === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.location.toLowerCase() === filter.toLowerCase());

  return (
    <div className="pt-20 pb-12 md:pt-28 md:pb-20 bg-[#FAFAFA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6">
        <div className="max-w-5xl mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[13px] font-black uppercase tracking-[0.2em] mb-5"
          >
            <span>Our Global Reach</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl sm:text-5xl md:text-8xl font-display font-extrabold mb-8 md:mb-10 leading-[1.1] md:leading-[0.95] tracking-tighter"
          >
            Where We <span className="text-primary">Work</span>.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-500 leading-relaxed font-display font-medium max-w-3xl"
          >
            Foresight Australia partners with local communities across Asia and the Pacific to build sustainable eye care systems that last for generations.
          </motion.p>
        </div>

        {/* Interactive Map */}
        <MapSection onSelect={onSelectProject} />

        {/* Country Filter */}
        <div className="flex flex-wrap gap-3 mb-16 md:mb-24">
          {countries.map((country) => (
            <button
              key={country}
              onClick={() => setFilter(country)}
             className={`px-4 py-3 rounded-xl font-display font-black uppercase tracking-widest text-[11px] transition-all ${filter === country ? 'bg-primary border-primary text-white shadow-lg' : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10'}`}
            >
                {country}
              </button>
          ))}
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-display font-extrabold text-gray-900 mb-8 border-b border-gray-200 pb-4">Active Projects</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                {filteredProjects.filter(p => ['projects-indonesia', 'projects-australia', 'projects-solomon-islands'].includes(p.id)).map((project) => (
                  <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 group flex flex-col"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    />
                    <div className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-md rounded-xl text-primary font-display font-black uppercase tracking-widest text-[11px]">
                      {project.location}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-2xl font-display font-extrabold text-gray-900 mb-4">{project.title}</h3>
                    <p className="text-gray-500 font-display font-medium leading-relaxed mb-8 flex-1">
                      {project.description}
                    </p>
                    <button
                      onClick={() => onSelectProject(project.id)}
                      className="w-full py-5 bg-primary/5 hover:bg-primary text-primary hover:text-white rounded-2xl font-display font-black uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-3 group/btn"
                    >
                      Learn More <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              ))}
              </div>
            </div>
            
            <div className="mt-16 mb-12">
              <h2 className="text-2xl font-display font-extrabold text-gray-900 mb-8 border-b border-gray-200 pb-4">Legacy Projects</h2>
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
                  <div className="p-6 flex flex-col flex-1 bg-gray-50/50">
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

function ProjectDetailPage({projectId, onBack, onNavigate}: {projectId: string, onBack: () => void, onNavigate: (id: string) => void }) {
  const project = PROJECTS.find(p => p.id === projectId);

  useEffect(() => {
          window.scrollTo(0, 0);
  }, [projectId]);

        if (!project) return null;

        return (
        <div className="bg-white min-h-screen ">
          {/* SECTION 1: Intro */}
          <section className="relative pt-20 pb-12 md:pt-28 md:pb-20 bg-[#FAFAFA] overflow-hidden">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full -mr-48 -mt-48"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6 relative z-10 w-full">
              <Link
                to="/where-we-work"
                className="flex items-center gap-2 text-primary hover:text-primary transition-colors group mb-12"
              >
                <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
                <span className="font-display font-black uppercase tracking-widest text-[11px]">Back to Locations</span>
              </Link>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-24 items-center">
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-[11px] font-black uppercase tracking-[0.2em] mb-4">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>{project.location}</span>
                  </div>
                  <h1 className="text-3xl sm:text-5xl md:text-7xl font-display font-extrabold mb-10 leading-[0.95] tracking-tighter text-gray-900">
                    {project.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-gray-500 font-display font-medium leading-relaxed max-w-3xl">
                    {project.intro}
                  </p>
                </div>
                <div className="lg:col-span-5 relative">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="relative rounded-[3rem] md:rounded-[4rem] overflow-hidden shadow-3xl aspect-[4/5]"
                  >
                    <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover" />
                  </motion.div>
                  <div className="absolute -bottom-8 -left-8 bg-white p-4 md:p-8 rounded-[2.5rem] shadow-2xl border border-gray-100 hidden md:block">
                    <div className="text-4xl font-display font-black text-primary tracking-tighter">Active</div>
                    <div className="text-[11px] font-black text-gray-400 uppercase tracking-widest mt-1">Project Status</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 2: Impact */}
          <section className="py-10 md:py-14 bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-4 lg:px-6">
              <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24 items-start">
                <div className="md:col-span-4">
                  <h2 className="text-primary font-display font-black tracking-[0.4em] text-[11px] uppercase mb-4">The Challenge</h2>
                  <h3 className="text-3xl md:text-4xl font-display font-extrabold text-gray-900 leading-tight">Impact</h3>
                </div>
                <div className="md:col-span-8">
                  <p className="text-lg md:text-2xl text-gray-600 font-display font-medium leading-relaxed">
                    {project.whyItMatters}
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 3: Our Work */}
          <section className="py-10 md:py-14 bg-[#0F172A] text-white relative overflow-hidden rounded-[4rem] md:rounded-[6rem] mx-4 md:mx-10 overflow-hidden">
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/5 blur-[160px] rounded-full"></div>
            <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6 relative z-10">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-32 items-center">
                <div>
                  <h2 className="text-primary font-display font-black tracking-[0.4em] text-[11px] uppercase mb-6">Our Solution</h2>
                  <h3 className="text-3xl md:text-6xl font-display font-extrabold text-white mb-10 leading-[1.1] tracking-tight">Our Work</h3>
                  <p className="text-lg md:text-2xl text-gray-400 font-display font-medium leading-relaxed mb-12">
                    {project.whatWeDo}
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    {[{ icon: <Target className="w-5 h-5" />, label: "Clinical Care" }, { icon: <Users className="w-5 h-5" />, label: "Training" }].map((feature, i) => (
                      <div key={i} className="flex flex-col gap-4 p-4 bg-white/5 backdrop-blur-md rounded-2.5xl border border-white/10 group hover:bg-white/10 transition-all">
                        <div className="text-primary">{feature.icon}</div>
                        <span className="text-[11px] font-black uppercase tracking-[0.2em] text-white">{feature.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="relative rounded-[3rem] overflow-hidden aspect-video lg:aspect-square">
                  <img src={project.supportingImages?.[0] || project.image} alt="Impact" className="w-full h-full object-cover opacity-80" />
                </div>
              </div>
            </div>
          </section>

          {/* SECTION 4: Stats */}
          <section className="py-10 md:py-14 bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-4 lg:px-6">
              <div className="mb-16 md:mb-24">
                <h2 className="text-primary font-display font-black tracking-[0.4em] text-[11px] uppercase mb-4">Our Progress</h2>
                <h3 className="text-3xl md:text-6xl font-display font-extrabold text-gray-900 leading-[1.1] tracking-tight">Stats</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                {project.achievements.map((achievement, i) => (
                  <div key={i} className="flex gap-8 group p-6 bg-gray-50 rounded-3xl border border-transparent hover:border-primary/20 hover:bg-white hover:shadow-xl transition-all duration-500">
                    <div className="shrink-0 w-12 h-12 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all shadow-sm">
                      <CheckCircle2 className="w-6 h-6" />
                    </div>
                    <p className="text-lg text-gray-600 font-display font-medium leading-relaxed">
                      {achievement}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* SECTION 4.2: Visit Update */}
          {'visitUpdate' in project && project.visitUpdate && (
            <section className="py-10 md:py-14 bg-white">
              <div className="max-w-5xl mx-auto px-4 sm:px-4 lg:px-6">
                <div className="mb-12 md:mb-16">
                  <h2 className="text-primary font-display font-black tracking-[0.4em] text-[11px] uppercase mb-3">
                    {(project as any).visitUpdate.label}
                  </h2>
                  <h3 className="text-2xl md:text-4xl font-display font-extrabold text-gray-900 leading-[1.1] tracking-tight">
                    {(project as any).visitUpdate.heading}
                  </h3>
                </div>
                <p className="text-base md:text-xl text-gray-600 font-display font-medium leading-relaxed mb-12">
                  {(project as any).visitUpdate.intro}
                </p>
                
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 mb-12">
                  {(project as any).visitUpdate.stats.map((stat: any, i: number) => (
                    <div key={i} className="text-center p-6 bg-gray-50 rounded-3xl border border-gray-100">
                      <div className="text-3xl md:text-5xl font-display font-black text-primary mb-2">{stat.value}</div>
                      <div className="text-sm md:text-base text-gray-600 font-display font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                  {(project as any).visitUpdate.blocks.map((block: any, i: number) => (
                    <div key={i} className="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:shadow-lg transition-all duration-300">
                      <h4 className="text-xl font-display font-extrabold text-gray-900 mb-4">{block.heading}</h4>
                      <p className="text-base text-gray-600 font-display font-medium leading-relaxed">{block.body}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* SECTION 5: What’s next */}
          <section className="py-10 md:py-14 bg-primary/5 rounded-[4rem] md:rounded-[6rem] mx-4 md:mx-10 mb-24 md:mb-40 relative overflow-hidden">
            <div className="max-w-5xl mx-auto px-4 sm:px-4 lg:px-6 relative z-10 text-center">
              <h2 className="text-primary font-display font-black tracking-[0.4em] text-[11px] uppercase mb-6">Looking Ahead</h2>
              <h3 className="text-3xl md:text-6xl font-display font-extrabold text-gray-900 mb-10 leading-[1.1] tracking-tight">What’s next</h3>
              <p className="text-xl md:text-3xl text-gray-600 font-display font-medium leading-relaxed max-w-4xl mx-auto">
                {project.nextSteps}
              </p>
            </div>
          </section>

          {/* SECTION 6: Support this work */}
          <section className="py-10 md:py-14 bg-white">
            <div className="max-w-5xl mx-auto px-4 sm:px-4 lg:px-6">
              <div className="bg-[#1a1a1a] p-8 md:p-24 rounded-[3.5rem] md:rounded-[5rem] text-white text-center relative overflow-hidden shadow-3xl">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/10 blur-[120px] rounded-full"></div>
                <div className="relative z-10">
                  <h3 className="text-3xl md:text-6xl font-display font-extrabold mb-10 leading-[1.1] tracking-tight">Support this work</h3>
                  <p className="text-xl md:text-2xl text-gray-400 font-display font-medium leading-relaxed mb-16 max-w-2xl mx-auto">
                    Join us in establishing sustainable eye care systems in {project.location}. Your support restores sight and changes lives.
                  </p>
                  <a
                    href="/donate"
                    className="px-8 py-5 bg-accent hover:bg-accent-dark text-white rounded-2.5xl font-display font-black uppercase tracking-widest text-sm transition-all transform hover:scale-105 shadow-2xl shadow-accent/40 flex items-center justify-center gap-4 mx-auto"
                  >
                    Restore sight today <ArrowRight className="w-5 h-5 transition-transform" />
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
        );
}

        function ImpactPage({onNavigate}: {onNavigate ?: (id: string) => void }) {
  return (
        <div className="pt-20 pb-12 md:pt-28 md:pb-20 bg-[#FAFAFA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6">
            <div className="max-w-5xl mb-24 md:mb-32">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-black uppercase tracking-[0.2em] mb-5"
              >
                <span>Stories from the Field</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl sm:text-5xl md:text-7xl font-display font-extrabold mb-8 md:mb-12 leading-[1.1] md:leading-[0.95] tracking-tighter"
              >
                Measurable <span className="text-primary">Impact</span>. <br />Real Stories.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-gray-500 leading-relaxed font-display font-medium max-w-3xl"
              >
                Every screening, every pair of glasses, and every surgery represents a life transformed. We track our progress with rigorous data and factual reports to ensure accountability.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10 mb-24 md:mb-32">
              <div className="col-span-full mb-8 md:mb-12">
                <h2 className="text-primary font-display font-extrabold tracking-[0.3em] text-[11px] uppercase mb-3">Impact Data</h2>
                <h3 className="text-xl md:text-4xl font-display font-extrabold text-gray-900 tracking-tight">Transparency & Results</h3>
              </div>
              {IMPACT_STATS.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ y: -15 }}
                  className="p-6 md:p-12 bg-white border border-gray-100 shadow-xl rounded-[3rem] text-center hover:shadow-3xl transition-all duration-700"
                >
                  <div className="text-4xl md:text-7xl font-display font-black text-primary mb-4 md:mb-6 tracking-tighter">{stat.value}</div>
                  <div className="text-[11px] font-display font-black text-gray-400 uppercase tracking-[0.2em] leading-tight">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-32 items-center mb-24 md:mb-32">
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
              >
                <h2 className="text-accent font-display font-extrabold tracking-[0.3em] text-[13px] uppercase mb-4">Success Story</h2>
                <h3 className="text-xl md:text-4xl font-display font-extrabold text-gray-900 mb-8 md:mb-10 leading-[1.1] tracking-tight">Cahara's Clarity</h3>
                <div className="bg-primary/5 p-6 md:p-12 rounded-3xl md:rounded-[4rem] relative shadow-xl border border-primary/10">
                  <Quote className="w-12 h-12 md:w-16 md:h-16 text-primary/10 absolute top-6 right-6 md:top-10 md:right-10" />
                  <p className="text-lg md:text-2xl text-gray-700 leading-relaxed italic font-display font-extrabold mb-8 md:mb-12 relative z-10 tracking-tight">
                    "I couldn’t see the blackboard at school, even from the front row. I was scared to sing because I couldn’t read the lyrics, and I thought something was wrong with me."
                  </p>
                  <p className="text-lg md:text-xl text-gray-500 leading-relaxed mb-8 md:mb-12 font-display font-medium">
                    Ten-year-old Cahara from Sumba was diagnosed with severe myopia. Within minutes, she was fitted with corrective lenses. "When I put them on, I saw everything clearly—the trees, my teacher’s smile, and the words on the chalkboard."
                  </p>
                  <div className="font-display font-black text-primary uppercase tracking-[0.2em] text-[13px]">— Cahara, Sumba, Indonesia</div>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="relative"
              >
                <div className="absolute -inset-10 bg-primary/5 blur-[120px] rounded-full"></div>
                <img
                  src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2070&auto=format&fit=crop"
                  alt="Cahara with glasses"
                  className="relative rounded-3xl md:rounded-[4rem] shadow-3xl w-full aspect-square object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute -bottom-10 -right-10 glass p-4 md:p-8 rounded-[2rem] shadow-2xl">
                  <div className="text-2xl md:text-4xl font-display font-black text-primary tracking-tighter">100%</div>
                  <div className="text-[11px] font-black text-gray-400 uppercase tracking-[0.2em]">Vision Restored</div>
                </div>
              </motion.div>
            </div>

            <div className="bg-[#0F172A] p-8 md:p-28 rounded-3xl md:rounded-[5rem] text-white relative overflow-hidden shadow-3xl mb-24 md:mb-32">
              <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 blur-[160px] rounded-full"></div>
              <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/5 blur-[120px] rounded-full"></div>
              <h2 className="text-primary font-display font-extrabold tracking-[0.3em] text-[13px] uppercase mb-6 md:mb-20 text-center">Global Statistics</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-24 relative z-10">
                {[
                  { val: '80%', desc: 'Of global blindness is preventable or treatable with existing medical interventions.' },
                  { val: '94%', desc: 'Of vision loss for Aboriginal adults is preventable through early detection.' },
                  { val: '285M', desc: 'People are blind or vision impaired globally, requiring urgent eye care services.' }
                ].map((stat, i) => (
                  <div key={i} className="text-center group">
                    <div className="text-3xl md:text-6xl font-display font-black text-primary mb-4 md:mb-8 tracking-tighter group-hover:scale-110 transition-transform duration-500">{stat.val}</div>
                    <p className="text-gray-400 text-lg md:text-xl font-display font-medium leading-relaxed max-w-[200px] mx-auto">{stat.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* Patient Stories Section */}
            <div className="mb-24 md:mb-32">
              <div className="max-w-5xl mx-auto text-center mb-12 md:mb-20">
                <h2 className="text-primary font-display font-extrabold tracking-[0.3em] text-[11px] uppercase mb-3">Real Impact</h2>
                <h3 className="text-2xl md:text-5xl font-display font-extrabold text-gray-900 tracking-tight">Patient Stories</h3>
                <p className="text-lg md:text-xl text-gray-500 font-display font-medium leading-relaxed mt-6 max-w-2xl mx-auto">
                  Behind every statistic is a human life transformed by the power of restored vision. Read their inspiring journeys.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                {[
                  {
                    name: 'Cahara',
                    location: 'Sumba, Indonesia',
                    image: '/media/images/Cahara.png',
                    story: 'Ten-year-old Cahara was diagnosed with severe myopia. With her new glasses, her vision was instantly restored, allowing her to see the blackboard and thrive in school.'
                  },
                  {
                    name: 'Kristin',
                    location: 'Solomon Islands',
                    image: '/media/images/Kristin.png',
                    story: 'Thanks to timely medical intervention, Kristin received the life-changing treatment she needed, restoring her sight and opening up a brighter future.'
                  },
                  {
                    name: 'Richard',
                    location: 'Philippines',
                    image: '/media/images/Richard.png',
                    story: 'Richard regained his independence after a successful sight-restoring surgery. He can now fully support his family and enjoy his everyday life.'
                  },
                  {
                    name: 'Keirwin',
                    location: 'Philippines',
                    image: '/media/images/Keirwin.png',
                    story: 'A targeted clinical procedure changed Keirwin\'s life forever. With clear vision, he is back to learning, playing, and engaging with his community.'
                  },
                  {
                    name: 'Andre',
                    location: 'Bangladesh',
                    image: '/media/images/Andre.png',
                    story: 'Andre\'s journey to clear sight was made possible through dedicated clinical care. He now looks forward to a fulfilling life without the burden of vision loss.'
                  }
                ].map((patient, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    whileHover={{ y: -10 }}
                    className="group relative bg-white rounded-3xl md:rounded-[2rem] overflow-hidden border border-gray-100 shadow-xl hover:shadow-2xl transition-all duration-500 flex flex-col"
                  >
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img
                        src={patient.image}
                        alt={`${patient.name}'s story`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/10 to-transparent opacity-60"></div>
                      <div className="absolute bottom-6 left-6 text-white text-left z-10">
                        <h4 className="text-2xl font-display font-extrabold mb-1">{patient.name}</h4>
                        <div className="text-[11px] font-black uppercase tracking-[0.2em] text-primary">{patient.location}</div>
                      </div>
                    </div>
                    <div className="p-6 md:p-8 flex-grow flex flex-col bg-white">
                      <p className="text-gray-600 text-base md:text-lg leading-relaxed font-display font-medium mb-6 flex-grow">
                        {patient.story}
                      </p>
                      <button onClick={() => onNavigate && onNavigate(`story-${patient.name.toLowerCase()}`)} className="text-xs font-display font-black text-primary uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all w-fit">
                        Read Full Story <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Resources Section */}
            <div className="max-w-5xl mx-auto text-center mb-16 md:mb-32">
              <h2 className="text-primary font-display font-extrabold tracking-[0.3em] text-[11px] uppercase mb-4">Transparency</h2>
              <h3 className="text-xl md:text-4xl font-display font-extrabold text-gray-900 mb-8 md:mb-12 leading-[1.1] tracking-tight">Annual Reports & Publications</h3>
              <p className="text-lg md:text-xl text-gray-500 font-display font-medium leading-relaxed mb-12 md:mb-16 max-w-3xl mx-auto">
                We are committed to full transparency and accountability. Access our latest financial statements, annual reports, and governance policies.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                {[
                  { title: 'Annual Reports', icon: <BookOpen className="w-8 h-8" />, desc: 'Comprehensive yearly reviews of our global activities and impact.' },
                  { title: 'Financial Reports', icon: <FileText className="w-8 h-8" />, desc: 'Audited financial statements ensuring full accountability.' },
                  { title: 'Governance & Policies', icon: <ShieldCheck className="w-8 h-8" />, desc: 'Our framework for ethical operations and strategic direction.' },
                  { title: 'Privacy Policy', icon: <Lock className="w-8 h-8" />, desc: 'How we protect your data and respect your privacy.' },
                  { title: 'Terms & Conditions', icon: <CheckCircle2 className="w-8 h-8" />, desc: 'The legal framework for interacting with our organization.' },
                  { title: 'Cookies Policy', icon: <Cookie className="w-8 h-8" />, desc: 'Information about how we use cookies on our digital platforms.' }
                ].map((resource, i) => (
                  <motion.div
                    key={i}
                    onClick={() => onNavigate && onNavigate('reports-policies')}
                    whileHover={{ y: -10 }}
                    className="p-6 md:p-8 bg-white rounded-3xl md:rounded-[3rem] border border-gray-100 shadow-xl flex flex-col items-center group cursor-pointer text-center"
                  >
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-3xl bg-primary/5 flex items-center justify-center text-primary mb-6 md:mb-8 group-hover:bg-primary group-hover:text-white transition-all duration-500">
                      {resource.icon}
                    </div>
                    <h4 className="text-lg md:text-xl font-display font-extrabold text-gray-900 mb-4">{resource.title}</h4>
                    <p className="text-sm text-gray-500 font-display font-medium mb-8 leading-relaxed">
                      {resource.desc}
                    </p>
                    <button className="text-xs font-display font-black text-primary uppercase tracking-widest flex items-center gap-2 group-hover:gap-4 transition-all">
                      View Documents <ArrowRight className="w-4 h-4" />
                    </button>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Call to Donate CTA */}
            <div className="text-center mt-12 md:mt-20">
              <a
                href="/donate"
                className="px-8 py-6 bg-accent hover:bg-orange-600 text-white rounded-2xl font-display font-black uppercase tracking-widest text-sm transition-all transform hover:scale-105 shadow-2xl shadow-accent/40 flex items-center justify-center gap-4 mx-auto"
              >
                Donate Now To Save Sight <ArrowRight className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
        );
}

        function GetInvolvedPage({onNavigate}: {onNavigate: (id: string) => void }) {
  const cardLinks: Record<string, string> = {
          'Volunteer': 'volunteer',
        'Partner': 'partner',
        'Donate': 'donate',
  };

        return (
        <div className="pt-20 pb-12 md:pt-28 md:pb-20 bg-[#FAFAFA]">
          <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6">
            <div className="max-w-5xl mb-24 md:mb-32">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-black uppercase tracking-[0.2em] mb-5"
              >
                <span>Get Involved</span>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-3xl sm:text-4xl md:text-6xl font-display font-extrabold mb-8 md:mb-12 leading-[1.1] md:leading-[0.95] tracking-tighter"
              >
                Join the <span className="text-primary">Mission</span>. <br />Make a Difference.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg md:text-xl text-gray-500 leading-relaxed font-display font-medium max-w-3xl"
              >
                Join us in our mission to eliminate avoidable blindness. We offer several pathways for involvement, from professional volunteering to strategic partnerships.
              </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-24 md:mb-32">
              <div className="col-span-full mb-8 md:mb-12">
                <h2 className="text-primary font-display font-extrabold tracking-[0.3em] text-[11px] uppercase mb-2 md:mb-6">Get Involved</h2>
                <h3 className="text-xl md:text-4xl font-display font-extrabold text-gray-900 tracking-tight">Ways You Can Help</h3>
              </div>
              {[
                {
                  title: 'Volunteer',
                  icon: <Users className="w-10 h-10" />,
                  desc: 'Contribute your skills to our clinical missions or support our administrative operations in Australia.',
                  action: 'Apply Now',
                  color: 'bg-primary'
                },
                {
                  title: 'Partner',
                  icon: <Globe className="w-10 h-10" />,
                  desc: 'We collaborate with governments and NGOs to implement sustainable eye health infrastructure.',
                  action: 'Become a Partner',
                  color: 'bg-accent'
                },
                {
                  title: 'Donate',
                  icon: <Heart className="w-10 h-10" />,
                  desc: 'Your financial contributions directly fund diagnostic screenings, corrective eyewear, and surgeries.',
                  action: 'Donate Today',
                  color: 'bg-accent'
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -20 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => onNavigate(cardLinks[item.title])}
                  className="p-6 md:p-12 bg-white rounded-3xl md:rounded-[4rem] border border-gray-100 shadow-xl hover:shadow-3xl transition-all duration-700 group cursor-pointer"
                >
                  <div className={`${item.color} p-5 md:p-4 rounded-2xl md:rounded-[2rem] w-fit mb-8 md:mb-10 text-white group-hover:rotate-12 transition-transform duration-500 shadow-lg`}>
                    {item.icon}
                  </div>
                  <h3 className="text-2xl md:text-3xl font-display font-extrabold mb-4 md:mb-6 text-gray-900 tracking-tight">{item.title}</h3>
                  <p className="text-base md:text-xl text-gray-500 mb-8 md:mb-10 leading-relaxed font-display font-medium">{item.desc}</p>
                  <span className="mt-auto font-display font-black text-primary uppercase tracking-[0.2em] text-xs flex items-center gap-3 group-hover:gap-5 transition-all">
                    {item.action} <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform" />
                  </span>
                </motion.div>
              ))}
            </div>

            <div className="relative rounded-3xl md:rounded-[5rem] overflow-hidden bg-gray-900 p-8 md:p-28 text-white shadow-3xl mb-24 md:mb-32">
              <div className="absolute inset-0 opacity-40">
                <img
                  src="https://images.unsplash.com/photo-1516841273335-e39b37888115?q=80&w=2047&auto=format&fit=crop"
                  alt="Legacy giving"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent"></div>
              <div className="relative z-10 max-w-3xl">
                <h2 className="text-accent font-display font-extrabold tracking-[0.3em] text-[13px] uppercase mb-4 md:mb-10">Legacy Giving</h2>
                <h3 className="text-2xl md:text-4xl font-display font-extrabold mb-8 md:mb-10 leading-[1.1] tracking-tight">A gift that ensures a lasting legacy.</h3>
                <p className="text-lg md:text-xl text-gray-300 mb-10 md:mb-14 leading-relaxed font-display font-medium">
                  By including a gift in your Will, you ensure that Foresight Australia can continue its vital work in the prevention of blindness for generations to come.
                </p>
                <button className="px-8 py-5 md:px-8 md:py-6 bg-white text-gray-900 rounded-2xl font-display font-black uppercase tracking-widest text-xs transition-all transform hover:scale-105">
                  Request Information Pack
                </button>
              </div>
            </div>
          </div>
        </div>
        );
}

        function VolunteerPage({onNavigate}: {onNavigate: (id: string) => void }) {
  const [submitted, setSubmitted] = useState(false);
        const [submitting, setSubmitting] = useState(false);
        const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
          e.preventDefault();
          setSubmitting(true);
          const data = new FormData(e.currentTarget);
          await fetch('https://formspree.io/f/xvzvkezw', {
            method: 'POST',
          body: data,
          headers: {Accept: 'application/json' },
    });
          setSubmitting(false);
          setSubmitted(true);
  };

          const inputCls = "w-full px-4 py-4 md:px-6 md:py-5 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-display font-bold text-gray-900 placeholder:font-medium placeholder:text-gray-400";
          const labelCls = "text-[11px] font-display font-black text-gray-400 uppercase tracking-[0.2em]";

          if (submitted) {
    return (
          <div className="pt-20 pb-12 md:pt-28 md:pb-20 bg-[#FAFAFA] min-h-screen flex items-center justify-center">
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="max-w-xl w-full mx-auto px-4 text-center">
              <div className="bg-white p-8 md:p-16 rounded-3xl md:rounded-[4rem] shadow-3xl border border-gray-100">
                <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-10 text-primary">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h2 className="text-2xl md:text-3xl font-display font-extrabold mb-6 text-gray-900 tracking-tight">Thank you for your interest.</h2>
                <p className="text-lg md:text-xl text-gray-500 font-display font-medium mb-12">We will be in touch.</p>
                <button onClick={() => onNavigate('get-involved')} className="px-8 py-5 bg-primary text-white rounded-2xl font-display font-black uppercase tracking-widest text-xs transition-all hover:bg-primary/90 shadow-xl shadow-primary/20">
                  Back to Get Involved
                </button>
              </div>
            </motion.div>
          </div>
          );
  }

          return (
          <div className="pt-20 pb-12 md:pt-28 md:pb-20 bg-[#FAFAFA]">
            <div className="max-w-4xl mx-auto px-4 sm:px-4 lg:px-6">
              <div className="mb-16 md:mb-24">
                <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                  className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-black uppercase tracking-[0.2em] mb-5">
                  <span>Get Involved</span>
                </motion.div>
                <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                  className="text-3xl sm:text-4xl md:text-6xl font-display font-extrabold mb-8 md:mb-10 leading-[1.05] tracking-tighter">
                  Volunteer <span className="text-primary">Application</span>
                </motion.h1>
                <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                  className="text-lg md:text-xl text-gray-500 leading-relaxed font-display font-medium max-w-3xl">
                  Thank you for your interest in supporting Foresight Australia. We welcome expressions of interest from people who want to contribute their time, skills, and experience to help prevent avoidable blindness.
                </motion.p>
              </div>

              <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
                className="bg-white p-6 md:p-12 rounded-3xl md:rounded-[4rem] shadow-3xl border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-bl-full -mr-16 -mt-16"></div>
                <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                    <div className="space-y-3">
                      <label className={labelCls}>First Name</label>
                      <input required type="text" name="first_name" className={inputCls} placeholder="Jane" />
                    </div>
                    <div className="space-y-3">
                      <label className={labelCls}>Last Name</label>
                      <input required type="text" name="last_name" className={inputCls} placeholder="Smith" />
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                    <div className="space-y-3">
                      <label className={labelCls}>Email Address</label>
                      <input required type="email" name="email" className={inputCls} placeholder="jane@example.com" />
                    </div>
                    <div className="space-y-3">
                      <label className={labelCls}>Phone Number</label>
                      <input type="tel" name="phone" className={inputCls} placeholder="+61 4xx xxx xxx" />
                    </div>
                  </div>
                  <div className="space-y-3">
                    <label className={labelCls}>City / State</label>
                    <input type="text" name="city_state" className={inputCls} placeholder="Sydney, NSW" />
                  </div>
                  <div className="space-y-3">
                    <label className={labelCls}>Area of Interest</label>
                    <select name="area_of_interest" className={inputCls}>
                      <option value="">Select an area…</option>
                      <option>Clinical / Medical</option>
                      <option>Administration & Operations</option>
                      <option>Fundraising & Events</option>
                      <option>Communications & Marketing</option>
                      <option>Education & Training</option>
                      <option>Other</option>
                    </select>
                  </div>
                  <div className="space-y-3">
                    <label className={labelCls}>Relevant Skills / Experience</label>
                    <textarea required rows={3} name="skills_experience" className={inputCls} placeholder="Briefly describe your relevant background…" />
                  </div>
                  <div className="space-y-3">
                    <label className={labelCls}>Why would you like to volunteer?</label>
                    <textarea required rows={4} name="motivation" className={inputCls} placeholder="Tell us what motivates you to volunteer with Foresight Australia…" />
                  </div>
                  <div className="space-y-3">
                    <label className={labelCls}>Availability</label>
                    <input type="text" name="availability" className={inputCls} placeholder="e.g. Weekends, occasional weekdays, flexible" />
                  </div>
                  <p className="text-sm text-gray-400 font-display font-medium">
                    We respect your privacy and will only use your details to respond to your enquiry.
                  </p>
                  <button type="submit" disabled={submitting} className="w-full py-5 md:py-7 bg-primary text-white rounded-2xl font-display font-black uppercase tracking-[0.2em] text-xs hover:bg-primary/90 transition-all shadow-2xl shadow-primary/20 disabled:opacity-60 disabled:cursor-not-allowed">
                    {submitting ? 'Sending…' : 'Submit Application'}
                  </button>
                </form>
              </motion.div>
            </div>
          </div>
          );
}

          function PartnerPage({onNavigate}: {onNavigate: (id: string) => void }) {
  const [submitted, setSubmitted] = useState(false);
          const [submitting, setSubmitting] = useState(false);
          const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
            e.preventDefault();
            setSubmitting(true);
            const data = new FormData(e.currentTarget);
            await fetch('https://formspree.io/f/mqegprpz', {
              method: 'POST',
            body: data,
            headers: {Accept: 'application/json' },
    });
            setSubmitting(false);
            setSubmitted(true);
  };

            const inputCls = "w-full px-4 py-4 md:px-6 md:py-5 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-display font-bold text-gray-900 placeholder:font-medium placeholder:text-gray-400";
            const labelCls = "text-[11px] font-display font-black text-gray-400 uppercase tracking-[0.2em]";

            if (submitted) {
    return (
            <div className="pt-20 pb-12 md:pt-28 md:pb-20 bg-[#FAFAFA] min-h-screen flex items-center justify-center">
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="max-w-xl w-full mx-auto px-4 text-center">
                <div className="bg-white p-8 md:p-16 rounded-3xl md:rounded-[4rem] shadow-3xl border border-gray-100">
                  <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-10 text-accent">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-display font-extrabold mb-6 text-gray-900 tracking-tight">Thank you for your enquiry.</h2>
                  <p className="text-lg md:text-xl text-gray-500 font-display font-medium mb-12">We will be in touch.</p>
                  <button onClick={() => onNavigate('get-involved')} className="px-8 py-5 bg-accent text-white rounded-2xl font-display font-black uppercase tracking-widest text-xs transition-all hover:bg-accent-dark shadow-xl shadow-accent/20">
                    Back to Get Involved
                  </button>
                </div>
              </motion.div>
            </div>
            );
  }

            return (
            <div className="pt-20 pb-12 md:pt-28 md:pb-20 bg-[#FAFAFA]">
              <div className="max-w-4xl mx-auto px-4 sm:px-4 lg:px-6">
                <div className="mb-16 md:mb-24">
                  <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}
                    className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-black uppercase tracking-[0.2em] mb-5">
                    <span>Get Involved</span>
                  </motion.div>
                  <motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}
                    className="text-3xl sm:text-4xl md:text-6xl font-display font-extrabold mb-8 md:mb-10 leading-[1.05] tracking-tighter">
                    Partner <span className="text-primary">With Us</span>
                  </motion.h1>
                  <motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
                    className="text-lg md:text-xl text-gray-500 leading-relaxed font-display font-medium max-w-3xl">
                    Foresight Australia works with organisations, institutions, and supporters who share our commitment to sustainable eye care and preventing avoidable blindness.
                  </motion.p>
                </div>

                <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}
                  className="bg-white p-6 md:p-12 rounded-3xl md:rounded-[4rem] shadow-3xl border border-gray-100 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-bl-full -mr-16 -mt-16"></div>
                  <form onSubmit={handleSubmit} className="space-y-8 relative z-10">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                      <div className="space-y-3">
                        <label className={labelCls}>Organisation Name</label>
                        <input required type="text" name="organisation_name" className={inputCls} placeholder="Organisation Ltd" />
                      </div>
                      <div className="space-y-3">
                        <label className={labelCls}>Contact Person</label>
                        <input required type="text" name="contact_person" className={inputCls} placeholder="Full name" />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                      <div className="space-y-3">
                        <label className={labelCls}>Email Address</label>
                        <input required type="email" name="email" className={inputCls} placeholder="contact@organisation.com" />
                      </div>
                      <div className="space-y-3">
                        <label className={labelCls}>Phone Number</label>
                        <input type="tel" name="phone" className={inputCls} placeholder="+61 2 xxxx xxxx" />
                      </div>
                    </div>
                    <div className="space-y-3">
                      <label className={labelCls}>Website</label>
                      <input type="url" name="website" className={inputCls} placeholder="https://www.organisation.com" />
                    </div>
                    <div className="space-y-3">
                      <label className={labelCls}>Type of Partnership Interest</label>
                      <select name="partnership_type" className={inputCls}>
                        <option value="">Select a type…</option>
                        <option>Funding / Grants</option>
                        <option>Clinical Partnership</option>
                        <option>Government / NGO Collaboration</option>
                        <option>Corporate Social Responsibility</option>
                        <option>Research & Education</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="space-y-3">
                      <label className={labelCls}>Message / Proposal</label>
                      <textarea required rows={5} name="message" className={inputCls} placeholder="Briefly describe your organisation and how you'd like to partner with us…" />
                    </div>
                    <p className="text-sm text-gray-400 font-display font-medium">
                      We respect your privacy and will only use your details to respond to your enquiry.
                    </p>
                    <button type="submit" disabled={submitting} className="w-full py-5 md:py-7 bg-accent text-white rounded-2xl font-display font-black uppercase tracking-[0.2em] text-xs hover:bg-accent-dark transition-all shadow-2xl shadow-accent/20 disabled:opacity-60 disabled:cursor-not-allowed">
                      {submitting ? 'Sending…' : 'Submit Enquiry'}
                    </button>
                  </form>
                </motion.div>
              </div>
            </div>
            );
}

            function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
              e.preventDefault();
            setSubmitted(true);
  };

            if (submitted) {
    return (
            <div className="pt-20 pb-12 md:pt-28 md:pb-20 bg-[#FAFAFA] min-h-screen flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="max-w-xl w-full mx-auto px-4 text-center"
              >
                <div className="bg-white p-8 md:p-16 rounded-3xl md:rounded-[4rem] shadow-3xl border border-gray-100">
                  <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-10 text-primary">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h2 className="text-2xl md:text-4xl font-display font-extrabold mb-6 text-gray-900 tracking-tight">Message Sent!</h2>
                  <p className="text-lg md:text-xl text-gray-500 font-display font-medium mb-12">
                    Thank you for reaching out to Foresight Australia. We've received your message and will get back to you shortly at foresight@foresight.org.au.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="px-8 py-5 bg-primary text-white rounded-2xl font-display font-black uppercase tracking-widest text-xs transition-all hover:bg-primary-dark shadow-xl shadow-primary/20"
                  >
                    Send another message
                  </button>
                </div>
              </motion.div>
            </div>
            );
  }

            return (
            <div className="pt-20 pb-12 md:pt-28 md:pb-20 bg-[#FAFAFA]">
              <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6">
                <div className="max-w-5xl mb-24 md:mb-32">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-xs font-black uppercase tracking-[0.2em] mb-5"
                  >
                    <span>Contact Us</span>
                  </motion.div>
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl sm:text-4xl md:text-6xl font-display font-extrabold mb-8 md:mb-12 leading-[1.1] md:leading-[0.95] tracking-tighter"
                  >
                    Get in <span className="text-primary">Touch</span>. <br />We're Here.
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    className="text-lg md:text-xl text-gray-500 leading-relaxed font-display font-medium max-w-3xl"
                  >
                    For enquiries regarding our programs, partnerships, or how to support our work, please contact our Sydney office.
                  </motion.p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-32 mb-24 md:mb-32">
                  <div>
                    <div className="space-y-10 md:space-y-20">
                      {[
                        { icon: <MapPin className="w-8 h-8 md:w-10 md:h-10" />, title: 'Our Office', content: 'PO Box 663, HORNSBY NSW 2077' },
                        { icon: <Phone className="w-8 h-8 md:w-10 md:h-10" />, title: 'Phone', content: '+61 2 8021 3632' },
                        { icon: <Mail className="w-8 h-8 md:w-10 md:h-10" />, title: 'Email', content: 'foresight@foresight.org.au' }
                      ].map((item, i) => (
                        <div key={i} className="flex items-start gap-6 md:gap-10 group">
                          <div className="bg-white p-4 md:p-6 rounded-2xl md:rounded-[2rem] shadow-xl group-hover:bg-primary group-hover:text-white transition-all duration-500 text-primary border border-gray-100">
                            {item.icon}
                          </div>
                          <div>
                            <h3 className="text-xl md:text-2xl font-display font-extrabold mb-2 md:mb-4 text-gray-900 tracking-tight">{item.title}</h3>
                            <p className="text-base md:text-xl text-gray-500 leading-relaxed font-display font-medium">
                              {item.content}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    className="bg-white p-6 md:p-16 rounded-3xl md:rounded-[4rem] shadow-3xl border border-gray-100 relative overflow-hidden"
                  >
                    <div className="absolute top-0 right-0 w-48 h-48 bg-primary/5 rounded-bl-full -mr-16 -mt-16"></div>
                    <form onSubmit={handleSubmit} className="space-y-6 md:space-y-10 relative z-10">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-10">
                        <div className="space-y-3 md:space-y-4">
                          <label className="text-[11px] font-display font-black text-gray-400 uppercase tracking-[0.2em]">First Name</label>
                          <input required type="text" className="w-full px-4 py-4 md:px-8 md:py-6 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-display font-bold text-gray-900" placeholder="John" />
                        </div>
                        <div className="space-y-3 md:space-y-4">
                          <label className="text-[11px] font-display font-black text-gray-400 uppercase tracking-[0.2em]">Last Name</label>
                          <input required type="text" className="w-full px-4 py-4 md:px-8 md:py-6 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-display font-bold text-gray-900" placeholder="Doe" />
                        </div>
                      </div>
                      <div className="space-y-3 md:space-y-4">
                        <label className="text-[11px] font-display font-black text-gray-400 uppercase tracking-[0.2em]">Email Address</label>
                        <input required type="email" className="w-full px-4 py-4 md:px-8 md:py-6 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-display font-bold text-gray-900" placeholder="john@example.com" />
                      </div>
                      <div className="space-y-3 md:space-y-4">
                        <label className="text-[11px] font-display font-black text-gray-400 uppercase tracking-[0.2em]">Message</label>
                        <textarea required rows={4} className="w-full px-4 py-4 md:px-8 md:py-6 bg-gray-50 border border-gray-100 rounded-2xl focus:outline-none focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all font-display font-bold text-gray-900" placeholder="How can we help?"></textarea>
                      </div>
                      <button type="submit" className="w-full py-4 md:py-5 bg-accent text-white rounded-2xl font-display font-black uppercase tracking-[0.2em] text-xs hover:bg-accent-dark transition-all shadow-2xl shadow-accent/20">
                        Send Message
                      </button>
                    </form>
                  </motion.div>
                </div>
              </div>
            </div>
            );
}

            function DonatePage({ onNavigate }: { onNavigate?: (id: string) => void }) {
  useEffect(() => {
    const existingScript = document.querySelector(
      'script[src="https://donorbox.org/widget.js"]'
    );
    if (!existingScript) {
      const script = document.createElement('script');
      script.src = 'https://donorbox.org/widget.js';
      script.setAttribute('paypalExpress', 'false');
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const [amount, setAmount] = useState<string | null>(null);
  const [frequency, setFrequency] = useState<'single' | 'monthly'>('single');
  const [project, setProject] = useState('All Foresight Projects');

  const tiers = [
    { amount: '$35', title: 'The First Step', outcome: 'Provide a comprehensive eye screening for a child or adult in a remote community.' },
    { amount: '$150', title: 'The Gift of Sight', outcome: 'Fund a cataract surgery and restore someone’s vision in under 30 minutes.' },
    { amount: '$500', title: 'Train a Healer', outcome: 'Support the training of a local nurse or clinician, creating long-term impact.' },
    { amount: '$2,500', title: 'Equip a Clinic', outcome: 'Help provide essential equipment to deliver ongoing eye care services.' }
  ];

  return (
    <div className="bg-[#FAFAFA] min-h-screen ">
      {/* 1. HERO SECTION */}
      <section className="pt-12 pb-8 md:pt-16 md:pb-10 bg-primary text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542810634-71277d95dcbb?q=80&w=2070')] bg-cover bg-center opacity-30 brightness-[0.75]"></div>
        <div className="absolute inset-0 bg-black/30"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-extrabold mb-4 leading-[1.1] tracking-tighter">
              Restore Sight Today
            </h1>
            <p className="text-lg md:text-xl text-secondary opacity-90 font-display font-medium leading-relaxed mb-6">
              Your donation directly supports life-changing eye care and sustainable local training programs.
            </p>
            <p className="text-sm md:text-base text-accent font-display font-black uppercase tracking-[0.2em] italic">
              "You are giving someone the chance to see their family again."
            </p>
          </motion.div>
        </div>
      </section>

      
      {/* DONATION FORM CONTAINER */}
      <section className="py-8 md:py-10 bg-white relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-4 lg:px-6">
          <div className="bg-white rounded-[2.5rem] shadow-3xl border border-gray-100 p-6 md:p-8 relative z-10 -mt-20 md:-mt-24 text-center">
            
            <h2 className="text-primary font-display font-black uppercase tracking-[0.3em] text-[11px] mb-4">Make Your Gift</h2>
            <h3 className="text-2xl md:text-4xl font-display font-extrabold mb-8 tracking-tight">Choose how you'd like to give</h3>
            
            {/* DONORBOX EMBED */}
            <div className="flex justify-center mb-8">
              <iframe
                src="https://donorbox.org/embed/foresight-australia-donate?default_interval=o&enable_auto_scroll=false"
                name="donorbox"
                allowpaymentrequest="true"
                seamless="seamless"
                frameBorder="0"
                scrolling="no"
                height="900px"
                width="100%"
                style={{
                  maxWidth: '500px',
                  minWidth: '250px',
                  maxHeight: 'none',
                }}
                allow="payment"
                title="Donorbox Donation Form"
              />
            </div>
            
            {/* TRUST & CREDIBILITY */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 md:gap-10 opacity-50 mt-8">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-gray-600" />
                <span className="text-[10px] font-display font-black uppercase tracking-widest text-gray-600">Secure SSL Donation</span>
              </div>
              <div className="flex items-center gap-3">
                <Heart className="w-5 h-5 text-gray-600" />
                <span className="text-[10px] font-display font-black uppercase tracking-widest text-gray-600">Registered Charity</span>
              </div>
              <div className="flex items-center gap-3">
                <Award className="w-5 h-5 text-gray-600" />
                <span className="text-[10px] font-display font-black uppercase tracking-widest text-gray-600">Tax Deductible</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      
      {/* SECTION 5: Trust & Transparency */}
      <section className="py-10 md:py-14 bg-[#0F172A] text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-4 lg:px-6">
          <ShieldCheck className="w-16 h-16 text-accent mx-auto mb-8" />
          <h2 className="text-2xl md:text-4xl font-display font-extrabold mb-12 tracking-tight">Trust & Transparency</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
              <h4 className="text-xl font-display font-bold mb-3 text-white">Over 40 Years</h4>
              <p className="text-gray-400 font-display font-medium">Of dedicated medical impact and sight restoration.</p>
            </div>
            <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
              <h4 className="text-xl font-display font-bold mb-3 text-white">Global Reach</h4>
              <p className="text-gray-400 font-display font-medium">Active programs across multiple high-need countries.</p>
            </div>
            <div className="p-6 bg-white/5 rounded-3xl border border-white/10">
              <h4 className="text-xl font-display font-bold mb-3 text-white">Sustainable Care</h4>
              <p className="text-gray-400 font-display font-medium">Commitment to training locals and capacity building.</p>
            </div>
          </div>

          <p className="text-gray-400 font-display font-medium mb-8">
            View our Annual Reports and Policies for full transparency.
          </p>
          <button
            onClick={() => onNavigate && onNavigate('reports-policies')}
            className="px-6 py-4 bg-white/10 hover:bg-white/20 text-white border border-white/20 rounded-xl font-display font-bold transition-all"
          >
            Read Reports & Policies
          </button>
        </div>
      </section>

      
      {/* SECTION 6: FAQ */}
      <section className="py-10 md:py-14 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-4 lg:px-6 text-center">
          <div className="mb-12">
            <h2 className="text-primary font-display font-extrabold tracking-[0.3em] text-[11px] uppercase mb-2">Common Questions</h2>
            <h3 className="text-3xl md:text-4xl font-display font-extrabold text-gray-900 tracking-tight">Donation FAQ</h3>
          </div>

          <div className="space-y-6 text-left">
            {[
              { q: 'Is my donation tax deductible?', a: 'Yes. Foresight Australia is a registered charity. Donations over $2 made by Australian residents are tax deductible.' },
              { q: 'Where does my money go?', a: 'Your funds directly support on-the-ground eye care, critical surgical procedures, local clinician training, and equipping regional hospitals.' },
              { q: 'Can I donate monthly?', a: 'Absolutely. Choosing a monthly recurring donation via the form above provides reliable support for our sustainable programs.' },
              { q: 'How is Foresight different?', a: 'We focus on sustainable empowerment. We don\'t just treat patients; we build local medical infrastructure and train regional clinicians so they can serve their own communities long-term.' }
            ].map((faq, i) => (
              <div key={i} className="bg-gray-50 p-6 rounded-3xl border border-gray-100">
                <h4 className="text-xl font-display font-extrabold text-gray-900 mb-3">{faq.q}</h4>
                <p className="text-gray-600 font-display font-medium leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    
      {/* SECTION 4: Story */}
      <section className="py-10 md:py-14 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6">
          <div className="bg-primary/5 rounded-[3rem] p-6 md:p-14 border border-primary/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-accent/20 blur-[60px] rounded-full"></div>
                <img
                  src="/media/images/Cahara.png"
                  alt="Cahara's clear vision restored"
                  className="rounded-3xl shadow-2xl relative z-10 w-full object-cover aspect-square md:aspect-[4/5]"
                />
              </div>
              <div>
                <Quote className="w-16 h-16 text-primary/20 mb-8" />
                <h3 className="text-3xl md:text-5xl font-display font-extrabold text-gray-900 tracking-tight mb-6">
                  She couldn’t see the board. Now she can see her future.
                </h3>
                <div className="mb-8">
                  <p className="text-2xl md:text-3xl font-serif italic text-primary leading-relaxed">
                    "When I put on my glasses, I saw everything."
                  </p>
                </div>
                <p className="text-xl text-gray-600 font-display font-medium leading-relaxed mb-10">
                  Ten-year-old Cahara couldn't see the words on the board or her teacher's smile. A simple pair of glasses changed everything. Now, her world is clear, and her future is bright.
                </p>
                <div className="inline-block px-4 py-4 bg-white rounded-2xl shadow-sm border border-gray-100">
                  <p className="text-primary font-display font-black text-sm uppercase tracking-widest">
                    Your support makes stories like this possible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      </div>
  );
}

const PATIENT_STORIES: Record<string, {name: string, location: string, image1: string, image2: string, quote: string, p1: string, p2: string, p3: string }> = {
              cahara: {
              name: 'Cahara',
            location: 'Sumba, Indonesia',
            image1: '/media/images/Cahara.png',
            image2: '/media/images/Cahara 2.png',
            quote: '"I couldn’t see the blackboard at school, even from the front row. I was scared to sing because I couldn’t read the lyrics, and I thought something was wrong with me."',
            p1: 'Ten-year-old Cahara from Sumba was an active and eager student, but gradually, her world began to blur. Diagnosed with severe myopia, she struggled in school and became withdrawn, thinking she could no longer participate in the activities she loved.',
            p2: 'Through a local Foresight-supported eye camp, Cahara was comprehensively assessed by trained community eye care workers. They provided a simple yet profoundly life-changing intervention: a pair of properly fitted prescription glasses.',
            p3: 'Within minutes of putting on her new glasses, Cahara\'s face lit up. She was able to see the trees, her teacher\'s face, and the words on the chalkboard clearly. Today, she is back in the front row, singing proudly and dreaming of her bright future ahead.'
  },
            kristin: {
              name: 'Kristin',
            location: 'Solomon Islands',
            image1: '/media/images/Kristin.png',
            image2: '/media/images/Kristin2.png',
            quote: '"My vision was slipping away. It felt like walking through a fog that just kept getting thicker."',
            p1: 'Kristin, a young girl from the Solomon Islands, was living with serious vision problems that affected how she saw and engaged with the world around her. Access to specialist eye care gave her the chance to receive assessment and treatment that may otherwise have been out of reach.',
            p2: 'When a visiting eye care team, supported by Foresight Australia, arrived at her local clinic, Kristin was identified as a candidate for cataract surgery. The procedure, taking less than thirty minutes, was performed efficiently using top-tier clinical equipment provided by our generous donors.',
            p3: 'The day after the surgery, when her bandages were removed, tears of joy streamed down Kristin\'s face. She could finally clearly see the faces of her grandchildren again. Her sight was restored, and with it, her autonomy and her vibrant role within her community.'
  },
            richard: {
              name:'Richard',
            location:'Philippines',
            image1: '/media/images/Richard.png',
            image2: '/media/images/Richard2.png',
            quote: '"Access to eye care can change a life"',
            p1: 'Richard is a bright young boy who loves to play, learn, and spend time with his family. But over time, his world began to blur. What should have been carefree days filled with school and play became frustrating and isolating, as his vision made it harder to keep up with other children. In his community, access to specialised eye care is limited, and without treatment, Richard risked falling behind—not just in school, but in life.',
            p2: 'That changed when Foresight Australia’s outreach team arrived. Through a local eye care program, Richard received a full examination and was diagnosed with cataracts—one of the leading causes of avoidable blindness. Thanks to the generosity of supporters, he was able to undergo sight-restoring surgery at no cost. The procedure was quick, but the impact was life-changing: his vision was restored, and with it, his independence and confidence.',
            p3: 'Today, Richard is back on his feet. His restored vision has not only given him the ability to return to his craft but has brought profound hope and sustainability to his entire family. He is a testament to the powerful ripple effect of sustainable eye care.'
  },
            keirwin: {
              name:'Keirwin',
            location:'Philippines',
            image1: '/media/images/Keirwin.png',
            image2: '/media/images/Kerwin2.png',
            quote: '"I can play with my friends, and I can aim during games. The blur is completely gone!"',
            p1: 'Keirwin from the Philippines had been living with severe vision loss for most of his childhood. Blind for 12 years, he had grown up with very limited sight, affecting how he learned, moved through daily life, and experienced the world around him.',
            p2: 'A targeted clinical check-up at his school, supported by Foresight\'s trained local medical staff, identified his condition. The prompt and precise care he received completely addressed the problem, correcting his vision with an ease that seemed like magic to his family.',
            p3: 'With his clear vision, Keirwin is back to learning, playing, and actively engaging with his community. The intervention didn\'t just correct his sight; it unlocked his full potential, ensuring he can grow up with clarity and confidence.'
  },
            andre: {
              name: 'Andre',
            location: 'Bangladesh',
            image1: '/media/images/Andre.png',
            image2: '/media/images/Andre2.png',
            quote: '"I thought darkness was just the natural way my life would go. I never expected to see the colors of my village again."',
            p1: 'Andre had lived in the rural parts of Bangladesh, watching his world steadily fade to grey and then to complete darkness. Like many in his underserved community, he believed his vision loss was an unavoidable reality of life.',
            p2: 'Everything changed when a dedicated clinical care team from a Foresight-aligned hospital arrived. Thanks to a short, specialized procedure, the debilitating barrier to his sight was removed. He received not just medical treatment, but the compassionate care of a well-equipped medical infrastructure.',
            p3: 'The moment Andre opened his eyes post-recovery, the vibrant colors of his village greeted him once again. His journey from darkness to light embodies our core belief: that sight is a fundamental human right that completely rewrites a person\'s destiny.'
  }
};

            function StoryPage({storyId, onBack, onNavigate}: {storyId: string, onBack: () => void, onNavigate?: (id: string) => void }) {
              useEffect(() => {
                window.scrollTo(0, 0);
              }, []);

            const story = PATIENT_STORIES[storyId];

            if (!story) {
    return (
            <div className="pt-20 pb-12 md:pt-28 md:pb-20 bg-[#FAFAFA] min-h-screen  flex items-center justify-center">
              <div className="text-center">
                <h2 className="text-2xl font-display font-extrabold text-gray-900 mb-4 tracking-tighter">Story not found</h2>
                <Link to="/where-we-work" className="text-primary font-display font-bold hover:underline flex items-center justify-center gap-2 mx-auto">
                  <ArrowLeft className="w-5 h-5" /> Back to Impact
                </Link>
              </div>
            </div>
            );
  }

            return (
            <div className="pt-14 pb-12 md:pt-20 md:pb-20 bg-[#FAFAFA] min-h-screen ">
              <div className="max-w-4xl mx-auto px-4 sm:px-4 lg:px-6">

                <Link
                  to="/where-we-work"
                  className="group flex items-center gap-3 text-sm font-display font-black uppercase tracking-widest text-gray-500 hover:text-primary transition-colors mb-4 md:mb-12"
                >
                  <ArrowLeft className="w-5 h-5 group-hover:-translate-x-2 transition-transform" /> Back to Impact
                </Link>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-8 md:mb-12 text-center md:text-left text-balance"
                >
                  <h1 className="text-3xl sm:text-4xl md:text-6xl font-display font-extrabold mb-4 md:mb-6 leading-[1.1] md:leading-[0.95] tracking-tighter text-gray-900">
                    {story.name}'s <span className="text-primary">Story</span>
                  </h1>
                  <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 text-primary text-[13px] font-black uppercase tracking-widest shadow-sm">
                    <MapPin className="w-4 h-4" /> {story.location}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.1 }}
                  className="aspect-[4/3] md:aspect-[21/9] rounded-3xl md:rounded-[3rem] overflow-hidden shadow-2xl mb-12 md:mb-20 border border-gray-100"
                >
                  <img
                    src={story.image1}
                    alt={`${story.name} Hero`}
                    className="w-full h-full object-cover"
                  />
                </motion.div>

                <div className="prose prose-lg md:prose-xl max-w-none prose-p:font-display prose-p:font-medium prose-p:text-gray-600 prose-p:leading-relaxed mx-auto md:mx-0">
                  <p>{story.p1}</p>

                  <div className="my-12 md:my-16 bg-white p-6 md:p-8 rounded-3xl md:rounded-[2rem] border border-gray-100 shadow-xl relative">
                    <Quote className="w-10 h-10 md:w-16 md:h-16 text-accent/20 absolute top-6 left-6 md:top-8 md:left-8" />
                    <p className="text-xl md:text-3xl text-gray-800 leading-relaxed italic font-display font-black text-center relative z-10 m-0 tracking-tight">
                      {story.quote}
                    </p>
                  </div>

                  <p>{story.p2}</p>

                  <img
                    src={story.image2}
                    alt={`${story.name} Supportive`}
                    className="w-full rounded-3xl md:rounded-[2rem] shadow-2xl my-12 border border-gray-100 object-cover"
                  />

                  <p>{story.p3}</p>
                </div>

                <div className="mt-16 pt-6 border-t border-gray-200 flex flex-col sm:flex-row gap-4 justify-between items-center">
                  <Link
                    to="/where-we-work"
                    className="w-full sm:w-auto px-8 py-5 bg-white border border-gray-200 hover:border-primary hover:text-primary text-gray-900 rounded-2xl font-display font-black uppercase tracking-widest text-xs transition-all flex items-center justify-center gap-3 shadow-sm hover:shadow-xl"
                  >
                    <ArrowLeft className="w-5 h-5" /> Back to Impact Stories
                  </Link>

                  <a
                    href="/donate"
                    className="w-full sm:w-auto px-8 py-5 bg-accent text-white rounded-2xl font-display font-black uppercase tracking-widest text-xs hover:bg-accent-dark transition-all shadow-xl flex items-center justify-center gap-3 transform hover:scale-105"
                  >
                    Donate to Save Sight <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
            );
}

            function NewsPage() {
  return (
            <div className="pt-20 pb-10 md:pt-28 md:pb-14 bg-[#FAFAFA] min-h-screen ">
              <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6">
                <div className="max-w-3xl mb-16">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[13px] font-black uppercase tracking-[0.2em] mb-5"
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
                    <div className="p-6 flex flex-col flex-1">
                      <p className="text-gray-400 text-sm font-display font-bold uppercase tracking-widest mb-2">April 2026</p>
                      <h3 className="text-2xl font-display font-extrabold text-gray-900 mb-6">Supporting Eye Health Leadership in Solomon Islands</h3>
                      <div className="text-gray-600 font-display font-medium leading-relaxed flex-1 space-y-4">
                        <p>
                          Foresight Australia was pleased to sponsor Dr Mathew Bonie, an ophthalmologist from Solomon Islands, to attend the recent RANZCO Global Eye Health and IAPB conference in Hobart.
                        </p>
                        <p>
                          This provided an important opportunity for Dr Bonie to hear from and connect with leaders in global eye health, while also helping strengthen planning for future programmes in Solomon Islands to build local ophthalmic capacity.
                        </p>
                        <p>
                          Foresight remains committed to supporting long-term, locally led eye health development in Solomon Islands through partnership, skills transfer, and sustained engagement.
                        </p>
                      </div>
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
                    <div className="p-6 flex flex-col flex-1">
                      <p className="text-gray-400 text-sm font-display font-bold uppercase tracking-widest mb-2">April 2026</p>
                      <h3 className="text-2xl font-display font-extrabold text-gray-900 mb-6">Foresight Australia at the RANZCO Global Eye Health and IAPB Conference</h3>
                      <div className="text-gray-600 font-display font-medium leading-relaxed flex-1 space-y-4">
                        <p>
                          Foresight Australia was represented at the recent RANZCO Global Eye Health and IAPB conference in Hobart by A/Prof Geoffrey Painter AM, who promoted Foresight’s return to in-country support for Solomon Islands in 2026.
                        </p>
                        <p>
                          During the conference, Geoffrey participated in the RANZCO Global Health Roundtable NGO discussion as well as the PacEYES meeting, helping continue important conversations about eye health partnerships and future collaboration across the region.
                        </p>
                        <p>
                          This year is especially significant, marking the 30th anniversary of Geoffrey’s first visit to Solomon Islands — a reminder of Foresight’s long-standing connection and commitment to strengthening local eye care capacity.
                        </p>
                      </div>
                    </div>
                  </motion.article>
                </div>
              </div>
            </div>
            );
}

function ReportsPoliciesPage() {
  const policies = [
            'Foresight Conflict of Interest Policy',
            'Foresight Complaints Policy',
            'Foresight Child Protection Policy',
            'Foresight Counter-terrorism Policy',
            'Foresight Financial Management Policy',
            'Foresight Gender Equity Policy',
            'Foresight Whistle Blower Policy',
            'Foresight Non-development Policy',
            'Foresight Corruption and Fraud Prevention Policy',
            'Foresight Constitution – 2020',
            'Foresight Fundraising Policy',
            'Foresight Code of Conduct',
            'Foresight Transparency and Communication Policy',
            'Foresight Prevention of Sexual Exploitation and Harassment Policy',
            'Foresight Philosophy and Principles Policy'
            ];

            return (
            <div className="pt-20 pb-12 md:pt-28 md:pb-20 bg-[#FAFAFA]">
              <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6">
                <div className="max-w-5xl mb-24 md:mb-32">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-primary/5 border border-primary/10 text-primary text-[13px] font-black uppercase tracking-[0.2em] mb-5"
                  >
                    <span>Transparency</span>
                  </motion.div>
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-4xl sm:text-5xl md:text-7xl font-display font-extrabold mb-8 md:mb-12 leading-[1.1] md:leading-[0.95] tracking-tighter"
                  >
                    Reports <span className="text-primary">& Policies</span>
                  </motion.h1>
                </div>

                <div className="space-y-24 md:space-y-32">
                  {/* SECTION 1: Annual Reports */}
                  <section id="annual-reports">
                    <h2 className="text-2xl md:text-3xl font-display font-extrabold text-gray-900 mb-6 tracking-tight">Annual Reports</h2>
                    <p className="text-lg text-gray-500 font-display font-medium leading-relaxed mb-12 max-w-3xl">
                      Explore our annual reports to see how your support is making a measurable impact.
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      {[2025, 2024].map((year) => (
                        <a
                          key={year}
                          href={`/media/documents/annual-report-${year}.pdf`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-6 bg-white rounded-3xl border border-gray-100 shadow-sm flex items-center justify-between group hover:border-primary/30 transition-all cursor-pointer hover:shadow-xl"
                        >
                          <div className="flex items-center gap-6">
                            <div className="bg-primary/5 p-4 rounded-2xl text-primary group-hover:bg-primary group-hover:text-white transition-all">
                              <FileText className="w-6 h-6" />
                            </div>
                            <div>
                              <h4 className="text-xl font-display font-extrabold text-gray-900">{year} Annual Report</h4>
                              <p className="text-xs text-gray-400 font-display font-black uppercase tracking-widest mt-1">View PDF</p>
                            </div>
                          </div>
                          <ArrowRight className="w-6 h-6 text-gray-300 group-hover:text-primary group-hover:translate-x-2 transition-all" />
                        </a>
                      ))}
                    </div>
                  </section>

                  {/* SECTION 2: Policies */}
                  <section id="governance-policies">
                    <h2 className="text-2xl md:text-3xl font-display font-extrabold text-gray-900 mb-6 tracking-tight">Governance & Policies</h2>
                    <p className="text-lg text-gray-500 font-display font-medium leading-relaxed mb-12 max-w-3xl">
                      Foresight Australia is committed to transparency, accountability, and ethical practice. The following policies guide our work.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {policies.map((policy) => (
                        <a
                          key={policy}
                          href={`/media/documents/${policy.toLowerCase().replace(/ – /g, '-').replace(/ /g, '-').replace(/[()]/g, '')}.pdf`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm flex items-center justify-between group hover:bg-gray-50 hover:border-primary/20 transition-all cursor-pointer"
                        >
                          <div className="flex items-center gap-4">
                            <ShieldCheck className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors flex-shrink-0" />
                            <span className="font-display font-bold text-gray-700 group-hover:text-gray-900 transition-colors uppercase text-[11px] tracking-widest">{policy}</span>
                          </div>
                          <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-primary transition-all flex-shrink-0" />
                        </a>
                      ))}
                    </div>
                  </section>
                </div>
              </div>
            </div>
            );
}

            function SubscribePage() {
  const [submitted, setSubmitted] = useState(false);

            const [submitting, setSubmitting] = useState(false);

            const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
              e.preventDefault();
              setSubmitting(true);
              const data = new FormData(e.currentTarget);
              await fetch('https://formspree.io/f/mykberjz', {
                method: 'POST',
              body: data,
              headers: {Accept: 'application/json' },
    });
              setSubmitting(false);
              setSubmitted(true);
              window.scrollTo(0, 0);
  };

              if (submitted) {
    return (
              <div className="pt-20 pb-12 md:pt-28 md:pb-20 bg-[#FAFAFA] min-h-screen flex items-center">
                <div className="max-w-xl mx-auto px-4 text-center">
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white p-8 rounded-[3rem] shadow-xl border border-gray-100"
                  >
                    <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-8 text-primary">
                      <CheckCircle2 className="w-10 h-10" />
                    </div>
                    <h2 className="text-2xl font-display font-extrabold text-gray-900 mb-4 tracking-tight">Thank you for subscribing.</h2>
                    <p className="text-gray-500 font-display font-medium leading-relaxed">
                      We've added your email to our list. You'll soon receive the latest updates from Foresight Australia.
                    </p>
                  </motion.div>
                </div>
              </div>
              );
  }

              return (
              <div className="pt-20 pb-12 md:pt-28 md:pb-20 bg-[#FAFAFA]">
                <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-6">
                  <div className="max-w-3xl mx-auto">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-center mb-16"
                    >
                      <h1 className="text-3xl md:text-5xl font-display font-extrabold text-gray-900 mb-6 tracking-tight">Subscribe to our newsletter</h1>
                      <p className="text-lg md:text-xl text-gray-500 font-display font-medium leading-relaxed">
                        Stay up to date with Foresight Australia’s latest projects, impact stories, and updates from the field.
                      </p>
                    </motion.div>

                    <motion.form
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      onSubmit={handleSubmit}
                      className="bg-white p-6 md:p-8 rounded-[3rem] shadow-xl border border-gray-100 space-y-8"
                    >
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-3">
                          <label className="text-xs font-display font-black text-gray-400 uppercase tracking-widest ml-1">First Name</label>
                          <input
                            type="text"
                            name="first_name"
                            required
                            className="w-full px-4 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-display font-medium"
                            placeholder="John"
                          />
                        </div>
                        <div className="space-y-3">
                          <label className="text-xs font-display font-black text-gray-400 uppercase tracking-widest ml-1">Last Name</label>
                          <input
                            type="text"
                            name="last_name"
                            required
                            className="w-full px-4 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-display font-medium"
                            placeholder="Doe"
                          />
                        </div>
                      </div>

                      <div className="space-y-3">
                        <label className="text-xs font-display font-black text-gray-400 uppercase tracking-widest ml-1">Email Address</label>
                        <input
                          type="email"
                          name="email"
                          required
                          className="w-full px-4 py-4 rounded-2xl bg-gray-50 border border-gray-100 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all font-display font-medium"
                          placeholder="john.doe@example.com"
                        />
                      </div>

                      <button
                        type="submit"
                        disabled={submitting}
                        className="w-full py-5 bg-accent hover:bg-accent-dark text-white rounded-2xl font-display font-black uppercase tracking-widest text-sm transition-all transform hover:scale-[1.02] shadow-xl shadow-accent/20 disabled:opacity-60 disabled:cursor-not-allowed"
                      >
                        {submitting ? 'Sending…' : 'Subscribe'}
                      </button>

                      <p className="text-xs text-center text-gray-400 font-display font-medium leading-relaxed max-w-lg mx-auto">
                        We respect your privacy and will only use your details to send updates from Foresight Australia.
                      </p>
                    </motion.form>
                  </div>
                </div>
              </div>
              );
}
