import mongoose from "mongoose";

const connectDB = async (DATABASE_URL) => {
  try {
    const db_options = {
      dbName: "applicant",
    };
    await mongoose.connect(DATABASE_URL, db_options);
    console.log("connected to db")
  } catch (error) {
    console.log(error);
  }
};

export default connectDB;
