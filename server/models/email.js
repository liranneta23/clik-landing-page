import mongoose from "mongoose";

const emailSchema = mongoose.Schema({
  email: String,
});

export const EmailModel =
  mongoose.models.Email || mongoose.model("Email", emailSchema);
