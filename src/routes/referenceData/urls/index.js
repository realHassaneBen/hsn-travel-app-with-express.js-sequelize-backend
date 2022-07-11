import { Router } from "express";
import { referenceDataUrlsCheckinLinks } from "../../../controllers/ReferenceData/URLS/index.js";

const router = Router();

router.get("/checkinLinks", referenceDataUrlsCheckinLinks);

export default router;
