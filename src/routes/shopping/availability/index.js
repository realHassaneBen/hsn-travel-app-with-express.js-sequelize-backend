import { Router } from "express";
import { ShoppingAvailabilityFlightAvailabilities } from "../../../controllers/Shopping/Availability/index.js";

const router = Router();

router.get("/flightAvailabilities", ShoppingAvailabilityFlightAvailabilities);

export default router;
