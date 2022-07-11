import home from "./home.js";
import airport from "./airport.js";
import airline from "./airline.js";
import booking from "./booking.js";
import shopping from "./shopping/index.js";
3;
import referenceData from "./referenceData/index.js";

import { Router } from "express";

const router = Router();

router.use("/", home);
router.use("/airport", airport);
router.use("/airline", airline);
router.use("/booking", booking);
router.use("/shopping", shopping);
router.use("/referenceData", referenceData);

export default router;
