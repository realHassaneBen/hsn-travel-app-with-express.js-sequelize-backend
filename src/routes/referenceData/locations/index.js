import { Router } from "express";
import { referenceDataLocations } from "../../../controllers/ReferenceData/index.js";
import { referenceDataLocationsCities } from "../../../controllers/ReferenceData/locations/index.js";
import { referenceDataUrlsCheckinLinks } from "../../../controllers/ReferenceData/URLS/index.js";

const router = Router();

router.get("/", referenceDataLocations);

router.get("/cities", referenceDataLocationsCities);

export default router;
