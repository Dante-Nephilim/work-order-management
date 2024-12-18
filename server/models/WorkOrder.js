import { Schema, model } from "mongoose";

const WorkOrderSchema = new Schema(
  {
    contractorId: {
      type: Schema.Types.ObjectId,
      ref: "Contractor",
      required: true,
    },
    paymentTerms: {
      type: Number,
      required: true,
    },
    dueDate: {
      type: Date,
      required: true,
    },
    locations: [
      {
        locationId: {
          type: Schema.Types.ObjectId,
          ref: "Location",
          required: true,
        },
        rate: {
          type: Number,
          required: true,
        },
        quantity: {
          type: Number,
          required: true,
        },
      },
    ],
  },
  { timestamps: true }
);

export default model("WorkOrder", WorkOrderSchema);
