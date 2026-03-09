import { getDb } from "../db/connect";
import { Project } from "../models/Project";

export async function getAllProjects(): Promise<Project[]> {
  const db = getDb();
  return (await db.collection<Project>("projects").find().toArray()) as Project[];
}