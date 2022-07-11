import { Router } from "express";
import { welcome } from "../controllers/Home.js";

const router = Router();

router.get("/", welcome);

export default router;
