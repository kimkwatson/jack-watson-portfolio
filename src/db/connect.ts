import { MongoClient } from "mongodb";

const client = new MongoClient(process.env.MONGODB_URI as string);

export const connectDB = async () => {
  await client.connect();
  console.log("MongoDB connected");
  return client.db();
};