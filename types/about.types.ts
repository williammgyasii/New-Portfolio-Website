/**
 * Timeline entry for work experience in about page
 */
export interface TimelineEntry {
  id?: number;
  title: string;
  company: string;
  duration: string;
  description: string;
  responsibilities?: string[];
  country?: string;
  countryFlag?: string;
}

/**
 * Section navigation item
 */
export interface SectionNavItem {
  label: string;
  id: string;
}

/**
 * Social link type
 */
export interface SocialLink {
  name: string;
  href: string;
  icon: React.ReactNode;
}

