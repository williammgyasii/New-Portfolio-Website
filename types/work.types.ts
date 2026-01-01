/**
 * Work experience type definition
 */
export type WorkExperienceType =
  | "full-time"
  | "contract"
  | "freelance"
  | "internship";

/**
 * Work experience interface
 */
export interface WorkExperience {
  /** Unique identifier */
  id: number;
  /** Job title */
  title: string;
  /** Company name */
  company: string;
  /** Duration of employment (e.g., "May 2025 – Present") */
  duration: string;
  /** Location (e.g., "Maryland, United States") */
  location: string;
  /** Type of employment */
  type: WorkExperienceType;
  /** Brief description of the role */
  description: string;
  /** List of key responsibilities */
  responsibilities: string[];
  /** List of key achievements */
  achievements: string[];
  /** Technologies and tools used */
  technologies: string[];
  /** Company size (e.g., "10-20 employees") */
  companySize: string;
  /** Industry or sector */
  industry: string;
  /** Start date in ISO format */
  startDate: string;
  /** End date in ISO format (optional for current roles) */
  endDate?: string;
  /** Whether this is the current role */
  current: boolean;
}

/**
 * Experience filter type
 */
export interface ExperienceFilter {
  id: string;
  label: string;
}
