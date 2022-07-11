import { Router } from "express";
import { checkinLinks } from "../../../controllers/ReferenceData/URLS/index.js";

const router = Router();

router.get("/checkinLinks", checkinLinks);

export default router;
