import { Router } from "express";
import { createLocation, getLocations, markLocationAsCompleted } from "../controllers/locationController.js";

const locationRouter = Router();

locationRouter.post("/create", createLocation);
locationRouter.get("/all", getLocations);
locationRouter.post("/mark-completed", markLocationAsCompleted);

export default locationRouter;
