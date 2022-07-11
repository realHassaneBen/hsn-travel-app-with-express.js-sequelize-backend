import { Router } from "express";
import { destinations } from "../controllers/Airline.js";

const router = Router();

router.get("/destinations", destinations);

export default router;
