import { Router } from "express";
import {
  createWorkOrder,
  getWorkOrders,
  getWorkOrdersFilteredByDate,
  getWorkOrdersSortedByPaymentTerms,
} from "../controllers/workOrderController.js";

const workOrderRouter = Router();

workOrderRouter.post("/create", createWorkOrder);
workOrderRouter.get("/all", getWorkOrders);
workOrderRouter.get("/sortByPaymentTerms", getWorkOrdersSortedByPaymentTerms);
workOrderRouter.post("/filterByDate", getWorkOrdersFilteredByDate);

export default workOrderRouter;
