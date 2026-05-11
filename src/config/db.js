import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost:27017/school_db";

const connectDB = async () => {
  if (mongoose.connection.readyState === 1) {
    return mongoose.connection;
  }

  try {
    await mongoose.connect(MONGODB_URI);
    console.log("MongoDB Connected");
    return mongoose.connection;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export default connectDB;
