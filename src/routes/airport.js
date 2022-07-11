import { Router } from "express";
import { airportDirectDestinations } from "../controllers/Airport.js";

const router = Router();

router.get("/direct-destinations", airportDirectDestinations);

export default router;
