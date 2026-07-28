export interface ProjectItem {
  id: number;
  title: string;
  longDesc: string;
  image: string;
  role: string[];
  tech: string[];
  status?: string;
  github?: string;
  website?: string;
  video?: string;
}

export interface CertificationItem {
  id: number;
  title: string;
  issuer: string;
  year: string;
  image: string;
  link: string;
}

export interface AchievementItem {
  id: number;
  title: string;
  issuer: string;
  year: string;
  image: string;
  link: string;
}

export interface ExperienceMetric {
  label: string;
  value: string;
}

export interface ExperienceMedia {
  url: string;
  caption?: string;
}

export interface RelatedProjectRef {
  title: string;
  link?: string;
  description?: string;
}

export interface WorkExperienceItem {
  id: number;
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  color: "cyan" | "purple";
  side: "left" | "right";
  overview?: string;
  keyResponsibilities?: string[];
  techStack?: string[];
  metrics?: ExperienceMetric[];
  screenshots?: ExperienceMedia[];
  gallery?: ExperienceMedia[];
  lessonsLearned?: string[];
  relatedProjects?: RelatedProjectRef[];
}

export interface SkillItem {
  name: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  titleColorClass: string;
  bgColorClass: string;
  borderColorClass: string;
  shadowColorClass: string;
  skills: SkillItem[];
}

export interface SocialLink {
  name: string;
  url: string;
  iconName: "Github" | "Linkedin" | "Instagram";
}

export interface ProfileInfo {
  name: string;
  cardName: string;
  title: string;
  handle: string;
  status: string;
  headline: string;
  subheadline: string;
  summary: string;
  badges: string[];
  avatarUrl: string;
  miniAvatarUrl: string;
  starIconUrl: string;
  grainUrl: string;
  socialLinks: SocialLink[];
}
