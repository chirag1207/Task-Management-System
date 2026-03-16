import mongoose from "mongoose";

const dbConnection = async () => {
  const MONGO_URI = process.env.MONGO_URI; // must match .env

  if (!MONGO_URI) {
    console.error("❌ MONGO_URI is not defined in .env");
    process.exit(1); // stop server if missing
  }

  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Database Connected");
  } catch (error) {
    console.error("DB Error:", error);
    process.exit(1);
  }
};

export default dbConnection;