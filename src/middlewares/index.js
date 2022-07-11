import { Router } from "express";
import bodyParser from "./BodyParser.js";
import cors from "cors";

const router = Router();

const corsConfig = {
    origin: true,
    credentials: true,
};

router.use(cors(corsConfig));
router.options("*", cors(corsConfig));
router.use(bodyParser);

export default router;
