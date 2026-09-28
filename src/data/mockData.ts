import { Project, Service, GalleryItem, Testimonial, EnquiryLead, BusinessSettings } from '../types';

export const initialSettings: BusinessSettings = {
  businessName: 'STYLE WELL DYD',
  hindiName: 'स्टाइल वेल डाइड',
  tagline: 'Transforming Spaces. Creating Experiences.',
  phone: '098072 77025',
  whatsapp: '+919807277025',
  email: 'info@stylewelldyd.com',
  instagram: '@stylewelldyd',
  instagramUrl: 'https://www.instagram.com/stylewelldyd?r=nametag',
  address: 'Ne IIM Rd, near S.M Hospital, Madiyanva, Lucknow, Uttar Pradesh 226020',
  city: 'Lucknow, Uttar Pradesh',
  hours: '9:30 AM – 9:30 PM (Monday – Sunday)',
  googleMapsUrl: 'https://maps.google.com/?q=Ne+IIM+Rd+near+SM+Hospital+Madiyanva+Lucknow+Uttar+Pradesh+226020'
};

export const initialProjects: Project[] = [
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
    featured: true,
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
    featured: true,
    status: 'published'
  },
  {
    id: 'proj-4',
    title: 'Hazratganj Executive Legal Chambers',
    slug: 'hazratganj-executive-legal-chambers',
    category: 'Commercial',
    style: 'Classical Contemporary',
    location: 'Hazratganj, Lucknow',
    description: 'Turnkey interior architecture for a prestigious senior advocate suite featuring soundproof acoustic double-glazed partitions, custom library wall, and client salon.',
    concept: 'Timeless prestige meets ergonomic corporate function with warm teak woodwork and brass joinery.',
    budgetRange: '₹10–20 Lakh',
    completionDate: 'December 2025',
    coverImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&q=80'
    ],
    materials: ['Burma Teak Veneer', 'Top-grain Cognac Leather', 'Frosted Fluted Glass', 'Brushed Bronze Trim'],
    colorPalette: ['#282522', '#8C5E3C', '#E2DCD5'],
    features: ['12-person custom conference table', 'Concealed AV screen cabinet', 'Private washroom suite'],
    featured: true,
    status: 'published'
  },
  {
    id: 'proj-5',
    title: 'Indira Nagar Master Bedroom Suite',
    slug: 'indira-nagar-master-suite',
    category: 'Bedroom',
    style: 'Luxury Modern',
    location: 'Indira Nagar, Lucknow',
    description: 'Serene master retreat featuring a custom upholstered velvet headboard wall, walk-in dressing wardrobe with sensor lighting, and private reading nook.',
    concept: 'Creating an intimate haven of relaxation with soft indirect lighting and warm tactile textiles.',
    budgetRange: '₹5–10 Lakh',
    completionDate: 'January 2026',
    coverImage: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1600&q=80'
    ],
    materials: ['Channel-Tufted Micro-Suede', 'Smoked Bronze Mirrors', 'Chevron Engineered Oak'],
    colorPalette: ['#1F2124', '#D4AF37', '#DBD3C7'],
    features: ['Sensor-activated wardrobe lights', 'Integrated reading sconces', 'Bespoke vanity dresser'],
    featured: false,
    status: 'published'
  },
  {
    id: 'proj-6',
    title: 'Jankipuram Complete Home Transformation',
    slug: 'jankipuram-home-renovation',
    category: 'Renovation',
    style: 'Contemporary Indian',
    location: 'Jankipuram, Lucknow',
    description: 'Complete interior overhaul of a 20-year-old Lucknow kothi into a bright, airy, modern sanctuary with upgraded plumbing, electricals, and open floor planning.',
    concept: 'Honoring traditional spatial proportions while infusing modern minimalist materials and ample daylight.',
    budgetRange: '₹20 Lakh+',
    completionDate: 'February 2026',
    coverImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=80',
      'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=80'
    ],
    beforeImage: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
    afterImage: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    materials: ['Natural Jaisalmer Accents', 'Vitrified Large Slab Tiles', 'Teak Paneling'],
    colorPalette: ['#2B2A27', '#E5DDD3', '#C5A059'],
    features: ['Wall removal for open layout', 'Complete false ceiling overhaul', 'All-new modular kitchen'],
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
    fullDesc: 'From initial spatial planning and 3D architectural renders to custom furniture crafting, lighting curation, and turnkey execution. We tailor every square foot to match your lifestyle.',
    features: [
      'Comprehensive 2D & 3D space layouts',
      'Custom furniture & false ceiling planning',
      'Architectural lighting & electrical schemes',
      'Turnkey project management & execution'
    ],
    process: ['Site Assessment', 'Concept Boards', '3D Photorealistic Views', 'Execution & Quality Handover'],
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
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
    title: 'Wall Interior & Decorative Paneling',
    slug: 'wall-interior-paneling',
    shortDesc: 'Acoustic fluted louvers, charcoal panels, CNC jali, luxury wallpaper textures & Italian stone wall cladding.',
    fullDesc: 'Transform dull walls into striking architectural focal points. We install acoustic fluted wooden louvers, high-density charcoal panels, imported metallic wallpaper, CNC brass inlays, and customized bed-back cushioning.',
    features: [
      'Fluted WPC & charcoal louvers paneling',
      'Acoustic wooden slats with sound dampening',
      'CNC jali partitions with PVD brass inlays',
      'Textured Italian stucco, wallpaper & PU coatings'
    ],
    process: ['Wall Health & Alignment Check', 'Texture & Paneling Mockups', 'Precision Laser Installation', 'Edge Finishing & Sealing'],
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80',
    active: true,
    order: 3
  },
  {
    id: 'srv-4',
    title: 'False Ceiling & Architectural Lighting',
    slug: 'false-ceiling-lighting',
    shortDesc: 'Designer Gyproc ceilings with magnetic track lights, warm cove LED profiles & smart automation dimming.',
    fullDesc: 'Elevate your vertical space with seamless Saint-Gobain Gyproc false ceilings, concealed warm cove lighting channels, linear magnetic track spots, and chandelier reinforcement boxes designed for low heat and high longevity.',
    features: [
      'Saint-Gobain Gyproc moisture-resistant false ceiling',
      'Magnetic linear track lighting & spotlight grids',
      'Concealed warm cove LED strips (Philips/Coble)',
      'Acoustic perimeter drop ceilings for AC ducting'
    ],
    process: ['Laser Grid Dimensioning', 'Framing & Conduit Laying', 'Gypsum Board Fixing', 'Joint Taping & Paint Finish'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    active: true,
    order: 4
  },
  {
    id: 'srv-5',
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
    order: 5
  },
  {
    id: 'srv-6',
    title: 'Living Room & TV Media Consoles',
    slug: 'living-room-interiors',
    shortDesc: 'Statement living rooms with accent media walls, Italian marble consoles, fluted paneling & art styling.',
    fullDesc: 'The centerpiece of every luxury home. We curate harmonious color palettes, Italian sofa sets, designer chandeliers, wallpaper textures, and motorized curtains that leave lasting impressions.',
    features: [
      'Floating TV console & acoustic fluted panel walls',
      'Curated furniture sourcing & custom upholstery',
      'Designer lighting, sconces & statement chandeliers',
      'Wall textures, moldings & art placement'
    ],
    process: ['Spatial Focal Point Planning', 'Fabric & Material Moodboard', 'Procurement & Styling', 'Final Reveal'],
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80',
    active: true,
    order: 6
  },
  {
    id: 'srv-7',
    title: 'Luxury Bathrooms & Vanities',
    slug: 'bathroom-vanities',
    shortDesc: 'Bespoke floating quartz vanities, LED defogging mirrors, glass shower cubicles & luxury sanitary fittings.',
    fullDesc: 'Turn ordinary bathrooms into spa-like private sanctuaries. We design custom floating quartz vanities, LED backlit anti-fog mirrors, frameless toughened glass partitions, and concealed Grohe/Kohler thermostatic valves.',
    features: [
      'Custom floating waterproof vanities with quartz tops',
      'LED backlit defogger touch mirrors',
      'Frameless toughened glass shower enclosures',
      'Concealed diverters, rain showers & niche LED lighting'
    ],
    process: ['Plumbing & Gradient Audit', 'Sanitary & Tile Selection', 'Waterproofing Test', 'Precision Installation'],
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
    active: true,
    order: 7
  },
  {
    id: 'srv-8',
    title: 'Flooring & Italian Marble Solutions',
    slug: 'flooring-marble',
    shortDesc: 'Italian Statuario marble laying, mirror diamond polishing, large vitrified tiles & wooden flooring.',
    fullDesc: 'Flooring is the foundation of luxury. We provide expert laying of imported Italian marble, epoxy joint filling, multi-stage diamond mirror polishing, and seamless wooden herringbone laminate installations.',
    features: [
      'Imported Italian Statuario & Bottochino marble laying',
      'Diamond pad mirror gloss polishing & crystallization',
      'Large format 4x2 & 6x4 ft glazed vitrified tile flooring',
      'Wooden laminate & herringbone parquet flooring'
    ],
    process: ['Sub-floor Leveling & Screed', 'Dry-lay Pattern Matching', 'Epoxy Grouted Laying', 'Diamond Crystallization Polish'],
    image: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
    active: true,
    order: 8
  },
  {
    id: 'srv-9',
    title: 'Turnkey Renovation & Remodeling',
    slug: 'renovation-remodeling',
    shortDesc: 'Complete revitalization of older properties, civil repairs, modern upgrades, and structural redesign.',
    fullDesc: 'Transform dated residences into modern masterpieces without the stress of managing individual contractors. We handle civil modifications, waterproofing, tile replanning, and aesthetic renewal.',
    features: [
      'Civil modifications & wall openings',
      'Modern electrical rewiring & plumbing overhauls',
      'Flooring upgrade with Italian marble or vitrified slabs',
      'Designer false ceilings & ambient cove lighting'
    ],
    process: ['Structural Health Inspection', 'Demolition & Civil Redesign', 'Refurbishment', 'Final Polish & Handover'],
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    active: true,
    order: 9
  },
  {
    id: 'srv-10',
    title: 'Commercial & Office Interiors',
    slug: 'commercial-interiors',
    shortDesc: 'Inspiring workspaces, corporate offices, clinics, retail showrooms, and luxury hospitality lounges.',
    fullDesc: 'Boost workplace productivity and impress your clients. We build brand-aligned commercial environments balancing acoustics, ergonomic task zones, collaborative lounges, and durable finishes.',
    features: [
      'Reception areas & brand identity feature walls',
      'Executive cabins & boardroom audio-visual design',
      'Acoustic ceiling baffles & sound-dampened meeting pods',
      'HVAC, fire-safety, and electrical compliance'
    ],
    process: ['Workflow & Headcount Analysis', 'Acoustic & Zoning Layout', 'Phased Fit-out', 'Zero-Downtime Handover'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    active: true,
    order: 10
  }
];

export const initialGallery: GalleryItem[] = [
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
  },
  {
    id: 'gal-5',
    title: 'Executive Legal Boardroom with Fluted Glass',
    category: 'Office',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
    projectTitle: 'Hazratganj Chambers',
    location: 'Hazratganj, Lucknow'
  },
  {
    id: 'gal-6',
    title: 'Open Architectural Dining Pavilion',
    category: 'Luxury',
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    projectTitle: 'Vipul Khand Residence',
    location: 'Gomti Nagar, Lucknow'
  },
  {
    id: 'gal-7',
    title: 'Modern Japandi Bedroom with Warm Sconces',
    category: 'Bedroom',
    imageUrl: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=1200&q=80',
    projectTitle: 'Eldeco Green Retreat',
    location: 'Lucknow'
  },
  {
    id: 'gal-8',
    title: 'Custom Wine & Beverage Console Bar',
    category: 'Living Room',
    imageUrl: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=1200&q=80',
    projectTitle: 'Cantt Officers Bungalow',
    location: 'Lucknow Cantt'
  }
];

export const initialTestimonials: Testimonial[] = [
  {
    id: 't-1',
    clientName: 'Er. Rajeshwar Verma',
    location: 'Gomti Nagar, Lucknow',
    projectType: '4BHK Villa Turnkey Interior',
    rating: 5,
    review: 'Style Well DYD turned our raw duplex into a breathtaking home. Their precision in modular kitchen cabinetry and ceiling lighting exceeded our expectations. The team delivered on schedule without quality compromises.',
    date: 'February 2026',
    active: true
  },
  {
    id: 't-2',
    clientName: 'Dr. Smita Mehrotra',
    location: 'Mahanagar, Lucknow',
    projectType: 'Modular Kitchen & Master Suite',
    rating: 5,
    review: 'Very professional, transparent in pricing, and creative. The 3D designs were identical to what was executed on-site. The fluted wood paneling and concealed wardrobe lights give our bedroom a 5-star hotel feel.',
    date: 'January 2026',
    active: true
  },
  {
    id: 't-3',
    clientName: 'Adv. Alok Srivastava',
    location: 'Hazratganj, Lucknow',
    projectType: 'Corporate Law Chambers',
    rating: 5,
    review: 'From acoustic insulation to custom teak conference furniture, Style Well DYD delivered world-class office interiors. Clients constantly compliment the ambiance and privacy.',
    date: 'December 2025',
    active: true
  }
];

export const initialLeads: EnquiryLead[] = [
  {
    id: 'lead-101',
    name: 'Prashant Dixit',
    phone: '098390 12345',
    email: 'prashant.dixit@gmail.com',
    projectType: 'Home Interior',
    propertyType: '3BHK Apartment (Omaxe Hazratganj)',
    location: 'Gomti Nagar Extension, Lucknow',
    approxBudget: '₹10–20 Lakh',
    preferredContact: 'WhatsApp',
    message: 'Looking for turnkey interior design including modular kitchen, master bedroom wardrobe, and false ceiling with cove lights.',
    status: 'Site Visit Scheduled',
    notes: ['Initial phone consultation completed on Monday.', 'Site visit confirmed for Thursday 11:30 AM.'],
    createdAt: '2026-03-24T10:15:00Z'
  },
  {
    id: 'lead-102',
    name: 'Ananya Kapoor',
    phone: '097920 67890',
    email: 'ananya.k@outlook.com',
    projectType: 'Modular Kitchen',
    propertyType: 'Independent Villa',
    location: 'Aliganj, Lucknow',
    approxBudget: '₹5–10 Lakh',
    preferredContact: 'Phone',
    message: 'Want to renovate existing kitchen with acrylic cabinets and quartz countertop. Need 3D visualization first.',
    status: 'New',
    notes: ['Lead submitted through website consultation form.'],
    createdAt: '2026-03-26T14:40:00Z'
  },
  {
    id: 'lead-103',
    name: 'Vikramaditya Rao',
    phone: '094150 99881',
    email: 'vikram.rao@fintechcorp.in',
    projectType: 'Office',
    propertyType: 'Commercial Space (2,400 sq.ft)',
    location: 'Vibhuti Khand, Gomti Nagar',
    approxBudget: '₹20 Lakh+',
    preferredContact: 'WhatsApp',
    message: 'New tech corporate office fit-out for 25 work desks, 2 cabins, meeting room and pantry. Urgently needed by next month.',
    status: 'Proposal Sent',
    notes: ['Concept layout shared over email and WhatsApp.', 'Follow-up scheduled for Saturday.'],
    createdAt: '2026-03-22T09:00:00Z'
  }
];

export const designStyles = [
  {
    name: 'Modern Luxury',
    desc: 'Clean architectural lines, bookmatched marble, fluted walnut paneling, and warm metallic accents.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Minimalist & Japandi',
    desc: 'Uncluttered spaces, organic plaster textures, low-profile seating, and calm natural illumination.',
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Contemporary Indian',
    desc: 'Graceful blend of traditional brass accents and rich teakwood with contemporary modern living ergonomics.',
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80'
  },
  {
    name: 'Urban Scandinavian',
    desc: 'Pale oak woodwork, cozy linen fabrics, ergonomic functional storage, and soft muted earth tones.',
    image: 'https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?auto=format&fit=crop&w=800&q=80'
  }
];

export const designSteps = [
  {
    number: '01',
    title: 'Consultation & Brief',
    desc: 'We discuss your aesthetic preferences, functional needs, lifestyle routines, and budget parameters over coffee or call.'
  },
  {
    number: '02',
    title: 'On-Site Measurement',
    desc: 'Our interior architects conduct a comprehensive physical laser survey of your Lucknow property to assess structural beams and lighting.'
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
