export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tech: string[];
  liveUrl?: string;
  githubUrl: string;
}

export interface ProjectCardProps {
  project: Project;
  index: number;
}
