import Bill from "../models/Bill.js";

export async function createBill(req, res) {
  const { contractorId, locations, totalAmount } = req.body;
  try {
    const bill = await Bill.findOne({ contractorId });
    if (bill) {
      return res.status(400).json({ error: "Contractor already has a bill" });
    } else {
      const newBill = new Bill({ contractorId, locations, totalAmount });
      await newBill.save();
      return res.status(201).json({ message: "Bill created successfully" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}

export async function getBills(req, res) {
  try {
    const bills = await Bill.find();
    res.status(200).json(bills);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}
