import Bill from "../models/Bill.js";
import WorkOrder from "../models/WorkOrder.js";
import Location from "../models/Location.js";
import Contractor from "../models/Contractor.js";

async function generateBillNumber() {
  const count = await Bill.countDocuments();
  const num = count + 1;
  return `BILL-${String(num).padStart(2, "0")}`;
}

export async function runBills(req, res) {
  try {
    const completedLocations = await Location.find({ state: "Completed" });

    if (completedLocations.length === 0) {
      return res.json({ message: "No completed locations available for billing", bills: [] });
    }

    const contractorMap = {};

    for (const loc of completedLocations) {
      const wos = await WorkOrder.find({ "locations.locationId": loc._id });
      if (wos.length > 0) {
        const wo = wos[0];

        const woLoc = wo.locations.find((l) => l.locationId.toString() === loc._id.toString());
        if (woLoc) {
          if (!contractorMap[wo.contractorId]) {
            contractorMap[wo.contractorId] = [];
          }
          contractorMap[wo.contractorId].push({
            locationId: loc._id,
            name: loc.name,
            rate: woLoc.rate,
            quantity: woLoc.quantity,
          });
        }
      }
    }

    const bills = [];
    for (const contractorId in contractorMap) {
      const locations = contractorMap[contractorId];
      if (locations.length === 0) continue;

      const billNumber = await generateBillNumber();
      const bill = new Bill({ billNumber, contractorId, locations });
      await bill.save();
      bills.push(bill);
    }

    res.json({ message: "Bills generated", bills });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}

export async function getBills(req, res) {
  try {
    const bills = await Bill.find().populate("contractorId", "name phone");
    res.status(200).json(bills);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}
