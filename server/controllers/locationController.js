import Location from "../models/Location.js";
import WorkOrder from "../models/WorkOrder.js";

export async function createLocation(req, res) {
  const { name, entityId } = req.body;
  try {
    const location = await Location.findOne({ name });
    if (location) {
      return res.status(400).json({ error: "Name already exists" });
    } else {
      const newLocation = new Location({ name, entityId });
      await newLocation.save();
      return res.status(201).json({ message: "Location created successfully" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}

export async function getLocationsCompleted(req, res) {
  try {
    const locations = await Location.find({ state: "Completed" });
    res.status(200).json(locations);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}

export async function getLocationsSortedByName(req, res) {
  try {
    const locations = await Location.find().sort({ name: 1 });
    res.status(200).json(locations);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}

export async function getLocations(req, res) {
  try {
    const locations = await Location.find();
    res.status(200).json(locations);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}

export async function markLocationCompleted(req, res) {
  const { id } = req.params;
  const { contractorId } = req.body;

  try {
    const location = await Location.findById(id);
    if (!location) return res.status(404).json({ error: "Location not found" });

    location.state = "Completed";
    location.completedBy = contractorId;
    await location.save();

    res.json({ message: "Location marked as completed", location });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}

export async function getLocationContractors(req, res) {
  const { id } = req.params;
  try {
    const wos = await WorkOrder.find({ "locations.locationId": id }).populate("contractorId", "name phone");
    const contractorSet = new Set();
    wos.forEach((wo) => {
      contractorSet.add(
        JSON.stringify({ _id: wo.contractorId._id, name: wo.contractorId.name, phone: wo.contractorId.phone })
      );
    });
    const contractors = Array.from(contractorSet).map((c) => JSON.parse(c));
    res.json(contractors);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
}
