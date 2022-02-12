import mongoose from "mongoose";

const betaSchema = mongoose.Schema({
  email: String,
});

export const BetaModel =
  mongoose.models.Beta || mongoose.model("Beta", betaSchema);
