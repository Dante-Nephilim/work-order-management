import { Router } from "express";
import { createEntity, getEntities } from "../controllers/entityController.js";

const entityRouter = Router();

entityRouter.post("/create", createEntity);
entityRouter.get("/all", getEntities);

export default entityRouter;
