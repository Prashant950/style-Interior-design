/**
 * Style Well DYD — Premium Interior Design & Decoration Studio (Lucknow)
 * स्टाइल वेल डाइड
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { IntroSection } from './components/IntroSection';
import { ServicesSection } from './components/ServicesSection';
import { FeaturedProjects } from './components/FeaturedProjects';
import { BeforeAfterSection } from './components/BeforeAfterSection';
import { DesignProcessSection } from './components/DesignProcessSection';
import { StylesSection } from './components/StylesSection';
import { Visualization3DSection } from './components/Visualization3DSection';
import { GallerySection } from './components/GallerySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { EnquirySection } from './components/EnquirySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { WhatsAppFloating } from './components/WhatsAppFloating';
import { EnquiryModal } from './components/EnquiryModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { AdminDashboard } from './components/AdminDashboard';
import { storageService } from './services/storageService';
import { Project, Service, GalleryItem, Testimonial, EnquiryLead, BusinessSettings } from './types';
import { CheckCircle2, Download, Shield } from 'lucide-react';

export default function App() {
  // State from storage service
  const [settings, setSettings] = useState<BusinessSettings>(() => storageService.getSettings());
  const [projects, setProjects] = useState<Project[]>(() => storageService.getProjects());
  const [services, setServices] = useState<Service[]>(() => storageService.getServices());
  const [gallery, setGallery] = useState<GalleryItem[]>(() => storageService.getGallery());
  const [testimonials, setTestimonials] = useState<Testimonial[]>(() => storageService.getTestimonials());
  const [leads, setLeads] = useState<EnquiryLead[]>(() => storageService.getLeads());

  // Navigation & Modals
  const [activeSection, setActiveSection] = useState<string>('home');
  const [enquiryModalOpen, setEnquiryModalOpen] = useState<boolean>(false);
  const [enquiryPrefillType, setEnquiryPrefillType] = useState<string>('Home Interior');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [adminOpen, setAdminOpen] = useState<boolean>(false);

  // Toast Notification
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  // Scroll to section handler
  const handleNavigate = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
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
    // Triggers direct download of the pre-packaged source archive
    showToast('Preparing complete style-well-dyd source package (.zip)...');
    const link = document.createElement('a');
    link.href = '/style-well-dyd.zip';
    link.download = 'style-well-dyd.zip';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-[#0b0c0e] text-[#f4f4f0] font-sans antialiased selection:bg-[#c5a059] selection:text-black">
      {/* Main Navbar */}
      <Navbar
        settings={settings}
        onOpenEnquiry={(type) => {
          setEnquiryPrefillType(type || 'Home Interior');
          setEnquiryModalOpen(true);
        }}
        onNavigate={handleNavigate}
        activeSection={activeSection}
        onOpenAdmin={() => setAdminOpen(true)}
      />

      {/* Hero Section */}
      <div id="home">
        <Hero
          settings={settings}
          onOpenEnquiry={() => {
            setEnquiryPrefillType('Home Interior');
            setEnquiryModalOpen(true);
          }}
          onExploreProjects={() => handleNavigate('projects')}
        />
      </div>

      {/* Introduction Philosophy */}
      <IntroSection
        settings={settings}
        onOpenEnquiry={() => {
          setEnquiryPrefillType('Consultation');
          setEnquiryModalOpen(true);
        }}
      />

      {/* Featured Projects Portfolio */}
      <FeaturedProjects
        projects={projects}
        onSelectProject={(proj) => setSelectedProject(proj)}
        onOpenEnquiry={(title) => {
          setEnquiryPrefillType(title || 'Project Consultation');
          setEnquiryModalOpen(true);
        }}
      />

      {/* Interior Services */}
      <ServicesSection
        services={services}
        onOpenEnquiry={(srv) => {
          setEnquiryPrefillType(srv || 'Services');
          setEnquiryModalOpen(true);
        }}
      />

      {/* Before / After Transformation Slider */}
      <BeforeAfterSection />

      {/* 7-Step Design Journey */}
      <DesignProcessSection
        onOpenEnquiry={() => {
          setEnquiryPrefillType('Consultation Step 01');
          setEnquiryModalOpen(true);
        }}
      />

      {/* 3D Visualization */}
      <Visualization3DSection
        onOpenEnquiry={() => {
          setEnquiryPrefillType('3D Walkthrough Consultation');
          setEnquiryModalOpen(true);
        }}
      />

      {/* Curated Aesthetic Styles */}
      <StylesSection
        onOpenEnquiry={(style) => {
          setEnquiryPrefillType(style || 'Design Style Consultation');
          setEnquiryModalOpen(true);
        }}
      />

      {/* Image Gallery with Lightbox */}
      <GallerySection gallery={gallery} />

      {/* Testimonials */}
      <TestimonialsSection testimonials={testimonials} />

      {/* Lead Enquiry Form */}
      <EnquirySection
        onSubmitLead={handleLeadSubmit}
        prefilledType={enquiryPrefillType}
      />

      {/* Studio Location & Contacts */}
      <ContactSection
        settings={settings}
        onOpenEnquiry={() => setEnquiryModalOpen(true)}
      />

      {/* Architectural Footer */}
      <Footer
        settings={settings}
        onNavigate={handleNavigate}
        onOpenAdmin={() => setAdminOpen(true)}
        onDownloadZip={handleDownloadZip}
      />

      {/* Floating WhatsApp Action Button */}
      <WhatsAppFloating phone={settings.whatsapp} />

      {/* Consultation Modal */}
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
