import mongoose from "mongoose";
import { DATABASE_URL } from "../config/env.config.js";

if (!DATABASE_URL)
  throw new Error(
    "Provide the Database URL in your .env.production.local file"
  );

export const connectToDatabase = async () => {
  try {
    console.log("Trying to connect server to Database...");
    await mongoose.connect(DATABASE_URL);
    console.log("Server connected to Database successfully.");
  } catch (error) {
    console.error("Error connecting to Database", error);
    process.exit(1);
  }
};
