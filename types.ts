export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

export enum Section {
  HOME = 'home',
  WORKS = 'works',
  PROCESS = 'process',
  EXPERIENCE = 'experience',
  TESTIMONIALS = 'testimonials',
  ABOUT = 'about',
  CONTACT = 'contact'
}

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  year: string;
  description: string;
  tags: string[];
}