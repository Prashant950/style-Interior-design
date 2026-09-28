import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { WhatsAppFloating } from './components/WhatsAppFloating';
import { EnquiryModal } from './components/EnquiryModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { AdminDashboard } from './components/AdminDashboard';
import { storageService } from './services/storageService';
import { Project, Service, GalleryItem, Testimonial, EnquiryLead, BusinessSettings } from './types';
import { CheckCircle2, Download, Shield } from 'lucide-react';

// Dedicated Page Components
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { ProjectsPage } from './pages/ProjectsPage';
import { TransformationsPage } from './pages/TransformationsPage';
import { GalleryPage } from './pages/GalleryPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  // State from storage service
  const [settings, setSettings] = useState<BusinessSettings>(() => storageService.getSettings());
  const [projects, setProjects] = useState<Project[]>(() => storageService.getProjects());
  const [services, setServices] = useState<Service[]>(() => storageService.getServices());
  const [gallery, setGallery] = useState<GalleryItem[]>(() => storageService.getGallery());
  const [testimonials, setTestimonials] = useState<Testimonial[]>(() => storageService.getTestimonials());
  const [leads, setLeads] = useState<EnquiryLead[]>(() => storageService.getLeads());

  // Clean Page Routing & Navigation (Actual Clean URL Paths without #)
  const getPageFromPath = (): string => {
    // Check clean pathname first, or fallback if hash was present
    const path = window.location.pathname.replace(/^\//, '').toLowerCase().trim();
    const hash = window.location.hash.replace('#', '').toLowerCase().trim();
    const route = path || hash;

    if (route === 'transformations' || route === 'before-after') return 'before-after';
    const validPages = ['about', 'services', 'projects', 'gallery', 'contact'];
    return validPages.includes(route) ? route : 'home';
  };

  const [currentPage, setCurrentPage] = useState<string>(() => getPageFromPath());

  const [enquiryModalOpen, setEnquiryModalOpen] = useState<boolean>(false);
  const [enquiryPrefillType, setEnquiryPrefillType] = useState<string>('Home Interior');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [adminOpen, setAdminOpen] = useState<boolean>(false);

  // Sync browser back / forward navigation and clean any leftover hash
  useEffect(() => {
    // If URL had a # on load, convert it to clean real path
    if (window.location.hash) {
      const page = getPageFromPath();
      const cleanPath = page === 'home' ? '/' : `/${page === 'before-after' ? 'transformations' : page}`;
      window.history.replaceState({ page }, '', cleanPath);
    }

    const handlePopState = () => {
      const page = getPageFromPath();
      setCurrentPage(page);
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Toast Notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  // Real Path Navigation handler without # (e.g. /about, /services, /projects)
  const handleNavigate = (pageId: string) => {
    const validPages = ['home', 'about', 'services', 'projects', 'before-after', 'gallery', 'contact'];
    const targetPage = validPages.includes(pageId) ? pageId : 'home';
    setCurrentPage(targetPage);

    const cleanPath = targetPage === 'home' ? '/' : `/${targetPage === 'before-after' ? 'transformations' : targetPage}`;
    window.history.pushState({ page: targetPage }, '', cleanPath);
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  // Lead Submission
  const handleLeadSubmit = (leadData: Omit<EnquiryLead, 'id' | 'createdAt' | 'status'>) => {
    const newLead = storageService.addLead(leadData);
    setLeads(storageService.getLeads());
    showToast(`Thank you, ${leadData.name}. Your enquiry for ${leadData.projectType} has been received.`);
  };

  // Project update
  const handleUpdateProjects = (updatedProjects: Project[]) => {
    setProjects(updatedProjects);
    storageService.saveProjects(updatedProjects);
    showToast('Portfolio projects updated successfully.');
  };

  // Services update
  const handleUpdateServices = (updatedServices: Service[]) => {
    setServices(updatedServices);
    storageService.saveServices(updatedServices);
    showToast('Services configuration updated.');
  };

  // Leads update from Admin CRM
  const handleUpdateLeads = (updatedLeads: EnquiryLead[]) => {
    setLeads(updatedLeads);
    storageService.saveLeads(updatedLeads);
  };

  // Settings update
  const handleUpdateSettings = (updatedSettings: BusinessSettings) => {
    setSettings(updatedSettings);
    storageService.saveSettings(updatedSettings);
    showToast('Studio contact settings saved.');
  };

  // Download Project ZIP handler
  const handleDownloadZip = () => {
    showToast('Preparing complete style-well-dyd source package (.zip)...');
    const link = document.createElement('a');
    link.href = '/style-well-dyd.zip';
    link.download = 'style-well-dyd.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#0b0c0e] text-[#f4f4f0] font-sans antialiased selection:bg-[#c5a059] selection:text-black flex flex-col justify-between">
      {/* Fixed Luxury Main Navigation */}
      <Navbar
        settings={settings}
        onOpenEnquiry={(type) => {
          setEnquiryPrefillType(type || 'Home Interior');
          setEnquiryModalOpen(true);
        }}
        onNavigate={handleNavigate}
        activeSection={currentPage}
        onOpenAdmin={() => setAdminOpen(true)}
      />

      {/* Main Distinct Page Content */}
      <main className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            settings={settings}
            projects={projects}
            services={services}
            testimonials={testimonials}
            onNavigate={handleNavigate}
            onOpenEnquiry={(type) => {
              setEnquiryPrefillType(type || 'Home Interior');
              setEnquiryModalOpen(true);
            }}
            onSelectProject={(proj) => setSelectedProject(proj)}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage
            settings={settings}
            onOpenEnquiry={(type) => {
              setEnquiryPrefillType(type || 'About Studio Consultation');
              setEnquiryModalOpen(true);
            }}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage
            services={services}
            settings={settings}
            onOpenEnquiry={(type) => {
              setEnquiryPrefillType(type || 'Service Inquiry');
              setEnquiryModalOpen(true);
            }}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'projects' && (
          <ProjectsPage
            projects={projects}
            settings={settings}
            onSelectProject={(proj) => setSelectedProject(proj)}
            onOpenEnquiry={(title) => {
              setEnquiryPrefillType(title || 'Project Consultation');
              setEnquiryModalOpen(true);
            }}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'before-after' && (
          <TransformationsPage
            settings={settings}
            onOpenEnquiry={(type) => {
              setEnquiryPrefillType(type || 'Renovation Consultation');
              setEnquiryModalOpen(true);
            }}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'gallery' && (
          <GalleryPage
            gallery={gallery}
            settings={settings}
            onOpenEnquiry={(type) => {
              setEnquiryPrefillType(type || 'Gallery Inspiration Inquiry');
              setEnquiryModalOpen(true);
            }}
            onNavigate={handleNavigate}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage
            settings={settings}
            onSubmitLead={handleLeadSubmit}
            onOpenEnquiry={() => {
              setEnquiryPrefillType('General Inquiry');
              setEnquiryModalOpen(true);
            }}
          />
        )}
      </main>

      {/* Architectural Footer */}
      <Footer
        settings={settings}
        onNavigate={handleNavigate}
        onOpenAdmin={() => setAdminOpen(true)}
        onDownloadZip={handleDownloadZip}
      />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppFloating phone={settings.whatsapp} />

      {/* Consultation Lead Modal */}
      <EnquiryModal
        isOpen={enquiryModalOpen}
        onClose={() => setEnquiryModalOpen(false)}
        onSubmitLead={handleLeadSubmit}
        prefilledType={enquiryPrefillType}
      />

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenEnquiry={(projectTitle) => {
          setEnquiryPrefillType(projectTitle || 'Project Inquiry');
          setEnquiryModalOpen(true);
        }}
      />

      {/* Full Admin Management & CRM Console */}
      <AdminDashboard
        isOpen={adminOpen}
        onClose={() => setAdminOpen(false)}
        projects={projects}
        onUpdateProjects={handleUpdateProjects}
        services={services}
        onUpdateServices={handleUpdateServices}
        leads={leads}
        onUpdateLeads={handleUpdateLeads}
        settings={settings}
        onUpdateSettings={handleUpdateSettings}
        onDownloadZip={handleDownloadZip}
      />

      {/* Global Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-24 left-1/2 -translate-x-1/2 z-50 bg-[#121418] border border-[#c5a059] text-white px-5 py-3 shadow-2xl flex items-center gap-3 animate-fadeIn">
          <CheckCircle2 className="w-4 h-4 text-[#c5a059] shrink-0" />
          <span className="text-xs font-medium">{toastMessage}</span>
        </div>
      )}
    </div>
  );
}
