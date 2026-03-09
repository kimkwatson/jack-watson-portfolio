export interface Project {
    _id?: string;
    title: string;summary: string;
  description: string;
  category: string;
  techUsed: string[];
  imageUrl: string;
  githubUrl: string;
  demoUrl: string;
  createdAt: Date;
  updatedAt: Date;
}