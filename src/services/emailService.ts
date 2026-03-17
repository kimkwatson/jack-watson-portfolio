import nodemailer from "nodemailer";
import { ContactMessage } from "./messageService";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: Number(process.env.SMTP_PORT) || 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS
  }
});

export async function notifyAdminOfMessage(message: ContactMessage): Promise<void> {
  const adminEmail = process.env.ADMIN_EMAIL;

  if (!adminEmail) {
    throw new Error("ADMIN_EMAIL is not configured.");
  }

  await transporter.sendMail({
    from: process.env.SMTP_FROM || process.env.SMTP_USER,
    to: adminEmail,
    replyTo: message.email,
    subject: `New portfolio contact: ${message.subject}`,
    text: `
You received a new contact form submission.

Name: ${message.name}
Email: ${message.email}
Subject: ${message.subject}

Message:
${message.message}
    `.trim()
  });
}