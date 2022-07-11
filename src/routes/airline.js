import { Router } from "express";
import { airlineDestinations } from "../controllers/Airline.js";

const router = Router();

router.get("/destinations", airlineDestinations);

export default router;
