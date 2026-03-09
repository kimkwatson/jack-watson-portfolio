import { MongoClient, Db } from "mongodb";

let db: Db | null = null;

export async function connectToDb(): Promise<Db> {
  if (db) return db;

  const uri = process.env.MONGODB_URI;
  const dbName = process.env.DB_NAME;

  if (!uri) {
    throw new Error("MONGODB_URI is not defined in .env");
  }

  if (!dbName) {
    throw new Error("DB_NAME is not defined in .env");
  }

  const client = new MongoClient(uri);
  await client.connect();

  db = client.db(dbName);
  console.log("Connected to MongoDB");

  return db;
}

export function getDb(): Db {
  if (!db) {
    throw new Error("Database not connected. Call connectToDb() first.");
  }

  return db;
}