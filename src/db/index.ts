import mongoose, { Mongoose } from "mongoose";

declare global {
  var mongoose: Mongoose | undefined
}

export const connectDB = async () => {
  if (global.mongoose) {
    return global.mongoose;
  }

  try {
    const instance = await mongoose.connect(process.env.DATABASE_URL as string || "");
    global.mongoose = instance;
    
    return instance;
  } catch (err) {
    console.log("MongoDB connection Failed: ", err);
    process.exit(1);
  }
}