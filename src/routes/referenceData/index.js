import { Router } from "express";
import {
    airlines,
    locations,
    location,
} from "../../controllers/ReferenceData/index.js";
import urls from "./urls/index.js";

const router = Router();

router.use("/urls", urls);
router.get("/airlines", airlines);
router.get("/locations", locations);
router.get("/location", location);

export default router;
