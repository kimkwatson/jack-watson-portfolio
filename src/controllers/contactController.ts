import { Request, Response } from "express";

export function renderContactPage(req: Request, res: Response): void {
  res.render("contact");
}