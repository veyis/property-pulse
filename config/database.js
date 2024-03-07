import mongoose from "mongoose";

let connected = false;

const connectDB = async () => {
  mongoose.set("strictQuery", true);

  // if the database is already connected, return the existing connection
  if (connected) {
    console.log("MongoDB already connected...");
    return connection;
  }

  console.log(process.env.MONGODB_URI);
  // connect to the database
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    connected = true;
    console.log("MongoDB connected");
    return connection;
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
};

export default connectDB;
