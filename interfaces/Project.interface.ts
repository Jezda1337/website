export interface Project {
  id: number;
  title: string;
  description: string;
  shortDescription: string;
  slug: string;
  projectHeroImage: string;
  techList: string[];
  type: string;
  live?: string;
  code?: string;
  notFinished?: boolean;
}
