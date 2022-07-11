import { Router } from "express";
import { travelAnalyticsAirTrafficBooked } from "../../../../controllers/travel/analytics/airTraffic/index.js";

const router = Router();

router.get("/booked", travelAnalyticsAirTrafficBooked);

export default router;
