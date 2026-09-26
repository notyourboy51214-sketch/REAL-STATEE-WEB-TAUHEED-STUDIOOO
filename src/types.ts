export interface PropertyListing {
  id: string;
  title: string;
  category: 'apartment' | 'house' | 'commercial' | 'plot';
  purpose: 'sale' | 'rent';
  location: string;
  block: string;
  pricePkr: string;
  priceNumeric: number;
  specs: {
    bedrooms?: number;
    bathrooms?: number;
    area: string; // e.g. "1,450 Sq. Ft." or "240 Sq. Yds."
    floor?: string;
    parking?: string;
    leaseStatus: string;
  };
  features: string[];
  imageUrl: string;
  description: string;
  isFeatured?: boolean;
}

export interface ReviewItem {
  id: string;
  author: string;
  role: string;
  rating: number;
  date: string;
  comment: string;
  propertyContext: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: string;
}

export interface ServiceItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  details: string[];
  icon: string;
}
