import { Router } from "express";
import { createWorkOrder, getWorkOrders } from "../controllers/workorderController.js";

const workorderRouter = Router();

workorderRouter.post("/create", createWorkOrder);
workorderRouter.get("/all", getWorkOrders);

export default workorderRouter;
