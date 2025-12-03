declare module "html2pdf.js";

interface Project {
  name: string;
  description: string;
  technologies: string[];
  myContribution: string[];
  technologyUsage?: Record<string, string>;
  technologyUsageDescription?: string;
}

interface ProjectsData {
  projects: Project[];
}
