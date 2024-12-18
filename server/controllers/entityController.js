import Entity from "../models/Entity.js";

export async function createEntity(req, res) {
  const { name } = req.body;
  try {
    const entity = await Entity.findOne({ name });
    if (entity) {
      return res.status(400).json({ error: "Name already exists" });
    } else {
      const newEntity = new Entity({ name });
      await newEntity.save();
      return res.status(201).json({ message: "Entity created successfully" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}

export async function getEntities(req, res) {
  try {
    const entities = await Entity.find();
    res.status(200).json(entities);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: err.message });
  }
}
