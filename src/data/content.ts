import { FaqItem, ReviewItem, ServiceItem } from '../types';

export const BUSINESS_INFO = {
  name: 'Tauheed Estate Agency',
  tagline: 'Trusted Real Estate Consultancy Since 2002',
  category: 'Real Estate Agent',
  rating: 4.1,
  totalReviews: 68,
  establishedYear: 2002,
  yearsInBusiness: 24,
  address: 'ST.15, Seacon Apartment, Shop# 3, ZC-1, Block 4-A, Gulshan-e-Iqbal, Karachi, Pakistan',
  phone: '+92 321 2855323',
  phoneDisplay: '+92 321 2855323',
  whatsappUrl: 'https://wa.me/923212855323?text=Hello%2C%20I%20am%20inquiring%20about%20property%20services%20with%20Tauheed%20Estate%20Agency.',
  hours: 'Open daily, closes 8 PM',
  closingHour: 20, // 8 PM
  openingHour: 10, // 10 AM
  googleMapUrl: 'https://maps.google.com/?q=ST.15,+Seacon+Apartment,+Block+4-A,+Gulshan-e-Iqbal,+Karachi',
  coordinates: {
    lat: 24.9189,
    lng: 67.0984,
  },
};

export const SERVICES_LIST: ServiceItem[] = [
  {
    id: 'buying',
    title: 'Property Acquisition & Purchase',
    subtitle: 'Secure Residential & Commercial Buying',
    description: 'We help you find residential flats, houses, and commercial premises with strictly vetted documents and verified local pricing.',
    details: [
      'Pre-verification of ownership deeds and KDA lease status',
      'Realistic price benchmarking against recent block transactions',
      'Negotiation conducted with transparency between both parties',
      'Safe escrow and staged token/down-payment guidance',
    ],
    icon: 'house',
  },
  {
    id: 'selling',
    title: 'Property Sale Representation',
    subtitle: 'Transparent Seller Representation',
    description: 'Direct representation of your asset to serious, solvent buyers without inflated claims or prolonged market stagnation.',
    details: [
      'Precise, honest market appraisal based on real block demand',
      'Vetting prospective buyers before scheduling on-site visits',
      'Preparation of legal sale agreements (Iqrarnama)',
      'Coordination through official sub-registrar transfer',
    ],
    icon: 'key',
  },
  {
    id: 'rentals',
    title: 'Residential & Commercial Tenancy',
    subtitle: 'Verified Landlord & Tenant Agreements',
    description: 'Connecting reputable landlords with verified tenants across Gulshan-e-Iqbal apartments, portions, and shops.',
    details: [
      'Comprehensive tenant background and reference checks',
      'Standardized, legally compliant rental agreements',
      'Verification of utility clearances prior to possession',
      'Renewal and maintenance dispute mediation',
    ],
    icon: 'handshake',
  },
  {
    id: 'consultation',
    title: 'Title Scrutiny & Document Consultation',
    subtitle: 'Legal Due Diligence & Deed Audits',
    description: 'Decades of familiarity with Karachi land records, society NOCs, and municipal approvals before you commit a single rupee.',
    details: [
      'Identification of disputed files or power-of-attorney risks',
      'Sub-lease verification and mutation trail audits',
      'Guidance on inheritance, family partitions, and estate divisions',
      'Clarification of official provincial and federal property taxes',
    ],
    icon: 'shield',
  },
  {
    id: 'local-expertise',
    title: 'Gulshan-e-Iqbal Area Expertise',
    subtitle: 'Block-by-Block On-the-Ground Insight',
    description: 'Hyper-local insight into block dynamics: water sweet-line schedules, gas pressure, building maintenance histories, and road infrastructure.',
    details: [
      'Block 4-A, Block 7, Block 10-A, Block 13-D comparative insights',
      'Building-by-building water, lift, and generator maintenance status',
      'Commercial viability assessment for shops and medical clinics',
      'Anticipated road and civic infrastructure developments',
    ],
    icon: 'compass',
  },
];

export const TESTIMONIALS: ReviewItem[] = [
  {
    id: 'rev-1',
    author: 'Tariq Mansoor',
    role: 'Resident & Apartment Buyer, Block 4-A',
    rating: 5,
    date: '3 months ago',
    comment: 'What stands out about Tauheed Estate is their senior agent’s honesty. He bluntly pointed out water pressure shortcomings in an apartment we initially liked and directed us to an alternative building nearby where our family has now lived peacefully for two years. That level of seasoned advice is rare.',
    propertyContext: 'Purchased 3-Bed Apartment near Seacon',
  },
  {
    id: 'rev-2',
    author: 'Syed Zafar Iqbal',
    role: 'Property Owner, Gulshan Block 7',
    rating: 4,
    date: '5 months ago',
    comment: 'A genuinely established and steady presence in the area. When handling our family portion sale, they navigated the paperwork patiently without the usual high-pressure tactics. The transaction was completed within the agreed timeframe with all KDA transfer papers properly cleared.',
    propertyContext: 'Sale of Ground Portion',
  },
  {
    id: 'rev-3',
    author: 'Khurram Shehzad',
    role: 'Commercial Tenant & Business Owner',
    rating: 4,
    date: '7 months ago',
    comment: 'Rented a retail space on the ST-15 strip through them. The rental terms were clear, utility bills were cleared down to the exact meter reading before handover, and the lease agreement was sound. A very reliable senior professional to deal with in Gulshan.',
    propertyContext: 'Commercial Shop Rental on ST-15',
  },
  {
    id: 'rev-4',
    author: 'Dr. Nabeel Siddiqui',
    role: 'Overseas Pakistani Investor',
    rating: 5,
    date: '10 months ago',
    comment: 'Living abroad, finding someone in Karachi you can trust with property documents is challenging. The senior agent at Tauheed personally reviewed the original sub-lease file, went through the mutation history, and ensured every legal step was in order before requesting earnest money.',
    propertyContext: 'Investment Property Consultation',
  },
];

export const WHY_CHOOSE_US = [
  {
    title: 'Two Decades in the Same Location',
    description: 'We operate from the exact same address in Seacon Apartment, Block 4-A. We are not a transient broker; our long-term reputation in Gulshan-e-Iqbal is our most valuable asset.',
    icon: 'building',
  },
  {
    title: 'Senior Agent’s Measured Counsel',
    description: 'Our guidance is led by a respected, veteran property consultant who believes in steady counsel rather than pushing rushed sales or artificial market urgency.',
    icon: 'user-check',
  },
  {
    title: 'Meticulous Document Verification',
    description: 'Karachi real estate requires rigorous paper verification. We scrutinize allotment letters, sub-leases, transfer orders, and non-encumbrance records prior to token agreements.',
    icon: 'file-check',
  },
  {
    title: 'Direct, Realistic Valuations',
    description: 'No inflated figures to win listings, and no lowballing for quick commissions. We give straightforward, authentic assessments grounded in actual registered block sales.',
    icon: 'scale',
  },
];

export const FAQS: FaqItem[] = [
  {
    category: 'Documentation',
    question: 'How do you verify property ownership and title before purchase?',
    answer: 'Before any financial token is paid, our senior agent inspects the original chain of documents: Allotment Letter, Possession Order, Transfer Letter (from KDA or the relevant cooperative society), Sub-Lease deed, and ensures there is no ongoing litigation or dual claim registered on the file.',
  },
  {
    category: 'Fees & Commission',
    question: 'What are the standard agency service charges?',
    answer: 'In keeping with established Karachi real estate practice, our agency commission is 1% to 2% on sales (shared fairly between buyer and seller representation), and one month’s rent on standard 11-month rental contracts. All fee structures are discussed and agreed upfront with zero hidden charges.',
  },
  {
    category: 'Appointments',
    question: 'How do viewing appointments work?',
    answer: 'We coordinate directly with property occupants and building security to ensure respectful, scheduled viewings. For occupied homes or apartments, we request 24-hour advance notice so families can prepare comfortably.',
  },
  {
    category: 'Local Infrastructure',
    question: 'Do you inspect building utilities (water, gas, standby generator)?',
    answer: 'Yes. In Gulshan-e-Iqbal, water lines and gas supply vary significantly even between adjacent blocks. We verify the sweet line schedule, presence of underground/overhead storage, sub-meter arrangements, and building maintenance records before advising a client.',
  },
  {
    category: 'Inheritance & Transfers',
    question: 'Can you assist with family property divisions or deceased owner transfers?',
    answer: 'Yes. We frequently guide families on legal heir transfers, letter of administration procedures, and coordinating with legal counsel and KDA departments to regularize inheritance records peacefully.',
  },
];
