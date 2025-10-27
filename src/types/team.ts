export interface TeamMember {
  id: string;
  name: string;
  role: string;
  department: 'leadership' | 'marketing' | 'development' | 'design';
  bio: string;
  longBio?: string;
  image: string;
  expertise: string[];
  education?: string[];
  certifications?: string[];
  achievements?: string[];
  linkedin?: string;
  twitter?: string;
  github?: string;
  email?: string;
}

export interface TeamLeader extends TeamMember {
  department: 'leadership';
  title: 'CEO' | 'CTO' | 'CMO' | 'Head of Strategy';
  yearsExperience: number;
}
