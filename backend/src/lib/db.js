import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB_URI);
    console.log("DB Connected Successfully");
  } catch (error) {
    console.log("Error Connection to Mongo DB: ", error);
    process.exit(1); // 1 means fail , 0 means success
  }
};
