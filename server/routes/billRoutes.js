import { Router } from "express";
import { createBill, getBills } from "../controllers/billController.js";

const billRouter = Router();

billRouter.post("/create", createBill);
billRouter.get("/all", getBills);

export default billRouter;
