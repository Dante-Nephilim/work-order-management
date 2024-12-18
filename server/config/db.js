import mongoose from "mongoose";

export default async function connectDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (error) {
    console.error(error);
    console.log("Could not connect to database");
    process.exit(1);
  } finally {
    mongoose.connection.on("connected", () => {
      console.log("MongoDB Connected");
    });
    mongoose.connection.on("disconnected", () => {
      console.log("MongoDB Disconnected");
    });
    mongoose.connection.on("error", () => {
      console.log("MongoDB Error");
    });
  }
}
