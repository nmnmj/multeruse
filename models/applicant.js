import mongoose from "mongoose";

const applicantSchema = new mongoose.Schema({
  name: { type: String, trim: true, required: true },
  email: { type: String, trim: true, required: true },
  dob: { type: Date },
  state: { type: String },
  gender: { type: String },
  location: { type: String },
  pimage: { type: String, required: true },
  rdoc: { type: String, required: true },
});

const applicantModel = mongoose.model("applicant", applicantSchema);

export default applicantModel;
