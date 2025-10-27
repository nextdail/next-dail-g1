export interface CaseStudyResult {
  label: string;
  value: string;
  change: string;
  description?: string;
}

export interface CaseStudyTestimonial {
  content: string;
  author: string;
  role: string;
  company: string;
  image?: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  clientLogo?: string;
  industry: string;
  location?: string;
  projectDate: string;
  duration?: string;
  description: string;
  excerpt: string;
  challenge: string;
  solution: string;
  approach?: string;
  technologies?: string[];
  services: string[];
  results: CaseStudyResult[];
  image: string;
  images: string[];
  testimonial?: CaseStudyTestimonial;
  featured: boolean;
  tags: string[];
}
