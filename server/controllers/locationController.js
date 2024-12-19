import Location from "../models/Location.js";

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

export async function getLocations(req, res) {
  try {
    const locations = await Location.find();
    res.status(200).json(locations);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}

export async function markLocationAsCompleted(req, res) {
  const { locationId } = req.body;
  try {
    const location = await Location.findById(locationId);
    if (!location) {
      return res.status(400).json({ error: "Location not found" });
    }
    location.completed = true;
    await location.save();
    return res.status(200).json({ message: "Location marked as completed" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}
