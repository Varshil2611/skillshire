import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.Mongo_URI);
    console.log("Database Connected Successfully!");
  } catch (error) {
    console.error("Database Connection Failed",error.message);
  }
};

export default connectDB;
