export interface Project {
  id: string;
  title: string;
  slug: string;
  category: 'Residential' | 'Commercial' | 'Modular Kitchen' | 'Bedroom' | 'Living Room' | 'Office' | 'Luxury' | 'Renovation';
  style: string;
  location: string;
  description: string;
  concept?: string;
  budgetRange?: string;
  completionDate?: string;
  coverImage: string;
  galleryImages: string[];
  beforeImage?: string;
  afterImage?: string;
  materials?: string[];
  colorPalette?: string[];
  features?: string[];
  featured?: boolean;
  status: 'published' | 'draft';
}

export interface Service {
  id: string;
  title: string;
  slug: string;
  shortDesc: string;
  fullDesc: string;
  features: string[];
  process: string[];
  image: string;
  active: boolean;
  order: number;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  projectTitle?: string;
  location?: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  location: string;
  projectType: string;
  rating: number;
  review: string;
  date: string;
  active: boolean;
}

export type LeadStatus = 'New' | 'Contacted' | 'Site Visit Scheduled' | 'Proposal Sent' | 'In Discussion' | 'Converted' | 'Closed';

export interface EnquiryLead {
  id: string;
  name: string;
  phone: string;
  email: string;
  projectType: string;
  propertyType: string;
  location: string;
  approxBudget: string;
  preferredContact: 'Phone' | 'WhatsApp' | 'Email';
  message: string;
  status: LeadStatus;
  notes?: string[];
  createdAt: string;
}

export interface BusinessSettings {
  businessName: string;
  hindiName: string;
  tagline: string;
  phone: string;
  whatsapp: string;
  email: string;
  instagram: string;
  instagramUrl: string;
  address: string;
  city: string;
  hours: string;
  googleMapsUrl: string;
}
