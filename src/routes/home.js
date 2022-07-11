import { Router } from "express";
import { homeWelcome } from "../controllers/Home.js";

const router = Router();

router.get("/", homeWelcome);

export default router;
