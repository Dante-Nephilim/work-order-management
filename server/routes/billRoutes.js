import { Router } from "express";
import { runBills, getBills } from "../controllers/billController.js";
const router = Router();

router.post("/run", runBills);
router.get("/", getBills);

export default router;
