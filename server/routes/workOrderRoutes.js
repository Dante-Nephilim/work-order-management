import { Router } from "express";
import { createWorkOrder, getWorkOrders } from "../controllers/workOrderController.js";

const workOrderRouter = Router();

workOrderRouter.post("/create", createWorkOrder);
workOrderRouter.get("/all", getWorkOrders);

export default workOrderRouter;
