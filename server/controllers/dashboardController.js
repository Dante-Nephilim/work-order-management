import Contractor from "../models/Contractor.js";
import Entity from "../models/Entity.js";
import Location from "../models/Location.js";
import WorkOrder from "../models/WorkOrder.js";
import Bill from "../models/Bill.js";

export function getDashboardData(req, res) {
  Promise.all([
    Contractor.countDocuments(),
    Entity.countDocuments(),
    Location.countDocuments(),
    WorkOrder.countDocuments(),
    Bill.countDocuments(),
  ])
    .then(([totalContractors, totalEntities, totalLocations, totalWorkOrders, totalBills]) => {
      res.json({
        totalContractors,
        totalEntities,
        totalLocations,
        totalWorkOrders,
        totalBills,
      });
    })
    .catch((err) => {
      console.error(err);
      res.status(500).json({ error: err.message });
    });
}
