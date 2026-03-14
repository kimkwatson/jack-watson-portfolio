import { Router } from "express";
import { renderContactPage } from "../controllers/contactController";

const router = Router();

router.get("/contact", renderContactPage);

export default router;