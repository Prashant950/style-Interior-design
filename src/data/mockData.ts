import { Project, Service, GalleryItem, Testimonial, EnquiryLead, BusinessSettings } from '../types';

export const initialSettings: BusinessSettings = {
  businessName: 'Acme Interiors',
  hindiName: 'एसीएमई इंटीरियर्स',
  tagline: 'Crafting Timeless Luxury Spaces in Lucknow',
  phone: '086010 50054',
  whatsapp: '+918601050054',
  email: 'info@acmeinteriors.in',
  instagram: '@acmeinteriors_lucknow',
  instagramUrl: 'https://www.instagram.com/acmeinteriors',
  address: 'Sitapur Rd, opposite Dilkash Plaza, near vaaga hospital, Purania, Sector K, Aliganj, Lucknow, Uttar Pradesh 226024',
  city: 'Aliganj, Lucknow, Uttar Pradesh',
  hours: 'Open · Closes 7 am Sun (Mon–Sun Open)',
  googleMapsUrl: 'https://maps.google.com/?q=Acme+Interiors+Sitapur+Rd+opposite+Dilkash+Plaza+near+vaaga+hospital+Purania+Sector+K+Aliganj+Lucknow+Uttar+Pradesh+226024',
  rating: 5.0,
  reviewCount: 5,
  category: 'Interior designer',
  landmark: 'Located in: VAGA Hospital - Multispeciality Hospital',
  plusCode: 'VWXQ+65 Lucknow, Uttar Pradesh'
};

export const initialProjects: Project[] = [
  {
    id: 'proj-acme-office',
    title: 'Acme Executive Office Studio & Workstation Suite',
    slug: 'acme-executive-office-studio',
    category: 'Commercial',
    style: 'Modern Minimalist & Acoustic',
    location: 'Opposite Dilkash Plaza, Aliganj, Lucknow',
    description: 'Turnkey interior architecture for an executive workspace featuring heavy-gauge metal shutter integration, ergonomic modular desks, and flush linear false ceiling lighting.',
    concept: 'Harmonizing high-efficiency corporate productivity with architectural minimalism, sound dampening acoustics, and warm ambient illumination.',
    budgetRange: '₹10–20 Lakh',
    completionDate: 'March 2026',
    coverImage: '/images/acme/office-studio-interior.png',
    galleryImages: [
      '/images/acme/office-studio-interior.png',
      '/images/acme/logo-signage.png',
      '/images/acme/designer-false-ceiling.png'
    ],
    beforeImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    afterImage: '/images/acme/office-studio-interior.png',
    materials: ['Acoustic Ceiling Tiles', 'Toughened Matte Acrylic', 'High-Density Pre-laminated Boards', 'Linear Aluminum Channels'],
    colorPalette: ['#121417', '#E5A93C', '#E2DCD5', '#4A4C50'],
    features: ['Custom modular office workstation', 'Flush linear track lights & dual ceiling fans', 'Integrated electrical conduit management', '3D illuminated exterior brand signage'],
    featured: true,
    status: 'published'
  },
  {
    id: 'proj-acme-tv-garden',
    title: 'Purania Luxury TV Media Wall & Biophilic Garden Niche',
    slug: 'purania-luxury-tv-media-wall',
    category: 'Living Room',
    style: 'Contemporary Biophilic Luxury',
    location: 'Purania, Sector K, Aliganj, Lucknow',
    description: 'Bespoke entertainment wall featuring acoustic fluted vertical wooden louvers, white floating console with display ledges, and a recessed vertical garden with ambient botanical illumination.',
    concept: 'Merging natural greenery with warm acoustic fluted timber and golden damask textures to bring serene outdoor tranquility into the modern living room.',
    budgetRange: '₹5–10 Lakh',
    completionDate: 'February 2026',
    coverImage: '/images/acme/tv-unit-paneling.png',
    galleryImages: [
      '/images/acme/tv-unit-paneling.png',
      '/images/acme/vertical-garden-wall.png',
      '/images/acme/designer-false-ceiling.png'
    ],
    beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    afterImage: '/images/acme/tv-unit-paneling.png',
    materials: ['Acoustic Fluted Louvers', 'Imported Gold Damask Wallpaper', 'Preserved Botanical Foliage', 'Matte White Acrylic Console'],
    colorPalette: ['#2E4A35', '#C5A059', '#FFFFFF', '#1C1E21'],
    features: ['Concealed cable wire ducting', 'Recessed green garden niche with LED spotlights', 'Cantilevered floating display shelves', 'Gold damask luxury wallpaper backdrop'],
    featured: true,
    status: 'published'
  },
  {
    id: 'proj-acme-ceiling',
    title: 'Terracotta POP False Ceiling & Warm Architectural Coves',
    slug: 'terracotta-pop-false-ceiling',
    category: 'Residential',
    style: 'Contemporary POP & Cove Architecture',
    location: 'Sector K, Aliganj, Lucknow',
    description: 'Multi-tiered designer POP false ceiling featuring warm terracotta accents, perimeter cove lighting profiles, high-CRI recessed spotlights, and acoustic fan reinforcement.',
    concept: 'Creating dimensional ceiling depth with warm ambient illumination that highlights Lucknow home architecture without glare.',
    budgetRange: '₹5–10 Lakh',
    completionDate: 'January 2026',
    coverImage: '/images/acme/designer-false-ceiling.png',
    galleryImages: [
      '/images/acme/designer-false-ceiling.png',
      '/images/acme/office-studio-interior.png',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80'
    ],
    beforeImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
    afterImage: '/images/acme/designer-false-ceiling.png',
    materials: ['Saint-Gobain Gyproc POP', 'Linear LED Cove Profiles', 'High-CRI Warm Spotlights', 'Anti-fungal Satin Emulsion'],
    colorPalette: ['#E06D39', '#F4F4F0', '#C5A059', '#1A1C20'],
    features: ['Dual-level suspended ceiling design', 'Concealed warm cove illumination (3000K)', 'Integrated high-efficiency ceiling fans', 'Mirror finished archway profile borders'],
    featured: true,
    status: 'published'
  },
  {
    id: 'proj-1',
    title: 'The Aliganj Penthouse Residence',
    slug: 'aliganj-penthouse-residence',
    category: 'Residential',
    style: 'Modern Luxury',
    location: 'Aliganj, Lucknow',
    description: 'A 3,800 sq.ft bespoke residence blending Italian Statuario marble with warm champagne brass elements and acoustic fluted walnut paneling.',
    concept: 'Harmonizing airy natural light with moody evening illumination through concealed architectural LED coves and bespoke Italian furnishings.',
    budgetRange: '₹20 Lakh+',
    completionDate: 'November 2025',
    coverImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=80'
    ],
    beforeImage: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    materials: ['Statuario Italian Marble', 'Fluted American Walnut', 'Champagne PVD Brass', 'Acoustic Suede Upholstery'],
    colorPalette: ['#121417', '#C5A059', '#E8DFD8', '#4A4C50'],
    features: ['Concealed motorized track blinds', 'Bespoke floating bar console', 'Integrated smart mood lighting', 'Custom entryway water feature'],
    featured: true,
    status: 'published'
  },
  {
    id: 'proj-2',
    title: 'Gomti Nagar Minimalist Villa',
    slug: 'gomti-nagar-minimalist-villa',
    category: 'Living Room',
    style: 'Warm Contemporary',
    location: 'Gomti Nagar Extension, Lucknow',
    description: 'Open-concept living and dining pavilion designed for seamless family gatherings, featuring organic textures, micro-cement finishes, and sculptural lighting.',
    concept: 'Wabi-sabi meets contemporary luxury with curved archways and tactile plaster walls that soften Lucknow afternoon sunbeams.',
    budgetRange: '₹10–20 Lakh',
    completionDate: 'January 2026',
    coverImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1618219908412-a29a1bb7b86e?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=80'
    ],
    beforeImage: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
    materials: ['Limewash Texture Plaster', 'Natural White Oak', 'Raw Linen Weaves', 'Honed Travertine'],
    colorPalette: ['#ECE7DF', '#B2987E', '#3D3C3A', '#8F857D'],
    features: ['Curved bespoke room dividers', 'Low-profile Japanese style seating', 'Recessed floor up-lights'],
    featured: false,
    status: 'published'
  },
  {
    id: 'proj-3',
    title: 'Mahanagar Chef\'s Modular Kitchen',
    slug: 'mahanagar-modular-kitchen',
    category: 'Modular Kitchen',
    style: 'Modern Minimalist',
    location: 'Mahanagar, Lucknow',
    description: 'An ergonomic culinary sanctuary engineered with Blum tandembox hardware, quartz waterfall counter, and discreet appliance garages.',
    concept: 'High-performance cooking workflow combined with clean architectural geometry and integrated perimeter warm illumination.',
    budgetRange: '₹5–10 Lakh',
    completionDate: 'February 2026',
    coverImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1507089947368-19c1da9775ae?auto=format&fit=crop&w=1600&q=80'
    ],
    beforeImage: 'https://images.unsplash.com/photo-1588854337236-6889d631faa8?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
    materials: ['Anti-fingerprint Matte Charcoal Acrylic', 'Calacatta Gold Quartz', 'Brushed Copper Channels'],
    colorPalette: ['#1C1E21', '#E7DFD5', '#D4AF37'],
    features: ['Full Blum soft-close fittings', 'Integrated downdraft extractor', 'Bespoke spice pull-outs', 'Breakfast peninsula with 3 barstools'],
    featured: false,
    status: 'published'
  }
];

export const initialServices: Service[] = [
  {
    id: 'srv-1',
    title: 'Residential Interior Design',
    slug: 'residential-interiors',
    shortDesc: 'Bespoke end-to-end interior design for villas, penthouses, and apartments across Lucknow.',
    fullDesc: 'From initial spatial planning and 3D architectural renders to custom furniture crafting, lighting curation, and turnkey execution. Acme Interiors tailors every square foot to match your lifestyle in Lucknow.',
    features: [
      'Comprehensive 2D & 3D space layouts',
      'Custom furniture & false ceiling planning',
      'Architectural lighting & electrical schemes',
      'Turnkey project management & execution'
    ],
    process: ['Site Assessment', 'Concept Boards', '3D Photorealistic Views', 'Execution & Quality Handover'],
    image: '/images/acme/tv-unit-paneling.png',
    active: true,
    order: 1
  },
  {
    id: 'srv-2',
    title: 'Modular Kitchen Solutions',
    slug: 'modular-kitchen',
    shortDesc: 'Ergonomic, modern modular kitchens customized with European hardware and waterproof marine ply.',
    fullDesc: 'We craft smart culinary environments equipped with precision soft-close fittings (Blum/Hettich), anti-scratch acrylics, quartz counter surfaces, and intelligent storage accessories.',
    features: [
      'Custom L-shape, U-shape, Island, and Parallel designs',
      'BWR/BWP boiling water proof carcass cabinetry',
      'German soft-close hinges & tandem box drawers',
      'Integrated chimneys, hobs, and appliance garages'
    ],
    process: ['Kitchen Ergonomics Audit', 'Storage Mapping', 'Material Selection', 'Factory Precision Installation'],
    image: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
    active: true,
    order: 2
  },
  {
    id: 'srv-3',
    title: 'Wall Paneling & Vertical Green Gardens',
    slug: 'wall-interior-paneling',
    shortDesc: 'Acoustic fluted louvers, biophilic vertical garden walls, charcoal panels, luxury wallpaper & TV media consoles.',
    fullDesc: 'Transform dull walls into striking architectural focal points. Acme Interiors installs acoustic fluted wooden louvers, preserved vertical indoor gardens, high-density charcoal panels, imported metallic wallpaper, and customized media units.',
    features: [
      'Fluted acoustic louvers with sound dampening',
      'Indoor vertical botanical garden niche with LED accents',
      'Imported gold & damask designer wallpaper',
      'Custom floating media consoles with concealed ducting'
    ],
    process: ['Wall Health & Alignment Check', 'Texture & Paneling Mockups', 'Precision Laser Installation', 'Edge Finishing & Sealing'],
    image: '/images/acme/vertical-garden-wall.png',
    active: true,
    order: 3
  },
  {
    id: 'srv-4',
    title: 'False Ceiling & Architectural Lighting',
    slug: 'false-ceiling-lighting',
    shortDesc: 'Designer Gyproc ceilings with magnetic track lights, warm cove LED profiles & smart automation dimming.',
    fullDesc: 'Elevate your vertical space with seamless Saint-Gobain Gyproc false ceilings, multi-tiered terracotta pop coves, concealed warm cove lighting channels, linear magnetic track spots, and chandelier reinforcement.',
    features: [
      'Saint-Gobain Gyproc moisture-resistant false ceiling',
      'Terracotta & warm accent pop cove styling',
      'Concealed warm cove LED strips (Philips/Coble 3000K)',
      'Acoustic perimeter drop ceilings for AC ducting'
    ],
    process: ['Laser Grid Dimensioning', 'Framing & Conduit Laying', 'Gypsum Board Fixing', 'Joint Taping & Paint Finish'],
    image: '/images/acme/designer-false-ceiling.png',
    active: true,
    order: 4
  },
  {
    id: 'srv-5',
    title: 'Commercial & Office Studio Interiors',
    slug: 'commercial-interiors',
    shortDesc: 'Inspiring workspaces, executive cabins, reception identity walls, clinics, and retail showrooms in Lucknow.',
    fullDesc: 'Boost workplace productivity and impress your clients. Acme Interiors builds brand-aligned commercial environments balancing acoustics, ergonomic task zones, collaborative lounges, and 3D luminous signage.',
    features: [
      'Reception areas & 3D illuminated brand signage',
      'Executive cabins & boardroom audio-visual design',
      'Acoustic ceiling baffles & modular task desks',
      'HVAC, fire-safety, and electrical compliance'
    ],
    process: ['Workflow & Headcount Analysis', 'Acoustic & Zoning Layout', 'Phased Fit-out', 'Zero-Downtime Handover'],
    image: '/images/acme/office-studio-interior.png',
    active: true,
    order: 5
  },
  {
    id: 'srv-6',
    title: 'Luxury Bedroom & Modular Wardrobes',
    slug: 'bedroom-interiors',
    shortDesc: 'Sanctuary bedroom suites, walk-in closets, lacquered glass sliding wardrobes & ambient bed-backs.',
    fullDesc: 'Indulge in tailored serenity. We design lavish master bedrooms featuring bespoke cushioned headboards, sound-absorbing wood paneling, hidden vanity counters, and floor-to-ceiling sliding wardrobes with sensor lighting.',
    features: [
      'Floor-to-ceiling sliding & hinged wardrobe systems',
      'Integrated LED profile lighting with sensor switches',
      'Bespoke dressers, ottomans, and accent consoles',
      'Acoustic wall treatments and blackout drapery'
    ],
    process: ['Lifestyle & Wardrobe Audit', '3D Walkthrough', 'Precision Fabrication', 'White-glove Assembly'],
    image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80',
    active: true,
    order: 6
  }
];

export const initialGallery: GalleryItem[] = [
  {
    id: 'gal-acme-signage',
    title: 'Acme Interiors 3D Illuminated LED Backlit Signage',
    category: 'Commercial',
    imageUrl: '/images/acme/logo-signage.png',
    projectTitle: 'Acme Interiors Brand Studio',
    location: 'Sitapur Rd, Aliganj, Lucknow'
  },
  {
    id: 'gal-acme-tv',
    title: 'Fluted Acoustic Louvers & Modern TV Media Console',
    category: 'Living Room',
    imageUrl: '/images/acme/tv-unit-paneling.png',
    projectTitle: 'Purania Luxury Residence',
    location: 'Sector K, Aliganj, Lucknow'
  },
  {
    id: 'gal-acme-garden',
    title: 'Biophilic Vertical Green Garden Niche & Damask Wall',
    category: 'Luxury',
    imageUrl: '/images/acme/vertical-garden-wall.png',
    projectTitle: 'Aliganj Villa Interior',
    location: 'Near Vaga Hospital, Lucknow'
  },
  {
    id: 'gal-acme-office',
    title: 'Executive Workstation Suite & Linear Ceiling Lighting',
    category: 'Office',
    imageUrl: '/images/acme/office-studio-interior.png',
    projectTitle: 'Acme Commercial Atelier',
    location: 'Opposite Dilkash Plaza, Lucknow'
  },
  {
    id: 'gal-acme-ceiling',
    title: 'Terracotta POP False Ceiling with Warm LED Profiles',
    category: 'Ceiling',
    imageUrl: '/images/acme/designer-false-ceiling.png',
    projectTitle: 'Aliganj Designer Living Pavilion',
    location: 'Purania, Aliganj, Lucknow'
  },
  {
    id: 'gal-1',
    title: 'Statuario Marble & Fluted Paneling',
    category: 'Living Room',
    imageUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    projectTitle: 'The Aliganj Penthouse',
    location: 'Aliganj, Lucknow'
  },
  {
    id: 'gal-2',
    title: 'Monochrome Quartz Waterfall Island',
    category: 'Kitchen',
    imageUrl: 'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80',
    projectTitle: 'Mahanagar Chef Kitchen',
    location: 'Mahanagar, Lucknow'
  },
  {
    id: 'gal-3',
    title: 'Velvet Channel Tufted Headboard Suite',
    category: 'Bedroom',
    imageUrl: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=80',
    projectTitle: 'Indira Nagar Suite',
    location: 'Indira Nagar, Lucknow'
  },
  {
    id: 'gal-4',
    title: 'Curved Plaster Archway & Low Seating',
    category: 'Living Room',
    imageUrl: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
    projectTitle: 'Gomti Nagar Minimalist Villa',
    location: 'Gomti Nagar, Lucknow'
  }
];

export const initialTestimonials: Testimonial[] = [
  {
    id: 't-1',
    clientName: 'Dr. Arvind Tandon',
    location: 'Sector K, Aliganj, Lucknow',
    projectType: 'Living Room & Biophilic Garden TV Wall',
    rating: 5,
    review: 'Acme Interiors did an extraordinary job on our Aliganj residence. The fluted wooden paneling and indoor vertical garden wall look even more stunning than in the 3D designs. Highly professional, punctual, and top-tier craftsmanship!',
    date: 'March 2026',
    active: true
  },
  {
    id: 't-2',
    clientName: 'Mrs. Sunita Agarwal',
    location: 'Purania, Aliganj, Lucknow',
    projectType: 'Complete Modular Kitchen & POP False Ceiling',
    rating: 5,
    review: 'Located right opposite Dilkash Plaza, Acme Interiors is without doubt the best interior designer in Aliganj. Their attention to detail on our false ceiling lighting and modular kitchen was flawless. Transparent pricing and 5-star service throughout!',
    date: 'February 2026',
    active: true
  },
  {
    id: 't-3',
    clientName: 'Er. Vivek Rastogi',
    location: 'Sitapur Road, Lucknow',
    projectType: 'Executive Office & Studio Fit-out',
    rating: 5,
    review: 'From the 3D architectural renders to turnkey completion, Acme Interiors executed our commercial office space near Vaga Hospital brilliantly. The illuminated signage and modern linear lighting create a world-class impression on clients.',
    date: 'January 2026',
    active: true
  },
  {
    id: 't-4',
    clientName: 'Aditya Srivastava',
    location: 'Aliganj, Lucknow',
    projectType: 'Turnkey Villa Renovation',
    rating: 5,
    review: '5.0-star rating well deserved! Acme Interiors transformed our ancestral home into a luxurious modern haven. The team is courteous, fast, and uses genuine premium materials.',
    date: 'December 2025',
    active: true
  },
  {
    id: 't-5',
    clientName: 'Pooja Mehrotra',
    location: 'Sector K, Lucknow',
    projectType: 'Bedroom Interiors & Wardrobes',
    rating: 5,
    review: 'Superb design sensibilities! The false ceiling work and customized wardrobes have given our home a 5-star hotel ambiance. Thank you Acme Interiors!',
    date: 'November 2025',
    active: true
  }
];

export const initialLeads: EnquiryLead[] = [
  {
    id: 'lead-101',
    name: 'Prashant Dixit',
    phone: '086010 50054',
    email: 'prashant.dixit@gmail.com',
    projectType: 'Home Interior',
    propertyType: '3BHK Apartment (Aliganj)',
    location: 'Sector K, Aliganj, Lucknow',
    approxBudget: '₹10–20 Lakh',
    preferredContact: 'WhatsApp',
    message: 'Looking for turnkey interior design including TV media wall, modular kitchen, and false ceiling with cove lights.',
    status: 'Site Visit Scheduled',
    notes: ['Initial phone consultation completed.', 'Site visit confirmed for Thursday 11:30 AM.'],
    createdAt: '2026-03-24T10:15:00Z'
  },
  {
    id: 'lead-102',
    name: 'Ananya Kapoor',
    phone: '097920 67890',
    email: 'ananya.k@outlook.com',
    projectType: 'Modular Kitchen',
    propertyType: 'Independent Villa',
    location: 'Purania, Lucknow',
    approxBudget: '₹5–10 Lakh',
    preferredContact: 'Phone',
    message: 'Want to renovate existing kitchen with acrylic cabinets and quartz countertop. Need 3D visualization first.',
    status: 'New',
    notes: ['Lead submitted through website consultation form.'],
    createdAt: '2026-03-26T14:40:00Z'
  }
];

export const designStyles = [
  {
    name: 'Modern Luxury',
    desc: 'Clean architectural lines, bookmatched marble, fluted walnut paneling, and warm metallic accents.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Biophilic & Contemporary',
    desc: 'Indoor vertical gardens, natural acoustic louvers, warm terracotta POP ceilings, and soothing natural vibes.',
    image: '/images/acme/tv-unit-paneling.png'
  },
  {
    name: 'Minimalist & Studio',
    desc: 'Uncluttered spaces, linear LED profiles, ergonomic workstations, and calm ambient illumination.',
    image: '/images/acme/office-studio-interior.png'
  },
  {
    name: 'Contemporary Indian',
    desc: 'Graceful blend of traditional warmth and rich textures with contemporary modern living ergonomics.',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80'
  }
];

export const designSteps = [
  {
    number: '01',
    title: 'Consultation & Brief',
    desc: 'We discuss your aesthetic preferences, functional needs, lifestyle routines, and budget parameters over coffee or call at our Aliganj studio.'
  },
  {
    number: '02',
    title: 'On-Site Laser Survey',
    desc: 'Our interior architects conduct a comprehensive physical laser survey of your Lucknow property to assess structural beams, walls, and lighting.'
  },
  {
    number: '03',
    title: 'Concept & Spatial Layout',
    desc: 'We draft detailed 2D architectural furniture layouts, circulation pathways, and space optimization blueprints.'
  },
  {
    number: '04',
    title: '3D Photorealistic Views',
    desc: 'Experience your future home before spending a single rupee on materials through ultra-realistic 3D CGI walkthroughs.'
  },
  {
    number: '05',
    title: 'Material & Texture Curation',
    desc: 'Touch and feel genuine samples of Italian marble, veneers, laminates, fabrics, hardware, and paint swatches together.'
  },
  {
    number: '06',
    title: 'Turnkey Craftsmanship',
    desc: 'Our master carpenters, electricians, plumbers, and painters execute every detail with strict milestone quality checks.'
  },
  {
    number: '07',
    title: 'Final Handover & Deep Clean',
    desc: 'We deep clean your space, style the final décor accessories, inspect every hinge, and hand over your keys with warranty.'
  }
];
