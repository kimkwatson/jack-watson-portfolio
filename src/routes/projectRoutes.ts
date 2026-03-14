import { Router } from "express";
import { renderProjectsPage } from "../controllers/projectController";

const router = Router();

router.get("/projects", renderProjectsPage);

export default router;