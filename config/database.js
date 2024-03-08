import mongoose from "mongoose";

let connected = false;
let connection;

const connectDB = async () => {
  // If the database is already connected, return the existing connection
  if (connected) {
    console.log("MongoDB already connected...");
    return connection;
  }

  // Connect to the database
  try {
    // Set mongoose options
    mongoose.set("strictQuery", true);

    // Connect to MongoDB using the provided URI
    connection = await mongoose.connect(process.env.MONGODB_URI);

    connected = true;
    console.log("MongoDB connected");
    return connection;
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
    throw error; // Rethrow the error to handle it outside of this function
  }
};

export default connectDB;
