import { Router } from "express";
import { flightAvailabilities } from "../../../controllers/Shopping/Availability/index.js";

const router = Router();

router.get("/flightAvailabilities", flightAvailabilities);

export default router;
