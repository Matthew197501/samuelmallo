export interface Experience {
  organization: string;
  position: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
  technologies?: string[];
}

export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  verificationUrl?: string;
}

export interface Project {
  title: string;
  description: string;
  slug: string;
  problem?: string;
  solution?: string;
  role?: string;
  technologies: string[];
  technicalImplementation?: string;
  results?: string;
  githubUrl?: string;
  liveUrl?: string;
  relatedArticles?: string[];
  publishDate?: Date;
  coverImage?: string;
  draft: boolean;
}

export interface Article {
  title: string;
  slug: string;
  author: string;
  publishDate: Date;
  modifiedDate?: Date;
  description: string;
  category: string;
  canonicalURL?: string;
  coverImage?: string;
  draft: boolean;
}