import { Router } from "express";
import {
  createLocation,
  getLocations,
  markLocationCompleted,
  getLocationContractors,
  getLocationsSortedByName,
  getLocationsCompleted,
} from "../controllers/locationController.js";

const locationRouter = Router();

locationRouter.post("/", createLocation);
locationRouter.get("/", getLocations);
locationRouter.get("/:id/contractors", getLocationContractors);
locationRouter.put("/:id/complete", markLocationCompleted);
locationRouter.get("/sortByName", getLocationsSortedByName);
locationRouter.get("/completed", getLocationsCompleted);

export default locationRouter;
