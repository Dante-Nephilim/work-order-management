import WorkOrder from "../models/WorkOrder.js";

export async function createWorkOrder(req, res) {
  const { contractorId, paymentTerms, dueDate, locations } = req.body;
  try {
    const workOrder = await WorkOrder.findOne({ contractorId });
    if (workOrder) {
      return res.status(400).json({ error: "Contractor already has a work order" });
    } else {
      const newWorkOrder = new WorkOrder({
        contractorId,
        paymentTerms,
        dueDate,
        locations,
      });
      await newWorkOrder.save();
      return res.status(201).json({ message: "Work order created successfully" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}

export async function getWorkOrders(req, res) {
  try {
    const workOrders = await WorkOrder.find();
    res.status(200).json(workOrders);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}

export async function getWorkOrdersSortedByPaymentTerms(req, res) {
  try {
    const workOrders = await WorkOrder.find().sort({ paymentTerms: -1 });
    res.status(200).json(workOrders);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}

export async function getWorkOrdersFilteredByDate(req, res) {
  const { date } = req.body;
  try {
    const workOrders = await WorkOrder.find({ dueDate: new Date(date) });
    res.status(200).json(workOrders);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}
