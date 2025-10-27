export interface Service {
  id: string;
  name: string;
  slug: string;
  category: 'marketing' | 'web' | 'development' | 'business';
  tagline: string;
  description: string;
  icon: string;
  features: string[];
  benefits: string[];
  image: string;
  pricing: {
    starter: number;
    professional: number;
    enterprise: number;
  };
  stats?: {
    label: string;
    value: string;
  };
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  expertise: string[];
  linkedin?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  content: string;
  image: string;
  rating: number;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  description: string;
  challenge: string;
  solution: string;
  results: {
    label: string;
    value: string;
    change: string;
  }[];
  image: string;
  images: string[];
  testimonial?: {
    content: string;
    author: string;
    role: string;
  };
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    image: string;
  };
  category: string;
  tags: string[];
  image: string;
  publishedAt: string;
  readTime: number;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'ebook' | 'template' | 'guide' | 'tool';
  image: string;
  downloadUrl?: string;
  externalUrl?: string;
  fileSize?: string;
}

export interface ExternalTool {
  id: string;
  name: string;
  description: string;
  category: 'seo' | 'design' | 'social' | 'email' | 'analytics' | 'content';
  url: string;
  logo: string;
  isPaid: boolean;
}
