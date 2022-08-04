import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const URI = `mongodb+srv://ignited:${process.env.DB_PASSWORD}@tamimscluster.b7ddp.mongodb.net/react-blogify?retryWrites=true&w=majority`;
export async function connectDB(): Promise<void> {
  if (mongoose.connection.readyState === 0) {
    try {
      await mongoose.connect(URI);
    } catch {
      console.log("Error");
    }
  } else {
    return;
  }
}
