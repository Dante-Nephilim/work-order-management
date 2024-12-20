import { Router } from "express";
import { createContractor, getContractors } from "../controllers/contractorController.js";

const contractorRouter = Router();

contractorRouter.post("/", createContractor);
contractorRouter.get("/", getContractors);

export default contractorRouter;
