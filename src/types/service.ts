export type ServiceCategory = 'marketing' | 'web' | 'development' | 'business';

export interface ServiceFeature {
  title: string;
  description: string;
  icon?: string;
}

export interface ServicePricing {
  starter: {
    price: number;
    features: string[];
  };
  professional: {
    price: number;
    features: string[];
  };
  enterprise: {
    price: number;
    features: string[];
  };
}

export interface ServiceFAQ {
  question: string;
  answer: string;
}

export interface Service {
  id: string;
  name: string;
  slug: string;
  category: ServiceCategory;
  tagline: string;
  description: string;
  longDescription: string;
  icon: string;
  image: string;
  features: ServiceFeature[];
  benefits: string[];
  process: {
    step: number;
    title: string;
    description: string;
  }[];
  pricing: ServicePricing;
  faqs: ServiceFAQ[];
  relatedServices: string[];
  cta: {
    title: string;
    description: string;
  };
}
