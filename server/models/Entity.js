import { Schema, model } from "mongoose";

const EntitySchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

export default model("Entity", EntitySchema);
