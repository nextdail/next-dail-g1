export const BUSINESS_INFO = {
  name: process.env.NEXT_PUBLIC_COMPANY_NAME || 'Next Dail',
  phone: process.env.NEXT_PUBLIC_PHONE || '9679654256',
  whatsapp: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '919679654256',
  email: process.env.NEXT_PUBLIC_EMAIL || 'contact@nextdail.com',
  address: process.env.NEXT_PUBLIC_ADDRESS || 'Dum Dum Rd, Kolkata, 700074',
} as const;

export const SOCIAL_LINKS = {
  facebook: 'https://facebook.com/nextdail',
  twitter: 'https://twitter.com/nextdail',
  linkedin: 'https://linkedin.com/company/nextdail',
  instagram: 'https://instagram.com/nextdail',
} as const;

export const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/insights', label: 'Insights' },
  { href: '/resources', label: 'Resources' },
  { href: '/contact', label: 'Contact' },
] as const;

export const STATS = [
  { value: '500+', label: 'Projects Delivered' },
  { value: '98%', label: 'Client Satisfaction' },
  { value: '10+', label: 'Years Experience' },
  { value: '50+', label: 'Expert Team' },
] as const;

export const BRAND_LOGOS = [
  { name: 'Google', url: 'https://logo.clearbit.com/google.com' },
  { name: 'Microsoft', url: 'https://logo.clearbit.com/microsoft.com' },
  { name: 'Amazon', url: 'https://logo.clearbit.com/amazon.com' },
  { name: 'Apple', url: 'https://logo.clearbit.com/apple.com' },
  { name: 'Meta', url: 'https://logo.clearbit.com/meta.com' },
  { name: 'Netflix', url: 'https://logo.clearbit.com/netflix.com' },
  { name: 'Spotify', url: 'https://logo.clearbit.com/spotify.com' },
  { name: 'Uber', url: 'https://logo.clearbit.com/uber.com' },
  { name: 'Airbnb', url: 'https://logo.clearbit.com/airbnb.com' },
  { name: 'Tesla', url: 'https://logo.clearbit.com/tesla.com' },
  { name: 'Shopify', url: 'https://logo.clearbit.com/shopify.com' },
  { name: 'Stripe', url: 'https://logo.clearbit.com/stripe.com' },
] as const;
