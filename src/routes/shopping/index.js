import { Router } from "express";
import {
    flightDates,
    flightDestinations,
    flightOffersSearch,
} from "../../controllers/Shopping/index.js";
import availability from "./availability/index.js";

const router = Router();

router.use("/availability", availability);

router.get("/flightDestinations", flightDestinations);
router.get("/flightDates", flightDates);
router.get("/flightOffersSearch", flightOffersSearch);

export default router;
