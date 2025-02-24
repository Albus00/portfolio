export interface Project {
  id: string;
  name: string;
  description: {
    short: string;
    long: string;
  };
  startDate: Date;
  endDate?: Date;
  technologies: string[];
  repositoryUrl?: string;
  demoUrl?: string;
  images: string[];
  video?: string;
  stack: { id: string, name: string, url: string }[];
  customColor?: string;
}