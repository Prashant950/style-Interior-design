import { 
  Project, 
  Service, 
  GalleryItem, 
  Testimonial, 
  EnquiryLead, 
  BusinessSettings 
} from '../types';
import { 
  initialProjects, 
  initialServices, 
  initialGallery, 
  initialTestimonials, 
  initialLeads, 
  initialSettings 
} from '../data/mockData';

const STORAGE_KEYS = {
  PROJECTS: 'stylewell_projects_v1',
  SERVICES: 'stylewell_services_v2',
  GALLERY: 'stylewell_gallery_v1',
  TESTIMONIALS: 'stylewell_testimonials_v1',
  LEADS: 'stylewell_leads_v1',
  SETTINGS: 'stylewell_settings_v1',
  ADMIN_AUTH: 'stylewell_admin_auth_v1'
};

export const storageService = {
  getProjects: (): Project[] => {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.PROJECTS);
      return data ? JSON.parse(data) : initialProjects;
    } catch {
      return initialProjects;
    }
  },

  saveProjects: (projects: Project[]) => {
    localStorage.setItem(STORAGE_KEYS.PROJECTS, JSON.stringify(projects));
  },

  getServices: (): Service[] => {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.SERVICES);
      return data ? JSON.parse(data) : initialServices;
    } catch {
      return initialServices;
    }
  },

  saveServices: (services: Service[]) => {
    localStorage.setItem(STORAGE_KEYS.SERVICES, JSON.stringify(services));
  },

  getGallery: (): GalleryItem[] => {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.GALLERY);
      return data ? JSON.parse(data) : initialGallery;
    } catch {
      return initialGallery;
    }
  },

  saveGallery: (items: GalleryItem[]) => {
    localStorage.setItem(STORAGE_KEYS.GALLERY, JSON.stringify(items));
  },

  getTestimonials: (): Testimonial[] => {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.TESTIMONIALS);
      return data ? JSON.parse(data) : initialTestimonials;
    } catch {
      return initialTestimonials;
    }
  },

  saveTestimonials: (testimonials: Testimonial[]) => {
    localStorage.setItem(STORAGE_KEYS.TESTIMONIALS, JSON.stringify(testimonials));
  },

  getLeads: (): EnquiryLead[] => {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.LEADS);
      return data ? JSON.parse(data) : initialLeads;
    } catch {
      return initialLeads;
    }
  },

  saveLeads: (leads: EnquiryLead[]) => {
    localStorage.setItem(STORAGE_KEYS.LEADS, JSON.stringify(leads));
  },

  addLead: (lead: Omit<EnquiryLead, 'id' | 'createdAt' | 'status'>): EnquiryLead => {
    const existing = storageService.getLeads();
    const newLead: EnquiryLead = {
      ...lead,
      id: 'lead-' + Date.now(),
      status: 'New',
      createdAt: new Date().toISOString(),
      notes: ['Submitted via website enquiry portal.']
    };
    const updated = [newLead, ...existing];
    storageService.saveLeads(updated);
    return newLead;
  },

  getSettings: (): BusinessSettings => {
    try {
      const data = localStorage.getItem(STORAGE_KEYS.SETTINGS);
      return data ? JSON.parse(data) : initialSettings;
    } catch {
      return initialSettings;
    }
  },

  saveSettings: (settings: BusinessSettings) => {
    localStorage.setItem(STORAGE_KEYS.SETTINGS, JSON.stringify(settings));
  },

  isAdminAuthenticated: (): boolean => {
    try {
      return localStorage.getItem(STORAGE_KEYS.ADMIN_AUTH) === 'true';
    } catch {
      return false;
    }
  },

  setAdminAuthenticated: (val: boolean) => {
    if (val) {
      localStorage.setItem(STORAGE_KEYS.ADMIN_AUTH, 'true');
    } else {
      localStorage.removeItem(STORAGE_KEYS.ADMIN_AUTH);
    }
  },

  resetToDefaults: () => {
    localStorage.removeItem(STORAGE_KEYS.PROJECTS);
    localStorage.removeItem(STORAGE_KEYS.SERVICES);
    localStorage.removeItem(STORAGE_KEYS.GALLERY);
    localStorage.removeItem(STORAGE_KEYS.TESTIMONIALS);
    localStorage.removeItem(STORAGE_KEYS.LEADS);
    localStorage.removeItem(STORAGE_KEYS.SETTINGS);
  }
};
