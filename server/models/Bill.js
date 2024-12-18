import { Schema, model } from "mongoose";

const BillSchema = new Schema(
  {
    billNumber: {
      type: String,
      required: true,
      unique: true,
    },
    contractorId: {
      type: Schema.Types.ObjectId,
      ref: "Contractor",
      required: true,
    },
    locations: [
      {
        locationId: {
          type: Schema.Types.ObjectId,
          ref: "Location",
          required: true,
        },
        name: {
          type: String,
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
    totalAmount: {
      type: Number,
    },
  },
  { timestamps: true }
);

BillSchema.pre("save", function (next) {
  let total = 0;
  for (const loc of this.locations) {
    total += loc.rate * loc.quantity;
  }
  this.totalAmount = total;
  next();
});

export default model("Bill", BillSchema);
