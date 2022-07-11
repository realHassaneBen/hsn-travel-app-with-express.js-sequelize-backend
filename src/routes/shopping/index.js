import { Router } from "express";
import {
    ShoppingFlightDates,
    ShoppingFlightDestinations,
    shoppingFlightOffersSearch,
} from "../../controllers/Shopping/index.js";
import availability from "./availability/index.js";

const router = Router();

router.use("/availability", availability);

router.get("/flightDestinations", ShoppingFlightDestinations);
router.get("/flightDates", ShoppingFlightDates);
router.get("/flightOffersSearch", shoppingFlightOffersSearch);

export default router;
