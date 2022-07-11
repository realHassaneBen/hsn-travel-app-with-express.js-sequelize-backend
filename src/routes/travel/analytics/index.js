import { Router } from "express";
import airTraffic from "./airTraffic/index.js";

const router = Router();

router.use("/airTraffic", airTraffic);

export default router;
