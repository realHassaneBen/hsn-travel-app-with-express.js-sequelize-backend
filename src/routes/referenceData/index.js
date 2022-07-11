import { Router } from "express";
import {
    referenceDataAirlines,
    referenceDataLocations,
    referenceDataLocation,
} from "../../controllers/ReferenceData/index.js";
import urls from "./urls/index.js";
import locations from "./locations/index.js";

const router = Router();

router.use("/urls", urls);
router.use("/locations", locations);

router.get("/airlines", referenceDataAirlines);
router.get("/location", referenceDataLocation);

export default router;
