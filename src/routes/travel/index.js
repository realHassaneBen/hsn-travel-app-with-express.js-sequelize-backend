import { Router } from "express";
import { travelTripParser } from "../../controllers/travel/index.js";
import analytics from "./analytics/index.js";

const router = Router();

router.use("/analytics", analytics);
router.post("/tripParser", travelTripParser);

export default router;
