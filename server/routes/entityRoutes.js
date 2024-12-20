import { Router } from "express";
import { createEntity, getEntities } from "../controllers/entityController.js";

const entityRouter = Router();

entityRouter.post("/", createEntity);
entityRouter.get("/", getEntities);

export default entityRouter;
