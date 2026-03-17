import { Router } from "express";
import { renderContactPage, submitContactForm } from "../controllers/contactController";

const router = Router();

router.get("/contact", renderContactPage);
router.get("/confirmation", (req, res) => {
  res.render("confirmation");
});
router.post("/contact", submitContactForm);

export default router;