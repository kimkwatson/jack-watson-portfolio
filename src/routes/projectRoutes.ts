import { Router } from "express";
import { renderProjectsPage } from "../controllers/projectController";

const router = Router();

router.get("/", renderProjectsPage);

export default router;