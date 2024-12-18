import Contractor from "../models/Contractor.js";

export async function createContractor(req, res) {
  const { name, phone } = req.body;
  try {
    const contractor = await Contractor.findOne({ phone });
    if (contractor) {
      return res.status(400).json({ error: "Phone already exists" });
    } else {
      const newContractor = new Contractor({ name, phone });
      await newContractor.save();
      return res.status(201).json({ message: "Contractor created successfully" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}

export async function getContractors(req, res) {
  try {
    const contractors = await Contractor.find();
    res.status(200).json(contractors);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}
