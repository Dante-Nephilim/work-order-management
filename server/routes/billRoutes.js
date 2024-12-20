import { Router } from "express";
import { runBills, getBills } from "../controllers/billController.js";
const billRouter = Router();

billRouter.post("/run", runBills);
billRouter.get("/", getBills);

export default billRouter;
