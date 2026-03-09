import { Request, Response } from "express";
import { getAllProjects } from "../services/projectService";

export async function renderProjectsPage(req: Request, res: Response): Promise<void> {
  try {
    const projects = await getAllProjects();
    res.render("projects", { projects });
  } catch (error) {
    console.error("Error loading projects:", error);
    res.status(500).send("Failed to load projects.");
  }
}