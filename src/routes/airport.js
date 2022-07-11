import { Router } from "express";
import { directDestinations } from "../controllers/Airport.js";

const router = Router();

router.get("/direct-destinations", directDestinations);

export default router;
