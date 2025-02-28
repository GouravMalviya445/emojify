import mongoose from "mongoose";

export const connectDB = async () => {
  // @ts-expect-error: something
  if (global.mongoose) {
    // @ts-expect-error: something
    return global.mongoose;
  }

  try {
    const instance = await mongoose.connect(process.env.DATABASE_URL as string || "");
    // @ts-expect-error: something
    global.mongoose = instance;
    
    return instance;
  } catch (err) {
    console.log("MongoDB connection Failed: ", err);
    process.exit(1);
  }
}