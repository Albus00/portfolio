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
  image: string;
  mobileImage: string;
  video?: string | null;
  stack: { id: string, name: string, url: string }[];
  customColor?: string;
  info: string;
}

export interface ProjectInfo {
  item: string;
  text: string;
}