import { getDb } from "../db/connect";
import { ObjectId } from "mongodb";

export type ContactMessage = {
  _id?: ObjectId;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: Date;
  status: "new" | "read" | "replied" | "archived";
};

type NewContactMessageInput = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export async function createMessage(input: NewContactMessageInput): Promise<ContactMessage> {
  const db = getDb();

  const newMessage: ContactMessage = {
    name: input.name,
    email: input.email,
    subject: input.subject,
    message: input.message,
    createdAt: new Date(),
    status: "new"
  };

  const result = await db.collection<ContactMessage>("messages").insertOne(newMessage);

  return {
    ...newMessage,
    _id: result.insertedId
  };
}