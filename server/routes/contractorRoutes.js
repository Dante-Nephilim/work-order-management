import { Router } from "express";
import { createContractor, getContractors } from "../controllers/contractorController.js";

const contractorRouter = Router();

contractorRouter.post("/create", createContractor);
contractorRouter.get("/all", getContractors);

export default contractorRouter;
