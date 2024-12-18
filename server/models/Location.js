import { Schema, model } from "mongoose";

const LocationSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    entityId: {
      type: Schema.Types.ObjectId,
      ref: "Entity",
      required: true,
    },
    state: {
      type: String,
      enum: ["Ready", "Completed"],
      default: "Ready",
    },
  },
  { timestamps: true }
);

export default model("Location", LocationSchema);
