import { Request, Response } from "express";
import { createMessage } from "../services/messageService";
import { notifyAdminOfMessage } from "../services/emailService";

export function renderContactPage(req: Request, res: Response): void {

  res.render("contact");
}

export async function submitContactForm(req: Request, res: Response): Promise<void> {
  try {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !message) {
      res.status(400).render("contact", {
        errorMessage: "Please fill out all required fields."
      });
      return;
    }

    const savedMessage = await createMessage({
      name: name.trim(),
      email: email.trim(),
      subject: subject?.trim() || "No subject",
      message: message.trim()
    });

    try {
      await notifyAdminOfMessage(savedMessage);
    } catch (emailError) {
      console.error("Message saved, but email notification failed:", emailError);
    }

    res.redirect("/confirmation");

  } catch (error) {
    console.error("Error submitting contact form:", error);
    res.status(500).render("contact", {
      errorMessage: "Something went wrong while sending your message."
    });
  }
}