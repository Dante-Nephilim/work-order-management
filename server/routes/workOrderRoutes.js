import { Router } from "express";
import {
  createWorkOrder,
  getWorkOrders,
  getWorkOrdersFilteredByDate,
  getWorkOrdersSortedByPaymentTerms,
} from "../controllers/workOrderController.js";

const workOrderRouter = Router();

workOrderRouter.post("/", createWorkOrder);
workOrderRouter.get("/", getWorkOrders);
workOrderRouter.get("/sortByPaymentTerms", getWorkOrdersSortedByPaymentTerms);
workOrderRouter.post("/filterByDate", getWorkOrdersFilteredByDate);

export default workOrderRouter;
