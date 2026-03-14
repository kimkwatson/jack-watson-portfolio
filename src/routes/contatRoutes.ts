import { Router } from "express";
import { renderContactPage, submitContactForm } from "../controllers/contactController";

const router = Router();

router.get("/contact", renderContactPage);
router.post("/contact", submitContactForm);

export default router;