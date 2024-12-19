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
    completedBy: {
      type: Schema.Types.ObjectId,
      ref: "Contractor",
      required: false,
    },
  },
  { timestamps: true }
);

export default model("Location", LocationSchema);
