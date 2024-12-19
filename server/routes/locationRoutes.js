import { Router } from "express";
import {
  createLocation,
  getLocations,
  markLocationCompleted,
  getLocationContractors,
} from "../controllers/locationController.js";

const locationRouter = Router();

locationRouter.post("/create", createLocation);
locationRouter.get("/all", getLocations);
locationRouter.get("/:id/contractors", getLocationContractors);
locationRouter.put("/:id/complete", markLocationCompleted);

export default locationRouter;
