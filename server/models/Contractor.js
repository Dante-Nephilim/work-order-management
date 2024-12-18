import { Schema, model } from "mongoose";

const ContractorSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

export default model("Contractor", ContractorSchema);
